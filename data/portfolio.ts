// Single source of truth for every beatLabs module.
// The home dashboard, /apps, /apps/[slug], /legal and the sitemap all read from here.

export type ModuleStatus = 'live' | 'launching' | 'dev'

export interface StudioModule {
  id: string
  name: string
  tagline: string
  url: string
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
  lede: string
  siteUrl: string | null
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
  },
  {
    id: '007',
    name: 'Estrela.photo',
    tagline: 'Photography studio. Portraits, events and visual stories.',
    url: 'https://estrela.photo',
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
    lede: 'Buy. Sell. Bid. Donate. Six categories, four pricing models, real-time chat — zero commissions. Your neighbourhood, reimagined for the Gulf.',
    siteUrl: 'https://nibango.com/uiapp',
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
    lede: 'Curb brings all your subscriptions into one place and warns you before every charge. Take back control of your recurring spending in minutes.',
    siteUrl: 'https://getcurbapp.com',
    appStoreUrl: 'https://apps.apple.com/app/curb-subscription-tracker/id6770895943',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.beatlabs.curb',
    stats: [
      { value: '$273', label: 'Avg. monthly spend on subscriptions' },
      { value: '30%', label: 'Of subscriptions go forgotten' },
      { value: '5 min', label: 'To take back control' },
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
    lede: 'Films, shows, books, music, places — every recommendation your friends give you, captured in seconds and ready when you are.',
    siteUrl: 'https://raved.app',
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
      { q: 'Which platforms?', a: 'iOS and Android, with full feature parity.' },
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
