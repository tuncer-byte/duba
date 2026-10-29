import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { Mascot } from '@/components/Mascot';
import { Bar, Button, Screen, T } from '@/components/ui';
import { PREMIUM } from '@/config';
import { freeStatus } from '@/lib/premium';
import { buyPremium, restorePremium, storePrice, testPurchaseEnabled } from '@/lib/purchases';
import { useApp } from '@/store/app';
import { colors } from '@/theme';

const COPY: Record<string, { title: string; sub: string }> = {
  total: { title: 'Ücretsiz sorularını bitirdin', sub: 'Harika gidiyorsun! Tüm sorulara sınırsız erişmek için Premium\'a geç.' },
  visual: { title: 'Görselli sorular Premium\'da', sub: 'Ücretsiz görselli soru hakkın doldu. Kavşak, levha ve gösterge soruları sınırsız açılsın.' },
  result: { title: 'İlk denemeni tamamladın', sub: 'Başarını sürdürmek için tüm soru ve denemelere sınırsız eriş.' },
  default: { title: 'Duba Premium', sub: 'Tek ödeme, ömür boyu sınırsız erişim.' },
};
const BENEFITS = [
  'Tüm soru bankasına sınırsız erişim',
  'Tüm görselli sorular: kavşak, levha, gösterge',
  'Sınırsız deneme sınavı ve yanlış tekrarı',
  'Gelecekte eklenecek yeni sorular dahil',
  'Abonelik yok, reklam yok',
];

export default function PremiumScreen() {
  const router = useRouter();
  const { reason } = useLocalSearchParams<{ reason?: string }>();
  const { premium, setPremium, seen } = useApp();
  const [price, setPrice] = useState<string>(PREMIUM.fallbackPrice);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const st = freeStatus(seen);
  const c = COPY[reason ?? 'default'] ?? COPY.default;
  const test = testPurchaseEnabled();

  useEffect(() => { storePrice().then((p) => p && setPrice(p)); }, []);

  const done = () => { setMsg(null); if (router.canGoBack()) router.back(); else router.replace('/'); };

  const buy = async () => {
    setBusy(true); setMsg(null);
    if (test) { setPremium(true); setBusy(false); return; }
    const r = await buyPremium();
    setBusy(false);
    if (r === 'ok') setPremium(true);
    else if (r === 'unavailable') setMsg('Satın alma şu anda kullanılamıyor. Lütfen daha sonra tekrar dene.');
    else if (r === 'error') setMsg('Satın alma tamamlanamadı. Ücret alınmadıysa tekrar deneyebilirsin.');
  };
  const restore = async () => {
    setBusy(true); setMsg(null);
    const r = await restorePremium();
    setBusy(false);
    if (r === 'ok') setPremium(true);
    else setMsg(r === 'unavailable' ? 'Geri yükleme şu anda kullanılamıyor.' : 'Bu hesapta geri yüklenecek bir satın alma bulunamadı.');
  };

  if (premium) {
    return (
      <Screen contentStyle={{ alignItems: 'center', gap: 14, paddingTop: 40 }}>
        <Mascot name="cheer" height={190} />
        <T v="h1" style={{ textAlign: 'center' }}>Premium aktif</T>
        <T v="body" color={colors.ink2} style={{ textAlign: 'center' }}>Teşekkürler! Tüm sorulara ve görsellere sınırsız erişimin var.</T>
        <Button label="Çalışmaya devam et" onPress={done} style={{ alignSelf: 'stretch', marginTop: 8 }} />
      </Screen>
    );
  }

  return (
    <Screen contentStyle={{ gap: 14 }}>
      <View style={{ alignItems: 'flex-end' }}>
        <Pressable accessibilityRole="button" accessibilityLabel="Kapat" onPress={done} hitSlop={12} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="x" size={20} color={colors.ink} />
        </Pressable>
      </View>
      <View style={{ alignItems: 'center', gap: 8 }}>
        <Mascot name={reason === 'result' ? 'happy' : 'cheer'} height={150} />
        <T v="h1" style={{ textAlign: 'center' }}>{c.title}</T>
        <T v="body" color={colors.ink2} style={{ textAlign: 'center' }}>{c.sub}</T>
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 22, borderWidth: 1, borderColor: colors.border, padding: 16, gap: 10 }}>
        {BENEFITS.map((b) => (
          <View key={b} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={14} color={colors.primary} stroke={3} />
            </View>
            <T v="body" style={{ flex: 1 }}>{b}</T>
          </View>
        ))}
      </View>

      <View style={{ backgroundColor: colors.primarySoft, borderRadius: 22, padding: 16, gap: 8 }}>
        <T v="label" color={colors.primary}>ÜCRETSİZ HAKKIN</T>
        <View style={{ gap: 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <T v="small" color={colors.ink2}>Soru</T>
            <T v="small" color={colors.ink2}>{Math.min(st.usedTotal, PREMIUM.freeQuestions)} / {PREMIUM.freeQuestions}</T>
          </View>
          <Bar value={Math.min(1, st.usedTotal / PREMIUM.freeQuestions)} track="#fff" />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 }}>
            <T v="small" color={colors.ink2}>Görselli soru</T>
            <T v="small" color={colors.ink2}>{Math.min(st.usedVisual, PREMIUM.freeVisual)} / {PREMIUM.freeVisual}</T>
          </View>
          <Bar value={Math.min(1, st.usedVisual / PREMIUM.freeVisual)} track="#fff" />
        </View>
      </View>

      <View style={{ alignItems: 'center', gap: 2 }}>
        <T v="display" color={colors.primary}>{price}</T>
        <T v="small" color={colors.mute}>Tek seferlik ödeme · ömür boyu</T>
      </View>

      {msg && <T v="small" color={colors.red} style={{ textAlign: 'center' }}>{msg}</T>}
      <Button label={busy ? 'İşleniyor…' : test ? 'Premium\'a geç (test)' : 'Premium\'a geç'} onPress={buy} disabled={busy} />
      <Button kind="soft" label="Satın alımı geri yükle" onPress={restore} disabled={busy} />
      <Pressable onPress={done} accessibilityRole="button" style={{ alignItems: 'center', paddingVertical: 10 }}>
        <T v="body" color={colors.mute}>Şimdilik ücretsiz devam et</T>
      </Pressable>
      <T v="caption" color={colors.faint} style={{ textAlign: 'center' }}>
        Ödeme, onayında App Store / Google Play hesabından tahsil edilir. Abonelik değildir; yenilenmez.
      </T>
    </Screen>
  );
}
