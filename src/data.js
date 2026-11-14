// All portfolio content lives here. Edit text, links and images without touching components.

export const PROFILE = {
  name: 'Bharath Ayyappan',
  role: 'Product Designer & Creative Technologist',
  location: 'Chennai, IN',
  // TODO: add a public email address before launch, e.g. 'hello@bharath.design'
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/bharathshivaux/',
    github: 'https://github.com/Bharathshiva24',
    resume: '#'
  }
};

export const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Products', href: '#products' },
  { label: 'Lab', href: '#lab' },
  { label: 'Visual', href: '#visual' },
  { label: 'About', href: '#about' }
];

export const DISCIPLINES = ['Product design', 'Creative technology', 'AI products', 'Visual design', 'Photography'];

export const WORK = [
  {
    id: 'cineview',
    index: '01',
    title: 'CineView',
    kind: 'Chrome extension',
    year: '2026',
    status: 'shipped',
    statusLabel: 'Shipped · v2.4.5',
    description:
      'See the screen from your seat before you book. CineView reads the seat map on District and BookMyShow and renders your exact seat in 3D — with the film’s trailer playing on the screen.',
    tags: ['Product design', '3D / CSS', 'Chrome', 'Built solo'],
    image: 'work/cineview-hero.webp',
    imageAlt: 'CineView promo: “See the screen from your seat.”',
    href: 'https://cineview-ten.vercel.app',
    featured: true
  },
  {
    id: 'pocketdesk',
    index: '02',
    title: 'PocketDesk',
    kind: 'Android + web',
    year: '2026',
    status: 'shipped',
    statusLabel: 'Shipped · Open source',
    description: 'Your next PC is already in your pocket. Plug a phone into any display and get windows, a dock and a launcher — the phone becomes trackpad and keyboard.',
    tags: ['Product design', 'Android', 'WebRTC'],
    image: 'work/pocketdesk-tv.webp',
    imageAlt: 'PocketDesk desktop running on a TV, with Photos and Notes windows',
    href: 'https://github.com/Bharathshiva24/pocketdesk'
  },
  {
    id: 'acwidget',
    index: '03',
    title: 'AC Widget',
    kind: 'macOS menu bar',
    year: '2026',
    status: 'shipped',
    statusLabel: 'Shipped · MIT',
    description: 'The feature I use most has no interface: close the MacBook lid and the AC switches off. The rest is a one-click menu-bar panel with a rotary dial.',
    tags: ['Interaction design', 'Python', 'Smart home'],
    image: 'work/acwidget-panel.webp',
    imageAlt: 'AC Widget dark panel with 24° temperature dial and mode controls',
    imageFit: 'contain',
    href: 'https://github.com/Bharathshiva24/AC-Widget'
  },
  {
    id: 'kfc',
    index: '04',
    title: 'KFC App — Concept Revamp',
    kind: 'Mobile app concept',
    year: 'Self-initiated',
    status: 'concept',
    statusLabel: 'Concept · Prototype',
    description: 'A faster, warmer ordering flow for KFC India — skippable login, rewards up front, and a menu that never loses your cart.',
    tags: ['UX', 'Mobile UI', 'Prototype'],
    image: 'work/kfc-card.webp',
    imageAlt: 'KFC concept: welcome, home and menu screens on a dark stage',
    slot: 'KFC-01',
    href: '#case-kfc'
  },
  {
    id: 'lucid',
    index: '05',
    title: 'LUCID',
    kind: 'Speculative product',
    year: '2022 — Ongoing',
    status: 'concept',
    statusLabel: 'Concept',
    description: 'Customisable dreaming: a research-led product ecosystem — dream band, earpiece and app — for living the third of life we spend asleep.',
    tags: ['Research', 'Systems', 'Future tech'],
    image: 'work/lucid-card.webp',
    imageAlt: 'LUCID dream band glowing on a pillow at night',
    slot: 'LUCID-01',
    href: '#case-lucid'
  },
  {
    id: 'slate',
    index: '06',
    title: 'Slate Auto — Modular Mods',
    kind: 'Visual concept',
    year: 'Self-initiated',
    status: 'concept',
    statusLabel: '32K+ impressions',
    description: 'Five limited editions for a modular EV — what if a car launched like a sneaker drop?',
    tags: ['Visual design', 'Concept', 'Brand'],
    image: 'work/slate-card.webp',
    imageAlt: 'Five Slate Auto edition renders lined up in a dark studio',
    slot: 'SLATE-01',
    href: '#case-slate'
  },
  {
    id: 'client',
    index: '07',
    title: 'Enterprise & client work',
    slot: 'ENT-01',
    kind: 'Enterprise · Marketing · Consumer',
    year: '2019 — Now',
    status: 'concept',
    statusLabel: 'Case studies on request',
    description: 'Seven years of product and experience design for enterprise, marketing and consumer clients. Walkthroughs available under NDA.',
    tags: ['UX strategy', 'Design systems', 'Conversion'],
    image: 'work/enterprise.webp',
    imageAlt: 'Mindsprint logo over layered amber glass',
    href: '#contact'
  }
];

export const PRODUCTS = [
  {
    title: 'Vizr',
    year: '2026 — Now',
    status: 'building',
    line: 'A local AI web-design tool for Mac and Windows. No cloud, no accounts, no API keys — it even works at 35,000 feet.',
    meta: ['Founder', 'Local AI', 'Desktop'],
    href: 'https://vizr.live'
  },
  {
    title: 'Posterflix',
    year: '2026 — Now',
    status: 'building',
    // TODO: replace with your own one-line description of Posterflix
    line: 'A new venture for film lovers. In production — details soon.',
    meta: ['Founder', 'In production'],
    href: '#'
  },
  {
    title: 'CreativeCat',
    year: '2023 — 2025',
    status: 'shipped',
    statusLabel: 'Google Cloud Startup Program',
    line: 'An AI content-writing and generation tool, selected for the Google Cloud Startup Program.',
    meta: ['Founder', 'Generative AI', 'Web app'],
    href: '#'
  }
];

export const LAB = [
  { text: 'PocketDesk', meta: 'Android · WebRTC · MIT', marquee: 'Phone → desktop', image: 'work/pocketdesk-hero.webp', link: 'https://github.com/Bharathshiva24/pocketdesk' },
  { text: 'CineView', meta: 'Chrome · CSS 3D · v2.4.5', marquee: 'Your seat, in 3D', image: 'work/cineview-seat.webp', link: 'https://github.com/Bharathshiva24/CineView' },
  { text: 'AC Widget', meta: 'macOS · Python · MIT', marquee: 'Lid closed, AC off', image: 'work/acwidget-panel.webp', link: 'https://github.com/Bharathshiva24/AC-Widget' },
  { text: 'Google TV for Mac', meta: 'Electron · Widevine · MIT', marquee: 'Every service, one remote', link: 'https://github.com/Bharathshiva24/Google-TV' },
  { text: 'Live-Subtitle', meta: 'Accessibility · In progress', marquee: 'Captions for everything', link: 'https://github.com/Bharathshiva24/Live-Subtitle' }
];

// Replace label-only tiles with real images: add `image: '/visual/xyz.webp'`.
export const VISUAL = [
  { title: 'Photojournalism', meta: 'Dinamalar · 2017', aspect: 'portrait', slot: 'PHOTO-01 — your own photo' },
  { title: 'Street & portrait', meta: 'Photography', aspect: 'portrait', slot: 'PHOTO-02 — your own photo' },
  { title: 'Slate Auto editions', meta: 'Concept · 5 wraps', aspect: 'portrait', image: 'work/slate-promo.webp', alt: 'Slate Auto promo edition render', href: '#case-slate' },
  { title: 'LUCID Dream Band', meta: 'Product render', aspect: 'portrait', image: 'work/lucid-band.webp', alt: 'LUCID dream band render in amber light', href: '#case-lucid' }
];

export const STATS = [
  { value: 9, suffix: 'yrs', label: 'Camera → canvas → code' },
  { value: 3, label: 'Products founded' },
  { value: 5, label: 'Open-source releases' },
  { value: 964, suffix: '+', label: 'People following the work' }
];

// Career story for the About section — told as scenes, in order.
export const JOURNEY = [
  {
    year: '2017',
    scene: 'The frame',
    place: 'Dinamalar',
    role: 'Photojournalist intern',
    story: 'My first brief came from a newsroom. As an intern at Dinamalar I learned that one photograph has to carry a whole story — and that you earn the frame by paying attention to people.'
  },
  {
    year: '2018 — 2019',
    scene: 'The studio',
    place: 'Bello Pixel',
    role: 'Co-founder',
    story: 'With a few friends I co-founded Bello Pixel, an online creative studio. We took on editing, photography and design — and I learned what it means to build something from nothing, with your own name on it.'
  },
  {
    year: 'Then',
    scene: 'The spark',
    place: 'An app idea',
    role: 'Discovering UX',
    story: 'While running the studio I had an idea for an app. I had no idea how apps were designed, so I went looking. That search led me to UX — the craft of understanding how people actually use the things we make. I haven’t stopped exploring it since.'
  },
  {
    year: '2019 — 2022',
    scene: 'The craft',
    place: 'Slate & Pencil',
    role: 'UI/UX designer',
    story: 'Slate & Pencil is where design became my profession. Real clients, real deadlines, and room to grow from junior to associate designer — learning research, interface systems and how to ship.'
  },
  {
    year: '2022 — 2025',
    scene: 'The leap',
    place: 'Xerago',
    role: 'Experience design',
    story: 'At Xerago I began exploring AI — what it could do for ideas, interfaces and the people using them. Alongside, I founded CreativeCat, an AI content tool that joined the Google Cloud Startup Program.'
  },
  {
    year: 'Now',
    scene: 'The builder',
    place: 'Independent work',
    role: 'Designing & building',
    story: 'Today I design and build — my own products like Vizr, open-source tools made with AI, and concepts that ask “what if?”. Different tools, same curiosity that started behind a camera.',
    current: true
  }
];
