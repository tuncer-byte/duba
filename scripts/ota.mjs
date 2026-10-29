// OTA gönderici: kontrolleri çalıştırır, yerel kodun mağazadaki yapıyla uyumlu olduğunu doğrular,
// sonra güncellemeyi seçilen kanala yayınlar.
// Kullanım: npm run ota:test -- "mesaj"   |   npm run ota:prod -- "mesaj"
import { execSync } from 'node:child_process';

const channel = process.argv[2];
if (!['test', 'production'].includes(channel)) {
  console.error('Kanal "test" ya da "production" olmalı.');
  process.exit(1);
}
const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });
const out = (cmd) => execSync(cmd, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });

console.log('\n1/3 Kod ve paket kontrolleri');
run('npm run check');

console.log('\n2/3 Mağazadaki yapıyla uyum');
const local = JSON.parse(out('npx expo-updates runtimeversion:resolve --platform ios')).runtimeVersion;
const builds = JSON.parse(out('npx -y eas-cli@latest build:list --platform ios --status finished --build-profile production --limit 10 --json --non-interactive'));
const known = new Set(builds.map((b) => b.runtime?.version ?? b.fingerprint?.hash ?? b.runtimeVersion));
if (!known.has(local)) {
  console.error(`\nDURDU: Yerel uygulama parmak izi (${local}) hiçbir mağaza yapısıyla eşleşmiyor.`);
  console.error('Yerel paket ya da app.json değişmiş; bu güncelleme telefonlara ulaşmaz. Yeni build gerekir:');
  console.error('  npm run build:ios');
  console.error('Farkı görmek için: npx eas-cli@latest fingerprint:compare');
  process.exit(1);
}
console.log(`Uyumlu yapı bulundu (${local.slice(0, 10)}).`);

console.log(`\n3/3 "${channel}" kanalına yayın`);
const msg = process.argv[3] || out('git log -1 --pretty=%s').trim();
run(`npx -y eas-cli@latest update --channel ${channel} --environment ${channel === 'production' ? 'production' : 'preview'} --platform ios --message ${JSON.stringify(msg)} --non-interactive`);
