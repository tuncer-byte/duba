import React from 'react';
import Svg, { Circle, G, Line, Path, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { DiagramId, isDiagramId } from '@/data/diagramIds';

/**
 * Duba'nın kendi çizdiği şematik diyagramlar (100x100 viewBox): gösterge paneli ışıkları,
 * yatay yol işaretleri, trafik görevlisi işaretleri ve ilk yardım pozisyonları.
 * Resmî görsellerin kopyası değildir; sade ve eğitim amaçlı çizimlerdir.
 */
const RED = '#E5322D';
const AMB = '#F5A400';
const GRN = '#2DB84C';
const BLU = '#2F7BFF';
const WHT = '#FFFFFF';
const DARK = '#1E252D';
const ROAD = '#4A4F57';
const SKIN = '#F1C9A5';
const VEST = '#F26B1D';

const sw = { strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };

/* ───────── Gösterge paneli ışıkları ───────── */
const Lamp = ({ children }: { children: React.ReactNode }) => (
  <>
    <Rect x={4} y={4} width={92} height={92} rx={16} fill={DARK} />
    {children}
  </>
);

const lights: Record<string, () => React.ReactNode> = {
  'l-yag': () => (
    <Lamp>
      <G stroke={RED} strokeWidth={5} {...sw}>
        <Path d="M28 46 h34 v22 h-34 z" />
        <Path d="M62 50 l16 -8" />
        <Path d="M28 50 l-10 -8" />
        <Path d="M40 46 v-6 h14 v6" />
      </G>
      <Path d="M84 56 q-5 8 0 10 q5 -2 0 -10z" fill={RED} />
    </Lamp>
  ),
  'l-aku': () => (
    <Lamp>
      <Rect x={20} y={36} width={60} height={36} rx={3} stroke={RED} strokeWidth={5} fill="none" />
      <Rect x={27} y={27} width={10} height={9} fill={RED} />
      <Rect x={63} y={27} width={10} height={9} fill={RED} />
      <G stroke={RED} strokeWidth={4.5} {...sw}>
        <Path d="M30 54 h12 M36 48 v12" />
        <Path d="M60 54 h12" />
      </G>
    </Lamp>
  ),
  'l-motor': () => (
    <Lamp>
      <G stroke={AMB} strokeWidth={5} {...sw}>
        <Path d="M30 40 h14 l4 -6 h14 v6 h6 v8 h8 v14 h-8 v6 h-34 z" />
        <Path d="M22 46 v14" />
      </G>
    </Lamp>
  ),
  'l-abs': () => (
    <Lamp>
      <Circle cx={50} cy={50} r={26} stroke={AMB} strokeWidth={5} fill="none" />
      <G stroke={AMB} strokeWidth={4.5} {...sw}>
        <Path d="M16 34 q-8 16 0 32" />
        <Path d="M84 34 q8 16 0 32" />
      </G>
      <SvgText x={50} y={57} fontSize={19} fontWeight="bold" fill={AMB} textAnchor="middle">ABS</SvgText>
    </Lamp>
  ),
  'l-airbag': () => (
    <Lamp>
      <Circle cx={36} cy={30} r={7} fill={RED} />
      <Path d="M30 42 h14 l6 20 h-10 l-2 14 h-8 z" fill={RED} />
      <Circle cx={64} cy={56} r={15} fill={RED} />
    </Lamp>
  ),
  'l-fren': () => (
    <Lamp>
      <Circle cx={50} cy={50} r={22} stroke={RED} strokeWidth={5} fill="none" />
      <G stroke={RED} strokeWidth={4.5} {...sw}>
        <Path d="M20 34 q-8 16 0 32" />
        <Path d="M80 34 q8 16 0 32" />
        <Path d="M50 38 v14" />
      </G>
      <Circle cx={50} cy={60} r={2.8} fill={RED} />
    </Lamp>
  ),
  'l-kapi': () => (
    <Lamp>
      <Rect x={32} y={20} width={36} height={60} rx={10} stroke={RED} strokeWidth={5} fill="none" />
      <Path d="M32 42 L14 52 L14 70 L32 62" stroke={RED} strokeWidth={5} fill="none" strokeLinejoin="round" />
      <Line x1={36} y1={36} x2={64} y2={36} stroke={RED} strokeWidth={4} strokeLinecap="round" />
    </Lamp>
  ),
  'l-kemer': () => (
    <Lamp>
      <Circle cx={50} cy={25} r={8} fill={RED} />
      <Path d="M38 38 h24 l4 30 h-32 z" stroke={RED} strokeWidth={4} fill="none" strokeLinejoin="round" />
      <Path d="M40 38 L64 66" stroke={RED} strokeWidth={6} strokeLinecap="round" />
      <Path d="M32 76 h36" stroke={RED} strokeWidth={5} strokeLinecap="round" />
    </Lamp>
  ),
  'l-sicaklik': () => (
    <Lamp>
      <G stroke={RED} strokeWidth={5} {...sw}>
        <Path d="M38 22 v36 a10 10 0 1 0 12 0 v-36 z" transform="translate(-6 0)" />
        <Path d="M56 40 q5 -5 10 0 t10 0" />
        <Path d="M56 56 q5 -5 10 0 t10 0" />
      </G>
    </Lamp>
  ),
  'l-yakit': () => (
    <Lamp>
      <G stroke={AMB} strokeWidth={5} {...sw}>
        <Path d="M24 76 V28 a4 4 0 0 1 4 -4 h22 a4 4 0 0 1 4 4 v48 z" />
        <Path d="M30 32 h18 v14 h-18 z" />
        <Path d="M54 40 h8 a6 6 0 0 1 6 6 v18 a5 5 0 0 0 10 0 v-24 l-8 -8" />
        <Path d="M20 76 h38" />
      </G>
    </Lamp>
  ),
  'l-buji': () => (
    <Lamp>
      <G stroke={AMB} strokeWidth={5} {...sw}>
        <Path d="M26 50 c0 -16 14 -16 14 0 s14 16 14 0 s14 -16 14 0" />
        <Path d="M20 50 h6 M68 50 h12" />
      </G>
    </Lamp>
  ),
  'l-lastik': () => (
    <Lamp>
      <G stroke={AMB} strokeWidth={5} {...sw}>
        <Path d="M26 74 V50 q0 -24 24 -24 q24 0 24 24 v24 h-10 v-6 h-28 v6 z" transform="translate(0 0)" />
        <Path d="M50 40 v14" />
      </G>
      <Circle cx={50} cy={62} r={3} fill={AMB} />
    </Lamp>
  ),
  'l-esp': () => (
    <Lamp>
      <G stroke={AMB} strokeWidth={4.5} {...sw}>
        <Path d="M34 22 h32 l6 16 v18 h-44 v-18 z" />
        <Path d="M26 68 q10 -8 20 0 t20 0 t18 0" />
        <Path d="M26 80 q10 -8 20 0 t20 0 t18 0" />
      </G>
      <SvgText x={50} y={50} fontSize={14} fontWeight="bold" fill={AMB} textAnchor="middle">ESP</SvgText>
    </Lamp>
  ),
  'l-uzun': () => (
    <Lamp>
      <G stroke={BLU} strokeWidth={5} {...sw}>
        <Path d="M54 26 q24 0 24 24 q0 24 -24 24 q-10 -24 0 -48 z" />
        <Path d="M16 32 h28 M16 44 h28 M16 56 h28 M16 68 h28" />
      </G>
    </Lamp>
  ),
  'l-direksiyon': () => (
    <Lamp>
      <G stroke={AMB} strokeWidth={5} {...sw}>
        <Circle cx={44} cy={50} r={26} />
        <Path d="M18 50 h16 M54 50 h16 M44 58 v18" />
        <Circle cx={44} cy={50} r={6} />
      </G>
      <SvgText x={82} y={62} fontSize={30} fontWeight="bold" fill={AMB} textAnchor="middle">!</SvgText>
    </Lamp>
  ),
  'l-dortlu': () => (
    <Lamp>
      <Polygon points="50,18 86,80 14,80" stroke={RED} strokeWidth={5.5} fill="none" strokeLinejoin="round" />
      <Polygon points="50,40 68,70 32,70" stroke={RED} strokeWidth={4.5} fill="none" strokeLinejoin="round" />
    </Lamp>
  ),
};

/* ───────── Yatay yol işaretleri (kuşbakışı; sürücü alttan yukarı gelir) ───────── */
const Road = ({ children }: { children?: React.ReactNode }) => (
  <>
    <Rect x={4} y={4} width={92} height={92} rx={14} fill={ROAD} />
    <Line x1={12} y1={6} x2={12} y2={94} stroke="#C9CDD2" strokeWidth={1.5} />
    <Line x1={88} y1={6} x2={88} y2={94} stroke="#C9CDD2" strokeWidth={1.5} />
    {children}
  </>
);
const Arrow = ({ x, y, turn }: { x: number; y: number; turn?: 'left' }) => (
  <G fill={WHT}>
    {turn ? (
      <>
        <Path d={`M${x - 2} ${y + 8} V${y + 2} H${x - 16} V${y - 3} L${x - 26} ${y + 4} L${x - 16} ${y + 11} V${y + 6} H${x + 2} V${y + 32} H${x - 2} z`} />
      </>
    ) : (
      <>
        <Polygon points={`${x - 9},${y + 10} ${x + 9},${y + 10} ${x},${y - 6}`} />
        <Rect x={x - 3} y={y + 10} width={6} height={22} />
      </>
    )}
  </G>
);

const markings: Record<string, () => React.ReactNode> = {
  'm-kesik': () => (
    <Road>
      {[10, 34, 58, 82].map((y) => <Rect key={y} x={48} y={y - 6} width={4} height={14} fill={WHT} />)}
    </Road>
  ),
  'm-surekli': () => (
    <Road>
      <Rect x={48} y={6} width={4} height={88} fill={WHT} />
    </Road>
  ),
  'm-cift': () => (
    <Road>
      <Rect x={44} y={6} width={4} height={88} fill={WHT} />
      <Rect x={52} y={6} width={4} height={88} fill={WHT} />
    </Road>
  ),
  'm-yaya': () => (
    <Road>
      {[14, 26, 38, 50, 62, 74].map((x) => <Rect key={x} x={x} y={32} width={7} height={36} fill={WHT} />)}
    </Road>
  ),
  'm-durma': () => (
    <Road>
      <Rect x={12} y={40} width={76} height={7} fill={WHT} />
      <Rect x={48} y={6} width={4} height={26} fill={WHT} />
    </Road>
  ),
  'm-ok': () => (
    <Road>
      <Arrow x={58} y={28} turn="left" />
    </Road>
  ),
  'm-yolver': () => (
    <Road>
      {[16, 38, 60].map((x) => <Polygon key={x} points={`${x},38 ${x + 20},38 ${x + 10},62`} fill={WHT} />)}
    </Road>
  ),
  'm-tarama': () => (
    <Road>
      <Rect x={26} y={14} width={48} height={72} fill="none" stroke={WHT} strokeWidth={3} />
      <Path d="M26 34 L74 14 M26 48 L74 28 M26 62 L74 42 M26 76 L74 56 M38 86 L74 70" stroke={WHT} strokeWidth={3} />
    </Road>
  ),
};

/* ───────── Trafik görevlisi işaretleri ───────── */
const Figure = ({ children, palm }: { children?: React.ReactNode; palm?: boolean }) => (
  <>
    <Rect x={4} y={4} width={92} height={92} rx={14} fill="#EAF1F8" />
    <Line x1={4} y1={88} x2={96} y2={88} stroke="#B7C3D0" strokeWidth={2} />
    <Rect x={36} y={62} width={11} height={26} rx={3} fill="#2C3E66" />
    <Rect x={53} y={62} width={11} height={26} rx={3} fill="#2C3E66" />
    <Rect x={34} y={30} width={32} height={36} rx={6} fill={VEST} />
    <Rect x={34} y={46} width={32} height={4} fill="#fff" />
    <Circle cx={50} cy={20} r={9} fill={SKIN} />
    <Path d="M40 16 q10 -12 20 0 z" fill="#2C3E66" />
    {children}
    {palm ? <Circle cx={50} cy={46} r={10} fill={SKIN} stroke="#fff" strokeWidth={2} /> : null}
  </>
);
const Arm = ({ d }: { d: string }) => <Path d={d} stroke={VEST} strokeWidth={9} strokeLinecap="round" fill="none" />;
const Hand = ({ x, y }: { x: number; y: number }) => <Circle cx={x} cy={y} r={5} fill={SKIN} />;

const officers: Record<string, () => React.ReactNode> = {
  'o-yukari': () => (
    <Figure>
      <Arm d="M66 34 L74 8" /><Hand x={75} y={6} />
      <Arm d="M34 34 L26 62" /><Hand x={26} y={64} />
    </Figure>
  ),
  'o-yanlar': () => (
    <Figure>
      <Arm d="M66 36 L90 36" /><Hand x={92} y={36} />
      <Arm d="M34 36 L10 36" /><Hand x={8} y={36} />
    </Figure>
  ),
  'o-on': () => (
    <Figure palm>
      <Arm d="M34 34 L26 62" /><Hand x={26} y={64} />
      <Arm d="M66 34 L74 62" /><Hand x={74} y={64} />
    </Figure>
  ),
  'o-yavasla': () => (
    <Figure>
      <Arm d="M66 36 L88 36" /><Hand x={90} y={36} />
      <Arm d="M34 34 L26 62" /><Hand x={26} y={64} />
      <G stroke="#1C6B3A" strokeWidth={3} {...sw}>
        <Path d="M78 24 v-10 m-4 4 l4 -5 l4 5" />
        <Path d="M78 48 v10 m-4 -4 l4 5 l4 -5" />
      </G>
    </Figure>
  ),
  'o-cagir': () => (
    <Figure>
      <Arm d="M66 34 L82 22 L70 8" /><Hand x={69} y={6} />
      <Arm d="M34 34 L26 62" /><Hand x={26} y={64} />
      <Path d="M84 40 q8 -14 -2 -26" stroke="#1C6B3A" strokeWidth={3} {...sw} />
    </Figure>
  ),
};

/* ───────── İlk yardım pozisyonları (yandan şematik) ───────── */
const Bed = ({ children }: { children?: React.ReactNode }) => (
  <>
    <Rect x={4} y={4} width={92} height={92} rx={14} fill="#EAF1F8" />
    <Rect x={8} y={74} width={84} height={8} rx={3} fill="#B7C3D0" />
    {children}
  </>
);
const body = { stroke: '#2C3E66', strokeWidth: 9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' };

const aids: Record<string, () => React.ReactNode> = {
  'fa-yan': () => (
    <Bed>
      <Circle cx={22} cy={62} r={9} fill={SKIN} />
      <Path d="M32 66 L62 66" {...body} />
      <Path d="M62 66 L76 54 L86 66" {...body} />
      <Path d="M62 66 L74 72 L84 70" {...body} opacity={0.55} />
      <Path d="M34 62 L44 50 L30 46" stroke={SKIN} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </Bed>
  ),
  'fa-sok': () => (
    <Bed>
      <Rect x={60} y={64} width={14} height={10} fill="#9AA8B8" />
      <Circle cx={16} cy={66} r={9} fill={SKIN} />
      <Path d="M26 68 L56 68" {...body} />
      <Path d="M56 68 L84 46" {...body} />
      <G stroke={GRN} strokeWidth={3} {...sw}>
        <Path d="M70 36 l8 -8 m-2 0 h2 v2" />
      </G>
    </Bed>
  ),
  'fa-kpr': () => (
    <Bed>
      <Circle cx={14} cy={66} r={8} fill={SKIN} />
      <Path d="M24 68 L84 68" {...body} />
      <Rect x={38} y={44} width={22} height={10} rx={4} fill={SKIN} stroke="#C9996F" strokeWidth={1.5} />
      <Rect x={41} y={38} width={16} height={8} rx={4} fill={SKIN} stroke="#C9996F" strokeWidth={1.5} />
      <Path d="M49 12 V32" stroke={RED} strokeWidth={4} strokeLinecap="round" />
      <Polygon points="42,30 56,30 49,40" fill={RED} />
    </Bed>
  ),
  'fa-hava': () => (
    <Bed>
      <Circle cx={22} cy={66} r={9} fill={SKIN} transform="rotate(-20 22 66)" />
      <Path d="M32 68 L84 68" {...body} />
      <Path d="M14 46 q10 -6 14 6" stroke={SKIN} strokeWidth={5} strokeLinecap="round" fill="none" />
      <Path d="M16 80 q8 -4 14 -2" stroke={SKIN} strokeWidth={5} strokeLinecap="round" fill="none" />
      <Path d="M30 40 q-8 8 -6 18" stroke={GRN} strokeWidth={3} strokeLinecap="round" fill="none" />
      <Polygon points="20,56 30,58 26,48" fill={GRN} />
    </Bed>
  ),
  'fa-kanama': () => (
    <Bed>
      <Path d="M14 70 L52 42 L86 24" stroke={SKIN} strokeWidth={14} strokeLinecap="round" fill="none" />
      <Path d="M44 46 q6 -2 10 6 q-5 6 -12 0 z" fill={RED} />
      <Rect x={34} y={30} width={26} height={12} rx={5} fill="#fff" stroke="#9AA8B8" strokeWidth={1.5} transform="rotate(-30 47 36)" />
      <Path d="M46 10 V26" stroke={RED} strokeWidth={4} strokeLinecap="round" />
      <Polygon points="39,24 53,24 46,34" fill={RED} />
    </Bed>
  ),
  'fa-burun': () => (
    <>
      <Rect x={4} y={4} width={92} height={92} rx={14} fill="#EAF1F8" />
      <Rect x={22} y={56} width={36} height={32} rx={6} fill="#2C3E66" />
      <Circle cx={60} cy={34} r={14} fill={SKIN} />
      <Path d="M70 34 l8 6 l-8 2" fill={SKIN} />
      <Path d="M66 44 L58 48" stroke="#fff" strokeWidth={5} strokeLinecap="round" />
      <Path d="M44 58 L66 42" stroke="#2C3E66" strokeWidth={9} strokeLinecap="round" />
      <Path d="M76 48 q4 6 0 10 q-4 -4 0 -10z" fill={RED} />
    </>
  ),
};

const REGISTRY: Record<DiagramId, () => React.ReactNode> = { ...lights, ...markings, ...officers, ...aids } as Record<DiagramId, () => React.ReactNode>;

export function Diagram({ id, size = 150 }: { id: string; size?: number }) {
  if (!isDiagramId(id)) return null;
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" accessibilityLabel={id}>
      {REGISTRY[id]()}
    </Svg>
  );
}
