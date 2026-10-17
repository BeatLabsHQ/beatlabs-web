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
  /** Live elsewhere but not on the App Store yet: its button opens a "coming soon" dialog. */
  appStoreSoon?: boolean
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
    status: 'live',
    statusText: 'LIVE',
    flagship: true,
    platforms: 'Android · Web',
    languages: '17 languages',
    oneLiner: 'A local marketplace to buy, sell, bid and give away near you. Every listing says how it wants to be bought — and there’s zero commission.',
    tagline: 'The marketplace that actually works.',
    highlight: 'works.',
    lede: 'Buy. Sell. Bid. Give. Six categories with their own fields, four ways to deal, and a real-time chat to agree where to meet — with zero commission. Pick a place and a radius from 1 to 200 km: that’s your market.',
    siteUrl: 'https://nibango.com',
    icon: '/apps/nibango-icon.png',
    androidScreens: ['/apps/nibango-android-1.png', '/apps/nibango-android-2.png', '/apps/nibango-android-3.png'],
    appStoreSoon: true,
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nibango.app',
    stats: [
      { value: '6', label: 'Categories' },
      { value: '4', label: 'Ways to deal' },
      { value: '0%', label: 'Commission' },
    ],
    features: [
      { id: '01', title: 'Four ways to deal.', desc: 'Fixed price, negotiable, auction or donation. The colour on every card tells you before you tap, so nobody wastes a message asking if the price is firm.' },
      { id: '02', title: '6 categories. Real fields.', desc: 'Properties, Motor, Services, Jobs, Pets (adoption only) and Classifieds. Each has its own form and filters — a flat is searched by bedrooms, a car by mileage.' },
      { id: '03', title: 'Near you, really.', desc: 'Pick a city or drop a pin, then a radius from 1 to 200 km. Browse as a list or on the map, and save the searches you care about.' },
      { id: '04', title: 'Offers and bids, one tap.', desc: 'On negotiable listings you send an offer with a button; the seller accepts, counters or declines. Auctions take bids until the deadline. No numbers buried in messages.' },
      { id: '05', title: 'A chat for the handover.', desc: 'Real-time messages with read receipts. Send photos, your location or a meeting point, schedule the pickup, and share your phone or WhatsApp only if you choose.' },
      { id: '06', title: 'Trust built in.', desc: 'Public profiles with ratings from completed sales, follow the sellers you like, and report or block any user or listing at any time.' },
    ],
    howItWorks: [
      { step: '01', title: 'Discover', desc: 'Browse what’s for sale around you by category, search, price and distance — in a list or on the map. No account needed to look.' },
      { step: '02', title: 'Deal', desc: 'Accept the price, send an offer, place a bid, or ask for a free item. The listing says which.' },
      { step: '03', title: 'Meet', desc: 'Agree the time and place in the chat, schedule the pickup, and rate each other after the sale.' },
    ],
    faq: [
      { q: 'What is Nibango?', a: 'A local marketplace to buy and sell near you: second-hand goods, properties, motor, services, jobs and pets for adoption — all in one app.' },
      { q: 'Does Nibango take a commission?', a: 'No. Buyers and sellers arrange and complete each sale directly with each other. Nibango never handles the payment between users, so it never takes a cut.' },
      { q: 'How do the ways to deal work?', a: 'Second-hand items, cars and motorbikes can be sold at a fixed price, as negotiable, by auction, or given away free. Properties and services show their price; jobs and pet adoptions are free to post.' },
      { q: 'How do I contact a seller?', a: 'Through the built-in real-time chat. Offers and bids are one-tap buttons; the chat is for arranging the handover — photos, a meeting point, a scheduled pickup.' },
      { q: 'Is Nibango free?', a: 'Yes. Browsing, listing and chatting are free. Promoting a listing for more visibility is optional.' },
      { q: 'Where is it available?', a: 'On Android (Google Play) and on the web at nibango.com, in 17 languages, in any city. The iPhone app is coming soon.' },
    ],
    docs: [
      { label: 'Website', href: 'https://nibango.com' },
      { label: 'Privacy Policy', href: 'https://nibango.com/privacy/' },
      { label: 'Terms of Service', href: 'https://nibango.com/terms/' },
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
    androidScreens: ['/apps/curb-android-1.png', '/apps/curb-android-2.png', '/apps/curb-android-3.png'],
    appStoreUrl: 'https://apps.apple.com/app/curb-subscription-tracker/id6770895943',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.beatlabs.curb',
    stats: [
      { value: '13', label: 'Built-in categories, plus your own' },
      { value: '4', label: 'Billing cycles, weekly to custom' },
      { value: '33', label: 'Currencies, live rates' },
    ],
    features: [
      { id: '01', title: 'Calendar view.', desc: 'Every renewal on one calendar, with the month’s total and number of charges.' },
      { id: '02', title: 'Renewal reminders.', desc: 'Get warned before every charge and before free trials end. The bell keeps every reminder, even the ones you dismissed.' },
      { id: '03', title: 'Insights and price history.', desc: 'Monthly and yearly totals, spending by category, the price changes you record, and your Year in Review.' },
      { id: '04', title: 'Multi-currency.', desc: 'Track subscriptions in 33 currencies, converted to your display currency automatically.' },
      { id: '05', title: 'Home screen widgets.', desc: 'Your monthly spending and next renewals, visible without opening the app.' },
      { id: '06', title: 'Private by design.', desc: 'No bank access, no ads. Optional Face ID or fingerprint lock, and free export to JSON or CSV on any plan.' },
    ],
    howItWorks: [
      { step: '01', title: 'Sign in', desc: 'Sign in with Apple or Google. Your subscriptions sync across your devices.' },
      { step: '02', title: 'Add your subscriptions', desc: 'Name, price and cycle. Curb recognises known services and sets their logo.' },
      { step: '03', title: 'Cancel the dead weight', desc: 'Get reminded before each charge, spot what you no longer use and stop paying for it.' },
    ],
    pricing: [
      { name: 'Free', price: '€0', note: 'Forever', items: ['Up to 5 subscriptions', 'Calendar, reminders and insights', 'Cloud sync and multi-currency', 'Export to JSON or CSV'] },
      { name: 'Pro', price: '€9.99', note: 'One-time. Not a subscription.', items: ['Everything in Free', 'Unlimited subscriptions', 'Unlimited profiles', 'JSON and CSV import'], highlight: true },
    ],
    faq: [
      { q: 'Does Curb connect to my bank?', a: 'No. Curb never asks for bank or email access. You add subscriptions yourself — it takes seconds.' },
      { q: 'Which platforms does it run on?', a: 'iPhone and iPad on iOS, and Android phones. Pro is bought separately on the App Store and Google Play.' },
      { q: 'Is Pro a monthly subscription?', a: 'No — ironically for a subscription tracker, Pro is a one-time €9.99 purchase. Pay once, keep it forever.' },
      { q: 'Is my data safe?', a: 'An account is required, so your data is stored on your device and synced through Firebase, encrypted in transit and at rest. No ads, and we never sell your data.' },
      { q: 'Does it support multiple currencies?', a: 'Yes. Track subscriptions in 33 currencies and see totals converted automatically.' },
      { q: 'Which languages are available?', a: 'The app is available in 13 languages, which you can switch in Settings.' },
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
    type: 'Lifestyle App',
    status: 'live',
    statusText: 'LIVE',
    flagship: false,
    platforms: 'iOS · Android',
    languages: '6 languages',
    oneLiner: 'An inbox for recommendations. Save every film, show, book, album, podcast and place your friends rave about — and actually get to them.',
    tagline: 'Everything they rave about, in one place.',
    highlight: 'one place.',
    lede: 'Films, shows, books, music, podcasts, places — every recommendation your friends give you, captured in seconds with who told you, and ready when you are.',
    siteUrl: 'https://raved.app',
    icon: '/apps/raved-icon.png',
    screens: ['/apps/raved-screen-1.png', '/apps/raved-screen-2.png', '/apps/raved-screen-3.png'],
    appStoreUrl: 'https://apps.apple.com/app/id6784197175',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.beatlabs.raved',
    stats: [
      { value: '10', label: 'Categories, plus your own' },
      { value: '16', label: 'Skins to reskin the app' },
      { value: '6', label: 'Languages' },
    ],
    features: [
      { id: '01', title: 'Quick capture.', desc: 'Type a title and Raved finds the film, show, book, album, podcast, game or place — cover art included. Tag who raved about it, done.' },
      { id: '02', title: 'Who raved.', desc: 'Every rave keeps its source: “FILM · RAVED BY MARÍA · 2 DAYS AGO”. When you finally watch it, you know who to thank.' },
      { id: '03', title: 'Surprise me.', desc: 'Can’t decide tonight? One tap picks a random pending rave — from your list and your groups.' },
      { id: '04', title: 'Groups.', desc: 'Create a group with friends or family, share its code, and everyone adds to the same list. Report or block anyone in one tap.' },
      { id: '05', title: 'Share the hype.', desc: 'Send any rave as a link or a poster card. Friends with Raved open it straight in the app.' },
      { id: '06', title: 'Make it yours.', desc: 'Sixteen skins reskin the whole app, from the original paper to Noir, Terminal and Blueprint. Works offline, with export and import any time.' },
    ],
    howItWorks: [
      { step: '01', title: 'Capture', desc: 'Sign in with Apple or Google, then save the recommendation the moment you get it — before it evaporates.' },
      { step: '02', title: 'Decide', desc: 'Filter by category, mark things done, or let Surprise me pick for you.' },
      { step: '03', title: 'Share', desc: 'Send raves as links or poster cards, or trade them in a group with the people whose taste you trust.' },
    ],
    pricing: [
      { name: 'Free', price: '€0', note: 'Up to 30 raves', items: ['Every core feature', 'Groups and join codes', 'Share as link or card', 'The original Paper skin'] },
      { name: 'Pro', price: '€1.99', note: 'A month, €9.99 a year, or Lifetime', items: ['Unlimited raves', 'All 16 skins', 'Your own categories'], highlight: true },
    ],
    faq: [
      { q: 'Is Raved free?', a: 'Yes — free up to 30 raves, with every core feature including groups and sharing. Pro (€1.99 a month, €9.99 a year, or a one-time Lifetime purchase) unlocks unlimited raves, all 16 skins and your own categories.' },
      { q: 'Which platforms does it run on?', a: 'iPhone and iPad on iOS, and Android phones and tablets. Pro is bought separately on the App Store and Google Play.' },
      { q: 'What can I save?', a: 'Films, shows, books, music, podcasts, places, video games, comics, recipes and anything else — plus your own categories with Pro.' },
      { q: 'How do groups work?', a: 'Create a group, share its code, and friends join to add recommendations. Everyone marks their own “done”. No chat — just recs.' },
      { q: 'Do I need an account?', a: 'Yes. Sign in with Apple or Google so your raves sync across devices and your groups stay in sync. You can delete your account and everything in it from Settings.' },
      { q: 'Is my data private?', a: 'No ads, no tracking, no analytics. Your account and raves are stored only to sync them, through Firebase. Your raves are yours: export them any time.' },
      { q: 'Which languages are available?', a: 'English, Spanish, French, German, Italian and Portuguese.' },
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
