import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Mascot } from '@/components/Mascot';
import { inputStyle } from '@/components/ProfileSheet';
import { Button, Pill, Screen, T } from '@/components/ui';
import { useApp } from '@/store/app';
import { colors } from '@/theme';

export default function Welcome() {
  const { setProfile } = useApp();
  const [name, setName] = useState('');
  return (
    <Screen contentStyle={{ gap: 18 }}>
      <View style={{ gap: 8 }}>
        <Mascot name="wink" height={130} style={{ alignSelf: 'center' }} />
        <T v="h1" color={colors.primary}>duba</T>
        <T v="display">Ehliyet sınavına hazırlan.</T>
        <T v="body" color={colors.ink2}>Sınav soruları, deneme sınavları ve adım adım konu anlatımı. Hepsi tek yerde, sade ve anlaşılır.</T>
      </View>
      <View style={{ gap: 6 }}>
        <T v="caption" color={colors.mute}>Sana nasıl hitap edelim?</T>
        <TextInput value={name} onChangeText={setName} placeholder="Adın" placeholderTextColor={colors.faint} style={inputStyle} returnKeyType="done" />
      </View>
      <View style={{ gap: 8 }}>
        <T v="caption" color={colors.mute}>Ehliyet sınıfı</T>
        <Pill label="B sınıfı (otomobil)" />
      </View>
      <Button label="Başla" disabled={!name.trim()} onPress={() => setProfile({ name: name.trim() })} />
    </Screen>
  );
}
