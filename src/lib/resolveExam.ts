import { buildMockExam, buildPastExamSets, buildPracticeSet } from '@/data/exams';
import { QUESTIONS, seededShuffle } from '@/data/questions';
import { courseById, topicById } from '@/data/courses';
import type { Attempt, ExamSet } from '@/data/types';
import { wrongPool } from './grade';

/**
 * Rota kimliğinden sınav kurar:
 *  - "set-07" / "cm-2026-09" → sabit sınav seti (Deneme Seti / resmî aylık set)
 *  - "hizli"      → 10 soruluk karma hızlı pratik
 *  - "ders-tc"     → bir dersten 20 soruluk pratik
 *  - "kayitli"     → kaydedilen sorular
 *  - "deneme"      → yeni, rastgele 50 soruluk deneme (23/12/9/6 dağılımı)
 *  - "yanlislar"   → yanlış havuzundan pratik
 *  - "konu-<id>"   → bir konunun soruları
 */
export function resolveExam(id: string, attempts: Attempt[], saved: string[] = []): ExamSet | null {
  if (id.startsWith('cm-') || id.startsWith('set-')) return buildPastExamSets().find((s) => s.id === id) ?? null;
  if (id === 'deneme') {
    const n = attempts.filter((a) => a.examId.startsWith('deneme-')).length + 1;
    return buildMockExam(n);
  }
  if (id === 'hizli') return buildPracticeSet('Hızlı pratik', seededShuffle(QUESTIONS.map((q) => q.id), Date.now() % 9973).slice(0, 10), `hizli-${Date.now()}`);
  if (id.startsWith('ders-')) {
    const c = id.slice(5);
    const ids = QUESTIONS.filter((q) => q.courseId === c).map((q) => q.id);
    return ids.length ? buildPracticeSet(`${courseById(c)?.name ?? 'Ders'} pratiği`, seededShuffle(ids, Date.now() % 9973).slice(0, 20), `ders-${c}-${Date.now()}`) : null;
  }
  if (id === 'kayitli') return saved.length ? buildPracticeSet('Kaydedilenler', saved, `kayitli-${Date.now()}`) : null;
  if (id === 'yanlislar') {
    const ids = wrongPool(attempts);
    return ids.length ? buildPracticeSet('Yanlışlarım', seededShuffle(ids, Date.now() % 9973), `yanlislar-${Date.now()}`) : null;
  }
  if (id.startsWith('konu-')) {
    const topicId = id.slice(5);
    const ids = QUESTIONS.filter((q) => q.topicId === topicId).map((q) => q.id);
    const t = topicById(topicId);
    return ids.length ? buildPracticeSet(t ? t.title : 'Konu soruları', seededShuffle(ids, 5), `konu-${topicId}-${Date.now()}`) : null;
  }
  return null;
}
