import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Page, Nav, SectionLabel } from '@/components/chrome'
import { getProduct, publishedProducts } from '@/data/portfolio'

export function generateStaticParams() {
  return publishedProducts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const app = getProduct(params.slug)
  if (!app) return {}
  const title = `${app.displayName} — ${app.type} by beatLabs`
  const description = app.oneLiner
  return {
    title,
    description,
    alternates: { canonical: `https://beatlabs.ae/apps/${app.slug}` },
    openGraph: { title, description, url: `https://beatlabs.ae/apps/${app.slug}` },
  }
}

export default function AppDetailPage({ params }: { params: { slug: string } }) {
  const app = getProduct(params.slug)
  if (!app) notFound()

  const siblings = publishedProducts.filter(p => p.slug !== app.slug)
  const isLive = app.status === 'live'

  const primaryCta = isLive && app.appStoreUrl
    ? { href: app.appStoreUrl, label: 'DOWNLOAD ON THE APP STORE →' }
    : app.siteUrl
      ? { href: app.siteUrl, label: `VISIT ${app.siteUrl.replace('https://', '').split('/')[0].toUpperCase()} →` }
      : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.displayName,
    applicationCategory: app.type,
    operatingSystem: app.platforms,
    description: app.oneLiner,
    url: `https://beatlabs.ae/apps/${app.slug}`,
    author: { '@type': 'Organization', name: 'beatLabs', url: 'https://beatlabs.ae' },
    ...(app.siteUrl ? { sameAs: [app.siteUrl] } : {}),
  }

  const ctas = (
    <>
      {primaryCta && (
        <a href={primaryCta.href} target="_blank" rel="noopener noreferrer" className="bl-btn-primary">
          {primaryCta.label}
        </a>
      )}
      {isLive && app.playStoreUrl && (
        <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer" className="bl-btn-secondary">
          GET IT ON GOOGLE PLAY →
        </a>
      )}
    </>
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav active="apps" />
      <Page accent={app.accent}>
        {/* BREADCRUMB */}
        <div style={{ paddingBottom: '3rem' }}>
          <Link href="/apps" className="bl-mono" style={{ textDecoration: 'none' }}>
            ← ALL APPS
          </Link>
        </div>

        {/* HERO — benefit headline; the product name lives in the eyebrow */}
        <section style={{ paddingBottom: '4.5rem' }}>
          <div className="bl-section-label" style={{ paddingBottom: '2rem', flexWrap: 'wrap' }}>
            <span className="bl-mono-acc" style={{ fontSize: '0.78rem' }}>{app.displayName}</span>
            <span className="bl-mono">{app.type}</span>
            <span className="bl-mono" style={{ color: 'rgba(240,237,232,0.6)' }}>{app.statusText}</span>
          </div>

          <h1 className="bl-display" style={{ maxWidth: '820px' }}>
            {app.tagline}
          </h1>
          <p className="bl-body" style={{ paddingTop: '1.4rem', maxWidth: '540px' }}>
            {app.lede}
          </p>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', alignItems: 'center', paddingTop: '2.4rem' }}>
            {ctas}
            {!isLive && app.siteUrl && (
              <span className="bl-mono">APP STORE & GOOGLE PLAY AT LAUNCH</span>
            )}
          </div>

          <div className="bl-mono" style={{ paddingTop: '2rem' }}>
            {app.platforms}
            {app.languages ? ` · ${app.languages}` : ''}
            {' · NO ADS · PRIVACY-FIRST'}
          </div>
        </section>

        {/* STATS — hairline strip, no boxes */}
        {app.stats && (
          <section
            className="bl-grid-3"
            style={{
              borderTop: '1px solid var(--hair)',
              borderBottom: '1px solid var(--hair)',
              padding: '2.5rem 0',
              marginBottom: '4.5rem',
            }}
          >
            {app.stats.map(s => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-syne), 'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--acc)',
                  }}
                >
                  {s.value}
                </div>
                <div className="bl-mono" style={{ paddingTop: '0.8rem' }}>{s.label}</div>
              </div>
            ))}
          </section>
        )}

        {/* FEATURES */}
        <section style={{ paddingBottom: '4.5rem' }}>
          <div style={{ paddingBottom: '2rem' }}>
            <SectionLabel>WHAT IT DOES</SectionLabel>
          </div>
          <div className="bl-grid-2" style={{ rowGap: '2.5rem' }}>
            {app.features.map(f => (
              <div key={f.id} className="bl-feature">
                <h3 className="bl-title">{f.title}</h3>
                <p className="bl-body" style={{ margin: 0, paddingTop: '0.6rem', fontSize: '0.95rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS — a real sequence, so it gets numbers */}
        <section style={{ paddingBottom: '4.5rem' }}>
          <div style={{ paddingBottom: '2rem' }}>
            <SectionLabel>HOW IT WORKS</SectionLabel>
          </div>
          <div className="bl-grid-3">
            {app.howItWorks.map(h => (
              <div key={h.step} style={{ borderTop: '1px solid var(--hair)', paddingTop: '1.6rem' }}>
                <div className="bl-mono-acc" style={{ paddingBottom: '1rem' }}>{h.step}</div>
                <h3 className="bl-title">{h.title}</h3>
                <p className="bl-body" style={{ margin: 0, paddingTop: '0.6rem', fontSize: '0.95rem' }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        {app.pricing && (
          <section style={{ paddingBottom: '4.5rem' }}>
            <div style={{ paddingBottom: '2rem' }}>
              <SectionLabel>PRICING</SectionLabel>
            </div>
            <div className="bl-grid-2" style={{ maxWidth: '760px', gap: '1.5rem' }}>
              {app.pricing.map(plan => (
                <div
                  key={plan.name}
                  style={{
                    border: plan.highlight ? '1px solid var(--acc)' : '1px solid var(--hair)',
                    padding: '2rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <h3 className="bl-title" style={{ fontSize: '1.05rem' }}>{plan.name}</h3>
                    <span
                      style={{
                        fontFamily: "var(--font-syne), 'Syne', sans-serif",
                        fontWeight: 800,
                        fontSize: '1.5rem',
                        letterSpacing: '-0.02em',
                        color: plan.highlight ? 'var(--acc)' : 'rgba(240,240,240,0.9)',
                      }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <div className="bl-mono" style={{ padding: '0.5rem 0 1.3rem' }}>{plan.note}</div>
                  {plan.items.map(item => (
                    <div key={item} className="bl-body" style={{ fontSize: '0.92rem', paddingBottom: '0.35rem' }}>
                      <span style={{ color: 'var(--acc)' }}>—</span> {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section style={{ paddingBottom: '4.5rem' }}>
          <div style={{ paddingBottom: '1.5rem' }}>
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <div style={{ maxWidth: '760px' }}>
            {app.faq.map(item => (
              <details key={item.q} className="bl-faq">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* DOCS */}
        {app.docs.length > 0 && (
          <section style={{ paddingBottom: '4.5rem' }}>
            <div style={{ paddingBottom: '1.5rem' }}>
              <SectionLabel>DOCS & LEGAL</SectionLabel>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {app.docs.map(doc => (
                <a key={doc.href} href={doc.href} target="_blank" rel="noopener noreferrer" className="bl-doc-btn">
                  {doc.label} ↗
                </a>
              ))}
            </div>
          </section>
        )}

        {/* MORE FROM BEATLABS — sibling rows light up in their own colors */}
        <section style={{ paddingBottom: '4.5rem' }}>
          <div style={{ paddingBottom: '1rem' }}>
            <SectionLabel>MORE FROM BEATLABS</SectionLabel>
          </div>
          {siblings.map(sib => (
            <Link
              key={sib.slug}
              href={`/apps/${sib.slug}`}
              className="bl-index-row"
              style={{ '--acc': sib.accent } as React.CSSProperties}
            >
              <div className="bl-mono" style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', paddingBottom: '0.7rem' }}>
                <span>{sib.type}</span>
                <span style={{ color: 'rgba(240,237,232,0.6)' }}>{sib.statusText}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.2rem' }}>
                <span className="bl-index-name" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
                  {sib.displayName}
                </span>
                <span className="bl-index-arrow" aria-hidden>→</span>
              </div>
              <p className="bl-body" style={{ maxWidth: '620px', paddingTop: '0.7rem', margin: 0, fontSize: '0.95rem' }}>
                {sib.oneLiner}
              </p>
            </Link>
          ))}
        </section>

        {/* FINAL CTA — repeats the hero's primary action */}
        <section
          style={{
            borderTop: '1px solid var(--hair)',
            padding: '4rem 0 1rem',
          }}
        >
          <h2 className="bl-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}>
            Get {app.displayName}<span style={{ color: 'var(--acc)' }}>.</span>
          </h2>
          <p className="bl-body" style={{ paddingTop: '1rem', maxWidth: '440px' }}>
            {isLive
              ? `${app.displayName} is out now on ${app.platforms}.`
              : `${app.displayName} is launching now. ${app.siteUrl ? 'Try it on the web today.' : ''}`}
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', paddingTop: '2rem' }}>
            {ctas}
          </div>
        </section>
      </Page>
    </>
  )
}
