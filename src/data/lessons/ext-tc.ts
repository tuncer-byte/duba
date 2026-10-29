import type { Lesson } from '../types';

/** Genişletilmiş Trafik ve Çevre konu anlatımları (lessons.ts içinde aynı topicId'nin yerine geçer). */
export const EXT_TC: Lesson[] = [
  {
    topicId: 'tc-isaretler',
    steps: [
      {
        title: 'Levhalar neden önemli?',
        intro: 'Trafik levhaları yolun dilidir. Sürücüye ne yapacağını, nelerden kaçınacağını ve nelere dikkat edeceğini söyler. Sınavda her zaman levha sorusu çıkar.',
        items: [
          { title: 'Şekle bak', desc: 'Üçgen, daire, kare, sekizgen... Şekil ilk ipucudur.' },
          { title: 'Renge bak', desc: 'Kırmızı çerçeve uyarı veya yasak, mavi zemin zorunluluk veya bilgi demektir.' },
          { title: 'Simgeye bak', desc: 'Ortadaki çizim levhanın asıl anlamını verir.' },
        ],
        tip: 'Önce şekil, sonra renk, en son simge.',
      },
      {
        title: 'Levha grupları',
        intro: 'Levhalar beş ana gruba ayrılır. Grubu bulursan anlamı çoğu zaman tahmin edersin.',
        items: [
          { title: 'Tehlike uyarı', desc: 'Üçgen, kırmızı çerçeve. "Dikkat, ileride tehlike var."' },
          { title: 'Yasak ve kısıtlama', desc: 'Daire, kırmızı çerçeve. "Bunu yapma."' },
          { title: 'Zorunluluk (mecburiyet)', desc: 'Daire, mavi zemin. "Bunu yapmak zorundasın."' },
          { title: 'Bilgi', desc: 'Kare veya dikdörtgen, çoğunlukla mavi. "Bilgin olsun."' },
          { title: 'Geçiş önceliği', desc: 'DUR, YOL VER, ana yol levhaları. "Kim önce geçer?"' },
        ],
      },
      {
        title: 'Tehlike uyarı levhaları: virajlar',
        intro: 'Tehlike levhaları tehlikeden önce yerleştirilir. Amaç, sana hazırlanma süresi vermektir.',
        signs: ['viraj-sag', 'viraj-sol', 'dik-inis'],
        items: [
          { title: 'Tehlikeli viraj', desc: 'Hızı virajdan önce azalt. Viraj içinde fren yapma.' },
          { title: 'Dik iniş', desc: 'Düşük vitese al, motor frenini kullan.' },
        ],
        tip: 'Tehlike levhası görünce gazdan çekil.',
      },
      {
        title: 'Tehlike uyarı levhaları: insan ve ışık',
        intro: 'Bu levhalar yaya, çocuk ve ışık gibi anlık değişen durumları haber verir.',
        signs: ['yaya-uyari', 'okul-gecidi', 'iki-yonlu', 'isikli-uyari', 'diger-tehlike'],
        items: [
          { title: 'Yaya geçidi ve okul geçidi', desc: 'Hızı düşür, yayaya ve çocuğa her zaman yol ver.' },
          { title: 'İki yönlü trafik', desc: 'Karşıdan araç gelecek. Sağda kal, sollama yapma.' },
          { title: 'Işıklı işaret uyarısı', desc: 'İleride ışık var. Durmaya hazır ol.' },
          { title: 'Diğer tehlikeler', desc: 'Başka levhayla gösterilmeyen bir tehlike vardır.' },
        ],
        warn: 'Uyarı levhası seni durdurmaz. Ama hızını ve dikkatini artırmanı ister.',
      },
      {
        title: 'Yasak levhaları: giriş ve duraklama',
        intro: 'Yasak levhaları daire biçimindedir ve kırmızı çerçevelidir. Uymamak yasaktır.',
        signs: ['giris-yasak', 'trafige-kapali', 'park-yasak', 'duraklama-yasak'],
        items: [
          { title: 'Girilmez', desc: 'Yola bu yönden girilmez. Tek yönlü yolun ters ucunda görürsün.' },
          { title: 'Taşıt trafiğine kapalı yol', desc: 'Hiçbir taşıt giremez.' },
          { title: 'Park etmek yasaktır', desc: 'Park edilmez. Yolcu indirip bindirmek için kısa duraklama serbesttir.' },
          { title: 'Duraklamak ve park etmek yasaktır', desc: 'Durulmaz, park edilmez. Çapraz çizgi bunu anlatır.' },
        ],
        tip: 'Tek çizgi: park yok. Çapraz çizgi: durmak da yok.',
      },
      {
        title: 'Yasak levhaları: dönüş ve sollama',
        intro: 'Bazı levhalar yönünü kısıtlar. Levha o noktadan itibaren geçerlidir.',
        signs: ['sola-donulmez', 'saga-donulmez', 'u-donusu-yasak', 'sollama-yasak'],
        items: [
          { title: 'Sola ve sağa dönülmez', desc: 'Okun yönündeki dönüş yapılamaz. Düz gitmek serbesttir.' },
          { title: 'U dönüşü yapılmaz', desc: 'Geri dönüş yasaktır.' },
          { title: 'Sollama yasağı', desc: 'Öndeki motorlu aracı geçmek yasaktır.' },
        ],
        warn: 'Yasak, levhanın bulunduğu yerden başlar. Sonra bitiş levhasıyla veya kavşakla sona erer.',
      },
      {
        title: 'Hız sınırı levhaları',
        intro: 'Levhadaki sayı, saatte gidebileceğin en yüksek hızdır. Bu sayıyı aşmak yasaktır.',
        signs: ['hiz-30', 'hiz-50', 'hiz-90'],
        items: [
          { title: 'Azami hız', desc: 'Levhadan sonra bu hızı aşamazsın.' },
          { title: 'Koşullar kötüyse', desc: 'Yağmur, sis, yoğun trafikte levha sınırı bile yüksek olabilir. Daha yavaş git.' },
        ],
        tip: 'Hız levhası sınırdır, hedef değil.',
      },
      {
        title: 'Zorunluluk levhaları: yön',
        intro: 'Mavi zeminli yuvarlak levhalar bir şeyi yapmanı emreder.',
        signs: ['ileri-mecburi', 'sola-mecburi', 'saga-mecburi'],
        items: [
          { title: 'İleri mecburi yön', desc: 'Yalnızca düz gidebilirsin.' },
          { title: 'Sola mecburi yön', desc: 'Yalnızca sola dönebilirsin.' },
          { title: 'Sağa mecburi yön', desc: 'Yalnızca sağa dönebilirsin.' },
        ],
        warn: 'Mecburi yönün dışına çıkmak yasaktır. Okun gösterdiğinden başka yöne gitme.',
      },
      {
        title: 'Zorunluluk levhaları: yol türü',
        intro: 'Bazı mavi levhalar yolu kimin kullanacağını belirler.',
        signs: ['donel-kavsak', 'yaya-yolu', 'bisiklet-yolu'],
        items: [
          { title: 'Dönel kavşak', desc: 'Saat yönünün tersine dönersin. İçerideki araca yol verirsin.' },
          { title: 'Yaya yolu', desc: 'Yalnızca yayalar kullanır. Araç giremez.' },
          { title: 'Bisiklet yolu', desc: 'Yalnızca bisikletliler kullanır.' },
        ],
      },
      {
        title: 'Bilgi levhaları',
        intro: 'Bilgi levhaları dikdörtgen veya karedir. Sana bir şey emretmez; yol gösterir.',
        signs: ['park-yeri', 'hastane', 'yaya-gecidi', 'tek-yon'],
        items: [
          { title: 'Park yeri', desc: 'Araç bırakabileceğin yeri gösterir.' },
          { title: 'Hastane', desc: 'Yakında hastane var. Korna çalma, sessiz ol.' },
          { title: 'Yaya geçidi', desc: 'Yayalar buradan geçer. Yola çıkana yol ver.' },
          { title: 'Tek yönlü yol', desc: 'Yalnızca okun yönünde gidilir.' },
        ],
        tip: 'Yaya geçidi levhası mavi kare; yaya uyarısı kırmızı çerçeveli üçgendir.',
      },
      {
        title: 'Geçiş önceliği levhaları',
        intro: 'Bu levhalar kavşakta ve dar yerde kimin önce geçeceğini söyler.',
        signs: ['dur', 'yol-ver', 'ana-yol', 'ana-yol-sonu'],
        items: [
          { title: 'DUR', desc: 'Sekizgen, kırmızı. Tam dur, sonra yolu kontrol et.' },
          { title: 'YOL VER', desc: 'Ters üçgen. Yavaşla, gerekirse dur, gelene yol ver.' },
          { title: 'Öncelikli yol', desc: 'Bu yolda geçiş üstünlüğün var.' },
          { title: 'Öncelikli yolun sonu', desc: 'Üstünlüğün bitti. Kavşak kurallarına uy.' },
        ],
        warn: 'DUR levhasında "yavaşlayıp geçmek" yetmez. Tekerlek durmalıdır.',
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Benzer levhaları karıştırmak en sık hatadır.',
        items: [
          { title: 'Uyarı ile yasak', desc: 'Üçgen uyarır, daire yasaklar veya zorunlu kılar.' },
          { title: 'Park ile duraklama', desc: 'Tek çizgi park yasağı, çapraz çizgi duraklama ve park yasağıdır.' },
          { title: 'Mecburi ile yasak yön', desc: 'Mavi ok "mecbursun", kırmızı çizgili ok "yapma" demektir.' },
          { title: 'Yaya geçidi ve yaya uyarısı', desc: 'Biri bilgi, biri tehlike levhasıdır.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Levha önceliği: görevli, ışık, levha, genel kurallar. Levhalar genel kuralların önündedir.',
        tip: 'Şekil, renk, simge. Üç ipucuyla çoğu levhayı çözersin.',
      },
    ],
  },
  {
    topicId: 'tc-kavsak',
    steps: [
      {
        title: 'Kavşak nedir?',
        intro: 'Kavşak, iki veya daha fazla yolun kesiştiği yerdir. Kazaların çoğu burada olur. Çünkü araçlar farklı yönlerden gelir.',
        items: [
          { title: 'Dörtlü kavşak', desc: 'Dört yolun birleştiği yer.' },
          { title: 'T kavşağı', desc: 'Bir yolun diğerine bağlandığı yer.' },
          { title: 'Dönel kavşak', desc: 'Ortasında ada olan, araçların dönerek geçtiği yer.' },
        ],
        tip: 'Kavşağa hep yavaş yaklaş ve her yöne bak.',
      },
      {
        title: 'Öncelik sırası',
        intro: 'Kimin önce geçeceğine şu sıraya göre karar verilir. Üstteki alttakinden önce gelir.',
        ordered: true,
        items: [
          { title: 'Trafik görevlisi' },
          { title: 'Işıklı işaretler' },
          { title: 'Trafik levhaları' },
          { title: 'Genel kurallar' },
        ],
        warn: 'Görevli varsa ışığa ve levhaya bakma. Görevliye uy.',
      },
      {
        title: 'İşaretsiz kavşak: sağdakine yol ver',
        intro: 'Işık, levha ve görevli yoksa aynı düzeydeki yolda sağdan gelen önce geçer.',
        scene: { type: 'cross', cars: [{ from: 'S', go: 'straight', label: '1' }, { from: 'E', go: 'straight', label: '2' }] },
        items: [
          { title: 'Resimde', desc: '1 numaralı aracın sağından 2 numaralı araç geliyor. Önce 2 geçer.' },
        ],
        tip: 'Sağını kontrol et, sonra gir.',
      },
      {
        title: 'Dönen araç, düz gidene yol verir',
        intro: 'Dönüş yapan sürücü, karşıdan düz gelene yol verir. Dönüş yapan yayalara da yol verir.',
        scene: { type: 'cross', cars: [{ from: 'S', go: 'left', label: '1' }, { from: 'N', go: 'straight', label: '2' }] },
        items: [
          { title: 'Resimde', desc: '1 sola dönüyor, 2 düz gidiyor. Önce 2 geçer.' },
          { title: 'Sağa dönüşte', desc: 'Önce yayaya, sonra yola bak.' },
        ],
        warn: 'Sola dönen, karşıdan gelen düz araca her zaman yol verir.',
      },
      {
        title: 'Ana yol ve tali yol',
        intro: 'Ana yolda ilerleyen aracın geçiş üstünlüğü vardır. Tali yoldaki araç bekler.',
        scene: { type: 'cross', signs: { S: 'yol-ver', N: 'yol-ver', W: 'ana-yol', E: 'ana-yol' }, cars: [{ from: 'S', go: 'straight', label: '2' }, { from: 'E', go: 'straight', label: '1' }] },
        signs: ['ana-yol', 'yol-ver'],
        items: [
          { title: 'Resimde', desc: '1 ana yolda, 2 tali yolda. 2 yol verir, 1 geçer.' },
          { title: 'Ana yolun sonu', desc: 'Levha görünce üstünlüğün biter. Sağdakine yol ver.' },
        ],
      },
      {
        title: 'DUR levhası',
        intro: 'DUR levhasında önce tam dur. Sonra yolu kontrol et ve güvenliyse geç.',
        scene: { type: 'cross', signs: { S: 'dur', W: 'ana-yol', E: 'ana-yol' }, cars: [{ from: 'S', go: 'left', label: '1' }, { from: 'W', go: 'straight', label: '2' }] },
        signs: ['dur'],
        items: [
          { title: 'Resimde', desc: '1 numaralı araç DUR levhasındadır. Durur, 2 geçer.' },
          { title: 'Nerede durulur?', desc: 'Dur çizgisinde. Çizgi yoksa kavşağın hemen öncesinde, görüş sağlayan yerde.' },
        ],
        warn: 'DUR levhasında yavaşlamak yetmez. Durmak şarttır.',
      },
      {
        title: 'Işıklı kavşak',
        intro: 'Işık varsa ışığa uyulur. Yeşilde geçersin, kırmızıda durursun.',
        scene: { type: 'cross', light: { S: 'green', E: 'red' }, cars: [{ from: 'S', go: 'straight', label: '1' }, { from: 'E', go: 'straight', label: '2' }] },
        items: [
          { title: 'Resimde', desc: '1 numaralıya yeşil, 2 numaralıya kırmızı yanıyor. 1 geçer.' },
          { title: 'Yeşilde bile', desc: 'Kavşağın çıkışı doluysa içeri girme.' },
        ],
      },
      {
        title: 'Acil durum araçları',
        intro: 'Sirenli ve çakar lambalı ambulans, itfaiye ve polis aracı görevdeyken her yerde önce geçer.',
        scene: { type: 'cross', cars: [{ from: 'S', go: 'straight', label: '1' }, { from: 'W', go: 'straight', label: 'A', kind: 'ambulance' }] },
        items: [
          { title: 'Resimde', desc: 'Ambulans (A) görevde. 1 numaralı araç yol verir.' },
          { title: 'Ne yapmalı?', desc: 'Sağa yaklaş, yavaşla, gerekirse dur. Yolu aç.' },
        ],
        tip: 'Alarm yoksa ayrıcalık da yoktur. Görev işareti şart.',
      },
      {
        title: 'T kavşağı',
        intro: 'T kavşağında da aynı kurallar geçerlidir. İşaret yoksa sağdan gelen önce geçer.',
        scene: { type: 'tee', missing: 'N', cars: [{ from: 'S', go: 'left', label: '1' }, { from: 'E', go: 'straight', label: '2' }] },
        items: [
          { title: 'Resimde', desc: '1 sola dönüyor, sağından 2 geliyor. Önce 2 geçer.' },
          { title: 'Yan yoldan çıkarken', desc: 'Ana yoldaki araçlara yol ver.' },
        ],
      },
      {
        title: 'Dönel kavşak',
        intro: 'Dönel kavşakta saat yönünün tersine dönülür. Kavşağın içindeki araç önceliklidir.',
        signs: ['donel-kavsak'],
        items: [
          { title: 'Girerken', desc: 'Yavaşla. İçerideki araca yol ver.' },
          { title: 'Dönerken', desc: 'Şeridini koru. Gereksiz yere durma.' },
          { title: 'Çıkarken', desc: 'Çıkış koluna yaklaşırken sağa sinyal ver.' },
        ],
        warn: 'Dönel kavşakta içerideki geçer, girmek isteyen bekler.',
      },
      {
        title: 'Sık yapılan hatalar',
        intro: 'Kavşakta hatalar çabuk kazaya dönüşür.',
        items: [
          { title: 'Sinyalsiz dönmek', desc: 'Dönüşten önce sinyal ver.' },
          { title: 'Yayayı görmemek', desc: 'Dönerken yaya geçidinde yayaya yol ver.' },
          { title: 'Kavşakta durmak', desc: 'Kavşağın içinde durup trafiği kilitleme.' },
          { title: 'Yeşile güvenmek', desc: 'Yeşilde bile çevreye bak.' },
        ],
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Kroki sorularında önce işaretlere bak, sonra yönlere.',
        items: [
          { title: 'Önce görevli, ışık, levha', desc: 'Bunlar yoksa sağdan gelen kuralı uygulanır.' },
          { title: 'Dönenin yol verme borcu', desc: 'Düz giden dönene göre öncelikli.' },
          { title: 'Ambulans her zaman önde', desc: 'Görevdeyse diğer kurallar geçersizdir.' },
          { title: 'Araç sayısı', desc: 'Üç araç varsa sırayla "kim kime yol verir" diye ilerle.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Sıra: görevli, ışık, levha, genel kurallar. Genel kuralda sağdaki önce, dönen sonra.',
        tip: 'Şüphede kalırsan yavaşla ve yol ver.',
      },
    ],
  },
  {
    topicId: 'tc-hiz',
    steps: [
      {
        title: 'Hız neden önemlidir?',
        intro: 'Hız arttıkça fren mesafesi uzar, çarpışma şiddeti büyür ve görüş alanın daralır. Kazaların büyük bölümünde hız payı vardır.',
        items: [
          { title: 'Durma mesafesi uzar', desc: 'Hızı iki katına çıkarırsan frenle durma yolu çok daha fazla uzar.' },
          { title: 'Görüş daralır', desc: 'Hızlı giderken yan taraflar bulanık görünür.' },
          { title: 'Çarpma etkisi büyür', desc: 'Kazada yaralanma riski artar.' },
        ],
        tip: 'Hızlı gitmek vakit kazandırmaz; riski büyütür.',
      },
      {
        title: 'Yasal hız sınırları',
        intro: 'Levha yoksa otomobiller için şu sınırlar geçerlidir.',
        items: [
          { title: 'Yerleşim yeri içi', desc: '50 km/s' },
          { title: 'Bölünmemiş yol (dışarısı)', desc: '90 km/s' },
          { title: 'Bölünmüş yol (dışarısı)', desc: '110 km/s' },
          { title: 'Otoyol', desc: '120 km/s' },
        ],
        warn: 'Bu sayılar otomobil içindir. Levha varsa levhadaki sayı geçerlidir.',
      },
      {
        title: 'Hız levhaları',
        intro: 'Levhadaki sayı sınırdır. Levhadan itibaren geçerli olur.',
        signs: ['hiz-30', 'hiz-50', 'hiz-90'],
        items: [
          { title: 'Levha yasal sınırdan düşükse', desc: 'Levhadaki hıza uy.' },
          { title: 'Levha yasal sınırın üstündeyse', desc: 'Bu durum, yetkili makamın düzenlemesine göre değişir. Sınavda levha esas alınır.' },
        ],
      },
      {
        title: 'Hız, koşula göre ayarlanır',
        intro: 'Sınır en yüksek hızdır, her zaman gidilecek hız değildir. Şartlar kötüyse hızını düşür.',
        items: [
          { title: 'Yağmur, kar, buzlanma', desc: 'Yol kayganlaşır. Fren mesafesi uzar.' },
          { title: 'Sis ve görüş azlığı', desc: 'Görebildiğin mesafede durabilecek hızda git.' },
          { title: 'Yoğun trafik, kalabalık', desc: 'Çevreni izleyebilecek hızda ol.' },
          { title: 'Yorgunluk, yük, eğim', desc: 'Araç ve sen tepki vermekte zorlanırsın.' },
        ],
        warn: 'Sınır içinde olmak her zaman güvenli olmak demek değildir.',
      },
      {
        title: 'Takip mesafesi',
        intro: 'Önündeki araçla aranda, ani frende durabileceğin boşluk bırak. Pratik kural: hızının yarısı kadar metre.',
        items: [
          { title: '50 km/s', desc: 'Yaklaşık 25 metre.' },
          { title: '80 km/s', desc: 'Yaklaşık 40 metre.' },
          { title: '100 km/s', desc: 'Yaklaşık 50 metre.' },
        ],
        tip: 'Hız artarsa mesafeyi de artır.',
      },
      {
        title: 'Takip mesafesini artıran haller',
        intro: 'Bazı durumlarda normal mesafe yetmez. Bunlarda mesafeyi büyüt.',
        items: [
          { title: 'Islak ve kaygan yol' },
          { title: 'Gece ve görüşün az olduğu zaman' },
          { title: 'Ağır yük taşıma, römork çekme' },
          { title: 'Önde büyük araç varsa', desc: 'Yolu göremezsin; daha çok uzak dur.' },
        ],
      },
      {
        title: 'Yaklaşırken yavaşla',
        intro: 'Bazı yerlerde yasal sınır uygun olsa da yavaşlamak gerekir.',
        items: [
          { title: 'Kavşak, viraj, tepe üstü', desc: 'Görüş kısıtlıdır.' },
          { title: 'Yaya ve okul geçidi', desc: 'Çocuk veya yaya aniden çıkabilir.' },
          { title: 'Demiryolu geçidi', desc: 'Durmaya hazır ol.' },
          { title: 'Dar yol, kalabalık yerleşim', desc: 'Çevre hareketlidir.' },
        ],
        warn: 'Yaya ve okul geçidinde hız sınırından bağımsız olarak yavaşla.',
      },
      {
        title: 'Gece sürüşü',
        intro: 'Geceleri görüş mesafen kısalır. Hızını farların aydınlattığı mesafede durabilecek şekilde ayarla.',
        items: [
          { title: 'Karşıdan araç gelince', desc: 'Uzun farı kapat, kısa fara geç.' },
          { title: 'Öndeki araçtan uzak dur', desc: 'Uzun far ile arkadan yaklaşma.' },
          { title: 'Göz yorgunluğu', desc: 'Yorulunca dinlen.' },
        ],
      },
      {
        title: 'Aşırı hızın sonuçları',
        intro: 'Hız sınırını aşmak yasaktır ve yaptırım gerektirir. Radar, kamera ve devriye ile denetlenir.',
        items: [
          { title: 'Yaptırımlar', desc: 'Sınırı aşan sürücü idari yaptırıma tabi olur. Tutarları ezberleme, kuralı bil.' },
          { title: 'Asıl bedel', desc: 'Kaza ve yaralanma riskidir.' },
        ],
      },
      {
        title: 'Sık yapılan hatalar',
        intro: 'Hız konusunda en çok bu hatalar görülür.',
        items: [
          { title: 'Yolu iyi bildiğini sanmak', desc: 'Alışkanlık dikkati azaltır.' },
          { title: 'Hızı sadece levhaya göre ayarlamak', desc: 'Hava ve trafik de önemlidir.' },
          { title: 'Önündekine yapışmak', desc: 'Kısa mesafe, kaza demektir.' },
          { title: 'Kısa yolculukta ihmal', desc: 'Kazalar çoğu kez kısa yolda olur.' },
        ],
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Sayıları karıştırma.',
        items: [
          { title: '90 ile 110', desc: 'Bölünmemiş yolda 90, bölünmüş yolda 110.' },
          { title: 'Yerleşim yeri', desc: 'Şehir içinde sınır 50 km/s.' },
          { title: 'Takip mesafesi', desc: 'Hızın yarısı kadar metre.' },
          { title: '"En yüksek hız"', desc: 'Her zaman gidilecek hız olarak yorumlanmaz.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Sınırlar 50, 90, 110, 120. Mesafe: hızın yarısı kadar metre. Koşul kötüyse yavaş.',
        tip: 'Güvenli hız, durabildiğin hızdır.',
      },
    ],
  },
  {
    topicId: 'tc-park',
    steps: [
      {
        title: 'Duraklama ve park',
        intro: 'İkisi farklı şeydir. Sınavda bu fark sık sorulur.',
        items: [
          { title: 'Duraklama', desc: 'Araç kısa süre durur. Yolcu indirip bindirme veya yükleme gibi. Sürücü başındadır.' },
          { title: 'Park', desc: 'Araç uzun süre bırakılır. Sürücü genellikle araçtan ayrılır.' },
        ],
        tip: 'Duraklamada hazır, parkta uzak.',
      },
      {
        title: 'Genel kurallar',
        intro: 'Duraklama ve park, yolun sağında ve trafiği engellemeyecek şekilde yapılır.',
        items: [
          { title: 'Yolun sağ kenarı', desc: 'Araç yönünde ve sağa yakın.' },
          { title: 'Kaldırıma paralel', desc: 'Aracı kenara yaklaştır.' },
          { title: 'Trafiği aksatma', desc: 'Diğer araçlar rahat geçebilmeli.' },
          { title: 'Çift sıra park yok', desc: 'Park etmiş aracın yanına park edilmez.' },
        ],
      },
      {
        title: 'Park etmenin yasak olduğu yerler',
        intro: 'Bu yerlerde park edilmez. Çünkü görüşü kapatır veya yolu bloke eder.',
        items: [
          { title: 'Yaya ve okul geçitleri' },
          { title: 'Kavşaklar ve yakınları' },
          { title: 'Tünel ve köprü üstleri' },
          { title: 'Demiryolu geçitleri' },
          { title: 'Tepe üstü ve virajlar', desc: 'Karşıdan gelen seni göremez.' },
          { title: 'Otobüs durakları, yangın muslukları' },
        ],
        warn: 'Kapı, garaj ve geçiş yollarının önünü kapatma.',
      },
      {
        title: 'Yasak levhaları',
        intro: 'Levha varsa kural açıktır. İki levhayı karıştırma.',
        signs: ['park-yasak', 'duraklama-yasak'],
        items: [
          { title: 'Park etmek yasaktır', desc: 'Park yok. Kısa duraklama serbest.' },
          { title: 'Duraklamak ve park etmek yasaktır', desc: 'İkisi de yok.' },
        ],
        tip: 'Çapraz çizgi varsa durmak da yasak.',
      },
      {
        title: 'Park yeri levhası',
        intro: 'Mavi P levhası, park edebileceğin yeri gösterir.',
        signs: ['park-yeri'],
        items: [
          { title: 'Ek levha', desc: 'Altındaki levha süre veya araç türü bildirebilir. Mutlaka oku.' },
          { title: 'Özel yerler', desc: 'Engelli park yerine yalnızca hakkı olanlar park eder.' },
        ],
      },
      {
        title: 'Aracı bırakırken',
        intro: 'Park ettikten sonra aracın kendiliğinden hareket etmemesini sağla.',
        ordered: true,
        items: [
          { title: 'Aracı durdur' },
          { title: 'El frenini çek' },
          { title: 'Vitesi bırak', desc: 'Düz yolda genelde 1. vites veya P. Eğimde de ilk vites.' },
          { title: 'Motoru kapat, anahtarı al' },
          { title: 'Kapıları kilitle' },
        ],
      },
      {
        title: 'Eğimli yerde park',
        intro: 'Eğimde araç kayabilir. Tekerlekleri yöneltmek riski azaltır.',
        items: [
          { title: 'Yokuş aşağı', desc: 'Direksiyonu kaldırıma doğru çevir.' },
          { title: 'Yokuş yukarı', desc: 'Direksiyonu kaldırımdan uzağa çevir.' },
          { title: 'Her durumda', desc: 'El freni çekili, vites takılı.' },
        ],
        tip: 'Araç kayarsa kaldırım onu tutsun.',
      },
      {
        title: 'Kapıyı açarken',
        intro: 'Kapı açmak sanıldığından tehlikelidir. Arkadan gelen bisikletli veya motosiklet çarpabilir.',
        items: [
          { title: 'Önce aynaya bak', desc: 'Arkadan gelen var mı?' },
          { title: 'Omuz üstünden kontrol et', desc: 'Kör noktayı gör.' },
          { title: 'Kapıyı yavaş ve az aç', desc: 'Önce yolu kontrol et.' },
        ],
        warn: 'Kapıyı aniden açmak kazaya yol açar.',
      },
      {
        title: 'Park ederken manevra',
        intro: 'Park manevrası dikkatli ve yavaş yapılır.',
        items: [
          { title: 'Sinyal ver', desc: 'Niyetini göster.' },
          { title: 'Yavaş git', desc: 'Çevrede yaya ve araç olabilir.' },
          { title: 'Geri gelirken çevreyi izle', desc: 'Aynalara ve arkaya bak.' },
        ],
      },
      {
        title: 'Sık yapılan hatalar',
        intro: 'Park hatalarının çoğu "kısa süre" bahanesidir.',
        items: [
          { title: 'Kısa süre diye yasak yere durmak' },
          { title: 'Çift sıra park etmek' },
          { title: 'El frenini unutmak' },
          { title: 'Yaya geçidinin üstünde beklemek' },
        ],
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Sorular çoğunlukla "burada park edilir mi?" biçimindedir.',
        items: [
          { title: 'Yaya geçidi, kavşak, tünel', desc: 'Park edilmez.' },
          { title: 'Park yasağı ve duraklama yasağı', desc: 'Park yasağında duraklama serbesttir.' },
          { title: 'Eğimli yer', desc: 'Tekerlek yönü ve el freni sorulur.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Sağda, paralel ve trafiği engellemeden park et. Yasak yerleri ve levhaları kontrol et.',
        tip: 'Çıkarken el freni, vites, motor, kilit.',
      },
    ],
  },
  {
    topicId: 'tc-sollama',
    steps: [
      {
        title: 'Sollama nedir?',
        intro: 'Sollama, aynı yönde giden bir aracı geçmektir. Yolun en riskli manevralarından biridir. Acele etme.',
        tip: 'Şüphen varsa geçme.',
      },
      {
        title: 'Geçme normalde soldan yapılır',
        intro: 'Öndeki aracı sol şeride geçerek geçersin. Sonra sağ şeride dönersin.',
        items: [
          { title: 'Sol şeride geç', desc: 'Önce yolun boş olduğundan emin ol.' },
          { title: 'Geç ve ön yanına çık', desc: 'Yeterli yan boşluk bırak.' },
          { title: 'Sağa dön', desc: 'Geçtiğin aracı aynada gör, sonra gir.' },
        ],
      },
      {
        title: 'Geçmeden önce kontrol',
        intro: 'Her seferinde aynı sırayı uygula.',
        ordered: true,
        items: [
          { title: 'Önünü ve karşıyı gör', desc: 'Yeterli görüş yoksa geçme.' },
          { title: 'Aynalara bak', desc: 'Arkandaki araç seni geçiyor olabilir.' },
          { title: 'Sol sinyal ver', desc: 'Niyetini herkese göster.' },
          { title: 'Hızlanıp güvenle geç' },
        ],
      },
      {
        title: 'Karşıdan gelen araç',
        intro: 'Karşı şeritte araç görürsen mesafeyi ve hızı doğru hesapla. Geçişin bitmesine yetecek boşluk olmalıdır.',
        items: [
          { title: 'Emin değilsen vazgeç', desc: 'Geçmekten vazgeçmek her zaman daha güvenlidir.' },
          { title: 'Geç başlamak', desc: 'Geçerken yetişemezsen eski şeride dön.' },
        ],
        warn: 'Karşıdan gelen araçlar çok hızlı yaklaşır. Mesafeyi hep fazla hesapla.',
      },
      {
        title: 'Geçilen sürücünün görevi',
        intro: 'Geçilen sürücünün de kuralı vardır.',
        items: [
          { title: 'Hızını artırmaz', desc: 'Yarışmaya girmez.' },
          { title: 'Sağa yanaşır', desc: 'Mümkünse yavaşlayıp kolaylık sağlar.' },
          { title: 'Yol verir', desc: 'Geçen araç öne geçebilmeli.' },
        ],
      },
      {
        title: 'Geçmenin yasak olduğu yerler',
        intro: 'Görüşün kısıtlı veya tehlikenin yüksek olduğu yerde geçilmez.',
        items: [
          { title: 'Tepe üstü ve dönemeçler' },
          { title: 'Kavşaklara yaklaşırken ve kavşak içinde' },
          { title: 'Yaya ve okul geçitleri' },
          { title: 'Demiryolu geçitleri' },
          { title: 'Dar köprü ve tüneller' },
          { title: 'Sis, yoğun yağış gibi kötü görüş' },
        ],
      },
      {
        title: 'Sollama yasağı levhası',
        intro: 'Levha varsa kural nettir. Öndeki aracı geçmek yasaktır.',
        signs: ['sollama-yasak'],
        items: [
          { title: 'Levha ve çizgi', desc: 'Yol ortasındaki kesiksiz çizgi de geçmeyi yasaklar.' },
          { title: 'Kesikli çizgi', desc: 'Güvenliyse şerit değiştirilebilir.' },
        ],
        tip: 'Kesiksiz çizgiye basmak yasaktır.',
      },
      {
        title: 'Sağdan geçme istisnası',
        intro: 'Öndeki araç sola dönmek için sinyal verip sola yanaşmışsa onu sağdan geçebilirsin.',
        items: [
          { title: 'Tek yönlü ve çok şeritli yollar', desc: 'Şerit kullanımına uygun olarak, sağdan gidilebilir.' },
          { title: 'Dikkat', desc: 'Sağdan geçerken özellikle dikkatli ol.' },
        ],
        tip: 'Genel kural soldan, sağdan geçme istisnadır.',
      },
      {
        title: 'Geçilmekte olan araç',
        intro: 'Biri seni geçmeye başladıysa sen onu geçmeye kalkma.',
        items: [
          { title: 'Öndeki geçişe başlamışsa', desc: 'Sen bekle.' },
          { title: 'Arkandaki geçişe başlamışsa', desc: 'Hızlanma, yol ver.' },
        ],
        warn: 'Geçiş sırasında iki araç yan yana. Hızlanmak kazaya yol açar.',
      },
      {
        title: 'Sık yapılan hatalar',
        intro: 'Sollamada hatalar ağır sonuç doğurur.',
        items: [
          { title: 'Sinyalsiz geçmek' },
          { title: 'Aynaya bakmamak' },
          { title: 'Virajda ve tepede geçmek' },
          { title: 'Sağa çok erken dönmek', desc: 'Geçtiğin aracın önünü keser.' },
        ],
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Yer ve görüşe bak.',
        items: [
          { title: 'Tepe, viraj, kavşak, geçit', desc: 'Cevap genelde "yasak".' },
          { title: 'Sağdan geçme', desc: 'Sadece istisna durumunda.' },
          { title: 'Geçilen araç', desc: 'Hızını artıramaz.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Bak, aynaya bak, sinyal ver, geç, sağa dön. Şüphede vazgeç.',
        tip: 'Geçmek zorunlu değildir, güvenli geçmek zorunludur.',
      },
    ],
  },
  {
    topicId: 'tc-serit',
    steps: [
      {
        title: 'Şeridini koru',
        intro: 'Aracını şeridin ortasında ve çizgilere basmadan sür. Şerit değiştirmek gerektiğinde bilerek yap.',
        tip: 'İki şeridin çizgisi üzerinde gitme.',
      },
      {
        title: 'Yavaş araç sağda gider',
        intro: 'Çok şeritli yollarda yavaş araçlar sağ şeridi kullanır. Sol şerit geçme içindir.',
        items: [
          { title: 'Geçişi bitir', desc: 'Geçtikten sonra sağa dön.' },
          { title: 'Sol şeritte oyalanma', desc: 'Arkandakileri engellersin.' },
        ],
      },
      {
        title: 'Şerit değiştirme sırası',
        intro: 'Şerit değiştirirken aynı sırayı uygula.',
        ordered: true,
        items: [
          { title: 'Ayna ve kör nokta kontrolü' },
          { title: 'Sinyal ver' },
          { title: 'Yan boşluğu kontrol et' },
          { title: 'Yavaşça geç' },
          { title: 'Sinyali kapat' },
        ],
        warn: 'Sinyal, manevradan önce verilir. Aynı anda değil.',
      },
      {
        title: 'Kör nokta',
        intro: 'Aynalarda görünmeyen alana kör nokta denir. Yan arkandaki araç bu alanda olabilir.',
        items: [
          { title: 'Omzunun üzerinden bak', desc: 'Şerit değiştirmeden önce başını çevir.' },
          { title: 'Büyük araçların yanında', desc: 'Kör noktaları büyüktür. Yanında oyalanma.' },
        ],
        tip: 'Aynalar yetmez, omuz kontrolü de yap.',
      },
      {
        title: 'Dönüşe hazırlık',
        intro: 'Dönmeden önce doğru şeritte ol. Yeterli mesafeden sinyal ver.',
        items: [
          { title: 'Sağa dönüş', desc: 'Sağ şeritte ve yolun sağına yakın ol.' },
          { title: 'Sola dönüş', desc: 'Sol şeritte ol. Karşıdan gelene ve yayaya yol ver.' },
        ],
        tip: 'Önce şerit, sonra dönüş.',
      },
      {
        title: 'Yol çizgileri',
        intro: 'Çizgiler kuralı gösterir.',
        items: [
          { title: 'Kesiksiz çizgi', desc: 'Aşılmaz, üzerine basılmaz.' },
          { title: 'Kesikli çizgi', desc: 'Güvenliyse geçilebilir.' },
          { title: 'Çift çizgi', desc: 'Yönleri ayırır, aşma.' },
        ],
      },
      {
        title: 'Yön okları',
        intro: 'Yol üzerindeki oklar o şeridin gideceği yönü gösterir.',
        signs: ['ileri-mecburi', 'sola-mecburi', 'saga-mecburi'],
        items: [
          { title: 'Oka uy', desc: 'Sağ oklu şeritten sola dönmek yasaktır.' },
          { title: 'Erken seç', desc: 'Dönüş şeridini kavşaktan önce seç.' },
        ],
      },
      {
        title: 'Birleşen yollar',
        intro: 'Şeritler birleşirken veya azalırken sırayla geçilir.',
        items: [
          { title: 'Fermuar gibi', desc: 'Araçlar sırayla birbirine yol verir.' },
          { title: 'Hızını uydur', desc: 'Aniden öne atlama.' },
        ],
        tip: 'Nazik ol. Önce kendine yer aç.',
      },
      {
        title: 'Dar yol ve karşılaşma',
        intro: 'Dar yolda karşıdan araç gelirse çözüm sağa yanaşmaktır.',
        items: [
          { title: 'Dik eğimde', desc: 'İnen araç, çıkan araca yol verir.' },
          { title: 'Engel olan taraf', desc: 'Engeli olan taraftaki araç bekler.' },
        ],
        warn: 'Yola engel çıkmışsa o taraftaki sürücü bekler.',
      },
      {
        title: 'Sık yapılan hatalar',
        intro: 'Şerit hataları çoğunlukla dikkatsizlikten olur.',
        items: [
          { title: 'Sinyalsiz şerit değiştirmek' },
          { title: 'Çizgi üzerinde gitmek' },
          { title: 'Son anda dönüş şeridine atlamak' },
          { title: 'Sol şeritte yavaş gitmek' },
        ],
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Sinyal ve çizgi soruları çok çıkar.',
        items: [
          { title: 'Sinyal ne zaman?', desc: 'Manevradan önce.' },
          { title: 'Hangi şerit?', desc: 'Yavaş araç sağda.' },
          { title: 'Kesiksiz çizgi', desc: 'Aşılmaz.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Ayna, sinyal, kontrol, geçiş. Yavaş sağda, hızlı solda.',
        tip: 'Şerit değiştirmek bir karardır, refleks değil.',
      },
    ],
  },
  {
    topicId: 'tc-isikli',
    steps: [
      {
        title: 'Işıklı işaret cihazı',
        intro: 'Işıklı trafik işaretleri kavşaklarda ve yaya geçitlerinde geçişi düzenler. Üç renk vardır.',
        items: [
          { title: 'Kırmızı' },
          { title: 'Sarı' },
          { title: 'Yeşil' },
        ],
        tip: 'Işık, levhadan önce gelir.',
      },
      {
        title: 'Kırmızı ışık',
        intro: 'Kırmızıda dur. Dur çizgisinin gerisinde bekle.',
        scene: { type: 'cross', light: { S: 'red', E: 'green' }, cars: [{ from: 'S', go: 'straight', label: '1' }, { from: 'E', go: 'straight', label: '2' }] },
        items: [
          { title: 'Resimde', desc: '1 numaralıya kırmızı yanıyor. Durur, 2 geçer.' },
          { title: 'Çizgi yoksa', desc: 'Kavşağa girmeden, yaya geçidini kapatmadan dur.' },
        ],
        warn: 'Kırmızıda geçmek ağır kazalara yol açar.',
      },
      {
        title: 'Sarı ışık',
        intro: 'Sarı, geçiş hakkının bitmek üzere olduğunu söyler. Güvenle durabiliyorsan dur.',
        items: [
          { title: 'Duramayacaksan', desc: 'Ani fren yapma, kavşağı hızla boşalt.' },
          { title: 'Duruyorsan', desc: 'Arkandaki aracı da hesaba kat.' },
        ],
        tip: 'Sarı "hızlan" demek değildir.',
      },
      {
        title: 'Yeşil ışık',
        intro: 'Yeşilde geçiş hakkın vardır. Ama her zaman çevreni kontrol et.',
        scene: { type: 'cross', light: { S: 'green', E: 'red' }, cars: [{ from: 'S', go: 'straight', label: '1' }, { from: 'E', go: 'straight', label: '2' }] },
        items: [
          { title: 'Resimde', desc: '1 numaralıya yeşil yanıyor. 1 geçer, 2 bekler.' },
          { title: 'Kavşak doluysa', desc: 'Çıkışı kapalıysa içeri girme.' },
          { title: 'Yayalara dikkat', desc: 'Dönerken geçen yayaya yol ver.' },
        ],
      },
      {
        title: 'Kırmızı ve sarı birlikte',
        intro: 'İkisi birlikte yanarsa yeşil yakında yanacak demektir. Hâlâ geçiş yok.',
        items: [
          { title: 'Hazırlan', desc: 'Vitese ve gaza hazır ol.' },
          { title: 'Yine de bekle', desc: 'Yeşil yanmadan hareket etme.' },
        ],
        warn: 'Kırmızı-sarı birlikte hâlâ durmak demektir.',
      },
      {
        title: 'Yeşil ok',
        intro: 'Yeşil ok yalnızca gösterdiği yöne geçiş izni verir.',
        items: [
          { title: 'Ok yönünde geçersin', desc: 'Başka yöne dönme.' },
          { title: 'Kırmızı ve yeşil ok', desc: 'Ana ışık kırmızı olsa bile ok yönünde geçebilirsin.' },
          { title: 'Yayalara yol ver', desc: 'Okla geçerken yaya geçidine dikkat.' },
        ],
      },
      {
        title: 'Yanıp sönen sarı',
        intro: 'Yanıp sönen sarı ışıkta dikkat edilir. Kavşak kuralları geçerlidir.',
        items: [
          { title: 'Yavaşla', desc: 'Çevreni kontrol et.' },
          { title: 'Geçiş kurallarına uy', desc: 'Levha ve genel kurallara göre ilerle.' },
        ],
        tip: 'Yanıp sönen sarı: dikkat, dur demek değil.',
      },
      {
        title: 'Işık çalışmıyorsa',
        intro: 'Işık arızalı veya sönükse normal kavşak kuralları geçerlidir.',
        items: [
          { title: 'Levha varsa levha', desc: 'DUR, YOL VER, ana yol.' },
          { title: 'Hiçbir şey yoksa', desc: 'Sağdan gelen önce.' },
        ],
      },
      {
        title: 'Görevli ile ışık',
        intro: 'Görevli varsa görevliye uyulur. Işıkla çelişse bile görevlinin işareti geçerlidir.',
        ordered: true,
        items: [
          { title: 'Trafik görevlisi' },
          { title: 'Işıklı işaretler' },
          { title: 'Trafik levhaları' },
          { title: 'Genel kurallar' },
        ],
        signs: ['isikli-uyari'],
      },
      {
        title: 'Yaya ışıkları',
        intro: 'Yaya ışıkları yayalar içindir. Sen de araç ışığına uy.',
        items: [
          { title: 'Yayaya yeşil yanıyorsa', desc: 'Araç ışığı kırmızıdır, dur.' },
          { title: 'Yaya geçerken', desc: 'Dönüşte bile yayaya yol ver.' },
        ],
        signs: ['yaya-gecidi'],
      },
      {
        title: 'Sık yapılan hatalar',
        intro: 'Işık hataları ağır kazaya yol açar.',
        items: [
          { title: 'Sarıda hızlanmak' },
          { title: 'Dur çizgisini aşmak' },
          { title: 'Kavşakta kilitlenmek', desc: 'Çıkış doluyken girmek.' },
          { title: 'Yeşilde çevreye bakmamak' },
        ],
      },
      {
        title: 'Sınavda çıkan tuzaklar',
        intro: 'Işık sorularında küçük ayrıntılar kritik.',
        items: [
          { title: 'Yanıp sönen sarı', desc: 'Dur değil, dikkat.' },
          { title: 'Kırmızı-sarı birlikte', desc: 'Geçiş yok.' },
          { title: 'Görevli ve ışık çelişirse', desc: 'Görevli geçerli.' },
          { title: 'Yeşil ok', desc: 'Sadece o yöne.' },
        ],
      },
      {
        title: 'Hatırlatma',
        intro: 'Kırmızı dur, sarı hazırlan, yeşil dikkatle geç. Görevli ışığın önündedir.',
        tip: 'Işık yeşil bile olsa kavşağı boş görmeden girme.',
      },
    ],
  },
];
