import React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { colors } from '@/theme';

type Shape = ['p', string] | ['c', number, number, number] | ['r', number, number, number, number, number];

const ICONS = {
  home: [['p', 'M3.5 10.8 12 3.5l8.5 7.3V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-5.8H9.2v5.8H5A1.5 1.5 0 0 1 3.5 19z']],
  doc: [['p', 'M6.5 3h8.2L19 7.3V20a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z'], ['p', 'M8.8 11h6.4M8.8 14.5h6.4M8.8 7.5h3']],
  book: [['p', 'M5 5.5A2.5 2.5 0 0 1 7.5 3H19v14.5H7.5A2.5 2.5 0 0 0 5 20z'], ['p', 'M5 20a2.5 2.5 0 0 0 2.5 1H19']],
  chart: [['p', 'M4 20.5h16M7.5 20.5v-6.5M12 20.5V7M16.5 20.5v-9.5']],
  play: [['p', 'M8 5.5v13l10.5-6.5z']],
  xcircle: [['c', 12, 12, 8.5], ['p', 'M9 9l6 6M15 9l-6 6']],
  road: [['p', 'M8.5 21 10.3 3M15.5 21 13.7 3M12 6.5v2M12 11.5v2M12 16.5v2']],
  back: [['p', 'M15 5.5 8.5 12l6.5 6.5']],
  forward: [['p', 'M9 5.5 15.5 12 9 18.5']],
  volume: [['p', 'M4 9.5v5h3.8L13 18.5v-13L7.8 9.5z'], ['p', 'M16 9.3a4 4 0 0 1 0 5.4M18.4 6.8a7.5 7.5 0 0 1 0 10.4']],
  check: [['p', 'M5 12.5 9.8 17.3 19 7.5']],
  flag: [['p', 'M6 21V4M6 4.5h11.5l-2.3 4 2.3 4H6']],
  timer: [['c', 12, 13.5, 7.5], ['p', 'M12 9.5v4l2.5 1.8M9.5 2.5h5']],
  bulb: [['p', 'M9.2 18h5.6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z']],
  alert: [['c', 12, 12, 8.5], ['p', 'M12 7.8v5M12 16.2v.3']],
  search: [['c', 11, 11, 6.8], ['p', 'M20 20l-4.2-4.2']],
  trend: [['p', 'M3.5 17 9.5 11l4 4 7-7.5M15.5 7.5h5v5']],
  x: [['p', 'M6.5 6.5l11 11M17.5 6.5l-11 11']],
  lock: [['r', 5.5, 10.5, 13, 9.5, 2.5], ['p', 'M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5']],
  repeat: [['p', 'M4 11a7 7 0 0 1 12-4.5L19 9M20 13a7 7 0 0 1-12 4.5L5 15M19 4.5V9h-4.5M5 19.5V15h4.5']],
  trophy: [['p', 'M8 4h8v5a4 4 0 0 1-8 0zM8 6H5v1.5A3 3 0 0 0 8 10.5M16 6h3v1.5a3 3 0 0 1-3 3M12 13v4M8.5 20h7M10 17h4']],
  edit: [['p', 'M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4']],
} satisfies Record<string, Shape[]>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 24, color = colors.ink, stroke = 2 }: { name: IconName; size?: number; color?: string; stroke?: number }) {
  const shapes = ICONS[name] as Shape[];
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {shapes.map((s, i) => {
        const common = { stroke: color, strokeWidth: stroke, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };
        if (s[0] === 'p') return <Path key={i} d={s[1]} {...common} />;
        if (s[0] === 'c') return <Circle key={i} cx={s[1]} cy={s[2]} r={s[3]} {...common} />;
        return <Rect key={i} x={s[1]} y={s[2]} width={s[3]} height={s[4]} rx={s[5]} {...common} />;
      })}
    </Svg>
  );
}
