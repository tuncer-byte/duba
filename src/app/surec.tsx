import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';
import { Icon } from '@/components/Icon';
import { Button, Card, Header, Screen, T } from '@/components/ui';
import { EXAM_MINUTES, EXAM_TOTAL, PASS_SCORE } from '@/data/types';
import { useApp } from '@/store/app';
import { colors, fonts } from '@/theme';

const STEPS = [
  { title: 'Sürücü kursuna kayıt', desc: 'Sağlık raporu, öğrenim belgesi ve biyometrik fotoğrafla kayıt olunur. B sınıfı için 18 yaşını doldurmuş olmalısın.' },
  { title: 'Teorik dersler', desc: 'İlk yardım, trafik ve çevre, araç tekniği ve trafik adabı dersleri.' },
  { title: 'Yazılı sınav (e-Sınav)', desc: 'En az 35 doğru gerekir. Yanlışlar doğruyu götürmez, boş bırakma!' },
  { title: 'Direksiyon sınavı', desc: 'Yazılıyı geçtikten sonra uygulamalı sürüş sınavına girersin.' },
  { title: 'Ehliyetini teslim al', desc: "Randevu alıp Nüfus Müdürlüğü'nden sürücü belgeni teslim alırsın." },
];

export default function Journey() {
  const router = useRouter();
  const { profile, setProfile } = useApp();
  const cur = profile.journeyStep;

  return (
    <Screen>
      <Header title="Ehliyet Yolculuğun" onBack={() => router.back()} />
      <T v="body" color={colors.ink2}>B sınıfı ehliyet için {STEPS.length} adım. Şu an <T v="bodyStrong" style={{ fontFamily: fonts.bodyBold }}>{cur}. adımdasın</T>.</T>

      <View style={{ marginTop: 4 }}>
        {STEPS.map((st, i) => {
          const n = i + 1;
          const done = n < cur;
          const active = n === cur;
          const lastRow = i === STEPS.length - 1;
          return (
            <View key={n} style={{ flexDirection: 'row', gap: 16 }}>
              <View style={{ alignItems: 'center', width: 48 }}>
                <View style={{ width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', backgroundColor: done ? colors.green : active ? colors.primary : '#fff', borderWidth: done || active ? 0 : 3, borderColor: colors.border, ...(active ? { shadowColor: colors.primary, shadowOpacity: 0.25, shadowRadius: 0, shadowOffset: { width: 0, height: 0 } } : {}) }}>
                  {done ? <Icon name="check" size={24} color="#fff" stroke={3} /> : <T v="title" color={active ? '#fff' : colors.mute}>{n}</T>}
                </View>
                {!lastRow && <View style={{ flex: 1, width: 4, marginVertical: 4, borderRadius: 2, backgroundColor: done ? colors.green : colors.border, minHeight: 28 }} />}
              </View>
              <View style={{ flex: 1, paddingBottom: lastRow ? 8 : 24, gap: 6, paddingTop: 6 }}>
                <T v="title" color={active ? colors.primary : colors.ink} style={{ fontSize: 16 }}>{st.title}</T>
                {n === 3 && active && (
                  <Card style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 14, paddingHorizontal: 6 }}>
                    <Stat v={String(EXAM_TOTAL)} l="soru" />
                    <Stat v={String(EXAM_MINUTES)} l="dakika" />
                    <Stat v={String(PASS_SCORE)} l="geçme puanı" />
                  </Card>
                )}
                <T v="body" color={colors.ink2}>{st.desc}</T>
                {n === 3 && active && <Button label="Deneme sınavı çöz" onPress={() => router.push('/sinav/deneme')} style={{ alignSelf: 'flex-start', marginTop: 4 }} />}
                {!active && (
                  <Pressable accessibilityRole="button" onPress={() => setProfile({ journeyStep: n })} hitSlop={8}>
                    <T v="small" color={colors.primary} style={{ fontFamily: fonts.bodyBold }}>{done ? 'Tamamlandı olarak işaretli' : 'Buradayım'}</T>
                  </Pressable>
                )}
              </View>
            </View>
          );
        })}
      </View>

      <View style={{ flexDirection: 'row', gap: 12, backgroundColor: colors.amberSoft, borderRadius: 22, padding: 16, alignItems: 'flex-start' }}>
        <Icon name="alert" size={24} color={colors.amber} />
        <T v="body" color={colors.amber} style={{ flex: 1 }}>Belge, ücret ve hak sayıları değişebilir. Güncel bilgiyi kurstan ve resmi kaynaklardan teyit et.</T>
      </View>
    </Screen>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <T v="h1" style={{ fontSize: 22 }}>{v}</T>
      <T v="small" color={colors.mute}>{l}</T>
    </View>
  );
}
