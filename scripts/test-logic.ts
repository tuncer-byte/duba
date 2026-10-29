/* Çekirdek mantık testleri: npm test */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { COURSES } from '../src/data/courses';
import { buildBlueprintSet, buildPastExamSets } from '../src/data/exams';
import { QUESTIONS, questionById, seededShuffle } from '../src/data/questions';
import { SIGN_META } from '../src/data/signMeta';
import { PASS_CORRECT, PASS_SCORE } from '../src/data/types';
import { courseAccuracy, gradeAttempt, wrongPool } from '../src/lib/grade';
import { deltas } from '../src/lib/stats';

let n = 0;
const t = (name: string, fn: () => void) => { fn(); n++; console.log('✓ ' + name); };

t('shuffle deterministik ve permütasyon', () => {
  const a = seededShuffle([1, 2, 3, 4, 5, 6], 42), b = seededShuffle([1, 2, 3, 4, 5, 6], 42);
  assert.deepEqual(a, b);
  assert.deepEqual([...a].sort(), [1, 2, 3, 4, 5, 6]);
});

t('her soruda doğru şık 4 şıktan biri ve şıklar benzersiz', () => {
  for (const q of QUESTIONS) {
    assert.equal(q.options.length, 4);
    assert.ok(q.answer >= 0 && q.answer < 4);
    assert.equal(new Set(q.options).size, 4, q.id);
  }
});

t('doğru şık dağılımı dengeli (A-D her biri %15-%35)', () => {
  const c = [0, 0, 0, 0]; QUESTIONS.forEach((q) => c[q.answer]++);
  c.forEach((x) => assert.ok(x / QUESTIONS.length > 0.15 && x / QUESTIONS.length < 0.35, JSON.stringify(c)));
});

t('blueprint 23/12/9/6 = 50 ve tekrarsız', () => {
  for (let s = 1; s <= 30; s++) {
    const ids = buildBlueprintSet(s);
    assert.equal(ids.length, 50);
    assert.equal(new Set(ids).size, 50);
    for (const c of COURSES) assert.equal(ids.filter((id) => questionById(id)!.courseId === c.id).length, c.examQuestions);
  }
});

t('sınav setleri benzersiz kimlik ve 50 soru', () => {
  const sets = buildPastExamSets();
  assert.equal(new Set(sets.map((s) => s.id)).size, sets.length);
  sets.forEach((s) => assert.equal(s.questionIds.length, 50));
});

t('puanlama: 2 puan/soru, yanlış doğruyu götürmez, geçme 35 doğru', () => {
  const ids = buildBlueprintSet(7);
  const answers: Record<string, number | null> = {};
  ids.forEach((id, i) => { const q = questionById(id)!; answers[id] = i < 35 ? q.answer : i < 45 ? (q.answer + 1) % 4 : null; });
  const a = gradeAttempt({ id: 'x', title: 'x', questionIds: ids }, answers, 100);
  assert.equal(a.correct, 35); assert.equal(a.wrong, 10); assert.equal(a.blank, 5);
  assert.equal(a.score, 70); assert.ok(a.score >= PASS_SCORE && a.correct >= PASS_CORRECT);
  assert.equal(Object.values(a.byCourse).reduce((s, c) => s + c.correct, 0), 35);
});

t('yanlış havuzu: sonradan doğru yapılan çıkar', () => {
  const ids = buildBlueprintSet(3);
  const q = questionById(ids[0])!;
  const wrong = gradeAttempt({ id: 'e', title: 'e', questionIds: [ids[0]] }, { [ids[0]]: (q.answer + 1) % 4 }, 10, 1000);
  assert.deepEqual(wrongPool([wrong]), [ids[0]]);
  const right = gradeAttempt({ id: 'e', title: 'e', questionIds: [ids[0]] }, { [ids[0]]: q.answer }, 10, 2000);
  assert.deepEqual(wrongPool([wrong, right]), []);
  const acc = courseAccuracy([wrong, right]);
  assert.equal(acc[q.courseId].total, 2); assert.equal(acc[q.courseId].correct, 1);
});

t('deltas kronolojik farkı verir', () => {
  const ids = buildBlueprintSet(5);
  const mk = (k: number, at: number) => { const r: Record<string, number | null> = {}; ids.forEach((id, i) => { const q = questionById(id)!; r[id] = i < k ? q.answer : (q.answer + 1) % 4; }); return gradeAttempt({ id: 'e' + at, title: 't', questionIds: ids }, r, 1, at); };
  const a = mk(30, 1), b = mk(33, 2);
  const d = deltas([b, a]);
  assert.equal(d.get(a.id), null); assert.equal(d.get(b.id), 3);
});

t('levha meta kimlikleri Sign.tsx çizimleriyle eşleşir', () => {
  const src = readFileSync(new URL('../src/components/Sign.tsx', import.meta.url), 'utf8');
  for (const m of SIGN_META) assert.ok(src.includes(`id: '${m.id}'`), `çizim yok: ${m.id}`);
});

t('medya sorularının levha kimlikleri geçerli', () => {
  const ids = new Set(SIGN_META.map((s) => s.id));
  for (const q of QUESTIONS) if (q.media?.kind === 'sign') assert.ok(ids.has(q.media.id), q.id);
});

console.log(`\n${n} test geçti`);

// ── Premium kota mantığı ──
import { lockReason, freeStatus } from '../src/lib/premium';
{
  const plain = QUESTIONS.filter((q) => !q.media).slice(0, 100).map((q) => q.id);
  const vis = QUESTIONS.filter((q) => q.media);
  const extraPlain = QUESTIONS.filter((q) => !q.media)[100];
  assert.equal(lockReason(plain[0], [], false), null, 'boş kota: kilit yok');
  assert.equal(lockReason(extraPlain.id, plain, false), 'total', '100 soru dolunca kilit');
  assert.equal(lockReason(extraPlain.id, plain, true), null, 'premium kilitsiz');
  assert.equal(lockReason(plain[0], plain, false), null, 'görülen soru kilitlenmez');
  const v20 = vis.slice(0, 20).map((q) => q.id);
  assert.equal(lockReason(vis[20].id, v20, false), 'visual', '20 görselli dolunca kilit');
  assert.equal(freeStatus(v20).leftVisual, 0);
  console.log('✓ premium kota mantığı');
}
