import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Sign } from '@/components/Sign';
import { Card, Chip, Header, Screen, T } from '@/components/ui';
import { GROUP_NAMES, SIGN_META, type SignGroup } from '@/data/signMeta';
import { colors } from '@/theme';

const GROUPS = Object.keys(GROUP_NAMES) as SignGroup[];

/** Trafik işaretleri rehberi: gruplara göre levhalar, anlamları ve ipuçları. */
export default function SignsGuide() {
  const router = useRouter();
  const [group, setGroup] = useState<SignGroup | 'all'>('all');
  const list = useMemo(() => SIGN_META.filter((s) => group === 'all' || s.group === group), [group]);
  return (
    <Screen>
      <Header title="Trafik İşaretleri" onBack={() => router.back()} />
      <T v="body" color={colors.ink2}>Şekil ve renk, levhanın grubunu söyler. Önce şekle, sonra renge, sonra simgeye bak.</T>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        <Chip label="Tümü" active={group === 'all'} onPress={() => setGroup('all')} />
        {GROUPS.map((g) => <Chip key={g} label={GROUP_NAMES[g].replace(' işareti', '')} active={group === g} onPress={() => setGroup(g)} />)}
      </View>
      {list.map((s) => (
        <Card key={s.id} style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
          <Sign id={s.id} size={84} />
          <View style={{ flex: 1, gap: 4 }}>
            <T v="title">{s.name}</T>
            <T v="small" color={colors.ink2}>{s.hint}</T>
            <T v="caption" color={colors.primary}>{GROUP_NAMES[s.group]}</T>
          </View>
        </Card>
      ))}
    </Screen>
  );
}
