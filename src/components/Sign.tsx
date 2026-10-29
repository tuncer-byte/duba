import React from 'react';
import { Image } from 'react-native';
import Svg, { Circle, Ellipse, G, Path, Polygon, Rect, Text as SvgText } from 'react-native-svg';
import { SIGN_IMAGES } from './signImages';

/**
 * Trafik levhaları: resmî Türkiye levhalarının Wikimedia Commons görselleri (signImages.ts, CC BY-SA 4.0; bkz. credits.ts).
 * Görseli bulunmayan birkaç levha için Duba'nın kendi çizdiği yedek illüstrasyonlar (100x100 viewBox) kullanılır.
 */
const RED = '#D6181F';
const BLUE = '#0B5CB8';
const YEL = '#F9C80E';
const BLK = '#111111';
const WHT = '#FFFFFF';

import type { SignMeta } from '@/data/signMeta';
export type { SignGroup } from '@/data/signMeta';
export { GROUP_NAMES } from '@/data/signMeta';
interface SignDef extends SignMeta { draw: () => React.ReactNode }

/* ───── Zemin şekilleri ───── */
const Triangle = ({ children }: { children?: React.ReactNode }) => (
  <>
    <Polygon points="50,7 95,88 5,88" fill={WHT} stroke={RED} strokeWidth={9} strokeLinejoin="round" />
    {children}
  </>
);
const ProhibitCircle = ({ children, fill = WHT }: { children?: React.ReactNode; fill?: string }) => (
  <>
    <Circle cx={50} cy={50} r={44} fill={fill} stroke={RED} strokeWidth={9} />
    {children}
  </>
);
const BlueCircle = ({ children }: { children?: React.ReactNode }) => (
  <>
    <Circle cx={50} cy={50} r={46} fill={BLUE} stroke={WHT} strokeWidth={3} />
    {children}
  </>
);
const BlueSquare = ({ children }: { children?: React.ReactNode }) => (
  <>
    <Rect x={5} y={5} width={90} height={90} rx={10} fill={BLUE} stroke={WHT} strokeWidth={3} />
    {children}
  </>
);

/* ───── Piktogramlar ───── */
const Person = ({ x = 50, y = 50, s = 1, color = BLK }: { x?: number; y?: number; s?: number; color?: string }) => (
  <G transform={`translate(${x} ${y}) scale(${s})`}>
    <Circle cx={0} cy={-18} r={5.5} fill={color} />
    <Path d="M0 -11 L0 6 M0 -6 L-9 2 M0 -6 L9 0 M0 6 L-7 20 M0 6 L7 20" stroke={color} strokeWidth={4.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </G>
);
const ArrowUp = ({ color = WHT, y = 78, len = 50 }: { color?: string; y?: number; len?: number }) => (
  <>
    <Path d={`M50 ${y} V${y - len + 10}`} stroke={color} strokeWidth={9} strokeLinecap="round" />
    <Polygon points={`50,${y - len - 4} 30,${y - len + 20} 70,${y - len + 20}`} fill={color} />
  </>
);
const CurveRight = ({ color = BLK }: { color?: string }) => (
  <>
    <Path d="M38 80 L38 58 Q38 42 58 40" stroke={color} strokeWidth={8} fill="none" strokeLinecap="round" />
    <Polygon points="56,28 76,40 56,52" fill={color} />
  </>
);
const Slash = ({ x1 = 22, y1 = 78, x2 = 78, y2 = 22 }) => <Path d={`M${x1} ${y1} L${x2} ${y2}`} stroke={RED} strokeWidth={8} strokeLinecap="round" />;
const Car = ({ x, y, color }: { x: number; y: number; color: string }) => (
  <G transform={`translate(${x} ${y})`}>
    <Rect x={-9} y={-18} width={18} height={36} rx={6} fill={color} />
    <Rect x={-6} y={-10} width={12} height={8} rx={2} fill={WHT} opacity={0.85} />
  </G>
);
const SpeedNum = ({ n }: { n: string }) => (
  <SvgText x={50} y={63} fontSize={n.length === 2 ? 42 : 34} fontWeight="bold" fill={BLK} textAnchor="middle">{n}</SvgText>
);

const GREY = '#8E8E8E';
const GREEN = '#0A7A3E';
const Bike = ({ x = 50, y = 52, s = 1, color = BLK }: { x?: number; y?: number; s?: number; color?: string }) => (
  <G transform={`translate(${x} ${y}) scale(${s}) translate(-50 -52)`}>
    <Circle cx={34} cy={62} r={11} stroke={color} strokeWidth={5} fill="none" /><Circle cx={66} cy={62} r={11} stroke={color} strokeWidth={5} fill="none" />
    <Path d="M34 62 L45 40 H58 L66 62 M45 40 L52 62 H34" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </G>
);
const Moto = ({ x = 50, y = 50, s = 1, color = BLK }: { x?: number; y?: number; s?: number; color?: string }) => (
  <G transform={`translate(${x} ${y}) scale(${s}) translate(-50 -50)`}>
    <Circle cx={28} cy={64} r={10} stroke={color} strokeWidth={5} fill="none" /><Circle cx={72} cy={64} r={10} stroke={color} strokeWidth={5} fill="none" />
    <Path d="M28 64 L42 48 H58 L72 64 M58 48 L64 36 H76 M40 48 L36 40 H48" stroke={color} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Rect x={40} y={50} width={20} height={8} rx={2} fill={color} />
  </G>
);
const Truck = ({ x = 50, y = 50, s = 1, color = BLK }: { x?: number; y?: number; s?: number; color?: string }) => (
  <G transform={`translate(${x} ${y}) scale(${s}) translate(-50 -50)`}>
    <Rect x={16} y={32} width={44} height={30} fill={color} />
    <Path d="M62 42 H76 L86 54 V62 H62 Z" fill={color} />
    <Circle cx={32} cy={66} r={7} fill={color} stroke={WHT} strokeWidth={2} /><Circle cx={74} cy={66} r={7} fill={color} stroke={WHT} strokeWidth={2} />
  </G>
);
/** Yan görünüşlü dört ayaklı hayvan; deer=true geyik (boynuzlu), aksi hâlde sığır. */
const Animal = ({ deer = false }: { deer?: boolean }) => (
  <G transform="translate(50 59) scale(0.66) translate(-58 -48)" fill={BLK} stroke={BLK}>
    <Ellipse cx={48} cy={54} rx={18} ry={9} stroke="none" />
    <Path d="M35 60 V80 M42 62 V80 M55 62 V80 M62 60 V80" strokeWidth={4} strokeLinecap="round" />
    {deer ? (
      <>
        <Path d="M60 50 L68 36" strokeWidth={7} strokeLinecap="round" />
        <Circle cx={70} cy={34} r={5} stroke="none" />
        <Path d="M68 29 L63 19 M63 19 L56 17 M63 19 L65 12 M73 29 L77 19 M77 19 L84 17 M77 19 L75 12" strokeWidth={2.5} strokeLinecap="round" fill="none" />
      </>
    ) : (
      <>
        <Path d="M60 50 L70 50" strokeWidth={8} strokeLinecap="round" />
        <Rect x={66} y={46} width={12} height={12} rx={3} stroke="none" />
        <Path d="M68 46 L65 38 M76 46 L79 38" strokeWidth={3} strokeLinecap="round" fill="none" />
        <Path d="M30 52 Q24 56 26 68" strokeWidth={2.5} fill="none" strokeLinecap="round" />
      </>
    )}
  </G>
);
/** "Sona erdi" levhalarındaki çapraz siyah şeritler. */
const EndBars = () => <Path d="M22 64 L64 22 M28 72 L72 28 M36 78 L78 36" stroke={BLK} strokeWidth={5} strokeLinecap="round" />;

const Octagon = () => {
  const pts = Array.from({ length: 8 }, (_, i) => {
    const a = (Math.PI / 4) * i + Math.PI / 8;
    return `${(50 + 46 * Math.cos(a)).toFixed(1)},${(50 + 46 * Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  return (
    <>
      <Polygon points={pts} fill={RED} stroke={WHT} strokeWidth={4} />
      <SvgText x={50} y={61} fontSize={29} fontWeight="bold" fill={WHT} textAnchor="middle">DUR</SvgText>
    </>
  );
};

export const SIGNS: SignDef[] = [
  // ── Tehlike uyarı ──
  { id: 'viraj-sag', name: 'Sağa tehlikeli viraj', group: 'tehlike', hint: 'Yaklaşan virajda hız azaltılır; sollama yapılmaz.', draw: () => <Triangle><CurveRight /></Triangle> },
  { id: 'viraj-sol', name: 'Sola tehlikeli viraj', group: 'tehlike', hint: 'Yaklaşan virajda hız azaltılır; sollama yapılmaz.', draw: () => <Triangle><G transform="translate(100 0) scale(-1 1)"><CurveRight /></G></Triangle> },
  { id: 'yaya-uyari', name: 'Yaya geçidi uyarısı', group: 'tehlike', hint: 'Yaya geçidine yaklaşıldığını bildirir; yavaşla, yayaya yol ver.', draw: () => <Triangle><Person x={50} y={60} s={1.05} /></Triangle> },
  { id: 'okul-gecidi', name: 'Okul geçidi (çocuklar)', group: 'tehlike', hint: 'Çocukların yola çıkabileceği yerdir; hızı düşür, çok dikkatli ol.', draw: () => <Triangle><Person x={40} y={62} s={0.95} /><Person x={62} y={68} s={0.65} /></Triangle> },
  { id: 'iki-yonlu', name: 'İki yönlü trafik', group: 'tehlike', hint: 'Yol bir süre çift yönlü olacaktır; sağda kal.', draw: () => (
    <Triangle>
      <Path d="M41 76 V44 M59 40 V72" stroke={BLK} strokeWidth={6} strokeLinecap="round" />
      <Polygon points="41,32 31,48 51,48" fill={BLK} />
      <Polygon points="59,84 49,68 69,68" fill={BLK} />
    </Triangle>
  ) },
  { id: 'isikli-uyari', name: 'Işıklı trafik işaret cihazı uyarısı', group: 'tehlike', hint: 'İleride ışıklı trafik işaret cihazı vardır; hazırlıklı ol.', draw: () => (
    <Triangle>
      <Rect x={41} y={32} width={18} height={44} rx={5} fill={BLK} />
      <Circle cx={50} cy={43} r={4.6} fill={RED} /><Circle cx={50} cy={54} r={4.6} fill={YEL} /><Circle cx={50} cy={65} r={4.6} fill="#1CA84A" />
    </Triangle>
  ) },
  { id: 'dik-inis', name: 'Dik iniş', group: 'tehlike', hint: 'Uzun inişte düşük vites ve motor freni kullanılır.', draw: () => (
    <Triangle><Path d="M28 46 L72 74" stroke={BLK} strokeWidth={8} strokeLinecap="round" /><Path d="M28 46 L28 74 L72 74 Z" fill={BLK} opacity={0.25} /></Triangle>
  ) },
  { id: 'diger-tehlike', name: 'Diğer tehlikeler', group: 'tehlike', hint: 'Başka bir levhayla belirtilmeyen bir tehlike vardır; dikkat et.', draw: () => (
    <Triangle><Path d="M50 36 V62" stroke={BLK} strokeWidth={9} strokeLinecap="round" /><Circle cx={50} cy={75} r={5.2} fill={BLK} /></Triangle>
  ) },

  // ── Yasak / kısıtlama ──
  { id: 'giris-yasak', name: 'Girilmez', group: 'yasak', hint: 'Bu yola bu yönden girmek yasaktır.', draw: () => (
    <><Circle cx={50} cy={50} r={46} fill={RED} stroke={WHT} strokeWidth={3} /><Rect x={20} y={42} width={60} height={16} rx={3} fill={WHT} /></>
  ) },
  { id: 'trafige-kapali', name: 'Taşıt trafiğine kapalı yol', group: 'yasak', hint: 'Her türlü taşıtın girişine kapalıdır.', draw: () => <ProhibitCircle /> },
  { id: 'park-yasak', name: 'Park etmek yasaktır', group: 'yasak', hint: 'Aracı park edemezsin; kısa süreli duraklama serbesttir.', draw: () => (
    <><Circle cx={50} cy={50} r={44} fill={BLUE} stroke={RED} strokeWidth={9} /><Slash x1={22} y1={78} x2={78} y2={22} /></>
  ) },
  { id: 'duraklama-yasak', name: 'Duraklamak ve park etmek yasaktır', group: 'yasak', hint: 'Bu yerde durulamaz ve park edilemez.', draw: () => (
    <><Circle cx={50} cy={50} r={44} fill={BLUE} stroke={RED} strokeWidth={9} /><Slash x1={22} y1={78} x2={78} y2={22} /><Slash x1={22} y1={22} x2={78} y2={78} /></>
  ) },
  { id: 'sola-donulmez', name: 'Sola dönülmez', group: 'yasak', hint: 'Bu noktada sola dönüş yapılamaz.', draw: () => (
    <ProhibitCircle><Path d="M60 76 V50 Q60 38 46 38 H38" stroke={BLK} strokeWidth={8} fill="none" strokeLinecap="round" /><Polygon points="36,26 22,38 36,50" fill={BLK} /><Slash x1={72} y1={72} x2={28} y2={28} /></ProhibitCircle>
  ) },
  { id: 'saga-donulmez', name: 'Sağa dönülmez', group: 'yasak', hint: 'Bu noktada sağa dönüş yapılamaz.', draw: () => (
    <ProhibitCircle><Path d="M40 76 V50 Q40 38 54 38 H62" stroke={BLK} strokeWidth={8} fill="none" strokeLinecap="round" /><Polygon points="64,26 78,38 64,50" fill={BLK} /><Slash x1={28} y1={72} x2={72} y2={28} /></ProhibitCircle>
  ) },
  { id: 'u-donusu-yasak', name: 'U dönüşü yapılmaz', group: 'yasak', hint: 'Bu noktada geri dönüş (U dönüşü) yasaktır.', draw: () => (
    <ProhibitCircle><Path d="M38 76 V42 Q38 28 50 28 Q62 28 62 42 V56" stroke={BLK} strokeWidth={8} fill="none" strokeLinecap="round" /><Polygon points="52,54 62,70 72,54" fill={BLK} /><Slash x1={72} y1={74} x2={28} y2={26} /></ProhibitCircle>
  ) },
  { id: 'sollama-yasak', name: 'Sollama (geçme) yasağı', group: 'yasak', hint: 'Bu yolda öndeki aracı geçmek yasaktır.', draw: () => (
    <ProhibitCircle><Car x={38} y={50} color={RED} /><Car x={62} y={50} color={BLK} /></ProhibitCircle>
  ) },
  { id: 'hiz-30', name: 'Azami hız 30 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 30 km hızı aşamazsın.', draw: () => <ProhibitCircle><SpeedNum n="30" /></ProhibitCircle> },
  { id: 'hiz-50', name: 'Azami hız 50 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 50 km hızı aşamazsın.', draw: () => <ProhibitCircle><SpeedNum n="50" /></ProhibitCircle> },
  { id: 'hiz-90', name: 'Azami hız 90 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 90 km hızı aşamazsın.', draw: () => <ProhibitCircle><SpeedNum n="90" /></ProhibitCircle> },

  // ── Zorunluluk (mavi daire) ──
  { id: 'ileri-mecburi', name: 'İleri mecburi yön', group: 'zorunlu', hint: 'Yalnızca ileri yönde gidebilirsin.', draw: () => <BlueCircle><ArrowUp /></BlueCircle> },
  { id: 'sola-mecburi', name: 'Sola mecburi yön', group: 'zorunlu', hint: 'Yalnızca sola dönebilirsin.', draw: () => (
    <BlueCircle><Path d="M62 76 V52 Q62 40 48 40 H38" stroke={WHT} strokeWidth={9} fill="none" strokeLinecap="round" /><Polygon points="36,26 20,40 36,54" fill={WHT} /></BlueCircle>
  ) },
  { id: 'saga-mecburi', name: 'Sağa mecburi yön', group: 'zorunlu', hint: 'Yalnızca sağa dönebilirsin.', draw: () => (
    <BlueCircle><Path d="M38 76 V52 Q38 40 52 40 H62" stroke={WHT} strokeWidth={9} fill="none" strokeLinecap="round" /><Polygon points="64,26 80,40 64,54" fill={WHT} /></BlueCircle>
  ) },
  { id: 'donel-kavsak', name: 'Dönel kavşak', group: 'zorunlu', hint: 'Kavşakta saat yönünün tersine dönülür; içerideki araca yol verilir.', draw: () => (
    <BlueCircle>
      {[0, 120, 240].map((a) => (
        <G key={a} transform={`rotate(${a} 50 50)`}>
          <Path d="M50 26 A24 24 0 0 1 72 40" stroke={WHT} strokeWidth={7} fill="none" strokeLinecap="round" />
          <Polygon points="66,30 80,42 62,48" fill={WHT} />
        </G>
      ))}
    </BlueCircle>
  ) },
  { id: 'yaya-yolu', name: 'Yaya yolu', group: 'zorunlu', hint: 'Yalnızca yayalar kullanabilir; taşıt giremez.', draw: () => <BlueCircle><Person x={50} y={52} s={1.35} color={WHT} /></BlueCircle> },
  { id: 'bisiklet-yolu', name: 'Bisiklet yolu', group: 'zorunlu', hint: 'Yalnızca bisikletliler kullanabilir.', draw: () => (
    <BlueCircle>
      <Circle cx={34} cy={62} r={11} stroke={WHT} strokeWidth={5} fill="none" /><Circle cx={66} cy={62} r={11} stroke={WHT} strokeWidth={5} fill="none" />
      <Path d="M34 62 L45 40 H58 L66 62 M45 40 L52 62 H34" stroke={WHT} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </BlueCircle>
  ) },

  // ── Bilgi ──
  { id: 'park-yeri', name: 'Park yeri', group: 'bilgi', hint: 'Araç park edilebilecek yeri gösterir.', draw: () => (
    <BlueSquare><SvgText x={50} y={74} fontSize={66} fontWeight="bold" fill={WHT} textAnchor="middle">P</SvgText></BlueSquare>
  ) },
  { id: 'hastane', name: 'Hastane', group: 'bilgi', hint: 'Yakında hastane olduğunu bildirir; sessiz olunur.', draw: () => (
    <BlueSquare><SvgText x={50} y={72} fontSize={60} fontWeight="bold" fill={WHT} textAnchor="middle">H</SvgText></BlueSquare>
  ) },
  { id: 'yaya-gecidi', name: 'Yaya geçidi', group: 'bilgi', hint: 'Yayaların yolu geçtiği yeri gösterir; yaya geçişine imkân ver.', draw: () => (
    <BlueSquare><Polygon points="50,18 82,76 18,76" fill={WHT} /><Person x={50} y={56} s={0.82} /></BlueSquare>
  ) },
  { id: 'tek-yon', name: 'Tek yönlü yol', group: 'bilgi', hint: 'Yol yalnızca okun gösterdiği yönde kullanılır.', draw: () => (
    <><Rect x={6} y={26} width={88} height={48} rx={8} fill={BLUE} stroke={WHT} strokeWidth={3} /><Path d="M20 50 H70" stroke={WHT} strokeWidth={9} strokeLinecap="round" /><Polygon points="66,32 86,50 66,68" fill={WHT} /></>
  ) },

  // ── Geçiş önceliği ──
  { id: 'dur', name: 'DUR', group: 'oncelik', hint: 'Tam durup yolu kontrol ettikten sonra, güvenliyse geçilir.', draw: () => <Octagon /> },
  { id: 'yol-ver', name: 'Yol ver', group: 'oncelik', hint: 'Yaklaştığın yoldaki araçlara yol verilir.', draw: () => (
    <Polygon points="6,12 94,12 50,90" fill={WHT} stroke={RED} strokeWidth={9} strokeLinejoin="round" />
  ) },
  { id: 'ana-yol', name: 'Öncelikli (ana) yol', group: 'oncelik', hint: 'Bu yolda ilerleyen araçların geçiş üstünlüğü vardır.', draw: () => (
    <><Polygon points="50,4 96,50 50,96 4,50" fill={WHT} stroke={BLK} strokeWidth={3} strokeLinejoin="round" /><Polygon points="50,15 85,50 50,85 15,50" fill={YEL} stroke={BLK} strokeWidth={2} /></>
  ) },
  { id: 'ana-yol-sonu', name: 'Öncelikli yolun sonu', group: 'oncelik', hint: 'Artık geçiş üstünlüğün yoktur; kavşak kurallarına uy.', draw: () => (
    <><Polygon points="50,4 96,50 50,96 4,50" fill={WHT} stroke={BLK} strokeWidth={3} strokeLinejoin="round" /><Polygon points="50,15 85,50 50,85 15,50" fill={YEL} stroke={BLK} strokeWidth={2} /><Path d="M22 78 L78 22 M32 82 L82 32 M18 68 L68 18" stroke={BLK} strokeWidth={4} strokeLinecap="round" /></>
  ) },

  // ── Genişletilmiş set ──
  { id: 'kaygan-yol', name: 'Kaygan yol', group: 'tehlike', hint: 'Yol yüzeyi kaygandır; hızı düşür, ani fren ve direksiyon hareketlerinden kaçın.', draw: () => (
    <Triangle><Car x={50} y={50} color={BLK} /><Path d="M33 78 Q27 68 33 58 T33 38 M67 78 Q61 68 67 58 T67 38" stroke={BLK} strokeWidth={4} fill="none" strokeLinecap="round" /></Triangle>
  ) },
  { id: 'dusen-kaya', name: 'Düşen kaya', group: 'tehlike', hint: 'Yamaçtan kaya düşme tehlikesi vardır; dikkatli ol ve gereksiz durma.', draw: () => (
    <Triangle><Polygon points="26,40 74,78 26,78" fill={BLK} /><Circle cx={40} cy={38} r={5} fill={BLK} /><Circle cx={52} cy={46} r={6} fill={BLK} /><Circle cx={66} cy={56} r={5} fill={BLK} /></Triangle>
  ) },
  { id: 'yaban-hayvani', name: 'Yaban hayvanı geçebilir', group: 'tehlike', hint: 'Yola yaban hayvanı çıkabilir; hızı azalt, özellikle gece dikkatli ol.', draw: () => (
    <Triangle><Animal deer /></Triangle>
  ) },
  { id: 'evcil-hayvan', name: 'Hayvan (sürü) geçebilir', group: 'tehlike', hint: 'Yolda evcil hayvan veya sürü bulunabilir; hızı düşür, gerekirse dur.', draw: () => (
    <Triangle><Animal /></Triangle>
  ) },
  { id: 'demiryolu-bariyerli', name: 'Bariyerli demiryolu geçidi', group: 'tehlike', hint: 'Önünde bariyer bulunan hemzemin geçittir; bariyer kapalıysa durulur, geçilmez.', draw: () => (
    <Triangle><Path d="M30 78 V44 M70 78 V44" stroke={BLK} strokeWidth={6} /><Rect x={30} y={48} width={40} height={7} fill={BLK} /><Rect x={30} y={62} width={40} height={7} fill={BLK} /></Triangle>
  ) },
  { id: 'demiryolu-bariyersiz', name: 'Bariyersiz demiryolu geçidi', group: 'tehlike', hint: 'Bariyeri olmayan hemzemin geçittir; durup iki yanı kontrol etmeden geçilmez, trene yol verilir.', draw: () => (
    <Triangle><Rect x={32} y={52} width={36} height={14} fill={BLK} /><Rect x={36} y={44} width={6} height={8} fill={BLK} /><Rect x={55} y={44} width={13} height={22} fill={BLK} /><Circle cx={38} cy={70} r={5} fill={BLK} /><Circle cx={50} cy={70} r={5} fill={BLK} /><Circle cx={62} cy={70} r={5} fill={BLK} /></Triangle>
  ) },
  { id: 'yol-daralmasi', name: 'Yol daralması', group: 'tehlike', hint: 'Yol iki taraftan daralıyor; hızı düşür, gerekirse karşı yönden gelene yol ver.', draw: () => (
    <Triangle><Path d="M33 80 V64 L43 46 V36 M67 80 V64 L57 46 V36" stroke={BLK} strokeWidth={6} fill="none" strokeLinejoin="round" /></Triangle>
  ) },
  { id: 'tumsek', name: 'Tümsek', group: 'tehlike', hint: 'Yolda tümsek vardır; hızı düşür, aracın yoldan kopmasını önle.', draw: () => (
    <Triangle><Path d="M24 72 H38 Q50 42 62 72 H76" stroke={BLK} strokeWidth={7} fill="none" strokeLinejoin="round" /></Triangle>
  ) },
  { id: 'cukur', name: 'Çukur (çukurlu yol)', group: 'tehlike', hint: 'Yolda çukur veya çökme vardır; hızı düşür, aracı korumak için dikkatli geç.', draw: () => (
    <Triangle><Path d="M24 50 H38 Q50 80 62 50 H76" stroke={BLK} strokeWidth={7} fill="none" strokeLinejoin="round" /></Triangle>
  ) },
  { id: 'buzlanma', name: 'Buzlanma', group: 'tehlike', hint: 'Yol yüzeyi buzlanabilir; hızı düşür, ani fren ve direksiyon hareketinden kaçın.', draw: () => (
    <Triangle><G stroke={BLK} strokeWidth={4.5} strokeLinecap="round"><Path d="M50 40 V76" /><Path d="M50 40 V76" transform="rotate(60 50 58)" /><Path d="M50 40 V76" transform="rotate(120 50 58)" /></G></Triangle>
  ) },
  { id: 'bisiklet-uyari', name: 'Bisiklet geçebilir (bisiklet geçişi uyarısı)', group: 'tehlike', hint: 'Yolu bisikletlilerin geçebileceği yer vardır; hızı düşür, bisikletliye yol ver.', draw: () => (
    <Triangle><Bike x={50} y={62} s={0.72} /></Triangle>
  ) },
  { id: 'kavsak-dort', name: 'Dört yollu kavşak uyarısı', group: 'tehlike', hint: 'İleride dört yönlü kavşak vardır; hızı azalt, kavşak önceliğine göre geç.', draw: () => (
    <Triangle><Path d="M50 34 V78 M34 56 H66" stroke={BLK} strokeWidth={7} strokeLinecap="round" /></Triangle>
  ) },
  { id: 'kavsak-t', name: 'T kavşağı uyarısı', group: 'tehlike', hint: 'İleride T biçiminde kavşak vardır; yol sağa ve sola ayrılır, hız azaltılır.', draw: () => (
    <Triangle><Path d="M36 52 H64 M50 52 V78" stroke={BLK} strokeWidth={7} strokeLinecap="round" /></Triangle>
  ) },
  { id: 'yan-yol-sag', name: 'Sağdan yan yol kavşağı', group: 'tehlike', hint: 'Sağdan yan yol bağlanır; sağdan gelebilecek araçlara dikkat et.', draw: () => (
    <Triangle><Path d="M50 78 V34 M50 58 H68" stroke={BLK} strokeWidth={7} strokeLinecap="round" /></Triangle>
  ) },
  { id: 'yan-yol-sol', name: 'Soldan yan yol kavşağı', group: 'tehlike', hint: 'Soldan yan yol bağlanır; soldan gelebilecek araçlara dikkat et.', draw: () => (
    <Triangle><Path d="M50 78 V34 M50 58 H32" stroke={BLK} strokeWidth={7} strokeLinecap="round" /></Triangle>
  ) },
  { id: 'yol-calismasi', name: 'Yol çalışması', group: 'tehlike', hint: 'Yolda çalışma vardır; hızı düşür, çalışanlara ve işaretlere dikkat et.', draw: () => (
    <Triangle><Person x={42} y={60} s={0.8} /><Polygon points="50,76 62,58 74,76" fill={BLK} /></Triangle>
  ) },
  { id: 'cift-viraj', name: 'Çift virajlı yol (ilki sağa)', group: 'tehlike', hint: 'Art arda iki viraj vardır, ilki sağa doğrudur; hızı düşür, sollama yapma.', draw: () => (
    <Triangle><Path d="M38 80 V68 Q38 56 48 52 Q56 48 56 42" stroke={BLK} strokeWidth={6} fill="none" strokeLinecap="round" /><Polygon points="49,44 56,34 63,44" fill={BLK} /></Triangle>
  ) },
  { id: 'tramvay', name: 'Tramvay geçebilir', group: 'tehlike', hint: 'Tramvay yolu kesişir veya yanındadır; tramvaya yol ver.', draw: () => (
    <Triangle><Rect x={30} y={50} width={40} height={18} rx={3} fill={BLK} /><Rect x={34} y={54} width={8} height={7} fill={WHT} /><Rect x={46} y={54} width={8} height={7} fill={WHT} /><Rect x={58} y={54} width={8} height={7} fill={WHT} /><Path d="M50 50 L46 42 M40 40 H60" stroke={BLK} strokeWidth={3} strokeLinecap="round" /><Circle cx={38} cy={72} r={3.5} fill={BLK} /><Circle cx={62} cy={72} r={3.5} fill={BLK} /></Triangle>
  ) },
  { id: 'yan-ruzgar', name: 'Yan rüzgâr', group: 'tehlike', hint: 'Yandan sert rüzgâr esebilir; direksiyonu sıkı tut, hızı düşür.', draw: () => (
    <Triangle><Path d="M36 42 V78" stroke={BLK} strokeWidth={4} strokeLinecap="round" /><Path d="M38 44 L66 50 V58 L38 62 Z" fill={BLK} /><Path d="M50 47 V59" stroke={WHT} strokeWidth={3} /></Triangle>
  ) },
  { id: 'bisiklet-girmez', name: 'Bisiklet giremez', group: 'yasak', hint: 'Bisikletlerin girişi yasaktır.', draw: () => (
    <ProhibitCircle><Bike x={50} y={50} s={0.9} /></ProhibitCircle>
  ) },
  { id: 'motosiklet-girmez', name: 'Motosiklet giremez', group: 'yasak', hint: 'Motosikletlerin girişi yasaktır.', draw: () => (
    <ProhibitCircle><Moto x={50} y={50} s={0.85} /></ProhibitCircle>
  ) },
  { id: 'kamyon-girmez', name: 'Kamyon giremez', group: 'yasak', hint: 'Kamyonların girişi yasaktır.', draw: () => (
    <ProhibitCircle><Truck x={50} y={50} s={0.8} /></ProhibitCircle>
  ) },
  { id: 'yaya-girmez', name: 'Yaya giremez', group: 'yasak', hint: 'Yayaların girişi yasaktır.', draw: () => (
    <ProhibitCircle><Person x={50} y={52} s={1.3} /></ProhibitCircle>
  ) },
  { id: 'motorlu-girmez', name: 'Motorlu taşıt trafiğine kapalı yol', group: 'yasak', hint: 'Motorlu taşıtların girişi yasaktır.', draw: () => (
    <ProhibitCircle><Car x={36} y={50} color={BLK} /><Moto x={65} y={50} s={0.6} /></ProhibitCircle>
  ) },
  { id: 'korna-yasak', name: 'Korna çalınmaz', group: 'yasak', hint: 'Bu yolda ses işareti (korna) vermek yasaktır; zorunlu hâller hariç.', draw: () => (
    <ProhibitCircle><Polygon points="30,44 42,44 62,32 62,68 42,56 30,56" fill={BLK} /><Slash x1={72} y1={74} x2={28} y2={26} /></ProhibitCircle>
  ) },
  { id: 'azami-yukseklik', name: 'Azami yükseklik sınırı', group: 'yasak', hint: 'Yüklü veya yüksüz yüksekliği levhadaki değeri aşan araçlar geçemez.', draw: () => (
    <ProhibitCircle><Path d="M30 36 V64" stroke={BLK} strokeWidth={4} /><Polygon points="30,28 23,40 37,40" fill={BLK} /><Polygon points="30,72 23,60 37,60" fill={BLK} /><SvgText x={60} y={57} fontSize={19} fontWeight="bold" fill={BLK} textAnchor="middle">3,5m</SvgText></ProhibitCircle>
  ) },
  { id: 'azami-genislik', name: 'Azami genişlik sınırı', group: 'yasak', hint: 'Genişliği levhadaki değeri aşan araçlar geçemez.', draw: () => (
    <ProhibitCircle><Path d="M28 38 H72" stroke={BLK} strokeWidth={4} /><Polygon points="20,38 32,31 32,45" fill={BLK} /><Polygon points="80,38 68,31 68,45" fill={BLK} /><SvgText x={50} y={69} fontSize={21} fontWeight="bold" fill={BLK} textAnchor="middle">2,5m</SvgText></ProhibitCircle>
  ) },
  { id: 'azami-tonaj', name: 'Azami ağırlık (tonaj) sınırı', group: 'yasak', hint: 'Toplam ağırlığı levhadaki değeri aşan araçlar geçemez.', draw: () => (
    <ProhibitCircle><SvgText x={50} y={61} fontSize={27} fontWeight="bold" fill={BLK} textAnchor="middle">5,5t</SvgText></ProhibitCircle>
  ) },
  { id: 'gecme-yasagi-sonu', name: 'Sollama (geçme) yasağının sonu', group: 'yasak', hint: 'Sollama yasağı sona ermiştir; kurallara uygun şekilde öndeki aracı geçebilirsin.', draw: () => (
    <><Circle cx={50} cy={50} r={44} fill={WHT} stroke="#444444" strokeWidth={5} /><Car x={38} y={50} color={GREY} /><Car x={62} y={50} color={GREY} /><EndBars /></>
  ) },
  { id: 'hiz-sonu', name: 'Azami hız sınırlamasının sonu', group: 'yasak', hint: 'Önceki hız sınırı sona ermiştir; yolun genel hız kuralları geçerlidir.', draw: () => (
    <><Circle cx={50} cy={50} r={44} fill={WHT} stroke="#444444" strokeWidth={5} /><SvgText x={50} y={63} fontSize={40} fontWeight="bold" fill={GREY} textAnchor="middle">50</SvgText><EndBars /></>
  ) },
  { id: 'hiz-20', name: 'Azami hız 20 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 20 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="20" /></ProhibitCircle>
  ) },
  { id: 'hiz-40', name: 'Azami hız 40 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 40 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="40" /></ProhibitCircle>
  ) },
  { id: 'hiz-60', name: 'Azami hız 60 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 60 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="60" /></ProhibitCircle>
  ) },
  { id: 'hiz-70', name: 'Azami hız 70 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 70 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="70" /></ProhibitCircle>
  ) },
  { id: 'hiz-80', name: 'Azami hız 80 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 80 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="80" /></ProhibitCircle>
  ) },
  { id: 'hiz-110', name: 'Azami hız 110 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 110 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="110" /></ProhibitCircle>
  ) },
  { id: 'hiz-120', name: 'Azami hız 120 km/s', group: 'yasak', hint: 'Bu levhadan sonra saatte 120 km hızı aşamazsın.', draw: () => (
    <ProhibitCircle><SpeedNum n="120" /></ProhibitCircle>
  ) },
  { id: 'sagdan-gidiniz', name: 'Sağdan gidiniz', group: 'zorunlu', hint: 'Engelin sağından geçilmek zorundadır.', draw: () => (
    <BlueCircle><G transform="rotate(135 50 50)"><ArrowUp /></G></BlueCircle>
  ) },
  { id: 'soldan-gidiniz', name: 'Soldan gidiniz', group: 'zorunlu', hint: 'Engelin solundan geçilmek zorundadır.', draw: () => (
    <BlueCircle><G transform="rotate(-135 50 50)"><ArrowUp /></G></BlueCircle>
  ) },
  { id: 'ileri-saga', name: 'İleri ve sağa mecburi yön', group: 'zorunlu', hint: 'Yalnızca ileri gidilebilir veya sağa dönülebilir.', draw: () => (
    <BlueCircle><Path d="M40 78 V36" stroke={WHT} strokeWidth={8} strokeLinecap="round" /><Polygon points="40,20 26,38 54,38" fill={WHT} /><Path d="M40 62 Q40 50 52 50 H62" stroke={WHT} strokeWidth={8} fill="none" strokeLinecap="round" /><Polygon points="62,38 78,50 62,62" fill={WHT} /></BlueCircle>
  ) },
  { id: 'ileri-sola', name: 'İleri ve sola mecburi yön', group: 'zorunlu', hint: 'Yalnızca ileri gidilebilir veya sola dönülebilir.', draw: () => (
    <BlueCircle><G transform="translate(100 0) scale(-1 1)"><Path d="M40 78 V36" stroke={WHT} strokeWidth={8} strokeLinecap="round" /><Polygon points="40,20 26,38 54,38" fill={WHT} /><Path d="M40 62 Q40 50 52 50 H62" stroke={WHT} strokeWidth={8} fill="none" strokeLinecap="round" /><Polygon points="62,38 78,50 62,62" fill={WHT} /></G></BlueCircle>
  ) },
  { id: 'asgari-hiz', name: 'Asgari hız 30 km/s', group: 'zorunlu', hint: 'Bu yolda saatte en az 30 km hızla gidilmelidir; daha yavaş gidilemez.', draw: () => (
    <BlueCircle><SvgText x={50} y={63} fontSize={42} fontWeight="bold" fill={WHT} textAnchor="middle">30</SvgText></BlueCircle>
  ) },
  { id: 'asgari-hiz-sonu', name: 'Asgari hız sınırının sonu', group: 'zorunlu', hint: 'Asgari hız zorunluluğu sona ermiştir.', draw: () => (
    <BlueCircle><SvgText x={50} y={63} fontSize={42} fontWeight="bold" fill={WHT} textAnchor="middle">30</SvgText><Slash x1={22} y1={78} x2={78} y2={22} /></BlueCircle>
  ) },
  { id: 'kar-zinciri', name: 'Kar zinciri takma zorunluluğu', group: 'zorunlu', hint: 'Bu yolda araçların tekerleklerine kar zinciri takılması zorunludur.', draw: () => (
    <BlueCircle><Circle cx={50} cy={50} r={24} stroke={WHT} strokeWidth={6} fill="none" /><Circle cx={50} cy={50} r={9} fill={WHT} /><Path d="M50 26 V74 M26 50 H74 M33 33 L67 67 M67 33 L33 67" stroke={WHT} strokeWidth={3} /></BlueCircle>
  ) },
  { id: 'yaya-bisiklet-yolu', name: 'Yaya ve bisiklet yolu (ortak)', group: 'zorunlu', hint: 'Yalnızca yayalar ve bisikletliler kullanabilir; taşıt giremez.', draw: () => (
    <BlueCircle><Person x={34} y={52} s={0.95} color={WHT} /><Bike x={65} y={54} s={0.7} color={WHT} /></BlueCircle>
  ) },
  { id: 'yakit', name: 'Akaryakıt istasyonu', group: 'bilgi', hint: 'Yakında akaryakıt satan tesis vardır.', draw: () => (
    <BlueSquare><Rect x={30} y={26} width={28} height={48} rx={3} fill={WHT} /><Rect x={35} y={32} width={18} height={12} fill={BLUE} /><Path d="M58 40 H66 V62 Q66 68 72 68 Q76 68 76 62 V44 L70 38" stroke={WHT} strokeWidth={4} fill="none" strokeLinecap="round" strokeLinejoin="round" /><Rect x={26} y={72} width={36} height={5} fill={WHT} /></BlueSquare>
  ) },
  { id: 'telefon', name: 'Telefon', group: 'bilgi', hint: 'Yakında acil durumlarda kullanılabilecek telefon vardır.', draw: () => (
    <BlueSquare><Path d="M26 38 Q50 22 74 38 L69 50 L58 46 Q50 42 42 46 L31 50 Z" fill={WHT} /><Circle cx={50} cy={68} r={14} stroke={WHT} strokeWidth={5} fill="none" /><Circle cx={50} cy={68} r={4} fill={WHT} /></BlueSquare>
  ) },
  { id: 'ilkyardim', name: 'İlkyardım', group: 'bilgi', hint: 'Yakında ilkyardım noktası vardır.', draw: () => (
    <BlueSquare><Path d="M42 22 H58 V42 H78 V58 H58 V78 H42 V58 H22 V42 H42 Z" fill={WHT} /></BlueSquare>
  ) },
  { id: 'otobus-duragi', name: 'Otobüs durağı', group: 'bilgi', hint: 'Toplu taşıma otobüsünün durak yerini gösterir; buraya park edilmez.', draw: () => (
    <BlueSquare><Rect x={22} y={26} width={56} height={44} rx={8} fill={WHT} /><Rect x={28} y={32} width={44} height={16} rx={2} fill={BLUE} /><Circle cx={34} cy={74} r={6} fill={WHT} stroke={BLUE} strokeWidth={2} /><Circle cx={66} cy={74} r={6} fill={WHT} stroke={BLUE} strokeWidth={2} /><Rect x={32} y={55} width={8} height={5} fill={BLUE} /><Rect x={60} y={55} width={8} height={5} fill={BLUE} /></BlueSquare>
  ) },
  { id: 'taksi', name: 'Taksi durağı', group: 'bilgi', hint: 'Taksi durak yerini gösterir; buraya park edilmez.', draw: () => (
    <BlueSquare><Rect x={38} y={24} width={24} height={10} rx={2} fill={WHT} /><Path d="M22 66 L28 48 Q30 44 36 44 H64 Q70 44 72 48 L78 66 V72 H22 Z" fill={WHT} /><Circle cx={34} cy={72} r={6} fill={WHT} stroke={BLUE} strokeWidth={2} /><Circle cx={66} cy={72} r={6} fill={WHT} stroke={BLUE} strokeWidth={2} /><Rect x={32} y={50} width={36} height={8} rx={2} fill={BLUE} /></BlueSquare>
  ) },
  { id: 'tunel', name: 'Tünel', group: 'bilgi', hint: 'İleride tünel vardır; farları yak, hızını ve takip mesafeni ayarla.', draw: () => (
    <BlueSquare><Path d="M22 78 V54 Q22 24 50 24 Q78 24 78 54 V78 Z" fill={WHT} /><Path d="M34 78 V56 Q34 38 50 38 Q66 38 66 56 V78 Z" fill={BLUE} /></BlueSquare>
  ) },
  { id: 'otoyol', name: 'Otoyol', group: 'bilgi', hint: 'Otoyol başlar; otoyol kurallarına uyulur, motorsuz araçlar ve yayalar giremez.', draw: () => (
    <><Rect x={5} y={5} width={90} height={90} rx={10} fill={GREEN} stroke={WHT} strokeWidth={3} /><Path d="M16 66 Q50 18 84 66" stroke={WHT} strokeWidth={5} fill="none" /><Path d="M12 70 H88" stroke={WHT} strokeWidth={6} /><Path d="M34 70 L44 44 M66 70 L56 44" stroke={WHT} strokeWidth={4} /></>
  ) },
  { id: 'otoyol-sonu', name: 'Otoyolun sonu', group: 'bilgi', hint: 'Otoyol sona erer; artık normal karayolu kuralları geçerlidir.', draw: () => (
    <><Rect x={5} y={5} width={90} height={90} rx={10} fill={GREEN} stroke={WHT} strokeWidth={3} /><Path d="M16 66 Q50 18 84 66" stroke={WHT} strokeWidth={5} fill="none" /><Path d="M12 70 H88" stroke={WHT} strokeWidth={6} /><Path d="M20 82 L80 18 M28 86 L88 22" stroke={RED} strokeWidth={6} strokeLinecap="round" /></>
  ) },
  { id: 'yaya-ustgecit', name: 'Yaya üst geçidi', group: 'bilgi', hint: 'Yayaların yolu üstten geçtiği yeri gösterir.', draw: () => (
    <BlueSquare><Path d="M18 76 H28 L38 42 H62 L72 76 H82" stroke={WHT} strokeWidth={5} fill="none" strokeLinejoin="round" /><Person x={50} y={34} s={0.55} color={WHT} /></BlueSquare>
  ) },
  { id: 'yaya-altgecit', name: 'Yaya alt geçidi', group: 'bilgi', hint: 'Yayaların yolu alttan geçtiği yeri gösterir.', draw: () => (
    <BlueSquare><Path d="M18 30 H28 L38 64 H62 L72 30 H82" stroke={WHT} strokeWidth={5} fill="none" strokeLinejoin="round" /><Person x={50} y={64} s={0.55} color={WHT} /></BlueSquare>
  ) },
  { id: 'cikmaz-yol', name: 'Çıkmaz yol', group: 'bilgi', hint: 'Bu yol başka bir yola bağlanmaz; ilerisi kapalıdır.', draw: () => (
    <BlueSquare><Path d="M50 80 V34" stroke={WHT} strokeWidth={10} /><Rect x={28} y={22} width={44} height={11} fill={RED} stroke={WHT} strokeWidth={2} /></BlueSquare>
  ) },
  { id: 'karsi-gelene-yol-ver', name: 'Karşıdan gelene yol ver', group: 'oncelik', hint: 'Karşıdan gelen araçların geçiş üstünlüğü vardır; yolu daraltan engelde onlara yol ver.', draw: () => (
    <ProhibitCircle><Path d="M36 78 V42" stroke={RED} strokeWidth={7} strokeLinecap="round" /><Polygon points="36,24 24,44 48,44" fill={RED} /><Path d="M64 24 V60" stroke={BLK} strokeWidth={7} strokeLinecap="round" /><Polygon points="64,78 52,58 76,58" fill={BLK} /></ProhibitCircle>
  ) },
  { id: 'karsi-yon-oncelik', name: 'Karşıdan gelene göre geçiş önceliği', group: 'oncelik', hint: 'Yolu daraltan engelde karşıdan gelen araca göre geçiş üstünlüğün vardır.', draw: () => (
    <BlueSquare><Path d="M36 82 V44" stroke={WHT} strokeWidth={9} strokeLinecap="round" /><Polygon points="36,18 20,46 52,46" fill={WHT} /><Path d="M68 28 V54" stroke={RED} strokeWidth={5} strokeLinecap="round" /><Polygon points="68,76 58,54 78,54" fill={RED} /></BlueSquare>
  ) },
];

export const signById = (id: string) => SIGNS.find((s) => s.id === id);

export function Sign({ id, size = 120 }: { id: string; size?: number }) {
  const def = signById(id);
  if (!def) return null;
  const img = SIGN_IMAGES[id];
  if (img) {
    return <Image source={img} accessibilityLabel={`Trafik levhası: ${def.name}`} accessibilityIgnoresInvertColors resizeMode="contain" style={{ width: size, height: size }} />;
  }
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" accessibilityLabel={`Trafik levhası: ${def.name}`}>
      {def.draw()}
    </Svg>
  );
}
