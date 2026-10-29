import { APP } from '@/config';

/** Uygulama içi hukuki metinler. Yayın öncesi hukuk danışmanınca gözden geçirilmelidir. */
export const LEGAL = {
  privacy: {
    title: 'Gizlilik politikası',
    body: [
      `${APP.name}, ehliyet sınavına hazırlanan kullanıcılar için geliştirilmiş bir çalışma uygulamasıdır.`,
      '# Hangi verileri işliyoruz?',
      'Adın (yalnızca selamlama için), sınav tarihin, çözdüğün sınavlar, cevapların, konu ilerlemen ve kaydettiğin sorular.',
      '# Bu veriler nerede tutulur?',
      'Tüm veriler yalnızca cihazında saklanır. Duba sunucularına gönderilmez, üçüncü taraflarla paylaşılmaz ve reklam amacıyla kullanılmaz. Uygulamayı silersen veya "Verilerimi sıfırla"yı seçersen veriler silinir.',
      '# Satın alma (Premium)',
      'Premium satın alma işlemi App Store / Google Play üzerinden yapılır; ödeme bilgilerine biz erişmeyiz. Satın almanın doğrulanması için RevenueCat hizmeti, anonim bir kullanıcı kimliği ve satın alma durumunu işler. Başka kişisel veri paylaşılmaz.',
      '# İzinler',
      'Uygulama konum, kamera, mikrofon, rehber veya depolama izni istemez. Sesli okuma özelliği cihazın kendi metin okuma motorunu kullanır.',
      '# Çocuklar',
      'Uygulama, ehliyet başvuru yaşındaki (18+) kullanıcılar için tasarlanmıştır.',
      '# İletişim',
      `Sorularınız için: ${APP.supportEmail}`,
    ],
  },
  terms: {
    title: 'Kullanım koşulları',
    body: [
      `${APP.name} bir eğitim ve çalışma aracıdır; MEB, ÖSYM veya başka bir kamu kurumunun resmî uygulaması değildir.`,
      '# Sorumluluk',
      'Uygulamadaki sorular ve anlatımlar hazırlık amaçlıdır. Mevzuat, ücretler ve sınav kuralları değişebilir; güncel bilgiyi sürücü kursundan ve resmî kaynaklardan teyit etmelisin. Uygulamanın sınav sonucunu garanti etmediğini kabul edersin.',
      '# Kullanım',
      'Uygulamayı kişisel ve ticari olmayan çalışma amacıyla kullanabilirsin. İçeriği kopyalayıp dağıtamazsın.',
    ],
  },
  content: {
    title: 'İçerik hakkında',
    body: [
      'Soru bankası ve konu anlatımları Duba ekibi tarafından özgün olarak hazırlanmıştır; Karayolları Trafik Kanunu, yönetmelikleri ve MEB ehliyet müfredatı esas alınmıştır.',
      'Sınav setleri bu özgün sorulardan, gerçek e-Sınav ders dağılımına (23 Trafik ve Çevre, 12 İlk Yardım, 9 Araç Tekniği, 6 Trafik Adabı) uygun kurulur. Bunlar resmî çıkmış sorular değildir.',
      'Trafik levhası ve kavşak çizimleri Duba tarafından hazırlanmış illüstrasyonlardır.',
      'Hata bulursan Ayarlar > Geri bildirim ile bize yaz; içerik düzeltmeleri güncellemeyle yayımlanır.',
    ],
  },
} as const;
