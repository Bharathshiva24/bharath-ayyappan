import { useEffect, useId, useRef, useState } from 'react';
import DecryptedText from '../bits/DecryptedText';
import { ACCENTS, THEMES, warmFonts } from './engine';
import { useTheme } from './ThemeProvider';

const pt = e => {
  const r = e.currentTarget.getBoundingClientRect();
  return { x: e.clientX || r.left + r.width / 2, y: e.clientY || r.top + r.height / 2 };
};

const Icon = {
  dice: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" /><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" /><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M4 7h9M17 7h3M4 17h3M11 17h9" /><circle cx="15" cy="7" r="2" /><circle cx="9" cy="17" r="2" />
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
  )
};

function Switch({ label, hint, checked, onChange }) {
  const id = useId();
  return (
    <div className="dp-switch-row">
      <div>
        <label htmlFor={id} className="dp-switch-label">{label}</label>
        {hint && <p className="dp-hint">{hint}</p>}
      </div>
      <button id={id} type="button" role="switch" aria-checked={checked} className="dp-switch" onClick={() => onChange(!checked)}>
        <span className="dp-switch-knob" />
      </button>
    </div>
  );
}

function Segmented({ label, options, value, onChange }) {
  return (
    <div className="dp-seg" role="radiogroup" aria-label={label}>
      {options.map(o => (
        <button key={String(o.value)} type="button" role="radio" aria-checked={value === o.value} className="dp-seg-btn" onClick={e => onChange(o.value, e)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

function Panel({ onClose, anchorRef }) {
  const { settings, update, setSkin, randomise, reset, mode } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    const first = ref.current?.querySelector('[aria-checked="true"], button');
    first?.focus();
    const onKey = e => { if (e.key === 'Escape') { onClose(); anchorRef.current?.focus(); } };
    const onDown = e => { if (!ref.current?.contains(e.target) && !anchorRef.current?.contains(e.target)) onClose(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [onClose, anchorRef]);

  return (
    <div className="dp" ref={ref} role="dialog" aria-label="Display settings" data-lenis-prevent>
      <div className="dp-head">
        <h2 className="dp-title">Display</h2>
        <button type="button" className="dp-icon" onClick={onClose} aria-label="Close display settings">{Icon.close}</button>
      </div>

      <section className="dp-sec">
        <h3 className="dp-label">Appearance</h3>
        <Segmented
          label="Appearance"
          value={settings.mode}
          onChange={(v, e) => update({ mode: v }, pt(e))}
          options={[{ value: 'dark', label: 'Dark' }, { value: 'light', label: 'Light' }, { value: 'system', label: 'Auto' }]}
        />
      </section>

      <section className="dp-sec">
        <div className="dp-row">
          <h3 className="dp-label">Theme</h3>
          <button type="button" className="dp-random" onClick={e => randomise(pt(e))}>{Icon.dice}<span>Randomise</span></button>
        </div>
        <div className="dp-themes" role="radiogroup" aria-label="Theme">
          {THEMES.map(t => {
            const p = t.palettes[mode];
            return (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={settings.skin === t.id}
                className="dp-theme"
                title={t.tag}
                aria-label={`${t.name}: ${t.tag}`}
                onClick={e => setSkin(t.id, pt(e))}
                style={{ '--sw-bg': p.bg, '--sw-ink': p.ink, '--sw-acc': p.tungsten, '--sw-line': p['line-control'] }}
              >
                <span className="dp-theme-swatch" aria-hidden="true">
                  <span className="dp-theme-aa" style={{ fontFamily: `"${t.fonts.display}", serif` }}>Aa</span>
                  <span className="dp-theme-dot" />
                </span>
                <span className="dp-theme-name">{t.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="dp-sec">
        <h3 className="dp-label">Accent colour</h3>
        <div className="dp-accents" role="radiogroup" aria-label="Accent colour">
          <button type="button" role="radio" aria-checked={!settings.accent} className="dp-accent dp-accent-default" onClick={e => update({ accent: null }, pt(e))}>
            Theme
          </button>
          {ACCENTS.map(c => (
            <button key={c} type="button" role="radio" aria-checked={settings.accent === c} aria-label={`Accent ${c}`} className="dp-accent" style={{ background: c }} onClick={e => update({ accent: c }, pt(e))} />
          ))}
          <label className="dp-accent dp-accent-custom" title="Pick any colour">
            <span className="sr-only">Custom accent colour</span>
            <input type="color" value={settings.accent || '#ffb03a'} onChange={e => update({ accent: e.target.value })} />
            <span aria-hidden="true">+</span>
          </label>
        </div>
        <p className="dp-hint">Text and button colours adjust automatically to stay readable.</p>
      </section>

      <section className="dp-sec">
        <h3 className="dp-label">Accessibility</h3>
        <div className="dp-field">
          <span className="dp-switch-label" id="ts-label">Text size</span>
          <Segmented
            label="Text size"
            value={settings.scale}
            onChange={v => update({ scale: v })}
            options={[{ value: 1, label: 'A' }, { value: 1.125, label: 'A+' }, { value: 1.25, label: 'A++' }]}
          />
        </div>
        <Switch label="Reduce motion" hint="Stops smooth scroll, film grain, light rays and animations." checked={settings.motion === 'reduce'} onChange={v => update({ motion: v ? 'reduce' : 'system' })} />
        <Switch label="High contrast" hint="Stronger text and borders." checked={settings.contrast} onChange={v => update({ contrast: v })} />
        <Switch label="Readable font" hint="Atkinson Hyperlegible, designed for low vision." checked={settings.readable} onChange={v => update({ readable: v })} />
        <Switch label="Underline links" checked={settings.underline} onChange={v => update({ underline: v })} />
      </section>

      <button type="button" className="dp-reset" onClick={e => reset(pt(e))}>Reset to defaults</button>
    </div>
  );
}

export function ThemeToast() {
  const { announce, reduceMotion } = useTheme();
  return (
    <div className="theme-toast-wrap" aria-live="polite" role="status">
      {announce && (
        <div className="theme-toast" key={announce.key}>
          <span className="theme-toast-label">Theme</span>
          <span className="theme-toast-name">
            {reduceMotion ? announce.name : <DecryptedText text={announce.name} animateOn="view" sequential speed={22} revealDirection="start" />}
          </span>
          <span className="theme-toast-tag">{announce.tag}</span>
        </div>
      )}
    </div>
  );
}

/** Randomise · Dark/Light · Display panel — used in the desktop header and the mobile bar. */
export default function ThemeControls({ compact = false }) {
  const { randomise, toggleMode, mode } = useTheme();
  const [open, setOpen] = useState(false);
  const [spin, setSpin] = useState(0);
  const btnRef = useRef(null);

  return (
    <div className={`tc ${compact ? 'tc-compact' : ''}`} onPointerEnter={warmFonts} onFocus={warmFonts}>
      <button
        type="button"
        className="tc-btn cursor-target"
        data-cursor-label="Shuffle"
        aria-label="Randomise theme"
        title="Randomise theme"
        onClick={e => { setSpin(s => s + 1); randomise(pt(e)); }}
      >
        <span className="tc-dice" style={{ transform: `rotate(${spin * 180}deg)` }}>{Icon.dice}</span>
        {!compact && <span className="tc-text">Randomise</span>}
      </button>
      <button
        type="button"
        className="tc-btn tc-icon cursor-target"
        data-cursor-label={mode === 'dark' ? 'Lights up' : 'Lights down'}
        aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        onClick={e => toggleMode(pt(e))}
      >
        {mode === 'dark' ? Icon.sun : Icon.moon}
      </button>
      <button
        ref={btnRef}
        type="button"
        className="tc-btn tc-icon cursor-target"
        data-cursor-label="Display"
        aria-label="Display and accessibility settings"
        aria-expanded={open}
        aria-haspopup="dialog"
        title="Display and accessibility"
        onClick={() => setOpen(o => !o)}
      >
        {Icon.sliders}
      </button>
      {open && <Panel onClose={() => setOpen(false)} anchorRef={btnRef} />}
    </div>
  );
}
