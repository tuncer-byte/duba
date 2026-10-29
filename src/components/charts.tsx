import React, { useState } from 'react';
import { Text as RNText, View } from 'react-native';
import Svg, { Circle, Line, Path, Text as SvgText } from 'react-native-svg';
import { colors, fonts } from '@/theme';

export function Ring({ value, size = 130, stroke = 14, color = colors.green, children }: { value: number; size?: number; stroke?: number; color?: string; children?: React.ReactNode }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value));
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute' }}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke={colors.track} strokeWidth={stroke} fill="none" />
        <Circle
          cx={size / 2} cy={size / 2} r={r} stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round"
          strokeDasharray={`${c * pct} ${c}`} transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      {children}
    </View>
  );
}

/** Ana sayfadaki "Doğru sayın artıyor" çubuk grafiği. Son çubuk vurgulu. */
export function BarTrend({ values, height = 130 }: { values: number[]; height?: number }) {
  const max = Math.max(50, ...values);
  const min = Math.min(...values);
  const lo = Math.max(0, min - 12);
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height, gap: 8 }}>
      {values.map((v, i) => {
        const last = i === values.length - 1;
        const h = 24 + ((v - lo) / Math.max(1, max - lo)) * (height - 24 - 24);
        return (
          <View key={i} style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
            <RNText style={{ fontFamily: last ? fonts.bold : fonts.bodyMed, fontSize: 13, color: last ? colors.ink : colors.mute }}>{v}</RNText>
            <View style={{ width: '100%', height: h, borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 4, borderBottomRightRadius: 4, backgroundColor: last ? colors.primary : colors.primaryTint }} />
          </View>
        );
      })}
    </View>
  );
}

/** Net gelişimi çizgi grafiği + geçme sınırı (kesikli). */
export function NetLine({ values, threshold = 35, height = 130 }: { values: number[]; threshold?: number; height?: number }) {
  const [w, setW] = useState(0);
  const padX = 8, padT = 26, padB = 12;
  const all = [...values, threshold];
  const lo = Math.min(...all) - 3;
  const hi = Math.max(...all) + 3;
  const x = (i: number) => padX + (values.length <= 1 ? (w - padX * 2) / 2 : (i * (w - padX * 2)) / (values.length - 1));
  const y = (v: number) => padT + (1 - (v - lo) / (hi - lo)) * (height - padT - padB);
  const d = values.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const lastI = values.length - 1;
  return (
    <View onLayout={(e) => setW(e.nativeEvent.layout.width)} style={{ height }}>
      {w > 0 && (
        <Svg width={w} height={height}>
          <Line x1={padX} x2={w - padX} y1={y(threshold)} y2={y(threshold)} stroke={colors.amberLine} strokeWidth={2} strokeDasharray="6 5" />
          <SvgText x={padX} y={y(threshold) - 8} fontSize={13} fontFamily={fonts.bodyMed} fill={colors.amber}>{`Geçme sınırı (${threshold})`}</SvgText>
          {values.length > 1 && <Path d={d} stroke={colors.primary} strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />}
          {values.length > 0 && <Circle cx={x(lastI)} cy={y(values[lastI])} r={6.5} fill={colors.primary} />}
        </Svg>
      )}
    </View>
  );
}
