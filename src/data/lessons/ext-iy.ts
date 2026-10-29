import type { Lesson } from '../types';

export const EXT_IY: Lesson[] = [
  // ───────────── İLK YARDIM İLKELERİ ─────────────
  {
    topicId: 'iy-ilkeler',
    steps: [
      {
        title: "İlk yardım nedir?",
        intro: "İlk yardım, kaza veya ani hastalık anında sağlık görevlileri gelene kadar, eldeki imkanlarla yapılan ilk müdahaledir. Tedavi değildir; amacı kazazedeyi hayatta tutmaktır.",
        items: [
          { title: "Yaşamı kurtarmak", desc: "En öncelikli amaç budur." },
          { title: "Durumun kötüleşmesini önlemek", desc: "Kanamayı durdurmak, kırığı oynatmamak gibi." },
          { title: "İyileşmeyi kolaylaştırmak", desc: "Doğru ilk müdahale tedaviyi hızlandırır." },
        ],
        tip: "İlk yardım doktorun yerini tutmaz; doktora giden yolu güvenli kılar.",
      },
      {
        title: "Kim ilk yardımcıdır?",
        intro: "İlk yardım uygulayan kişiye ilk yardımcı denir. Sağlık görevlisi olması şart değildir; eğitim almış veya bilgisi olan herkes olabilir.",
        items: [
          { title: "Olay yerindeki ilk kişidir", desc: "Sağlık ekibi gelmeden önce kazazedenin yanındadır." },
          { title: "Görevi sınırlıdır", desc: "Teşhis koymaz, tedavi etmez; yalnızca ilk yardım uygular." },
          { title: "Sağlık ekibi gelince devreder", desc: "Gördüğü ve yaptığı her şeyi ekibe aktarır." },
        ],
        tip: "Her sürücü, gerektiğinde ilk yardımcı olabilecek bilgiye sahip olmalıdır.",
      },
      {
        title: "Üç temel adım: koru, bildir, kurtar",
        intro: "Olay yerinde sırayla şunları yaparsın:",
        ordered: true,
        items: [
          { title: "Koru", desc: "Ortamı güvenli hale getir, kazayı işaretle, kendini de koru." },
          { title: "Bildir", desc: "Hemen 112 Acil Çağrı Merkezi'ni ara." },
          { title: "Kurtar", desc: "Sağlık ekibi gelene kadar kazazedeye ilk yardımı uygula." },
        ],
        tip: "Sıra: Koru - Bildir - Kurtar. Sınavda sıra sorusu sık gelir.",
      },
      {
        title: "Önce kendi güvenliğin",
        intro: "Kendin zarar görürsen kimseye yardım edemezsin. Kazazedeye yaklaşmadan önce çevredeki tehlikeleri gözden geçir.",
        items: [
          { title: "Trafik", desc: "Yoldan geçen araçlar seni de tehlikeye atar." },
          { title: "Yangın ve patlama", desc: "Yakıt sızıntısı, duman, kıvılcım var mı?" },
          { title: "Elektrik ve zehirli gaz", desc: "Kopmuş kablo veya kapalı ortamda gaz olabilir." },
          { title: "Kan ve vücut sıvıları", desc: "Mümkünse eldiven veya naylon poşet kullan." },
        ],
      },
      {
        title: "Kaza yerini güvenli hale getir",
        intro: "Yeni kazaları ve yangını önlemek için şu sırayı izle:",
        ordered: true,
        items: [
          { title: "Aracın motorunu kapat", desc: "Kontağı kapat, el frenini çek." },
          { title: "Dörtlü flaşörü yak", desc: "Diğer sürücüleri uyar." },
          { title: "Reflektör veya üçgen uyarı levhasını yerleştir", desc: "Kazadan yeterince uzağa koy." },
          { title: "Sigara içilmesine izin verme", desc: "Yakıt buharı yangın çıkarabilir." },
        ],
        tip: "Kaza yerinde ilk iş ortamı güvenli hale getirmektir; yaralıya koşmak değil.",
      },
      {
        title: "112'yi ararken neleri söylemelisin?",
        intro: "Sakin ol, net konuş. Çağrı merkezi kapatmadan telefonu kapatma.",
        items: [
          { title: "Olay yerinin tam adresi", desc: "Yol, kilometre, yakın mahalle veya işaret." },
          { title: "Ne olduğu", desc: "Kaza, yanık, boğulma, zehirlenme..." },
          { title: "Kaç kişinin yaralandığı ve durumları", desc: "Bilinçleri açık mı, kanama var mı?" },
          { title: "Kendi adın ve telefon numaran", desc: "Ekip seni geri arayabilir." },
        ],
        tip: "Acil durumlarda aranacak tek numara 112'dir. 114 yalnızca Zehir Danışma hattıdır.",
      },
      {
        title: "Birden fazla yaralı varsa: önceliği belirle",
        intro: "Önce hayati tehlikesi olan yaralıya bakılır. Bağıran, ağlayan veya ağlayıp hareket eden kişi çoğu zaman en acil olanı değildir.",
        items: [
          { title: "Solumayan veya bilinci kapalı olan önce", desc: "Yaşam tehlikesi en yüksek olandır." },
          { title: "Şiddetli kanaması olan önce", desc: "Hayatı tehdit eden kanama bekletilmez." },
          { title: "Yüksek sesle yardım isteyen sonra", desc: "Konuşabiliyorsa solunumu vardır." },
        ],
        tip: "Sınavda: Önce hayati tehlikesi olan yaralıya müdahale edilir.",
      },
      {
        title: "İlk yardımcının yapmayacakları",
        intro: "İlk yardımcının görevi sınırlıdır; yanlış müdahale zarar verir.",
        items: [
          { title: "İlaç vermez" },
          { title: "Bilinci kapalı kişiye yiyecek veya içecek vermez" },
          { title: "Gerekmedikçe kazazedeyi hareket ettirmez" },
          { title: "Tedavi uygulamaya kalkmaz" },
          { title: "Kazazedeyi yalnız bırakmaz" },
        ],
        warn: "Bilinci kapalıya asla yiyecek veya içecek verilmez.",
      },
      {
        title: "Kazazedeyle nasıl davranılır?",
        intro: "Korku ve panik durumu kötüleştirir. Sakin ve güven veren biri ol.",
        items: [
          { title: "Kendini tanıt ve yardım ettiğini söyle" },
          { title: "Sakin ve yumuşak konuş", desc: "Bilinci kapalı gibi görünse de söylediklerini duyabilir." },
          { title: "Üşümesini önle", desc: "Üstünü ört; ısı kaybı durumu ağırlaştırır." },
          { title: "Kalabalığı uzaklaştır", desc: "İzleyenlerden yardım iste ama müdahaleye engel olmalarına izin verme." },
        ],
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Şu ifadeler genellikle yanlış şıktır:",
        items: [
          { title: "“İlk yardımcı hemen ilaç verir”" },
          { title: "“Susamış yaralıya su verilir”", desc: "Özellikle bilinci kapalı veya ameliyat ihtimali olanda yanlıştır." },
          { title: "“Önce yaralıyı kurtar, sonra güvenliği düşün”" },
          { title: "“Hayati tehlikesi olmayan yaralıya önce bakılır”" },
        ],
        tip: "Doğru kalıp: güvenlik, 112, yaşamsal müdahale. Sakin ol ve ilaç verme.",
      },
    ],
  },

  // ───────────── KAZAZEDENİN DEĞERLENDİRİLMESİ ─────────────
  {
    topicId: 'iy-degerlendirme',
    steps: [
      {
        title: "Değerlendirme neden gerekir?",
        intro: "Doğru müdahale için önce neyin yanlış olduğunu görmek gerekir. Kazazedenin durumu çabuk ve düzenli bir şekilde değerlendirilir; amaç yaşamı tehdit eden sorunları ilk bulmaktır.",
        items: [
          { title: "Olay yeri değerlendirmesi" },
          { title: "Birincil değerlendirme", desc: "Yaşamı tehdit eden durumlar." },
          { title: "İkincil değerlendirme", desc: "Baştan ayağa tarama." },
        ],
        tip: "Önce yaşamı tehdit edenleri bul, ayrıntıya sonra geç.",
      },
      {
        title: "Olay yeri değerlendirmesi",
        intro: "Kazazedeye yaklaşmadan önce çevreye bak ve şunları belirle:",
        items: [
          { title: "Ortam güvenli mi?", desc: "Trafik, yangın, elektrik, gaz." },
          { title: "Ne oldu?", desc: "Kazanın nedeni ve yaralanma şekli." },
          { title: "Kaç yaralı var?", desc: "Hangisi önce müdahale gerektiriyor?" },
          { title: "Ek yardım gerekiyor mu?", desc: "112, itfaiye, polis." },
        ],
      },
      {
        title: "Birincil değerlendirme sırası",
        intro: "Yaşamı doğrudan tehdit eden durumlar şu sırayla kontrol edilir:",
        ordered: true,
        items: [
          { title: "Bilinç", desc: "Omuzlarından hafifçe sarsıp yüksek sesle seslen." },
          { title: "Solunum yolu ve solunum", desc: "Bak, dinle, hisset; en fazla 10 saniye." },
          { title: "Dolaşım ve kanama", desc: "Şiddetli dış kanama var mı?" },
        ],
        tip: "Kontrole bilinçle başla; hayatı tehdit eden kanamayı atlama.",
      },
      {
        title: "Bilinç kontrolü",
        intro: "Kazazedeye adıyla veya “İyi misiniz?” diye seslen, omuzlarından hafifçe silkele.",
        items: [
          { title: "Cevap veriyor, gözlerini açıyor", desc: "Bilinç açık." },
          { title: "Yalnızca ağrıya tepki veriyor", desc: "Bilinç kısmen kapalı." },
          { title: "Hiç tepki yok", desc: "Bilinç kapalı; yardım çağır, solunumu kontrol et." },
        ],
        warn: "Bebekleri ve omurga şüphesi olanları sertçe sarsma.",
      },
      {
        title: "Solunum yolunu aç",
        intro: "Bilinci kapalı kazazedede dil geriye kaçıp hava yolunu tıkayabilir. Bir elini alnına, diğerini çenesinin altına koy; başı hafifçe geriye yatırıp çeneyi kaldır.",
        tip: "Omurga yaralanması şüphesinde boynu gereksiz oynatma; çene itme ile aç.",
      },
      {
        title: "Solunumu kontrol et: bak, dinle, hisset",
        intro: "Başı geriye yatırdıktan sonra yüzünü kazazedenin ağzına yaklaştır ve en fazla 10 saniye kontrol et.",
        items: [
          { title: "Bak", desc: "Göğüs kafesi inip kalkıyor mu?" },
          { title: "Dinle", desc: "Soluk sesi geliyor mu?" },
          { title: "Hisset", desc: "Yanağında soluk hissediyor musun?" },
        ],
        warn: "Normal solunum yoksa (sadece iç çekme, hırıltı dahil) kalp masajına geç.",
      },
      {
        title: "Nabız ve dolaşım",
        intro: "Nabız boyundaki atardamardan (şah damarı) veya bilekten bakılır. Eğitimsiz kişi için ana ölçüt solunumdur; solunum yoksa nabız aramakla vakit kaybetme.",
        items: [
          { title: "Yetişkinde normal nabız", desc: "Dakikada yaklaşık 60-100." },
          { title: "Yetişkinde normal solunum", desc: "Dakikada yaklaşık 12-20." },
          { title: "Bebeklerde nabız kolun iç yanından bakılır" },
        ],
        tip: "Nabız başparmakla bakılmaz; kendi nabzını karıştırırsın. İşaret ve orta parmak kullan.",
      },
      {
        title: "İkincil değerlendirme",
        intro: "Hayati tehlike yoksa ya da giderildiyse kazazedeyi baştan ayağa dikkatle gözden geçir.",
        ordered: true,
        items: [
          { title: "Baş ve yüz", desc: "Kanama, şişlik, kulak veya burundan sıvı." },
          { title: "Boyun ve omurga", desc: "Ağrı veya hassasiyet var mı?" },
          { title: "Göğüs ve karın", desc: "Ağrı, şekil bozukluğu, sertlik." },
          { title: "Kol ve bacaklar", desc: "Kırık, şişlik, hareket ve his kaybı." },
          { title: "Kazazedeyle konuş", desc: "Şikayetini, ilaç kullanıp kullanmadığını, alerjisini sor." },
        ],
      },
      {
        title: "Yaşam bulguları",
        intro: "Kişinin durumunu gösteren bulgular şunlardır:",
        items: [
          { title: "Bilinç düzeyi" },
          { title: "Solunum" },
          { title: "Nabız" },
          { title: "Cilt rengi, ısısı ve nemi", desc: "Solgun, soğuk ve nemli cilt şoku düşündürür." },
          { title: "Göz bebekleri", desc: "Işığa tepki ve eşitlik." },
        ],
        tip: "Yaşam bulguları: bilinç, solunum, nabız, cilt, göz bebeği.",
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Aşağıdaki durumlara dikkat:",
        items: [
          { title: "En önemli kontrol sırası", desc: "Bilinç, solunum, dolaşım (kanama). Sırayı karıştırma." },
          { title: "Solunum kontrolü 10 saniyeden uzun sürmez" },
          { title: "Kazazedeyi sallamaktan çekinme; ama omurga şüphesinde sertçe sarsma" },
          { title: "Nabız bakarken başparmak kullanılmaz" },
        ],
        tip: "Akılda kalsın: Bilinç, solunum, kanama. Sonra baştan ayağa tarama.",
      },
    ],
  },

  // ───────────── TEMEL YAŞAM DESTEĞİ ─────────────
  {
    topicId: 'iy-bys',
    steps: [
      {
        title: "Temel yaşam desteği nedir?",
        intro: "Kalbi veya solunumu durmuş kişiye, ileri tıbbi yardım gelene kadar kan dolaşımını ve oksijeni sürdürmek için yapılan müdahaledir. Kalp masajı ve suni solunumdan oluşur; buna kalp-akciğer canlandırması (KPR) da denir.",
        items: [
          { title: "Beyin birkaç dakika oksijensiz kalırsa kalıcı hasar görür" },
          { title: "Erken müdahale yaşam şansını belirgin artırır" },
          { title: "Eğitimsiz kişi de kalp masajı yapabilir" },
        ],
        tip: "Her dakika önemli. Duraksama, hemen başla.",
      },
      {
        title: "Kalp ve solunum durması belirtileri",
        intro: "Şu bulgular birlikte görülür:",
        items: [
          { title: "Bilinç yok, çağırınca ve sarsınca tepki vermiyor" },
          { title: "Normal solunum yok", desc: "Hiç soluk yok veya yalnızca ara sıra hırıltılı nefes var." },
          { title: "Cilt solgun veya morarmış" },
        ],
        warn: "Hırıltılı, düzensiz solukları normal solunum sayma.",
      },
      {
        title: "Önce güvenlik, sonra bilinç",
        intro: "Kazazedeye yaklaşmadan önce ortam güvenli mi diye bak. Sonra omuzlarından hafifçe sarsıp seslen.",
        ordered: true,
        items: [
          { title: "Ortamı güvenli hale getir" },
          { title: "Bilinci kontrol et" },
          { title: "Bilinç yoksa yardım çağır ve 112'yi ara", desc: "Yanında biri varsa aratıp AED getirtmesini iste." },
          { title: "Solunumu kontrol et" },
        ],
        tip: "Kendi güvenliğin ilk sırada.",
      },
      {
        title: "Solunum kontrolü: en fazla 10 saniye",
        intro: "Kazazedeyi sert zemine sırtüstü yatır. Başı hafifçe geriye yatırıp çeneyi kaldırarak hava yolunu aç. Bak, dinle, hisset yöntemini kullan.",
        warn: "Normal solunum yoksa kalp masajına hemen başla.",
      },
      {
        title: "Göğüs basısı: elleri nereye koyacaksın?",
        intro: "Göğüs kemiğinin alt yarısına, orta noktaya bas. Bir elin topuğunu koy, diğer elini üstüne kenetle.",
        items: [
          { title: "Kollar dirsekten bükülmez, dik durur" },
          { title: "Omuzlar tam elin üzerinde" },
          { title: "Kazazede sert zeminde olmalı" },
        ],
        tip: "Yer: göğüs kemiğinin alt yarısı.",
      },
      {
        title: "Göğüs basısı: derinlik ve hız",
        intro: "Doğru derinlik ve hız kan dolaşımı için çok önemlidir.",
        items: [
          { title: "Derinlik", desc: "Yetişkinde yaklaşık 5-6 cm." },
          { title: "Hız", desc: "Dakikada 100-120 bası." },
          { title: "Her basıdan sonra göğsün tam yükselmesine izin ver", desc: "Elini göğüsten ayırmadan gevşet." },
          { title: "Kesintileri en aza indir" },
        ],
        tip: "Hız ve derinlik: 100-120 bası ve 5-6 cm.",
      },
      {
        title: "30 bası, 2 soluk",
        intro: "Yetişkinde oran 30:2'dir. 30 basıdan sonra başı geriye yatırıp çeneyi kaldır, burnu kapatıp ağızdan ağıza iki soluk ver; her soluk yaklaşık 1 saniye sürsün ve göğsü kaldırsın.",
        tip: "Soluk vermeyi bilmiyorsan veya istemiyorsan yalnızca kesintisiz göğüs basısı uygula.",
      },
      {
        title: "AED (otomatik defibrilatör)",
        intro: "AED, kalbe elektrik şoku uygulayarak ritmi düzeltmeye çalışan cihazdır. Sesli ve görsel yönergeleri vardır, eğitimsiz kişi de kullanabilir.",
        ordered: true,
        items: [
          { title: "Cihazı aç, yönergeyi dinle" },
          { title: "Elektrotları çıplak göğse yapıştır" },
          { title: "Cihaz analiz yaparken kimse kazazedeye dokunmasın" },
          { title: "Şok gerekiyorsa herkesi uzaklaştır ve düğmeye bas" },
          { title: "Şoktan sonra hemen masaja devam et" },
        ],
        warn: "Cihaz hazır olana kadar kalp masajına ara verme.",
      },
      {
        title: "Çocuk ve bebekte farklar",
        intro: "Aynı basamaklar uygulanır, ancak kuvvet ve yöntem küçük bedene uygun olmalıdır.",
        items: [
          { title: "Çocukta tek veya iki elle bası yapılabilir", desc: "Göğüs kalınlığının yaklaşık üçte biri kadar bastır." },
          { title: "Bebekte iki parmakla bası", desc: "Göğüs kemiğinin alt yarısına." },
          { title: "Bebeğe soluk verirken ağız hem ağzı hem burnu kapatır" },
          { title: "Bası hızı yetişkinle aynı", desc: "Dakikada 100-120." },
        ],
        tip: "Çocuk ve bebekte nazik ama etkili ol; aşırı güç kullanma.",
      },
      {
        title: "Solunum varsa: yan yatış",
        intro: "Bilinci kapalı fakat soluyan kazazedeyi yan yatış (koma) pozisyonuna al. Solunum yolu açık kalır, kusmuk boğmaz.",
        ordered: true,
        items: [
          { title: "Yakın kolu yan tarafa dik açıyla yerleştir" },
          { title: "Uzak kolu göğsünün üzerinden geçirip elini yanağına koy" },
          { title: "Uzak taraftaki dizi bük, kendine doğru çevir" },
          { title: "Başı hafif geriye yatık, ağız yere doğru tut" },
        ],
        warn: "Soluyan kazazedeyi sürekli izle; solunum durursa masaja başla.",
      },
      {
        title: "Ne zaman durulur? Sınavda çıkan tuzaklar",
        intro: "Şu durumlardan biri olana kadar masaja ara verme:",
        items: [
          { title: "Sağlık ekibi gelir ve devralır" },
          { title: "Kazazede kendine gelir, soluk almaya başlar" },
          { title: "Çok yorulup devam edemezsin" },
          { title: "Ortam güvenliğin için tehlikeli hale gelir" },
        ],
        tip: "Akılda kalsın: 112, 30 bası, 2 soluk, 100-120 hız, 5-6 cm. Ambulans gelene kadar durma.",
      },
    ],
  },

  // ───────────── KANAMALAR ─────────────
  {
    topicId: 'iy-kanama',
    steps: [
      {
        title: "Kanama nedir, neden tehlikeli?",
        intro: "Kanama, kanın damar dışına çıkmasıdır. Fazla kan kaybı şoka ve ölüme yol açabilir; bu yüzden hızlı kontrol altına alınmalıdır.",
        tip: "Şiddetli kanama dakikalar içinde hayatı tehdit edebilir.",
      },
      {
        title: "Kanama çeşitleri",
        intro: "Kanayan damara göre kanama farklıdır.",
        items: [
          { title: "Atardamar kanaması", desc: "Parlak kırmızı, fışkırır tarzda; en tehlikeli." },
          { title: "Toplardamar kanaması", desc: "Koyu kırmızı, sürekli ve akıcı tarzda." },
          { title: "Kılcal damar kanaması", desc: "Sızıntı şeklinde; genelde kendiliğinden durur." },
        ],
        tip: "Atardamar kanaması en acil olandır.",
      },
      {
        title: "Dış ve iç kanama",
        intro: "Kanın görülüp görülmemesine göre ikiye ayrılır.",
        items: [
          { title: "Dış kanama", desc: "Kan vücut dışına akar; yara görülür." },
          { title: "İç kanama", desc: "Kan vücut içinde kalır; dışarıdan belli olmayabilir." },
        ],
        warn: "İç kanamada dışarıda kan görmemek durumun hafif olduğunu göstermez.",
      },
      {
        title: "Dış kanamada ilk adım: baskı",
        intro: "Yaraya temiz bir bez veya gazlı bezle doğrudan baskı uygula. Bezi kaldırıp bakma; kan geçerse üstüne yenisini ekle ve baskıyı sürdür.",
        ordered: true,
        items: [
          { title: "Eldiven veya poşetle kendini koru" },
          { title: "Yaraya temiz bezle doğrudan bastır" },
          { title: "Kan geçerse bezi çıkarma, üstüne ekle" },
          { title: "Bezi sargıyla hafifçe bağla" },
        ],
        tip: "Doğrudan baskı en etkili ve ilk yöntemdir.",
      },
      {
        title: "Uzvu yükselt, hareketsiz bırak",
        intro: "Yaralı kol veya bacak mümkünse kalp seviyesinin üstüne kaldırılır. Kanama azalır.",
        warn: "Kırık şüphesi varsa uzvu oynatma ve kaldırma.",
      },
      {
        title: "Turnike: son çare",
        intro: "Baskıyla durdurulamayan, uzuvdaki hayatı tehdit eden kanamada son çare olarak uygulanır.",
        items: [
          { title: "Yarının hemen üstüne, kalp tarafına uygulanır" },
          { title: "Dar ip, tel veya kablo kullanılmaz", desc: "Dokuyu keser; geniş bant kullanılmalıdır." },
          { title: "Uygulama saatini not et ve sağlık ekibine bildir" },
        ],
        warn: "Turnikeyi kendiliğinden gevşetme; yalnızca son çare olarak uygula.",
      },
      {
        title: "Burun kanaması",
        intro: "Çoğu zaman tehlikeli değildir ama doğru müdahale gerekir.",
        ordered: true,
        items: [
          { title: "Kişiyi oturt" },
          { title: "Başını öne eğ" },
          { title: "Burun kanatlarını yaklaşık 10 dakika sık" },
          { title: "Ağızdan nefes aldır, burnun üstüne soğuk koy" },
        ],
        warn: "Başı geriye atma; kan yutulur ve mide bulantısı yapar.",
      },
      {
        title: "İç kanama belirtileri",
        intro: "Şu bulgular iç kanamayı düşündürür:",
        items: [
          { title: "Solgunluk, soğuk ve nemli cilt" },
          { title: "Hızlı, zayıf nabız" },
          { title: "Karında sertlik, ağrı veya şişlik" },
          { title: "Ağızdan, makattan veya idrarla kan gelmesi" },
          { title: "Halsizlik, baş dönmesi, bilinç bulanıklığı" },
        ],
        tip: "İç kanamadan şüphelenirsen hemen 112'yi ara.",
      },
      {
        title: "Şok ve şok pozisyonu",
        intro: "Çok kan kaybı şoka yol açar. Solgunluk, soğuk-nemli cilt, hızlı nabız ve hızlı solunum belirtileridir. Kazazedeyi sırtüstü yatırıp ayaklarını yükselt, üstünü ört ve 112'yi ara.",
        items: [
          { title: "Kazazedeyi sırtüstü yatır" },
          { title: "Ayaklarını yaklaşık 30 cm yukarı kaldır" },
          { title: "Üstünü ört, üşütme" },
          { title: "Yiyecek ve içecek verme" },
        ],
        warn: "Baş, boyun veya omurga yaralanması ve kırık şüphesinde ayakları kaldırma.",
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Sık yapılan hatalar sınavda yanlış şık olarak gelir.",
        items: [
          { title: "Yaraya ilk iş turnike uygulamak", desc: "Önce doğrudan baskı." },
          { title: "Burun kanamasında başı geriye atmak" },
          { title: "Yaradaki kanlı bezi çıkarıp yenisini koymak" },
          { title: "Kanayan kişiye su veya yiyecek vermek" },
        ],
        tip: "Akılda kalsın: önce baskı, sonra yükselt, gerekirse 112; şokta ayaklar yukarı.",
      },
    ],
  },

  // ───────────── YANIKLAR ─────────────
  {
    topicId: 'iy-yanik',
    steps: [
      {
        title: "Yanık nedir, nedenleri neler?",
        intro: "Isı, kimyasal madde, elektrik veya radyasyonun deride ve dokuda yaptığı hasardır.",
        items: [
          { title: "Isı yanıkları", desc: "Alev, sıcak su, buhar, sıcak cisim." },
          { title: "Kimyasal yanıklar", desc: "Asit, çamaşır suyu, kireç çözücü." },
          { title: "Elektrik yanıkları", desc: "Giriş ve çıkış noktasında hasar; iç doku da zedelenir." },
          { title: "Güneş yanığı ve radyasyon" },
        ],
      },
      {
        title: "Yanık dereceleri",
        intro: "Yanığın derinliği derecesini belirler.",
        items: [
          { title: "1. derece", desc: "Sadece üst deri; kızarıklık ve ağrı." },
          { title: "2. derece", desc: "Su toplanması (kabarcık), şiddetli ağrı." },
          { title: "3. derece", desc: "Derinin tüm katmanları; beyaz veya kömürleşmiş, çoğu zaman ağrısız." },
        ],
        tip: "3. derece yanıkta sinirler zarar gördüğü için ağrı az olabilir.",
      },
      {
        title: "Yanığın ağırlığını ne belirler?",
        intro: "Yalnızca derece değil, şu etkenler de önemlidir:",
        items: [
          { title: "Yanığın derinliği ve yaygınlığı" },
          { title: "Yanan bölge", desc: "Yüz, el, ayak, genital bölge ve eklemler ciddi sayılır." },
          { title: "Kazazedenin yaşı", desc: "Bebek, çocuk ve yaşlıda risk daha yüksektir." },
          { title: "Solunum yolu yanığı olup olmadığı" },
        ],
        tip: "Küçük bir derinin bile yüzde, ellerde veya genital bölgede yanması ciddi sayılır.",
      },
      {
        title: "İlk adım: yanık kaynağını uzaklaştır",
        intro: "Önce yanmaya sebep olan şeyden uzaklaştır. Giysisi yanıyorsa kişiyi koşturma; yere yatırıp yuvarlanmasını sağla veya battaniyeyle sar. Elektrik yanığında önce akımı kes.",
        warn: "Koşmak alevleri büyütür. Akım kesilmeden elektrik çarpmış kişiye dokunma.",
      },
      {
        title: "Soğutma: akan temiz suyla",
        intro: "Yanık bölgesini en az 10 dakika boyunca serin akan suyla soğut. Su, ısının derine ilerlemesini durdurur ve ağrıyı azaltır.",
        tip: "Buz veya buzlu su kullanma; dokuyu daha çok zedeler.",
      },
      {
        title: "Yanık bölgesindeki takıları ve giysileri çıkar",
        intro: "Şişlik başlamadan yüzük, saat, bilezik gibi takıları çıkar. Yapışmamış giysileri dikkatle uzaklaştır.",
        warn: "Deriye yapışmış giysiyi çekip koparma; çevresini kesip bırak.",
      },
      {
        title: "Yapılmayacaklar",
        intro: "Evde sık yapılan şu hatalardan kaçın:",
        items: [
          { title: "Diş macunu, yoğurt, yağ, salça veya un sürme" },
          { title: "Kabarcıkları patlatma" },
          { title: "Deriye yapışmış giysiyi çekip çıkarma" },
          { title: "Buz uygulama" },
          { title: "Yanığa pamuk sürme, yapışkan bant koyma" },
        ],
        warn: "Yağ ve macun ısıyı hapseder, enfeksiyon riskini artırır.",
      },
      {
        title: "Örtme ve sevk",
        intro: "Soğuttuktan sonra yanığı temiz, yapışmayan bir örtü ile gevşekçe ört. Aşağıdaki durumlarda 112'yi ara:",
        items: [
          { title: "Geniş veya derin yanıklar (2. ve 3. derece)" },
          { title: "Yüz, el, ayak, genital bölge ve eklem yanıkları" },
          { title: "Bebek, çocuk ve yaşlı kazazedeler" },
          { title: "Solunum yolu yanığı şüphesi", desc: "Yüzde isli yanık, ses kısıklığı, öksürük." },
        ],
        tip: "Soğutmadan sonra temiz, yapışmayan örtü; sıkı sarma.",
      },
      {
        title: "Kimyasal ve elektrik yanıkları",
        intro: "Bu yanıklar daha derindir ve özel dikkat ister.",
        items: [
          { title: "Kimyasal yanık", desc: "Bol su ile uzun süre yıka; kimyasalı içeren giysiyi çıkar." },
          { title: "Elektrik yanığı", desc: "Önce akımı kes. İç doku ve kalp etkilenebilir; mutlaka 112." },
          { title: "Gözdeki kimyasal", desc: "Gözü bol su ile dışa doğru yıka ve hemen sağlık kuruluşuna götür." },
        ],
        warn: "Kuru kimyasal toz varsa önce fırçalayıp uzaklaştır, sonra suyla yıka.",
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Şu ifadeler yanlış şıktır:",
        items: [
          { title: "“Yanığa buz koyulur”" },
          { title: "“Kabarcıklar patlatılır”" },
          { title: "“Yoğurt, diş macunu veya yağ sürülür”" },
          { title: "“Yanan kişi koşturulur”" },
        ],
        tip: "Akılda kalsın: Uzaklaştır, en az 10 dakika serin su, temiz örtü, gerekirse 112.",
      },
    ],
  },

  // ───────────── KIRIK, ÇIKIK, BURKULMA ─────────────
  {
    topicId: 'iy-kirik',
    steps: [
      {
        title: "Kırık, çıkık, burkulma farkı",
        intro: "Üçü de kemik ve eklem yaralanmasıdır ama farklıdır.",
        items: [
          { title: "Kırık", desc: "Kemiğin çatlaması veya kopması." },
          { title: "Çıkık", desc: "Eklemi oluşturan kemiklerin yerinden ayrılması." },
          { title: "Burkulma", desc: "Eklem bağlarının zorlanması veya yırtılması." },
        ],
        tip: "Üçünde de ilk yardım ilkesi aynıdır: hareketsiz bırak.",
      },
      {
        title: "Kırık çeşitleri",
        intro: "Kırığın deriyle ilişkisine göre ikiye ayrılır.",
        items: [
          { title: "Kapalı kırık", desc: "Cilt bütündür; kemik içeride kırılmıştır." },
          { title: "Açık kırık", desc: "Cilt yırtılmıştır; kemik görünebilir. Enfeksiyon riski yüksektir." },
        ],
        warn: "Açık kırıkta kanama ve enfeksiyon riski daha fazladır.",
      },
      {
        title: "Kırığı nasıl anlarsın?",
        intro: "Şu bulgular kırık şüphesini artırır:",
        items: [
          { title: "Şiddetli ağrı ve hareket ettirememe" },
          { title: "Şişlik ve morarma" },
          { title: "Uzvun şeklinin bozulması veya kısalması" },
          { title: "Kemik uçlarının sürtünmesi sesi", desc: "Bunu kasten deneme." },
          { title: "Açık kırıkta kemiğin deriden dışarı çıkması" },
        ],
        tip: "Emin değilsen kırık gibi davran.",
      },
      {
        title: "İlk yardımın ana kuralı: hareketsiz bırak",
        intro: "Yaralı bölgeyi oynatma, yerine oturtmaya çalışma. Kırığın altındaki ve üstündeki eklemleri de içine alacak şekilde atel veya sert bir malzeme ile sabitle.",
        warn: "Çıkığı ve kırığı asla yerine oturtmaya çalışma.",
      },
      {
        title: "Atel uygulaması",
        intro: "Atel, kırık bölgeyi sabitleyen sert destektir. Cetvel, tahta, katlanmış gazete veya dergi olabilir.",
        ordered: true,
        items: [
          { title: "Yaralıyı sakinleştir, bölgeyi açıkça gör" },
          { title: "Kırığın altındaki ve üstündeki eklemleri de kapsayacak atel seç" },
          { title: "Atelle uzuv arasına yumuşak dolgu koy" },
          { title: "Bağları kırık hattının üstüne değil, iki yanına bağla" },
          { title: "Sıkı olmasın; parmak uçlarının renk ve ısısını kontrol et" },
        ],
        tip: "Atel kırığın altındaki ve üstündeki eklemi de tutmalıdır.",
      },
      {
        title: "Açık kırık",
        intro: "Önce kanamayı kontrol et, sonra yarayı temiz bezle ört, ardından hareketsiz bırak.",
        items: [
          { title: "Kanamayı yara çevresinden baskı ile kontrol et" },
          { title: "Çıkıntı yapan kemiği içeri itme" },
          { title: "Yarayı temiz, yapışmayan bezle ört" },
          { title: "Kemiğin üzerine doğrudan baskı yapma" },
        ],
        warn: "Çıkan kemiği içeri itmeye veya temizlemeye çalışma.",
      },
      {
        title: "Omurga, boyun ve kafa travması",
        intro: "Boyun veya sırt yaralanması şüphesi varsa kazazedeyi hiç hareket ettirme ve 112'yi ara.",
        items: [
          { title: "Yüksekten düşme, trafik kazası, kafa travması" },
          { title: "Boyun veya sırtta ağrı" },
          { title: "Kollarda veya bacaklarda uyuşma, karıncalanma, hareket kaybı" },
        ],
        warn: "Gereksiz yere başı ve boynu oynatma; bilinci açık kazazedeye kıpırdamamasını söyle.",
      },
      {
        title: "Burkulmada soğuk uygulama",
        intro: "Burkulan bölgeyi dinlendir, bezle sarılı soğuk uygulama yap, hafif sar ve mümkünse yukarı kaldır.",
        tip: "Buzu doğrudan cilde koyma; bez veya havlu araya girsin.",
      },
      {
        title: "Çıkıkta ne yapılır?",
        intro: "Çıkık eklem şeklini yitirir ve çok ağrılıdır. Eklemin yeri bozulmuştur ve hareket ettirilemez.",
        items: [
          { title: "Eklemi bulunduğu pozisyonda sabitle" },
          { title: "Soğuk uygulama yap" },
          { title: "Yerine oturtmaya kalkma" },
          { title: "Sağlık kuruluşuna götür" },
        ],
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Şu ifadeler yanlıştır:",
        items: [
          { title: "“Kırık yerine oturtulur”" },
          { title: "“Çıkık ekleme masaj yapılır”" },
          { title: "“Açık kırıkta kemik içeri itilir”" },
          { title: "“Boyun yaralanmasında kazazede oturtulur”" },
        ],
        tip: "Akılda kalsın: oynatma, sabitle, ört, gerekirse 112.",
      },
    ],
  },

  // ───────────── ZEHİRLENMELER ─────────────
  {
    topicId: 'iy-zehir',
    steps: [
      {
        title: "Zehirlenme nedir?",
        intro: "Vücuda giren bir maddenin hastalık yapması veya zarar vermesidir. Çocuklar, yaşlılar ve kapalı ortamda çalışanlar özellikle risk altındadır.",
        tip: "Zehirlenmede asıl hedef: zehiri uzaklaştır, 112 ve 114'ü ara.",
      },
      {
        title: "Zehir vücuda nasıl girer?",
        intro: "Zehirli maddeler dört yoldan alınabilir.",
        items: [
          { title: "Ağızdan", desc: "İlaç, temizlik maddesi, bozuk gıda." },
          { title: "Solunumla", desc: "Gaz, duman, karbonmonoksit." },
          { title: "Deriden", desc: "Kimyasallar, tarım ilaçları." },
          { title: "Enjeksiyon / sokma", desc: "Böcek, yılan, iğne." },
        ],
      },
      {
        title: "Zehirlenme belirtileri",
        intro: "Zehire göre değişir; sık görülenler:",
        items: [
          { title: "Bulantı, kusma, karın ağrısı" },
          { title: "Baş dönmesi, baş ağrısı, uyuşukluk" },
          { title: "Ağız çevresinde yanık veya leke" },
          { title: "Nefes darlığı, öksürük" },
          { title: "Bilinç bulanıklığı veya bilinç kaybı" },
        ],
        tip: "Ağzı veya cildi yanmışsa asit ve çamaşır suyu gibi bir madde düşün.",
      },
      {
        title: "Genel ilk yardım",
        intro: "Kendini korumayı unutma, sonra şunları yap:",
        ordered: true,
        items: [
          { title: "Kişiyi zehir kaynağından uzaklaştır" },
          { title: "112'yi ara; ayrıca Zehir Danışma Hattı 114 bilgi verir" },
          { title: "Zehirli maddeyi, kabını veya ilaç kutusunu sağlık ekibine göster" },
          { title: "Bilinci ve solunumu izle", desc: "Gerekirse yan yatış veya kalp masajı." },
        ],
        tip: "Zehir Danışma Merkezi numarası: 114.",
      },
      {
        title: "Kendiliğinden kusturma",
        intro: "Zehirlenmede kendiliğinden kusturmaya çalışma. Asit, çamaşır suyu ve petrol ürünleri yemek borusuna ve akciğere ikinci bir zarar verebilir; bilinçsiz kişide boğulmaya yol açar.",
        warn: "Zehirlenmede tuzlu su, sabunlu su veya parmakla kusturma yapılmaz.",
      },
      {
        title: "Karbonmonoksit zehirlenmesi",
        intro: "Kömür sobası, şofben veya çalışan motorun kapalı ortamda ürettiği, renksiz ve kokusuz gazdır. Baş ağrısı, baş dönmesi, bulantı ve uyuşukluk belirtilerinde kişiyi hemen temiz havaya çıkar.",
        ordered: true,
        items: [
          { title: "Kendini korumak için nefesini tut veya ağzını ört" },
          { title: "Pencere ve kapıları aç" },
          { title: "Kişiyi açık havaya çıkar, sırtüstü yatır" },
          { title: "Hemen 112'yi ara" },
        ],
        warn: "Kapalı ortamda elektrik düğmesi, kibrit veya çakmak kullanma; patlama tehlikesi vardır.",
      },
      {
        title: "Ağızdan alınan zehirler",
        intro: "İlaç, temizlik maddesi, bozuk gıda zehirlenmeleri en sık görülenlerdir.",
        items: [
          { title: "Ağızda kalan maddeyi tükürt" },
          { title: "Alınan maddenin adını ve miktarını öğren" },
          { title: "Kutu, şişe veya ambalajı sakla" },
          { title: "Bilinci kapalıysa yan yatış pozisyonu ver" },
        ],
        warn: "Kişiye süt veya başka bir şey verme; yalnızca sağlık ekibi yönlendirirse.",
      },
      {
        title: "Böcek ve yılan sokması",
        intro: "Kişiyi sakin tut, yaralı bölgeyi hareketsiz bırak ve kalp seviyesinin altında tut. Hızla sağlık kuruluşuna ulaştır.",
        items: [
          { title: "Yaralıyı sakinleştir, yürütme" },
          { title: "Yaralı bölgeyi hareket ettirme, yüzük veya saati çıkar" },
          { title: "Sokan hayvanı uzaktan not et veya fotoğrafla" },
          { title: "Yarayı kesme, emme veya sıkı turnike uygulama" },
        ],
        warn: "Yılan sokmasında yarayı kesmek, emmek, buz koymak veya sıkı turnike hatadır.",
      },
      {
        title: "Gıda zehirlenmesi",
        intro: "Bozuk veya mikroplu gıdalarla oluşur. Bulantı, kusma, ishal ve karın ağrısı görülür.",
        items: [
          { title: "Sıvı kaybı ciddi olabilir; sağlık kuruluşuna başvur" },
          { title: "Şüpheli yiyeceği sakla" },
          { title: "Ağır belirtilerde veya çocuk ve yaşlıda 112" },
        ],
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Şu ifadeler yanlıştır:",
        items: [
          { title: "“Zehirlenen kişi kusturulur”" },
          { title: "“Yılan sokan yer kesilip emilir”" },
          { title: "“Zehir danışma hattı 112'dir”", desc: "112 acil çağrı, 114 Zehir Danışma." },
          { title: "“Karbonmonoksitte kişi kapalı odada dinlendirilir”" },
        ],
        tip: "Akılda kalsın: uzaklaştır, kusturma, 112 ve 114, maddeyi göster.",
      },
    ],
  },

  // ───────────── HASTA/YARALI TAŞIMA ─────────────
  {
    topicId: 'iy-tasima',
    steps: [
      {
        title: "Kural: zorunlu değilse taşıma",
        intro: "Kazazedeyi yanlış taşımak yaralanmayı ağırlaştırabilir, özellikle omurga hasarında. Sağlık ekibi gelene kadar olduğu yerde ilk yardım uygulanır.",
        tip: "Sağlık ekibi gelecekse kazazedeyi yerinden oynatma.",
      },
      {
        title: "Hangi durumlarda taşınır?",
        intro: "Sadece kazazede ve sen için hayati tehlike varsa ya da yaşamsal müdahale için yer değiştirmek gerekirse taşıma yapılır.",
        items: [
          { title: "Yangın, patlama veya çökme tehlikesi" },
          { title: "Zehirli gaz ortamı" },
          { title: "Kalp masajı gerekiyor ve zemin elverişsiz" },
          { title: "Araç alev almak üzere veya devrilme riski var" },
        ],
        warn: "Tehlike yoksa taşıma yapma.",
      },
      {
        title: "Taşımadan önce ne yapılır?",
        intro: "Mümkünse önce yaşamı tehdit eden durumlara müdahale et.",
        ordered: true,
        items: [
          { title: "Hava yolunu aç, solunumu kontrol et" },
          { title: "Şiddetli kanamayı kontrol et" },
          { title: "Kırık varsa sabitle" },
          { title: "Yolu, çıkışı ve yardım edecek kişileri belirle" },
        ],
        tip: "Taşımadan önce yaşamsal müdahale, mümkünse sabitleme.",
      },
      {
        title: "Araçtan çıkarma: Rautek",
        intro: "Araçta sıkışmış, hayatı tehlikede olan kazazedeyi çıkarmak için kullanılan hızlı yönteme Rautek manevrası denir. Kazazedenin kolları kavranarak gövde ve baş mümkün olduğunca tek eksende tutulur.",
        tip: "Rautek, araçtan acil kurtarma yöntemidir.",
      },
      {
        title: "Rautek nasıl yapılır?",
        intro: "Kazazedenin arkasına geç ve şu sırayı izle:",
        ordered: true,
        items: [
          { title: "Kontağı kapat, emniyet kemerini çöz" },
          { title: "Ayaklarını pedallardan kurtar" },
          { title: "Kollarını koltuk altından geçirip önüne kavra" },
          { title: "Başı ve gövdeyi tek hat halinde tutarak çek" },
        ],
        warn: "Bu yöntem yalnızca acil tehlikede uygulanır.",
      },
      {
        title: "Motosiklet kazazedesinde kask",
        intro: "Kaskı gereksiz yere çıkarma. Omurga yaralanması ihtimali vardır.",
        items: [
          { title: "Kazazede soluyorsa kaskı çıkarma" },
          { title: "Solunum yolu açılamıyor veya kalp masajı gerekiyorsa çıkar" },
          { title: "Çıkarırken baş ve boyun sabit tutulur, iki kişi gerekir" },
        ],
        tip: "Kask yalnızca zorunluysa çıkarılır.",
      },
      {
        title: "Omurga şüphesinde",
        intro: "Baş, boyun ve gövde aynı doğrultuda, tek parça halinde tutulur. Boyun eğilmez, döndürülmez; mümkünse sağlık ekibi beklenir.",
        items: [
          { title: "Kazazedeye kıpırdamamasını söyle" },
          { title: "Başı iki elle sabitle" },
          { title: "Gerekiyorsa tek parça çevir (kütük gibi)" },
        ],
      },
      {
        title: "Taşırken pozisyon",
        intro: "Bilinci kapalı ama soluyan kazazede yan yatış (koma) pozisyonunda taşınır veya bekletilir; böylece solunum yolu açık kalır. Taşımada sedye ve birden fazla kişi kullanmak daha güvenlidir.",
        items: [
          { title: "Bilinci açık, göğüs yaralısı", desc: "Yarı oturur pozisyon rahatlatır." },
          { title: "Şok bulguları var", desc: "Sırtüstü, ayaklar yukarı (omurga şüphesi yoksa)." },
          { title: "Karın yaralanması", desc: "Dizler bükülü sırtüstü." },
        ],
        tip: "Tek kişiyle taşıma son çaredir.",
      },
      {
        title: "Taşıma yöntemleri",
        intro: "Kazazedenin durumuna ve kişi sayısına göre seçilir.",
        items: [
          { title: "Tek kişiyle", desc: "Sürükleme, sırtta veya kucakta taşıma; son çare." },
          { title: "İki kişiyle", desc: "Kollarla sandalye yapma, ön-arka tutma." },
          { title: "Sedye veya battaniye ile", desc: "En güvenli seçenek." },
        ],
        warn: "Kendi belini zorlama; dizlerini bük, sırtını dik tut.",
      },
      {
        title: "Sınavda çıkan tuzaklar",
        intro: "Şu ifadeler yanlıştır:",
        items: [
          { title: "“Kazazede mutlaka hemen hastaneye taşınmalıdır”" },
          { title: "“Omurga şüphesinde yaralı oturtulur”" },
          { title: "“Rautek her durumda uygulanır”" },
          { title: "“Kaskı her zaman çıkarılır”" },
        ],
        tip: "Akılda kalsın: zorunlu değilse taşıma; gerekiyorsa baş-boyun-gövde tek hatta, Rautek acil kurtarmadır.",
      },
    ],
  },
];
