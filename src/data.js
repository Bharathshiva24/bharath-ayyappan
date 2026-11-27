// All portfolio content lives here. Edit text, links and images without touching components.

export const PROFILE = {
  name: 'Bharath Ayyappan',
  role: 'Product Designer & Creative Technologist',
  location: 'Chennai, IN',
  // TODO: add a public email address before launch, e.g. 'hello@bharath.design'
  email: '',
  links: {
    linkedin: 'https://www.linkedin.com/in/bharathshivaux/',
    github: 'https://github.com/Bharathshiva24'
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
    id: 'posterflix',
    index: '01',
    title: 'Posterflix',
    kind: 'Founder · E-commerce',
    year: '2026 — Now',
    status: 'shipped',
    statusLabel: 'Live · posterflix.in',
    description: '1,470 original wall posters, custom photo prints and an AR try-on — a store I designed, built and run.',
    tags: ['Founder', 'E-commerce', 'AR'],
    image: 'work/posterflix.webp',
    imageAlt: 'Posterflix home page featuring the Little Tamil Moments poster set',
    href: 'https://posterflix.in/',
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
    image: 'work/pocketdesk-og.webp',
    imageAlt: 'PocketDesk: your phone is your PC — desktop workspace on a monitor with the phone as trackpad',
    href: 'https://pocketdesk-pi.vercel.app/'
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
    id: 'timeline',
    index: '04',
    title: 'The Timeline',
    kind: 'Web app · Fan project',
    year: '2026',
    status: 'shipped',
    statusLabel: 'Live',
    description: 'An interactive guide for anyone getting into the Marvel Cinematic Universe — a zoomable timeline, watch-order guides, characters, post-credit scenes and a personal watch tracker, in five languages.',
    tags: ['Product design', 'Web', 'Admin CMS', 'i18n'],
    image: 'work/timeline-og.webp',
    imageAlt: 'The Timeline: an interactive guide to the Marvel Cinematic Universe',
    href: 'https://marvel-timeline.vercel.app/'
  },
  {
    id: 'cineview',
    index: '05',
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
    href: 'https://cineview-ten.vercel.app'
  },
  {
    id: 'kfc',
    index: '06',
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
    index: '07',
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
    index: '08',
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
    index: '09',
    title: 'Enterprise & client work',
    slot: 'ENT-01',
    kind: 'Enterprise · Marketing · Consumer',
    year: '2019 — Now',
    status: 'concept',
    statusLabel: 'Case studies on request',
    description: 'Seven years of product and experience design for enterprise, marketing and consumer clients. Walkthroughs available under NDA.',
    tags: ['UX strategy', 'Design systems', 'Conversion'],
    image: 'work/enterprise.webp',
    imageAlt: 'Mindsprint logo',
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
    status: 'shipped',
    statusLabel: 'Live',
    line: 'An online poster store with 1,470 original designs — film, Tanjore, Tamil icons and more — plus custom photo prints and AR try-on to see a poster on your wall before you buy.',
    meta: ['Founder', 'E-commerce', 'AR try-on'],
    href: 'https://posterflix.in/'
  },
  {
    title: 'CreativeCat',
    year: '2023 — 2025',
    status: 'shipped',
    statusLabel: 'Google Cloud Startup Program',
    line: 'An AI content-writing and generation tool, selected for the Google Cloud Startup Program.',
    meta: ['Founder', 'Generative AI', 'Web app'],
    href: null,
    notice: {
      title: 'Migration in progress',
      body: 'CreativeCat is currently undergoing migration. We’re working on bringing you an improved experience. Please bear with us and check back shortly. Thank you for your patience!'
    }
  }
];

export const LAB = [
  { text: 'The Timeline', meta: 'Web app · 5 languages · 2026', marquee: 'Your way into the MCU', image: 'work/timeline-og.webp', link: 'https://marvel-timeline.vercel.app/' },
  { text: 'HoloGlobe', meta: 'Gesture UI · Concept · 2025', marquee: 'Pinch, rotate, zoom — no touch', image: 'work/hologlobe.webp', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7402208935467999232/' },
  { text: 'TimeLens', meta: 'Generative AI · 2025', marquee: 'Any place, any era', image: 'work/timelens.webp', link: 'https://www.linkedin.com/posts/bharathshivaux_see-any-place-in-any-era-with-a-single-click-ugcPost-7399298393375858688-WMco/' },
  { text: 'CineMagic', meta: 'iPad · Real-time AI VFX · 2024', marquee: 'Effects you can see on set', image: 'work/cinemagic-wide.webp', link: 'https://www.linkedin.com/posts/bharathshivaux_filmmaking-specialeffects-cinemagic-ugcPost-7210902200292626432-rJnK/' },
  { text: 'RouteReel', meta: 'Mobile · Accessibility · 2024', marquee: 'Your route, as a video', image: 'work/routereel-video.webp', link: 'https://www.linkedin.com/posts/bharathshivaux_routereel-travelcompanion-explore-ugcPost-7213409573641048064-VbYv/' },
  { text: 'PocketDesk', meta: 'Android · WebRTC · MIT', marquee: 'Phone → desktop', image: 'work/pocketdesk-og.webp', link: 'https://pocketdesk-pi.vercel.app/' },
  { text: 'CineView', meta: 'Chrome · CSS 3D · v2.4.5', marquee: 'Your seat, in 3D', image: 'work/cineview-seat.webp', link: 'https://github.com/Bharathshiva24/CineView' },
  { text: 'AC Widget', meta: 'macOS · Python · MIT', marquee: 'Lid closed, AC off', image: 'work/acwidget-panel.webp', link: 'https://github.com/Bharathshiva24/AC-Widget' },
  { text: 'Google TV for Mac', meta: 'Electron · Widevine · MIT', marquee: 'Every service, one remote', link: 'https://github.com/Bharathshiva24/Google-TV' },
  { text: 'Live-Subtitle', meta: 'Accessibility · In progress', marquee: 'Captions for everything', link: 'https://github.com/Bharathshiva24/Live-Subtitle' }
];

// Replace label-only tiles with real images: add `image: '/visual/xyz.webp'`.
export const VISUAL = [
  { title: 'Photojournalism', meta: 'Dinamalar · Intern · 2017', aspect: 'portrait', image: 'work/dinamalar.webp', alt: 'Dinamalar logo', fit: 'contain' },
  { title: 'Slate Auto editions', meta: 'Concept · 5 wraps', aspect: 'portrait', image: 'work/slate-promo.webp', alt: 'Slate Auto promo edition render', fit: 'contain', href: '#case-slate' },
  { title: 'CineMagic', meta: 'Real-time AI VFX · iPad', aspect: 'portrait', image: 'work/cinemagic.webp', alt: 'CineMagic origami effect previewed live on an iPad', href: 'https://www.linkedin.com/posts/bharathshivaux_filmmaking-specialeffects-cinemagic-ugcPost-7210902200292626432-rJnK/' },
  { title: 'Adobe Stock', meta: 'Contributor · AI imagery', aspect: 'portrait', image: 'work/adobestock-tile.webp', alt: 'A selection of Bharath\'s Adobe Stock images', href: 'https://stock.adobe.com/in/contributor/211305623/bharath' }
];

// Milestones and recognition, newest first.
export const MILESTONES = [
  { year: '2026', title: 'Founded Posterflix', note: 'Original poster store with AR try-on.', href: 'https://posterflix.in/' },
  { year: '2024', title: 'Google AI Essentials', note: 'Certificate from Google, via Coursera.', href: 'https://www.linkedin.com/posts/bharathshivaux_honored-to-have-earned-my-google-ai-essentials-share-7261434500021116928-6akg/' },
  { year: '2023', title: 'Britannia — “1947% More History”', note: 'AI prompt engineer for the Independence Day film, with Rooted Films.', href: 'https://www.linkedin.com/posts/bharathshivaux_1947-more-history-share-7094215919576518656-lZ0K/' },
  { year: '2023–25', title: 'Google Cloud Startup Program', note: 'CreativeCat, my AI content tool, was selected.', href: null },
  { year: '2022', title: 'Tamil Nadu’s first AI-generated NFT', note: 'Created the artwork; shared by the Chief Minister of Tamil Nadu.', href: 'https://www.linkedin.com/posts/bharathshivaux_nft-digitalart-tamilnadu-share-7011149197215219712-_UY_/' },
  { year: 'Ongoing', title: 'Adobe Stock contributor', note: 'A growing library of AI-assisted imagery, licensed worldwide.', href: 'https://stock.adobe.com/in/contributor/211305623/bharath' }
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
