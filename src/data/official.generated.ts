import type { Raw } from './rawTypes';

/**
 * Resmî çıkmış soru setleri (scripts/import-official.ts ile üretilir; docs/ICERIK.md).
 * Şu an boş: kullanım izni alınmış resmî içerik eklenmedi.
 */
export interface OfficialSet { id: string; title: string; year: number; month: number; questions: Raw[] }
export const OFFICIAL_SETS: OfficialSet[] = [];
