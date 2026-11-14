# Bharath Ayyappan — Portfolio

**Product Designer & Creative Technologist.** Built on the *Director's Cut* design system: React 19, Vite, GSAP, Lenis, and a curated set of [React Bits](https://reactbits.dev) components.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build locally
```

**Deploy:** push to GitHub and import the repo into Vercel (framework: Vite). No configuration is needed.

## Edit content

All text, links and images are in **`src/data.js`**: profile, work, products, Lab, visual work, stats and experience. Images go in `public/work/` (or `public/visual/`). Use WebP, around 1600px wide.

Before launch:
- [ ] `PROFILE.email`: add a public email address. The Contact button switches to it automatically.
- [ ] `PROFILE.links.resume`: link your résumé PDF (for example, put it in `public/resume.pdf` and use `'resume.pdf'`).
- [ ] Posterflix: replace the placeholder line in `PRODUCTS`.
- [ ] `VISUAL`: add your photography and concept images (`image: 'visual/xyz.webp'`, 4:5 crop).
- [ ] Enterprise work: link a password-protected case study, or keep "on request".

## React Bits components, and why

| Component | Where | Why |
|---|---|---|
| LightRays | Hero background | A tungsten projector beam: the cinema motif, drawn in WebGL and paused when off screen |
| Noise | Whole page | Film grain at 24 fps |
| SplitText | Hero headline | Words rise out of a mask. A cut, not a bounce |
| DecryptedText | Every slate line | Metadata decodes once in view: the technical side |
| TargetCursor | Desktop cursor | Viewfinder brackets lock onto links (photography). Only on fine pointers, off for reduced motion |
| Magnet | Primary buttons | Subtle pull toward the main call to action |
| ScrollVelocity | Disciplines band | Speeds up with scroll. Shows the range of work at a glance |
| SpotlightCard | Project cards | Tungsten spotlight follows the cursor |
| FlowingMenu | The Lab | Open-source list with a marquee reel on hover |
| TrueFocus | About | "Camera / Canvas / Code" pulled into focus with viewfinder brackets |
| CountUp | About stats | Numbers count up when scrolled into view |
| AnimatedContent | All sections | Consistent fade-up reveals |
| VariableProximity | Contact headline | Bricolage's weight axis responds to the cursor |
| StaggeredMenu | Mobile nav | Full-screen layered menu |

Local changes to React Bits: StaggeredMenu takes a `logo` node instead of an image URL. FlowingMenu uses an inline SVG arrow instead of the Hugeicons package (saves about 450 KB). VariableProximity no longer imports Roboto Flex.

## Performance and accessibility

- Everything below the hero loads as a separate chunk after first paint. The initial JS is about 194 KB gzipped.
- Every animated component honours `prefers-reduced-motion`. Lenis smooth scroll and the custom cursor are turned off for reduced motion.
- WebGL and canvas effects pause when off screen or when the tab is hidden.
- If a stylesheet fails to preload (for example, fonts blocked), the page still renders.
- Skip link, semantic landmarks, `aria-current` on nav, visible focus rings, and text contrast of at least 4.5:1 in both themes.
- Dark theme ("Screening room") is the default. "Lights up" in the footer switches to light, and the choice is remembered.

## Licence note

React Bits is MIT + Commons Clause. You can use it in your own portfolio, but you can't resell the components themselves.
