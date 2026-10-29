import type { Media } from './media';

/**
 * Soru bankası satırı. Doğru şık HER ZAMAN ilk sıradadır; yükleme sırasında şıklar
 * deterministik karıştırılır.
 * [konuId, soru metni, DOĞRU şık, yanlış1, yanlış2, yanlış3, açıklama, (opsiyonel) medya]
 */
export type Raw = [
  topicId: string, text: string, correct: string, w1: string, w2: string, w3: string, explanation: string, media?: Media,
];
