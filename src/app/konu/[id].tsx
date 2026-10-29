import * as Speech from 'expo-speech';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Linking, Pressable, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/components/Icon';
import { Mascot } from '@/components/Mascot';
import { MediaView } from '@/components/MediaView';
import { Sign } from '@/components/Sign';
import { SIGN_META } from '@/data/signMeta';
import { Button, IconButton, T } from '@/components/ui';
import { courseById, topicById } from '@/data/courses';
import { lessonByTopic } from '@/data/lessons';
import { PHOTOS } from '@/data/photos';
import { QUESTIONS } from '@/data/questions';
import { useApp } from '@/store/app';
import { colors, fonts } from '@/theme';

const NUM = [
  { bg: colors.primary, fg: '#fff' },
  { bg: colors.primaryMid, fg: '#fff' },
  { bg: colors.primaryTint, fg: colors.primary },
  { bg: colors.track, fg: colors.ink2 },
];
const SCALE = [1, 1.15, 1.3];

export default function Lesson() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { lessons, setLesson } = useApp();
  const topic = topicById(String(id));
  const lesson = lessonByTopic(String(id));
  const saved = lessons[String(id)];
  const [step, setStep] = useState(saved && !saved.done ? Math.min(saved.step, (lesson?.steps.length ?? 1) - 1) : 0);
  const [view, setView] = useState<'outline' | 'steps'>('outline');
  const [scale, setScale] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => () => { Speech.stop(); }, []);
  useEffect(() => { Speech.stop(); setSpeaking(false); }, [step]);

  if (!topic || !lesson) {
    return (
      <View style={{ flex: 1, padding: 24, paddingTop: insets.top + 24, gap: 16 }}>
        <IconButton icon="back" label="Geri" onPress={() => router.back()} />
        <T v="h2">Bu konu anlatımı yakında</T>
        <T v="body" color={colors.ink2}>Konu anlatımı hazırlanıyor. Şimdilik ilgili çıkmış sorulardan çalışabilirsin.</T>
      </View>
    );
  }

  const n = lesson.steps.length;
  const complete = step >= n;
  const s = complete ? null : lesson.steps[step];
  const k = SCALE[scale];
  const practiceCount = QUESTIONS.filter((q) => q.topicId === topic.id).length;

  const go = (next: number) => {
    setStep(next);
    setLesson(topic.id, { step: Math.min(next, n - 1), done: next >= n || !!saved?.done });
  };

  const speak = () => {
    if (!s) return;
    if (speaking) { Speech.stop(); setSpeaking(false); return; }
    const text = [s.title, s.intro, ...(s.items ?? []).map((i) => `${i.title}. ${i.desc ?? ''}`), s.tip ? `Akılda kalsın. ${s.tip}` : ''].filter(Boolean).join('. ');
    Speech.speak(text, { language: 'tr-TR', onDone: () => setSpeaking(false), onStopped: () => setSpeaking(false) });
    setSpeaking(true);
  };

  if (view === 'outline') {
    const doneSteps = saved?.done ? n : saved ? Math.min(saved.step, n) : 0;
    const started = !!saved && !saved.done;
    return (
      <View style={{ flex: 1, backgroundColor: colors.bg }}>
        <ScrollView contentContainerStyle={{ paddingTop: insets.top + 12, paddingHorizontal: 20, paddingBottom: 24, gap: 16 }} showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <IconButton icon="back" label="Geri" onPress={() => router.back()} />
            <T v="label" color={colors.primary} style={{ textTransform: 'uppercase', flex: 1 }}>{courseById(topic.courseId).name}</T>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <View style={{ flex: 1, gap: 8 }}>
              <T v="h1">{topic.title}</T>
              <T v="small" color={colors.mute}>{n} bölüm · yaklaşık {topic.minutes} dk{practiceCount > 0 ? ` · ${practiceCount} soru` : ''}</T>
            </View>
            <Mascot name="study" height={96} />
          </View>
          <T v="title">Bu konuda neler var?</T>
          <View style={{ backgroundColor: '#fff', borderRadius: 22, borderWidth: 1, borderColor: colors.border, overflow: 'hidden' }}>
            {lesson.steps.map((st, i) => {
              const done = saved?.done || i < doneSteps;
              return (
                <Pressable key={i} accessibilityRole="button" onPress={() => { setStep(i); setView('steps'); }}
                  style={{ flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: i === n - 1 ? 0 : 1, borderBottomColor: colors.border }}>
                  <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: done ? colors.green : colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
                    {done ? <Icon name="check" size={16} color="#fff" stroke={3} /> : <T v="small" color={colors.primary} style={{ fontFamily: fonts.bodyBold }}>{i + 1}</T>}
                  </View>
                  <T v="bodyStrong" style={{ flex: 1 }}>{st.title}</T>
                  <Icon name="forward" size={18} color={colors.mute} />
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', gap: 12, padding: 20, paddingBottom: Math.max(insets.bottom, 12) + 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: colors.border }}>
          {practiceCount > 0 && <Button kind="outline" label="Sorular" onPress={() => router.push(`/sinav/konu-${topic.id}`)} style={{ width: 120 }} />}
          <Button label={saved?.done ? 'Baştan oku' : started ? 'Devam et' : 'Konuya başla'} flex onPress={() => { setStep(started ? Math.min(saved!.step, n - 1) : 0); setView('steps'); }} />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ paddingTop: insets.top + 12, paddingHorizontal: 20, gap: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <IconButton icon="back" label="Konu içeriği" onPress={() => setView('outline')} />
          <View style={{ flex: 1 }}>
            <T v="label" color={colors.primary} style={{ textTransform: 'uppercase' }}>{courseById(topic.courseId).name}</T>
            <T v="title" numberOfLines={2}>{topic.title}</T>
          </View>
          {!complete && <IconButton icon="volume" label="Sesli oku" color={speaking ? colors.primary : colors.ink} bg={speaking ? colors.primarySoft : '#fff'} onPress={speak} />}
          <Pressable accessibilityRole="button" accessibilityLabel="Yazı boyutu" onPress={() => setScale((scale + 1) % SCALE.length)}
            style={{ width: 50, height: 50, borderRadius: 16, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' }}>
            <T v="title" style={{ fontSize: 13 + scale * 2 }}>Aa</T>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {lesson.steps.map((_, i) => (
            <View key={i} style={{ flex: 1, height: 6, borderRadius: 3, backgroundColor: i <= Math.min(step, n - 1) && !(complete && false) ? colors.primary : colors.track }} />
          ))}
        </View>
        <T v="body" color={colors.mute} style={{ fontFamily: fonts.bodySemi }}>{complete ? 'Tamamlandı' : `Adım ${step + 1} / ${n}`}</T>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        {s ? (
          <>
            <T v="h1" style={{ fontSize: 23 * (k > 1 ? 0.95 : 1), lineHeight: 29 * k * 0.95 }}>{s.title}</T>
            {s.intro && <T v="body" color={colors.ink2} style={{ fontSize: 15 * k, lineHeight: 23 * k }}>{s.intro}</T>}
            {s.signs && s.signs.length > 0 && (
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                {s.signs.map((id) => {
                  const m = SIGN_META.find((x) => x.id === id);
                  return (
                    <View key={id} style={{ width: '30%', flexGrow: 1, alignItems: 'center', gap: 6, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 18, padding: 10 }}>
                      <Sign id={id} size={72} />
                      <T v="caption" color={colors.ink2} style={{ textAlign: 'center' }}>{m?.name ?? id}</T>
                    </View>
                  );
                })}
              </View>
            )}
            {s.scene && <MediaView media={{ kind: 'scene', scene: s.scene }} />}
            {s.photos && s.photos.length > 0 && (
              <View style={{ gap: 12 }}>
                {s.photos.map((key) => {
                  const ph = PHOTOS[key];
                  if (!ph) return null;
                  return (
                    <View key={key} style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 20, overflow: 'hidden' }}>
                      <Image source={ph.src} accessibilityLabel={ph.caption} accessibilityIgnoresInvertColors resizeMode="contain" style={{ width: '100%', height: 220, backgroundColor: '#fff' }} />
                      <View style={{ padding: 12, gap: 4 }}>
                        <T v="small" color={colors.ink2} style={{ fontSize: 13 * k, lineHeight: 18 * k }}>{ph.caption}</T>
                        <Pressable onPress={() => Linking.openURL(ph.page).catch(() => {})} accessibilityRole="link" hitSlop={6}>
                          <T v="caption" color={colors.mute}>Görsel: {ph.author} · {ph.license} · Wikimedia Commons</T>
                        </Pressable>
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
            {s.items && (
              <View style={{ gap: 12 }}>
                {s.items.map((it, i) => {
                  const c = NUM[Math.min(i, 3)];
                  return (
                    <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 22, padding: 14 }}>
                      {s.ordered ? (
                        <View style={{ width: 38, height: 38, borderRadius: 12, backgroundColor: c.bg, alignItems: 'center', justifyContent: 'center' }}>
                          <T v="title" color={c.fg}>{i + 1}</T>
                        </View>
                      ) : (
                        <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary, marginHorizontal: 6 }} />
                      )}
                      <View style={{ flex: 1, gap: 2 }}>
                        <T v="title" style={{ fontSize: 15 * k, lineHeight: 21 * k }}>{it.title}</T>
                        {it.desc && <T v="small" color={colors.ink2} style={{ fontSize: 13 * k, lineHeight: 19 * k }}>{it.desc}</T>}
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
            {s.warn && (
              <View style={{ backgroundColor: colors.amberSoft, borderRadius: 18, padding: 14 }}>
                <T v="small" color={colors.amber} style={{ fontSize: 13 * k, lineHeight: 19 * k, fontFamily: fonts.bodySemi }}>{s.warn}</T>
              </View>
            )}
            {s.tip && (
              <View style={{ flexDirection: 'row', gap: 12, backgroundColor: colors.greenSoft, borderRadius: 22, padding: 16 }}>
                <Icon name="bulb" size={26} color={colors.green} />
                <View style={{ flex: 1 }}>
                  <T v="bodyStrong" color={colors.greenInk} style={{ fontFamily: fonts.bold, fontSize: 14 * k }}>Akılda kalsın</T>
                  <T v="body" color={colors.greenInk} style={{ fontSize: 14 * k, lineHeight: 21 * k }}>{s.tip}</T>
                </View>
              </View>
            )}
          </>
        ) : (
          <View style={{ gap: 16, alignItems: 'center', paddingTop: 24 }}>
            <Mascot name="cheer" height={170} />
            <T v="h1" style={{ textAlign: 'center' }}>Konuyu bitirdin!</T>
            <T v="body" color={colors.ink2} style={{ textAlign: 'center' }}>Şimdi öğrendiklerini sorularla pekiştir; kalıcı öğrenmenin en iyi yolu bu.</T>
          </View>
        )}
      </ScrollView>

      <View style={{ flexDirection: 'row', gap: 12, padding: 20, paddingBottom: Math.max(insets.bottom, 12) + 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: colors.border }}>
        {complete ? (
          <>
            <Button kind="outline" label="Konu içeriği" onPress={() => { setStep(0); setView('outline'); }} style={{ width: 150 }} />
            {practiceCount > 0 ? <Button label={`${practiceCount} soru çöz`} flex onPress={() => router.replace(`/sinav/konu-${topic.id}`)} /> : <View style={{ flex: 1 }} />}
          </>
        ) : (
          <>
            <Button kind="outline" label="Geri" onPress={() => (step === 0 ? setView('outline') : go(step - 1))} style={{ width: 120 }} />
            <Button label={step === n - 1 ? 'Konuyu bitir' : 'Sonraki adım'} flex onPress={() => go(step + 1)} />
          </>
        )}
      </View>
    </View>
  );
}
