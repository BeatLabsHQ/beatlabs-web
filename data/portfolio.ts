// Single source of truth for every beatLabs module.
// The home dashboard, /apps, /apps/[slug], /legal and the sitemap all read from here.

export type ModuleStatus = 'live' | 'launching' | 'dev'

export interface StudioModule {
  id: string
  name: string
  tagline: string
  url: string
  /** Square mark under /public (real asset from the studio's own site). */
  icon?: string
  /** Wide mark (signature/wordmark) under /public, used instead of a square icon. */
  mark?: string
}

export interface ProductDoc {
  label: string
  href: string
}

export interface AppProduct {
  id: string
  slug: string
  name: string
  displayName: string
  type: string
  status: ModuleStatus
  statusText: string
  flagship: boolean
  /** The product's own brand color — drives its ficha and index-row hover. */
  accent: string
  platforms: string
  languages?: string
  oneLiner: string
  tagline: string
  /** The word(s) of the tagline the ficha highlights, verbatim from `tagline`. */
  highlight?: string
  lede: string
  siteUrl: string | null
  /** Real app icon under /public, matted into graphite on the ficha. */
  icon?: string
  /** Real product screenshots under /public (never fabricated UI). */
  screens?: string[]
  /** Android captures, shown in a second panel under the iOS ones. */
  androidScreens?: string[]
  appStoreUrl?: string
  playStoreUrl?: string
  stats?: { value: string; label: string }[]
  features: { id: string; title: string; desc: string }[]
  howItWorks: { step: string; title: string; desc: string }[]
  pricing?: { name: string; price: string; note: string; items: string[]; highlight?: boolean }[]
  faq: { q: string; a: string }[]
  docs: ProductDoc[]
}

export const studios: StudioModule[] = [
  {
    id: '006',
    name: 'TrueLoveCreative',
    tagline: 'Web & creative studio. Brand, design and web for clients who care.',
    url: 'https://truelovecreative.es',
    icon: '/apps/truelove-icon.png',
  },
  {
    id: '007',
    name: 'Estrela.photo',
    tagline: 'Photography studio. Portraits, events and visual stories.',
    url: 'https://estrela.photo',
    mark: '/apps/estrela-mark.png',
  },
]

export const products: AppProduct[] = [
  {
    id: '003',
    slug: 'nibango',
    accent: '#007AFF',
    name: 'NIBANGO',
    displayName: 'Nibango',
    type: 'Marketplace App',
    status: 'launching',
    statusText: 'LAUNCHING',
    flagship: true,
    platforms: 'iOS · Android · Web',
    oneLiner: 'Peer-to-peer second-hand marketplace reimagined for the Gulf. Buy, sell, trust.',
    tagline: 'The marketplace that actually works.',
    highlight: 'works.',
    lede: 'Buy. Sell. Bid. Donate. Six categories, four pricing models, real-time chat — zero commissions. Your neighbourhood, reimagined for the Gulf.',
    siteUrl: 'https://nibango.com',
    icon: '/apps/nibango-icon.png',
    screens: ['/apps/nibango-screen-1.png', '/apps/nibango-screen-2.png', '/apps/nibango-screen-3.png'],
    stats: [
      { value: '6', label: 'Categories' },
      { value: '4', label: 'Pricing models' },
      { value: '0%', label: 'Commission' },
    ],
    features: [
      { id: '01', title: '6 categories. One app.', desc: 'Properties, Motor, Services, Jobs, Pets, Classifieds. Each with custom fields, smart filters, and specialized search.' },
      { id: '02', title: '4 pricing models.', desc: 'Fixed price, negotiable, auction, or free donation. Sellers pick the model that fits the item. Buyers know what they’re getting.' },
      { id: '03', title: 'Real-time chat.', desc: 'WebSocket-powered messaging. Send images, share locations, make offers — all without leaving the app.' },
      { id: '04', title: 'Zero commissions.', desc: 'What you sell for is what you get. No platform cuts, no hidden fees. Ever.' },
    ],
    howItWorks: [
      { step: '01', title: 'Discover', desc: 'Browse curated listings by category, location, and price. Smart filters find exactly what you need — fast.' },
      { step: '02', title: 'Connect', desc: 'Real-time chat. Send images, share locations, make offers — all without leaving the app.' },
      { step: '03', title: 'Close', desc: 'Fixed price, negotiation, auction, or free donation. Pick the model that fits. Done.' },
    ],
    faq: [
      { q: 'What is Nibango?', a: 'A peer-to-peer marketplace built for the Gulf: second-hand goods, properties, motor, services, jobs, pets and classifieds — all in one app.' },
      { q: 'Does Nibango take a commission?', a: 'No. Zero commissions, no platform cuts, no hidden fees. What you sell for is what you get.' },
      { q: 'How do the pricing models work?', a: 'Every listing uses one of four models: fixed price, negotiable, auction, or free donation. The seller picks the model that fits the item.' },
      { q: 'How do I contact a seller?', a: 'Through built-in real-time chat. You can send images, share locations and make offers without leaving the app.' },
      { q: 'Where is it available?', a: 'Nibango is launching now. The web app is available at nibango.com, with iOS and Android apps on the way.' },
    ],
    docs: [
      { label: 'Website', href: 'https://nibango.com' },
      { label: 'Privacy Policy', href: 'https://nibango.com/privacy' },
      { label: 'Terms of Service', href: 'https://nibango.com/terms' },
    ],
  },
  {
    id: '001',
    slug: 'curb',
    accent: '#EC6F2D',
    name: 'CURB',
    displayName: 'Curb',
    type: 'Finance App',
    status: 'live',
    statusText: 'LIVE',
    flagship: false,
    platforms: 'iOS · Android',
    languages: '13 languages',
    oneLiner: 'Track all your subscriptions in one place. Know exactly what you’re paying, when, and cancel what you don’t need.',
    tagline: 'Never pay for a forgotten subscription again.',
    highlight: 'forgotten',
    lede: 'Curb brings all your subscriptions into one place and warns you before every charge. Take back control of your recurring spending in minutes.',
    siteUrl: 'https://getcurbapp.com',
    icon: '/apps/curb-icon.png',
    screens: ['/apps/curb-screen-1.png', '/apps/curb-screen-2.png', '/apps/curb-screen-3.png'],
    appStoreUrl: 'https://apps.apple.com/app/curb-subscription-tracker/id6770895943',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.beatlabs.curb',
    stats: [
      { value: '13', label: 'Built-in categories, plus your own' },
      { value: '4', label: 'Billing cycles, weekly to custom' },
      { value: '15', label: 'Currencies, live rates' },
    ],
    features: [
      { id: '01', title: 'Calendar view.', desc: 'Every renewal on one calendar. See exactly what charges are coming, and when.' },
      { id: '02', title: 'Smart reminders.', desc: 'Get warned before every charge — cancel in time, never pay by accident.' },
      { id: '03', title: 'Multi-currency.', desc: 'Track subscriptions in any currency, converted and totalled automatically.' },
      { id: '04', title: 'Separate profiles.', desc: 'Personal, family, business — keep each budget in its own profile.' },
      { id: '05', title: 'Home screen widgets.', desc: 'Your monthly total and next renewals, visible without opening the app.' },
      { id: '06', title: 'Privacy-first.', desc: 'No bank access, no ads, no tracking. Your data stays on your device.' },
    ],
    howItWorks: [
      { step: '01', title: 'Add your subscriptions', desc: 'A few taps per service. Curb organises price, cycle and renewal date.' },
      { step: '02', title: 'Turn on reminders', desc: 'Curb warns you before each charge, so nothing renews behind your back.' },
      { step: '03', title: 'Cancel the dead weight', desc: 'Spot what you no longer use and stop paying for it.' },
    ],
    pricing: [
      { name: 'Free', price: '€0', note: 'Forever', items: ['Track your subscriptions', 'Calendar view', 'Reminders'] },
      { name: 'Pro', price: '€9.99', note: 'One-time. Not a subscription.', items: ['Everything in Free', 'Unlimited subscriptions', 'Widgets, profiles & more'], highlight: true },
    ],
    faq: [
      { q: 'Does Curb connect to my bank?', a: 'No. Curb never asks for bank access. You add subscriptions manually — it takes seconds and your financial data stays yours.' },
      { q: 'Which platforms does it run on?', a: 'iOS and Android, with feature parity between both.' },
      { q: 'Is Pro a monthly subscription?', a: 'No — ironically for a subscription tracker, Pro is a one-time purchase. Pay once, keep it forever.' },
      { q: 'Is my data safe?', a: 'Your data lives on your device. No ads, no tracking, no third-party analytics.' },
      { q: 'Does it support multiple currencies?', a: 'Yes. Track subscriptions in any currency and see totals converted automatically.' },
      { q: 'Which languages are available?', a: 'The app is available in 13 languages.' },
    ],
    docs: [
      { label: 'Website', href: 'https://getcurbapp.com' },
      { label: 'Privacy Policy', href: 'https://getcurbapp.com/privacy.html' },
      { label: 'Terms of Service', href: 'https://getcurbapp.com/terms.html' },
    ],
  },
  {
    id: '002',
    slug: 'raved',
    accent: '#FF4A00',
    name: 'RAVED',
    displayName: 'Raved',
    type: 'Social App',
    status: 'launching',
    statusText: 'LAUNCHING',
    flagship: false,
    platforms: 'iOS · Android',
    languages: '6 languages',
    oneLiner: 'An inbox for recommendations. Save every song, movie, place, and tip your friends send you — and actually get to them.',
    tagline: 'Everything they rave about, in one place.',
    highlight: 'one place.',
    lede: 'Films, shows, books, music, places — every recommendation your friends give you, captured in seconds and ready when you are.',
    siteUrl: 'https://raved.app',
    icon: '/apps/raved-icon.png',
    screens: ['/apps/raved-screen-1.png', '/apps/raved-screen-2.png', '/apps/raved-screen-3.png'],
    stats: [
      { value: '3', label: 'Taps to capture a rave' },
      { value: '10+', label: 'Categories, plus your own' },
      { value: '2', label: 'Platforms at launch' },
    ],
    features: [
      { id: '01', title: 'Quick capture.', desc: 'Type a title, pick who raved about it, done. Cover art and details fill in automatically.' },
      { id: '02', title: 'Who raved.', desc: 'Every save remembers the person behind it. "Raved by María" — so you know who to thank.' },
      { id: '03', title: 'Filter & done.', desc: 'Filter by category, mark things done, keep the list honest.' },
      { id: '04', title: 'Surprise me.', desc: 'Can’t decide tonight? One tap picks a random pending rave for you.' },
      { id: '05', title: 'Groups.', desc: 'Share raves with friends — recommendations go straight from their app to yours.' },
      { id: '06', title: 'Make it yours.', desc: 'A full set of visual skins, from paper classic to dark modes.' },
    ],
    howItWorks: [
      { step: '01', title: 'Capture', desc: 'Save the recommendation the moment you get it — before it evaporates.' },
      { step: '02', title: 'Decide', desc: 'Browse your list or let Surprise Me pick for you.' },
      { step: '03', title: 'Share', desc: 'Send raves to friends as posters, links or straight into their app.' },
    ],
    pricing: [
      { name: 'Free', price: '€0', note: 'Up to 30 raves', items: ['Quick capture', 'All categories', 'Surprise me'] },
      { name: 'Pro', price: 'from €0.99', note: 'Monthly, yearly or lifetime', items: ['Unlimited raves', 'All skins', 'Custom categories'], highlight: true },
    ],
    faq: [
      { q: 'Is Raved free?', a: 'Yes — free up to 30 saved raves. Pro unlocks unlimited raves, all skins and custom categories, from €0.99.' },
      { q: 'Which platforms?', a: 'Raved is launching on iOS and Android, with full feature parity.' },
      { q: 'What can I save?', a: 'Films, shows, books, music, podcasts, places, games and more — plus your own custom categories.' },
      { q: 'How do groups work?', a: 'Create a group with friends and raves flow between your apps automatically. No more lost WhatsApp recommendations.' },
      { q: 'Is my data private?', a: 'Raved has no ads and no tracking. Your raves sync through your account and stay yours.' },
    ],
    docs: [
      { label: 'Website', href: 'https://raved.app' },
      { label: 'Privacy Policy', href: 'https://raved.app/privacy' },
      { label: 'Terms of Service', href: 'https://raved.app/terms' },
    ],
  },
  {
    id: '004',
    slug: 'epiloq',
    accent: '#8A8A85',
    name: 'EPILOQ',
    displayName: 'Epiloq',
    type: 'Entertainment App',
    status: 'dev',
    statusText: 'DEV',
    flagship: false,
    platforms: 'iOS · Android',
    oneLiner: 'Track shows, movies, comics, and books in one place. Minimal, calm, tool-first — for everything you watch and read.',
    tagline: '',
    lede: '',
    siteUrl: null,
    features: [],
    howItWorks: [],
    faq: [],
    docs: [],
  },
  {
    id: '008',
    slug: 'blab',
    accent: '#E3241C',
    name: 'BLAB',
    displayName: 'Blab',
    type: 'Social App',
    status: 'live',
    statusText: 'LIVE',
    flagship: false,
    platforms: 'iOS · Android · Web',
    languages: '7 languages',
    oneLiner: 'A social app of daily micro-challenges. Answer today’s challenge in your mode — confession, roast, unpopular opinion — inside worlds that get your context.',
    tagline: 'Answer challenges. Pick your mode. Stand out.',
    highlight: 'Stand out.',
    lede: 'One challenge a day, the same for everyone. Five modes to answer it. Twenty worlds that get your context. Five reactions that say something. No engagement algorithm deciding what you see.',
    siteUrl: 'https://blab.day',
    icon: '/apps/blab-icon.png',
    screens: ['/apps/blab-screen-1.png', '/apps/blab-screen-2.png', '/apps/blab-screen-3.png'],
    androidScreens: ['/apps/blab-android-1.png', '/apps/blab-android-2.png', '/apps/blab-android-3.png'],
    appStoreUrl: 'https://apps.apple.com/app/id6807564772',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.beatlabs.blab',
    stats: [
      { value: '5', label: 'Modes' },
      { value: '20', label: 'Worlds' },
      { value: '7', label: 'Languages' },
    ],
    features: [
      { id: '01', title: 'A challenge a day.', desc: 'Every day the app proposes one question for all of BLAB. Never stare at an empty box again — and you can always post freely too.' },
      { id: '02', title: '5 modes.', desc: 'Confession, roast, unpopular opinion, idea, advice. Every challenge sets its tone, so everyone knows how to read you.' },
      { id: '03', title: '20 worlds.', desc: 'Developers, photography, music & DJs, fitness, startups, food, travel, pets, money, work, daily life and more. No joining: a world is just where you post.' },
      { id: '04', title: 'Reactions that mean something.', desc: '❤️ Like, 🙌 That’s me, 💥 Brutal, 🛠️ Useful, 🔖 Saved. Reactions you give yourself never count.' },
      { id: '05', title: 'Photo, video, GIF, link, poll, Check-in.', desc: 'A photo or a short video, a KLIPY GIF, a link card that never hides its real domain, a 24-hour poll, or a Check-in of a film, book, game, dish, album, podcast or place with your stars.' },
      { id: '06', title: 'Ranking, streak and your week.', desc: 'Global, following, your country or any world — today, 7 days, 30 days. A daily reminder at your hour, and every Sunday a recap of your week.' },
    ],
    howItWorks: [
      { step: '01', title: 'Read first', desc: 'Open BLAB and read today’s challenge and its answers. No account needed to browse.' },
      { step: '02', title: 'Answer in a mode', desc: 'Sign in with Apple or Google in one tap, pick a world, and post — text, photo, GIF, poll or Check-in.' },
      { step: '03', title: 'Stand out', desc: 'Earn reactions, climb the ranking, keep your streak going.' },
    ],
    pricing: [
      { name: 'Free', price: '€0', note: 'Everything you need', items: ['Daily challenges', 'All modes and worlds', 'Photo, GIF, link and Check-in', 'Vote in polls'] },
      { name: 'Pro', price: '€2.99', note: 'Monthly, or €24.99 a year', items: ['Video up to 15 s', 'Create polls', 'PRO badge'], highlight: true },
    ],
    faq: [
      { q: 'What is BLAB?', a: 'A social app where every post starts from a challenge. The app proposes one daily; you answer in a mode, inside a world of people who get your context.' },
      { q: 'What are modes and worlds?', a: 'A mode is the tone of your answer: confession, roast, unpopular opinion, idea or advice. A world is the community it belongs to — developers, photography, music, fitness, startups, marketing and fourteen more.' },
      { q: 'Can I create my own world?', a: 'Not yet. Worlds are a curated catalogue of twenty so communities don’t fragment. New ones are added by us.' },
      { q: 'Is BLAB free?', a: 'Yes. Pro (€2.99 a month or €24.99 a year) adds video posts up to 15 seconds, creating polls and the PRO badge.' },
      { q: 'Where is it available?', a: 'On iOS and iPad, Android and the web at blab.day, in English, Spanish, Italian, French, Portuguese, German and Arabic.' },
    ],
    docs: [
      { label: 'Website', href: 'https://blab.day' },
      { label: 'Privacy Policy', href: 'https://getblab.app/privacy' },
      { label: 'Terms of Service', href: 'https://getblab.app/terms' },
    ],
  },
  {
    id: '005',
    slug: 'timeup',
    accent: '#8A8A85',
    name: 'TIMEUP',
    displayName: 'TimeUp',
    type: 'Productivity App',
    status: 'dev',
    statusText: 'DEV',
    flagship: false,
    platforms: 'iOS',
    oneLiner: 'Time management reimagined. Focus blocks, deep work sessions, and real accountability for how you spend your hours.',
    tagline: '',
    lede: '',
    siteUrl: null,
    features: [],
    howItWorks: [],
    faq: [],
    docs: [],
  },
]

export const publishedProducts = products.filter(p => p.status !== 'dev')
export const devProducts = products.filter(p => p.status === 'dev')

export function getProduct(slug: string): AppProduct | undefined {
  return products.find(p => p.slug === slug && p.status !== 'dev')
}

// ── Company identity — the entity behind every module ──
export const company = {
  brand: 'beatLabs',
  legalName: 'BeatLabs FZE LLC',
  license: '53228',
  zone: 'Ajman Media City Free Zone',
  form: 'Free Zone Establishment, Amiri Decree No.8 of 2021',
  address: 'AMC-BLA-B.C-6010468, AMC Boulevard-A, Ajman, UAE',
  founded: '2026-03-25',
  email: 'info@beatlabs.ae',
  phone: '+971585324519',
  city: 'Dubai, UAE',
  founder: {
    name: 'Francisco Javier Estrela Belmonte',
    role: 'Founder & Manager',
    line: 'design, code, launch, repeat',
  },
  mission: [
    'beatLabs is the holding entity behind everything I build.',
    'Each project has its own identity, its own audience, its own path.',
    'Built properly. Always.',
  ],
} as const

export const divisions = [
  { key: 'apps', label: 'Apps', count: products.length },
  { key: 'creative', label: 'Web & Creative', count: studios.length },
] as const

/** Status counts across every module (apps and studios), for the readouts. */
export function statusCounts() {
  const all: ModuleStatus[] = [...products.map(p => p.status), ...studios.map(() => 'live' as const)]
  return {
    total: all.length,
    live: all.filter(s => s === 'live').length,
    launching: all.filter(s => s === 'launching').length,
    dev: all.filter(s => s === 'dev').length,
  }
}
