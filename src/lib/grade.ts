import { COURSES } from '@/data/courses';
import { questionById } from '@/data/questions';
import { POINTS_PER_QUESTION, type Answers, type Attempt, type CourseId, type ExamSet } from '@/data/types';

export function gradeAttempt(exam: Pick<ExamSet, 'id' | 'title' | 'questionIds'>, answers: Answers, durationSec: number, at = Date.now()): Attempt {
  const byCourse = Object.fromEntries(COURSES.map((c) => [c.id, { correct: 0, total: 0 }])) as Attempt['byCourse'];
  let correct = 0, wrong = 0, blank = 0;
  for (const qid of exam.questionIds) {
    const q = questionById(qid);
    if (!q) continue;
    byCourse[q.courseId].total += 1;
    const a = answers[qid];
    if (a === null || a === undefined) blank += 1;
    else if (a === q.answer) { correct += 1; byCourse[q.courseId].correct += 1; }
    else wrong += 1;
  }
  return {
    id: `a-${at}-${Math.floor(Math.random() * 1e4)}`,
    examId: exam.id,
    title: exam.title,
    at,
    questionIds: exam.questionIds,
    answers,
    durationSec,
    correct, wrong, blank,
    score: correct * POINTS_PER_QUESTION,
    byCourse,
  };
}

/** Güncel yanlış havuzu: bir soru son çözülüşünde yanlış yapıldıysa havuzdadır. */
export function wrongPool(attempts: Attempt[]): string[] {
  const last = new Map<string, boolean>(); // qid -> sonuncusu yanlış mı
  for (const at of [...attempts].sort((a, b) => a.at - b.at)) {
    for (const qid of at.questionIds) {
      const a = at.answers[qid];
      if (a === null || a === undefined) continue;
      const q = questionById(qid);
      if (q) last.set(qid, a !== q.answer);
    }
  }
  return [...last.entries()].filter(([, w]) => w).map(([id]) => id);
}

export function courseAccuracy(attempts: Attempt[]): Record<CourseId, { correct: number; total: number }> {
  const acc = Object.fromEntries(COURSES.map((c) => [c.id, { correct: 0, total: 0 }])) as Record<CourseId, { correct: number; total: number }>;
  for (const a of attempts) for (const c of COURSES) {
    acc[c.id].correct += a.byCourse[c.id]?.correct ?? 0;
    acc[c.id].total += a.byCourse[c.id]?.total ?? 0;
  }
  return acc;
}

export const sortedAttempts = (attempts: Attempt[]) => [...attempts].sort((a, b) => a.at - b.at);
