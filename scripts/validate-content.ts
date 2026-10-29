/* İçerik bütünlüğü: npm run validate */
import './asset-stub';
import { COURSES, TOPICS } from '../src/data/courses';
import { LESSONS } from '../src/data/lessons';
import { QUESTIONS } from '../src/data/questions';
import { DIAGRAM_IDS, isDiagramId } from '../src/data/diagramIds';

let errors = 0;
const err = (m: string) => { errors++; console.error('✗ ' + m); };

const topicIds = new Set(TOPICS.map((t) => t.id));
const seen = new Map<string, string>();
for (const q of QUESTIONS) {
  if (!topicIds.has(q.topicId)) err(`${q.id}: bilinmeyen konu ${q.topicId}`);
  if (q.options.length !== 4) err(`${q.id}: 4 şık yok`);
  if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4) err(`${q.id}: tekrar eden şık → ${q.text}`);
  if (q.options.some((o) => !o.trim())) err(`${q.id}: boş şık`);
  if (!(q.answer >= 0 && q.answer < 4)) err(`${q.id}: answer geçersiz`);
  if (q.media?.kind === 'diagram' && !isDiagramId(q.media.id)) err(`${q.id}: bilinmeyen diagram ${q.media.id}`);
  if (!q.explanation || q.explanation.length < 15) err(`${q.id}: açıklama eksik`);
  const key = q.text.trim().toLowerCase() + JSON.stringify(q.media ?? null);
  if (seen.has(key)) err(`${q.id}: ${seen.get(key)} ile aynı soru metni`);
  seen.set(key, q.id);
}
for (const t of TOPICS) {
  const n = QUESTIONS.filter((q) => q.topicId === t.id).length;
  if (n < 6) err(`${t.id}: yalnızca ${n} soru`);
  const l = LESSONS.find((x) => x.topicId === t.id);
  if (!l) err(`${t.id}: konu anlatımı yok`);
  else if (l.steps.length < 3) err(`${t.id}: anlatım çok kısa`);
}
for (const c of COURSES) {
  const n = QUESTIONS.filter((q) => q.courseId === c.id).length;
  if (n < c.examQuestions * 3) err(`${c.id}: havuz küçük (${n})`);
  console.log(`${c.name}: ${n} soru`);
}
for (const id of DIAGRAM_IDS) {
  const n = QUESTIONS.filter((q) => q.media?.kind === 'diagram' && q.media.id === id).length;
  if (n < 2) err(`diagram ${id}: en az 2 soru gerekli (${n})`);
}
const media = QUESTIONS.filter((q) => q.media).length;
console.log(`Toplam: ${QUESTIONS.length} soru (${media} medyalı), ${LESSONS.length}/${TOPICS.length} konu anlatımı`);
if (errors) { console.error(`${errors} hata`); process.exit(1); } else console.log('✓ içerik geçerli');
