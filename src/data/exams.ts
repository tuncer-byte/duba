import { OFFICIAL_PAST_EXAMS } from '@/config';
import { COURSES } from './courses';
import { OFFICIAL_SETS } from './official.generated';
import { QUESTIONS, seededShuffle } from './questions';
import type { CourseId, ExamSet } from './types';

export const MONTHS_TR = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

/** Gerçek sınav dağılımına (23/12/9/6) göre 50 soruluk set kurar. */
export function buildBlueprintSet(seed: number, pool = QUESTIONS): string[] {
  const out: string[] = [];
  for (const c of COURSES) {
    const ofCourse = pool.filter((q) => q.courseId === c.id);
    const shuffled = seededShuffle(ofCourse, seed * 31 + c.examQuestions);
    // Havuz küçükse tekrar etmeden mümkün olduğunca al
    out.push(...shuffled.slice(0, c.examQuestions).map((q) => q.id));
  }
  return seededShuffle(out, seed * 17 + 3);
}

/**
 * Sınav setleri.
 *  - OFFICIAL_PAST_EXAMS açıksa: resmî aylık çıkmış soru setleri (official.generated.ts)
 *  - kapalıysa: özgün sorulardan deterministik "Deneme Seti N" (çıkmış soru olarak etiketlenmez)
 */
export const SYNTHETIC_SET_COUNT = 24;

export function buildPastExamSets(now = new Date()): ExamSet[] {
  if (OFFICIAL_PAST_EXAMS && OFFICIAL_SETS.length) {
    return OFFICIAL_SETS.slice().sort((a, b) => b.year * 12 + b.month - (a.year * 12 + a.month)).map((o) => ({
      id: o.id, title: o.title, year: o.year, month: o.month, kind: 'cikmis' as const,
      questionIds: QUESTIONS.filter((q) => o.questions.some((r) => r[1] === q.text)).map((q) => q.id),
    }));
  }
  void now;
  return Array.from({ length: SYNTHETIC_SET_COUNT }, (_, i) => {
    const n = SYNTHETIC_SET_COUNT - i;
    return { id: `set-${String(n).padStart(2, '0')}`, title: `Deneme Seti ${n}`, year: 0, month: 0, kind: 'cikmis' as const, questionIds: buildBlueprintSet(100 + n) };
  });
}

export function buildMockExam(n: number): ExamSet {
  const seed = 9000 + n * 13 + Date.now() % 997;
  return { id: `deneme-${n}-${Date.now()}`, title: `Deneme Sınavı ${n}`, year: 0, month: 0, kind: 'deneme', questionIds: buildBlueprintSet(seed) };
}

export function buildPracticeSet(title: string, ids: string[], id: string): ExamSet {
  return { id, title, year: 0, month: 0, kind: 'yanlislar', questionIds: ids };
}

export const courseOfQuestion = (qid: string): CourseId | undefined => QUESTIONS.find((q) => q.id === qid)?.courseId;
