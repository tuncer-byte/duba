# Görsel kaynakları ve lisanslar

Uygulamadaki **trafik levhaları** ve **araç tekniği görselleri** Wikimedia Commons'tan alınmıştır. Dosya adı, yazar, lisans ve sayfa bağlantılarının tamamı `design/third-party/manifest.json` ve `src/data/credits.ts` içindedir; uygulamada Ayarlar → "Görsel kaynakları" ekranında gösterilir.

- **Trafik levhaları (85 adet):** "SVG road signs in Turkey" koleksiyonu. Çoğunlukla Gigillo83 çizimleri, lisans CC BY-SA 4.0 (bazıları kamu malı). Görseller PNG'ye çevrilip yeniden boyutlandırılmıştır (`assets/signs`). Kaynak SVG'ler `design/third-party/signs` altındadır.
- **Araç görselleri (15 adet):** CC0, kamu malı, CC BY 2.0, CC BY-SA 3.0/4.0 lisanslı fotoğraf ve şemalar (`assets/photos`). Ayrıntı: `src/data/credits.ts`.
- Levhası bulunmayan 6 işaret (çukur, T kavşağı, 20/110/120 hız, taksi durağı) için Duba'nın kendi çizimi yedek olarak kullanılır (`src/components/Sign.tsx`).

**CC BY-SA notu:** Görseller uygulama kodundan ayrı varlıklar olarak kullanılır; görsellerin kendisi (ve onlardan türetilen PNG'ler) CC BY-SA 4.0 koşullarına tabidir: yazar belirtilmeli, lisans bağlantısı verilmeli, değişiklik yapıldığı (yeniden boyutlandırma/PNG dönüşümü) belirtilmeli ve türev görseller aynı lisansla paylaşılmalıdır. Mağaza yayını öncesinde hukuki incelemeden geçirilmesi önerilir.
