import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { CourseIcon } from '@/components/CourseIcon';
import { Mascot } from '@/components/Mascot';
import { Bar, Card, Screen, T } from '@/components/ui';
import { COURSES, TOPICS, topicsByCourse } from '@/data/courses';
import { TopicRow } from '@/components/TopicRow';
import { useApp } from '@/store/app';
import { COURSE_COLORS, colors, fonts } from '@/theme';

export default function Topics() {
  const router = useRouter();
  const { lessons } = useApp();
  const [q, setQ] = useState('');
  const query = q.trim().toLocaleLowerCase('tr-TR');
  const results = useMemo(() => (query ? TOPICS.filter((t) => t.title.toLocaleLowerCase('tr-TR').includes(query)) : []), [query]);
  const open = (id: string) => router.push(`/konu/${id}`);

  return (
    <Screen tabBar>
      <T v="h1">Konular</T>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, borderRadius: 999, paddingHorizontal: 18, height: 52 }}>
        <Icon name="search" size={22} color={colors.mute} />
        <TextInput
          value={q} onChangeText={setQ} placeholder="Konu ara: sollama, park, kanama…" placeholderTextColor={colors.mute}
          style={{ flex: 1, fontFamily: fonts.body, fontSize: 15, color: colors.ink, height: 52, outlineStyle: 'none' } as never}
        />
      </View>

      {query ? (
        <>
          <T v="title">Sonuçlar ({results.length})</T>
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            {results.map((t, i) => <TopicRow key={t.id} topic={t} showCourse last={i === results.length - 1} onPress={() => open(t.id)} />)}
            {results.length === 0 && <View style={{ alignItems: 'center', padding: 20, gap: 8 }}><Mascot name="think" height={110} /><T v="body" color={colors.mute}>Bu aramayla eşleşen konu yok.</T></View>}
          </Card>
        </>
      ) : (
        <>
          <T v="body" color={colors.ink2}>Bir ders seç, konularını ve anlatımlarını gör.</T>
          {COURSES.map((c) => {
            const ts = topicsByCourse(c.id);
            const done = ts.filter((t) => lessons[t.id]?.done).length;
            const pct = ts.length ? done / ts.length : 0;
            const col = COURSE_COLORS[c.id];
            return (
              <Card key={c.id} onPress={() => router.push(`/ders/${c.id}`)} style={{ gap: 14 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                  <View style={{ width: 84, height: 84, alignItems: 'center', justifyContent: 'center' }}>
                    <CourseIcon name={c.id} size={80} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <T v="title">{c.name}</T>
                    <T v="small" color={colors.mute}>Sınavda {c.examQuestions} soru · {ts.length} konu</T>
                  </View>
                  <T v="title">%{Math.round(pct * 100)}</T>
                  <Icon name="forward" size={18} color={colors.mute} />
                </View>
                <Bar value={pct} color={col.fg} height={8} />
              </Card>
            );
          })}
          <Card onPress={() => router.push('/isaretler')} style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <View style={{ width: 84, height: 84, alignItems: 'center', justifyContent: 'center' }}>
              <CourseIcon name="isaret" size={80} />
            </View>
            <View style={{ flex: 1 }}>
              <T v="title">Trafik işaretleri rehberi</T>
              <T v="small" color={colors.mute}>Tüm levhalar, anlamları ve ipuçları</T>
            </View>
            <Icon name="forward" size={22} color={colors.mute} />
          </Card>
        </>
      )}
    </Screen>
  );
}
