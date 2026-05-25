import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curb - Subscription Tracker',
  description: 'Know exactly what you\'re paying for. Track every subscription, get alerts before renewals, and save money. Available on iOS and Android.',
  icons: {
    icon: '/curb-favicon.svg',
    apple: '/curb-favicon.svg',
  },
  openGraph: {
    title: 'Curb - Subscription Tracker',
    description: 'Know exactly what you\'re paying for. Track every subscription, get alerts before renewals, and save money.',
    url: 'https://getcurbapp.com',
    siteName: 'beatLabs',
    type: 'website',
  },
}

export default function SubtrackrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
