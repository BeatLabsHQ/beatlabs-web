import Link from 'next/link'

// Shared chrome for all inner pages (/apps, /apps/[slug], /legal).
// System: Syne 800 sentence-case display + JetBrains Mono utility labels.
// Page takes an optional `accent` — the product's own brand color — which
// cascades to every accent-driven element via the --acc custom property.
// The home keeps its own BEATLABS_OS terminal look and is not touched by this.

export function Nav({ active }: { active: 'apps' | 'legal' }) {
  const navLink = (href: string, label: string, isActive: boolean) => (
    <Link
      href={href}
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.62rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: isActive ? 'var(--white)' : 'var(--muted)',
        textDecoration: 'none',
        transition: 'color 0.15s',
      }}
    >
      {label}
    </Link>
  )

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.1rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Link href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="beatLabs" style={{ height: '1.7rem', width: 'auto', cursor: 'pointer' }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
        {navLink('/', 'HOME', false)}
        {navLink('/apps', 'APPS', active === 'apps')}
        {navLink('/legal', 'LEGAL', active === 'legal')}
      </div>
    </nav>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="bl-section-label">
      <span className="bl-mono-acc">{children}</span>
    </div>
  )
}

export function Footer() {
  const footLink = (href: string, label: string, external?: boolean) => {
    const style = {
      fontFamily: 'var(--mono)',
      fontSize: '0.62rem',
      fontWeight: 700,
      letterSpacing: '0.18em',
      color: 'rgba(240,237,232,0.6)',
      textDecoration: 'none',
    }
    return external ? (
      <a href={href} style={style}>{label}</a>
    ) : (
      <Link href={href} style={style}>{label}</Link>
    )
  }

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        marginTop: '6rem',
        padding: '2.5rem 0',
      }}
    >
      <div style={{ display: 'flex', gap: '1.8rem', flexWrap: 'wrap', paddingBottom: '1.4rem' }}>
        {footLink('/apps', 'APPS')}
        {footLink('/legal', 'LEGAL')}
        {footLink('mailto:info@beatlabs.ae', 'CONTACT', true)}
      </div>
      <div className="bl-mono" style={{ lineHeight: 2, textTransform: 'none' }}>
        © 2026 BeatLabs FZE LLC · License 53228 · Ajman Media City Free Zone
        <br />
        Free Zone Establishment incorporated under Amiri Decree No.8 of 2021
      </div>
    </footer>
  )
}

export function Page({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <main
      className="bl-inner"
      style={{
        background: 'var(--black)',
        minHeight: '100vh',
        overflowX: 'hidden',
        ...(accent ? ({ '--acc': accent } as React.CSSProperties) : {}),
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '8rem 2rem 0' }}>
        {children}
        <Footer />
      </div>
    </main>
  )
}
