import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal — beatLabs',
  description:
    'Legal information for BeatLabs FZE LLC and its products. Privacy policies and terms of service for Curb, Raved, and Nibango.',
  alternates: { canonical: 'https://beatlabs.ae/legal' },
}

const products = [
  {
    name: 'Curb - Subscription Tracker',
    domain: 'getcurbapp.com',
    docs: [
      { label: 'Privacy Policy', href: 'https://getcurbapp.com/privacy.html' },
      { label: 'Terms of Service', href: 'https://getcurbapp.com/terms.html' },
    ],
  },
  {
    name: 'Raved',
    domain: 'raved.app',
    docs: [
      { label: 'Privacy Policy', href: 'https://raved.app/privacy' },
      { label: 'Terms of Service', href: 'https://raved.app/terms' },
    ],
  },
  {
    name: 'Nibango',
    domain: 'nibango.com',
    docs: [
      { label: 'Privacy Policy', href: 'https://nibango.com/privacy' },
      { label: 'Terms of Service', href: 'https://nibango.com/terms' },
    ],
  },
]

export default function LegalPage() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(12px)',
      }}>
        <Link href="/">
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.8rem', width: 'auto', cursor: 'pointer' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/apps" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            APPS
          </Link>
          <Link href="/" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← HOME
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
          <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>LEGAL</span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
          Legal &<br /><span style={{ color: 'var(--lime)' }}>Company.</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '520px' }}>
          Every beatLabs product is its own brand, and its legal documents live on its own domain.
          This page is the directory — plus the company information behind all of them.
        </p>
      </section>

      {/* COMPANY */}
      <section style={{ padding: '0 2.5rem 3rem' }}>
        <div style={{
          border: '1px solid rgba(200,255,71,0.15)',
          padding: 'clamp(2rem, 4vw, 3rem)',
          background: 'linear-gradient(135deg, rgba(200,255,71,0.03) 0%, rgba(8,8,8,1) 70%)',
        }}>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontWeight: 700, marginBottom: '1.2rem' }}>
            THE COMPANY
          </p>
          <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.03em', color: 'var(--white)', lineHeight: 1, marginBottom: '1.5rem' }}>
            BeatLabs FZE LLC
          </h2>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(240,237,232,0.55)', lineHeight: 2 }}>
            <div>License No. 53228 — Ajman Media City Free Zone, UAE</div>
            <div>Free Zone Establishment incorporated under Amiri Decree No.8 of 2021</div>
            <div>AMC-BLA-B.C-6010468, AMC Boulevard-A, Ajman, UAE</div>
            <div>
              <a href="mailto:info@beatlabs.ae" style={{ color: 'var(--lime)', textDecoration: 'none' }}>info@beatlabs.ae</a>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.4)', lineHeight: 1.7, maxWidth: '560px', marginTop: '1.5rem' }}>
            BeatLabs FZE LLC is the legal entity operating all beatLabs products and brands,
            including the applications listed below and the studios TrueLoveCreative and Estrela.photo.
          </p>
        </div>
      </section>

      {/* PRODUCT LEGAL DIRECTORY */}
      <section style={{ padding: '0 2.5rem 3rem' }}>
        <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.25em', fontWeight: 700, marginBottom: '1.5rem' }}>
          PRODUCT LEGAL DOCUMENTS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px' }}>
          {products.map(product => (
            <div key={product.domain} style={{ border: '1px solid rgba(255,255,255,0.06)', padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.6rem', letterSpacing: '0.03em', color: 'var(--white)', lineHeight: 1, marginBottom: '0.4rem' }}>
                {product.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '1.2rem' }}>
                {product.domain}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.docs.map(doc => (
                  <a
                    key={doc.href}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-syne)', fontSize: '0.58rem', letterSpacing: '0.12em', fontWeight: 700,
                      color: 'var(--white)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      padding: '0.4rem 0.8rem', textDecoration: 'none',
                    }}
                  >
                    {doc.label} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.75rem', color: 'rgba(240,237,232,0.3)', lineHeight: 1.7, marginTop: '1.5rem', maxWidth: '560px' }}>
          Apps currently in development will have their legal documents published on their own domains at launch.
        </p>
      </section>

      {/* THIS WEBSITE */}
      <section style={{ padding: '0 2.5rem 8rem' }}>
        <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.25em', fontWeight: 700, marginBottom: '1.5rem' }}>
          THIS WEBSITE
        </p>
        <div style={{ border: '1px solid rgba(255,255,255,0.06)', padding: '2rem', maxWidth: '720px' }}>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.8 }}>
            beatlabs.ae is an informational website. It does not require an account, does not use
            tracking cookies, and does not collect personal data. If you contact us by email,
            your message is used solely to respond to you. For product-specific data practices,
            refer to each product&apos;s own privacy policy above. Questions:{' '}
            <a href="mailto:info@beatlabs.ae" style={{ color: 'var(--lime)', textDecoration: 'none' }}>info@beatlabs.ae</a>.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          padding: '3rem 2.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.1em', fontFamily: 'var(--font-syne)', display: 'block' }}>
              BeatLabs FZE LLC
            </span>
            <span style={{ fontSize: '0.5rem', color: 'rgba(85,85,85,0.6)', letterSpacing: '0.08em', fontFamily: 'var(--font-syne)', display: 'block', marginTop: '0.2rem' }}>
              License No. 53228 | Ajman Media City Free Zone, UAE
            </span>
          </div>
          <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}>
            info@beatlabs.ae
          </a>
        </div>
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          padding: '1rem 2.5rem',
        }}>
          <p style={{ fontSize: '0.55rem', color: '#333', letterSpacing: '0.06em', fontFamily: 'var(--font-syne)', lineHeight: 1.8 }}>
            © 2026 BeatLabs FZE LLC. All rights reserved.  ·  Free Zone Establishment incorporated under Amiri Decree No.8 of 2021
          </p>
        </div>
      </footer>
    </main>
  )
}
