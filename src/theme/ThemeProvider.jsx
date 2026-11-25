import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { gsap } from 'gsap';
import { applyToDocument, DEFAULTS, load, randomSkin, resolveMotion, save, THEMES, warmFonts } from './engine';

const Ctx = createContext(null);
export const useTheme = () => useContext(Ctx);

export default function ThemeProvider({ children }) {
  const [settings, setSettings] = useState(load);
  const [resolved, setResolved] = useState(() => applyToDocument(settings));
  const [announce, setAnnounce] = useState(null);
  const announceTimer = useRef(0);

  const commit = useCallback(next => {
    const r = applyToDocument(next);
    setResolved(r);
    save(next);
  }, []);

  // Keep "system" choices live.
  useEffect(() => {
    const mqs = [window.matchMedia('(prefers-color-scheme: light)'), window.matchMedia('(prefers-reduced-motion: reduce)')];
    const on = () => commit(settings);
    mqs.forEach(m => m.addEventListener('change', on));
    return () => mqs.forEach(m => m.removeEventListener('change', on));
  }, [settings, commit]);

  const reduceMotion = resolveMotion(settings.motion) === 'reduce';
  useEffect(() => { gsap.globalTimeline.timeScale(reduceMotion ? 50 : 1); }, [reduceMotion]);

  // Fonts for every theme load after first paint, so switching is instant.
  useEffect(() => {
    const id = (window.requestIdleCallback || (f => setTimeout(f, 1500)))(warmFonts, { timeout: 4000 });
    return () => (window.cancelIdleCallback || clearTimeout)(id);
  }, []);

  /**
   * Change settings. When `origin` (a click point) is given, the new look is revealed
   * as an expanding circle from that point using the View Transitions API.
   */
  const update = useCallback((patch, origin) => {
    const next = { ...settings, ...(typeof patch === 'function' ? patch(settings) : patch) };
    const run = () => flushSync(() => { setSettings(next); commit(next); });
    const reduce = resolveMotion(next.motion) === 'reduce';
    if (!origin || reduce || !document.startViewTransition) {
      document.documentElement.classList.add('theme-fade');
      run();
      setTimeout(() => document.documentElement.classList.remove('theme-fade'), 450);
      return;
    }
    const { x, y } = origin;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(run);
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.2,.7,.2,1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
  }, [settings, commit]);

  const setSkin = useCallback((skin, origin) => {
    update({ skin }, origin);
    const t = THEMES.find(x => x.id === skin);
    clearTimeout(announceTimer.current);
    setAnnounce({ key: Date.now(), name: t.name, tag: t.tag });
    announceTimer.current = setTimeout(() => setAnnounce(null), 2600);
  }, [update]);

  const randomise = useCallback(origin => setSkin(randomSkin(settings.skin), origin), [settings.skin, setSkin]);
  const toggleMode = useCallback(origin => update({ mode: resolved.mode === 'dark' ? 'light' : 'dark' }, origin), [resolved.mode, update]);
  const reset = useCallback(origin => update({ ...DEFAULTS }, origin), [update]);

  const value = useMemo(() => ({
    settings, update, setSkin, randomise, toggleMode, reset, announce,
    theme: resolved.theme, mode: resolved.mode, palette: resolved.palette, reduceMotion
  }), [settings, update, setSkin, randomise, toggleMode, reset, announce, resolved, reduceMotion]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
