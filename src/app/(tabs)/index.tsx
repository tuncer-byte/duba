import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, View } from 'react-native';
import { BarTrend } from '@/components/charts';
import { Icon, type IconName } from '@/components/Icon';
import { Mascot } from '@/components/Mascot';
import { freeStatus } from '@/lib/premium';
import { ProfileSheet } from '@/components/ProfileSheet';
import { Bar, Button, Card, Pill, Screen, T } from '@/components/ui';
import { PASS_SCORE } from '@/data/types';
import { sortedAttempts, wrongPool } from '@/lib/grade';
import { daysUntil, useApp } from '@/store/app';
import { colors } from '@/theme';
import { APP, OFFICIAL_PAST_EXAMS } from '@/config';

function Tile({ icon, label, bg, fg, onPress, badge }: { icon: IconName; label: string; bg: string; fg: string; onPress: () => void; badge?: number }) {
  return (
    <Card onPress={onPress} style={{ flex: 1, gap: 14, minHeight: 116 }}>
      <View style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: bg, alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={24} color={fg} />
      </View>
      <T v="title">
        {label}
        {badge ? <T v="title" color={colors.red}>{` (${badge})`}</T> : null}
      </T>
    </Card>
  );
}

export default function Home() {
  const router = useRouter();
  const { profile, attempts, premium, seen } = useApp();
  const [sheet, setSheet] = useState(false);

  const sorted = useMemo(() => sortedAttempts(attempts), [attempts]);
  const last = sorted[sorted.length - 1];
  const wrongCount = useMemo(() => wrongPool(attempts).length, [attempts]);
  const days = daysUntil(profile.examDate);
  const today = useMemo(() => {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    return sorted.filter((a) => a.at >= start.getTime()).reduce((n, a) => n + a.correct + a.wrong, 0);
  }, [sorted]);
  const streak = useMemo(() => {
    const days = new Set(sorted.map((a) => { const d = new Date(a.at); d.setHours(0, 0, 0, 0); return d.getTime(); }));
    let n = 0; const d = new Date(); d.setHours(0, 0, 0, 0);
    if (!days.has(d.getTime())) d.setDate(d.getDate() - 1);
    while (days.has(d.getTime())) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }, [sorted]);
  const trend = sorted.slice(-6).map((a) => a.correct);
  const gain = sorted.length > 1 ? sorted[sorted.length - 1].correct - sorted[0].correct : 0;

  const big = days === null ? 'Tarihini seç' : days > 1 ? `${days} gün` : days === 1 ? 'Yarın' : days === 0 ? 'Bugün' : 'Tarih geçti';

  return (
    <Screen tabBar>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <View>
          <T v="bodyStrong" color={colors.mute}>Merhaba,</T>
          <T v="h1">{profile.name}</T>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Profil" onPress={() => setSheet(true)}
          style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
          <T v="title" color={colors.primary}>{profile.name.charAt(0).toLocaleUpperCase('tr-TR')}</T>
        </Pressable>
      </View>

      <View style={{ backgroundColor: colors.primary, borderRadius: 30, padding: 22, gap: 18 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Pressable onPress={() => setSheet(true)} style={{ flex: 1, gap: 4 }}>
            <T v="body" color="#D6EAE7">Sınavına kalan süre</T>
            <T v="display" color="#fff" style={{ fontSize: days === null ? 24 : 32, lineHeight: days === null ? 30 : 38 }}>{big}</T>
          </Pressable>
          <Pill label="B Sınıfı" bg="rgba(255,255,255,0.2)" fg="#fff" />
        </View>
        <View style={{ gap: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <T v="body" color="#fff">Son deneme: <T v="bodyStrong" color="#fff" style={{ fontFamily: 'PlusJakartaSans_700Bold' }}>{last ? `${last.score} puan` : '—'}</T></T>
            <T v="body" color="#fff">Geçme: {PASS_SCORE}</T>
          </View>
          <Bar value={(last?.score ?? 0) / 100} color="#fff" track="rgba(255,255,255,0.25)" height={10} marker={PASS_SCORE / 100} />
        </View>
        <Button kind="white" icon="play" label="Deneme Sınavına Başla" onPress={() => router.push('/sinav/deneme')} />
      </View>

      <View style={{ flexDirection: 'row', gap: 14 }}>
        <Tile icon="doc" label={OFFICIAL_PAST_EXAMS ? 'Çıkmış Sorular' : 'Sınav Setleri'} bg={colors.primarySoft} fg={colors.primary} onPress={() => router.push('/sinavlar')} />
        <Tile icon="book" label="Konu Anlatımı" bg={colors.greenSoft} fg={colors.green} onPress={() => router.push('/konular')} />
      </View>
      <View style={{ flexDirection: 'row', gap: 14 }}>
        <Tile icon="xcircle" label="Yanlışlarım" badge={wrongCount} bg={colors.redSoft} fg={colors.red} onPress={() => router.push('/yanlislarim')} />
        <Tile icon="road" label="Ehliyet Süreci" bg={colors.amberSoft} fg={colors.amber} onPress={() => router.push('/surec')} />
      </View>

      {!premium && (
        <Card tint={colors.primarySoft} onPress={() => router.push('/premium?reason=default')} style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <Mascot name="cheer" height={76} />
          <View style={{ flex: 1, gap: 2 }}>
            <T v="title">Duba Premium</T>
            <T v="small" color={colors.ink2}>Ücretsiz hakkın: {freeStatus(seen).leftTotal} soru · {freeStatus(seen).leftVisual} görselli. Tek ödemeyle sınırsız.</T>
          </View>
          <Icon name="forward" size={20} color={colors.primary} />
        </Card>
      )}

      <Card style={{ gap: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <T v="title">Günlük hedef</T>
          <T v="bodyStrong" color={today >= APP.dailyGoalQuestions ? colors.green : colors.ink2}>{Math.min(today, 999)} / {APP.dailyGoalQuestions} soru</T>
        </View>
        <Bar value={today / APP.dailyGoalQuestions} color={today >= APP.dailyGoalQuestions ? colors.green : colors.primary} height={10} />
        <T v="small" color={colors.mute}>{streak > 0 ? `${streak} gündür üst üste çalışıyorsun.` : 'Bugün küçük bir pratikle seriyi başlat.'}</T>
      </Card>

      <Card style={{ gap: 14 }}>
        {trend.length >= 2 ? (
          <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <T v="title">Doğru sayın {gain >= 0 ? 'artıyor' : 'değişiyor'}</T>
              <T v="bodyStrong" color={gain >= 0 ? colors.green : colors.red}>{gain >= 0 ? '+' : ''}{gain} doğru</T>
            </View>
            <BarTrend values={trend} />
          </>
        ) : (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <Mascot name="study" height={84} />
            <View style={{ flex: 1, gap: 6 }}>
              <T v="title">Gelişimini burada göreceksin</T>
              <T v="small" color={colors.ink2}>İlk denemeni çöz, her sınavdan sonra doğru sayının nasıl arttığını takip et.</T>
            </View>
          </View>
        )}
      </Card>
      <ProfileSheet visible={sheet} onClose={() => setSheet(false)} />
    </Screen>
  );
}
