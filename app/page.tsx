import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowIcon, Btn, ChevronIcon, Head, MailIcon, Shell } from '@/components/chrome'
import { AppCell, STATUS } from '@/components/cells'
import { Autoplay } from '@/components/autoplay'
import { company, devProducts, publishedProducts, studios } from '@/data/portfolio'

export const metadata: Metadata = {
  alternates: { canonical: 'https://beatlabs.ae' },
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="10" cy="10" r="8" /><path d="M6.5 10.5l2.5 2.5 4.5-5" />
    </svg>
  )
}
function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 5h6a3 3 0 013 3v11a2 2 0 00-2-2H4zM20 5h-6a3 3 0 00-3 3v11a2 2 0 012-2h7z" />
    </svg>
  )
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  )
}

export default function Home() {
  const ordered = [...publishedProducts].sort((a, b) => Number(b.flagship) - Number(a.flagship))
  const links: { href: string; label: string; icon?: string; mark?: string }[] = [
    ...ordered.filter(p => p.siteUrl).map(p => ({ href: p.siteUrl!, label: p.siteUrl!.replace('https://', '').split('/')[0], icon: p.icon })),
    ...studios.map(s => ({ href: s.url, label: s.url.replace('https://', ''), icon: s.icon, mark: s.mark })),
  ]
  return (
    <Shell current="home">
      {/* SHOWCASE: one product at a time, the icons below switch it (radio-driven, no JS) */}
      <section className="showcase" aria-label="Featured apps">
        {ordered.map((p, i) => (
          <input key={p.slug} type="radio" name="showcase" id={`s${i}`} defaultChecked={i === 0} aria-label={`Show ${p.displayName}`} />
        ))}
        <div className="slides">
          {ordered.map((p, i) => {
            const prev = (i - 1 + ordered.length) % ordered.length
            const next = (i + 1) % ordered.length
            const isLive = p.status === 'live'
            const primary = isLive && p.appStoreUrl ? { href: p.appStoreUrl, label: 'Get it on the App Store', ext: true } : p.siteUrl ? { href: p.siteUrl, label: `Open ${p.siteUrl.replace('https://', '').split('/')[0]}`, ext: true } : null
            return (
              <article key={p.slug} className="slide" aria-label={p.displayName}>
                <label className="arrow arrow--prev" htmlFor={`s${prev}`} aria-label={`Previous: ${ordered[prev].displayName}`}><ChevronIcon left /></label>
                <label className="arrow arrow--next" htmlFor={`s${next}`} aria-label={`Next: ${ordered[next].displayName}`}><ChevronIcon /></label>
                {p.icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="icon" src={p.icon} alt={`${p.displayName} icon`} width={240} height={240} />
                )}
                <div>
                  <h1 className="h1">{p.displayName}</h1>
                  <p className="sub">{p.tagline}</p>
                  <p className="body">{p.oneLiner} <span className="mark">{STATUS[p.status]}</span></p>
                  <div className="actions">
                    {primary ? <Btn href={primary.href} external black>{primary.label}</Btn> : <Btn href={`/apps/${p.slug}`} black arrow={false}>Launching soon</Btn>}
                    <Btn href={`/apps/${p.slug}`} arrow={false}>Learn more</Btn>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
        <div className="dots" role="tablist" aria-label="Choose an app">
          {ordered.map((p, i) => (
            <label key={p.slug} htmlFor={`s${i}`} title={p.displayName}>
              {p.icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.icon} alt="" width={28} height={28} />
              )}
            </label>
          ))}
        </div>
        <div className="pips" aria-hidden="true">
          {ordered.map((p, i) => <label key={p.slug} htmlFor={`s${i}`} />)}
        </div>
        <Autoplay group="showcase" interval={5000} />
      </section>

      {/* THE GRID */}
      <Head title="Apps that stand on their own" />
      <section className="cells cells--4" aria-label="All apps">
        {ordered.map(p => <AppCell key={p.slug} app={p} />)}
        {devProducts.map(p => <AppCell key={p.slug} app={p} />)}
      </section>

      {/* STUDIOS BANNER */}
      <section className="banner" aria-label="Studios">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="photo" src="/apps/founder.webp" width={800} height={534} alt="Javier Estrela, founder, on location" />
        <div className="copy">
          <h2 className="h2">Two studios, open for client work</h2>
          <ul>
            <li><CheckIcon /><span><b>{studios[0].name}</b>{studios[0].tagline}</span></li>
            <li><CheckIcon /><span><b>{studios[1].name}</b>{studios[1].tagline}</span></li>
          </ul>
          <div className="actions">
            <Btn href="/studios" arrow={false}>About the studios</Btn>
          </div>
        </div>
      </section>

      {/* MISSION BAND */}
      <div className="band" style={{ marginTop: 'var(--section)' }}>
        <div className="mission">
          <h2 className="h2">We build companies. Not projects.</h2>
          <p className="body">{company.mission[0]} {company.mission[1]} {company.mission[2]} Each app has its own name, colour, domain and legal pages; one entity stands behind all of them.</p>
        </div>
      </div>

      {/* FIND US */}
      <div className="band links" style={{ paddingTop: 0 }}>
        <div>
          <div className="head" style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <h2 className="h2">Find us across the internet</h2>
            <span className="label">Every brand, its own domain</span>
          </div>
          <section className="cells cells--3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="cell" target="_blank" rel="noopener noreferrer">
                {l.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={l.icon} alt="" width={32} height={32} />
                ) : l.mark ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={l.mark} alt="" className="mark-img" width={512} height={99} />
                ) : null}
                <span className="more">{l.label}<ArrowIcon /></span>
              </a>
            ))}
          </section>
        </div>
      </div>

      {/* THE COMPANY: black fact cards */}
      <Head title="The company" />
      <section className="cells cells--3" aria-label="Company facts">
        <div className="cell cell--black"><span className="h4" style={{ color: '#fff' }}>{company.legalName}</span><span className="label">The entity behind every brand · Founded {company.founded}</span></div>
        <div className="cell cell--black"><span className="h4" style={{ color: '#fff' }}>Licence {company.license}</span><span className="label">{company.zone}, UAE · {company.form}</span></div>
        <div className="cell cell--black"><span className="h4" style={{ color: '#fff' }}>{company.founder.name}</span><span className="label">{company.founder.role} · {company.city}</span></div>
      </section>

      {/* SUPPORT */}
      <section className="support" aria-label="Contact">
        <div className="cell">
          <div className="row-ic"><BookIcon /><div><div className="h4">Company & legal</div><p className="line">Licence, address, founder, and where each product keeps its privacy policy and terms.</p></div></div>
          <Link href="/legal" className="btn btn--black">Read<ArrowIcon up={false} /></Link>
        </div>
        <div className="cell">
          <div className="row-ic"><MailIcon /><div><div className="h4">Contact us</div><p className="line">Partnerships, press, or a question about any of the brands. One inbox, answered by the founder.</p></div></div>
          <a href={`mailto:${company.email}`} className="btn btn--black">Write to {company.email}<ArrowIcon /></a>
        </div>
        <div className="cell">
          <div className="row-ic"><PhoneIcon /><div><div className="h4">WhatsApp</div><p className="line">Quicker for studio bookings and anything with a date on it.</p></div></div>
          <a href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`} className="btn btn--black" target="_blank" rel="noopener noreferrer">Message <span className="mute" style={{ color: 'rgba(255,255,255,.6)', fontSize: 12, marginLeft: 'auto', marginRight: 8 }}>{company.phone}</span><ArrowIcon /></a>
        </div>
      </section>
    </Shell>
  )
}
