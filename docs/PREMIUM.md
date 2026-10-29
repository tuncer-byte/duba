# Premium kurulum rehberi

**Model:** tek seferlik, ömür boyu (abonelik değil), ₺99. Ücretsiz kota: toplam 100 soru, bunun 20'si görselli. Konu anlatımları ve levha rehberi ücretsiz kalır.

## Uygulamadaki davranış
- Kota, bir soruya ilk kez cevap verildiğinde harcanır (aynı soru tekrar çözülünce yeniden sayılmaz).
- Kota bitince soru yerine kilit kartı çıkar: "Premium'a geç" veya "Bu soruyu boş geç". Sınav yarım kalmaz.
- Paywall (`/premium`) şu anlarda açılır: kilitli soruya gelindiğinde, ilk deneme sonucunda (kart), ana sayfa bandı, Ayarlar.
- Premium bilgisi cihazda saklanır; açılışta RevenueCat ile eşlenir. "Satın alımı geri yükle" mevcut.

## Sizden gerekenler (Firebase gerekmez)
1. **Apple Developer** ve **Google Play Console** hesapları.
2. Her iki mağazada **non-consumable (bir kez satın alınan)** ürün: `duba_premium_lifetime`, fiyat ₺99.
3. **RevenueCat** hesabı: proje, iOS ve Android uygulamaları, entitlement `premium`, ürünü entitlement'a bağlayın, bir Offering oluşturup `lifetime` paketi olarak ekleyin.
4. RevenueCat **public SDK anahtarları**. Yapı alırken ortam değişkeni olarak verin: `EXPO_PUBLIC_RC_IOS`, `EXPO_PUBLIC_RC_ANDROID` (EAS secrets).
5. Ödeme SDK'sı yerel modül kullandığı için **Expo Go'da çalışmaz**; `eas build --profile development` ile geliştirme yapısı gerekir. Anahtarsız/Expo Go'da satın alma "kullanılamıyor" der.
6. Gizlilik/mağaza metinlerinde satın alma ve geri yükleme ifadeleri.

## Firebase
Şimdilik gerekmiyor: veriler cihazda, ödeme doğrulamasını RevenueCat yapıyor. Hesap/senkronizasyon, uzaktan soru güncelleme veya analitik isterseniz o zaman eklenir.

## Ayarlar
`src/config.ts` → `PREMIUM` (fiyat yedek metni, kota sayıları, ürün/entitlement kimlikleri).
