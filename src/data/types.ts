import type { Media } from './media';

export type CourseId = 'tc' | 'iy' | 'at' | 'ta';

export interface Course {
  id: CourseId;
  name: string;
  short: string; // TÇ, İY...
  /** Gerçek sınavdaki soru sayısı (B sınıfı e-Sınav: 50 soru) */
  examQuestions: number;
}

export interface Topic {
  id: string;
  courseId: CourseId;
  title: string;
  minutes: number;
  /** Konu anlatımı yazıldı mı? false ise "Yakında" gösterilir. */
  hasLesson: boolean;
}

export interface Question {
  id: string;
  courseId: CourseId;
  topicId: string;
  text: string;
  options: string[]; // 4 şık: A-D
  answer: number; // doğru şıkkın indeksi
  explanation: string;
  media?: Media;
}

export interface LessonStep {
  title: string;
  intro?: string;
  /** Numaralı/öncelik sıralı kutucuklar */
  items?: { title: string; desc?: string }[];
  /** true ise kutular öncelik sırası (1,2,3...) olarak numaralanır */
  ordered?: boolean;
  /** "Akılda kalsın" kutusu */
  tip?: string;
  /** Adımda gösterilecek levha kimlikleri (signMeta) */
  signs?: string[];
  /** Adımda gösterilecek kavşak krokisi */
  scene?: import('./media').SceneSpec;
  /** Kısa vurgu notu (sarı kutu) */
  warn?: string;
}

export interface Lesson {
  topicId: string;
  steps: LessonStep[];
}

export interface ExamSet {
  id: string;
  title: string;
  year: number;
  month: number; // 1-12
  kind: 'cikmis' | 'deneme' | 'yanlislar';
  questionIds: string[];
}

export type Answers = Record<string, number | null>;

export interface Attempt {
  id: string;
  examId: string;
  title: string;
  at: number; // epoch ms
  questionIds: string[];
  answers: Answers;
  durationSec: number;
  correct: number;
  wrong: number;
  blank: number;
  score: number; // 0-100 (her soru 2 puan)
  byCourse: Record<CourseId, { correct: number; total: number }>;
}

export const EXAM_TOTAL = 50;
export const EXAM_MINUTES = 45;
export const PASS_SCORE = 70;
export const PASS_CORRECT = 35;
export const POINTS_PER_QUESTION = 2;
