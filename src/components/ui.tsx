import React from 'react';
import {
  Modal, Platform, Pressable, ScrollView, StyleSheet, Text as RNText, View,
  type PressableProps, type StyleProp, type TextProps, type TextStyle, type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon, type IconName } from './Icon';
import { colors, fonts, radius } from '@/theme';

/* ───────── Tipografi ───────── */
type Variant = 'display' | 'h1' | 'h2' | 'title' | 'body' | 'bodyStrong' | 'small' | 'caption' | 'label';
const TYPE: Record<Variant, TextStyle> = {
  display: { fontFamily: fonts.heavy, fontSize: 30, lineHeight: 36, letterSpacing: -0.5 },
  h1: { fontFamily: fonts.heavy, fontSize: 24, lineHeight: 30, letterSpacing: -0.4 },
  h2: { fontFamily: fonts.bold, fontSize: 18, lineHeight: 24, letterSpacing: -0.2 },
  title: { fontFamily: fonts.bold, fontSize: 15, lineHeight: 21 },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22 },
  bodyStrong: { fontFamily: fonts.bodySemi, fontSize: 15, lineHeight: 21 },
  small: { fontFamily: fonts.body, fontSize: 13, lineHeight: 18 },
  caption: { fontFamily: fonts.bodyMed, fontSize: 12, lineHeight: 16 },
  label: { fontFamily: fonts.bold, fontSize: 11, lineHeight: 14, letterSpacing: 0.4 },
};

export function T({ v = 'body', color = colors.ink, style, ...rest }: TextProps & { v?: Variant; color?: string }) {
  return <RNText {...rest} style={[TYPE[v], { color }, style]} />;
}

/* ───────── Sayfa iskeleti ───────── */
export function Screen({
  children, scroll = true, tabBar = false, style, contentStyle, bg = colors.bg,
}: {
  children: React.ReactNode; scroll?: boolean; tabBar?: boolean;
  style?: StyleProp<ViewStyle>; contentStyle?: StyleProp<ViewStyle>; bg?: string;
}) {
  const insets = useSafeAreaInsets();
  const top = Math.max(insets.top, Platform.OS === 'web' ? 16 : 0) + 12;
  const bottom = (tabBar ? 24 : Math.max(insets.bottom, 16)) + 12;
  if (!scroll) {
    return <View style={[{ flex: 1, backgroundColor: bg, paddingTop: top }, style]}>{children}</View>;
  }
  return (
    <ScrollView
      style={[{ flex: 1, backgroundColor: bg }, style]}
      contentContainerStyle={[{ paddingTop: top, paddingBottom: bottom, paddingHorizontal: 20, gap: 16 }, contentStyle]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
  );
}

/* ───────── Kart ───────── */
export function Card({ children, style, onPress, tint, ...rest }: PressableProps & { children?: React.ReactNode; style?: StyleProp<ViewStyle>; tint?: string }) {
  const base: ViewStyle = { backgroundColor: tint ?? colors.card, borderRadius: radius.xl - 4, borderWidth: 1, borderColor: tint ? 'transparent' : colors.border, padding: 18 };
  if (!onPress) return <View style={[base, style]}>{children}</View>;
  return (
    <Pressable accessibilityRole="button" onPress={onPress} {...rest} style={({ pressed }) => [base, pressed && { opacity: 0.85, transform: [{ scale: 0.985 }] }, style]}>
      {children}
    </Pressable>
  );
}

/* ───────── Butonlar ───────── */
type BtnKind = 'primary' | 'white' | 'soft' | 'outline';
export function Button({
  label, onPress, kind = 'primary', icon, disabled, style, flex,
}: { label: string; onPress?: () => void; kind?: BtnKind; icon?: IconName; disabled?: boolean; style?: StyleProp<ViewStyle>; flex?: boolean }) {
  const palette: Record<BtnKind, { bg: string; fg: string; border?: string }> = {
    primary: { bg: colors.primary, fg: colors.onPrimary },
    white: { bg: '#fff', fg: colors.primary },
    soft: { bg: colors.primarySoft, fg: colors.primary },
    outline: { bg: '#fff', fg: colors.ink, border: colors.border },
  };
  const p = palette[kind];
  const fg = disabled ? colors.faint : p.fg;
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        {
          height: 56, borderRadius: 18, paddingHorizontal: 22, backgroundColor: p.bg,
          borderWidth: p.border ? 1.5 : 0, borderColor: p.border, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,
          opacity: pressed ? 0.88 : 1,
        },
        flex && { flex: 1 },
        style,
      ]}
    >
      {icon && <Icon name={icon} size={22} color={fg} />}
      <RNText style={{ fontFamily: fonts.bold, fontSize: 15, color: fg }}>{label}</RNText>
    </Pressable>
  );
}

export function IconButton({ icon, onPress, label, size = 50, bg = '#fff', color = colors.ink, border = true }: { icon: IconName; onPress?: () => void; label: string; size?: number; bg?: string; color?: string; border?: boolean }) {
  return (
    <Pressable
      accessibilityRole="button" accessibilityLabel={label} onPress={onPress} hitSlop={8}
      style={({ pressed }) => ({
        width: size, height: size, borderRadius: 16, backgroundColor: bg, alignItems: 'center', justifyContent: 'center',
        borderWidth: border ? 1 : 0, borderColor: colors.border, opacity: pressed ? 0.8 : 1,
      })}
    >
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
}

export function Pill({ label, bg = colors.primarySoft, fg = colors.primary, style }: { label: string; bg?: string; fg?: string; style?: StyleProp<ViewStyle> }) {
  return (
    <View style={[{ backgroundColor: bg, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 6, alignSelf: 'flex-start' }, style]}>
      <RNText style={{ fontFamily: fonts.bold, fontSize: 12, color: fg }}>{label}</RNText>
    </View>
  );
}

export function Chip({ label, active, onPress }: { label: string; active?: boolean; onPress?: () => void }) {
  return (
    <Pressable
      accessibilityRole="button" accessibilityState={{ selected: !!active }} onPress={onPress}
      style={{
        height: 44, paddingHorizontal: 22, borderRadius: radius.pill, justifyContent: 'center',
        backgroundColor: active ? colors.ink : '#fff', borderWidth: 1.5, borderColor: active ? colors.ink : colors.border,
      }}
    >
      <RNText style={{ fontFamily: fonts.bold, fontSize: 14, color: active ? '#fff' : colors.ink }}>{label}</RNText>
    </Pressable>
  );
}

/* ───────── İlerleme çubuğu ───────── */
export function Bar({ value, color = colors.primary, height = 8, track = colors.track, marker }: { value: number; color?: string; height?: number; track?: string; marker?: number }) {
  const pct = Math.max(0, Math.min(1, value));
  return (
    <View style={{ height, borderRadius: height, backgroundColor: track, overflow: 'visible' }}>
      <View style={{ width: `${pct * 100}%`, height, borderRadius: height, backgroundColor: color }} />
      {marker !== undefined && (
        <View style={{ position: 'absolute', left: `${marker * 100}%`, top: -3, width: 3, height: height + 6, borderRadius: 2, backgroundColor: colors.amberLine }} />
      )}
    </View>
  );
}

/* ───────── Alt sayfa (sheet) ───────── */
export function Sheet({ visible, onClose, children }: { visible: boolean; onClose: () => void; children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <Pressable style={{ flex: 1, backgroundColor: 'rgba(17,24,39,0.45)', justifyContent: 'flex-end' }} onPress={onClose}>
        <Pressable
          onPress={() => {}}
          style={{ backgroundColor: colors.bg, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: 20, paddingBottom: Math.max(insets.bottom, 16) + 12, gap: 14, maxHeight: '90%', width: '100%', maxWidth: 560, alignSelf: 'center' }}
        >
          <View style={{ alignSelf: 'center', width: 44, height: 5, borderRadius: 3, backgroundColor: colors.border, marginBottom: 4 }} />
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

/* ───────── Üst başlık (geri butonlu) ───────── */
export function Header({ title, onBack, right, eyebrow }: { title: string; onBack?: () => void; right?: React.ReactNode; eyebrow?: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
      {onBack && <IconButton icon="back" label="Geri" onPress={onBack} />}
      <View style={{ flex: 1 }}>
        {eyebrow && <T v="label" color={colors.primary} style={{ textTransform: 'uppercase' }}>{eyebrow}</T>}
        <T v="h2" numberOfLines={2}>{title}</T>
      </View>
      {right}
    </View>
  );
}

export const s = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});
