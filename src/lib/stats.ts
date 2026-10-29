import { questionById } from '@/data/questions';
import { TOPICS } from '@/data/courses';
import type { Attempt } from '@/data/types';
import { sortedAttempts } from './grade';

/** Her denemenin bir öncekine göre doğru farkı (kronolojik). */
export function deltas(attempts: Attempt[]): Map<string, number | null> {
  const m = new Map<string, number | null>();
  sortedAttempts(attempts).forEach((a, i, arr) => m.set(a.id, i === 0 ? null : a.correct - arr[i - 1].correct));
  return m;
}

export function latestByExam(attempts: Attempt[]): Map<string, Attempt> {
  const m = new Map<string, Attempt>();
  for (const a of sortedAttempts(attempts)) m.set(a.examId, a);
  return m;
}

export function topicAccuracy(attempts: Attempt[]) {
  const acc = new Map<string, { correct: number; total: number }>();
  for (const a of attempts) for (const qid of a.questionIds) {
    const q = questionById(qid);
    const ans = a.answers[qid];
    if (!q) continue;
    const e = acc.get(q.topicId) ?? { correct: 0, total: 0 };
    e.total += 1;
    if (ans === q.answer) e.correct += 1;
    acc.set(q.topicId, e);
  }
  return TOPICS.filter((t) => acc.has(t.id)).map((t) => ({ topic: t, ...acc.get(t.id)!, rate: acc.get(t.id)!.correct / acc.get(t.id)!.total }));
}

export const fmtClock = (sec: number) => `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`;
