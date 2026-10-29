import type { Lesson } from '../types';

export const LESSONS_TC: Lesson[] = [
  {
    topicId: 'tc-sollama',
    steps: [
      {
        title: 'Geçme normalde soldan yapılır',
        intro: 'Öndeki aracı geçmek istediğinde sol şeride geçip önüne geçersin. Bu, yolun en riskli manevralarından biridir; acele etme.',
        tip: 'Geçmeden önce yol, karşı şerit ve arkan boş olmalı.',
      },
      {
        title: 'Geçmeden önce sırayla kontrol et',
        intro: 'Her seferinde aynı sırayı uygula.',
        ordered: true,
        items: [
          { title: 'Önünü ve karşıdan gelenleri gör', desc: 'Yeterli görüş mesafesi yoksa geçme.' },
          { title: 'Aynalara bak', desc: 'Arkandaki araç seni geçmeye başlamış olabilir.' },
          { title: 'Sinyal ver', desc: 'Sol sinyalle niyetini herkese göster.' },
          { title: 'Hızlıca ve güvenle geç', desc: 'Geçerken yeterli yan boşluk bırak.' },
        ],
      },
      {
        title: 'Geçerken ve geçilirken',
        intro: 'Geçilen sürücünün de görevi vardır.',
        items: [
          { title: 'Geçilen araç hızını artırmaz', desc: 'Yarışmaya girmez, mümkünse sağa yaklaşıp yavaşlayarak kolaylık sağlar.' },
          { title: 'Geçen araç sağa dönerken dikkatli olur', desc: 'Geçtiğin aracı aynada rahat görmeden önüne girme; onun önünü kesme.' },
        ],
        tip: 'Önündeki seni geçmeye başladıysa sen geçmeye kalkma.',
      },
      {
        title: 'Geçmenin yasak olduğu yerler',
        intro: 'Görüşün kısıtlı olduğu veya tehlikenin arttığı yerlerde geçme yapılmaz.',
        items: [
          { title: 'Tepe üstü ve dönemeçler' },
          { title: 'Kavşaklara yaklaşırken ve kavşak içinde' },
          { title: 'Yaya ve okul geçitlerine yaklaşırken' },
          { title: 'Demiryolu geçitleri ve yakınları' },
          { title: 'Geçme yasağı levhası olan yerler' },
          { title: 'Sis, yoğun yağış gibi görüşün azaldığı durumlar' },
        ],
      },
      {
        title: 'İstisna: sağdan geçme',
        intro: 'Öndeki araç sola dönmek için sinyal vermiş ve sola yanaşmışsa, onu sağdan geçebilirsin.',
        tip: 'Genel kural soldan geçmek; sağdan geçmek istisnadır.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Soruda "geçme yasak mı?" sorulursa görüşe ve yere bak: tepe, viraj, kavşak, geçit varsa cevap genellikle yasaktır. Sinyal vermeyi ve aynalara bakmayı atlama.',
      },
    ],
  },
  {
    topicId: 'tc-serit',
    steps: [
      {
        title: 'Şeridini koru',
        intro: 'Aracını şeridin ortasında ve şerit çizgilerine basmadan sür. Şerit değiştirmek gerektiğinde bunu bilerek ve güvenle yaparsın.',
        tip: 'İki şerit arasında çizgi üzerinde gitme.',
      },
      {
        title: 'Yavaş araç sağda gider',
        intro: 'Çok şeritli yollarda yavaş giden araçlar sağ şeridi kullanır. Sol şerit geçmek içindir; geçişin bitince sağa dön ve sol şeridi boşalt.',
        tip: 'Sol şeritte oyalanma.',
      },
      {
        title: 'Şerit değiştirirken',
        intro: 'Önce aynalara bak, sonra sinyal ver, ardından yan boşluğu kontrol edip yavaşça geç. Sinyali manevradan önce ver; manevra bitince kapat.',
        ordered: true,
        items: [
          { title: 'Ayna ve kör nokta kontrolü' },
          { title: 'Sinyal' },
          { title: 'Güvenli geçiş' },
        ],
      },
      {
        title: 'Dönüşe hazırlık',
        intro: 'Dönmeden önce yeterli mesafeden sinyal ver ve doğru şeride geç.',
        items: [
          { title: 'Sağa dönüş', desc: 'Sağ şeritte ve yolun sağına yakın ol.' },
          { title: 'Sola dönüş', desc: 'Sol şeritte ve yolun soluna yakın ol; karşıdan gelene ve yayalara yol ver.' },
        ],
        tip: 'Önce şerit, sonra dönüş; son anda şerit değiştirme.',
      },
      {
        title: 'Yol çizgileri ve oklar',
        intro: 'Kesiksiz çizgi aşılmaz; kesikli çizgi güvenliyse geçilebilir. Yol üzerindeki yön okları gideceğin şeridi gösterir; oka aykırı hareket etme.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Sinyal her zaman manevradan önce verilir. Dönüş şeridini önceden seçmek ve yavaş araçların sağda gitmesi sık sorulan kurallardır.',
      },
    ],
  },
  {
    topicId: 'tc-yaya',
    steps: [
      {
        title: 'Yaya geçidinde öncelik yayanındır',
        intro: 'Yaya geçidine yaklaşırken yavaşla. Geçide girmiş veya girmek üzere olan yayaya durarak yol ver.',
        tip: 'Yaya geçiyorsa dur; sonra geç.',
      },
      {
        title: 'Yaya geçidinde ve yakınında yapılmayacaklar',
        items: [
          { title: 'Geçide yaklaşırken öndeki aracı geçme' },
          { title: 'Geçit üzerinde durma veya park etme' },
          { title: 'Yayaları korna ile telaşlandırma' },
        ],
        tip: 'Yanındaki araç duruyorsa onu geçme; önünde yaya olabilir.',
      },
      {
        title: 'Okul geçidi: daha çok dikkat',
        intro: 'Okul geçitlerinde çocuklar öngörülemez hareket eder. Okul çevresinde yavaşla, gerektiğinde dur ve çocuk geçerken bekle.',
        tip: 'Çocuk görürsen ayağını gazdan çek.',
      },
      {
        title: 'Kimlere özellikle yol verilir?',
        intro: 'Yaşlılar, çocuklar, engelliler ve beyaz baston kullanan görme engelliler daha yavaş ve çekinik hareket eder. Onlara sabırla ve ek mesafeyle yol ver.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Yaya geçidi varsa yavaşla, yaya varsa dur, geçit yakınında geçme ve park etme. Okul geçidinde ise dikkat ve hızı daha da azaltma esastır.',
      },
    ],
  },
  {
    topicId: 'tc-demiryolu',
    steps: [
      {
        title: 'Tren her zaman önceliklidir',
        intro: 'Demiryolu taşıtlarının geçiş üstünlüğü vardır. Tren hızlı gelir ve kısa mesafede duramaz; bu yüzden yol vermek senin görevindir.',
        tip: 'Tren duramaz, sen durursun.',
      },
      {
        title: 'Geçide yaklaşırken',
        intro: 'Yavaşla, iki yana bak ve tren olmadığından emin ol. Geçidin karşı tarafında aracını bekletmeyecek kadar yer olduğundan emin olmadan girme.',
        ordered: true,
        items: [
          { title: 'Hızını azalt' },
          { title: 'Dur-bak-dinle' },
          { title: 'Yol boşsa ve karşıda yer varsa geç' },
        ],
      },
      {
        title: 'Bariyer ve ışıklar',
        intro: 'Bariyer inmişse veya inmekteyse, ışık ve ses uyarısı varsa geçitten geçilmez. Bariyerin altından veya yanından geçmeye çalışma.',
        tip: 'Işık yanıyor ya da zil çalıyorsa bekle.',
      },
      {
        title: 'Geçitte yasaklar',
        items: [
          { title: 'Geçitte durma ve park etme yok' },
          { title: 'Geçitte ve geçide yaklaşırken öndekini geçme yok' },
          { title: 'Geçidin hemen önünde araç kuyruğuna girip geçidi kapama' },
        ],
      },
      {
        title: 'Araç geçitte bozulursa',
        intro: 'Önce yolcuları araçtan indirip geçitten uzaklaştır. Mümkünse aracı hemen geçitten çıkarmaya çalış.',
        tip: 'Can güvenliği araçtan önce gelir.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Demiryolu geçitleri "dur-bak-dinle, bariyer inikse bekle, geçitte park ve geçme yasak" kuralıyla özetlenir.',
      },
    ],
  },
  {
    topicId: 'tc-tunel',
    steps: [
      {
        title: 'Tünele girmeden önce hazırlan',
        intro: 'Tünel içinde ışık değişir ve görüş azalır. Girişten önce hızını ayarla ve gerekli hazırlıkları yap.',
        items: [
          { title: 'Kısa farları yak' },
          { title: 'Güneş gözlüğünü çıkar' },
          { title: 'Takip mesafeni artır' },
        ],
        tip: 'Işıksız girmek tehlikelidir.',
      },
      {
        title: 'Tünel içinde',
        intro: 'Hız levhasına uy, şeridini terk etme ve takip mesafesini koru. Tünelde öndeki aracı geçme, U dönüşü yapma ve geri gitme.',
        tip: 'Tünelde akışı bozma; sabit hızla ilerle.',
      },
      {
        title: 'Durma ve park yasağı',
        intro: 'Tünel içinde durmak ve park etmek yasaktır. Yalnızca arıza veya kaza gibi zorunluluk halinde ve en uygun yerde durulur.',
      },
      {
        title: 'Arıza veya yangında',
        intro: 'Aracın bozulursa dört flaşörü yak, mümkünse en yakın acil durum cebine çek ve motoru kapat. Acil durum donanımını ve telefonlarını kullan.',
        ordered: true,
        items: [
          { title: 'Dörtlü flaşörü yak' },
          { title: 'Aracı kenara çek ve motoru durdur' },
          { title: 'Araçtan çık ve güvenli yere git' },
          { title: 'Yardım çağır' },
        ],
      },
      {
        title: 'Köprüler ve çıkış',
        intro: 'Köprülerde de geçme ve park etme genellikle yasaktır ve yan rüzgara dikkat edilir. Tünelden çıkarken gözün parlak ışığa alışana kadar hızını koru.',
        tip: 'Çıkışta ani frenden kaçın.',
      },
    ],
  },
  {
    topicId: 'tc-geri',
    steps: [
      {
        title: 'Geri gitmeden önce bak',
        intro: 'Geri vitese almadan önce arkanın ve çevrenin boş olduğundan emin ol. Görüşün yetersizse araçtan inip kontrol et veya bir yardımcıdan yön ver.',
        tip: 'Aynaya güvenme; dönüp arkana da bak.',
      },
      {
        title: 'Geri gitme kuralı',
        intro: 'Geri gitme yalnızca gerekli olduğunda, kısa mesafede ve yavaş yapılır. Çevredeki yayalara ve araçlara dikkat edilir.',
      },
      {
        title: 'Geri gitmenin yasak olduğu yerler',
        items: [
          { title: 'Otoyollar' },
          { title: 'Tüneller' },
          { title: 'Kavşaklar ve yaya geçitleri' },
          { title: 'Demiryolu geçitleri' },
          { title: 'Dönemeçler ve görüşün kısıtlı olduğu yerler' },
        ],
        tip: 'Yolu kaçırdıysan geri gitme; ilk çıkıştan çık.',
      },
      {
        title: 'U dönüşü',
        intro: 'U dönüşü yapmadan önce yolun yeterince geniş ve görüşün açık olduğundan emin ol. Sinyal ver ve karşıdan gelen araçlara yol ver.',
      },
      {
        title: 'U dönüşü yasak yerler',
        items: [
          { title: 'Tüneller, köprüler ve tepe üstleri' },
          { title: 'Dönemeçler ve görüşün kısıtlı olduğu yerler' },
          { title: 'Demiryolu geçitleri' },
          { title: 'U dönüşü yasağı levhası olan yerler' },
        ],
        tip: 'Şüphedeysen U dönüşü yapma.',
      },
    ],
  },
  {
    topicId: 'tc-alkol',
    steps: [
      {
        title: 'Alkol sürüşü nasıl etkiler?',
        intro: 'Alkol refleksleri yavaşlatır, dikkati dağıtır ve mesafe algısını bozar. Kişi kendini iyi hissetse bile sürüş güvenliği düşer.',
        items: [
          { title: 'Tepki süresi uzar' },
          { title: 'Görüş ve odaklanma bozulur' },
          { title: 'Aşırı özgüven ve risk alma artar' },
        ],
      },
      {
        title: 'İzin verilen sınırlar',
        intro: 'Kanundaki sınırlar sürücü grubuna göre değişir.',
        items: [
          { title: 'Özel otomobil sürücüleri', desc: 'Kandaki alkol miktarı 0,50 promili aşmamalı.' },
          { title: 'Ticari araç sürücüleri', desc: 'Sınır daha düşüktür: 0,20 promil.' },
        ],
        tip: 'Ticari ve toplu taşıma araçlarında sınır daha düşüktür (0,20). Sınavda: özel araç 0,50, ticari araç 0,20.',
      },
      {
        title: 'Alkol testi',
        intro: 'Polis, şüphelenirse sürücüden alkol testi yaptırmasını isteyebilir. Testi reddetmek veya kaçınmak ayrıca yaptırıma bağlıdır.',
        tip: 'Test sonucu sınırı aşıyorsa araç kullanamazsın.',
      },
      {
        title: 'Ceza puanı ve yaptırımlar',
        intro: 'Trafik kuralını ihlal edenlere para cezasının yanında ceza puanı da verilir. Ceza puanı belirli bir düzeye ulaşan sürücünün belgesi geçici olarak geri alınabilir. Alkollü araç kullanmak ağır yaptırımlar doğurur.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Şüpheli durumda kuralın cevabı hep "alkol alındıysa araç kullanma"dır. Özel araçta 0,50 ve ticari araçta 0,20 promil sınırını akılda tut.',
      },
    ],
  },
  {
    topicId: 'tc-cevre',
    steps: [
      {
        title: 'Araçlar çevreyi etkiler',
        intro: 'Egzoz gazı hava kirliliğine, motor ve korna sesi gürültüye yol açar. Sürücü olarak çevreyi korumak da görevindir.',
      },
      {
        title: 'Egzoz ve bakım',
        intro: 'Araç bakımı düzenli yapılırsa hem yakıt tasarrufu sağlanır hem zararlı emisyon azalır. Egzoz gazı ölçümü periyodik olarak yaptırılır.',
        items: [
          { title: 'Düzenli bakım' },
          { title: 'Egzoz emisyon ölçümü' },
          { title: 'Doğru lastik basıncı' },
        ],
        tip: 'Bakımlı araç hem cebine hem doğaya iyi gelir.',
      },
      {
        title: 'Ekonomik sürüş',
        intro: 'Yumuşak sürüş yakıtı ve emisyonu azaltır.',
        items: [
          { title: 'Ani gaz ve frenden kaçın' },
          { title: 'Uygun vitesle ve sabit hızda git' },
          { title: 'Uzun beklemelerde motoru kapat' },
        ],
      },
      {
        title: 'Gürültü ve atıklar',
        intro: 'Gereksiz yere korna çalma, motoru boşuna yüksek devirde tutma. Atık yağ, akü ve lastikleri doğaya veya çöpe atma; yetkili noktalara teslim et.',
        tip: 'Korna yalnızca tehlike uyarısı içindir.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Çevre sorularında cevap hep azaltan seçenektedir: düzenli bakım, ani gaz ve frenden kaçınma, gereksiz korna ve rölanti yapmama.',
      },
    ],
  },
  {
    topicId: 'tc-kaza',
    steps: [
      {
        title: 'Kazada ilk iş: dur ve güvenliği sağla',
        intro: 'Kazaya karışan sürücü hemen durur ve kaza yerinden kaçmaz. İkinci bir kazayı önlemek için çevreyi uyar.',
        ordered: true,
        items: [
          { title: 'Dur ve dörtlü flaşörü yak' },
          { title: 'Reflektör koy ve çevreyi uyar' },
          { title: 'Yaralı var mı kontrol et' },
          { title: '112\'yi ara' },
        ],
        tip: 'Kaza yerinden kaçmak suçtur.',
      },
      {
        title: 'Yaralı varsa',
        intro: 'Yaralı varsa hemen 112\'yi ara ve ilk yardım bilgin varsa uygula. Yaralıları gerekmedikçe yerinden oynatma; yalnızca tehlikede olanları güvenli yere al.',
        tip: 'Yaralı varsa araçları yerinden oynatma; polis gelsin.',
      },
      {
        title: 'Yalnızca maddi hasar varsa',
        intro: 'Yaralı yoksa ve taraflar anlaşıyorsa araçları trafiği engellemeyecek şekilde kenara alabilirsiniz. Ardından kaza tespit tutanağı düzenlenir.',
      },
      {
        title: 'Kaza tespit tutanağı',
        intro: 'Tutanak, kazanın nasıl olduğunu gösteren ve sigorta işlemlerinde kullanılan belgedir. Tarafların bilgileri doğru ve eksiksiz yazılır, sonra taraflar imzalar.',
        items: [
          { title: 'Araç ve sürücü bilgileri' },
          { title: 'Kazanın yeri ve şekli' },
          { title: 'Fotoğraf ve krokinin eklenmesi' },
        ],
        tip: 'Anlaşamıyorsanız polisi çağırın; tutanağı zorla imzalama.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Sıralama genelde şudur: dur, güvenliği sağla (flaşör, reflektör), yaralı varsa 112\'yi ara ve ilk yardım uygula; sadece maddi hasar varsa tutanak düzenle. Kaza yerinden kaçma.',
      },
    ],
  },
];
