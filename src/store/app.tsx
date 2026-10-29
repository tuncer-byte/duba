import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { Attempt } from '@/data/types';

export interface Profile {
  name: string;
  /** Yazılı sınav tarihi, YYYY-MM-DD */
  examDate: string | null;
  /** Ehliyet yolculuğunda bulunduğun adım (1-5) */
  journeyStep: number;
}
export interface LessonProgress { step: number; done: boolean }

interface Persisted {
  profile: Profile;
  attempts: Attempt[];
  lessons: Record<string, LessonProgress>;
  /** Kaydedilen ("Sonra bak") soru kimlikleri */
  saved: string[];
  /** Ömür boyu premium sahibi mi */
  premium: boolean;
  /** Ücretsiz kotadan harcanan soru kimlikleri */
  seen: string[];
}

const KEY = 'duba:v1';
const EMPTY: Persisted = { profile: { name: '', examDate: null, journeyStep: 1 }, attempts: [], lessons: {}, saved: [], premium: false, seen: [] };

interface Ctx extends Persisted {
  ready: boolean;
  setProfile: (p: Partial<Profile>) => void;
  addAttempt: (a: Attempt) => void;
  setLesson: (topicId: string, p: LessonProgress) => void;
  addSaved: (ids: string[]) => void;
  removeSaved: (id: string) => void;
  setPremium: (v: boolean) => void;
  markSeen: (id: string) => void;
    resetAll: () => void;
}

const AppCtx = createContext<Ctx>(null as unknown as Ctx);
export const useApp = () => useContext(AppCtx);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Persisted>(EMPTY);
  const [ready, setReady] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(KEY);
        if (raw) {
          const p = JSON.parse(raw);
          setData({ ...EMPTY, ...p, profile: { ...EMPTY.profile, ...p.profile }, saved: Array.isArray(p.saved) ? p.saved : [], seen: Array.isArray(p.seen) ? p.seen : [], premium: p.premium === true });
        }
      } catch {}
      loaded.current = true;
      setReady(true);
    })();
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    AsyncStorage.setItem(KEY, JSON.stringify(data)).catch(() => {});
  }, [data]);

  const setProfile = useCallback((p: Partial<Profile>) => setData((d) => ({ ...d, profile: { ...d.profile, ...p } })), []);
  const addAttempt = useCallback((a: Attempt) => setData((d) => ({ ...d, attempts: [...d.attempts, a] })), []);
  const setLesson = useCallback((topicId: string, p: LessonProgress) => setData((d) => ({ ...d, lessons: { ...d.lessons, [topicId]: p } })), []);
  const addSaved = useCallback((ids: string[]) => setData((d) => ({ ...d, saved: [...new Set([...d.saved, ...ids])] })), []);
  const removeSaved = useCallback((id: string) => setData((d) => ({ ...d, saved: d.saved.filter((x) => x !== id) })), []);
  const setPremium = useCallback((v: boolean) => setData((d) => (d.premium === v ? d : { ...d, premium: v })), []);
  const markSeen = useCallback((id: string) => setData((d) => (d.seen.includes(id) ? d : { ...d, seen: [...d.seen, id] })), []);
  const resetAll = useCallback(() => setData((d) => ({ ...EMPTY, premium: d.premium })), []);

  const value = useMemo<Ctx>(
    () => ({ ...data, ready, setProfile, addAttempt, setLesson, addSaved, removeSaved, setPremium, markSeen, resetAll }),
    [data, ready, setProfile, addAttempt, setLesson, addSaved, removeSaved, setPremium, markSeen, resetAll],
  );
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function addDays(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return toISO(d);
}
export function toISO(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function daysUntil(iso: string | null): number | null {
  if (!iso) return null;
  const [y, m, d] = iso.split('-').map(Number);
  const target = new Date(y, m - 1, d).getTime();
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.round((target - today.getTime()) / 86400000);
}
