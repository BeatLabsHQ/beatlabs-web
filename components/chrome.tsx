import Link from 'next/link'
import type { ReactNode } from 'react'
import { company, devProducts, publishedProducts, studios } from '@/data/portfolio'
import { IndexToggle } from './index-sheet'
import { ScrollChrome } from './scroll-chrome'

// The MacPaw clone: a quiet bar, black rectangular buttons with an icon on the right,
// a link-column footer. The only client code is the mobile index toggle.

export type Current = 'home' | 'apps' | 'studios' | 'legal'
/** ↗ — the outbound arrow MacPaw puts after every "Read more" and inside buttons. */
export function ArrowIcon({ up = true }: { up?: boolean } = {}) {
  return up ? (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 12L12 4M6 4h6v6" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  )
}
export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <path d="M12 4v16M4 12h16" />
    </svg>
  )
}
export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 8l9 6 9-6" />
    </svg>
  )
}
export function ChevronIcon({ left }: { left?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {left ? <path d="M10 3L5 8l5 5" /> : <path d="M6 3l5 5-5 5" />}
    </svg>
  )
}

const INDEX = [
  { href: '/', no: '01', label: 'Home' },
  { href: '/apps', no: '02', label: 'Apps' },
  { href: '/studios', no: '03', label: 'Studios' },
  { href: '/legal', no: '04', label: 'Company' },
  { href: `mailto:${company.email}`, no: '05', label: 'Contact' },
]

export function Nav({ current }: { current: Current }) {
  return (
    <header className="rec" id="top">
      <Link href="/" className="stamp" aria-label={`${company.brand} — home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="logo-dark" src="/logo-black.png" alt="beatLabs" width={1197} height={290} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="logo-light" src="/logo.png" alt="" width={1197} height={290} />
      </Link>
      <nav className="rec-nav" aria-label="Site">
        <Link href="/apps" aria-current={current === 'apps' ? 'page' : undefined}>Apps</Link>
        <Link href="/studios" aria-current={current === 'studios' ? 'page' : undefined}>Studios</Link>
        <Link href="/legal" aria-current={current === 'legal' ? 'page' : undefined}>Company</Link>
      </nav>
      <a className="rec-book" href={`mailto:${company.email}`} aria-label={`Email ${company.email}`}><MailIcon /><span>Contact</span></a>
      <IndexToggle items={INDEX} />
    </header>
  )
}

export function Head({ title, label }: { title: string; label?: string }) {
  return (
    <div className="head">
      <h2 className="h2">{title}</h2>
      {label && <span className="label">{label}</span>}
    </div>
  )
}

export function Btn({ href, children, black, lime, external, arrow = true }: { href: string; children: ReactNode; black?: boolean; lime?: boolean; external?: boolean; arrow?: boolean }) {
  const cls = `btn${black ? ' btn--black' : ''}${lime ? ' btn--lime' : ''}`
  const inner = <>{children}{arrow && <ArrowIcon up={external} />}</>
  return external ? <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{inner}</a> : <Link href={href} className={cls}>{inner}</Link>
}

export function Footer() {
  return (
    <>
      <div className="foot-grid">
        <div>
          <h4>Apps</h4>
          <ul>
            {publishedProducts.map(p => <li key={p.slug}><Link href={`/apps/${p.slug}`}>{p.displayName}</Link></li>)}
            {devProducts.map(p => <li key={p.slug}><span className="mute">{p.displayName} · soon</span></li>)}
          </ul>
        </div>
        <div>
          <h4>Studios</h4>
          <ul>
            {studios.map(s => <li key={s.id}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>)}
            <li><Link href="/studios">Hire a studio</Link></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link href="/">About beatLabs</Link></li>
            <li><Link href="/legal">Company & legal</Link></li>
            <li><Link href="/apps">All apps</Link></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            {publishedProducts.flatMap(p => p.docs.filter(d => d.label !== 'Website').map(d => (
              <li key={d.href}><a href={d.href} target="_blank" rel="noopener noreferrer">{p.displayName} · {d.label}</a></li>
            )))}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={`https://wa.me/${company.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">WhatsApp {company.phone}</a></li>
            <li><span className="mute">{company.zone}, UAE</span></li>
          </ul>
        </div>
      </div>
      <footer className="foot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-black.png" alt="" width={1197} height={290} />
        <span>Copyright © 2026 {company.legalName}. Licence {company.license}. {company.form}.</span>
      </footer>
    </>
  )
}

export function Shell({ current, children }: { current: Current; children: ReactNode }) {
  return (
    <>
      <a className="sr" href="#main">Skip to content</a>
      <Nav current={current} />
      <main id="main">{children}</main>
      <Footer />
      <ScrollChrome />
    </>
  )
}
