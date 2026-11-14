import { useRef } from 'react';
import VariableProximity from '../bits/VariableProximity';
import '../bits/VariableProximity.css';
import { PROFILE } from '../data';
import { Slate, Button, Reveal } from '../ui';

export default function Contact({ theme, onToggleTheme }) {
  const box = useRef(null);
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container" ref={box}>
        <Slate scene="SC.06" items={['Contact', PROFILE.available]} />
        <h2 id="contact-title" className="contact-h">
          <VariableProximity
            label="Let's make something worth watching."
            containerRef={box}
            fromFontVariationSettings="'wght' 500, 'opsz' 48"
            toFontVariationSettings="'wght' 800, 'opsz' 96"
            radius={140}
            falloff="gaussian"
          />
        </h2>
        <Reveal distance={24}>
          <div className="contact-actions">
            {PROFILE.email ? (
              <Button variant="primary" href={`mailto:${PROFILE.email}`} arrow magnetic label="Write">{PROFILE.email}</Button>
            ) : (
              <Button variant="primary" href={PROFILE.links.linkedin} arrow magnetic label="Connect">Message me on LinkedIn</Button>
            )}
            <Button href={PROFILE.links.github} arrow label="Code">GitHub</Button>
            <Button variant="ghost" href={PROFILE.links.resume} arrow label="CV">Download résumé</Button>
          </div>
        </Reveal>
      </div>

      <footer className="container footer">
        <span>© 2026 {PROFILE.name}</span>
        <span className="footer-mid">Designed &amp; built in Chennai · React, GSAP &amp; React Bits</span>
        <button className="theme-toggle cursor-target" type="button" onClick={onToggleTheme} data-cursor-label="Lights" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? 'Lights up' : 'Lights down'}
        </button>
      </footer>
    </section>
  );
}
