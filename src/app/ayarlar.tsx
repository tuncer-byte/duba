import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Linking, Pressable, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { ProfileSheet } from '@/components/ProfileSheet';
import { Button, Card, Header, Screen, T } from '@/components/ui';
import { APP } from '@/config';
import { LEGAL } from '@/data/legal';
import { buildLabel, Channel, getChannel, otaEnabled, pullUpdate, setChannel } from '@/lib/updates';
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
  const [channel, setCh] = useState<Channel>('production');
  const taps = useRef({ n: 0, t: 0 });
  useEffect(() => { getChannel().then(setCh); }, []);

  // Gizli test girişi: sürüm yazısına 3 saniye içinde 7 kez dokun.
  const onVersionTap = () => {
    if (!otaEnabled()) return;
    const now = Date.now();
    taps.current = now - taps.current.t < 3000 ? { n: taps.current.n + 1, t: now } : { n: 1, t: now };
    if (taps.current.n < 7) return;
    taps.current = { n: 0, t: 0 };
    const next: Channel = channel === 'test' ? 'production' : 'test';
    Alert.alert(next === 'test' ? 'Test sürümüne geç' : 'Canlı sürüme dön', 'Uygulama yeniden başlayacak.', [
      { text: 'Vazgeç', style: 'cancel' },
      { text: 'Geç', onPress: () => setChannel(next) },
    ]);
  };

  const onPull = async () => {
    const r = await pullUpdate(true);
    if (r === 'none') Alert.alert('Güncel', 'En son test sürümünü kullanıyorsun.');
    if (r === 'error') Alert.alert('Bağlanılamadı', 'İnternet bağlantını kontrol edip tekrar dene.');
  };

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
        <View style={{ height: 1, backgroundColor: colors.border }} />
        <Row label="Görsel kaynakları" sub="Levha ve araç görselleri · lisanslar" onPress={() => router.push('/gorseller')} />
      </Card>
      <Button kind="soft" label="Geri bildirim gönder" onPress={() => Linking.openURL(`mailto:${APP.supportEmail}?subject=Duba%20geri%20bildirim`).catch(() => {})} />
      {channel === 'test' && <Button kind="soft" icon="forward" label="Test güncellemesini şimdi al" onPress={onPull} />}
      <Pressable onPress={onVersionTap} accessibilityLabel={`${APP.name} sürüm ${APP.version}`}>
        <T v="caption" color={channel === 'test' ? colors.primary : colors.mute} style={{ textAlign: 'center' }}>
          {APP.name} · sürüm {APP.version}{buildLabel(channel) ? ` · ${buildLabel(channel)}` : ''}
        </T>
      </Pressable>
      <ProfileSheet visible={sheet} onClose={() => setSheet(false)} />
    </Screen>
  );
}
