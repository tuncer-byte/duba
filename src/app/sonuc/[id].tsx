import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { NetLine, Ring } from '@/components/charts';
import { Mascot, type MascotName } from '@/components/Mascot';
import { Bar, Button, Card, Header, Screen, T } from '@/components/ui';
import { COURSES } from '@/data/courses';
import { PASS_CORRECT, PASS_SCORE } from '@/data/types';
import { sortedAttempts } from '@/lib/grade';
import { freeStatus } from '@/lib/premium';
import { useApp } from '@/store/app';
import { colors } from '@/theme';

export default function Result() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { attempts, premium, seen } = useApp();
  const sorted = sortedAttempts(attempts);
  const idx = sorted.findIndex((a) => a.id === id);
  const a = sorted[idx];
  const home = () => router.replace('/');

  if (!a) {
    return (
      <Screen>
        <Header title="Sonuç bulunamadı" onBack={home} />
      </Screen>
    );
  }
  const passed = a.score >= PASS_SCORE;
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const delta = prev ? a.correct - prev.correct : null;
  const series = sorted.slice(Math.max(0, idx - 7), idx + 1).map((x) => x.correct);
  const color = passed ? colors.green : colors.orange;
  const isFullExam = a.questionIds.length === 50;
  const mascot: MascotName = passed ? 'cheer' : isFullExam ? (a.correct >= 28 ? 'wink' : 'sad') : a.correct / Math.max(1, a.questionIds.length) >= 0.7 ? 'happy' : 'think';
  const showUpsell = !premium && (attempts.length <= 1 || freeStatus(seen).leftTotal === 0);

  return (
    <Screen>
      <Header title={`${a.title} Sonucu`} onBack={home} />

      <Card style={{ alignItems: 'center', gap: 16, paddingVertical: 24 }}>
        <Mascot name={mascot} height={120} />
        <Ring value={a.score / 100} color={color}>
          <T v="display" style={{ fontSize: 44, lineHeight: 48 }}>{a.score}</T>
          <T v="body" color={colors.mute} style={{ marginTop: -4 }}>puan</T>
        </Ring>
        <View style={{ backgroundColor: passed ? colors.greenSoft : colors.amberSoft, borderRadius: 999, paddingHorizontal: 22, paddingVertical: 10 }}>
          <T v="title" color={passed ? colors.greenInk : colors.amber}>
            {passed ? 'Tebrikler, geçtin!' : `Geçmek için ${Math.max(0, PASS_CORRECT - a.correct)} doğru daha lazım`}
          </T>
        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
          <Stat n={a.correct} label="Doğru" color={colors.green} />
          <Stat n={a.wrong} label="Yanlış" color={colors.red} />
          <Stat n={a.blank} label="Boş" color={colors.ink2} />
        </View>
      </Card>

      {showUpsell && (
        <Card tint={colors.primarySoft} onPress={() => router.push('/premium?reason=result')} style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <Mascot name="wink" height={72} />
          <View style={{ flex: 1, gap: 2 }}>
            <T v="title">Sınırsız çalışmak ister misin?</T>
            <T v="small" color={colors.ink2}>Tüm sorular ve görselli sorular, tek ödeme, ömür boyu.</T>
          </View>
        </Card>
      )}

      {isFullExam && (
        <Card style={{ gap: 14 }}>
          <T v="h2" style={{ fontSize: 17 }}>Derslere göre</T>
          {COURSES.map((c) => {
            const r = a.byCourse[c.id];
            const rate = r.total ? r.correct / r.total : 0;
            return (
              <View key={c.id} style={{ gap: 6 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <T v="bodyStrong">{c.name}</T>
                  <T v="bodyStrong">{r.correct} / {r.total}</T>
                </View>
                <Bar value={rate} height={9} color={rate >= 0.8 ? colors.green : rate >= 0.6 ? colors.primary : colors.orange} />
              </View>
            );
          })}
        </Card>
      )}

      {series.length >= 2 && (
        <Card style={{ gap: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <T v="h2" style={{ fontSize: 17 }}>Net gelişimin</T>
            {delta !== null && (
              <T v="bodyStrong" color={delta >= 0 ? colors.green : colors.red} style={{ flex: 1, textAlign: 'right' }}>
                {delta >= 0 ? '+' : ''}{delta} (önceki denemeye göre)
              </T>
            )}
          </View>
          <NetLine values={series} threshold={PASS_CORRECT} />
        </Card>
      )}

      <View style={{ gap: 12 }}>
        {a.wrong + a.blank > 0 && (
          <Button label="Yanlışlarımı incele" icon="xcircle" onPress={() => router.push({ pathname: '/yanlislarim', params: { attempt: a.id } })} />
        )}
        <Button kind="outline" label="Ana sayfaya dön" onPress={home} />
      </View>
    </Screen>
  );
}

function Stat({ n, label, color }: { n: number; label: string; color: string }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <T v="h1" color={color}>{n}</T>
      <T v="body" color={colors.mute}>{label}</T>
    </View>
  );
}
