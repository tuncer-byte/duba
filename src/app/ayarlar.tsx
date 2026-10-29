import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Linking, Pressable, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { ProfileSheet } from '@/components/ProfileSheet';
import { Button, Card, Header, Screen, T } from '@/components/ui';
import { APP } from '@/config';
import { LEGAL } from '@/data/legal';
import { useApp } from '@/store/app';
import { colors } from '@/theme';

function Row({ label, sub, onPress }: { label: string; sub?: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14, gap: 12 }}>
      <View style={{ flex: 1 }}>
        <T v="bodyStrong">{label}</T>
        {sub && <T v="small" color={colors.mute}>{sub}</T>}
      </View>
      <Icon name="forward" size={20} color={colors.mute} />
    </Pressable>
  );
}

export default function Settings() {
  const router = useRouter();
  const { profile, attempts, saved, premium } = useApp();
  const [sheet, setSheet] = useState(false);
  const [doc, setDoc] = useState<keyof typeof LEGAL | null>(null);

  if (doc) {
    return (
      <Screen>
        <Header title={LEGAL[doc].title} onBack={() => setDoc(null)} />
        {LEGAL[doc].body.map((p, i) => (
          <T key={i} v={p.startsWith('#') ? 'title' : 'body'} color={p.startsWith('#') ? colors.ink : colors.ink2}>{p.replace(/^#\s*/, '')}</T>
        ))}
      </Screen>
    );
  }

  return (
    <Screen>
      <Header title="Ayarlar" onBack={() => router.back()} />
      <Card style={{ paddingVertical: 4 }}>
        <Row label={premium ? 'Premium aktif' : 'Duba Premium'} sub={premium ? 'Teşekkürler! Sınırsız erişimin var.' : 'Tek ödeme, ömür boyu sınırsız · satın alımı geri yükle'} onPress={() => router.push('/premium?reason=default')} />
        <View style={{ height: 1, backgroundColor: colors.border }} />
        <Row label="Profil ve sınav tarihi" sub={`${profile.name} · B sınıfı`} onPress={() => setSheet(true)} />
        <View style={{ height: 1, backgroundColor: colors.border }} />
        <Row label="Çalışma özeti" sub={`${attempts.length} sınav · ${saved.length} kaydedilen soru`} onPress={() => router.push('/(tabs)/ilerleme')} />
      </Card>
      <Card style={{ paddingVertical: 4 }}>
        <Row label="Gizlilik politikası" onPress={() => setDoc('privacy')} />
        <View style={{ height: 1, backgroundColor: colors.border }} />
        <Row label="Kullanım koşulları" onPress={() => setDoc('terms')} />
        <View style={{ height: 1, backgroundColor: colors.border }} />
        <Row label="İçerik hakkında" sub="Sorular nereden geliyor?" onPress={() => setDoc('content')} />
      </Card>
      <Button kind="soft" label="Geri bildirim gönder" onPress={() => Linking.openURL(`mailto:${APP.supportEmail}?subject=Duba%20geri%20bildirim`).catch(() => {})} />
      <T v="caption" color={colors.mute} style={{ textAlign: 'center' }}>{APP.name} · sürüm {APP.version}</T>
      <ProfileSheet visible={sheet} onClose={() => setSheet(false)} />
    </Screen>
  );
}
