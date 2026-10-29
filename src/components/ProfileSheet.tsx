import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { TextInput, View } from 'react-native';
import { Button, Chip, Sheet, T } from '@/components/ui';
import { ENABLE_DEMO } from '@/config';
import { addDays, toISO, useApp } from '@/store/app';
import { colors, fonts } from '@/theme';

export const inputStyle = {
  height: 52, borderRadius: 16, borderWidth: 1.5, borderColor: colors.border, backgroundColor: '#fff',
  paddingHorizontal: 16, fontFamily: fonts.bodyMed, fontSize: 15, color: colors.ink,
} as const;

export function fmtDate(iso: string | null) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}.${m}.${y}`;
}
export function parseDate(txt: string): string | null {
  const m = txt.trim().match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
  if (!m) return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1]);
  if (d.getMonth() !== +m[2] - 1) return null;
  return toISO(d);
}

export function ProfileSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const router = useRouter();
  const { profile, setProfile, loadDemo, resetAll } = useApp();
  const [name, setName] = useState(profile.name);
  const [date, setDate] = useState(fmtDate(profile.examDate));
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (visible) { setName(profile.name); setDate(fmtDate(profile.examDate)); setConfirmReset(false); }
  }, [visible, profile.name, profile.examDate]);

  const iso = date.trim() === '' ? null : parseDate(date);
  const invalid = date.trim() !== '' && !iso;

  return (
    <Sheet visible={visible} onClose={onClose}>
      <T v="h2">Profilin</T>
      <View style={{ gap: 6 }}>
        <T v="caption" color={colors.mute}>Adın</T>
        <TextInput value={name} onChangeText={setName} placeholder="Adın" placeholderTextColor={colors.faint} style={inputStyle} />
      </View>
      <View style={{ gap: 6 }}>
        <T v="caption" color={colors.mute}>Yazılı sınav tarihin (GG.AA.YYYY)</T>
        <TextInput
          value={date} onChangeText={setDate} placeholder="Örn. 15.12.2026" placeholderTextColor={colors.faint}
          keyboardType="numbers-and-punctuation" style={[inputStyle, invalid && { borderColor: colors.red }]}
        />
        {invalid && <T v="caption" color={colors.red}>Tarih biçimi GG.AA.YYYY olmalı</T>}
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
          {[7, 14, 30, 60].map((n) => (
            <Chip key={n} label={`${n} gün sonra`} onPress={() => setDate(fmtDate(addDays(n)))} />
          ))}
        </View>
      </View>
      <Button
        label="Kaydet" disabled={invalid || !name.trim()}
        onPress={() => { setProfile({ name: name.trim(), examDate: iso }); onClose(); }}
      />
      <View style={{ gap: 8, marginTop: 4 }}>
        <Button kind="soft" label="Ayarlar ve hakkında" onPress={() => { onClose(); router.push('/ayarlar'); }} />
        {ENABLE_DEMO && <Button kind="soft" label="Demo verisini yükle" onPress={() => { loadDemo(); onClose(); }} />}
        <Button
          kind="outline" label={confirmReset ? 'Emin misin? Tüm veriler silinir' : 'Verilerimi sıfırla'}
          onPress={() => { if (confirmReset) { resetAll(); onClose(); } else setConfirmReset(true); }}
        />
      </View>
    </Sheet>
  );
}
