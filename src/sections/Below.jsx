import { useEffect } from 'react';
import Work from './Work';
import Products from './Products';
import Lab from './Lab';
import Visual from './Visual';
import About from './About';
import Contact from './Contact';

/** Everything below the hero, loaded as a separate chunk after first paint. */
export default function Below({ theme, onToggleTheme }) {
  useEffect(() => { window.dispatchEvent(new Event('sections-ready')); }, []);
  return (
    <>
      <Work theme={theme} />
      <Products />
      <Lab theme={theme} />
      <Visual />
      <About theme={theme} />
      <Contact theme={theme} onToggleTheme={onToggleTheme} />
    </>
  );
}
