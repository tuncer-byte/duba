# Mağaza yayın listesi

## Kimlik
- Ad: **Duba – Ehliyet Hazırlık**
- Paket / bundle: `com.tunadev58.duba` (gerekirse `app.json` içinde değiştirin)
- Sürüm: 0.9.0 (`eas.json` production profili build numarasını otomatik artırır)

## Kısa açıklama (≤80 karakter)
Ehliyet sınavına sade ve adım adım hazırlan: deneme, konu anlatımı, levhalar.

## Uzun açıklama (taslak)
Duba, B sınıfı ehliyet yazılı sınavına hazırlananlar için sade bir uygulamadır. 50 soruluk, 45 dakikalık sınav simülasyonu, konu bazlı pratik, yanlışlarını tekrar etme, adım adım konu anlatımı, trafik işaretleri rehberi ve ehliyet süreci haritası tek yerde. Verilerin cihazında kalır, reklam yoktur.
Not: Sorular Duba için özgün hazırlanmıştır; resmî sınav soruları değildir ve başarı garantisi verilmez.

## Yayın öncesi kontrol listesi
- [ ] Apple Developer ve Google Play Console hesapları
- [ ] `npx eas login` · `npx eas build -p android --profile production` / `-p ios`
- [x] Ekran görüntüleri: `store/screenshots/ios` (1290×2796, iPhone 6,9") ve `store/screenshots/android` (1080×1920), 6'şar adet 3B telefon mockup'ı. Yeniden üretmek için: ekranları `store/raw/` içine 1170×2478 koy, `python store/render.py` çalıştır.
- [ ] Gizlilik politikası için herkese açık URL (uygulama içi metin `src/data/legal.ts`; web'de yayınlanmalı)
- [ ] Veri güvenliği formu: veri toplanmıyor, cihaz içi depolama
- [ ] Yaş derecelendirmesi: herkes
- [ ] Destek e-postası: `src/config.ts` içindeki `supportEmail`
- [ ] Gerçek cihazlarda manuel test (sınav süresi, uygulama arka plana alma, sesli okuma)
- [ ] Hukuki ve içerik incelemesi (`docs/EKSIKLER.md`)
