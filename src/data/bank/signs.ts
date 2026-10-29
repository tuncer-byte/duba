import { GROUP_NAMES, SIGN_META, type SignMeta } from '../signMeta';
import { seededShuffle } from '../questions-util';
import type { Raw } from '../rawTypes';

/**
 * Levha soruları, SIGN_META'dan otomatik üretilir:
 *  1) "Şekildeki trafik işareti neyi bildirir?"  (çeldiriciler: aynı grup dışı/farklı anlamlı levhalar)
 *  2) "Şekildeki işaret hangi grupta yer alır?"
 */
const similar = (a: SignMeta, b: SignMeta) =>
  a.id === b.id || a.name.split(' ')[0] === b.name.split(' ')[0] || (a.id.startsWith('hiz-') && b.id.startsWith('hiz-')) || (a.id.startsWith('viraj') && b.id.startsWith('viraj'));

export const RAW_SIGNS: Raw[] = SIGN_META.flatMap((m, i) => {
  // Çeldiriciler önce aynı gruptan (mantıklı yanıltıcı), yetmezse diğer gruplardan seçilir.
  const cands = SIGN_META.filter((o) => !similar(m, o));
  const pool = [
    ...seededShuffle(cands.filter((o) => o.group === m.group), 311 + i * 17),
    ...seededShuffle(cands.filter((o) => o.group !== m.group), 523 + i * 13),
  ];
  const wrong = [pool[0], pool[1], pool[2]].map((x) => x.name);
  const q1: Raw = ['tc-isaretler', 'Şekildeki trafik işareti neyi bildirir?', m.name, wrong[0], wrong[1], wrong[2], `${m.name}: ${m.hint}`, { kind: 'sign', id: m.id }];
  const others = seededShuffle((Object.keys(GROUP_NAMES) as (keyof typeof GROUP_NAMES)[]).filter((g) => g !== m.group).map((g) => GROUP_NAMES[g]), 97 + i * 7);
  const q2: Raw = ['tc-isaretler', 'Şekildeki trafik işareti aşağıdaki gruplardan hangisinde yer alır?', GROUP_NAMES[m.group], others[0], others[1], others[2], `Bu işaret "${m.name}" levhasıdır ve ${GROUP_NAMES[m.group].toLowerCase()} grubundadır.`, { kind: 'sign', id: m.id }];
  return [q1, q2];
});
