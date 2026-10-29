import { Platform } from 'react-native';
import { PREMIUM } from '@/config';

/* RevenueCat sarmalayıcısı. SDK yalnızca gerçek (dev/production) yapılarda ve anahtar tanımlıysa devreye girer.
   Expo Go, web veya anahtarsız ortamda "kullanılamaz" döner. */

type PurchasesModule = typeof import('react-native-purchases').default;
let P: PurchasesModule | null = null;
let ready = false;

export type BuyResult = 'ok' | 'cancel' | 'unavailable' | 'error';

export function purchasesLive() { return ready; }

export async function initPurchases(): Promise<void> {
  if (ready || Platform.OS === 'web') return;
  const key = Platform.OS === 'ios' ? PREMIUM.rcKeyIos : PREMIUM.rcKeyAndroid;
  if (!key) return;
  try {
    const mod = require('react-native-purchases');
    P = (mod.default ?? mod) as PurchasesModule;
    P.configure({ apiKey: key });
    ready = true;
  } catch { P = null; ready = false; }
}

export async function storePrice(): Promise<string | null> {
  if (!ready || !P) return null;
  try {
    const off = await P.getOfferings();
    const pkg = off.current?.lifetime ?? off.current?.availablePackages?.[0];
    return pkg?.product.priceString ?? null;
  } catch { return null; }
}

/** Mağazadaki güncel durum: true/false, bilinmiyorsa null (çevrimdışı vb.) */
export async function checkPremium(): Promise<boolean | null> {
  if (!ready || !P) return null;
  try {
    const info = await P.getCustomerInfo();
    return !!info.entitlements.active[PREMIUM.entitlement];
  } catch { return null; }
}

export async function buyPremium(): Promise<BuyResult> {
  if (!ready || !P) return 'unavailable';
  try {
    const off = await P.getOfferings();
    const pkg = off.current?.lifetime ?? off.current?.availablePackages?.[0];
    if (!pkg) return 'unavailable';
    const { customerInfo } = await P.purchasePackage(pkg);
    return customerInfo.entitlements.active[PREMIUM.entitlement] ? 'ok' : 'error';
  } catch (e) {
    return (e as { userCancelled?: boolean })?.userCancelled ? 'cancel' : 'error';
  }
}

export async function restorePremium(): Promise<BuyResult> {
  if (!ready || !P) return 'unavailable';
  try {
    const info = await P.restorePurchases();
    return info.entitlements.active[PREMIUM.entitlement] ? 'ok' : 'error';
  } catch { return 'error'; }
}
