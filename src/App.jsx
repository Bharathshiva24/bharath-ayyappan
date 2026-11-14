import { lazy, Suspense, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Noise from './bits/Noise';
import './bits/Noise.css';
import TargetCursor from './bits/TargetCursor';
import './bits/TargetCursor.css';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
const Below = lazy(() => import('./sections/Below'));

gsap.registerPlugin(ScrollTrigger);

const readTheme = () => {
  try { return localStorage.getItem('theme') || 'dark'; } catch { return 'dark'; }
};

export default function App() {
  const [theme, setTheme] = useState(readTheme);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* storage unavailable */ }
  }, [theme]);

  // Smooth scroll, kept in step with GSAP ScrollTrigger. Off for reduced motion.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setFinePointer(window.matchMedia('(pointer: fine) and (hover: hover)').matches && !reduce);
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = time => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('sections-ready', refresh);
    const onClick = e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: a.getAttribute('href') === '#top' ? 0 : -72, duration: 1.4 });
    };
    document.addEventListener('click', onClick);
    return () => { gsap.ticker.remove(raf); lenis.destroy(); document.removeEventListener('click', onClick); window.removeEventListener('sections-ready', refresh); };
  }, []);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Nav theme={theme} />
      <main>
        <Hero theme={theme} />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Below theme={theme} onToggleTheme={toggle} />
        </Suspense>
      </main>
      {/* Film grain at 24 fps — the projector feel. */}
      <Noise fixed opacity={theme === 'dark' ? 0.07 : 0.05} fps={24} blendMode="overlay" contrast={0.5} dust={theme === "dark" ? 0.15 : 0} />
      {finePointer && (
        <TargetCursor targetSelector=".cursor-target" cursorColor={theme === 'dark' ? '#ffb03a' : '#8a4f00'} blendMode="normal" size={32} cornerSize={10} thickness={1.5} padding={8} spinDuration={4} />
      )}
    </>
  );
}
