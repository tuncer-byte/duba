import type { Lesson } from '../types';

export const EXT_TC2: Lesson[] = [
  {
    topicId: 'tc-yaya',
    steps: [
      {
        title: 'Yaya kimdir, yaya yolu nedir?',
        intro: 'Yaya, yolda kendi ayaklarıyla yürüyen kişidir. Yayalar için ayrılmış kaldırım, yaya yolu ve yaya geçidi gibi bölümler vardır. Yaya bu bölümlerde en korunmasız trafik katılımcısıdır; çarpışmada koruyucu bir gövdesi yoktur.',
        signs: ['yaya-yolu', 'yaya-gecidi'],
        tip: 'Yaya korunmasızdır; kural onu korumak için vardır.',
      },
      {
        title: 'Yaya geçidinde öncelik yayanındır',
        intro: 'Yaya geçidine yaklaşırken yavaşla. Geçide girmiş veya girmek üzere olan yayaya durarak yol ver. Işıksız geçitte bu kural özellikle önemlidir.',
        signs: ['yaya-uyari', 'yaya-gecidi'],
        items: [
          { title: 'Önce yavaşla', desc: 'Geçidi uzaktan fark et ve gazdan ayağını çek.' },
          { title: 'Yaya varsa dur', desc: 'Yayanın geçişi bitene kadar bekle.' },
          { title: 'Sonra geç', desc: 'Yol tamamen boşaldığında ilerle.' },
        ],
        tip: 'Yaya geçiyorsa dur; sonra geç.',
      },
      {
        title: 'Işıklı geçitlerde durum',
        intro: 'Işıklı kavşakta yeşil yanan sürücü geçerken, dönüş yaptığı yerde yaya geçidindeki yayalara yine yol vermek zorundadır. Yeşil ışık yayaya çarpma hakkı vermez.',
        signs: ['isikli-uyari'],
        warn: 'Dönüşlerde yaya geçidini unutma: sağa veya sola dönerken yaya varsa önce yaya geçer.',
      },
      {
        title: 'Yaya geçidinde ve yakınında yapılmayacaklar',
        items: [
          { title: 'Geçide yaklaşırken öndeki aracı geçme' },
          { title: 'Geçit üzerinde durma veya park etme' },
          { title: 'Yayaları korna ile telaşlandırma' },
          { title: 'Duran aracın yanından hızla geçme', desc: 'O aracın önünde yaya olabilir.' },
        ],
        signs: ['sollama-yasak', 'park-yasak', 'duraklama-yasak'],
        tip: 'Yanındaki araç duruyorsa onu geçme; önünde yaya olabilir.',
      },
      {
        title: 'Okul geçidi: daha çok dikkat',
        intro: 'Okul geçitlerinde çocuklar öngörülemez hareket eder; aniden koşabilir, topun peşinden yola çıkabilir. Okul çevresinde yavaşla, gerektiğinde dur ve çocuk geçerken bekle.',
        signs: ['okul-gecidi', 'hiz-30'],
        tip: 'Çocuk görürsen ayağını gazdan çek.',
      },
      {
        title: 'Kimlere özellikle yol verilir?',
        intro: 'Yaşlılar, çocuklar, engelliler ve beyaz baston kullanan görme engelliler daha yavaş ve çekinik hareket eder. Onlara sabırla ve ek mesafeyle yol ver.',
        items: [
          { title: 'Çocuklar', desc: 'Mesafeyi ve hızı yanlış tahmin eder.' },
          { title: 'Yaşlılar', desc: 'Yavaş yürür, geçmeleri daha uzun sürer.' },
          { title: 'Görme engelliler', desc: 'Beyaz bastonlu yayaya mutlaka yol ver; korna çalma.' },
        ],
      },
      {
        title: 'Yayaların da uyacağı kurallar',
        intro: 'Yayalar da kurallara bağlıdır. Mümkünse yaya geçidini veya üst/alt geçidi kullanır, ışık varsa ona uyar, yolu dikkatle ve hızlıca değil emin adımlarla geçer. Yaya kaldırım yoksa yolun kenarında, araçları karşıdan görebileceği tarafta yürür.',
        tip: 'Yayanın hatası seni sorumluluktan kurtarmaz; her zaman tedbirli ol.',
      },
      {
        title: 'Sık yapılan hatalar',
        items: [
          { title: 'Geçide hızla yaklaşmak' },
          { title: 'Yayayı geçmesi için el kolla "göndermek"', desc: 'Yayanın karar vermesini bekle, onu kandırma.' },
          { title: 'Geçit önünde durup yaya geçidini kapatmak' },
          { title: 'Yağmurda ve gece yayayı geç fark etmek', desc: 'Görüş azaldığında hızı daha çok düşür.' },
        ],
        warn: 'Gece ve yağışta yayalar geç görünür; hızını görüşüne göre ayarla.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Yaya geçidi varsa yavaşla, yaya varsa dur, geçit yakınında geçme ve park etme. Okul geçidinde dikkat ve hızı daha da azaltma esastır. Seçeneklerde "yayaya yol verilir" diyen doğrudur.',
        tip: 'Şüphede kaldığında yayayı koruyan seçeneği işaretle.',
      },
    ],
  },
  {
    topicId: 'tc-demiryolu',
    steps: [
      {
        title: 'Demiryolu geçidi nedir?',
        intro: 'Karayolu ile demiryolunun aynı seviyede kesiştiği yere demiryolu geçidi denir. Geçit bariyerli ya da bariyersiz olabilir. İki taşıt türü burada karşılaşır ve en büyük risk burada oluşur.',
        tip: 'Geçit, kavşakların en tehlikelisidir.',
      },
      {
        title: 'Tren her zaman önceliklidir',
        intro: 'Demiryolu taşıtlarının geçiş üstünlüğü vardır. Tren hızlı gelir, çok ağırdır ve kısa mesafede duramaz; bu yüzden yol vermek senin görevindir.',
        tip: 'Tren duramaz, sen durursun.',
      },
      {
        title: 'Geçide yaklaşırken',
        intro: 'Yavaşla, iki yana bak ve tren olmadığından emin ol. Geçidin karşı tarafında aracını bekletmeyecek kadar yer olduğundan emin olmadan girme.',
        ordered: true,
        items: [
          { title: 'Hızını azalt' },
          { title: 'Dur-bak-dinle', desc: 'Pencereyi aç, sesi dinle, iki yana bak.' },
          { title: 'Yol boşsa ve karşıda yer varsa geç' },
        ],
        signs: ['diger-tehlike'],
      },
      {
        title: 'Bariyer ve ışıklar',
        intro: 'Bariyer inmişse veya inmekteyse, ışık ve ses uyarısı varsa geçitten geçilmez. Bariyerin altından veya yanından geçmeye çalışma. Tren geçtikten sonra bile ikinci bir tren olabilir; bariyer tamamen kalkana ve ışık sönene kadar bekle.',
        tip: 'Işık yanıyor ya da zil çalıyorsa bekle.',
        warn: 'Bariyer kalkıyor diye hemen atılma; diğer hattan tren gelebilir.',
      },
      {
        title: 'Geçitte yasaklar',
        items: [
          { title: 'Geçitte durma ve park etme yok' },
          { title: 'Geçitte ve geçide yaklaşırken öndekini geçme yok' },
          { title: 'Geçidin hemen önünde araç kuyruğuna girip geçidi kapama' },
          { title: 'Geçitte geri gitme ve U dönüşü yok' },
        ],
        signs: ['sollama-yasak', 'park-yasak', 'u-donusu-yasak'],
      },
      {
        title: 'Kuyrukta beklerken',
        intro: 'Trafik yoğunsa ve karşıda aracın sığacağı boşluk yoksa geçide girme. Geçidin üstünde kalırsan bariyer inebilir ve sıkışırsın. Aracı önce karşı taraf boşalınca ilerlet.',
        tip: 'Karşıda yer yoksa geçide girme.',
      },
      {
        title: 'Araç geçitte bozulursa',
        intro: 'Önce yolcuları araçtan indirip geçitten uzaklaştır. Mümkünse aracı hemen geçitten çıkarmaya çalış. Tren yaklaşıyorsa canını kurtar; tren yönünden uzaklaşacak biçimde geçitten uzak dur.',
        ordered: true,
        items: [
          { title: 'Yolcuları indir ve uzaklaştır' },
          { title: 'Aracı geçitten çıkarmayı dene' },
          { title: 'Mümkünse gelen treni uyar, yetkililere haber ver' },
        ],
        tip: 'Can güvenliği araçtan önce gelir.',
      },
      {
        title: 'Sık yapılan hatalar',
        items: [
          { title: 'Treni uzakta sanıp aceleyle geçmek', desc: 'Tren hızını olduğundan yavaş algılarsın.' },
          { title: 'Bariyerin altından sıyrılmaya çalışmak' },
          { title: 'Geçit içinde vites değiştirip aracı söndürmek', desc: 'Geçitte vites küçültmeden düz ve hızlı geç.' },
          { title: 'Bariyersiz geçitte dikkatsiz olmak' },
        ],
      },
      {
        title: 'Sınav ipucu',
        intro: 'Demiryolu geçitleri "dur-bak-dinle, bariyer inikse bekle, geçitte park ve geçme yasak" kuralıyla özetlenir. Seçeneklerde "tren geçmeden hızla geç" gibi cümleler yanlıştır.',
        tip: 'Önceliği trene ver, geçitte oyalanma.',
      },
    ],
  },
  {
    topicId: 'tc-tunel',
    steps: [
      {
        title: 'Tünel ve köprü neden özeldir?',
        intro: 'Tünelde ışık değişir, hava sınırlıdır ve kaçış yolu azdır. Köprülerde ise yan rüzgar ve dar şerit riski vardır. Bu yüzden bu yapılarda kurallar daha katıdır.',
      },
      {
        title: 'Tünele girmeden önce hazırlan',
        intro: 'Tünel içinde ışık değişir ve görüş azalır. Girişten önce hızını ayarla ve gerekli hazırlıkları yap.',
        items: [
          { title: 'Kısa farları yak' },
          { title: 'Güneş gözlüğünü çıkar' },
          { title: 'Takip mesafeni artır' },
          { title: 'Radyoyu uyarılar için açık tut', desc: 'Tünel duyurularını kaçırma.' },
        ],
        tip: 'Işıksız girmek tehlikelidir.',
      },
      {
        title: 'Tünel içinde',
        intro: 'Hız levhasına uy, şeridini terk etme ve takip mesafesini koru. Tünelde öndeki aracı geçme, U dönüşü yapma ve geri gitme.',
        signs: ['sollama-yasak', 'u-donusu-yasak'],
        tip: 'Tünelde akışı bozma; sabit hızla ilerle.',
      },
      {
        title: 'Durma ve park yasağı',
        intro: 'Tünel içinde durmak ve park etmek yasaktır. Yalnızca arıza veya kaza gibi zorunluluk halinde ve en uygun yerde durulur.',
        signs: ['park-yasak', 'duraklama-yasak'],
      },
      {
        title: 'Trafik sıkışırsa',
        intro: 'Tünelde trafik durursa önündeki araçla yeterli boşluk bırak ve motoru çalışır tutma kararını duyurulara göre ver. Kendi başına manevra yapma, talimatları ve ışıklı uyarıları izle.',
        tip: 'Sıkışıklıkta panik yapma, araçlar arası boşluğu koru.',
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
        warn: 'Yangında eşyanı değil canını kurtar; yangın söndürücüyü ancak güvenliyse kullan.',
      },
      {
        title: 'Köprüler',
        intro: 'Köprülerde de geçme ve park etme genellikle yasaktır ve yan rüzgara dikkat edilir. Direksiyonu sıkı tut, şeridinde kal ve levhalara uy.',
        signs: ['diger-tehlike', 'sollama-yasak'],
      },
      {
        title: 'Çıkış ve sık hatalar',
        intro: 'Tünelden çıkarken gözün parlak ışığa alışana kadar hızını koru.',
        items: [
          { title: 'Farsız girmek' },
          { title: 'Tünel içinde şerit değiştirmek veya geçmek' },
          { title: 'Çıkışta ani fren yapmak' },
          { title: 'Tünelde keyfi durmak veya fotoğraf çekmek' },
        ],
        tip: 'Çıkışta ani frenden kaçın.',
      },
      {
        title: 'Sınav ipucu',
        intro: 'Tünelde: kısa far yak, geçme yok, U dönüşü yok, geri gitme yok, durma ve park yok. Zorunlu arızada dörtlü flaşör ve acil durum kuralları devreye girer.',
      },
    ],
  },
  {
    topicId: 'tc-geri',
    steps: [
      {
        title: 'Geri gitme ve U dönüşü neden riskli?',
        intro: 'Geri giderken görüşün sınırlıdır ve arkandaki yayayı, bisikleti, çocuğu görmeyebilirsin. U dönüşü ise diğer araçların akışını keser. İkisi de ancak güvenli ve gerekliyse yapılır.',
      },
      {
        title: 'Geri gitmeden önce bak',
        intro: 'Geri vitese almadan önce arkanın ve çevrenin boş olduğundan emin ol. Görüşün yetersizse araçtan inip kontrol et veya bir yardımcıdan yön ver.',
        ordered: true,
        items: [
          { title: 'Ayna ve omuz kontrolü yap' },
          { title: 'Sinyal ver, flaşör gerekirse yak' },
          { title: 'Yavaşça ve kontrollü hareket et' },
        ],
        tip: 'Aynaya güvenme; dönüp arkana da bak.',
      },
      {
        title: 'Geri gitme kuralı',
        intro: 'Geri gitme yalnızca gerekli olduğunda, kısa mesafede ve yavaş yapılır. Çevredeki yayalara ve araçlara dikkat edilir. Geri giden sürücü, ilerleyen trafiğe yol vermek zorundadır.',
        tip: 'Geri giden bekler, gelen geçer.',
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
        warn: 'Yolu kaçırdıysan geri gitme; ilk çıkıştan çık.',
      },
      {
        title: 'U dönüşü',
        intro: 'U dönüşü yapmadan önce yolun yeterince geniş ve görüşün açık olduğundan emin ol. Sinyal ver ve karşıdan gelen araçlara yol ver. Gerekirse geniş bir yerde, tek manevrada tamamlamaya çalış.',
        items: [
          { title: 'Yol genişliğini ve görüşü kontrol et' },
          { title: 'Sinyal ver ve gerekirse yavaşla' },
          { title: 'Gelen araçlara ve yayalara yol ver' },
        ],
        signs: ['u-donusu-yasak'],
      },
      {
        title: 'U dönüşü yasak yerler',
        items: [
          { title: 'Tüneller, köprüler ve tepe üstleri' },
          { title: 'Dönemeçler ve görüşün kısıtlı olduğu yerler' },
          { title: 'Demiryolu geçitleri' },
          { title: 'U dönüşü yasağı levhası olan yerler' },
        ],
        signs: ['u-donusu-yasak'],
        tip: 'Şüphedeysen U dönüşü yapma.',
      },
      {
        title: 'Park ederken geri manevra',
        intro: 'Park yerine geri girerken de aynı kurallar geçerlidir: çevreyi kontrol et, yavaş ol ve gelen trafik ile yayaya öncelik ver. Gerekirse durup yeniden başla.',
        signs: ['park-yeri'],
        tip: 'Park manevrası acele işi değildir.',
      },
      {
        title: 'Sık yapılan hatalar',
        items: [
          { title: 'Sadece ayna kullanarak geri gitmek' },
          { title: 'Çıkışı kaçırıp geri gelmek' },
          { title: 'Dönüş sırasında sinyal vermemek' },
          { title: 'Yaya geçidi veya kavşak üzerinde manevra yapmak' },
        ],
      },
      {
        title: 'Sınav ipucu',
        intro: 'Geri gitmenin ve U dönüşünün yasak olduğu yerler (tünel, kavşak, demiryolu geçidi, tepe üstü, dönemeç) sınavda sık sorulur. "Çıkışı kaçırdım, geri giderim" seçeneği genelde yanlıştır.',
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
          { title: 'Yorgunluk ve uyku hali artar' },
        ],
        tip: 'Alkolün etkisi kişiye göre değişir; "ben iyiyim" demek yetmez.',
      },
      {
        title: 'Alkol vücutta nasıl ilerler?',
        intro: 'Alkol kana karışır ve beyin üzerinde etki eder. Kahve, soğuk duş, yemek yemek veya uyumak etkiyi hemen gidermez; alkolün vücuttan atılması zaman ister.',
        warn: 'Kahve ve soğuk duş ayıltmaz; yalnızca zaman alkolü azaltır.',
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
        title: 'Yaptırımlar',
        intro: 'Alkollü araç kullanmak ağır yaptırımlar doğurur. Para cezasının yanında sürücü belgesi geri alınabilir, araç trafikten men edilebilir. Kaza yapılırsa sorumluluk çok daha ağırdır.',
        warn: 'Alkollüyken kaza yaparsan hem hukuki hem sigortacılık sonuçları ağırlaşır.',
      },
      {
        title: 'Uyuşturucu, ilaç ve diğer maddeler',
        intro: 'Sadece alkol değil, uyuşturucu ve dikkati azaltan bazı ilaçlar da sürüşü bozar. İlaç kullanıyorsan prospektüsü oku, uyuşukluk yapıyorsa araç kullanma ve doktoruna danış.',
        tip: 'Dikkati bozan her madde sürüşte risktir.',
      },
      {
        title: 'Doğru davranış',
        intro: 'Alkol alacaksan baştan araç kullanmama kararı ver. Güvenli seçenekler her zaman vardır.',
        items: [
          { title: 'Alkolsüz bir sürücü belirle' },
          { title: 'Taksi veya toplu taşıma kullan' },
          { title: 'Alkollü arkadaşının anahtarını al' },
        ],
      },
      {
        title: 'Sık yapılan hatalar',
        items: [
          { title: '"Bir kadeh bir şey yapmaz" demek' },
          { title: 'Ertesi sabah hemen araca binmek', desc: 'Önceki gece içtiysen alkol hâlâ kanında olabilir.' },
          { title: 'Alkol testini reddetmenin kurtaracağını sanmak' },
        ],
      },
      {
        title: 'Sınav ipucu',
        intro: 'Şüpheli durumda kuralın cevabı hep "alkol alındıysa araç kullanma"dır. Özel araçta 0,50 ve ticari araçta 0,20 promil sınırını akılda tut.',
        tip: 'Özel 0,50 – ticari 0,20.',
      },
    ],
  },
  {
    topicId: 'tc-cevre',
    steps: [
      {
        title: 'Araçlar çevreyi etkiler',
        intro: 'Egzoz gazı hava kirliliğine, motor ve korna sesi gürültüye yol açar. Sürücü olarak çevreyi korumak da görevindir. Trafik, şehirlerdeki hava kirliliğinin önemli nedenlerinden biridir.',
      },
      {
        title: 'Zararlı gazlar ve etkileri',
        intro: 'Egzozdan çıkan gazlar solunum için zararlıdır ve iklim değişikliğine katkı yapar. Kapalı garajda motoru çalışır bırakmak zehirlenme tehlikesi doğurur.',
        warn: 'Kapalı yerde motoru çalışır halde bekletme; egzoz gazı zehirleyicidir.',
      },
      {
        title: 'Egzoz ve bakım',
        intro: 'Araç bakımı düzenli yapılırsa hem yakıt tasarrufu sağlanır hem zararlı emisyon azalır. Egzoz gazı ölçümü periyodik olarak yaptırılır.',
        items: [
          { title: 'Düzenli bakım' },
          { title: 'Egzoz emisyon ölçümü' },
          { title: 'Doğru lastik basıncı' },
          { title: 'Temiz hava filtresi ve düzgün ayarlı motor' },
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
          { title: 'Gereksiz yükü araçtan çıkar' },
        ],
      },
      {
        title: 'Gürültü kirliliği',
        intro: 'Gereksiz yere korna çalma, motoru boşuna yüksek devirde tutma. Gürültü, özellikle konut, hastane ve okul çevresinde insanları rahatsız eder.',
        signs: ['hastane', 'okul-gecidi'],
        tip: 'Korna yalnızca tehlike uyarısı içindir.',
      },
      {
        title: 'Atıklar',
        intro: 'Atık yağ, akü ve lastikleri doğaya veya çöpe atma; yetkili noktalara teslim et. Araçtan yola çöp atma. Yakıt ve yağ sızıntısını da önle.',
        items: [
          { title: 'Atık yağ' },
          { title: 'Akü' },
          { title: 'Ömrünü tamamlamış lastik' },
        ],
      },
      {
        title: 'Alternatif ulaşım',
        intro: 'Kısa mesafede yürümek, bisiklet kullanmak veya toplu taşımayı seçmek çevreyi korur ve trafiği azaltır. Aynı yöne giden kişilerle araç paylaşımı da emisyonu düşürür.',
        signs: ['bisiklet-yolu', 'yaya-yolu'],
        tip: 'Her kısa yol için araca binmek şart değil.',
      },
      {
        title: 'Sık yapılan hatalar',
        items: [
          { title: 'Rölantide uzun süre beklemek' },
          { title: 'Egzoz bakımını ihmal etmek' },
          { title: 'Atıkları doğaya bırakmak' },
          { title: 'Gereksiz yere korna çalmak' },
        ],
      },
      {
        title: 'Sınav ipucu',
        intro: 'Çevre sorularında cevap hep azaltan seçenektedir: düzenli bakım, ani gaz ve frenden kaçınma, gereksiz korna ve rölanti yapmama.',
        tip: 'Kirleten seçenek yanlış, koruyan seçenek doğrudur.',
      },
    ],
  },
  {
    topicId: 'tc-kaza',
    steps: [
      {
        title: 'Trafik kazası nedir?',
        intro: 'Yolda hareket halindeki bir veya birkaç aracın karıştığı ve ölüm, yaralanma ya da maddi hasara yol açan olaya trafik kazası denir. Kazalar çoğunlukla dikkatsizlik, hız ve kural ihlalinden doğar.',
      },
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
        warn: 'Kaza yerinden kaçmak suçtur.',
      },
      {
        title: 'Reflektör ve uyarı',
        intro: 'Reflektör, arkadan gelen araçları kazadan haberdar eder. Aracının arkasına yeterli uzaklığa yerleştir ve kendini yoldan uzakta güvenli yerde tut. Yoldan geçenleri uyar.',
        signs: ['diger-tehlike'],
        tip: 'Önce kendi ve çevrenin güvenliği.',
      },
      {
        title: 'Yaralı varsa',
        intro: 'Yaralı varsa hemen 112\'yi ara ve ilk yardım bilgin varsa uygula. Yaralıları gerekmedikçe yerinden oynatma; yalnızca tehlikede olanları güvenli yere al.',
        items: [
          { title: 'Bilinç ve solunuma bak' },
          { title: 'Kanamayı baskıyla durdurmaya çalış' },
          { title: 'Kaskı çıkarma, yaralıyı gereksiz hareket ettirme' },
        ],
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
          { title: 'Tarafların imzası' },
        ],
        tip: 'Anlaşamıyorsanız polisi çağırın; tutanağı zorla imzalama.',
      },
      {
        title: 'Sürücünün yükümlülükleri',
        intro: 'Kazaya karışan sürücü kimlik ve belgelerini ilgililere gösterir, yetkililere doğru bilgi verir ve gerekli yardımı yapar. Yaralıya yardım etmek ve yetkililere haber vermek ahlaki ve hukuki bir görevdir.',
        warn: 'Kazayı gizlemek, kaçmak ve yardım etmemek sorumluluğu artırır.',
      },
      {
        title: 'Kazadan sonra yapılmayacaklar',
        items: [
          { title: 'Kaza yerinden kaçmak' },
          { title: 'Olay yerini ve delilleri karıştırmak' },
          { title: 'Yaralıyı bilgisiz kaldırmak' },
          { title: 'Alkollü olduğunu gizlemek' },
        ],
      },
      {
        title: 'Sınav ipucu',
        intro: 'Sıralama genelde şudur: dur, güvenliği sağla (flaşör, reflektör), yaralı varsa 112\'yi ara ve ilk yardım uygula; sadece maddi hasar varsa tutanak düzenle. Kaza yerinden kaçma.',
        tip: 'Önce güvenlik, sonra yardım, sonra tutanak.',
      },
    ],
  },
];
