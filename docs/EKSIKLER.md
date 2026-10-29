# Eksikler ve durum listesi

Son güncelleme: 29 Ekim 2026 · Sürüm 0.9.0

## Tamamlananlar

| Alan | Durum |
|---|---|
| 7 tasarım ekranı (ana sayfa, sınavlar, konular, sınav, sonuç, ilerleme, konu anlatımı) | ✅ Tasarıma göre kodlandı; renk paleti (teal + şeftali) uygulandı |
| Soru çözme + sınav simülasyonu (50 soru / 45 dk / 70 puan, 23-12-9-6 dağılımı) | ✅ |
| Deneme setleri, net takibi, denemeler arası fark | ✅ |
| Yanlışlarım, Kaydedilenler (Sonra bak), hızlı pratik, ders/konu pratiği | ✅ |
| 33 konu, adım adım anlatım (sesli okuma, yazı boyutu) | ✅ |
| Ehliyet süreci (5 adım) | ✅ |
| Trafik işaretleri rehberi (33 levha) | ✅ |
| Görselli sorular: 66 levha + 16 kavşak krokisi | ✅ |
| 784 özgün soru (340 görselli), 3 bağımsız denetim turu | ✅ |
| Karşılama, profil, sınav tarihi geri sayımı, günlük hedef, seri | ✅ |
| Ayarlar, gizlilik/kullanım/içerik metinleri, geri bildirim | ✅ |
| Hata ekranı, yerel kayıt (çevrimdışı), veri sıfırlama | ✅ |
| Simge, açılış ekranı, EAS yapı ayarları | ✅ |
| Otomatik kontroller (`validate`, `test`, `typecheck`) | ✅ |
| Rakip analizi | ✅ `docs/RAKIP-ANALIZI.md` |

## Dış bağımlılığı olan eksikler (kodla çözülemez)

| # | Eksik | Neden / yapılacak |
|---|---|---|
| 1 | **Resmî 2020+ çıkmış sorular** | MEB/ÖSYM telifli. Yazılı izin/lisans gerekir. Hazır içe aktarma hattı var (`scripts/import-official.ts`, `OFFICIAL_PAST_EXAMS` bayrağı). Şimdilik "Deneme Seti" adıyla özgün sorular. |
| 2 | **Video sorular** | Altyapı (`expo-video`) hazır; video içeriği yok. Çekim veya lisanslı video gerekir. |
| 3 | **Gerçek cihaz testi** | Yalnızca web önizleme + tip kontrolü yapıldı. iOS/Android'de denenmeli (`npx expo start`). |
| 4 | **Hukuki inceleme** | Gizlilik/kullanım metinleri taslaktır; avukat onayı ve KVKK değerlendirmesi gerekir. |
| 5 | **İçerik uzman incelemesi** | Özellikle kavşak krokileri ve mevzuat ifadeleri için eğitmen/uzman son kontrolü. |
| 6 | **Mağaza varlıkları** | Ekran görüntüleri, açıklama, geliştirici hesapları, imzalama anahtarları (`docs/MAGAZA.md`). |
| 7 | **Destek e-postası / alan adı** | `destek@duba.app` yer tutucudur; gerçek adres ayarlanmalı (`src/config.ts`). |

## Bilinen sınırlar / sonraki sürüm

- Yalnızca açık tema (karanlık mod yok).
- Bildirim, analitik, çökme raporlama yok (gizlilik gereği bilinçli; istenirse eklenir).
- Hesap/senkronizasyon yok; veriler cihazda tutulur.
- "Dik iniş" levhası çizimi yaklaşık.
- Dönel kavşak krokisi çizici hazır, soru üretilmedi.
- Kalan tasarımlar geldikçe ilgili ekranlar aynı yaklaşımla eklenecek.
