import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';
import type { CourseId } from '@/data/types';

const SRC = {
  tc: require('../../assets/course/tc.png'),
  iy: require('../../assets/course/iy.png'),
  at: require('../../assets/course/at.png'),
  ta: require('../../assets/course/ta.png'),
  isaret: require('../../assets/course/isaret.png'),
} as const;
export type CourseIconName = CourseId | 'isaret';
const RATIO: Record<CourseIconName, number> = { tc: 357 / 336, iy: 302 / 347, at: 344 / 333, ta: 315 / 300, isaret: 279 / 304 };

/** Ders ikonu (maskotlu): size = yükseklik. */
export function CourseIcon({ name, size = 72, style }: { name: CourseIconName; size?: number; style?: StyleProp<ImageStyle> }) {
  return <Image source={SRC[name]} accessibilityIgnoresInvertColors style={[{ height: size, width: size * RATIO[name] }, style]} resizeMode="contain" />;
}
