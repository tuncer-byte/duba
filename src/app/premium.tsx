import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '@/components/Icon';
import { Mascot } from '@/components/Mascot';
import { Button, Screen, T } from '@/components/ui';
import { PREMIUM } from '@/config';
import { freeStatus } from '@/lib/premium';
import { buyPremium, restorePremium, storePrice } from '@/lib/purchases';
import { useApp } from '@/store/app';
import { colors, fonts } from '@/theme';

const COPY: Record<string, { title: string; sub: string }> = {
  total: { title: 'Ücretsiz sorularını bitirdin', sub: 'Harika gidiyorsun! Tüm sorulara sınırsız erişmek için Premium\'a geç.' },
  visual: { title: 'Görselli sorular Premium\'da', sub: 'Ücretsiz görselli soru hakkın doldu. Kavşak, levha ve gösterge soruları sınırsız açılsın.' },
  result: { title: 'İlk denemeni tamamladın', sub: 'Başarını sürdürmek için tüm soru ve denemelere sınırsız eriş.' },
  default: { title: 'Duba Premium', sub: 'Tek ödeme, ömür boyu sınırsız erişim.' },
};
const BENEFITS = [
  'Tüm sorulara sınırsız erişim',
  'Tüm görselli sorular',
  'Sınırsız deneme ve yanlış tekrarı',
  'Abonelik yok, reklam yok',
];

export default function PremiumScreen() {
  const router = useRouter();
  const { reason } = useLocalSearchParams<{ reason?: string }>();
  const { premium, setPremium, seen } = useApp();
  const [price, setPrice] = useState<string>(PREMIUM.fallbackPrice);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const st = freeStatus(seen);
  const c = COPY[reason ?? 'default'] ?? COPY.default;

  useEffect(() => { storePrice().then((p) => p && setPrice(p)); }, []);

  const done = () => { setMsg(null); if (router.canGoBack()) router.back(); else router.replace('/'); };

  const buy = async () => {
    setBusy(true); setMsg(null);
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

  const mh = Math.max(84, Math.min(170, (height - 480) * 0.5));
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, paddingTop: 14, paddingHorizontal: 20, paddingBottom: Math.max(insets.bottom, 14) + 4, justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'flex-end', height: 40 }}>
        <Pressable accessibilityRole="button" accessibilityLabel="Kapat" onPress={done} hitSlop={12} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#fff', borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="x" size={20} color={colors.ink} />
        </Pressable>
      </View>

      <View style={{ alignItems: 'center', gap: 4 }}>
        <Mascot name={reason === 'result' ? 'happy' : 'wink'} height={mh} />
        <T v="h1" style={{ textAlign: 'center', marginTop: 4 }}>{c.title}</T>
        <T v="small" color={colors.ink2} style={{ textAlign: 'center' }}>{c.sub}</T>
      </View>

      <View style={{ backgroundColor: '#fff', borderRadius: 20, borderWidth: 1, borderColor: colors.border, paddingVertical: 12, paddingHorizontal: 16, gap: 9 }}>
        {BENEFITS.map((b) => (
          <View key={b} style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={12} color={colors.primary} stroke={3} />
            </View>
            <T v="body" style={{ flex: 1 }}>{b}</T>
          </View>
        ))}
      </View>

      <View style={{ backgroundColor: colors.primarySoft, borderRadius: 14, paddingVertical: 9, paddingHorizontal: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <T v="caption" color={colors.primary} style={{ fontFamily: fonts.bodyBold }}>ÜCRETSİZ HAKKIN</T>
        <T v="caption" color={colors.ink2}>Soru {Math.min(st.usedTotal, PREMIUM.freeQuestions)}/{PREMIUM.freeQuestions} · Görselli {Math.min(st.usedVisual, PREMIUM.freeVisual)}/{PREMIUM.freeVisual}</T>
      </View>

      <View style={{ gap: 10 }}>
        <View style={{ alignItems: 'center' }}>
          <T v="display" color={colors.primary} style={{ fontSize: 34, lineHeight: 40 }}>{price}</T>
          <T v="caption" color={colors.mute}>Tek seferlik ödeme · ömür boyu</T>
        </View>
        {msg && <T v="caption" color={colors.red} style={{ textAlign: 'center' }}>{msg}</T>}
        <Button label={busy ? 'İşleniyor…' : 'Premium\'a geç'} onPress={buy} disabled={busy} />
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 22 }}>
          <Pressable onPress={restore} accessibilityRole="button" hitSlop={8}><T v="small" color={colors.primary} style={{ fontFamily: fonts.bodySemi }}>Satın alımı geri yükle</T></Pressable>
          <Pressable onPress={done} accessibilityRole="button" hitSlop={8}><T v="small" color={colors.mute}>Şimdilik değil</T></Pressable>
        </View>
        <T v="caption" color={colors.faint} style={{ textAlign: 'center', fontSize: 10.5, lineHeight: 14 }}>
          Ödeme App Store / Google Play hesabından tahsil edilir. Abonelik değildir; yenilenmez.
        </T>
      </View>
    </View>
  );
}
