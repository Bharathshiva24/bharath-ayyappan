// Case studies. Each `img` slot shows a labelled placeholder until you add `src`.
// Slot ids (e.g. KFC-01) match the image brief in docs/image-prompts.md.

export const CASES = {
  kfc: {
    id: 'kfc',
    title: 'KFC App — Concept Revamp',
    kind: 'Mobile app concept',
    year: 'Self-initiated',
    status: 'concept',
    brief: 'A faster, warmer ordering experience for KFC India — rewards, offers and the menu, one thumb away.',
    cover: { id: 'KFC-01', label: 'Cover — three key screens on a dark set', aspect: 'scope' },
    facts: [
      ['Role', 'Product & visual designer (solo)'],
      ['Scope', 'UX audit, flows, UI, interactive prototype'],
      ['Platform', 'iOS / Android'],
      ['Tools', 'Figma']
    ],
    disclaimer: 'Independent concept. Not affiliated with or endorsed by KFC.',
    chapters: [
      {
        title: 'The brief I set myself',
        body: [
          'Quick-service ordering lives or dies on speed. The goal was to redesign the KFC India app around three outcomes: a simpler, more intuitive journey; a modern interface that carries KFC’s bold red brand; and a smoother path from craving to checkout.'
        ]
      },
      {
        title: 'Lower the front door',
        body: [
          'Sign-in accepts email or mobile and can be skipped entirely — guests reach the menu first and are asked to log in only when it matters.',
          'A time-aware welcome (“Good evening, Justin”) opens over a full-bleed food shot, so the brand feels like a restaurant, not a form.'
        ],
        img: { id: 'KFC-02', label: 'Login → personalised welcome', aspect: 'video' }
      },
      {
        title: 'A home screen that earns its scroll',
        body: [
          'Everything a regular needs sits above the fold: a one-tap Member ID for in-store scanning, live points and rewards ready to claim, and a day-of-week offer.',
          'Below, a six-tile category grid (Golden Edition, Box Meals, Buckets, Burgers, Snacks, Bowls) and a swipeable deals “ticket” with Apply Offer turn browsing into ordering.'
        ],
        bullets: ['Member ID always one tap away', 'Points + rewards surfaced, not buried', 'Offers applied in one step from Home'],
        img: { id: 'KFC-03', label: 'Home — rewards, offers, categories, deals', aspect: 'video' }
      },
      {
        title: 'Order without losing your place',
        body: [
          'The menu pins the store location and category tabs at the top and an In-store / Take Away switch at the bottom — the two decisions that change price and timing.',
          'Items add straight from the list; the button becomes a quantity stepper and a sticky cart bar keeps the running total visible. Product pages lead with the food, list highlights plainly, and keep quantity and price in one bar.'
        ],
        img: { id: 'KFC-04', label: 'Menu → product → cart bar', aspect: 'video' }
      },
      {
        title: 'Outcome',
        body: [
          'A complete clickable prototype covering onboarding, home, menu, product and cart. Shared as an open concept on LinkedIn, where it drew 86 reactions and conversation with designers and product people.'
        ]
      }
    ],
    links: [{ label: 'View prototype', href: 'https://www.figma.com/proto/XXCMVkpfax3uvVxcFHsdOl/KFC?node-id=2025-3043&starting-point-node-id=2025%3A3043&hide-ui=1&scaling=scale-down' }],
    next: 'lucid'
  },

  lucid: {
    id: 'lucid',
    title: 'LUCID — Customisable Dreaming',
    kind: 'Speculative product',
    year: '2022 — Ongoing',
    status: 'concept',
    brief: 'What if the third of life we spend asleep could be lived, too? A product ecosystem for building a parallel space inside your dreams.',
    cover: { id: 'LUCID-01', label: 'Cover — the LUCID Dream Band in a night-blue set', aspect: 'scope' },
    facts: [
      ['Role', 'UI/UX designer'],
      ['Scope', 'Research, interaction & visual design, prototyping, testing'],
      ['Timeline', '2022 — ongoing'],
      ['Tools', 'Adobe XD, Photoshop, Premiere Pro']
    ],
    chapters: [
      {
        title: 'The question',
        body: [
          'We spend roughly a third of life asleep and another third at work — and six in ten adults name work and money as major stressors. LUCID asks a speculative question: how might people use more of their lifecycle?'
        ],
        stats: [['~⅓', 'of life spent asleep'], ['83%', 'of US workers report work stress'], ['~2%', 'of dreams replay real events']]
      },
      {
        title: 'Research',
        body: [
          'A quantitative survey of about 100 people mapped sleep patterns, job type, stress and appetite for dream customisation. The answers reshaped the idea from a single gadget into an ecosystem.'
        ],
        stats: [['76%', 'want to customise their dreams'], ['61%', 'would pay for personalisation'], ['69%', 'work in software roles']],
        img: { id: 'LUCID-02', label: 'Survey highlights', aspect: 'flat' }
      },
      {
        title: 'Designed for',
        bullets: ['Working people — move your desk into a dream', 'Students — extra study time while you sleep', 'People with disabilities — full access to every human feature', 'Creators — make what you imagine in seconds']
      },
      {
        title: 'How it works',
        body: [
          'Your workspace syncs to LUCID Cloud. LUCID AI sends that data to the Dream Band, which converts it into signals during sleep to form the LUCID Work Space. The LNC4DT earpiece cancels noise, keeps you focused and reads brain activity back to the cloud; the LUCID app manages avatars, features and devices.'
        ],
        img: { id: 'LUCID-03', label: 'Ecosystem — Dream Band, LNC4DT, app, cloud', aspect: 'flat' }
      },
      {
        title: 'Features',
        bullets: ['Dream Job — cloud work inside a dream', 'Droup — dream together with chosen people', 'Binge — stream films in your sleep', 'Share — save and share dream photos', 'Old Kid — dream as your younger self', 'Parallel Space — explore the internet with no device']
      },
      {
        title: 'Process',
        body: ['Ecosystem flow, task flow and user flow led to paper sketches (May 2022), then lo-fi and hi-fi wireframes for the companion app.'],
        img: { id: 'LUCID-04', label: 'Flows, sketches and hi-fi app screens', aspect: 'flat' }
      },
      {
        title: 'Reflection',
        body: [
          'LUCID is a product concept, not a medical device — building it would need neuroscientists, engineers and developers. Its value is the exercise: taking a provocative idea through real research, systems thinking and interface design.'
        ]
      }
    ],
    links: [{ label: 'Original case study', href: 'https://bharathshivadesign.wixsite.com/my-site-1/lucid' }],
    next: 'slate'
  },

  slate: {
    id: 'slate',
    title: 'Slate Auto — Modular Mods',
    kind: 'Visual concept',
    year: 'Self-initiated',
    status: 'concept',
    brief: 'Slate’s modular EV is a blank canvas. Five editions explore what happens when a car becomes a seasonal, brand-able drop.',
    cover: { id: 'SLATE-01', label: 'Cover — the five editions in a row', aspect: 'scope' },
    facts: [
      ['Role', 'Concept & visual design'],
      ['Scope', 'Concepts, wraps, renders'],
      ['Format', 'LinkedIn carousel'],
      ['Reach', '32K+ impressions · 376 reactions']
    ],
    disclaimer: 'Fan concept. Brands shown belong to their owners; not affiliated with Slate Auto or any brand featured.',
    chapters: [
      {
        title: 'The idea',
        body: [
          'Slate Auto’s modular design language invites customisation. I pushed it further: if form is swappable, a vehicle can launch like a sneaker — editions by season, brand or mood.'
        ]
      },
      {
        title: 'Five editions',
        bullets: ['Promo Edition — a streaming-show wrap with a Hollywood skyline', 'Logistics Beast — cardboard texture, packing tape, stacked boxes', 'Throwback Ride — retro blue phone-box finish with a charger accessory', 'Tour Vehicle — a full island-park safari livery', 'Gold Cruiser — wrapped in gold-foil confectionery vibes'],
        gallery: [
          { id: 'SLATE-02', label: 'Promo Edition' },
          { id: 'SLATE-03', label: 'Logistics Beast' },
          { id: 'SLATE-04', label: 'Throwback Ride' },
          { id: 'SLATE-05', label: 'Tour Vehicle' },
          { id: 'SLATE-06', label: 'Gold Cruiser' }
        ]
      },
      {
        title: 'Response',
        body: ['The carousel reached 32,407 impressions with 376 reactions and 21 comments — designers and brand leads picked favourites and called out details like the peel-worthy tape.'],
        stats: [['32K+', 'impressions'], ['376', 'reactions'], ['21', 'comments']]
      }
    ],
    links: [{ label: 'See the post', href: 'https://www.linkedin.com/posts/bharathshivaux_slateauto-designthinking-modularvehicles-ugcPost-7328727176625692673-7UMc/' }],
    next: 'kfc'
  }
};
