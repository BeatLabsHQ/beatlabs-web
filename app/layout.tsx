import type { Metadata } from 'next'
import { Bebas_Neue, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'beatLabs — Digital Studio. Dubai, UAE.',
  description: 'beatLabs (BeatLabs FZE LLC) is a UAE-registered digital studio building apps, agencies, and creative brands. Home of Nibango, Curb - Subscription Tracker, WebVanguard, TrueLoveCreative, and Estrela.photo.',
  keywords: [
    'beatLabs', 'digital studio UAE', 'UAE startup studio', 'tech studio Dubai', 'digital studio Dubai',
    'Nibango', 'Curb', 'Curb Subscription Tracker', 'WebVanguard', 'TrueLoveCreative', 'Estrela photo',
    'app development UAE', 'startup Ajman', 'digital brands UAE',
    'web design Dubai', 'marketplace app UAE', 'creative studio UAE',
    'BeatLabs FZE', 'Ajman Media City Free Zone',
  ],
  authors: [{ name: 'beatLabs', url: 'https://beatlabs.ae' }],
  creator: 'beatLabs',
  publisher: 'BeatLabs FZE LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'beatLabs — Digital Studio. Dubai, UAE.',
    description: 'UAE-registered digital studio building apps, agencies, and creative brands. Home of Nibango, Curb - Subscription Tracker, WebVanguard, TrueLoveCreative, and Estrela.photo.',
    url: 'https://beatlabs.ae',
    siteName: 'beatLabs',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://beatlabs.ae/og-image.png',
        width: 1200,
        height: 630,
        alt: 'beatLabs — Digital Studio Dubai, UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'beatLabs — Digital Studio. Dubai, UAE.',
    description: 'UAE-registered digital studio building apps, agencies, and creative brands.',
    images: ['https://beatlabs.ae/og-image.png'],
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
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "beatLabs",
              "legalName": "BeatLabs FZE LLC",
              "url": "https://beatlabs.ae",
              "logo": "https://beatlabs.ae/logo.png",
              "description": "UAE-registered digital studio building apps, agencies, and creative brands.",
              "email": "info@beatlabs.ae",
              "telephone": "+971585324519",
              "foundingDate": "2026-03-25",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "AMC-BLA-B.C-6010468, AMC Boulevard-A",
                "addressLocality": "Ajman",
                "addressRegion": "Ajman Media City Free Zone",
                "addressCountry": "AE"
              },
              "sameAs": [
                "https://getcurbapp.com",
                "https://webvanguard.co",
                "https://nibango.com",
                "https://truelovecreative.es",
                "https://estrela.photo"
              ]
            })
          }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${syne.variable} ${jetbrainsMono.variable}`}>{children}</body>
    </html>
  )
}
