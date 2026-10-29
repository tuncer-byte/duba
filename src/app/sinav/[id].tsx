import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, Switch, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/components/Icon';
import { MediaView } from '@/components/MediaView';
import { Mascot } from '@/components/Mascot';
import { Bar, Button, IconButton, Pill, Sheet, T } from '@/components/ui';
import { courseById } from '@/data/courses';
import { questionById } from '@/data/questions';
import { EXAM_MINUTES, EXAM_TOTAL, type Answers } from '@/data/types';
import { gradeAttempt } from '@/lib/grade';
import { freeStatus, lockReason } from '@/lib/premium';
import { resolveExam } from '@/lib/resolveExam';
import { fmtClock } from '@/lib/stats';
import { useApp } from '@/store/app';
import { colors, fonts } from '@/theme';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function ExamRunner() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { attempts, addAttempt, saved, addSaved, premium, seen, markSeen } = useApp();

  // Sınav bir kez kurulur (rastgele setler yeniden render'da değişmesin)
  const exam = useMemo(() => resolveExam(String(id), attempts, saved), [id]); // eslint-disable-line react-hooks/exhaustive-deps
  const timed = exam?.kind !== 'yanlislar';
  const total = exam?.questionIds.length ?? 0;
  const limit = EXAM_MINUTES * 60;

  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [learning, setLearning] = useState(true);
  const [nav, setNav] = useState(false);
  const [quit, setQuit] = useState(false);
  const startedAt = useRef(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const scroller = useRef<React.ComponentRef<typeof ScrollView>>(null);
  const finished = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - startedAt.current) / 1000)), 1000);
    return () => clearInterval(t);
  }, []);

  const finish = (auto = false) => {
    if (!exam || finished.current) return;
    finished.current = true;
    const dur = Math.min(Math.floor((Date.now() - startedAt.current) / 1000), timed ? limit : 1e9);
    const attempt = gradeAttempt(exam, answers, dur);
    addAttempt(attempt);
    const flagged = Object.keys(flags).filter((k) => flags[k]);
    if (flagged.length) addSaved(flagged);
    if (auto) Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {});
    router.replace(`/sonuc/${attempt.id}`);
  };

  const remaining = Math.max(0, limit - elapsed);
  useEffect(() => {
    if (timed && remaining === 0 && exam) finish(true);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { scroller.current?.scrollTo({ y: 0, animated: false }); }, [i]);

  if (!exam) {
    return (
      <View style={{ flex: 1, padding: 24, justifyContent: 'center', gap: 16, paddingTop: insets.top + 24 }}>
        <T v="h2">Çözülecek soru bulunamadı</T>
        <T v="body" color={colors.ink2}>Yanlış havuzun boş olabilir ya da bu konuda henüz soru yok.</T>
        <Button label="Geri dön" onPress={() => router.back()} />
      </View>
    );
  }

  const q = questionById(exam.questionIds[i])!;
  const chosen = answers[q.id] ?? null;
  const locked = learning && chosen !== null;
  const answeredCount = Object.values(answers).filter((a) => a !== null && a !== undefined).length;
  const lowTime = timed && remaining <= 300;
  const lock = lockReason(q.id, seen, premium);
  const fs = freeStatus(seen);
  const lowQuota = !premium && fs.leftTotal > 0 && fs.leftTotal <= 10;
  const skipLocked = () => { if (i < total - 1) setI(i + 1); else setNav(true); };

  const choose = (k: number) => {
    if (locked || lock) return;
    markSeen(q.id);
    setAnswers((a) => ({ ...a, [q.id]: a[q.id] === k && !learning ? null : k }));
    Haptics.selectionAsync().catch(() => {});
  };

  const stateOf = (k: number) => {
    if (learning && chosen !== null) {
      if (k === q.answer) return 'right';
      if (k === chosen) return 'wrong';
      return 'idle';
    }
    return chosen === k ? 'picked' : 'idle';
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <View style={{ paddingTop: insets.top + 12, paddingHorizontal: 20, backgroundColor: '#fff', gap: 12, paddingBottom: 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <IconButton icon="x" label="Sınavdan çık" bg={colors.bg} border={false} onPress={() => setQuit(true)} />
          <Pressable style={{ flex: 1 }} onPress={() => setNav(true)} accessibilityRole="button" accessibilityLabel="Soru listesi">
            <T v="small" color={colors.mute} numberOfLines={1}>{exam.title}</T>
            <T v="title">Soru {i + 1} / {total} <T v="caption" color={colors.primary}> · liste</T></T>
          </Pressable>
          {timed && (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, backgroundColor: lowTime ? colors.redSoft : colors.amberSoft, borderRadius: 16, paddingHorizontal: 14, height: 44 }}>
              <Icon name="timer" size={20} color={lowTime ? colors.red : colors.amber} />
              <T v="title" color={lowTime ? colors.red : colors.amber} style={{ fontVariant: ['tabular-nums'] }}>{fmtClock(remaining)}</T>
            </View>
          )}
        </View>
        <Bar value={(i + 1) / total} height={8} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12 }}>
          <T v="bodyStrong">Öğrenme modu</T>
          <Switch value={learning} onValueChange={setLearning} trackColor={{ true: colors.green, false: '#CBD5D3' }} thumbColor="#fff" />
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: colors.border }} />

      <ScrollView ref={scroller} contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 32 }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Pill label={courseById(q.courseId).name} />
          <Pressable
            accessibilityRole="button" onPress={() => setFlags((f) => ({ ...f, [q.id]: !f[q.id] }))}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 8, height: 44, paddingHorizontal: 16, borderRadius: 14, borderWidth: 1.5, borderColor: flags[q.id] ? colors.amber : colors.border, backgroundColor: flags[q.id] ? colors.amberSoft : '#fff' }}
          >
            <Icon name="flag" size={20} color={flags[q.id] ? colors.amber : colors.ink} />
            <T v="bodyStrong" color={flags[q.id] ? colors.amber : colors.ink}>Sonra bak</T>
          </Pressable>
        </View>

        {lowQuota && !lock && (
          <Pressable onPress={() => router.push('/premium?reason=default')} accessibilityRole="button" style={{ backgroundColor: colors.amberSoft, borderRadius: 14, paddingVertical: 8, paddingHorizontal: 12 }}>
            <T v="small" color={colors.amber} style={{ fontFamily: fonts.bodySemi }}>Ücretsiz hakkında {fs.leftTotal} soru kaldı · Premium'a göz at</T>
          </Pressable>
        )}
        {lock ? (
          <View style={{ alignItems: 'center', gap: 12, backgroundColor: '#fff', borderRadius: 24, borderWidth: 1, borderColor: colors.border, padding: 20 }}>
            <Mascot name="think" height={130} />
            <T v="h2" style={{ textAlign: 'center' }}>{lock === 'visual' ? 'Bu görselli bir soru' : 'Ücretsiz hakkın doldu'}</T>
            <T v="body" color={colors.ink2} style={{ textAlign: 'center' }}>
              {lock === 'visual' ? 'Ücretsiz görselli soru hakkını kullandın. Premium ile tüm görselli sorular açılır.' : 'Bu soruyu görmek için Premium\'a geç. Tek ödeme, ömür boyu sınırsız.'}
            </T>
            <Button label="Premium'a geç" onPress={() => router.push(`/premium?reason=${lock}`)} style={{ alignSelf: 'stretch' }} />
            <Button kind="soft" label="Bu soruyu boş geç" onPress={skipLocked} style={{ alignSelf: 'stretch' }} />
          </View>
        ) : (
          <>
        <T v="h2" style={{ fontSize: 17, lineHeight: 24 }}>{q.text}</T>
        <MediaView media={q.media} />

        <View style={{ gap: 12 }}>
          {q.options.map((opt, k) => {
            const st = stateOf(k);
            const palette = {
              idle: { bg: '#fff', border: colors.border, chip: colors.bg, chipFg: colors.ink },
              picked: { bg: colors.primarySoft, border: colors.primary, chip: colors.primary, chipFg: '#fff' },
              right: { bg: colors.greenSoft, border: colors.green, chip: colors.green, chipFg: '#fff' },
              wrong: { bg: colors.redSoft, border: colors.red, chip: colors.red, chipFg: '#fff' },
            }[st];
            return (
              <Pressable
                key={k} accessibilityRole="button" accessibilityState={{ selected: st === 'picked', disabled: locked }} onPress={() => choose(k)}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: palette.bg, borderWidth: 2, borderColor: palette.border, borderRadius: 22, padding: 14, minHeight: 76 }}
              >
                <View style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: palette.chip, alignItems: 'center', justifyContent: 'center' }}>
                  {st === 'right' ? <Icon name="check" size={20} color="#fff" stroke={2.6} /> : st === 'wrong' ? <Icon name="x" size={20} color="#fff" stroke={2.6} /> : <T v="bodyStrong" color={palette.chipFg} style={{ fontFamily: fonts.bold }}>{LETTERS[k]}</T>}
                </View>
                <T v="body" style={{ flex: 1, lineHeight: 21 }}>{opt}</T>
              </Pressable>
            );
          })}
        </View>

        {learning && chosen !== null && (
          <View style={{ backgroundColor: chosen === q.answer ? colors.greenSoft : colors.amberSoft, borderRadius: 20, padding: 16, flexDirection: 'row', gap: 12 }}>
            <Mascot name={chosen === q.answer ? 'happy' : 'sad'} height={64} />
            <View style={{ flex: 1, gap: 2 }}>
              <T v="bodyStrong" color={chosen === q.answer ? colors.greenInk : colors.amber}>
                {chosen === q.answer ? 'Doğru!' : `Doğru cevap: ${LETTERS[q.answer]}`}
              </T>
              <T v="small" color={colors.ink2}>{q.explanation}</T>
            </View>
          </View>
        )}
          </>
        )}
      </ScrollView>

      <View style={{ flexDirection: 'row', gap: 12, padding: 20, paddingBottom: Math.max(insets.bottom, 12) + 8, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: colors.border }}>
        <Button kind="outline" label="Önceki" disabled={i === 0} onPress={() => setI(i - 1)} style={{ width: 120 }} />
        {i < total - 1 ? (
          <Button label="Sonraki soru" flex onPress={() => setI(i + 1)} />
        ) : (
          <Button label="Sınavı bitir" flex onPress={() => setNav(true)} />
        )}
      </View>

      {/* Soru listesi + bitir */}
      <Sheet visible={nav} onClose={() => setNav(false)}>
        <T v="h2">Soru listesi</T>
        <T v="small" color={colors.ink2}>{answeredCount} cevaplandı · {total - answeredCount} boş · {Object.values(flags).filter(Boolean).length} işaretli</T>
        <ScrollView style={{ maxHeight: 300 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {exam.questionIds.map((qid, k) => {
              const a = answers[qid];
              const done = a !== null && a !== undefined;
              return (
                <Pressable key={qid} accessibilityRole="button" accessibilityLabel={`Soru ${k + 1}`} onPress={() => { setI(k); setNav(false); }}
                  style={{ width: 48, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: done ? colors.primary : '#fff', borderWidth: 2, borderColor: flags[qid] ? colors.amberLine : k === i ? colors.ink : done ? colors.primary : colors.border }}>
                  <T v="bodyStrong" color={done ? '#fff' : colors.ink}>{k + 1}</T>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
        <T v="small" color={colors.mute}>{timed ? `Boş bırakma: yanlışlar doğruyu götürmez. Geçmek için en az 35 doğru gerekir (${EXAM_TOTAL} soru).` : 'Pratik modunda süre yok.'}</T>
        <Button label="Sınavı bitir" onPress={() => { setNav(false); finish(); }} />
        <Button kind="outline" label="Devam et" onPress={() => setNav(false)} />
      </Sheet>

      <Sheet visible={quit} onClose={() => setQuit(false)}>
        <T v="h2">Sınavdan çıkmak istiyor musun?</T>
        <T v="body" color={colors.ink2}>Çıkarsan bu denemedeki cevapların kaydedilmez.</T>
        <Button label="Sınava devam et" onPress={() => setQuit(false)} />
        <Button kind="outline" label="Çık" onPress={() => { finished.current = true; setQuit(false); router.back(); }} />
      </Sheet>
    </View>
  );
}
