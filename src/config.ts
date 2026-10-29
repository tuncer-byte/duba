/**
 * Ürün yapılandırması.
 * OFFICIAL_PAST_EXAMS: Resmî (MEB/ÖSYM) çıkmış soru setleri lisanslı/izinli kaynaktan
 * `src/data/official.generated.ts` içine aktarıldığında true yapılır. false iken uygulama,
 * Duba'nın özgün sorularından kurulmuş "Deneme Seti"lerini gösterir ve bunları
 * "çıkmış soru" olarak ETİKETLEMEZ.
 */
export const OFFICIAL_PAST_EXAMS = false;

/** Demo verisi yükleme (yalnızca geliştirme/önizleme). Yayında kapalı. */
export const ENABLE_DEMO = process.env.EXPO_PUBLIC_ENABLE_DEMO === '1' || (typeof __DEV__ !== 'undefined' && __DEV__);

export const APP = {
  name: 'Duba',
  version: '0.9.0',
  supportEmail: 'destek@duba.app',
  dailyGoalQuestions: 20,
} as const;

/** Premium (ömür boyu, tek seferlik satın alma) ayarları. */
export const PREMIUM = {
  /** Mağazadan fiyat alınamazsa gösterilen yedek fiyat */
  fallbackPrice: '₺99',
  /** RevenueCat: entitlement ve ürün kimlikleri (mağaza panelinde aynı adla oluşturun) */
  entitlement: 'premium',
  productId: 'duba_premium_lifetime',
  /** RevenueCat public SDK anahtarları (boşsa satın alma devre dışı / test modu) */
  rcKeyIos: process.env.EXPO_PUBLIC_RC_IOS ?? '',
  rcKeyAndroid: process.env.EXPO_PUBLIC_RC_ANDROID ?? '',
  /** Ücretsiz kota */
  freeQuestions: 100,
  freeVisual: 20,
} as const;
