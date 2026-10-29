/* Node'da çalışan betikler için: require('...jpg|png|svg') çağrılarını dosya yoluna çevirir (Metro bunu uygulamada kendisi yapar). */
const ext = (require as unknown as { extensions: Record<string, (m: { exports: unknown }, f: string) => void> }).extensions;
for (const e of ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']) ext[e] = (m, f) => { m.exports = f; };
