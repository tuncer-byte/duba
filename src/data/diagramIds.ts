/** Duba'nın kendi çizdiği şematik diyagramların kimlikleri (çizimler: src/components/Diagrams.tsx). */
export const LIGHT_IDS = [
  'l-yag', 'l-aku', 'l-motor', 'l-abs', 'l-airbag', 'l-fren', 'l-kapi', 'l-kemer',
  'l-sicaklik', 'l-yakit', 'l-buji', 'l-lastik', 'l-esp', 'l-uzun', 'l-direksiyon', 'l-dortlu',
] as const;
export const MARKING_IDS = ['m-kesik', 'm-surekli', 'm-cift', 'm-yaya', 'm-durma', 'm-ok', 'm-yolver', 'm-tarama'] as const;
export const OFFICER_IDS = ['o-yukari', 'o-yanlar', 'o-on', 'o-yavasla', 'o-cagir'] as const;
export const AID_IDS = ['fa-yan', 'fa-sok', 'fa-kpr', 'fa-hava', 'fa-kanama', 'fa-burun'] as const;
export const DIAGRAM_IDS = [...LIGHT_IDS, ...MARKING_IDS, ...OFFICER_IDS, ...AID_IDS] as const;
export type DiagramId = (typeof DIAGRAM_IDS)[number];
export const isDiagramId = (id: string): id is DiagramId => (DIAGRAM_IDS as readonly string[]).includes(id);
