import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { MediaView } from '@/components/MediaView';
import { Mascot } from '@/components/Mascot';
import { Button, Card, Chip, Header, Pill, Screen, T } from '@/components/ui';
import { courseById } from '@/data/courses';
import { questionById } from '@/data/questions';
import { wrongPool } from '@/lib/grade';
import { useApp } from '@/store/app';
import { colors } from '@/theme';

const L = ['A', 'B', 'C', 'D'];

export default function Mistakes() {
  const router = useRouter();
  const { attempt, tab } = useLocalSearchParams<{ attempt?: string; tab?: string }>();
  const { attempts, saved, removeSaved } = useApp();
  const [mode, setMode] = useState<'wrong' | 'saved'>(tab === 'saved' ? 'saved' : 'wrong');

  const att = attempt ? attempts.find((a) => a.id === attempt) : undefined;
  const items = useMemo(() => {
    if (mode === 'saved') return saved.map((qid) => ({ qid, chosen: null as number | null }));
    if (att) {
      return att.questionIds.filter((qid) => {
        const a = att.answers[qid];
        return a === null || a === undefined || a !== questionById(qid)?.answer;
      }).map((qid) => ({ qid, chosen: att.answers[qid] ?? null }));
    }
    return wrongPool(attempts).map((qid) => ({ qid, chosen: null as number | null }));
  }, [mode, att, attempts, saved]);

  const title = att && mode === 'wrong' ? 'Bu denemedeki yanlışlar' : mode === 'saved' ? 'Kaydedilenler' : 'Yanlışlarım';

  return (
    <Screen>
      <Header title={title} onBack={() => router.back()} />
      {!att && (
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Chip label={`Yanlışlarım (${wrongPool(attempts).length})`} active={mode === 'wrong'} onPress={() => setMode('wrong')} />
          <Chip label={`Kaydedilenler (${saved.length})`} active={mode === 'saved'} onPress={() => setMode('saved')} />
        </View>
      )}
      {items.length === 0 && <View style={{ alignItems: 'center', paddingTop: 12 }}><Mascot name={mode === 'saved' ? 'think' : 'cheer'} height={150} /></View>}
      <T v="body" color={colors.ink2}>
        {items.length === 0
          ? mode === 'saved' ? 'Henüz kaydedilmiş soru yok. Sınavda "Sonra bak" ile işaretlediğin sorular burada toplanır.' : 'Şu an yanlış havuzunda soru yok. Harika gidiyorsun!'
          : mode === 'saved' ? `${items.length} soru kaydettin.` : `${items.length} soru üzerinde çalışabilirsin. Doğru yapınca havuzdan çıkar.`}
      </T>
      {!att && items.length > 0 && (
        <Button icon="play" label={mode === 'saved' ? 'Kaydedilenleri çöz' : 'Yanlışlarımı çöz'} onPress={() => router.push(mode === 'saved' ? '/sinav/kayitli' : '/sinav/yanlislar')} />
      )}

      {items.map(({ qid, chosen }) => {
        const q = questionById(qid);
        if (!q) return null;
        return (
          <Card key={qid} style={{ gap: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Pill label={courseById(q.courseId).name} />
              {mode === 'saved' && (
                <Pressable accessibilityRole="button" accessibilityLabel="Kaydedilenlerden kaldır" onPress={() => removeSaved(qid)} hitSlop={10}>
                  <T v="small" color={colors.red}>Kaldır</T>
                </Pressable>
              )}
            </View>
            <T v="title" style={{ lineHeight: 25 }}>{q.text}</T>
            <MediaView media={q.media} />
            {chosen !== null && (
              <View style={{ flexDirection: 'row', gap: 10, backgroundColor: colors.redSoft, borderRadius: 14, padding: 12 }}>
                <Icon name="x" size={20} color={colors.red} />
                <T v="small" style={{ flex: 1 }}><T v="small" color={colors.red} style={{ fontFamily: 'AlbertSans_700Bold' }}>Senin cevabın ({L[chosen]}): </T>{q.options[chosen]}</T>
              </View>
            )}
            {chosen === null && att && <T v="caption" color={colors.mute}>Bu soruyu boş bıraktın.</T>}
            <View style={{ flexDirection: 'row', gap: 10, backgroundColor: colors.greenSoft, borderRadius: 14, padding: 12 }}>
              <Icon name="check" size={20} color={colors.green} />
              <T v="small" style={{ flex: 1 }}><T v="small" color={colors.greenInk} style={{ fontFamily: 'AlbertSans_700Bold' }}>Doğru cevap ({L[q.answer]}): </T>{q.options[q.answer]}</T>
            </View>
            <T v="small" color={colors.ink2}>{q.explanation}</T>
          </Card>
        );
      })}
    </Screen>
  );
}
