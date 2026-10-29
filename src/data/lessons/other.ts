import type { Lesson } from '../types';

export const LESSONS_OTHER: Lesson[] = [
  // ───────────── İLK YARDIM ─────────────
  {
    topicId: 'iy-ilkeler',
    steps: [
      {
        title: 'İlk yardım nedir?',
        intro: 'İlk yardım, bir kaza veya ani hastalık anında sağlık görevlileri gelene kadar, eldeki imkanlarla yapılan ilk müdahaledir. Tedavi değildir; amacı yaşamı korumaktır.',
        items: [
          { title: 'Yaşamı kurtarmak' },
          { title: 'Durumun kötüleşmesini önlemek' },
          { title: 'İyileşmeyi kolaylaştırmak' },
        ],
        tip: 'İlk yardım doktorun yerini tutmaz; doktora giden yolu güvenli kılar.',
      },
      {
        title: 'Üç temel adım: koru, bildir, kurtar',
        intro: 'Olay yerinde sırayla şunları yaparsın:',
        ordered: true,
        items: [
          { title: 'Koru', desc: 'Ortamı güvenli hale getir, kazayı işaretle, kendini de koru.' },
          { title: 'Bildir', desc: 'Hemen 112 Acil Çağrı Merkezi\'ni ara.' },
          { title: 'Kurtar', desc: 'Sağlık ekibi gelene kadar kazazedeye ilk yardımı uygula.' },
        ],
        tip: 'Sıra: Koru - Bildir - Kurtar.',
      },
      {
        title: 'Kaza yerinde önce güvenlik',
        intro: 'Kendin zarar görürsen kimseye yardım edemezsin. Önce çevreyi tehlikelerden arındır.',
        items: [
          { title: 'Aracın motorunu kapat', desc: 'Kontağı kapat, el frenini çek.' },
          { title: 'Kazayı işaretle', desc: 'Dörtlü flaşörü yak, reflektör veya üçgen uyarı levhasını yerleştir.' },
          { title: 'Yangın ve akım tehlikesine bak', desc: 'Sigara içilmesine izin verme; yakıt sızıntısı varsa uzak dur.' },
        ],
      },
      {
        title: '112\'yi ararken neleri söylemelisin?',
        intro: 'Sakin ol, net konuş ve çağrı merkezi kapatmadan telefonu kapatma.',
        items: [
          { title: 'Olay yerinin tam adresi' },
          { title: 'Ne olduğu (kaza, yanık, boğulma...)' },
          { title: 'Kaç kişinin yaralandığı ve durumları' },
        ],
        tip: 'Acil durumlarda aranacak tek numara 112\'dir (114 yalnızca Zehir Danışma hattıdır).',
      },
      {
        title: 'İlk yardımcı neleri yapmaz?',
        intro: 'İlk yardımcının görevi sınırlıdır; yanlış müdahale zarar verir.',
        items: [
          { title: 'İlaç vermez' },
          { title: 'Bilinci kapalı kişiye yiyecek veya içecek vermez' },
          { title: 'Gerekmedikçe kazazedeyi hareket ettirmez' },
          { title: 'Tedavi uygulamaya kalkmaz' },
        ],
        tip: 'Sınav ipucu: Bilinci kapalıya asla yiyecek içecek verilmez.',
      },
    ],
  },
  {
    topicId: 'iy-degerlendirme',
    steps: [
      {
        title: 'Önce çevre, sonra kazazede',
        intro: 'Kazazedeye yaklaşmadan ortam güvenli mi diye bak. Sonra kaç kişinin yaralandığını ve hayati tehlikesi olanları belirle.',
        tip: 'Hayati tehlikesi olan kazazede her zaman önce ilgilenilir.',
      },
      {
        title: 'Birincil değerlendirme sırası',
        intro: 'Yaşamı doğrudan tehdit eden durumlar şu sırayla kontrol edilir:',
        ordered: true,
        items: [
          { title: 'Bilinç', desc: 'Omuzlarından hafifçe sarsıp sesle.' },
          { title: 'Solunum', desc: 'Bak, dinle, hisset; en fazla 10 saniye.' },
          { title: 'Kanama', desc: 'Şiddetli dış kanama var mı?' },
        ],
        tip: 'Kontrole bilinçle başla, hayatı tehdit eden kanamayı atlama.',
      },
      {
        title: 'Solunum yolunu aç',
        intro: 'Bilinci kapalı kazazedede dil geriye kaçıp hava yolunu tıkayabilir. Bir elini alnına, diğerini çenesine koyarak başı hafifçe geriye yatırıp çeneyi kaldır.',
        tip: 'Omurga yaralanması şüphesinde boynu gereksiz oynatma.',
      },
      {
        title: 'İkincil değerlendirme',
        intro: 'Hayati tehlike yoksa ya da giderildiyse kazazedeyi baştan ayağa dikkatle gözden geçir.',
        items: [
          { title: 'Baş, boyun, göğüs, karın, kol ve bacakları kontrol et' },
          { title: 'Kanama, şişlik, şekil bozukluğu ve ağrılı bölgeleri ara' },
          { title: 'Kazazedeyle konuş; ne olduğunu, ilaç kullanıp kullanmadığını sor' },
        ],
      },
      {
        title: 'Yaşam bulguları',
        intro: 'Kişinin durumunu gösteren bulgular şunlardır:',
        items: [
          { title: 'Bilinç düzeyi' },
          { title: 'Solunum' },
          { title: 'Nabız' },
          { title: 'Cilt rengi, ısısı ve nemi' },
        ],
        tip: 'Yetişkinde normal solunum dakikada yaklaşık 12-20, nabız 60-100 arasındadır.',
      },
    ],
  },
  {
    topicId: 'iy-yanik',
    steps: [
      {
        title: 'Yanık dereceleri',
        intro: 'Yanığın derinliği derecesini belirler.',
        items: [
          { title: '1. derece', desc: 'Sadece üst deri; kızarıklık ve ağrı.' },
          { title: '2. derece', desc: 'Su toplanması (kabarcık), şiddetli ağrı.' },
          { title: '3. derece', desc: 'Derinin tüm katmanları; beyaz veya kömürleşmiş, çoğu zaman ağrısız.' },
        ],
        tip: '3. derece yanıkta sinirler zarar gördüğü için ağrı az olabilir.',
      },
      {
        title: 'İlk adım: yanık kaynağını uzaklaştır',
        intro: 'Önce yanmaya sebep olan şeyden uzaklaştır. Giysisi yanıyorsa kişiyi koşturma; yere yatırıp yuvarlanmasını sağla veya battaniyeyle sar. Elektrik yanığında önce akımı kes.',
        tip: 'Koşmak alevleri büyütür.',
      },
      {
        title: 'Soğutma: akan temiz suyla',
        intro: 'Yanık bölgesini en az 10 dakika boyunca serin akan suyla soğut. Su, ısının derine ilerlemesini durdurur ve ağrıyı azaltır.',
        tip: 'Buz veya buzlu su kullanma; dokuyu daha çok zedeler.',
      },
      {
        title: 'Yapılmayacaklar',
        intro: 'Evde sık yapılan şu hatalardan kaçın:',
        items: [
          { title: 'Diş macunu, yoğurt, yağ veya salça sürme' },
          { title: 'Kabarcıkları patlatma' },
          { title: 'Deriye yapışmış giysiyi çekip çıkarma' },
        ],
      },
      {
        title: 'Örtme ve sevk',
        intro: 'Soğuttuktan sonra yanığı temiz, yapışmayan bir örtü ile gevşekçe ört. Geniş, derin veya yüz, el, genital bölge gibi yerlerdeki yanıklarda 112\'yi ara.',
        tip: 'Kimyasal yanıkta bol su ile uzun süre yıka.',
      },
    ],
  },
  {
    topicId: 'iy-kirik',
    steps: [
      {
        title: 'Kırık, çıkık, burkulma farkı',
        intro: 'Üçü de kemik ve eklem yaralanmasıdır ama farklıdır.',
        items: [
          { title: 'Kırık', desc: 'Kemiğin çatlaması veya kopması.' },
          { title: 'Çıkık', desc: 'Eklemi oluşturan kemiklerin yerinden ayrılması.' },
          { title: 'Burkulma', desc: 'Eklem bağlarının zorlanması veya yırtılması.' },
        ],
      },
      {
        title: 'Kırığı nasıl anlarsın?',
        intro: 'Şu bulgular kırık şüphesini artırır:',
        items: [
          { title: 'Şiddetli ağrı ve hareket ettirememe' },
          { title: 'Şişlik ve morarma' },
          { title: 'Uzvun şeklinin bozulması' },
          { title: 'Açık kırıkta kemiğin deriden dışarı çıkması' },
        ],
        tip: 'Emin değilsen kırık gibi davran.',
      },
      {
        title: 'İlk yardımın ana kuralı: hareketsiz bırak',
        intro: 'Yaralı bölgeyi oynatma, yerine oturtmaya çalışma. Kırığın altındaki ve üstündeki eklemleri de içine alacak şekilde atel veya sert bir malzeme ile sabitle.',
        tip: 'Çıkığı asla yerine oturtmaya çalışma.',
      },
      {
        title: 'Açık kırık ve omurga',
        intro: 'Açık kırıkta kanamayı yara çevresinden baskı ile kontrol et, çıkıntı yapan kemiği içeri itme, yarayı temiz bezle ört. Boyun veya sırt yaralanması şüphesi varsa kazazedeyi hiç hareket ettirme ve 112\'yi ara.',
      },
      {
        title: 'Burkulmada soğuk uygulama',
        intro: 'Burkulan bölgeyi dinlendir, bezle sarılı soğuk uygulama yap, hafif sar ve mümkünse yukarı kaldır.',
        tip: 'Buzu doğrudan cilde koyma.',
      },
    ],
  },
  {
    topicId: 'iy-zehir',
    steps: [
      {
        title: 'Zehir vücuda nasıl girer?',
        intro: 'Zehirli maddeler dört yoldan alınabilir.',
        items: [
          { title: 'Ağızdan', desc: 'İlaç, temizlik maddesi, bozuk gıda.' },
          { title: 'Solunumla', desc: 'Gaz, duman, karbonmonoksit.' },
          { title: 'Deriden', desc: 'Kimyasallar, tarım ilaçları.' },
          { title: 'Enjeksiyon / sokma', desc: 'Böcek, yılan, iğne.' },
        ],
      },
      {
        title: 'Genel ilk yardım',
        intro: 'Kendini korumayı unutma, sonra şunları yap:',
        ordered: true,
        items: [
          { title: 'Kişiyi zehir kaynağından uzaklaştır' },
          { title: '112\'yi ara; ayrıca Zehir Danışma Hattı 114 bilgi verir' },
          { title: 'Zehirli maddeyi, kabını veya ilaç kutusunu sağlık ekibine göster' },
        ],
        tip: 'Zehir Danışma Merkezi numarası: 114.',
      },
      {
        title: 'Kendiliğinden kusturma',
        intro: 'Hiçbir zehirlenmede kendiliğinden kusturmaya çalışma (özellikle asit, çamaşır suyu, petrol ürünleri alındıysa ve kişi bilinçsizse). Kusturmak yemek borusuna ve akciğere ikinci bir zarar verebilir.',
        tip: 'Sınavda "kusturmak" genellikle yanlış şıktır.',
      },
      {
        title: 'Karbonmonoksit zehirlenmesi',
        intro: 'Kömür sobası, şofben veya çalışan motorun kapalı ortamda ürettiği, renksiz ve kokusuz gazdır. Baş ağrısı, baş dönmesi, bulantı ve uyuşukluk belirtilerinde kişiyi hemen temiz havaya çıkar.',
        items: [
          { title: 'Pencere ve kapıları aç' },
          { title: 'Kişiyi açık havaya çıkar, sırtüstü yatır' },
          { title: 'Hemen 112\'yi ara' },
        ],
      },
      {
        title: 'Böcek ve yılan sokması',
        intro: 'Kişiyi sakin tut, yaralı bölgeyi hareketsiz bırak, yarayı kesme, emme veya sıkı turnike uygulama. Hızla sağlık kuruluşuna ulaştır.',
      },
    ],
  },
  {
    topicId: 'iy-tasima',
    steps: [
      {
        title: 'Kural: zorunlu değilse taşıma',
        intro: 'Kazazedeyi yanlış taşımak yaralanmayı ağırlaştırabilir, özellikle omurga hasarında. Sağlık ekibi gelene kadar olduğu yerde ilk yardım uygulanır.',
        tip: 'Sağlık ekibi gelecekse kazazedeyi yerinden oynatma.',
      },
      {
        title: 'Hangi durumlarda taşınır?',
        intro: 'Sadece kazazede ve sen için hayati tehlike varsa ya da yaşamsal müdahale için yer değiştirmek gerekirse taşıma yapılır.',
        items: [
          { title: 'Yangın, patlama veya çökme tehlikesi' },
          { title: 'Zehirli gaz ortamı' },
          { title: 'Kalp masajı gerekiyor ve zemin elverişsiz' },
        ],
      },
      {
        title: 'Araçtan çıkarma: Rautek',
        intro: 'Araçta sıkışmış, hayatı tehlikede olan kazazedeyi çıkarmak için kullanılan hızlı yönteme Rautek manevrası denir. Kazazedenin kolları kavranarak gövde ve baş mümkün olduğunca tek eksende tutulur.',
        tip: 'Rautek, araçtan acil kurtarma yöntemidir.',
      },
      {
        title: 'Omurga şüphesinde',
        intro: 'Baş, boyun ve gövde aynı doğrultuda, tek parça halinde tutulur. Boyun eğilmez, döndürülmez; mümkünse sağlık ekibi beklenir.',
      },
      {
        title: 'Taşırken pozisyon',
        intro: 'Bilinci kapalı ama soluyan kazazede yan yatış (koma) pozisyonunda taşınır veya bekletilir; böylece solunum yolu açık kalır. Taşımada sedye ve birden fazla kişi kullanmak daha güvenlidir.',
        tip: 'Tek kişiyle taşıma son çaredir.',
      },
    ],
  },

  // ───────────── ARAÇ TEKNİĞİ ─────────────
  {
    topicId: 'at-motor',
    steps: [
      {
        title: 'Motor ne yapar?',
        intro: 'Motor, yakıtın yanmasıyla oluşan ısı enerjisini hareket (mekanik) enerjisine çevirir. Bu enerji tekerlekleri döndürür.',
        tip: 'Yakıt yanar, piston iter, krank döner.',
      },
      {
        title: 'Temel parçalar',
        intro: 'Motorun çalışmasında şu parçalar rol alır:',
        items: [
          { title: 'Silindir', desc: 'Pistonun gidip geldiği boşluk.' },
          { title: 'Piston', desc: 'Yanma basıncıyla aşağı itilir.' },
          { title: 'Biyel', desc: 'Pistonu krank miline bağlar.' },
          { title: 'Krank mili', desc: 'Pistonun doğrusal hareketini dönme hareketine çevirir.' },
          { title: 'Supaplar', desc: 'Emme ve egzoz için giriş-çıkış kapıları.' },
        ],
      },
      {
        title: 'Dört zamanlı motor',
        intro: 'Dört zamanlı motorda yakıt-hava karışımı bu sırayla işlem görür:',
        ordered: true,
        items: [
          { title: 'Emme', desc: 'Silindire hava/yakıt girer.' },
          { title: 'Sıkıştırma', desc: 'Piston karışımı sıkıştırır.' },
          { title: 'İş (yanma)', desc: 'Yanma pistonu aşağı iter, güç burada üretilir.' },
          { title: 'Egzoz', desc: 'Yanmış gazlar dışarı atılır.' },
        ],
        tip: 'Emme - Sıkıştırma - İş - Egzoz.',
      },
      {
        title: 'Benzinli ve dizel fark',
        intro: 'İki motor tipinde yakıt tutuşturma şekli farklıdır.',
        items: [
          { title: 'Benzinli', desc: 'Karışım bujinin çaktığı kıvılcımla ateşlenir.' },
          { title: 'Dizel', desc: 'Havanın aşırı sıkışmasıyla ısınır; püskürtülen yakıt kendiliğinden tutuşur.' },
        ],
        tip: 'Dizelde buji yoktur.',
      },
      {
        title: 'Özet',
        intro: 'Motor ısı enerjisini harekete çevirir. Güç, dört zamanın üçüncüsünde (iş zamanı) üretilir. Benzinli motorda buji, dizelde sıkıştırma ateşlemeyi yapar.',
      },
    ],
  },
  {
    topicId: 'at-yaglama',
    steps: [
      {
        title: 'Motor yağı neden gerekli?',
        intro: 'Hareketli parçalar arasına ince bir yağ filmi sürer ve şu görevleri yapar:',
        items: [
          { title: 'Sürtünmeyi ve aşınmayı azaltır' },
          { title: 'Parçaları soğutur' },
          { title: 'Metal tortuyu ve kirleri taşıyıp temizler' },
          { title: 'Sızdırmazlığa yardım eder' },
        ],
        tip: 'Yağsız motor kısa sürede zarar görür.',
      },
      {
        title: 'Yağ nereden nereye gider?',
        intro: 'Yağ karterde depolanır. Yağ pompası onu filtreden geçirerek motorun yağlanması gereken yerlerine basınçla gönderir.',
        ordered: true,
        items: [
          { title: 'Yağ karteri', desc: 'Yağın depolandığı yer.' },
          { title: 'Yağ pompası', desc: 'Yağı basınçla yollar.' },
          { title: 'Yağ filtresi', desc: 'Yağdaki kirleri tutar.' },
        ],
      },
      {
        title: 'Yağ seviyesini kontrol etme',
        intro: 'Araç düz zeminde dururken, motor durdurulup yağın karterde toplanması için kısa süre beklendikten sonra yağ çubuğu çıkarılır, silinir, tekrar takılıp çekilir.',
        tip: 'Seviye çubuk üzerindeki alt ve üst işaret arasında olmalı. Fazla yağ da zararlıdır.',
      },
      {
        title: 'Yağ ikaz lambası yanarsa',
        intro: 'Kırmızı yağ lambası yağ basıncının düştüğünü gösterir. Güvenli bir yerde hemen dur, motoru durdur ve yağ seviyesini kontrol et. Işık yanarken yola devam etmek motoru bozar.',
        tip: 'Yağ basıncı lambası yanıyorsa devam etme.',
      },
      {
        title: 'Yağ değişimi',
        intro: 'Yağ zamanla kirlenir ve görevini yapamaz hale gelir. Yağ ve yağ filtresi, araç üreticisinin belirttiği periyotta değiştirilmelidir.',
      },
    ],
  },
  {
    topicId: 'at-sogutma',
    steps: [
      {
        title: 'Soğutma neden gerekli?',
        intro: 'Yanma sırasında motor çok ısınır. Soğutma sistemi motoru en verimli çalışma sıcaklığında tutar; aşırı ısınma parçalara zarar verir.',
      },
      {
        title: 'Sıvı soğutmalı sistemin parçaları',
        items: [
          { title: 'Radyatör', desc: 'Sıcak sıvının ısısını havaya verir.' },
          { title: 'Su pompası', desc: 'Sıvıyı motor ile radyatör arasında dolaştırır.' },
          { title: 'Termostat', desc: 'Motor ısınana kadar sıvıyı radyatöre göndermez, sonra açılır.' },
          { title: 'Fan', desc: 'Radyatörden hava geçişini sağlar.' },
          { title: 'Genleşme kabı', desc: 'Sıvının genleşmesine yer verir.' },
        ],
        tip: 'Termostat: motoru çabuk ısıtır, sonra sıcaklığı sabit tutar.',
      },
      {
        title: 'Antifriz',
        intro: 'Soğutma sıvısına antifriz karıştırılır. Soğuk havada donmayı, sıcak havada kaynamayı engeller ve metal aksamı paslanmaya karşı korur.',
        tip: 'Antifriz sadece kışın değil, yıl boyu gerekir.',
      },
      {
        title: 'Motor aşırı ısınırsa',
        intro: 'Sıcaklık göstergesi kırmızıya yaklaşırsa veya ikaz lambası yanarsa:',
        ordered: true,
        items: [
          { title: 'Güvenli bir yerde dur ve motoru durdur' },
          { title: 'Motorun soğumasını bekle' },
          { title: 'Soğuyunca sıvı seviyesini kontrol et' },
        ],
        tip: 'Motor sıcakken radyatör kapağını açma; sıcak sıvı yüzüne fışkırır.',
      },
    ],
  },
  {
    topicId: 'at-yakit',
    steps: [
      {
        title: 'Yakıt sistemi nasıl çalışır?',
        intro: 'Yakıt depodan alınıp motora ulaştırılır.',
        ordered: true,
        items: [
          { title: 'Yakıt deposu' },
          { title: 'Yakıt pompası', desc: 'Yakıtı depodan çeker, basınçla gönderir.' },
          { title: 'Yakıt filtresi', desc: 'Kir ve suyu tutar.' },
          { title: 'Enjektör', desc: 'Yakıtı silindire püskürtür.' },
        ],
      },
      {
        title: 'Hava filtresi',
        intro: 'Motor yanma için temiz hava ister. Hava filtresi havadaki toz ve kirleri tutar. Tıkanırsa motora yeterli hava girmez, güç düşer ve yakıt tüketimi artar.',
        tip: 'Kirli hava filtresi yakıt tüketimini artırır.',
      },
      {
        title: 'Egzoz sistemi',
        intro: 'Yanmış gazlar egzoz borusundan atılır. Katalitik konvertör zararlı gazları daha az zararlı hale getirir; susturucu sesi azaltır.',
        items: [
          { title: 'Katalitik konvertör: zararlı emisyonu azaltır' },
          { title: 'Susturucu: egzoz gürültüsünü azaltır' },
        ],
        tip: 'Egzoz gazındaki karbonmonoksit zehirlidir; kapalı garajda motoru çalıştırma.',
      },
      {
        title: 'Yakıt ikmalinde dikkat',
        intro: 'Yakıt alırken motoru durdur, sigara içme ve cep telefonuyla uğraşma. Aracın yakıt cinsine uygun yakıtı doldur; dizele benzin veya benzinliye dizel koymak motoru bozar.',
      },
      {
        title: 'Yakıt tasarrufu',
        intro: 'Ani gaz ve fren yerine yumuşak sürüş, uygun vites kullanımı, doğru lastik basıncı ve gereksiz yükten kaçınmak yakıt tüketimini azaltır.',
        tip: 'Sakin sürüş = az yakıt.',
      },
    ],
  },
  {
    topicId: 'at-lastik',
    steps: [
      {
        title: 'Lastik basıncı',
        intro: 'Lastik basıncı araç üreticisinin önerdiği değerde olmalı ve lastikler soğukken ölçülmelidir.',
        items: [
          { title: 'Düşük basınç', desc: 'Lastik kenarları aşınır, ısınır, yakıt tüketimi artar.' },
          { title: 'Yüksek basınç', desc: 'Orta bölge aşınır, yol tutuş azalır.' },
        ],
        tip: 'Basıncı sık sık ve soğukken ölç.',
      },
      {
        title: 'Diş derinliği ve hasar',
        intro: 'Lastik dişleri suyu yoldan uzaklaştırır. Aşınınca ıslak zeminde yol tutuşu ciddi azalır.',
        items: [
          { title: 'Yasal asgari diş derinliği: 1,6 mm' },
          { title: 'Yan duvarda şişlik, kesik veya çatlak varsa lastik değişmeli' },
        ],
      },
      {
        title: 'Rot, balans ve direksiyon',
        intro: 'Bu ayarlar sürüş güvenliğini etkiler.',
        items: [
          { title: 'Rot ayarı', desc: 'Ön tekerleklerin birbirine göre dizilimi; bozuksa araç bir yana çeker, lastik düzensiz aşınır.' },
          { title: 'Balans', desc: 'Tekerlekteki ağırlık dengesi; bozuksa direksiyonda titreme olur.' },
          { title: 'Direksiyon boşluğu', desc: 'Aşırı boşluk varsa araç hakimiyeti zayıflar, servise git.' },
        ],
      },
      {
        title: 'Su kayması (hidroplaning)',
        intro: 'Yağmurda yüksek hızda lastikler yol ile temasını kaybedip su üzerinde kayabilir. Direksiyon tepkisiz hale gelir.',
        items: [
          { title: 'Gazı yavaşça bırak' },
          { title: 'Ani fren ve ani direksiyon çevirmeden dümeni düz tut' },
        ],
        tip: 'Yağmurda hızı azalt, lastik dişi derin olsun.',
      },
      {
        title: 'Özet',
        intro: 'Basıncı soğukken ölç, diş derinliğini ve lastik yüzeyini kontrol et. Rot, balans ve direksiyon sorunlarını geciktirmeden gider.',
      },
    ],
  },
  {
    topicId: 'at-bakim',
    steps: [
      {
        title: 'Gösterge ışıkları renk koduyla anlaşılır',
        intro: 'Işığın rengi aciliyeti anlatır.',
        items: [
          { title: 'Kırmızı', desc: 'Tehlike; hemen güvenli yerde dur ve gerekli kontrolü yap.' },
          { title: 'Sarı / turuncu', desc: 'Uyarı; en kısa sürede kontrol ettir.' },
          { title: 'Yeşil / mavi', desc: 'Bilgi; sistem çalışıyor (sinyal, far gibi).' },
        ],
        tip: 'Kırmızı ışık = dur ve bak.',
      },
      {
        title: 'Sık çıkan ikaz lambaları',
        items: [
          { title: 'Yağ basıncı', desc: 'Kırmızı; yağ basıncı düşük, motoru durdur.' },
          { title: 'Akü / şarj', desc: 'Kırmızı; şarj sistemi (alternatör) sorunu.' },
          { title: 'Motor sıcaklığı', desc: 'Kırmızı; motor aşırı ısınıyor.' },
          { title: 'Fren', desc: 'Kırmızı; el freni çekili veya fren sorunu.' },
          { title: 'Motor arıza lambası', desc: 'Sarı; motor yönetim sisteminde arıza.' },
          { title: 'ABS', desc: 'Sarı; ABS sisteminde sorun var.' },
        ],
      },
      {
        title: 'Yola çıkmadan günlük kontrol',
        intro: 'Kısa bir göz gezdirme çok sorunu önler.',
        items: [
          { title: 'Lastik basıncı ve durumu' },
          { title: 'Motor yağı ve soğutma sıvısı seviyesi' },
          { title: 'Farlar, sinyaller, stop lambaları' },
          { title: 'Silecekler ve cam suyu' },
          { title: 'Fren hidroliği seviyesi ve fren pedalı hissi' },
        ],
      },
      {
        title: 'Periyodik bakım ve muayene',
        intro: 'Araç, üreticinin belirlediği aralıklarla bakıma alınmalıdır. Yağ, filtre ve fren balataları gibi parçalar zamanla yıpranır. Ayrıca araçlar yasal periyodik muayeneden geçmek zorundadır.',
        tip: 'Bakım ertelendikçe masraf ve kaza riski artar.',
      },
    ],
  },

  // ───────────── TRAFİK ADABI ─────────────
  {
    topicId: 'ta-saygi',
    steps: [
      {
        title: 'Trafik karşılıklı saygıyla işler',
        intro: 'Yol herkesin ortak alanıdır. Kurallara uymak kadar diğer kullanıcılara saygı göstermek de trafik adabıdır.',
        tip: 'Hak değil, güvenlik önemlidir: hakkın olsa bile çarpışmaktan kaçın.',
      },
      {
        title: 'Kibar sürücü ne yapar?',
        items: [
          { title: 'Sinyal verir', desc: 'Niyetini diğerlerine önceden bildirir.' },
          { title: 'Yol verir', desc: 'Dar yerde, kavşakta ve acil durumda geçişe kolaylık sağlar.' },
          { title: 'Takip mesafesini korur' },
          { title: 'Teşekkür eder', desc: 'Yol verene el işaretiyle veya kısa bir el selamıyla teşekkür etmek nezakettir.' },
        ],
      },
      {
        title: 'Korna ve far kullanımı',
        intro: 'Korna zorunlu haller dışında çalınmaz; özellikle yerleşim yerlerinde gereksiz kornaya basmak gürültü kirliliği ve uyarıcı etkisini yitirir.',
        items: [
          { title: 'Karşıdan gelene uzun far yapma, kısa fara geç' },
          { title: 'Önündeki aracı sürekli kornayla veya farla taciz etme' },
        ],
        tip: 'Korna tehlike uyarısıdır, sinirle basılacak bir düğme değil.',
      },
      {
        title: 'Hata yapana nasıl davranılır?',
        intro: 'Başka sürücü hata yapsa bile aynı şekilde karşılık verme. Sakin ol, mesafeni koru ve yoluna devam et.',
        tip: 'Anlık öfke, saatlerce pişmanlık getirir.',
      },
    ],
  },
  {
    topicId: 'ta-yaya',
    steps: [
      {
        title: 'Yaya geçidi: yayanın önceliği var',
        intro: 'Yaya geçidine yaklaşırken hızını azalt. Geçitte yaya varsa veya geçmek üzereyse durup yol vermek zorundasın.',
        tip: 'Yaya geçidinde yaya her zaman önce.',
      },
      {
        title: 'Yan şerit tuzağı',
        intro: 'Yanındaki şeritte bir araç yaya için durduysa, onu geçme. Durmuş aracın önünden yaya çıkabilir ve görmediğin için çarpabilirsin.',
        tip: 'Yanındaki araç duruyorsa sen de yavaşla.',
      },
      {
        title: 'Yaya geçidi çevresinde yapılmayacaklar',
        items: [
          { title: 'Yaya geçidinde durma veya park etme' },
          { title: 'Kaldırımda gitme veya park etme' },
          { title: 'Yayanın önüne kırarak girme' },
        ],
      },
      {
        title: 'Islak yolda yayaya dikkat',
        intro: 'Yağmurlu havada su birikintilerinde hızını düşür; yayaları ıslatmak ve görüşü kaybetmek istemezsin. Kapıyı açmadan önce arkanı kontrol et; yayaya ve bisikletliye çarpabilirsin.',
      },
      {
        title: 'Yayalar da kurallara uyar',
        intro: 'Yayalar kaldırımı ve yaya geçidini kullanmalı, karşıdan karşıya geçerken sağa sola bakmalıdır. Ama sürücü, yaya hata yapsa bile çarpmamakla yükümlüdür.',
        tip: 'Sürücü yaya hatası yapsa bile korumakla yükümlüdür.',
      },
    ],
  },
  {
    topicId: 'ta-ofke',
    steps: [
      {
        title: 'Öfke sürüş güvenliğini bozar',
        intro: 'Sinirli sürücü riskli sollama yapar, mesafeyi unutur, hız yapar. Öfkeliyken karar verme becerin düşer.',
        tip: 'Öfke ile direksiyon başında kalma.',
      },
      {
        title: 'Öfkeni kontrol altına al',
        items: [
          { title: 'Derin nefes al, sakinleş' },
          { title: 'Provokasyona karşılık verme; kişisel alma' },
          { title: 'Gerekirse güvenli yerde dur ve bekle' },
          { title: 'Yola erken çık; acele etme' },
        ],
      },
      {
        title: 'Dikkati dağıtan şeyler',
        intro: 'Direksiyon başında dikkatini yoldan alan her şey risklidir.',
        items: [
          { title: 'Telefonla konuşma, mesaj yazma' },
          { title: 'Yemek yeme, navigasyonla uğraşma' },
          { title: 'Yolcularla yoğun tartışma' },
        ],
        tip: 'Telefon gerekiyorsa güvenli yerde durup kullan.',
      },
      {
        title: 'Yorgunluk, ilaç ve alkol',
        intro: 'Uykusuz ve yorgun sürücünün refleksleri yavaşlar. Alkol ve bazı ilaçlar dikkat ve tepki süresini bozar.',
        items: [
          { title: 'Yorgunluk hissedersen mola ver, dinlen' },
          { title: 'Alkol alınmışsa direksiyona geçme' },
          { title: 'Uyku yapan ilaç kullanıyorsan araç kullanma' },
        ],
        tip: 'Uykulu sürmek de alkollü sürmek kadar tehlikelidir.',
      },
    ],
  },
  {
    topicId: 'ta-hassas',
    steps: [
      {
        title: 'Herkes için güvenli trafik',
        intro: 'Çocuklar, yaşlılar, engelliler ve hamileler trafikte daha savunmasızdır. Onlara karşı ekstra sabırlı ve dikkatli olmak sürücünün görevidir.',
        tip: 'Savunmasızı koru: yavaşla, bekle, yol ver.',
      },
      {
        title: 'Çocuklara dikkat',
        intro: 'Çocuklar tehlikeyi sezemez ve ansızın yola çıkabilir.',
        items: [
          { title: 'Okul, park ve oyun alanı yakınında hızı düşür' },
          { title: 'Duran araç veya top çevresinde çocuk olabileceğini düşün' },
          { title: 'Okul geçidinde dur, çocuklara yol ver' },
        ],
      },
      {
        title: 'Yaşlı yayalar',
        intro: 'Yaşlılar yavaş yürür, görmesi ve duyması zayıflayabilir. Onları aceleye getirme; korna çalma, geçmesini sabırla bekle.',
        tip: 'Yaşlıya acele ettirme, bekle.',
      },
      {
        title: 'Engelli bireyler',
        intro: 'Engelli kişilere yol vermek ve hayatı kolaylaştırmak hem adabın hem yasanın gereğidir.',
        items: [
          { title: 'Beyaz baston kullanan görme engelliye yol ver, dur' },
          { title: 'Tekerlekli sandalye kullananların rampasını ve geçişini kapatma' },
          { title: 'Engelli park yerine, hakkın yoksa park etme' },
        ],
        tip: 'Engelli park yeri ve rampalar engellilere aittir.',
      },
      {
        title: 'Özet',
        intro: 'Okul, hastane, yaya geçidi ve kaldırım rampası gibi yerlerde yavaşla. Çocuk, yaşlı ve engellilerin geçişini sabırla bekle ve onlara asla acele ettirme.',
      },
    ],
  },
];
