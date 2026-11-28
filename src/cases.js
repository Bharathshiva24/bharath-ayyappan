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
    cover: { id: 'KFC-01', src: 'work/kfc-cover.webp', label: 'Home, menu and product screens', aspect: 'scope' },
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
        img: { id: 'KFC-02', src: 'work/kfc-onboarding.webp', label: 'Login and personalised welcome', aspect: 'video' }
      },
      {
        title: 'A home screen that earns its scroll',
        body: [
          'Everything a regular needs sits above the fold: a one-tap Member ID for in-store scanning, live points and rewards ready to claim, and a day-of-week offer.',
          'Below, a six-tile category grid (Golden Edition, Box Meals, Buckets, Burgers, Snacks, Bowls) and a swipeable deals “ticket” with Apply Offer turn browsing into ordering.'
        ],
        bullets: ['Member ID always one tap away', 'Points + rewards surfaced, not buried', 'Offers applied in one step from Home'],
        img: { id: 'KFC-03', src: 'work/kfc-home.webp', label: 'Home: rewards, offers, categories and deals', aspect: 'video' }
      },
      {
        title: 'Order without losing your place',
        body: [
          'The menu pins the store location and category tabs at the top and an In-store / Take Away switch at the bottom — the two decisions that change price and timing.',
          'Items add straight from the list; the button becomes a quantity stepper and a sticky cart bar keeps the running total visible. Product pages lead with the food, list highlights plainly, and keep quantity and price in one bar.'
        ],
        img: { id: 'KFC-04', src: 'work/kfc-order.webp', label: 'Menu with in-store / take-away switch, and product detail', aspect: 'video' }
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
    cover: { id: 'LUCID-01', src: 'work/lucid-cover.webp', label: 'The LUCID Dream Band at night', aspect: 'scope' },
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
        stats: [['76%', 'want to customise their dreams'], ['61%', 'would pay for personalisation'], ['69%', 'work in software roles']]
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
        img: { id: 'LUCID-03', src: 'work/lucid-flow.webp', label: 'Ecosystem flow: user, Dream Band, LNC4DT, app and cloud', aspect: 'flat' },
        gallery: [
          { id: 'LUCID-05', src: 'work/lucid-band.webp', label: 'LUCID Dream Band' },
          { id: 'LUCID-06', src: 'work/lucid-lnc4dt.webp', label: 'LNC4DT earpiece' },
          { id: 'LUCID-07', src: 'work/lucid-app.webp', label: 'LUCID app sign-in' }
        ]
      },
      {
        title: 'Features',
        bullets: ['Dream Job — cloud work inside a dream', 'Droup — dream together with chosen people', 'Binge — stream films in your sleep', 'Share — save and share dream photos', 'Old Kid — dream as your younger self', 'Parallel Space — explore the internet with no device']
      },
      {
        title: 'Process',
        body: ['Ecosystem flow, task flow and user flow led to paper sketches (May 2022), then lo-fi and hi-fi wireframes for the companion app.'],
        img: { id: 'LUCID-04', src: 'work/lucid-sketch.webp', label: 'Paper sketches of the LUCID app, May 2022', aspect: 'flat' }
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
    cover: { id: 'SLATE-01', src: 'work/slate-cover.webp', label: 'The five editions', aspect: 'scope' },
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
          { id: 'SLATE-02', src: 'work/slate-promo.webp', aspect: 'photo', label: 'Promo Edition' },
          { id: 'SLATE-03', src: 'work/slate-logistics.webp', aspect: 'photo', label: 'Logistics Beast' },
          { id: 'SLATE-04', src: 'work/slate-throwback.webp', aspect: 'photo', label: 'Throwback Ride' },
          { id: 'SLATE-05', src: 'work/slate-tour.webp', aspect: 'photo', label: 'Tour Vehicle' },
          { id: 'SLATE-06', src: 'work/slate-gold.webp', aspect: 'photo', label: 'Gold Cruiser' }
        ]
      },
      {
        title: 'Response',
        body: ['The carousel reached 32,407 impressions with 376 reactions and 21 comments — designers and brand leads picked favourites and called out details like the peel-worthy tape.'],
        stats: [['32K+', 'impressions'], ['376', 'reactions'], ['21', 'comments']]
      }
    ],
    links: [{ label: 'See the post', href: 'https://www.linkedin.com/posts/bharathshivaux_slateauto-designthinking-modularvehicles-ugcPost-7328727176625692673-7UMc/' }],
    next: 'creativecat'
  },
  creativecat: {
    id: 'creativecat',
    title: 'CreativeCat — A Year of Content, Planned by AI',
    kind: 'Founder · AI product',
    year: '2023 — 2025 · On hold',
    status: 'concept',
    statusLabel: 'On hold',
    brief: 'Not another AI writer: a platform that planned and generated up to 365 days of curated content for product-based businesses. A commercial failure, and the most valuable lesson of my career.',
    cover: { id: 'CC-01', src: 'work/creativecat-cover.webp', label: 'CreativeCat', alt: 'CreativeCat logo', aspect: 'scope' },
    facts: [
      ['Role', 'Founder · product, design and team lead'],
      ['Team', 'A small team of friends'],
      ['Timeline', '2023 — 2025, now on hold'],
      ['Recognition', 'Google Cloud Startup Program']
    ],
    chapters: [
      {
        title: 'Why we built it',
        body: [
          'We started CreativeCat during the early rise of ChatGPT. Generative AI could suddenly write anything — but businesses still didn’t know what to post, when, or for whom. Most AI tools answered one prompt at a time; nobody was planning the year.',
          'For product-based businesses, content isn’t a single caption. It is a calendar of launches, festivals, seasons and campaigns, different for every region and every platform. That planning was the real work, and that’s where we aimed.'
        ]
      },
      {
        title: 'What CreativeCat was',
        body: [
          'CreativeCat was an AI-powered curated content and creative generation platform for product businesses. Its core capability: plan and generate up to 365 days of content, shaped around the business rather than a blank prompt box.'
        ],
        bullets: [
          'Product categories and business requirements',
          'Target geography and regional audiences',
          'Marketing goals and campaigns',
          'Seasonal events, festivals and occasions',
          'Social media platforms and content formats',
          'Year-round content calendars and creative requirements'
        ]
      },
      {
        title: 'More than a calendar',
        body: [
          'Around the planner we built a set of tools to simplify the rest of the workflow — writing and editing tools, templates and a workspace to organise files, so a marketing team could go from plan to finished creative in one place.'
        ]
      },
      {
        title: 'Building it with friends',
        body: [
          'I led a small team of friends — setting the product direction, designing the experience and coordinating development while we learned AI integration in real time as the models changed under us.',
          'CreativeCat was selected for the Google Cloud Startup Program, which gave us the infrastructure to build and run the platform.'
        ]
      },
      {
        title: 'Why it’s on hold',
        body: [
          'CreativeCat didn’t reach the commercial success we expected. Financial pressure and the cost of marketing a new product in a crowded, fast-moving AI market caught up with us, and I chose to put the project on hold.'
        ]
      },
      {
        title: 'What it taught me',
        body: [
          'CreativeCat may have been a commercial failure, but it was a successful learning experience. It gave me the confidence and the foundation to move beyond designing interfaces and start building products of my own.'
        ],
        bullets: [
          'Product strategy — choosing what to build and what to leave out',
          'AI integration — designing around models that change every month',
          'Team management — leading friends as a team, with real deadlines',
          'Product development — taking an idea from design to working software',
          'Marketing — a great product still has to find its audience',
          'Going to market — the distance between “it works” and “people pay for it”'
        ]
      }
    ],
    next: 'kfc'
  }
};
