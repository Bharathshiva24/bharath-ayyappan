// All portfolio content lives here. Edit text, links and images without touching components.

export const PROFILE = {
  name: 'Bharath Ayyappan',
  role: 'Product Designer & Creative Technologist',
  location: 'Chennai, IN',
  available: 'Open to roles',
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
    id: 'client',
    index: '04',
    title: 'Enterprise & client work',
    kind: 'Mindsprint · Xerago · Slate and Pencil',
    year: '2019 — Now',
    status: 'concept',
    statusLabel: 'Case studies on request',
    description: 'Seven years of product and experience design for enterprise, marketing and consumer clients. Walkthroughs available under NDA.',
    tags: ['UX strategy', 'Design systems', 'Conversion'],
    image: null,
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
  { title: 'Photojournalism', meta: 'Dinamalar · 2017', aspect: 'portrait' },
  { title: 'Slate Auto — modular mods', meta: 'Concept · 376 reactions', aspect: 'portrait' },
  { title: 'KFC app revamp', meta: 'Concept · Mobile', aspect: 'portrait' },
  { title: 'LUCID Tech', meta: 'Speculative product', aspect: 'portrait' }
];

export const STATS = [
  { value: 9, suffix: 'yrs', label: 'Camera → canvas → code' },
  { value: 3, label: 'Products founded' },
  { value: 5, label: 'Open-source releases' },
  { value: 964, suffix: '+', label: 'People following the work' }
];

export const EXPERIENCE = [
  { years: '2025 — Now', role: 'Lead Designer', company: 'Mindsprint', note: 'Leading product design · Chennai, hybrid', kind: 'Full-time', current: true },
  { years: '2026 — Now', role: 'Founder', company: 'Posterflix', kind: 'Founder' },
  { years: '2026 — Now', role: 'Founder', company: 'Vizr', note: 'Local AI web-design tool. No cloud.', kind: 'Founder' },
  { years: '2022 — 2025', role: 'Senior Executive, Experience', company: 'Xerago', note: 'Creative ideation, UI and experience design', kind: 'Full-time' },
  { years: '2023 — 2025', role: 'Founder', company: 'CreativeCat', note: 'AI content tool · Google Cloud Startup Program', kind: 'Founder' },
  { years: '2019 — 2022', role: 'UI/UX Designer', company: 'Slate and Pencil', note: 'Junior → Associate', kind: 'Full-time' },
  { years: '2018 — 2019', role: 'Interdisciplinary Designer', company: 'Bello Pixel', note: 'Editing and photography', kind: 'Freelance' },
  { years: '2017 — 2018', role: 'Photographer', company: 'Dinamalar · Freelance', note: 'Photojournalism internship, then freelance', kind: 'Photo' }
];
