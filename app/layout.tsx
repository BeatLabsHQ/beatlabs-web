import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { company } from '@/data/portfolio'
import './globals.css'

// Fixel — MacPaw's own open face (OFL), self-hosted: Display at 500/400 for headings, Text for the rest.
const display = localFont({
  src: [
    { path: './fonts/fixel/FixelDisplay-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/fixel/FixelDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/fixel/FixelDisplay-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
})
const text = localFont({
  src: [
    { path: './fonts/fixel/FixelText-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/fixel/FixelText-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/fixel/FixelText-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/fixel/FixelText-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-text',
  display: 'swap',
})

/* ── Direction contract (owner-pinned: the canon, MacPaw / CleanMyMac register) ──
THESIS: a conventional premium-software company site, played straight. Refuses
the type wall's shouting; earns trust through polish, air and real product visuals.
OWN-WORLD: white ground, #f5f5f7 surfaces, ink #0b0b0f, one sans (Geist),
24px cards with a soft offset shadow, pill buttons, a sticky translucent bar,
a closing dark band; lime stays the status colour; each ficha tinted by the
product's own accent.
STORY: the visitor lands on a centred statement over the real apps, scans the
portfolio cards, reads who is behind them, and writes.
FIRST VIEWPORT: bar; centred "We build companies. Not projects."; one line;
two pill buttons; a shelf of three real product screens on a grey surface.
FORM: the standing exit (canon), pinned by the owner on 2026-09-03 after a live
comparison against the type wall; no roll. Refined in the browser by the owner
(heavier h1, bar fade, progress ring, autoplay, dot/dash indicator).
FINISH: reviewed in the browser at 1440 and 390 on every route; DESIGN.md records
the built world; every shipping raster carries its provenance. */
const CONTRACT = '<!-- impeccable contract · owner-pinned canon (MacPaw register), 2026-09-03. Full text in app/layout.tsx -->'

export const metadata: Metadata = {
  title: 'beatLabs — Independent app group. Dubai, UAE.',
  description: 'beatLabs (BeatLabs FZE LLC) is a UAE-registered group building independent app brands. Home of Nibango, Curb, Raved, Blab, TrueLoveCreative and Estrela.photo.',
  keywords: [
    'beatLabs', 'digital studio UAE', 'UAE startup studio', 'tech studio Dubai', 'digital studio Dubai',
    'Nibango', 'Curb', 'Curb Subscription Tracker', 'Raved', 'Raved app', 'TrueLoveCreative', 'Estrela photo',
    'app development UAE', 'startup Ajman', 'digital brands UAE',
    'web design Dubai', 'marketplace app UAE', 'creative studio UAE',
    'BeatLabs FZE', 'Ajman Media City Free Zone',
  ],
  authors: [{ name: 'beatLabs', url: 'https://beatlabs.ae' }],
  creator: 'beatLabs',
  publisher: company.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'beatLabs — Independent app group. Dubai, UAE.',
    description: 'UAE-registered group building independent app brands. Home of Nibango, Curb, Raved, Blab, TrueLoveCreative and Estrela.photo.',
    url: 'https://beatlabs.ae',
    siteName: 'beatLabs',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://beatlabs.ae/og.png',
        width: 1200,
        height: 630,
        alt: 'beatLabs — Independent app group, Dubai, UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'beatLabs — Independent app group. Dubai, UAE.',
    description: 'UAE-registered group building independent app brands.',
    images: ['https://beatlabs.ae/og.png'],
  },
  alternates: {
    canonical: 'https://beatlabs.ae',
  },
  metadataBase: new URL('https://beatlabs.ae'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: company.brand,
              legalName: company.legalName,
              url: 'https://beatlabs.ae',
              logo: 'https://beatlabs.ae/logo.png',
              description: 'UAE-registered group building independent app brands.',
              email: company.email,
              telephone: company.phone,
              foundingDate: company.founded,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'AMC-BLA-B.C-6010468, AMC Boulevard-A',
                addressLocality: 'Ajman',
                addressRegion: company.zone,
                addressCountry: 'AE',
              },
              sameAs: [
                'https://getcurbapp.com',
                'https://raved.app',
                'https://nibango.com',
                'https://truelovecreative.es',
                'https://estrela.photo',
              ],
            }),
          }}
        />
      </head>
      <body className={`${display.variable} ${text.variable}`}>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        {children}
      </body>
    </html>
  )
}
