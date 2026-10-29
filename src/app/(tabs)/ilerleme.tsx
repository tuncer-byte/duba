import { useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { NetLine } from '@/components/charts';
import { Bar, Button, Card, Screen, T } from '@/components/ui';
import { COURSES } from '@/data/courses';
import { PASS_CORRECT } from '@/data/types';
import { courseAccuracy, sortedAttempts } from '@/lib/grade';
import { topicAccuracy } from '@/lib/stats';
import { useApp } from '@/store/app';
import { COURSE_COLORS, colors } from '@/theme';

export default function Progress() {
  const router = useRouter();
  const { attempts } = useApp();
  const sorted = useMemo(() => sortedAttempts(attempts), [attempts]);
  const acc = useMemo(() => courseAccuracy(attempts), [attempts]);
  const weak = useMemo(() => topicAccuracy(attempts).filter((t) => t.total >= 2).sort((a, b) => a.rate - b.rate).slice(0, 3), [attempts]);

  if (sorted.length === 0) {
    return (
      <Screen tabBar>
        <T v="h1">İlerleme</T>
        <Card style={{ gap: 10, alignItems: 'flex-start' }}>
          <T v="title">Henüz veri yok</T>
          <T v="body" color={colors.ink2}>İlk deneme sınavını çözdüğünde doğru sayın, derslere göre başarın ve zayıf konuların burada görünecek.</T>
          <Button label="Deneme sınavına başla" icon="play" onPress={() => router.push('/sinav/deneme')} />
        </Card>
      </Screen>
    );
  }

  const avg = Math.round(sorted.reduce((s, a) => s + a.correct, 0) / sorted.length);
  const best = Math.max(...sorted.map((a) => a.correct));
  const passed = sorted.filter((a) => a.correct >= PASS_CORRECT).length;

  return (
    <Screen tabBar>
      <T v="h1">İlerleme</T>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Mini n={String(sorted.length)} l="Çözülen sınav" />
        <Mini n={String(avg)} l="Ortalama doğru" />
        <Mini n={String(best)} l="En iyi doğru" />
      </View>

      <Card style={{ gap: 8 }}>
        <T v="title">Net gelişimin</T>
        <T v="small" color={colors.ink2}>{passed} / {sorted.length} denemede geçme sınırının üzerindesin.</T>
        <NetLine values={sorted.slice(-8).map((a) => a.correct)} threshold={PASS_CORRECT} />
      </Card>

      <Card style={{ gap: 14 }}>
        <T v="title">Derslere göre başarı</T>
        {COURSES.map((c) => {
          const r = acc[c.id];
          const rate = r.total ? r.correct / r.total : 0;
          return (
            <View key={c.id} style={{ gap: 6 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <T v="bodyStrong">{c.name}</T>
                <T v="bodyStrong">%{Math.round(rate * 100)}</T>
              </View>
              <Bar value={rate} height={9} color={COURSE_COLORS[c.id].fg} />
            </View>
          );
        })}
      </Card>

      {weak.length > 0 && (
        <Card style={{ gap: 12 }}>
          <T v="title">Önce şunlara çalış</T>
          <T v="small" color={colors.ink2}>Çözdüğün sorulara göre en zorlandığın konular:</T>
          {weak.map(({ topic, rate }) => (
            <View key={topic.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <View style={{ flex: 1 }}>
                <T v="bodyStrong">{topic.title}</T>
                <T v="caption" color={colors.mute}>Başarı %{Math.round(rate * 100)}</T>
              </View>
              {topic.hasLesson && <Button kind="soft" label="Çalış" onPress={() => router.push(`/konu/${topic.id}`)} style={{ height: 44, borderRadius: 14 }} />}
            </View>
          ))}
        </Card>
      )}
    </Screen>
  );
}

function Mini({ n, l }: { n: string; l: string }) {
  return (
    <Card style={{ flex: 1, padding: 14, alignItems: 'center', gap: 2 }}>
      <T v="h1" color={colors.primary}>{n}</T>
      <T v="caption" color={colors.mute} style={{ textAlign: 'center' }}>{l}</T>
    </Card>
  );
}
