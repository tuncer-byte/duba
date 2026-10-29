import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

const SRC = {
  happy: require('../../assets/mascot/happy.png'),
  sad: require('../../assets/mascot/sad.png'),
  think: require('../../assets/mascot/think.png'),
  study: require('../../assets/mascot/study.png'),
  wink: require('../../assets/mascot/wink.png'),
  cheer: require('../../assets/mascot/cheer.png'),
} as const;
export type MascotName = keyof typeof SRC;

// Görsellerin en/boy oranı (genişlik / yükseklik)
const RATIO: Record<MascotName, number> = { happy: 401 / 540, sad: 360 / 498, think: 335 / 525, study: 401 / 508, wink: 366 / 488, cheer: 405 / 534 };

/** Maskot: height verilir, genişlik oranla hesaplanır. */
export function Mascot({ name, height = 120, style }: { name: MascotName; height?: number; style?: StyleProp<ImageStyle> }) {
  return <Image source={SRC[name]} accessibilityIgnoresInvertColors style={[{ height, width: height * RATIO[name] }, style]} resizeMode="contain" />;
}
