/** Soru medyası: trafik levhası, kavşak krokisi veya video. */
export type SceneDir = 'N' | 'E' | 'S' | 'W';
export interface SceneCar {
  from: SceneDir;
  go: 'straight' | 'left' | 'right';
  label: string; // "1", "2", "A"...
  color?: string;
  kind?: 'car' | 'ambulance' | 'fire' | 'bus' | 'tram';
}
export interface SceneSpec {
  type: 'cross' | 'tee' | 'roundabout';
  /** tee için: kapalı kol */
  missing?: SceneDir;
  /** Kollardaki levhalar */
  signs?: Partial<Record<SceneDir, string>>;
  light?: Partial<Record<SceneDir, 'red' | 'yellow' | 'green'>>;
  officer?: SceneDir;
  cars: SceneCar[];
}
export type Media =
  | { kind: 'sign'; id: string }
  | { kind: 'scene'; scene: SceneSpec }
  | { kind: 'diagram'; id: string }
  | { kind: 'video'; uri: string; poster?: string };
