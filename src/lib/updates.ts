import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Updates from 'expo-updates';

/* OTA kanal yönetimi. Mağaza yapısı "production" kanalıyla gelir; test eden kişi
   Ayarlar'daki sürüm yazısına 7 kez dokunarak "test" kanalına geçer. Seçim cihazda saklanır
   ve her açılışta yeniden uygulanır. */

export type Channel = 'production' | 'test';
const KEY = 'duba.otaChannel';

export const otaEnabled = () => Updates.isEnabled && !__DEV__;

export async function getChannel(): Promise<Channel> {
  const v = await AsyncStorage.getItem(KEY).catch(() => null);
  return v === 'test' ? 'test' : 'production';
}

function applyChannel(ch: Channel) {
  if (!otaEnabled()) return;
  Updates.setUpdateRequestHeadersOverride(ch === 'test' ? { 'expo-channel-name': 'test' } : null);
}

/** Varsa yeni güncellemeyi indirir. reload true ise hemen uygular, değilse sonraki açılışta uygulanır. */
export async function pullUpdate(reload: boolean): Promise<'updated' | 'none' | 'off' | 'error'> {
  if (!otaEnabled()) return 'off';
  try {
    const r = await Updates.checkForUpdateAsync();
    if (!r.isAvailable) return 'none';
    await Updates.fetchUpdateAsync();
    if (reload) await Updates.reloadAsync();
    return 'updated';
  } catch {
    return 'error';
  }
}

/** Açılışta çağrılır: kayıtlı kanalı uygular; test kanalındaysa güncellemeyi arka planda indirir. */
export async function initUpdates() {
  if (!otaEnabled()) return;
  const ch = await getChannel();
  applyChannel(ch);
  if (ch === 'test') await pullUpdate(false);
}

export async function setChannel(ch: Channel) {
  await AsyncStorage.setItem(KEY, ch).catch(() => {});
  applyChannel(ch);
  const r = await pullUpdate(false);
  // Güncelleme olmasa da yeniden başlat: eski kanalın güncellemesi bırakılsın.
  if (r !== 'off') await Updates.reloadAsync().catch(() => {});
  return r;
}

/** Ekranda gösterilecek kısa sürüm bilgisi: kanal ve yüklü güncellemenin ilk 6 hanesi. */
export function buildLabel(ch: Channel) {
  if (!otaEnabled()) return '';
  const id = Updates.updateId && !Updates.isEmbeddedLaunch ? Updates.updateId.slice(0, 6) : 'yerleşik';
  return `${ch === 'test' ? 'Test' : 'Canlı'} · ${id}`;
}
