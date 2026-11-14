import { Fragment } from 'react';
import DecryptedText from './bits/DecryptedText';
import Magnet from './bits/Magnet';
import AnimatedContent from './bits/AnimatedContent';

const SLATE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·—/';

/** Clapperboard metadata line. Each fact decodes once when scrolled into view. */
export function Slate({ scene, items = [], decrypt = true }) {
  const parts = [scene, ...items].filter(Boolean);
  return (
    <div className="slate">
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="slate-sep" aria-hidden="true" />}
          <span className={i === 0 && scene ? 'slate-scene' : undefined}>
            {decrypt ? (
              <DecryptedText text={p} animateOn="view" sequential speed={28} characters={SLATE_CHARS} useOriginalCharsOnly={false} />
            ) : p}
          </span>
        </Fragment>
      ))}
    </div>
  );
}

export function Button({ variant = 'secondary', href, arrow, children, magnetic = false, label, ...rest }) {
  const cls = `btn btn-${variant} cursor-target`;
  const external = href && /^https?:/.test(href);
  const inner = (
    <a className={cls} href={href} data-cursor-label={label} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
      {arrow && <span className="arrow" aria-hidden="true">{external ? '↗' : '→'}</span>}
    </a>
  );
  return magnetic ? <Magnet padding={60} magnetStrength={4}>{inner}</Magnet> : inner;
}

const STATUS = { shipped: 'Shipped', building: 'Building', concept: 'Concept' };
export function Status({ state = 'shipped', children }) {
  return (
    <span className={`status status-${state}`}>
      <span className="status-dot" aria-hidden="true" />
      {children || STATUS[state]}
    </span>
  );
}

export const Tag = ({ children }) => <span className="tag">{children}</span>;

const RATIO = { scope: 2.39, flat: 1.85, video: 16 / 9, portrait: 0.8, photo: 1204 / 805 };
export function Screen({ aspect = 'flat', src, alt = '', label, fit, eager }) {
  return (
    <div className="screen" style={{ aspectRatio: RATIO[aspect] }}>
      {src ? (
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={fit === 'contain' ? 'contain' : undefined} />
      ) : (
        <>
          <div className="screen-grid" />
          <svg className="screen-x" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
            <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
          </svg>
          {label && <span className="screen-label">{label}</span>}
        </>
      )}
    </div>
  );
}

export function Viewfinder({ children, className = '' }) {
  return (
    <div className={`vf ${className}`}>
      {['tl', 'tr', 'bl', 'br'].map(c => <span key={c} className={`vf-c vf-${c}`} aria-hidden="true" />)}
      {children}
    </div>
  );
}

/** Scroll reveal: a short fade-up — a cut, never a bounce. */
export const Reveal = ({ children, delay = 0, distance = 40, ...rest }) => (
  <AnimatedContent distance={distance} duration={0.9} ease="power3.out" delay={delay} threshold={0.15} {...rest}>
    {children}
  </AnimatedContent>
);

export function SectionHead({ scene, meta, title, intro }) {
  return (
    <div className="section-head">
      <div>
        <Slate scene={scene} items={meta} />
        <Reveal><h2 className="display-lg">{title}</h2></Reveal>
      </div>
      {intro && <Reveal delay={0.1}><p className="body-lg">{intro}</p></Reveal>}
    </div>
  );
}
