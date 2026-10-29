import type { CourseId, Question } from './types';
import { RAW_CORE } from './bank/core';
import { RAW_EXTRA } from './bank';


import { seededShuffle } from './questions-util';
export { seededShuffle };

const RAW = [...RAW_CORE, ...RAW_EXTRA];

export const QUESTIONS: Question[] = RAW.map((r, i) => {
  const [topicId, text, correct, w1, w2, w3, explanation, media] = r;
  const id = `q${String(i + 1).padStart(3, '0')}`;
  const courseId = topicId.split('-')[0] as CourseId;
  const order = seededShuffle([0, 1, 2, 3], (i + 1) * 7919);
  const base = [correct, w1, w2, w3];
  const options = order.map((k) => base[k]);
  const answer = order.indexOf(0);
  return { id, courseId, topicId, text, options, answer, explanation, ...(media ? { media } : {}) };
});

const byId = new Map(QUESTIONS.map((q) => [q.id, q]));
export const questionById = (id: string) => byId.get(id);
