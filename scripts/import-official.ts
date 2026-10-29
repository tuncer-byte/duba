/* Resmî çıkmış soru seti içe aktarma: npx tsx scripts/import-official.ts sorular.json
 * YALNIZCA kullanım izni alınmış içerik için kullanın (docs/ICERIK.md). */
import { readFileSync, writeFileSync } from 'node:fs';
import { TOPICS } from '../src/data/courses';

interface InQ { topicId: string; text: string; options: string[]; answer: number; explanation: string }
interface InSet { set: { id: string; title: string; year: number; month: number }; questions: InQ[] }

const file = process.argv[2];
if (!file) { console.error('Kullanım: tsx scripts/import-official.ts <dosya.json>'); process.exit(1); }
const sets: InSet[] = JSON.parse(readFileSync(file, 'utf8'));
const topics = new Set(TOPICS.map((t) => t.id));
const q = (s: string) => JSON.stringify(s);

let out = `import type { Raw } from './rawTypes';\n\n// Otomatik üretildi: scripts/import-official.ts\nexport interface OfficialSet { id: string; title: string; year: number; month: number; questions: Raw[] }\nexport const OFFICIAL_SETS: OfficialSet[] = [\n`;
for (const s of sets) {
  out += `  { id: ${q(s.set.id)}, title: ${q(s.set.title)}, year: ${s.set.year}, month: ${s.set.month}, questions: [\n`;
  for (const x of s.questions) {
    if (!topics.has(x.topicId)) throw new Error(`Bilinmeyen konu: ${x.topicId}`);
    if (x.options.length !== 4 || x.answer < 0 || x.answer > 3) throw new Error(`Geçersiz soru: ${x.text}`);
    const wrong = x.options.filter((_, i) => i !== x.answer);
    out += `    [${q(x.topicId)}, ${q(x.text)}, ${q(x.options[x.answer])}, ${q(wrong[0])}, ${q(wrong[1])}, ${q(wrong[2])}, ${q(x.explanation)}],\n`;
  }
  out += `  ] },\n`;
}
out += `];\n`;
writeFileSync(new URL('../src/data/official.generated.ts', import.meta.url), out);
console.log(`${sets.length} set içe aktarıldı. src/config.ts içinde OFFICIAL_PAST_EXAMS = true yapmayı unutmayın.`);
