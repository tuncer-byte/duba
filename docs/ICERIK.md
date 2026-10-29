# İçerik rehberi

Duba'nın tüm içeriği kodla birlikte gelir (çevrimdışı çalışır). Her değişiklikten sonra:

```bash
npm run validate   # içerik bütünlüğü (şıklar, tekrarlar, konu başına soru, anlatım var mı)
npm test           # puanlama / sınav kurma / levha eşleşmesi testleri
npm run typecheck
```

## Mevcut içerik

| Ders | Konu | Soru |
|---|---|---|
| Trafik ve Çevre | 14 | 682 (levha, kroki, gösterge dahil) |
| İlk Yardım | 8 | 191 |
| Araç Tekniği | 7 | 198 |
| Trafik Adabı | 4 | 82 |
| **Toplam** | **33** | **1153** (459 görselli) |

Tüm sorular **Duba için özgün yazılmıştır**; üç bağımsız denetim turundan geçmiştir (aşağıya bakın). Resmî çıkmış soru değildir.

## Soru eklemek

`src/data/bank/` altındaki bir dosyaya satır ekle: `[konuId, 'soru', 'DOĞRU şık', 'yanlış1', 'yanlış2', 'yanlış3', 'açıklama']`.
**Doğru şık daima ilk sıradadır**; yükleme sırasında deterministik karıştırılır. Yeni dosya açarsan `src/data/bank/index.ts` içine ekle.
Kurallar: tek net doğru, "hepsi/hiçbiri" yok, ceza/puan rakamı yazma (yıllık değişir), emin olmadığın sayıyı yazma.

## Konu anlatımı eklemek / düzeltmek

`src/data/lessons.ts`, `lessons/tc.ts`, `lessons/other.ts`. Her konu 4–6 adımdır; adım = başlık + giriş + (opsiyonel) kutucuklar + "Akılda kalsın".

## Trafik levhası eklemek

1. `src/data/signMeta.ts` → `SIGN_META` listesine `{id, name, group, hint}` ekle.
2. `src/components/Sign.tsx` → `SIGNS` listesine aynı `id` ile çizimi ekle (100×100 SVG).
3. `npm test` (kimlik eşleşmesi kontrol edilir). Levha soruları (anlamı + grubu) **otomatik üretilir**.

## Kavşak krokisi sorusu eklemek

`src/data/bank/scenes.ts` → `DEFS` listesine kroki ekle. Araçlar sağ şeritte ilerler; `from` (S/N/E/W), `go` (straight/left/right), isteğe bağlı levha ve ışık. Her krokiden iki soru üretilir. **Kuralı mutlaka doğrula** (sağdan gelen, dönen düz gidene yol verir, ana yol/tali yol, ambulans).

## Video soruları

Altyapı hazırdır (`expo-video`): bir soru satırının 8. elemanına `{ kind: 'video', uri: 'https://…/video.mp4' }` ekle. Henüz **video içerik yoktur**; çekim/lisanslı video temin edilmelidir. Dosyaları CDN'de tutmanı öneririz (uygulama boyutunu şişirmemek için).

## Resmî çıkmış soruları eklemek (2020 ve sonrası)

**Önemli:** MEB/ÖSYM sınav sorularının telif hakkı kurumlara aittir. Toplu kopyalama yapılmamıştır. Eklemek için önce **yazılı kullanım izni / lisans** alın.
İzin alındıktan sonra:

1. Soruları şu biçimde bir JSON'a koyun: `[{ "set": {"id":"cm-2026-09","title":"Eylül 2026 Soruları","year":2026,"month":9}, "questions":[{"topicId":"tc-kavsak","text":"…","options":["A","B","C","D"],"answer":0,"explanation":"…"}] }]` (`answer` = doğru şık dizini).
2. `npx tsx scripts/import-official.ts sorular.json` → `src/data/official.generated.ts` üretilir.
3. `src/config.ts` içinde `OFFICIAL_PAST_EXAMS = true` yapın. Uygulama otomatik olarak "Çıkmış Sorular" başlığına ve ay/yıl filtrelerine geçer.
4. Görselli resmî soruların görsellerini de lisanslayın; `media` alanıyla bağlayın.

## Denetim kaydı

- Soru bankası (TÇ / İY-AT-TA) ve konu anlatımları, yazarlardan bağımsız üç denetçi tarafından kural/mevzuat açısından tarandı; bulunan 12+ sorunlu madde düzeltildi (ör. dönel kavşakta giriş yönü, yokuşta park tekerlek yönü, kusturma uyarısı, belirsiz şıklar).
- **Yayın öncesi öneri:** sürücü kursu eğitmeni veya MEB müfredatına hâkim bir uzmanla son bir içerik incelemesi; ayrıca mevzuat değişiklikleri için (ör. 2026'daki KTK değişikliği yaptırımları) mevzuat.gov.tr üzerinden teyit.
