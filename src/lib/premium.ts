import { PREMIUM } from '@/config';
import { questionById } from '@/data/questions';

export interface FreeStatus {
  usedTotal: number;
  usedVisual: number;
  leftTotal: number;
  leftVisual: number;
}

export function freeStatus(seen: string[]): FreeStatus {
  let visual = 0;
  for (const id of seen) if (questionById(id)?.media) visual++;
  return {
    usedTotal: seen.length,
    usedVisual: visual,
    leftTotal: Math.max(0, PREMIUM.freeQuestions - seen.length),
    leftVisual: Math.max(0, PREMIUM.freeVisual - visual),
  };
}

export type LockReason = 'total' | 'visual';

/** Soru bu kullanıcı için kilitli mi? (premium değilse ve kota bittiyse) */
export function lockReason(qid: string, seen: string[], premium: boolean): LockReason | null {
  if (premium || seen.includes(qid)) return null;
  const st = freeStatus(seen);
  if (st.leftTotal <= 0) return 'total';
  if (questionById(qid)?.media && st.leftVisual <= 0) return 'visual';
  return null;
}
