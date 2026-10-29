import type { Lesson } from './types';
import { LESSONS_OTHER } from './lessons/other';
import { LESSONS_TC } from './lessons/tc';

/**
 * Adım adım konu anlatımları. Her konu 4-5 kısa adımdan oluşur; tek ekranda tek fikir.
 * Henüz yazılmamış konular courses.ts içinde `hasLesson: false` olarak "Yakında" görünür.
 * Yeni konu eklemek için aşağıya bir Lesson nesnesi ekleyip courses.ts'de hasLesson'ı true yapın.
 */
const BASE: Lesson[] = [
  {
    topicId: 'tc-kavsak',
    steps: [
      {
        title: 'Önce öncelik sırasını öğren',
        intro: 'Kavşakta kimin önce geçeceğine karar verirken şu sıraya bakılır. Üstteki her zaman alttakinden önce gelir.',
        ordered: true,
        items: [{ title: 'Trafik görevlisi' }, { title: 'Işıklı işaretler' }, { title: 'Trafik işaret levhaları' }, { title: 'Genel kurallar' }],
        tip: 'Görevli varsa ışığa bakma, görevliye uy.',
      },
      {
        title: 'İşaretsiz kavşakta: sağdakine yol ver',
        intro: 'Işık, levha ve görevli yoksa genel kurallar geçerlidir. Aynı düzeydeki yolların kesiştiği kavşakta sağdan gelen araç önce geçer.',
        items: [
          { title: 'Sağdan gelene yol ver', desc: 'Kavşağa aynı anda yaklaşan araçlardan sağındaki öncelikli.' },
          { title: 'Dönen, düz gidene yol verir', desc: 'Dönüş yapan sürücü ileri gidene ve yayalara yol verir.' },
        ],
        tip: 'Sağını kontrol et, sonra kavşağa gir.',
      },
      {
        title: 'Ana yol ve tali yol',
        intro: 'Ana yoldaki araç geçiş üstünlüğüne sahiptir. Tali yoldan gelen sürücü, kavşağa yaklaşırken yavaşlar ve gerekirse durarak yol verir.',
        items: [
          { title: '"Yol ver" levhası', desc: 'Ters üçgen: yaklaştığın yoldaki araçlara yol ver.' },
          { title: '"Dur" levhası', desc: 'Sekizgen: tam dur, sonra güvenliyse geç.' },
        ],
        tip: 'Levha yoksa bile yol çizgilerine ve yol genişliğine bak.',
      },
      {
        title: 'Dönel kavşak',
        intro: 'Dönel kavşakta aksine bir işaret yoksa kavşak içinde dönen araca yol verilir. Girmeden önce yavaşla, kavşak içindeki (soldan gelen) araçlara bak ve yol ver.',
        items: [
          { title: 'İçeridekine yol ver', desc: 'Kavşağa girmek isteyen bekler.' },
          { title: 'Çıkarken sinyal ver', desc: 'Çıkacağın kola yaklaşırken sağa sinyal ver.' },
        ],
      },
      {
        title: 'Acil durum araçları',
        intro: 'Siren ve çakar lamba ile görev yapan ambulans, itfaiye ve polis araçlarına yol verilir. Gerektiğinde dur, kavşağı onlar için boşalt.',
        tip: 'Işık yeşil olsa bile görevli araç geliyorsa yol ver.',
      },
    ],
  },
  {
    topicId: 'tc-isikli',
    steps: [
      {
        title: 'Işıkların anlamı',
        intro: 'Üç renk üç ayrı karar demektir.',
        items: [
          { title: 'Kırmızı: dur', desc: 'Dur çizgisinin gerisinde bekle.' },
          { title: 'Sarı: hazırlan', desc: 'Geçiş hakkı bitiyor; güvenle durabiliyorsan dur.' },
          { title: 'Yeşil: geç', desc: 'Kavşağın çıkışı doluysa içeri girme.' },
        ],
        tip: 'Sarı "hızlan" demek değildir.',
      },
      {
        title: 'Yanıp sönen sarı',
        intro: 'Yanıp sönen sarı ışık "dikkat" demektir. Yavaşla, çevreyi kontrol et ve gerekirse dur.',
        tip: 'Geçiş hakkını kazanmış olmazsın; diğer araçları da gözle.',
      },
      {
        title: 'Görevli mi ışık mı?',
        intro: 'Trafik görevlisinin işareti her zaman ışıklı işaretten önce gelir.',
        ordered: true,
        items: [{ title: 'Trafik görevlisi' }, { title: 'Işıklı işaretler' }, { title: 'Trafik işaret levhaları' }, { title: 'Genel kurallar' }],
        tip: 'Görevli kolunu kaldırıyorsa durup bekle.',
      },
      {
        title: 'Yeşil okla geçiş',
        intro: 'Yeşil ok yalnızca gösterdiği yöne dönüş izni verir. Ok yönü dışında gidemezsin; yayalara ve karşıdan gelenlere dikkat et.',
      },
    ],
  },
  {
    topicId: 'tc-hiz',
    steps: [
      {
        title: 'Hız sınırlarını bil',
        intro: 'Otomobiller için genel azami hızlar (aksine bir levha yoksa):',
        items: [
          { title: 'Yerleşim yeri içi: 50 km/s' },
          { title: 'Bölünmemiş yol (dışarısı): 90 km/s' },
          { title: 'Bölünmüş yol (dışarısı): 110 km/s' },
          { title: 'Otoyol: 120 km/s' },
        ],
        tip: 'Levha her zaman genel kuraldan önce gelir.',
      },
      {
        title: 'Hız sınır değil, koşula göre ayarlanır',
        intro: 'Sis, yağmur, kar, yokuş veya yoğun trafikte sınırın altında gitmek gerekir. "Sınır altında" olmak, "güvenli" olmak demek değildir.',
      },
      {
        title: 'Takip mesafesi',
        intro: 'Öndeki araçla aranda, hızının yarısı kadar metre mesafe bırak.',
        items: [
          { title: '50 km/s → 25 metre' },
          { title: '80 km/s → 40 metre' },
          { title: '100 km/s → 50 metre' },
        ],
        tip: 'Islak zeminde mesafeyi artır.',
      },
      {
        title: 'Gece ve karşıdan araç',
        intro: 'Karşıdan araç geldiğinde uzun farları kısa farlara çevir; sisli havada sis lambası ve kısa far kullan.',
      },
    ],
  },
  {
    topicId: 'tc-park',
    steps: [
      {
        title: 'Duraklama ve park farkı',
        intro: 'Duraklama kısa süreli bekleyiştir: yolcu indirmek, bindirmek veya yük yüklemek gibi. Park ise aracı bir süre bırakmaktır.',
        tip: 'Her park yeri duraklamaya da uygundur ama her duraklama yeri park etmeye uygun olmayabilir.',
      },
      {
        title: 'Park edilmeyecek yerler',
        intro: 'Güvenlik ve görüş için şu yerlerde park edilmez:',
        items: [
          { title: 'Yaya ve okul geçitleri' },
          { title: 'Kavşaklar ve yakınları' },
          { title: 'Tünel ve köprü üstleri' },
          { title: 'Demiryolu geçitleri' },
        ],
      },
      {
        title: 'Kurallı park',
        intro: 'Aracını yolun sağ kenarına, trafiği engellemeyecek şekilde, kaldırıma çok yaklaşmadan park et. Çıkarken arkadan gelenlere ve yayalara dikkat et.',
        tip: 'Çift sıra park etmek trafiği keser; asla yapma.',
      },
      {
        title: 'Park ederken emniyet',
        intro: 'El frenini çek, motoru kapat, vitese tak. Yokuş aşağıda tekerlekleri kaldırıma doğru, yokuş yukarıda (kaldırım varsa) kaldırımdan uzağa çevir. Kapıyı açmadan önce arkanı kontrol et.',
      },
    ],
  },
  {
    topicId: 'tc-isaretler',
    steps: [
      {
        title: 'Şekil ve renk ipucu verir',
        intro: 'Levhanın şekline ve rengine bakarak anlamını tahmin edebilirsin.',
        items: [
          { title: 'Üçgen + kırmızı çerçeve', desc: 'Tehlike uyarısı.' },
          { title: 'Daire + kırmızı çerçeve', desc: 'Yasak veya kısıtlama.' },
          { title: 'Daire + mavi zemin', desc: 'Zorunluluk / mecburi yön.' },
          { title: 'Dikdörtgen/kare + mavi', desc: 'Bilgi ve yönlendirme.' },
        ],
      },
      {
        title: 'Özel şekilli iki levha',
        items: [
          { title: 'DUR (sekizgen, kırmızı)', desc: 'Tam dur, yolu kontrol et.' },
          { title: 'YOL VER (ters üçgen)', desc: 'Yaklaştığın yoldaki araca yol ver.' },
        ],
        tip: 'İki levha da şekliyle tanınır; yazı okunmasa bile anlarsın.',
      },
      {
        title: 'Levhalar ve yatay işaretler',
        intro: 'Yol çizgileri de işaret sayılır. Kesiksiz çizgi aşılmaz; kesikli çizgi güvenliyse geçilebilir. Levha ile çizgi çelişirse levha önce gelir.',
      },
      {
        title: 'Soruda nasıl çıkar?',
        intro: 'Sınavda genellikle levhanın görselini verip anlamını sorarlar. Önce şekli, sonra rengi, sonra içindeki sembolü değerlendir.',
      },
    ],
  },
  {
    topicId: 'iy-bys',
    steps: [
      {
        title: 'Önce güvenlik, sonra bilinç',
        intro: 'Kazazedeye yaklaşmadan önce ortam güvenli mi diye bak. Sonra omuzlarından hafifçe sarsıp seslen.',
        ordered: true,
        items: [{ title: 'Ortamı güvenli hale getir' }, { title: 'Bilinci kontrol et' }, { title: '112\'yi ara' }, { title: 'Solunumu kontrol et' }],
        tip: 'Kendi güvenliğin ilk sırada.',
      },
      {
        title: 'Solunum kontrolü: en fazla 10 saniye',
        intro: 'Başı hafifçe geriye yatırıp çeneyi kaldır. Bak, dinle, hisset yöntemini kullan. Normal solunum yoksa kalp masajına başla.',
      },
      {
        title: 'Göğüs basısı',
        intro: 'Ellerini göğüs kemiğinin alt yarısına koy, kollarını dik tut.',
        items: [
          { title: 'Derinlik: 5-6 cm' },
          { title: 'Hız: dakikada 100-120' },
          { title: 'Her basıdan sonra göğsün tam yükselmesine izin ver' },
        ],
      },
      {
        title: '30 bası, 2 soluk',
        intro: 'Yetişkinde oran 30:2\'dir. Soluk vermeyi bilmiyorsan veya istemiyorsan yalnızca kesintisiz göğüs basısı uygulayabilirsin.',
        tip: 'Ambulans gelene veya kazazede kendine gelene kadar durma.',
      },
      {
        title: 'Solunum varsa: yan yatış',
        intro: 'Bilinci kapalı fakat soluyan kazazedeyi yan yatış (koma) pozisyonuna al. Solunum yolu açık kalır, kusmuk boğmaz.',
      },
    ],
  },
  {
    topicId: 'iy-kanama',
    steps: [
      {
        title: 'Dış kanamada ilk adım: baskı',
        intro: 'Yaraya temiz bir bez veya gazlı bezle doğrudan baskı uygula. Bezi kaldırıp bakma; kan geçerse üstüne yenisini ekle.',
        tip: 'Eldiven veya poşet kullanarak kendini koru.',
      },
      {
        title: 'Uzvu yükselt',
        intro: 'Yaralı kol ya da bacak mümkünse kalp seviyesinin üstüne kaldırılır. Kırık şüphesi varsa uzvu oynatma.',
      },
      {
        title: 'Burun kanaması',
        items: [
          { title: 'Kişiyi oturt' },
          { title: 'Başını öne eğ' },
          { title: 'Burun kanatlarını yaklaşık 10 dakika sık' },
        ],
        tip: 'Başı geriye atma; kan yutulur.',
      },
      {
        title: 'Şok pozisyonu',
        intro: 'Solgunluk, soğuk-nemli cilt, hızlı nabız şok belirtileridir. Kazazedeyi sırtüstü yatırıp ayaklarını yükselt, üstünü ört ve 112\'yi ara.',
      },
    ],
  },
  {
    topicId: 'at-fren',
    steps: [
      {
        title: 'Fren nasıl çalışır?',
        intro: 'Pedala bastığında kuvvet fren hidroliği ile tekerleklerdeki fren düzeneğine iletilir.',
        items: [
          { title: 'Fren pedalı' },
          { title: 'Ana silindir ve fren hidroliği' },
          { title: 'Balata/disk (veya kampana)' },
        ],
      },
      {
        title: 'Pedal sünger gibiyse',
        intro: 'Sistemde hava var demektir. Hava basıncı iletmeyi bozar; aracı servise götür.',
        tip: 'Fren hidroliği seviyesi düşükse de benzer sorun yaşanır.',
      },
      {
        title: 'ABS',
        intro: 'ABS, ani frende tekerleklerin kilitlenmesini önler ve direksiyon hakimiyetini korumana yardımcı olur. Pedalı sertçe bas ve bırakma.',
      },
      {
        title: 'Uzun inişte motor freni',
        intro: 'Uzun ve dik inişte düşük vitese alıp motor frenini kullan. Sürekli frene basmak balataları ısıtıp frenin tutmamasına sebep olur.',
        tip: 'Vitesi boşa alıp inmek tehlikelidir.',
      },
    ],
  },
];

import { EXT_TC } from './lessons/ext-tc';
import { EXT_TC2 } from './lessons/ext-tc2';
import { EXT_IY } from './lessons/ext-iy';
import { EXT_ATTA } from './lessons/ext-at-ta';

// Sonraki dosyalar aynı konu kimliğiyle öncekilerin yerine geçer (genişletilmiş anlatımlar).
const merged = new Map<string, Lesson>();
for (const l of [...BASE, ...LESSONS_TC, ...LESSONS_OTHER, ...EXT_TC, ...EXT_TC2, ...EXT_IY, ...EXT_ATTA]) merged.set(l.topicId, l);
import { STEP_PHOTOS } from './photos';

// Fotoğraf/şema eşlemesi (photos.ts) adım başlığına göre uygulanır.
export const LESSONS: Lesson[] = [...merged.values()].map((l) => {
  const sp = STEP_PHOTOS[l.topicId];
  return sp ? { ...l, steps: l.steps.map((s) => (sp[s.title] ? { ...s, photos: sp[s.title] } : s)) } : l;
});

export const lessonByTopic = (topicId: string) => LESSONS.find((l) => l.topicId === topicId);
