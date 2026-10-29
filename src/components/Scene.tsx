import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G, Path, Rect, Text as SvgText } from 'react-native-svg';
import { Sign } from './Sign';
import type { SceneCar, SceneDir, SceneSpec } from '@/data/media';

const ROT: Record<SceneDir, number> = { S: 0, W: 90, N: 180, E: 270 };
const CARCOL = ['#168D3F', '#D97706', '#7C3AED', '#C0392B', '#2563EB'];

function rotPt(x: number, y: number, deg: number): [number, number] {
  const dx = x - 150, dy = y - 150;
  const r = (deg * Math.PI) / 180;
  return [150 + dx * Math.cos(r) - dy * Math.sin(r), 150 + dx * Math.sin(r) + dy * Math.cos(r)];
}

function pathFor(go: SceneCar['go']) {
  if (go === 'left') return 'M175 205 L175 160 Q175 125 140 125 L90 125';
  if (go === 'right') return 'M175 205 L175 190 Q175 175 190 175 L235 175';
  return 'M175 205 L175 60';
}

function CarShape({ car, idx }: { car: SceneCar; idx: number }) {
  const deg = ROT[car.from];
  const color = car.kind === 'ambulance' ? '#FFFFFF' : car.kind === 'fire' ? '#D6181F' : car.color ?? CARCOL[idx % CARCOL.length];
  const [lx, ly] = rotPt(175, 240, deg);
  const isBig = car.kind === 'bus' || car.kind === 'tram';
  return (
    <>
      <G transform={`rotate(${deg} 150 150)`}>
        <Path d={pathFor(car.go)} stroke={color === '#FFFFFF' ? '#C0392B' : color} strokeWidth={4} strokeDasharray="2 7" strokeLinecap="round" fill="none" />
        <Path d={pathFor(car.go)} stroke="none" fill="none" />
        <Rect x={175 - 15} y={isBig ? 214 : 222} width={30} height={isBig ? 58 : 40} rx={9} fill={color} stroke="#16211F" strokeWidth={1.5} />
        <Rect x={175 - 10} y={isBig ? 220 : 227} width={20} height={9} rx={3} fill="#FFFFFF" opacity={0.85} />
        {car.kind === 'fire' && <Path d="M165 232 v22 M185 232 v22 M165 243 h20" stroke="#FFFFFF" strokeWidth={2.5} />}
        {car.kind === 'ambulance' && <Path d="M175 238 v12 M169 244 h12" stroke="#C0392B" strokeWidth={4} />}
      </G>
      <G>
        <Circle cx={lx} cy={ly + 2} r={11} fill="#16211F" opacity={car.kind === 'ambulance' ? 1 : 0.9} />
        <SvgText x={lx} y={ly + 7} fontSize={15} fontWeight="bold" fill="#FFFFFF" textAnchor="middle">{car.label}</SvgText>
      </G>
    </>
  );
}

function Light({ dir, color }: { dir: SceneDir; color: 'red' | 'yellow' | 'green' }) {
  const [x, y] = rotPt(228, 262, ROT[dir]);
  const c = { red: '#D6181F', yellow: '#F9C80E', green: '#1CA84A' }[color];
  return (
    <G>
      <Rect x={x - 9} y={y - 9} width={18} height={18} rx={9} fill="#16211F" />
      <Circle cx={x} cy={y} r={6} fill={c} />
    </G>
  );
}

/** Trafik görevlisi: kollar yanlara açık; önü/arkası `dir` ekseninde (kollar bu eksene dik uzanır). */
function Officer({ dir }: { dir: SceneDir }) {
  const horizontalArms = dir === 'S' || dir === 'N';
  return (
    <G>
      <Rect x={horizontalArms ? 128 : 147} y={horizontalArms ? 147 : 128} width={horizontalArms ? 44 : 6} height={horizontalArms ? 6 : 44} rx={3} fill="#F59E0B" stroke="#16211F" strokeWidth={1} />
      <Circle cx={150} cy={150} r={7} fill="#2563EB" stroke="#16211F" strokeWidth={1.5} />
      <Circle cx={150} cy={150} r={3} fill="#F2C9A0" />
    </G>
  );
}

export function Scene({ spec, size = 300 }: { spec: SceneSpec; size?: number }) {
  const k = size / 300;
  const signs = Object.entries(spec.signs ?? {}) as [SceneDir, string][];
  return (
    <View style={{ width: size, height: size, borderRadius: 20, overflow: 'hidden', backgroundColor: '#E8EFE4' }}>
      <Svg width={size} height={size} viewBox="0 0 300 300" accessibilityLabel="Kavşak krokisi">
        {spec.type === 'roundabout' ? (
          <>
            <Rect x={125} y={0} width={50} height={300} fill="#5B6664" />
            <Rect x={0} y={125} width={300} height={50} fill="#5B6664" />
            <Circle cx={150} cy={150} r={72} fill="#5B6664" />
            <Circle cx={150} cy={150} r={34} fill="#9DC08B" />
            <Path d="M150 78 A72 72 0 0 0 78 150" stroke="#FFFFFF" strokeWidth={0} fill="none" />
          </>
        ) : (
          <>
            {spec.missing !== 'N' && <Rect x={125} y={0} width={50} height={150} fill="#5B6664" />}
            {spec.missing !== 'S' && <Rect x={125} y={150} width={50} height={150} fill="#5B6664" />}
            {spec.missing !== 'W' && <Rect x={0} y={125} width={150} height={50} fill="#5B6664" />}
            {spec.missing !== 'E' && <Rect x={150} y={125} width={150} height={50} fill="#5B6664" />}
            <Rect x={125} y={125} width={50} height={50} fill="#5B6664" />
            {spec.missing !== 'N' && <Path d="M150 0 V120" stroke="#FFFFFF" strokeWidth={2.5} strokeDasharray="10 8" />}
            {spec.missing !== 'S' && <Path d="M150 180 V300" stroke="#FFFFFF" strokeWidth={2.5} strokeDasharray="10 8" />}
            {spec.missing !== 'W' && <Path d="M0 150 H120" stroke="#FFFFFF" strokeWidth={2.5} strokeDasharray="10 8" />}
            {spec.missing !== 'E' && <Path d="M180 150 H300" stroke="#FFFFFF" strokeWidth={2.5} strokeDasharray="10 8" />}
          </>
        )}
        {spec.officer && <Officer dir={spec.officer} />}
        {spec.cars.map((c, i) => <CarShape key={i} car={c} idx={i} />)}
        {Object.entries(spec.light ?? {}).map(([d, col]) => <Light key={d} dir={d as SceneDir} color={col!} />)}
      </Svg>
      {signs.map(([d, id]) => {
        const [x, y] = rotPt(232, 255, ROT[d]);
        const s = 46 * k;
        return (
          <View key={d} style={{ position: 'absolute', left: x * k - s / 2, top: y * k - s / 2 }}>
            <Sign id={id} size={s} />
          </View>
        );
      })}
    </View>
  );
}
