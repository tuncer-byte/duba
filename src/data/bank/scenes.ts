import type { Media, SceneCar, SceneSpec } from '../media';
import type { Raw } from '../rawTypes';

/**
 * Kavşak krokisi soruları. Araçlar sağ şeritte ilerler; yön okları ve numaralar çizimde görünür.
 * Her krokiden iki soru üretilir: "ilk kim geçer" ve "kim yol vermek zorundadır".
 */
interface Def {
  scene: SceneSpec;
  first: string; // ilk geçen araç etiketi
  second: string; // yol veren araç etiketi
  rule: string; // açıklama
  intro: string; // kavşak tarifi
  firstName?: string;
  secondName?: string;
  /** 3+ araçlı krokilerde ikinci soru (ör. "en son kim geçer") */
  ask2?: { q: string; a: string };
}

const car = (from: SceneCar['from'], go: SceneCar['go'], label: string, kind?: SceneCar['kind']): SceneCar => ({ from, go, label, ...(kind ? { kind } : {}) });
const KIND_TR: Record<string, string> = { ambulance: 'ambulans', fire: 'itfaiye', tram: 'tramvay', bus: 'otobüs' };
const nameIn = (cars: SceneCar[], l: string) => {
  const k = cars.find((c) => c.label === l)?.kind;
  return k && KIND_TR[k] ? `${l} (${KIND_TR[k]})` : `${l} numaralı araç`;
};
const BS = { S: 'yol-ver', N: 'yol-ver', W: 'ana-yol', E: 'ana-yol' } as const; // W-E ana yol
const ALL4 = (c: 'red' | 'yellow' | 'green') => ({ S: c, N: c, W: c, E: c });
const OFF = (a: string, b: string) => `Trafik görevlisi kollarını yanlara açmış durumdadır; önü ve arkası ${a} yoluna dönüktür, yanları ${b} yolundadır.`;

const DEFS: Def[] = [
  {
    intro: 'Şekildeki ışıksız ve işaretsiz kavşakta yollar eşit düzeydedir.',
    scene: { type: 'cross', cars: [car('S', 'straight', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'İşaretsiz, eşit yollarda sağdan gelen araca yol verilir. 1 numaralı aracın sağından 2 numaralı araç gelmektedir.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz kavşakta 1 numaralı araç sola dönmek, 2 numaralı araç ise düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('S', 'left', '1'), car('N', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Kavşakta dönüş yapan araç, düz giden araca yol verir.',
  },
  {
    intro: 'Şekildeki kavşakta 1 numaralı araç ana yolda, 2 numaralı araç tali yoldadır.',
    scene: { type: 'cross', signs: { S: 'yol-ver', N: 'yol-ver', W: 'ana-yol', E: 'ana-yol' }, cars: [car('S', 'straight', '2'), car('E', 'straight', '1')] },
    first: '1', second: '2',
    rule: 'Ana yoldaki araç geçiş üstünlüğüne sahiptir; "Yol ver" levhası olan yoldaki araç yol verir.',
  },
  {
    intro: 'Şekildeki kavşakta 1 numaralı aracın yolunda DUR levhası vardır; 2 numaralı araç öncelikli yoldan gelmektedir.',
    scene: { type: 'cross', signs: { S: 'dur', W: 'ana-yol', E: 'ana-yol' }, cars: [car('S', 'left', '1'), car('W', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'DUR levhasında önce tam durulur; öncelikli yoldan gelen araca yol verilir.',
  },
  {
    intro: 'Şekildeki kavşakta ışıklı trafik işaret cihazı vardır: 1 numaralı aracın yolunda yeşil, 2 numaralı aracın yolunda kırmızı ışık yanmaktadır.',
    scene: { type: 'cross', light: { S: 'green', E: 'red' }, cars: [car('S', 'straight', '1'), car('E', 'straight', '2')] },
    first: '1', second: '2',
    rule: 'Yeşil ışıkta geçiş hakkı vardır; kırmızı ışıkta durulur.',
  },
  {
    intro: 'Şekildeki kavşakta sirenli ve çakar lambalı ambulans (A) görevli olarak ilerlemektedir; 1 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('S', 'straight', '1'), car('W', 'straight', 'A', 'ambulance')] },
    first: 'A', second: '1',
    rule: 'Görevli ve alarm vererek ilerleyen ambulansa her durumda yol verilir.',
  },
  {
    intro: 'Şekildeki T kavşağında ışık veya levha yoktur. 1 numaralı araç sola dönmek, 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'tee', missing: 'N', cars: [car('S', 'left', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'İşaretsiz kavşakta sağdan gelen araca yol verilir; 2 numaralı araç 1 numaralı aracın sağındadır.',
  },
  {
    intro: 'Şekildeki öncelikli yolda 1 numaralı araç sola dönmek, karşıdan gelen 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', signs: { S: 'yol-ver', N: 'yol-ver', W: 'ana-yol', E: 'ana-yol' }, cars: [car('W', 'left', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Dönüş yapan araç, karşıdan gelen düz giden araca yol verir.',
  },
  {
    intro: 'Şekildeki kavşakta 1 numaralı aracın yolunda DUR levhası vardır; 2 numaralı araç diğer yoldan gelmektedir ve levha yoktur.',
    scene: { type: 'cross', signs: { S: 'dur' }, cars: [car('S', 'straight', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'DUR levhasının bulunduğu yoldaki araç tam durur ve öncelikli yoldan gelene yol verir.',
  },

  // ───── Işıksız eşit kavşak: 3 araçlı sıralama ─────
  {
    intro: 'Şekildeki ışıksız ve işaretsiz, eşit yollu kavşakta 1, 2 ve 3 numaralı araçların tümü düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('S', 'straight', '1'), car('E', 'straight', '2'), car('N', 'straight', '3')] },
    first: '3', second: '1',
    ask2: { q: 'Kavşağı en son hangi araç geçer?', a: '1' },
    rule: 'Sağdan gelene yol verilir: 3 numaralı aracın sağında araç yoktur, ilk o geçer; 2 numaralı araç onun sağında kalan 3\'e, 1 numaralı araç ise sağındaki 2\'ye yol verdiği için en son geçer.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz, eşit yollu kavşakta 1, 2 ve 3 numaralı araçların tümü düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('E', 'straight', '1'), car('N', 'straight', '2'), car('W', 'straight', '3')] },
    first: '3', second: '1',
    ask2: { q: 'Kavşağı en son hangi araç geçer?', a: '1' },
    rule: '3 numaralı aracın sağında (güneyde) araç yoktur, önce o geçer. 2 numaralı araç sağındaki 3\'e, 1 numaralı araç ise sağındaki 2\'ye yol verir; bu nedenle en son 1 numaralı araç geçer.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz, eşit yollu kavşakta 1 numaralı araç sola dönmek, 2 ve 3 numaralı araçlar ise düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('S', 'left', '1'), car('E', 'straight', '2'), car('N', 'straight', '3')] },
    first: '3', second: '1',
    ask2: { q: 'Kavşağı en son hangi araç geçer?', a: '1' },
    rule: '3 numaralı aracın sağında araç yoktur, ilk o geçer. 2 numaralı araç sağındaki 3\'e yol verir. Sola dönen 1 numaralı araç hem sağındaki 2\'ye hem karşıdan gelen düz giden 3\'e yol verdiği için en son geçer.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz, eşit yollu kavşakta her iki araç da düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('W', 'straight', '1'), car('S', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Sağdan gelene yol verilir. 1 numaralı aracın sağında 2 numaralı araç bulunmaktadır.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz kavşakta 1 numaralı araç sola dönmek, sağından gelen 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('E', 'left', '1'), car('N', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Sola dönen araç, hem sağından gelen hem de düz giden araca yol verir.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz kavşakta 1 numaralı araç sola dönmek, sağındaki yoldan gelen 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('N', 'left', '1'), car('W', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Dönüş yapan araç düz giden araca yol verir; ayrıca 2 numaralı araç 1 numaralı aracın sağındadır.',
  },
  // ───── T kavşak ─────
  {
    intro: 'Şekildeki ışıksız ve işaretsiz T kavşağında 1 numaralı araç sola dönmek, karşıdan gelen 2 numaralı araç ise düz gitmek istemektedir.',
    scene: { type: 'tee', missing: 'N', cars: [car('E', 'left', '1'), car('W', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Sola dönen araç, karşıdan gelen düz giden araca yol verir.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz T kavşağında 1 numaralı araç sola, 2 numaralı araç ise düz gitmek istemektedir; 2 numaralı araç 1 numaralı aracın sağındadır.',
    scene: { type: 'tee', missing: 'E', cars: [car('W', 'left', '1'), car('S', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Sağdan gelen ve düz giden araca, sola dönen araç yol verir.',
  },
  {
    intro: 'Şekildeki T kavşağında 1 numaralı aracın yolunda "Yol ver" levhası vardır; 2 numaralı araç devam eden (öncelikli) yoldadır. 1 numaralı araç sola dönmek istemektedir.',
    scene: { type: 'tee', missing: 'W', signs: { E: 'yol-ver', N: 'ana-yol', S: 'ana-yol' }, cars: [car('E', 'left', '1'), car('N', 'straight', '2')] },
    first: '2', second: '1',
    rule: '"Yol ver" levhası bulunan yoldaki araç, öncelikli yoldan gelen araca yol verir.',
  },
  {
    intro: 'Şekildeki T kavşağında 1 numaralı aracın yolunda DUR levhası vardır ve araç sağa dönmek istemektedir. 2 numaralı araç öncelikli yoldan düz gelmektedir.',
    scene: { type: 'tee', missing: 'N', signs: { S: 'dur', W: 'ana-yol', E: 'ana-yol' }, cars: [car('S', 'right', '1'), car('W', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'DUR levhasında tam durulur; sağa dönülse bile öncelikli yoldan gelen araca yol verilir.',
  },
  {
    intro: 'Şekildeki T kavşağında 1 numaralı araç "Yol ver" levhalı tali yoldan sola dönmek istemektedir; 2 numaralı araç öncelikli yolda düz gitmektedir.',
    scene: { type: 'tee', missing: 'S', signs: { N: 'yol-ver', W: 'ana-yol', E: 'ana-yol' }, cars: [car('N', 'left', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Tali yoldan öncelikli yola giren araç, öncelikli yoldaki araca yol verir.',
  },
  // ───── Ana / tali yol ─────
  {
    intro: 'Şekildeki kavşakta yatay yol öncelikli (ana) yoldur. 1 numaralı araç "Yol ver" levhalı tali yoldan, 2 numaralı araç ana yoldan gelmektedir ve ikisi de düz gitmek istemektedir.',
    scene: { type: 'cross', signs: { ...BS }, cars: [car('S', 'straight', '1'), car('W', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Levha ve ana yol işareti sağdan gelen kuralından üstündür: 2 numaralı araç 1 numaralının solunda olsa da ana yoldadır, geçiş üstünlüğü ondadır.',
  },
  {
    intro: 'Şekildeki kavşakta yatay yol öncelikli yoldur. 1 ve 2 numaralı araçlar ana yoldadır; 1 numaralı araç düz gitmek, karşıdan gelen 2 numaralı araç sola dönmek, 3 numaralı araç ise "Yol ver" levhalı tali yoldan düz gitmek istemektedir.',
    scene: { type: 'cross', signs: { ...BS }, cars: [car('W', 'straight', '1'), car('E', 'left', '2'), car('S', 'straight', '3')] },
    first: '1', second: '3',
    ask2: { q: 'Kavşağı en son hangi araç geçer?', a: '3' },
    rule: 'Ana yoldaki düz giden araç ilk geçer; ana yolda sola dönen araç ona yol verir. Tali yoldaki araç ana yoldaki tüm araçlara yol verdiği için en son geçer.',
  },
  {
    intro: 'Şekildeki kavşakta 1 numaralı aracın yolunda DUR levhası bulunmaktadır; 2 numaralı araç öncelikli yolda sola dönmek istemektedir.',
    scene: { type: 'cross', signs: { S: 'dur', N: 'dur', W: 'ana-yol', E: 'ana-yol' }, cars: [car('S', 'straight', '1'), car('E', 'left', '2')] },
    first: '2', second: '1',
    rule: 'DUR levhalı yoldaki araç tam durur ve öncelikli yolda ilerleyen araca (dönüş yapsa bile) yol verir.',
  },
  {
    intro: 'Şekildeki kavşakta 1 numaralı araç "Yol ver" levhalı yoldan sağa dönmek istemektedir; öncelikli yoldaki 2 numaralı araç düz gitmektedir.',
    scene: { type: 'cross', signs: { ...BS }, cars: [car('S', 'right', '1'), car('W', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Tali yoldan öncelikli yola katılan araç, sağa dönse bile ana yoldaki araca yol verir.',
  },
  {
    intro: 'Şekildeki kavşağa gelen S ve N yollarında "Öncelikli yolun sonu" levhası vardır; diğer yolda levha yoktur. 1 ve 2 numaralı araçlar düz gitmek istemektedir.',
    scene: { type: 'cross', signs: { S: 'ana-yol-sonu', N: 'ana-yol-sonu' }, cars: [car('S', 'straight', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: '"Öncelikli yolun sonu" levhasından sonra geçiş üstünlüğü biter; kavşakta genel kural uygulanır ve sağdan gelen araca yol verilir.',
  },
  // ───── Acil durum araçları ─────
  {
    intro: 'Şekildeki ışıksız kavşakta sirenli ve çakar lambalı ambulans (A) görevli olarak sola dönmektedir; 1 numaralı araç ambulansın sağından düz gelmektedir.',
    scene: { type: 'cross', cars: [car('N', 'left', 'A', 'ambulance'), car('W', 'straight', '1')] },
    first: 'A', second: '1',
    rule: 'Görevli ve alarm vererek ilerleyen ambulans, sağdan gelen kuralına tabi olmaz; diğer sürücüler ona yol verir.',
  },
  {
    intro: 'Şekildeki kavşakta itfaiye aracı (İ) siren ve çakar lambayla görevli olarak "Yol ver" levhalı yoldan gelmektedir; 1 numaralı araç öncelikli yoldadır.',
    scene: { type: 'cross', signs: { ...BS }, cars: [car('S', 'straight', 'İ', 'fire'), car('E', 'straight', '1')] },
    first: 'İ', second: '1',
    rule: 'Görevli ve alarm vererek ilerleyen itfaiye aracına, ana yolda bile olsa diğer sürücüler yol verir.',
  },
  // ───── Işıklı kavşak ─────
  {
    intro: 'Şekildeki ışıklı kavşakta S ve N yollarında yeşil ışık yanmaktadır. 1 numaralı araç sola dönmek, karşıdan gelen 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', light: { S: 'green', N: 'green', W: 'red', E: 'red' }, cars: [car('S', 'left', '1'), car('N', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Yeşil ışıkta sola dönen araç, karşıdan gelen düz giden araca yol verir.',
  },
  {
    intro: 'Şekildeki ışıklı kavşakta 1 numaralı aracın yolunda yeşil, 2 numaralı aracın yolunda (1 numaralı aracın sağında) kırmızı ışık yanmaktadır; araçlar düz gitmek istemektedir.',
    scene: { type: 'cross', light: { W: 'green', E: 'green', S: 'red', N: 'red' }, cars: [car('W', 'straight', '1'), car('S', 'straight', '2')] },
    first: '1', second: '2',
    rule: 'Işıklı işaret, sağdan gelen kuralından üstündür; kırmızı ışıkta durulur, yeşil ışıkta geçilir.',
  },
  {
    intro: 'Şekildeki kavşakta tüm yollarda sarı ışık yanıp sönmektedir. 1 ve 2 numaralı araçlar düz gitmek istemektedir.',
    scene: { type: 'cross', light: ALL4('yellow'), cars: [car('S', 'straight', '1'), car('E', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Yanıp sönen sarı ışık dikkatli geçmeyi bildirir; öncelik belirten başka işaret yoksa sağdan gelene yol verilir.',
  },
  {
    intro: 'Şekildeki kavşakta tüm yollarda sarı ışık yanıp sönmektedir. 1 numaralı araç sola dönmek, karşıdan gelen 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', light: ALL4('yellow'), cars: [car('S', 'left', '1'), car('N', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Sarı ışık yanıp sönerken genel kurallar geçerlidir; sola dönen araç karşıdan gelen düz giden araca yol verir.',
  },
  // ───── Trafik görevlisi ─────
  {
    intro: 'Şekildeki ışıksız kavşakta trafik görevlisi vardır. ' + OFF('2 numaralı aracın', '1 numaralı aracın') + ' Araçlar düz gitmek istemektedir.',
    scene: { type: 'cross', officer: 'S', cars: [car('W', 'straight', '1'), car('S', 'straight', '2')] },
    first: '1', second: '2',
    rule: 'Görevli kollarını yana açmışsa önünde ve arkasında kalan yollardaki araçlar durur, yanlarındaki yollardaki araçlar geçer. Görevli işareti sağdan gelen kuralından üstündür.',
  },
  {
    intro: 'Şekildeki kavşakta trafik görevlisi vardır. ' + OFF('araç bulunmayan', '1 ve 2 numaralı araçların') + ' 1 numaralı araç sola dönmek, karşıdan gelen 2 numaralı araç düz gitmek istemektedir.',
    scene: { type: 'cross', officer: 'E', cars: [car('S', 'left', '1'), car('N', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Görevlinin yanında kalan iki araç da geçebilir; ancak sola dönen araç karşıdan gelen düz giden araca yol verir.',
  },
  {
    intro: 'Şekildeki kavşakta "Yol ver" ve "Ana yol" levhaları vardır ve görevli trafiği yönlendirmektedir. ' + OFF('1 numaralı aracın (ana yoldaki)', '2 numaralı aracın (tali yoldaki)') + ' Araçlar düz gitmek istemektedir.',
    scene: { type: 'cross', signs: { ...BS }, officer: 'W', cars: [car('W', 'straight', '1'), car('S', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Trafik görevlisinin işaretleri levhalardan üstündür; önü ve arkası dönük olan yoldaki araçlar durur.',
  },
  {
    intro: 'Şekildeki kavşakta ışıklı işaret cihazı çalışmaktadır: 1 numaralı aracın yolunda yeşil, 2 numaralı aracın yolunda kırmızı ışık yanmaktadır. Bu sırada trafik görevlisi kollarını yanlara açmış, önü ve arkası 1 numaralı aracın yoluna dönüktür.',
    scene: { type: 'cross', light: { W: 'green', E: 'green', S: 'red', N: 'red' }, officer: 'W', cars: [car('W', 'straight', '1'), car('S', 'straight', '2')] },
    first: '2', second: '1',
    rule: 'Görevli işareti ışıklı işaretten üstündür; görevlinin önü ve arkası dönük olan yoldaki araç durur, yanındaki yoldaki araç geçer.',
  },
  // ───── Raylı sistem ve otobüs ─────
  {
    intro: 'Şekildeki ışıksız kavşakta tramvay (T) kendi yolunda düz gitmektedir; aksine bir işaret yoktur. 1 numaralı araç da düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('S', 'straight', '1'), car('W', 'straight', 'T', 'tram')] },
    first: 'T', second: '1',
    rule: 'Aksine işaret yoksa raylı sistem araçlarına (tramvay) yol verilir.',
  },
  {
    intro: 'Şekildeki ışıksız kavşakta 1 numaralı araç sola dönmek istemektedir; karşıdan tramvay (T) düz gelmektedir. Aksine bir işaret yoktur.',
    scene: { type: 'cross', cars: [car('N', 'left', '1'), car('E', 'straight', 'T', 'tram')] },
    first: 'T', second: '1',
    rule: 'Dönüş yapan araç karşıdan gelen düz giden araca, özellikle de tramvaya yol verir.',
  },
  {
    intro: 'Şekildeki ışıksız ve işaretsiz kavşakta otobüs (O) sola dönmek, sağından gelen 1 numaralı araç ise düz gitmek istemektedir.',
    scene: { type: 'cross', cars: [car('E', 'left', 'O', 'bus'), car('N', 'straight', '1')] },
    first: '1', second: 'O',
    rule: 'Araç büyüklüğü geçiş üstünlüğü sağlamaz; sola dönen otobüs, sağından gelen düz giden araca yol verir.',
  },
];

const wrongPool = (labels: string[], right: string) => labels.filter((l) => l !== right);

export const RAW_SCENES: Raw[] = DEFS.flatMap((d): Raw[] => {
  const media: Media = { kind: 'scene', scene: d.scene };
  const cars = d.scene.cars;
  const labels = cars.map((c) => c.label);
  const n = (l: string) => nameIn(cars, l);
  const f = n(d.first);
  const others = (right: string) => wrongPool(labels, right).map(n);
  const pad = (right: string, extra: string[]) => [...others(right), ...extra].slice(0, 3);
  const q1w = cars.length > 2 ? pad(d.first, ['Araçlar aynı anda geçmelidir', 'Hangisi daha hızlıysa o geçmelidir']) : [others(d.first)[0], 'İki araç aynı anda geçmelidir', 'Hangisi daha hızlıysa o geçmelidir'];
  const q2 = d.ask2
    ? { text: `${d.intro} ${d.ask2.q}`, a: n(d.ask2.a), w: pad(d.ask2.a, ['Araçlar aynı anda geçmelidir', 'Hangisi daha hızlıysa o geçmelidir']) }
    : { text: `${d.intro} Hangi araç yol vermek zorundadır?`, a: n(d.second), w: [n(d.first), 'İki araç da yol vermek zorundadır', 'Hiçbiri yol vermek zorunda değildir'] };
  return [
    ['tc-kavsak', `${d.intro} Hangi araç önce geçmelidir?`, f, q1w[0], q1w[1], q1w[2], d.rule, media],
    ['tc-kavsak', q2.text, q2.a, q2.w[0], q2.w[1], q2.w[2], d.rule, media],
  ];
});
