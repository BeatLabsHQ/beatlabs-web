import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Btn, Head, Shell } from '@/components/chrome'
import { AppCell, STATUS } from '@/components/cells'
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

  const ordered = [...publishedProducts].sort((a, b) => Number(b.flagship) - Number(a.flagship))
  const siblings = ordered.filter(p => p.slug !== app.slug)
  const isLive = app.status === 'live'
  const domain = app.siteUrl ? app.siteUrl.replace('https://', '').split('/')[0] : null
  const primaryCta = isLive && app.appStoreUrl
    ? { href: app.appStoreUrl, label: 'App Store' }
    : app.siteUrl
      ? { href: app.siteUrl, label: domain ?? 'Website' }
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
      {primaryCta && <Btn href={primaryCta.href} external black>{primaryCta.label}</Btn>}
      {isLive && app.playStoreUrl && <Btn href={app.playStoreUrl} external>Google Play</Btn>}
      {!isLive && <Btn href="/apps" arrow={false}>All apps</Btn>}
    </>
  )

  const tagline = app.highlight && app.tagline.includes(app.highlight)
    ? <>{app.tagline.slice(0, app.tagline.indexOf(app.highlight))}<span className="out">{app.highlight}</span>{app.tagline.slice(app.tagline.indexOf(app.highlight) + app.highlight.length)}</>
    : app.tagline

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Shell current="apps">
        <section className="showcase showcase--static" aria-label={app.displayName}>
          <article className="slide">
            {app.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="icon" src={app.icon} alt={`${app.displayName} app icon`} width={240} height={240} />
            )}
            <div>
              <h1 className="h1">{app.displayName}</h1>
              <p className="sub">{tagline}</p>
              <p className="body">{app.lede}</p>
              <div className="actions">{ctas}</div>
            </div>
          </article>
        </section>

        {/* RECORD: icon · facts · status */}
        <section className="cells cells--3" aria-label={`${app.displayName} record`} style={{ marginTop: 16 }}>
          <div className="cell cell--black">
            <span className="h4" style={{ color: '#fff' }}>{app.type}</span>
            <span className="label">{app.platforms}{app.languages ? ` · ${app.languages}` : ''}{domain ? ` · ${domain}` : ''}</span>
            <p className="meta" style={{ marginTop: 'auto' }}><span className="mark">{STATUS[app.status]}{app.flagship ? ' · Flagship' : ''}</span></p>
          </div>
          {app.stats?.slice(0, 2).map(s => (
            <div key={s.label} className="cell">
              <span className="num">{s.value}</span>
              <span className="label">{s.label}</span>
            </div>
          ))}
        </section>

        {/* SCREENS */}
        {app.screens && app.screens.length > 0 && (
          <>
            <Head title="On the phone" label={app.platforms} />
            <div className="screens">
              {app.screens.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt={`${app.displayName} screen ${i + 1}`} loading="lazy" width={1320} height={2868} />
              ))}
            </div>
          </>
        )}

        {/* FEATURES */}
        <Head title="What it does" label={`${app.features.length} capabilities`} />
        <section className="cells cells--3">
          {app.features.map(f => (
            <div key={f.id} className="cell">
              <span className="h4">{f.title}</span>
              <p className="line">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <Head title="How it works" label="In order" />
        <section className="cells cells--3 steps">
          {app.howItWorks.map(h => (
            <div key={h.step} className="cell">
              <span className="num">{h.step}</span>
              <span className="h4">{h.title}</span>
              <p className="line">{h.desc}</p>
            </div>
          ))}
        </section>

        {/* PRICING */}
        {app.pricing && (
          <>
            <Head title="Pricing" label="Public pricing" />
            <section className={`cells cells--${app.pricing.length}`}>
              {app.pricing.map(plan => (
                <div key={plan.name} className={`cell${plan.highlight ? ' cell--black' : ''}`}>
                  <span className="num">{plan.price}</span>
                  <span className="label">{plan.name}{plan.highlight ? ' · Recommended' : ''} · <span className="mute">{plan.note}</span></span>
                  <p className="line">{plan.items.join(' · ')}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 12 }}>{primaryCta && <Btn href={primaryCta.href} external lime={plan.highlight}>Get {app.displayName}</Btn>}</div>
                </div>
              ))}
            </section>
          </>
        )}

        {/* FAQ + DOCS */}
        <Head title="Questions" label={domain ? `Docs on ${domain}` : undefined} />
        <section className="faq">
          {app.faq.map(item => (
            <details key={item.q}>
              <summary>{item.q}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden><path d="M12 3v18M3 12h18" /></svg></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </section>
        {app.docs.length > 0 && (
          <section className="block block--tight" style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {app.docs.map(doc => (
              <Btn key={doc.href} href={doc.href} external>{doc.label}</Btn>
            ))}
          </section>
        )}

        {/* SIBLINGS */}
        <Head title="Also in the portfolio" label={`${siblings.length} other published apps`} />
        <section className={`cells cells--${siblings.length}`}>
          {siblings.map(sib => (
            <AppCell key={sib.slug} app={sib} />
          ))}
        </section>

        {/* GET IT */}
        <section className="contact">
          <p className="h2">Get {app.displayName}: {isLive ? `out now on ${app.platforms}.` : `launching now.${app.siteUrl ? ' Try it on the web today.' : ''}`}</p>
          <div className="actions" style={{ justifyContent: 'flex-start', paddingTop: 22 }}>{ctas}</div>
        </section>
      </Shell>
    </>
  )
}
