/**
 * Ürün yapılandırması.
 * OFFICIAL_PAST_EXAMS: Resmî (MEB/ÖSYM) çıkmış soru setleri lisanslı/izinli kaynaktan
 * `src/data/official.generated.ts` içine aktarıldığında true yapılır. false iken uygulama,
 * Duba'nın özgün sorularından kurulmuş "Deneme Seti"lerini gösterir ve bunları
 * "çıkmış soru" olarak ETİKETLEMEZ.
 */
export const OFFICIAL_PAST_EXAMS = false;

export const APP = {
  name: 'Duba',
  version: '1.0.0',
  supportEmail: 'destek@duba.app',
  dailyGoalQuestions: 20,
} as const;

/** Premium (ömür boyu, tek seferlik satın alma) ayarları. */
export const PREMIUM = {
  /** Mağazadan fiyat alınamazsa gösterilen yedek fiyat */
  fallbackPrice: '₺99',
  /** RevenueCat: entitlement ve ürün kimlikleri (mağaza panelinde aynı adla oluşturun) */
  entitlement: 'duba_pro',
  productId: 'duba_premium_lifetime',
  /** RevenueCat public SDK anahtarları (boşsa satın alma devre dışı) */
  rcKeyIos: process.env.EXPO_PUBLIC_RC_IOS ?? '',
  rcKeyAndroid: process.env.EXPO_PUBLIC_RC_ANDROID ?? '',
  /** Ücretsiz kota */
  freeQuestions: 100,
  freeVisual: 20,
} as const;
