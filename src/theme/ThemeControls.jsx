import { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from './ThemeProvider';

const pt = e => {
  const r = e.currentTarget.getBoundingClientRect();
  return { x: e.clientX || r.left + r.width / 2, y: e.clientY || r.top + r.height / 2 };
};

const Icon = {
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
  access: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" /><circle cx="12" cy="7.2" r="1.3" fill="currentColor" stroke="none" />
      <path d="M7.5 9.8 12 10.8l4.5-1M12 10.8v3.4M12 14.2l-2.4 4M12 14.2l2.4 4" />
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

function Panel({ onClose, anchorRef, kind }) {
  const { settings, update } = useTheme();
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
    <div className="dp" ref={ref} role="dialog" aria-label={kind === 'a11y' ? 'Accessibility settings' : 'Display settings'} data-lenis-prevent>
      <div className="dp-head">
        <h2 className="dp-title">{kind === 'a11y' ? 'Accessibility' : 'Display'}</h2>
        <button type="button" className="dp-icon" onClick={onClose} aria-label="Close">{Icon.close}</button>
      </div>
      {kind === 'a11y' && <>
      <section className="dp-sec dp-sec-first">
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

      <button type="button" className="dp-reset" onClick={() => update({ scale: 1, motion: 'system', contrast: false, readable: false, underline: false })}>Reset accessibility</button>
      </>}
    </div>
  );
}

/** Dark/Light switch and Accessibility panel — used in the desktop header and the mobile bar. */
export default function ThemeControls({ compact = false }) {
  const { toggleMode, mode } = useTheme();
  const [open, setOpen] = useState(null);
  const a11yRef = useRef(null);

  return (
    <div className={`tc ${compact ? 'tc-compact' : ''}`} >
      <button
        type="button"
        className="tc-btn tc-icon cursor-target"
        data-cursor-label={mode === 'dark' ? 'Lights up' : 'Lights down'}
        aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        onClick={e => toggleMode(pt(e))}
      >
        {mode === 'dark' ? Icon.sun : Icon.moon}
      </button>
      <button
        ref={a11yRef}
        type="button"
        className="tc-btn tc-icon cursor-target"
        data-cursor-label="Access"
        aria-label="Accessibility settings"
        aria-expanded={open === 'a11y'}
        aria-haspopup="dialog"
        onClick={() => setOpen(o => (o === 'a11y' ? null : 'a11y'))}
      >
        {Icon.access}
      </button>
      {open && <Panel key={open} kind={open} onClose={() => setOpen(null)} anchorRef={a11yRef} />}
    </div>
  );
}
