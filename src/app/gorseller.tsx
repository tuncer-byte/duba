import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, Pressable, View } from 'react-native';
import { Card, Header, Screen, T } from '@/components/ui';
import { CREDITS_PHOTOS, CREDITS_SIGNS } from '@/data/credits';
import { colors } from '@/theme';

const LICENSE_URL: Record<string, string> = {
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
};
const open = (u: string) => Linking.openURL(u).catch(() => {});

export default function Credits() {
  const router = useRouter();
  const authors = [...new Set(CREDITS_SIGNS.map((c) => c.author.split(';')[0].trim()).filter(Boolean))];
  return (
    <Screen>
      <Header title="Görsel kaynakları" onBack={() => router.back()} />
      <T v="body" color={colors.ink2}>
        Uygulamadaki trafik levhaları ve araç tekniği görselleri Wikimedia Commons'tan alınmıştır ve ilgili açık lisanslarla kullanılmaktadır. Görsellerin hakları sahiplerine aittir.
      </T>
      <Card style={{ gap: 8 }}>
        <T v="title">Trafik levhaları</T>
        <T v="small" color={colors.ink2}>
          Türkiye trafik işaretleri (Karayolları Trafik İşaretleri Standardı) SVG çizimleri. Çizenler: {authors.join(', ')}. Lisans: CC BY-SA 4.0 (bazıları kamu malı). Görseller yeniden boyutlandırılmıştır.
        </T>
        <Pressable accessibilityRole="link" onPress={() => open('https://commons.wikimedia.org/wiki/Category:SVG_road_signs_in_Turkey')}>
          <T v="small" color={colors.primary}>Kaynak: Wikimedia Commons, SVG road signs in Turkey</T>
        </Pressable>
        <Pressable accessibilityRole="link" onPress={() => open(LICENSE_URL['CC BY-SA 4.0'])}>
          <T v="small" color={colors.primary}>CC BY-SA 4.0 lisansı</T>
        </Pressable>
      </Card>
      <T v="title">Araç tekniği görselleri</T>
      <Card style={{ padding: 0, overflow: 'hidden' }}>
        {CREDITS_PHOTOS.map((c, i) => (
          <Pressable key={c.title} accessibilityRole="link" onPress={() => open(c.page)} style={{ padding: 14, gap: 2, borderBottomWidth: i === CREDITS_PHOTOS.length - 1 ? 0 : 1, borderBottomColor: colors.border }}>
            <T v="small" color={colors.ink}>{c.title.replace(/_/g, ' ')}</T>
            <T v="caption" color={colors.mute}>{c.author || 'Wikimedia Commons katkıcısı'} · {c.license}</T>
          </Pressable>
        ))}
      </Card>
      <View style={{ height: 8 }} />
    </Screen>
  );
}
