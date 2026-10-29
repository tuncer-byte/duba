import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Icon } from '@/components/Icon';
import { Card, Chip, Pill, Screen, T } from '@/components/ui';
import { OFFICIAL_PAST_EXAMS } from '@/config';
import { buildPastExamSets } from '@/data/exams';
import { EXAM_MINUTES, EXAM_TOTAL } from '@/data/types';
import { sortedAttempts } from '@/lib/grade';
import { deltas, latestByExam } from '@/lib/stats';
import { useApp } from '@/store/app';
import { colors } from '@/theme';

type Filter = 'all' | number | 'todo' | 'done';

export default function Exams() {
  const router = useRouter();
  const { attempts } = useApp();
  const [filter, setFilter] = useState<Filter>('all');
  const sets = useMemo(() => buildPastExamSets(), []);
  const latest = useMemo(() => latestByExam(attempts), [attempts]);
  const delta = useMemo(() => deltas(attempts), [attempts]);
  const sorted = sortedAttempts(attempts);
  const years = [...new Set(sets.map((s) => s.year))].filter(Boolean);

  const list = sets.filter((s) => (filter === 'all' ? true : filter === 'todo' ? !latest.has(s.id) : filter === 'done' ? latest.has(s.id) : s.year === filter));
  const first = sorted[0];
  const lastA = sorted[sorted.length - 1];
  const gain = first && lastA ? lastA.correct - first.correct : 0;
  const title = OFFICIAL_PAST_EXAMS ? 'Çıkmış Sorular' : 'Sınavlar';

  return (
    <Screen tabBar>
      <T v="h1" style={{ marginBottom: 2 }}>{title}</T>

      <View style={{ backgroundColor: colors.primary, borderRadius: 24, padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        {sorted.length >= 2 ? (
          <View style={{ gap: 2, flex: 1 }}>
            <T v="small" color="#D6EAE7">İlk sınavından bu yana</T>
            <T v="h1" color="#fff" style={{ fontSize: 28 }}>{gain >= 0 ? '+' : ''}{gain} doğru</T>
            <T v="small" color="#D6EAE7">{first.correct} → {lastA.correct} doğru · {sorted.length} sınav çözdün</T>
          </View>
        ) : (
          <View style={{ gap: 2, flex: 1 }}>
            <T v="small" color="#D6EAE7">Başlangıç</T>
            <T v="h2" color="#fff">İlk setini çöz</T>
            <T v="small" color="#D6EAE7">Her sınavdan sonra gelişimini burada izle.</T>
          </View>
        )}
        <Icon name="trend" size={52} color="#fff" stroke={2.4} />
      </View>

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <Card onPress={() => router.push('/sinav/hizli')} style={{ flex: 1, gap: 6, padding: 16 }}>
          <Icon name="play" size={22} color={colors.primary} />
          <T v="title" style={{ fontSize: 15 }}>Hızlı pratik</T>
          <T v="caption" color={colors.mute}>10 karma soru, süre yok</T>
        </Card>
        <Card onPress={() => router.push('/sinav/deneme')} style={{ flex: 1, gap: 6, padding: 16 }}>
          <Icon name="timer" size={22} color={colors.amber} />
          <T v="title" style={{ fontSize: 15 }}>Yeni deneme</T>
          <T v="caption" color={colors.mute}>50 soru, 45 dakika</T>
        </Card>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
        <Chip label="Tümü" active={filter === 'all'} onPress={() => setFilter('all')} />
        {years.slice(0, 3).map((y) => <Chip key={y} label={String(y)} active={filter === y} onPress={() => setFilter(y)} />)}
        <Chip label="Çözülmeyenler" active={filter === 'todo'} onPress={() => setFilter('todo')} />
        {!OFFICIAL_PAST_EXAMS && <Chip label="Çözülenler" active={filter === 'done'} onPress={() => setFilter('done')} />}
      </View>

      <View style={{ gap: 12 }}>
        {list.map((s) => {
          const a = latest.get(s.id);
          const d = a ? delta.get(a.id) ?? null : null;
          return (
            <Card key={s.id} onPress={() => router.push(`/sinav/${s.id}`)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16 }}>
              <View style={{ flex: 1, gap: 2 }}>
                <T v="title">{s.title}</T>
                <T v="small" color={colors.mute}>{EXAM_TOTAL} soru · {a ? 'Çözüldü' : `${EXAM_MINUTES} dk`}</T>
              </View>
              {a ? (
                <View style={{ alignItems: 'flex-end', gap: 4 }}>
                  <T v="title" style={{ fontSize: 17 }}>{a.correct}/{EXAM_TOTAL}</T>
                  {d !== null && (
                    <Pill label={`${d >= 0 ? '+' : ''}${d} doğru`} bg={d >= 0 ? colors.greenSoft : colors.redSoft} fg={d >= 0 ? colors.greenInk : colors.red} />
                  )}
                </View>
              ) : (
                <Pill label="Başla" style={{ paddingHorizontal: 20, paddingVertical: 12, borderRadius: 14 }} />
              )}
            </Card>
          );
        })}
        {list.length === 0 && <T v="body" color={colors.mute} style={{ textAlign: 'center', paddingVertical: 24 }}>Bu filtrede sınav yok.</T>}
        {!OFFICIAL_PAST_EXAMS && (
          <T v="caption" color={colors.mute} style={{ textAlign: 'center', paddingVertical: 8 }}>
            Setler Duba'nın özgün sorularından hazırlanmıştır; resmî çıkmış sorular değildir.
          </T>
        )}
      </View>
    </Screen>
  );
}
