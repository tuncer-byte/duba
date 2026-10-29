# Duba — Ehliyet Hazırlık (Türkiye, B sınıfı)

Canlı sayfa: https://tuncer-byte.github.io/duba/


Expo (React Native) + TypeScript + expo-router. Türkçe arayüz, tamamen çevrimdışı.

## Çalıştırma

```bash
npm install
npx expo start        # i / a tuşu ile simülatör, veya Expo Go ile QR
npm run web           # tarayıcıda önizleme
```

## Kontroller

```bash
npm run typecheck
npm run validate      # içerik bütünlüğü
npm test              # puanlama ve sınav mantığı
```

## Yapı

- `src/app` — ekranlar (expo-router)
- `src/components` — arayüz, simgeler, levha ve kavşak çizimleri
- `src/data` — dersler, konular, sorular (`bank/`), konu anlatımları
- `src/lib`, `src/store` — puanlama, istatistik, yerel kayıt
- `src/config.ts` — özellik bayrakları (`OFFICIAL_PAST_EXAMS`, demo, destek e-postası)
- `design/` — tasarım PNG'leri
- `docs/` — rakip analizi, içerik rehberi, eksikler, mağaza listesi

## Belgeler

- [Eksikler ve durum](docs/EKSIKLER.md)
- [İçerik rehberi](docs/ICERIK.md)
- [Rakip analizi](docs/RAKIP-ANALIZI.md)
- [Mağaza listesi](docs/MAGAZA.md)
