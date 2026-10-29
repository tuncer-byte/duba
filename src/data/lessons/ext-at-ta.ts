import type { Lesson } from '../types';

export const EXT_ATTA: Lesson[] = [
  // ───────────── ARAÇ TEKNİĞİ ─────────────
  {
    topicId: 'at-motor',
    steps: [
      {
        title: 'Motor ne yapar?',
        intro: 'Motor, yakıtın yanmasıyla oluşan ısı enerjisini hareket (mekanik) enerjisine çevirir. Bu hareket şanzıman ve aktarma organlarıyla tekerleklere ulaşır.',
        items: [
          { title: 'Yakıt + hava', desc: 'Silindirde karışır ve yanar.' },
          { title: 'Yanma basıncı', desc: 'Pistonu iter.' },
          { title: 'Krank mili', desc: 'Hareketi dönme hareketine çevirir.' },
        ],
        tip: 'Yakıt yanar, piston iter, krank döner.',
      },
      {
        title: 'Motorun ana parçaları',
        intro: 'Güç üreten ve taşıyan temel parçalar şunlardır:',
        items: [
          { title: 'Motor bloğu', desc: 'Silindirlerin bulunduğu ana gövde.' },
          { title: 'Silindir kapağı', desc: 'Bloğun üstünü kapatır; supaplar ve buji/enjektör burada yer alır.' },
          { title: 'Piston', desc: 'Silindir içinde gidip gelir; yanma basıncıyla itilir.' },
          { title: 'Segmanlar', desc: 'Piston üzerinde sızdırmazlık sağlar, yağı sıyırır.' },
          { title: 'Biyel', desc: 'Pistonu krank miline bağlar.' },
          { title: 'Krank mili', desc: 'Pistonun doğrusal hareketini dönme hareketine çevirir.' },
          { title: 'Karter', desc: 'Motorun altındaki yağ haznesi.' },
        ],
      },
      {
        title: 'Piston ve silindir hareketi',
        intro: 'Piston silindirde iki uç nokta arasında gidip gelir. Üst uca üst ölü nokta, alt uca alt ölü nokta denir. Piston bir uçtan diğerine giderken bir zaman tamamlanır.',
        items: [
          { title: 'Üst ölü nokta (ÜÖN)', desc: 'Pistonun en yukarı çıktığı yer.' },
          { title: 'Alt ölü nokta (AÖN)', desc: 'Pistonun en aşağı indiği yer.' },
          { title: 'Strok (kurs)', desc: 'İki ölü nokta arasındaki mesafe.' },
        ],
      },
      {
        title: 'Dört zamanlı motor',
        intro: 'Dört zamanlı motorda yakıt-hava karışımı şu sırayla işlem görür:',
        ordered: true,
        items: [
          { title: 'Emme', desc: 'Piston iner, silindire hava (benzinlide hava-yakıt) dolar.' },
          { title: 'Sıkıştırma', desc: 'Piston çıkar, supaplar kapalıyken karışımı sıkıştırır.' },
          { title: 'İş (yanma)', desc: 'Yanma pistonu aşağı iter. Güç bu zamanda üretilir.' },
          { title: 'Egzoz', desc: 'Piston çıkar, yanmış gazları egzoz supabından dışarı atar.' },
        ],
        tip: 'Emme - Sıkıştırma - İş - Egzoz. Güç sadece üçüncü zamanda üretilir.',
      },
      {
        title: 'Supaplar ve eksantrik mili',
        intro: 'Silindirin giriş ve çıkış kapıları supaplardır. Doğru zamanda açılıp kapanmalarını eksantrik mili sağlar; krank miliyle eş zamanlı çalışır.',
        items: [
          { title: 'Emme supabı', desc: 'Hava veya karışımı içeri alır.' },
          { title: 'Egzoz supabı', desc: 'Yanmış gazı dışarı bırakır.' },
          { title: 'Triger (zamanlama) kayışı/zinciri', desc: 'Krank mili ile eksantrik milini eş zamanlı döndürür.' },
        ],
        warn: 'Triger kayışı kopması motora ağır hasar verebilir; değişim zamanını geciktirme.',
      },
      {
        title: 'Benzinli ve dizel motor farkı',
        intro: 'İki motorda yakıtın tutuşturulma şekli farklıdır.',
        items: [
          { title: 'Benzinli', desc: 'Hava-yakıt karışımı bujinin çaktığı kıvılcımla ateşlenir.' },
          { title: 'Dizel', desc: 'Havanın aşırı sıkışmasıyla ısınır; püskürtülen yakıt kendiliğinden tutuşur.' },
        ],
        tip: 'Dizelde buji yoktur; benzinlide kıvılcım gerekir.',
      },
      {
        title: 'Motorun sağlıklı çalışma belirtileri',
        intro: 'Rölantide düzgün ve titreşimsiz çalışır, gaza tepki verir, egzozdan kalın ve renkli duman çıkmaz. Göstergede ikaz lambası yanmaz.',
      },
      {
        title: 'Arıza belirtileri',
        intro: 'Şu işaretlerden biri varsa aracı kontrol ettir:',
        items: [
          { title: 'Düzensiz rölanti, titreme veya stop etme' },
          { title: 'Güç kaybı, gaza geç tepki' },
          { title: 'Egzozdan aşırı duman', desc: 'Mavi duman genellikle yağ yanmasına, siyah duman aşırı yakıta işaret edebilir.' },
          { title: 'Motordan vuruntu veya alışılmadık ses' },
          { title: 'Motor arıza ışığının yanması' },
        ],
        warn: 'Alışılmadık ses ve titreşimi küçümseme; erken müdahale masrafı azaltır.',
      },
      {
        title: 'Sık yapılan hatalar',
        items: [
          { title: 'Soğuk motoru hemen yüksek devire zorlamak' },
          { title: 'Yağ ve soğutma sıvısı seviyesini hiç kontrol etmemek' },
          { title: 'Uyarı lambasını görmezden gelmek' },
          { title: 'Triger değişimini geciktirmek' },
        ],
      },
      {
        title: 'Sınav tuzakları ve özet',
        intro: 'Sınavda en sık sorulanlar: zamanların sırası, güç zamanı ve benzinli-dizel farkı.',
        items: [
          { title: 'Güç hangi zamanda üretilir?', desc: 'İş (yanma) zamanında.' },
          { title: 'Dizelde ateşleme nasıl olur?', desc: 'Sıkıştırmayla ısınan havaya yakıt püskürtülür; buji yoktur.' },
          { title: 'Krank mili ne yapar?', desc: 'Doğrusal hareketi dönme hareketine çevirir.' },
        ],
        tip: 'Sıra: Emme - Sıkıştırma - İş - Egzoz. Buji benzinli, sıkıştırma dizel.',
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
          { title: 'Sızdırmazlığa yardım eder (segman-silindir arası)' },
          { title: 'Paslanmaya karşı korur' },
        ],
        tip: 'Yağsız motor kısa sürede zarar görür.',
      },
      {
        title: 'Yağlama sisteminin parçaları',
        items: [
          { title: 'Karter', desc: 'Yağın depolandığı yer.' },
          { title: 'Yağ pompası', desc: 'Yağı motora basınçla gönderir.' },
          { title: 'Yağ filtresi', desc: 'Yağdaki kir ve metal parçacıkları tutar.' },
          { title: 'Yağ basınç müşiri', desc: 'Basınç düşünce kırmızı ikaz lambasını yakar.' },
          { title: 'Yağ seviye çubuğu', desc: 'Yağ miktarını ölçmeye yarar.' },
        ],
      },
      {
        title: 'Yağ nereden nereye gider?',
        intro: 'Yağ karterden pompayla çekilir, filtreden geçer ve motorun yağlanacak noktalarına ulaşır. Sonra tekrar karterde toplanır.',
        ordered: true,
        items: [
          { title: 'Yağ karteri' },
          { title: 'Yağ pompası', desc: 'Yağı basınçla yollar.' },
          { title: 'Yağ filtresi', desc: 'Kirleri tutar.' },
          { title: 'Motor parçaları', desc: 'Krank mili, piston, eksantrik mili yağlanır.' },
        ],
      },
      {
        title: 'Yağ seviyesini kontrol etme',
        intro: 'Doğru ölçüm için şu sırayı izle:',
        ordered: true,
        items: [
          { title: 'Aracı düz zeminde durdur, motoru kapat' },
          { title: 'Yağın karterde toplanması için kısa süre bekle' },
          { title: 'Yağ çubuğunu çıkar ve temiz bezle sil' },
          { title: 'Tamamen geri tak, tekrar çıkar' },
          { title: 'Yağ izinin alt ve üst işaret arasında olduğunu gör' },
        ],
        tip: 'Seviye alt ve üst işaret arasında olmalı. Fazla yağ da zararlıdır.',
      },
      {
        title: 'Yağ viskozitesi ve kalitesi',
        intro: 'Yağın akıcılık (viskozite) sınıfı motorun çalışma ısısına ve üreticinin tavsiyesine göre seçilir. Araç kitapçığındaki yağ türü ve sınıfı kullanılmalıdır.',
        items: [
          { title: 'Çok akışkan yağ', desc: 'Sürtünmeyi korumada yetersiz kalabilir.' },
          { title: 'Çok koyu yağ', desc: 'Soğukta dolaşımı yavaşlatır, çalıştırmayı zorlaştırır.' },
        ],
        tip: 'Hangi yağ? Araç kullanım kılavuzunun önerdiği.',
      },
      {
        title: 'Yağ ikaz lambası yanarsa',
        intro: 'Kırmızı yağ lambası yağ basıncının düştüğünü gösterir.',
        ordered: true,
        items: [
          { title: 'Güvenli bir yerde hemen dur' },
          { title: 'Motoru durdur' },
          { title: 'Yağ seviyesini kontrol et' },
          { title: 'Seviye normal olsa bile ışık yanıyorsa aracı çektir' },
        ],
        warn: 'Işık yanarken yola devam etmek motoru bozar.',
      },
      {
        title: 'Yağ değişimi',
        intro: 'Yağ zamanla kirlenir ve görevini yapamaz hale gelir. Yağ ve yağ filtresi, araç üreticisinin belirttiği periyotta (kilometre veya süre) birlikte değiştirilmelidir.',
        items: [
          { title: 'Eski yağı çevreye dökme', desc: 'Atık yağ çevreyi kirletir; yetkili noktaya teslim edilir.' },
          { title: 'Filtreyi de değiştir', desc: 'Eski filtre yeni yağı hemen kirletir.' },
        ],
      },
      {
        title: 'Yağ sorununun belirtileri',
        items: [
          { title: 'Yağ eksilmesi', desc: 'Yanıyor veya sızıyor olabilir; zemin lekesi ve mavi egzoz dumanı ipucudur.' },
          { title: 'Yağın sütlü/beyaz görünmesi', desc: 'Soğutma sıvısı karışmış olabilir; hemen servise git.' },
          { title: 'Aşırı koyu ve kirli yağ', desc: 'Değişim zamanı gelmiş demektir.' },
        ],
      },
      {
        title: 'Sık hatalar ve sınav tuzakları',
        items: [
          { title: 'Motor çalışırken veya sıcakken hemen ölçmek', desc: 'Hatalı sonuç verir; bekle.' },
          { title: 'Seviye üst işareti aşana kadar yağ doldurmak', desc: 'Fazla yağ da motora zarar verir.' },
          { title: 'Yağ lambası yanıkken sürmeye devam etmek' },
        ],
        tip: 'Yağ lambası kırmızı: dur, motoru kapat, seviyeye bak.',
      },
    ],
  },
  {
    topicId: 'at-sogutma',
    steps: [
      {
        title: 'Soğutma neden gerekli?',
        intro: 'Yanma sırasında motor çok ısınır. Soğutma sistemi motoru en verimli çalışma sıcaklığında tutar. Aşırı ısınma parçaları eğer, contaları yakar. Fazla soğuk motor da verimsiz çalışır ve aşınır.',
        tip: 'Amaç motoru soğuk değil, uygun sıcaklıkta tutmak.',
      },
      {
        title: 'Hava ve sıvı soğutma',
        items: [
          { title: 'Sıvı soğutma', desc: 'Günümüz araçlarında yaygındır; sıvı motor ile radyatör arasında dolaşır.' },
          { title: 'Hava soğutma', desc: 'Hava, motor gövdesindeki kanatçıklardan geçerek soğutur.' },
        ],
      },
      {
        title: 'Sıvı soğutmalı sistemin parçaları',
        items: [
          { title: 'Radyatör', desc: 'Sıcak sıvının ısısını havaya verir.' },
          { title: 'Su pompası', desc: 'Sıvıyı motor ile radyatör arasında dolaştırır.' },
          { title: 'Termostat', desc: 'Motor ısınana kadar sıvıyı radyatöre göndermez, ısınınca açılır.' },
          { title: 'Fan', desc: 'Radyatörden hava geçişini sağlar.' },
          { title: 'Genleşme kabı', desc: 'Sıvının genleşmesine yer verir, seviyeyi buradan kontrol edersin.' },
          { title: 'Hortumlar', desc: 'Sıvıyı parçalar arasında taşır.' },
        ],
        tip: 'Termostat: motoru çabuk ısıtır, sonra sıcaklığı sabit tutar.',
      },
      {
        title: 'Sıvı nasıl dolaşır?',
        ordered: true,
        items: [
          { title: 'Soğuk motor', desc: 'Termostat kapalıdır; sıvı sadece motorda dolaşır ve hızla ısınır.' },
          { title: 'Çalışma sıcaklığı', desc: 'Termostat açılır, sıcak sıvı radyatöre gider.' },
          { title: 'Radyatör ve fan', desc: 'Sıvı soğur ve motora geri döner.' },
        ],
      },
      {
        title: 'Antifriz',
        intro: 'Soğutma sıvısı su ve antifriz karışımıdır. Antifriz soğukta donmayı, sıcakta kaynamayı engeller ve metal aksamı paslanmaya karşı korur.',
        items: [
          { title: 'Sadece su koymak', desc: 'Kışın donar, hasar verir; içerideki korozyonu da artırır.' },
          { title: 'Karışım oranı', desc: 'Üretici talimatına uygun olmalı.' },
        ],
        tip: 'Antifriz sadece kışın değil, yıl boyu gerekir.',
      },
      {
        title: 'Sıvı seviyesi kontrolü',
        intro: 'Seviye soğuk motorda genleşme kabının üzerindeki alt ve üst işaretler arasında olmalıdır. Sürekli eksiliyorsa sızıntı vardır.',
        warn: 'Motor sıcakken radyatör kapağını açma; sıcak sıvı yüzüne fışkırır.',
      },
      {
        title: 'Motor aşırı ısınırsa',
        intro: 'Sıcaklık göstergesi kırmızıya yaklaşırsa, ikaz lambası yanarsa veya kaputtan buhar çıkarsa:',
        ordered: true,
        items: [
          { title: 'Güvenli bir yerde dur ve motoru durdur' },
          { title: 'Kaputu hemen açma; motorun soğumasını bekle' },
          { title: 'Soğuyunca sıvı seviyesini kontrol et' },
          { title: 'Sorunu bulamazsan aracı çektir' },
        ],
      },
      {
        title: 'Arıza belirtileri',
        items: [
          { title: 'Sıcaklık göstergesinin sürekli yüksek olması' },
          { title: 'Aracın altında sıvı damlaması' },
          { title: 'Hortumlarda çatlak, şişme veya sızıntı' },
          { title: 'Fanın hiç çalışmaması' },
          { title: 'Kaputtan buhar çıkması' },
        ],
      },
      {
        title: 'Sık hatalar ve sınav tuzakları',
        items: [
          { title: 'Sıcak motorda radyatör kapağını açmak' },
          { title: 'Aşırı ısınan motoru soğutmak için hemen soğuk su dökmek' },
          { title: 'Sıvıyı hiç kontrol etmemek' },
        ],
        tip: 'Termostat bozuksa motor ya çok geç ısınır ya aşırı ısınır.',
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
          { title: 'Enjektör', desc: 'Yakıtı silindire veya emme kanalına püskürtür.' },
        ],
      },
      {
        title: 'Benzinli ve dizel yakıt sistemi',
        items: [
          { title: 'Benzinli', desc: 'Yakıt-hava karışımı buji kıvılcımıyla ateşlenir.' },
          { title: 'Dizel', desc: 'Sıkışıp ısınan havaya enjektörle yakıt püskürtülür.' },
          { title: 'LPG', desc: 'Benzinli araca takılan ek sistemle sıvılaştırılmış petrol gazı kullanılır; montajı yetkili serviste yapılmalıdır.' },
        ],
        tip: 'Dizel motorda buji yok, benzinli motorda var.',
      },
      {
        title: 'Hava filtresi',
        intro: 'Motor yanma için temiz hava ister. Hava filtresi havadaki toz ve kirleri tutar. Tıkanırsa motora yeterli hava girmez, güç düşer ve yakıt tüketimi artar.',
        tip: 'Kirli hava filtresi yakıt tüketimini artırır.',
      },
      {
        title: 'Egzoz sistemi',
        intro: 'Yanmış gazlar egzoz borusundan atılır.',
        items: [
          { title: 'Egzoz manifoldu', desc: 'Silindirlerden çıkan gazları toplar.' },
          { title: 'Katalitik konvertör', desc: 'Zararlı gazları daha az zararlı hale getirir.' },
          { title: 'Susturucu', desc: 'Egzoz gürültüsünü azaltır.' },
        ],
        warn: 'Egzoz gazındaki karbonmonoksit zehirlidir; kapalı garajda motoru çalıştırma.',
      },
      {
        title: 'Yakıt ikmalinde dikkat',
        intro: 'Yakıt alırken şunlara uy:',
        items: [
          { title: 'Motoru durdur' },
          { title: 'Sigara içme, açık ateş yaklaştırma' },
          { title: 'Cep telefonuyla uğraşma' },
          { title: 'Aracın yakıt cinsine uygun yakıtı doldur' },
        ],
        warn: 'Dizele benzin veya benzinliye dizel koymak motoru bozar. Yanlış yakıtı doldurduysan motoru çalıştırma, aracı çektir.',
      },
      {
        title: 'Yakıt tasarrufu',
        intro: 'Yumuşak sürüş yakıt tüketimini belirgin biçimde azaltır.',
        items: [
          { title: 'Ani gaz ve ani frenden kaçın' },
          { title: 'Uygun vitesi kullan, motoru gereksiz yüksek devirde tutma' },
          { title: 'Lastik basıncını doğru tut' },
          { title: 'Gereksiz yükü ve çatı bagajını kaldır' },
          { title: 'Uzun süre rölantide bekleme' },
        ],
        tip: 'Sakin sürüş = az yakıt.',
      },
      {
        title: 'Arıza belirtileri',
        items: [
          { title: 'Çalıştırma güçlüğü veya stop etme' },
          { title: 'Hızlanmada tereddüt, güç kaybı' },
          { title: 'Aşırı yakıt tüketimi' },
          { title: 'Egzozdan koyu duman veya koku' },
          { title: 'Motor arıza lambasının yanması' },
        ],
        tip: 'Tıkalı filtre veya bozuk enjektör çoğu zaman bu belirtileri verir.',
      },
      {
        title: 'Sık hatalar ve çevre',
        items: [
          { title: 'Depoyu tamamen boşaltıp rezervde sürmek', desc: 'Pompa ısınır, depo dibindeki tortu filtreyi tıkayabilir.' },
          { title: 'Hava ve yakıt filtresini geciktirmek' },
          { title: 'Bozuk egzozla sürmek', desc: 'Çevreyi kirletir ve gürültü yapar.' },
        ],
        tip: 'Egzoz emisyon ölçümü periyodik muayenede yapılır.',
      },
    ],
  },
  {
    topicId: 'at-fren',
    steps: [
      {
        title: 'Fren sisteminin görevi',
        intro: 'Fren, aracı yavaşlatmak ve durdurmak, durduğunda da yerinde tutmak içindir. Sürüş güvenliğinin en önemli sistemlerinden biridir.',
      },
      {
        title: 'Fren nasıl çalışır?',
        intro: 'Pedala bastığında kuvvet fren hidroliği ile tekerleklerdeki fren düzeneğine iletilir.',
        ordered: true,
        items: [
          { title: 'Fren pedalı', desc: 'Sürücünün kuvveti buradan başlar.' },
          { title: 'Ana silindir ve fren hidroliği', desc: 'Basıncı hortum ve borulardan iletir.' },
          { title: 'Tekerlek silindiri/kaliper', desc: 'Basıncı fren parçasına verir.' },
          { title: 'Balata ve disk (veya kampana)', desc: 'Sürtünmeyle aracı yavaşlatır.' },
        ],
      },
      {
        title: 'Fren türleri',
        items: [
          { title: 'Disk fren', desc: 'Balatalar dönen diske sıkışır; soğuması iyidir, çoğu araçta ön tekerlektedir.' },
          { title: 'Kampanalı (tamburlu) fren', desc: 'Pabuçlar kampananın içine doğru açılarak sürter.' },
          { title: 'El freni (park freni)', desc: 'Genellikle arka tekerlekleri mekanik olarak tutar; aracı park halinde sabit bırakır.' },
          { title: 'Motor freni', desc: 'Gazı kesip vitesle yavaşlama.' },
        ],
      },
      {
        title: 'Fren hidroliği',
        intro: 'Fren hidroliği basıncı ileten sıvıdır. Seviyesi ve kalitesi düzenli kontrol edilmelidir.',
        items: [
          { title: 'Seviye düşüyorsa', desc: 'Balata aşınmış olabilir veya sistemde sızıntı vardır.' },
          { title: 'Zamanla nem çeker', desc: 'Üretici periyodunda değiştirilmelidir.' },
          { title: 'Yağ veya başka sıvı koyma', desc: 'Sadece uygun fren hidroliği kullanılır.' },
        ],
      },
      {
        title: 'Pedal hissi ve arıza belirtileri',
        items: [
          { title: 'Pedal sünger gibi', desc: 'Sistemde hava vardır; servise git.' },
          { title: 'Pedal yere kadar gidiyor', desc: 'Hidrolik kaçağı veya ciddi arıza olabilir.' },
          { title: 'Fren yaparken cızırtı veya gıcırtı', desc: 'Balata bitmiş olabilir.' },
          { title: 'Fren sırasında direksiyon titremesi', desc: 'Disk eğrilmiş olabilir.' },
          { title: 'Araç frende bir yana çekiyor', desc: 'Sağ-sol fren dengesi bozuktur.' },
          { title: 'Fren lambası yanıyor' },
        ],
        warn: 'Fren arızası belirtisini erteleme; hemen kontrol ettir.',
      },
      {
        title: 'ABS',
        intro: 'ABS, ani frende tekerleklerin kilitlenmesini önler ve direksiyon hakimiyetini korumana yardımcı olur.',
        items: [
          { title: 'Pedala sertçe bas ve bırakma', desc: 'Pedalın titremesi normaldir.' },
          { title: 'Pompalama yapma', desc: 'ABS bunu senin yerine yapar.' },
          { title: 'Direksiyonla kaçınma yapabilirsin' },
        ],
        warn: 'ABS lambası yanarsa normal fren çalışır ama kilitlenme koruması devre dışı olabilir; kontrol ettir.',
      },
      {
        title: 'Uzun inişte motor freni',
        intro: 'Uzun ve dik inişte düşük vitese alıp motor frenini kullan. Sürekli frene basmak balataları ısıtır ve frenin tutmamasına yol açar.',
        tip: 'Vitesi boşa alıp inmek tehlikelidir.',
      },
      {
        title: 'Durma mesafesi ve ıslak zemin',
        intro: 'Durma mesafesi, sürücünün tepki mesafesi ile frenin aracı durdurduğu mesafenin toplamıdır. Hız, ıslak zemin, yorgunluk ve aşınmış lastik bu mesafeyi uzatır.',
        items: [
          { title: 'Hız arttıkça mesafe artar' },
          { title: 'Islak ve kaygan zeminde fren mesafesi uzar' },
          { title: 'Fren ve lastik durumu da etkiler' },
        ],
        tip: 'Hızı iki katına çıkarırsan fren mesafesi dört katına yaklaşır.',
      },
      {
        title: 'Bakım, sık hatalar ve sınav tuzakları',
        items: [
          { title: 'Balataları zamanında değiştir' },
          { title: 'Fren hidroliği seviyesini düzenli kontrol et' },
          { title: 'El freni çekili sürme', desc: 'Balataları ısıtır ve yakar.' },
          { title: 'Soru tuzağı', desc: 'Sünger pedal hava, ışık yanması hidrolik/sistem sorunu anlamına gelir.' },
        ],
      },
    ],
  },
  {
    topicId: 'at-lastik',
    steps: [
      {
        title: 'Lastik neden önemlidir?',
        intro: 'Aracın yolla tek temas noktası lastiklerdir. Fren, yol tutuş ve direksiyon hakimiyeti lastiğin durumuna bağlıdır.',
        tip: 'Aracı yola bağlayan tek parça lastiktir.',
      },
      {
        title: 'Lastik basıncı',
        intro: 'Lastik basıncı araç üreticisinin önerdiği değerde olmalı ve lastikler soğukken ölçülmelidir. Değer aracın kılavuzunda veya kapı eşiğindeki etikette yer alır.',
        items: [
          { title: 'Düşük basınç', desc: 'Lastik kenarları aşınır, ısınır, yakıt tüketimi artar, patlama riski doğar.' },
          { title: 'Yüksek basınç', desc: 'Orta bölge aşınır, yol tutuş azalır, sürüş sertleşir.' },
        ],
        tip: 'Basıncı sık sık ve soğukken ölç.',
      },
      {
        title: 'Diş derinliği',
        intro: 'Lastik dişleri suyu yoldan uzaklaştırır. Aşınınca ıslak zeminde yol tutuşu ciddi azalır.',
        items: [
          { title: 'Yasal asgari diş derinliği: 1,6 mm' },
          { title: 'Diş derinliği azaldıkça fren mesafesi uzar' },
          { title: 'Aşınma göstergesi', desc: 'Lastik dişleri arasındaki küçük çıkıntılar sınırı gösterir.' },
        ],
        warn: 'Aşınmış lastikle yağmurda sürmek çok risklidir.',
      },
      {
        title: 'Lastik hasarları',
        intro: 'Yan duvarda şişlik, kesik veya çatlak varsa lastik değiştirilmelidir. Kenar taşa çarpmak lastiği içeriden yaralayabilir.',
        items: [
          { title: 'Şişlik (balon)', desc: 'İçyapı bozulmuştur; patlayabilir.' },
          { title: 'Kesik, çatlak', desc: 'Lastiğin dayanımı azalır.' },
          { title: 'Yaşlanma', desc: 'Kullanılmasa bile lastik zamanla sertleşir ve çatlar.' },
        ],
      },
      {
        title: 'Düzensiz aşınma ne anlatır?',
        items: [
          { title: 'İki kenar aşınmış', desc: 'Basınç düşük.' },
          { title: 'Orta bölge aşınmış', desc: 'Basınç fazla.' },
          { title: 'Tek kenar aşınmış', desc: 'Rot ayarı bozuk olabilir.' },
          { title: 'Parça parça, dalgalı aşınma', desc: 'Balans veya amortisör sorunu olabilir.' },
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
        title: 'Lastik takma ve yedek lastik',
        items: [
          { title: 'Aynı akstaki iki lastik mümkünse aynı cins ve yapıda olmalı' },
          { title: 'Mevsime uygun lastik kullan', desc: 'Kışın kar ve soğuk için kış lastiği daha güvenlidir.' },
          { title: 'Yedek lastiğin basıncını da kontrol et' },
          { title: 'Lastik değişirken aracı düz zeminde ve el freniyle sabitle' },
        ],
      },
      {
        title: 'Su kayması (hidroplaning)',
        intro: 'Yağmurda yüksek hızda lastikler yolla temasını kaybedip su üzerinde kayabilir. Direksiyon tepkisiz hale gelir.',
        ordered: true,
        items: [
          { title: 'Gazı yavaşça bırak' },
          { title: 'Ani fren yapma' },
          { title: 'Direksiyonu ani çevirme, düz tut' },
        ],
        tip: 'Yağmurda hızı azalt, lastik dişi derin olsun.',
      },
      {
        title: 'Özet ve sınav tuzakları',
        items: [
          { title: 'Basıncı soğukken ölç' },
          { title: 'Diş derinliği yasal sınırın altına düşmemeli' },
          { title: 'Direksiyon titremesi: balans. Araç yana çekiyor: rot.' },
        ],
        tip: 'Düşük basınç = kenar aşınması ve fazla yakıt. Yüksek basınç = orta aşınma.',
      },
    ],
  },
  {
    topicId: 'at-bakim',
    steps: [
      {
        title: 'Bakım neden önemli?',
        intro: 'Düzenli bakım arızayı önler, yakıt tasarrufu sağlar, aracın ömrünü uzatır ve kaza riskini azaltır.',
        tip: 'Bakım ertelendikçe masraf ve kaza riski artar.',
      },
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
        title: 'Kırmızı ikaz lambaları',
        items: [
          { title: 'Yağ basıncı', desc: 'Yağ basıncı düşük; motoru durdur.' },
          { title: 'Akü / şarj', desc: 'Şarj sistemi (alternatör, kayış) sorunu.' },
          { title: 'Motor sıcaklığı', desc: 'Motor aşırı ısınıyor.' },
          { title: 'Fren', desc: 'El freni çekili veya fren sistemi sorunu.' },
          { title: 'Emniyet kemeri', desc: 'Kemer takılı değil.' },
        ],
      },
      {
        title: 'Sarı ikaz lambaları',
        items: [
          { title: 'Motor arıza lambası', desc: 'Motor yönetim sisteminde arıza; kontrol ettir.' },
          { title: 'ABS', desc: 'ABS sisteminde sorun var.' },
          { title: 'Lastik basıncı', desc: 'Basınç düşük olabilir.' },
          { title: 'Yakıt rezervi', desc: 'Depoda yakıt azaldı.' },
          { title: 'Airbag', desc: 'Hava yastığı sisteminde arıza olabilir.' },
        ],
      },
      {
        title: 'Yola çıkmadan günlük kontrol',
        intro: 'Kısa bir göz gezdirme çok sorunu önler.',
        items: [
          { title: 'Lastik basıncı ve durumu' },
          { title: 'Motor yağı ve soğutma sıvısı seviyesi' },
          { title: 'Farlar, sinyaller, stop ve fren lambaları' },
          { title: 'Silecekler ve cam suyu' },
          { title: 'Fren hidroliği seviyesi ve fren pedalı hissi' },
          { title: 'Aynalar ve camlar temiz mi' },
        ],
      },
      {
        title: 'Akü ve elektrik sistemi',
        items: [
          { title: 'Akü', desc: 'Motoru çalıştırır, elektrikli parçalara enerji verir.' },
          { title: 'Alternatör', desc: 'Motor çalışırken aküyü şarj eder.' },
          { title: 'Kutup başları', desc: 'Pas ve oksitlenme olmamalı.' },
          { title: 'Sigorta', desc: 'Atarsa aynı değerde sigortayla değiştirilir.' },
        ],
        warn: 'Akü bağlarken veya ayırırken kıvılcım çıkmasına ve yanlış kutba bağlamaya dikkat et.',
      },
      {
        title: 'Periyodik bakım',
        intro: 'Araç, üreticinin belirlediği kilometre veya süre aralıklarında bakıma alınmalıdır.',
        items: [
          { title: 'Yağ ve yağ filtresi' },
          { title: 'Hava ve yakıt filtreleri' },
          { title: 'Fren balataları ve hidrolik' },
          { title: 'Triger seti, buji' },
          { title: 'Soğutma sıvısı' },
        ],
      },
      {
        title: 'Araç muayenesi ve zorunlu donanım',
        intro: 'Araçlar yasal periyodik muayeneden geçmek zorundadır. Muayenede fren, egzoz emisyonu, lastik, ışıklar ve gövde gibi güvenlik unsurları kontrol edilir. Araçta ilk yardım çantası, yangın söndürücü ve reflektör/üçgen uyarı levhası bulunmalıdır.',
        tip: 'Muayenesiz araç trafiğe çıkarılmaz; ceza ve güvenlik riski doğar.',
      },
      {
        title: 'Sık hatalar ve özet',
        items: [
          { title: 'Sarı ışığı bile görmezden gelmek' },
          { title: 'Yalnızca arıza çıkınca bakıma götürmek' },
          { title: 'Kırmızı ışığa rağmen yola devam etmek' },
        ],
        tip: 'Kırmızı: dur. Sarı: kontrol ettir. Yeşil/mavi: bilgi.',
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
          { title: 'Teşekkür eder', desc: 'Yol verene el işaretiyle teşekkür etmek nezakettir.' },
          { title: 'Sabırlı olur', desc: 'Acele edenle yarışmaz.' },
        ],
      },
      {
        title: 'Sinyal ve şerit disiplini',
        items: [
          { title: 'Dönüş ve şerit değişiminden önce sinyal ver' },
          { title: 'Gereksiz yere sol şeridi işgal etme', desc: 'Sol şerit geçiş içindir.' },
          { title: 'Sinyal verip sonra yaptığını kontrol et', desc: 'Açık kalan sinyal yanıltır.' },
        ],
        tip: 'Sinyal izin istemek değil, niyeti bildirmektir.',
      },
      {
        title: 'Yol verme ve fermuar sistemi',
        intro: 'İki şerit tek şeride indiğinde araçlar sırayla birer birer geçer. Sıkıştırmak veya banketten geçmek hem kural dışı hem nezakete aykırıdır.',
        items: [
          { title: 'Sıradakine yol ver' },
          { title: 'Öne geçmek için bankete çıkma' },
          { title: 'Dar yolda yokuş çıkana öncelik tanı' },
        ],
      },
      {
        title: 'Korna ve far kullanımı',
        intro: 'Korna zorunlu haller dışında çalınmaz; özellikle yerleşim yerlerinde gereksiz korna gürültü kirliliği yaratır.',
        items: [
          { title: 'Karşıdan gelene uzun far yapma, kısa fara geç' },
          { title: 'Önündeki aracı kornayla veya farla taciz etme' },
          { title: 'Hastane, okul çevresinde sessiz ol' },
        ],
        tip: 'Korna tehlike uyarısıdır, sinirle basılacak bir düğme değil.',
      },
      {
        title: 'Park ederken adap',
        items: [
          { title: 'Kaldırıma, yaya geçidine veya rampaya park etme' },
          { title: 'Başka aracı kilitleme, çift sıra park etme' },
          { title: 'Engelli park yerini hak sahibi dışında kullanma' },
          { title: 'Çıkış yaparken çevreyi kontrol et' },
        ],
        warn: 'Yanlış park, başkasının hayatını zorlaştırır.',
      },
      {
        title: 'Çevreye saygı',
        items: [
          { title: 'Araçtan çöp, izmarit atma', desc: 'Hem kirletir hem yangın riski doğurur.' },
          { title: 'Müzik sesini kısık tut', desc: 'Siren ve korna sesi duyulmalı.' },
          { title: 'Egzozu ve motoru gürültülü hale getirme' },
          { title: 'Kirli araçla duman salıp çevreyi kirletme' },
        ],
      },
      {
        title: 'Hata yapana nasıl davranılır?',
        intro: 'Başka sürücü hata yapsa bile aynı şekilde karşılık verme. Sakin ol, mesafeni koru ve yoluna devam et.',
        items: [
          { title: 'Kişisel alma' },
          { title: 'Cevap vermek için aracı sıkıştırma' },
          { title: 'Kendi hatanda özür dile (el işareti)' },
        ],
        tip: 'Anlık öfke, saatlerce pişmanlık getirir.',
      },
      {
        title: 'Sınav tuzakları ve özet',
        items: [
          { title: 'Sorular genellikle en güvenli ve saygılı seçeneği ister' },
          { title: 'Sıkıştırma, korna, yol kesme gibi davranışlar yanlış şıktır' },
          { title: 'Sinyal, yol verme ve sabır doğru şıktır' },
        ],
        tip: 'Şüphede kalırsan sabırlı, güvenli ve saygılı davranışı seç.',
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
        title: 'Yaya geçidine yaklaşırken',
        ordered: true,
        items: [
          { title: 'Hızını düşür', desc: 'Geçide yaklaşırken gaz pedalını bırak.' },
          { title: 'Yayaları ara', desc: 'Geçidin iki yanına ve kaldırım kenarına bak.' },
          { title: 'Yaya varsa dur', desc: 'Geçitten önce, geçidi kapatmadan.' },
          { title: 'Yaya tamamen geçince hareket et' },
        ],
      },
      {
        title: 'Yan şerit tuzağı',
        intro: 'Yanındaki şeritte bir araç yaya için durduysa, onu geçme. Durmuş aracın önünden yaya çıkabilir ve görmediğin için çarpabilirsin.',
        tip: 'Yanındaki araç duruyorsa sen de yavaşla ve gerekirse dur.',
      },
      {
        title: 'Yaya geçidi çevresinde yapılmayacaklar',
        items: [
          { title: 'Yaya geçidinde durma veya park etme' },
          { title: 'Kaldırımda gitme veya park etme' },
          { title: 'Yayanın önüne kırarak girme' },
          { title: 'Yayaya korna çalıp korkutma' },
        ],
      },
      {
        title: 'Yaya geçidi olmayan yerler',
        intro: 'Yaya geçidi olmasa bile yola inen yayaya dikkat et. Kavşağa dönerken karşıdan karşıya geçen yayalar önceliklidir.',
        items: [
          { title: 'Dönüşte yayalara yol ver' },
          { title: 'Park halindeki araçların arkasından yaya çıkabilir' },
          { title: 'Yavaşla, göz teması kur' },
        ],
        warn: 'Dönüş yaparken yayanın hızını ve yönünü yanlış tahmin edebilirsin; yavaş ol.',
      },
      {
        title: 'Okul, hastane ve yoğun yaya bölgeleri',
        items: [
          { title: 'Okul önünde hızı düşür, çocuk çıkabileceğini unutma' },
          { title: 'Hastane çevresinde sessiz ve dikkatli ol' },
          { title: 'Pazar yeri, durak ve çarşıda yavaş git' },
        ],
      },
      {
        title: 'Islak yolda ve kapı açarken',
        intro: 'Yağmurda su birikintilerinde hızını düşür; yayaları ıslatma ve görüşünü kaybetme. Kapıyı açmadan önce yan ve arkanı kontrol et; yayaya veya bisikletliye çarpabilirsin.',
        tip: 'Kapıyı açmadan önce ayna ve omuz kontrolü yap.',
      },
      {
        title: 'Yayalar da kurallara uyar',
        intro: 'Yayalar kaldırımı ve yaya geçidini kullanmalı, karşıdan karşıya geçerken sağa sola bakmalıdır. Ama sürücü, yaya hata yapsa bile çarpmamakla yükümlüdür.',
        tip: 'Sürücü, yaya hatası yapsa bile korumakla yükümlüdür.',
      },
      {
        title: 'Sınav tuzakları ve özet',
        items: [
          { title: 'Yayaya yol vermeden geçmek yanlıştır' },
          { title: 'Duran araçların yanından hızlı geçmek yanlıştır' },
          { title: 'Yaya geçidinde park etmek veya durmak yanlıştır' },
        ],
        tip: 'Yavaşla, bak, yol ver.',
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
        title: 'Agresif sürücü davranışları',
        items: [
          { title: 'Sıkıştırma, aşırı yakın takip' },
          { title: 'Sürekli korna ve far' },
          { title: 'Tehlikeli sollama, zikzak çizme' },
          { title: 'Yol kesme, yarışma' },
          { title: 'Hakaret veya el kol hareketi' },
        ],
        warn: 'Bu davranışlar kazaya, cezaya ve kavgaya yol açar.',
      },
      {
        title: 'Öfkeni kontrol altına al',
        items: [
          { title: 'Derin nefes al, sakinleş' },
          { title: 'Provokasyona karşılık verme; kişisel alma' },
          { title: 'Gerekirse güvenli yerde dur ve bekle' },
          { title: 'Yola erken çık; acele etme' },
          { title: 'Müzik veya sakin bir ortam seç' },
        ],
      },
      {
        title: 'Başkası seni sinirlendirirse',
        ordered: true,
        items: [
          { title: 'Mesafeni aç' },
          { title: 'Tepki verme, göz teması kurma' },
          { title: 'Takip edilirsen eve değil, kalabalık ve güvenli yere git' },
          { title: 'Gerekirse yardım iste' },
        ],
      },
      {
        title: 'Dikkati dağıtan şeyler',
        intro: 'Direksiyon başında dikkatini yoldan alan her şey risklidir.',
        items: [
          { title: 'Telefonla konuşma, mesaj yazma' },
          { title: 'Yemek yeme, içecek içme' },
          { title: 'Navigasyon veya radyoyla uğraşma' },
          { title: 'Yolcularla yoğun tartışma' },
        ],
        tip: 'Telefon gerekiyorsa güvenli yerde durup kullan.',
      },
      {
        title: 'Yorgunluk ve uyku',
        intro: 'Uykusuz ve yorgun sürücünün refleksleri yavaşlar, gözler kapanabilir.',
        items: [
          { title: 'Esneme, göz ağırlığı ve şerit kayması uyarıdır' },
          { title: 'Uzun yolda düzenli mola ver' },
          { title: 'Mola yerinde kısa uyku al, kahveye güvenme' },
        ],
        tip: 'Uykulu sürmek de alkollü sürmek kadar tehlikelidir.',
      },
      {
        title: 'Alkol, ilaç ve madde',
        intro: 'Alkol ve bazı ilaçlar dikkat ve tepki süresini bozar. Alkol ve uyuşturucu madde etkisi altında araç kullanılamaz; ceza ve ehliyet kaybı doğurur.',
        items: [
          { title: 'Alkol aldıysan direksiyona geçme' },
          { title: 'Uyku yapan ilaç kullanıyorsan araç kullanma', desc: 'Prospektüste uyarı olup olmadığına bak.' },
          { title: 'Kendin sürmeyecek birini belirle veya taksi kullan' },
        ],
      },
      {
        title: 'Acele ve zaman baskısı',
        items: [
          { title: 'Geç kalmak yerine erken çık' },
          { title: 'Yolu önceden planla' },
          { title: 'Hız kazandığın süre kaza riskine değmez' },
        ],
      },
      {
        title: 'Sınav tuzakları ve özet',
        items: [
          { title: 'Kızgınken kısa bir mola vermek doğrudur' },
          { title: 'Karşılık vermek, kovalamak yanlıştır' },
          { title: 'Telefonu elle kullanmak yanlıştır' },
        ],
        tip: 'Sakin kal, mesafe koru, dikkatini yoldan ayırma.',
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
        title: 'Kimler hassas kullanıcıdır?',
        items: [
          { title: 'Çocuklar' },
          { title: 'Yaşlılar' },
          { title: 'Engelliler (görme, işitme, hareket)' },
          { title: 'Hamileler ve bebek arabalı ebeveynler' },
          { title: 'Bisiklet ve motosiklet sürücüleri' },
        ],
      },
      {
        title: 'Çocuklara dikkat',
        intro: 'Çocuklar tehlikeyi sezemez, mesafeyi ve hızı tahmin edemez, ansızın yola çıkabilir.',
        items: [
          { title: 'Okul, park ve oyun alanı yakınında hızı düşür' },
          { title: 'Duran araç veya top çevresinde çocuk olabileceğini düşün' },
          { title: 'Okul geçidinde dur, çocuklara yol ver' },
          { title: 'Servis ve okul aracının önünden hızlı geçme' },
        ],
        warn: 'Yola yuvarlanan top, arkasından koşan çocuk işaretidir; hemen yavaşla.',
      },
      {
        title: 'Çocuk araçta nasıl taşınır?',
        items: [
          { title: 'Çocuk koltuğu veya uygun emniyet sistemini kullan' },
          { title: 'Küçük çocuğu ön koltukta taşıma' },
          { title: 'Çocuk kilidini etkinleştir' },
          { title: 'Çocuğu araçta yalnız bırakma' },
        ],
      },
      {
        title: 'Yaşlı yayalar',
        intro: 'Yaşlılar yavaş yürür, görmesi ve duyması zayıflayabilir, tepkileri gecikebilir. Onları aceleye getirme; korna çalma, geçmesini sabırla bekle.',
        tip: 'Yaşlıyı acele ettirme, bekle.',
      },
      {
        title: 'Engelli bireyler',
        intro: 'Engelli kişilere yol vermek ve hayatı kolaylaştırmak hem adabın hem yasanın gereğidir.',
        items: [
          { title: 'Beyaz baston kullanan görme engelliye yol ver, dur' },
          { title: 'İşitme engelli yaya sireni, kornayı duymayabilir' },
          { title: 'Tekerlekli sandalye kullananların rampasını ve geçişini kapatma' },
          { title: 'Engelli park yerine, hakkın yoksa park etme' },
        ],
        tip: 'Engelli park yeri ve rampalar engellilere aittir.',
      },
      {
        title: 'Bisiklet ve motosiklet kullanıcıları',
        intro: 'Küçük araçlar görünmesi zor ve darbeye karşı savunmasızdır.',
        items: [
          { title: 'Yanından geçerken yeterli yan mesafe bırak' },
          { title: 'Kavşakta ve dönüşte aynalarını ve kör noktanı kontrol et' },
          { title: 'Kapıyı açmadan önce arkadan gelen var mı bak' },
        ],
      },
      {
        title: 'Hassas kullanıcıya karşı sürüş',
        ordered: true,
        items: [
          { title: 'Yavaşla' },
          { title: 'Mesafeni artır' },
          { title: 'Tepkini önceden hazırla, fren için hazır ol' },
          { title: 'Acele ettirme, korna çalma' },
        ],
      },
      {
        title: 'Sınav tuzakları ve özet',
        items: [
          { title: 'Okul, hastane ve yaya geçidi: yavaşla' },
          { title: 'Engelli park yeri: hakkın yoksa park etme' },
          { title: 'Yaşlı ve çocuk: sabırla bekle' },
        ],
        tip: 'Şüphede kaldığında yavaşla ve yol ver.',
      },
    ],
  },
];
