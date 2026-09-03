import type { Metadata } from 'next'
import { Btn, Head, Shell } from '@/components/chrome'
import { AppCell, StudioCell } from '@/components/cells'
import { company, devProducts, publishedProducts, studios } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Apps — beatLabs',
  description:
    'The applications built by beatLabs: Nibango, Curb - Subscription Tracker, Raved — and what’s in development. Each app is its own brand, on its own domain.',
  alternates: { canonical: 'https://beatlabs.ae/apps' },
  openGraph: {
    title: 'Apps — beatLabs',
    description: 'The applications built by beatLabs: Nibango, Curb, Raved, and what’s next.',
    url: 'https://beatlabs.ae/apps',
  },
}

export default function AppsPage() {
  const ordered = [...publishedProducts].sort((a, b) => Number(b.flagship) - Number(a.flagship))
  return (
    <Shell current="apps">
      <section className="hero">
        <h1 className="wall">Every app, <span className="out">its own</span> company.</h1>
        <div className="hero-lower">
          <p className="body">{publishedProducts.length} published, {devProducts.length} in development. Each with its own name, colour and domain. Open one to read its page.</p>
          <div className="actions"><Btn href={`mailto:${company.email}`} external>Contact</Btn></div>
        </div>
      </section>
      <Head title="Published" label="Live or launching" />
      <section className={`cells cells--${ordered.length === 4 ? 4 : 3}`} aria-label="Published apps">
        {ordered.map(p => (
          <AppCell key={p.slug} app={p} big />
        ))}
      </section>
      <Head title="In development" label="Listed, not launched" />
      <section className="cells cells--3" aria-label="Apps in development">
        {devProducts.map(p => (
          <AppCell key={p.slug} app={p} />
        ))}
      </section>
      <Head title="Studios" label="Open for work" />
      <section className="cells cells--2" aria-label="Studios">
        {studios.map(s => (
          <StudioCell key={s.id} studio={s} />
        ))}
      </section>
    </Shell>
  )
}
