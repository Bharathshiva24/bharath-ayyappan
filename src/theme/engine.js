// Theme engine: pure functions shared by React and the pre-paint script in index.html.
import DATA from './themes.json';

export const THEMES = DATA.themes;
export const FONTS_URL = DATA.fontsUrl;
export const THEME_IDS = THEMES.map(t => t.id);
export const STORAGE_KEY = 'display-v1';

export const DEFAULTS = {
  mode: 'system',          // 'dark' | 'light' | 'system'
  skin: 'directors',
  accent: null,            // hex or null = the theme's own accent
  scale: 1,                // text size: 1 | 1.125 | 1.25
  motion: 'system',        // 'system' | 'reduce' | 'full'
  contrast: false,
  readable: false,
  underline: false
};

// ---------- colour maths ----------
const hex2rgb = h => { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(c => c + c).join(''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };
const rgb2hex = c => '#' + c.map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('');
const lum = h => { const c = hex2rgb(h).map(x => x / 255).map(x => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
export const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
export const mix = (a, b, t) => { const A = hex2rgb(a), B = hex2rgb(b); return rgb2hex(A.map((v, i) => v + (B[i] - v) * t)); };
export const alpha = (h, a) => { const [r, g, b] = hex2rgb(h); return `rgba(${r}, ${g}, ${b}, ${a})`; };
const ensure = (c, grounds, target, toward) => {
  for (let i = 0; i < 60 && Math.min(...grounds.map(g => contrast(c, g))) < target; i++) c = mix(c, toward, 0.06);
  return c;
};

export const resolveMode = mode =>
  mode === 'system' ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') : mode;
export const resolveMotion = motion =>
  motion === 'system' ? (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'reduce' : 'full') : motion;

/** The theme's palette for a mode, with a custom accent applied (contrast-safe). */
export function paletteFor(settings) {
  const theme = THEMES.find(t => t.id === settings.skin) || THEMES[0];
  const mode = resolveMode(settings.mode);
  const p = { ...theme.palettes[mode] };
  if (settings.accent) {
    const G = [p.bg, p.surface, p['surface-raised']];
    let acc = settings.accent;
    const on = contrast(acc, '#000000') >= contrast(acc, '#ffffff') ? '#000000' : '#ffffff';
    acc = ensure(acc, [on], 4.5, on === '#000000' ? '#ffffff' : '#000000');
    p.tungsten = acc;
    p['on-tungsten'] = on;
    p['tungsten-text'] = ensure(acc, G, 4.6, p.ink);
    let soft = 0.22;
    while (soft > 0.05 && contrast(p.ink, mix(p.bg, acc, soft)) < 4.5) soft -= 0.03;
    p['tungsten-soft'] = mix(p.bg, acc, soft);
  }
  return { theme, mode, palette: p };
}

/** Writes the settings onto <html>. Safe to call on every change. */
export function applyToDocument(settings) {
  const root = document.documentElement;
  const { theme, mode, palette } = paletteFor(settings);
  root.dataset.skin = theme.id;
  root.dataset.theme = mode;
  root.dataset.motion = resolveMotion(settings.motion);
  root.dataset.contrast = settings.contrast ? 'high' : 'normal';
  root.dataset.readable = String(!!settings.readable);
  root.dataset.underline = String(!!settings.underline);
  root.style.setProperty('--ts', String(settings.scale || 1));
  ['tungsten', 'tungsten-text', 'on-tungsten', 'tungsten-soft'].forEach(k => {
    if (settings.accent) root.style.setProperty('--' + k, palette[k]);
    else root.style.removeProperty('--' + k);
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', palette.bg);
  return { theme, mode, palette };
}

export function load() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { /* storage unavailable */ }
  return { ...DEFAULTS, ...s, skin: 'directors', accent: null };
}
export function save(s) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch { /* storage unavailable */ }
}

let fontsRequested = false;
/** Loads every theme's fonts. Called on idle and when the user shows intent to switch. */
export function warmFonts() {
  if (fontsRequested) return;
  fontsRequested = true;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = FONTS_URL;
  l.onload = () => {
    const fams = new Set(THEMES.flatMap(t => [t.fonts.display, t.fonts.sans]));
    fams.add('Atkinson Hyperlegible');
    fams.forEach(f => document.fonts?.load(`700 1em "${f}"`).catch(() => {}));
  };
  document.head.appendChild(l);
}
