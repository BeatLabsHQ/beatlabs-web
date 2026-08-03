import type { Metadata } from 'next'
import Link from 'next/link'
import { Page, Nav, SectionLabel } from '@/components/chrome'
import { studios, devProducts, publishedProducts } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Apps — beatLabs',
  description:
    'The applications built by beatLabs: Nibango, Curb - Subscription Tracker, Raved, and what’s next. Each app is its own brand, on its own domain.',
  alternates: { canonical: 'https://beatlabs.ae/apps' },
  openGraph: {
    title: 'Apps — beatLabs',
    description: 'The applications built by beatLabs: Nibango, Curb, Raved, and what’s next.',
    url: 'https://beatlabs.ae/apps',
  },
}

export default function AppsPage() {
  // Flagship first, then the rest — one continuous editorial list.
  const ordered = [...publishedProducts].sort((a, b) => Number(b.flagship) - Number(a.flagship))

  return (
    <>
      <Nav active="apps" />
      <Page>
        {/* HEADER */}
        <header style={{ padding: '2rem 0 4.5rem' }}>
          <div style={{ paddingBottom: '2rem' }}>
            <SectionLabel>BEATLABS — APPLICATIONS</SectionLabel>
          </div>
          <h1 className="bl-display">
            Five apps.
            <br />
            Each its own brand.
          </h1>
          <p className="bl-body" style={{ maxWidth: '480px', paddingTop: '1.6rem' }}>
            Every product we build gets its own name, domain, identity and legal pages.
            This is the index — each entry links to its full profile.
          </p>
        </header>

        {/* PRODUCT LIST */}
        <section>
          {ordered.map(app => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="bl-index-row"
              style={{ '--acc': app.accent } as React.CSSProperties}
            >
              <div className="bl-mono" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', paddingBottom: '0.9rem' }}>
                {app.flagship && <span className="bl-mono-acc">FLAGSHIP</span>}
                <span>{app.type}</span>
                <span>{app.platforms}</span>
                <span style={{ color: 'rgba(240,237,232,0.6)' }}>{app.statusText}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem' }}>
                <span
                  className="bl-index-name"
                  style={app.flagship ? { fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' } : undefined}
                >
                  {app.displayName}
                </span>
                <span className="bl-index-arrow" aria-hidden>→</span>
              </div>
              <p className="bl-body" style={{ maxWidth: '620px', paddingTop: '0.9rem', margin: 0 }}>
                {app.oneLiner}
              </p>
            </Link>
          ))}

          {/* IN DEVELOPMENT */}
          {devProducts.map(app => (
            <div key={app.slug} className="bl-index-row" style={{ opacity: 0.45 }}>
              <div className="bl-mono" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', paddingBottom: '0.9rem' }}>
                <span>{app.type}</span>
                <span>{app.platforms}</span>
                <span>IN DEVELOPMENT</span>
              </div>
              <span className="bl-index-name" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
                {app.displayName}
              </span>
              <p className="bl-body" style={{ maxWidth: '620px', paddingTop: '0.9rem', margin: 0 }}>
                {app.oneLiner}
              </p>
            </div>
          ))}
        </section>

        {/* STUDIOS */}
        <section style={{ padding: '5rem 0 0' }}>
          <div style={{ paddingBottom: '1rem' }}>
            <SectionLabel>WEB & CREATIVE</SectionLabel>
          </div>
          {studios.map(studio => (
            <a
              key={studio.id}
              href={studio.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bl-index-row"
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem' }}>
                <span className="bl-index-name" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
                  {studio.name}
                </span>
                <span className="bl-index-arrow" aria-hidden>↗</span>
              </div>
              <p className="bl-body" style={{ maxWidth: '620px', paddingTop: '0.7rem', margin: 0 }}>
                {studio.tagline}
              </p>
            </a>
          ))}
        </section>
      </Page>
    </>
  )
}
