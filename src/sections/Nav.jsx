import { useEffect, useState } from 'react';
import StaggeredMenu from '../bits/StaggeredMenu';
import '../bits/StaggeredMenu.css';
import { NAV, PROFILE } from '../data';
import ThemeControls from '../theme/ThemeControls';
import { useTheme } from '../theme/ThemeProvider';

const useMedia = q => {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [q]);
  return m;
};

const Wordmark = () => (
  <a className="nav-name cursor-target" href="#top" data-cursor-label="Top">
    {PROFILE.name}
    <span className="nav-role">{PROFILE.role}</span>
  </a>
);

export default function Nav() {
  const { palette: p, theme: skin, mode } = useTheme();
  const mobile = useMedia('(max-width: 860px)');
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    const observe = () => NAV.forEach(n => { const el = document.querySelector(n.href); if (el) io.observe(el); });
    observe();
    window.addEventListener('sections-ready', observe);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('sections-ready', observe); io.disconnect(); };
  }, []);

  if (mobile) {
    return (
      <>
      <StaggeredMenu
        key={skin.id + mode}
        isFixed
        position="right"
        logo={<Wordmark />}
        items={[...NAV, { label: 'Contact', href: '#contact' }].map(n => ({ label: n.label, link: n.href, ariaLabel: `Go to ${n.label}` }))}
        socialItems={[{ label: 'LinkedIn', link: PROFILE.links.linkedin }, { label: 'GitHub', link: PROFILE.links.github }]}
        colors={[p['tungsten-soft'], p.tungsten]}
        accentColor={p['tungsten-text']}
        menuButtonColor={p.ink}
        openMenuButtonColor={p.ink}
        displayItemNumbering
        className="mobile-menu"
      />
      <div className="mobile-tools"><ThemeControls compact /></div>
      </>
    );
  }

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <Wordmark />
        <nav aria-label="Main">
          <ul className="nav-links">
            {NAV.map(n => (
              <li key={n.href}>
                <a className="cursor-target" href={n.href} aria-current={active === n.href ? 'true' : undefined}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-tools">
          <ThemeControls />
          <a className="nav-cta cursor-target" href="#contact" data-cursor-label="Say hi">Get in touch <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </header>
  );
}
