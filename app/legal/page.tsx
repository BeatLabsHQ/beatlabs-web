import type { Metadata } from 'next'
import Link from 'next/link'
import { Page, Nav, SectionLabel } from '@/components/chrome'
import { publishedProducts } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Legal — beatLabs',
  description:
    'Legal information for BeatLabs FZE LLC and its products. Privacy policies and terms of service for Curb, Raved, and Nibango.',
  alternates: { canonical: 'https://beatlabs.ae/legal' },
  openGraph: {
    title: 'Legal — beatLabs',
    description: 'Legal information for BeatLabs FZE LLC and its products.',
    url: 'https://beatlabs.ae/legal',
  },
}

const bright = 'rgba(240,240,240,0.85)'

export default function LegalPage() {
  return (
    <>
      <Nav active="legal" />
      <Page>
        {/* HEADER */}
        <header style={{ padding: '2rem 0 4rem' }}>
          <div style={{ paddingBottom: '2rem' }}>
            <SectionLabel>BEATLABS — LEGAL</SectionLabel>
          </div>
          <h1 className="bl-display">Legal & company.</h1>
          <p className="bl-body" style={{ maxWidth: '540px', paddingTop: '1.6rem' }}>
            Every beatLabs product is its own brand, and its legal documents live on its own
            domain. This page is the directory — plus the company information behind all of them.
          </p>
        </header>

        {/* COMPANY IDENTITY */}
        <section style={{ paddingBottom: '4rem' }}>
          <div style={{ paddingBottom: '1.5rem' }}>
            <SectionLabel>THE COMPANY</SectionLabel>
          </div>
          <div style={{ border: '1px solid var(--hair)', padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <h2 className="bl-title" style={{ fontSize: '1.4rem', paddingBottom: '1.4rem' }}>BeatLabs FZE LLC</h2>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', lineHeight: 2.1, color: bright }}>
              <div><span style={{ color: 'var(--muted)' }}>LICENSE:</span> No. 53228 — Ajman Media City Free Zone, UAE</div>
              <div><span style={{ color: 'var(--muted)' }}>FORM:</span> Free Zone Establishment, Amiri Decree No.8 of 2021</div>
              <div><span style={{ color: 'var(--muted)' }}>ADDRESS:</span> AMC-BLA-B.C-6010468, AMC Boulevard-A, Ajman, UAE</div>
              <div>
                <span style={{ color: 'var(--muted)' }}>CONTACT:</span>{' '}
                <a href="mailto:info@beatlabs.ae" style={{ color: 'var(--lime)', textDecoration: 'none' }}>info@beatlabs.ae</a>
              </div>
            </div>
            <p className="bl-body" style={{ paddingTop: '1.4rem', maxWidth: '560px' }}>
              BeatLabs FZE LLC is the legal entity operating all beatLabs products and brands,
              including the applications listed below and the studios TrueLoveCreative and
              Estrela.photo.
            </p>
          </div>
        </section>

        {/* PRODUCT LEGAL DIRECTORY */}
        <section style={{ paddingBottom: '4rem' }}>
          <div style={{ paddingBottom: '1rem' }}>
            <SectionLabel>PRODUCT LEGAL DOCUMENTS</SectionLabel>
          </div>
          <div>
            {publishedProducts.map(product => (
              <div key={product.slug} className="bl-app-row">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                  <span className="bl-title" style={{ fontSize: '1.25rem' }}>{product.displayName}</span>
                  <span className="bl-mono" style={{ textTransform: 'none' }}>
                    {product.siteUrl ? product.siteUrl.replace('https://', '').split('/')[0] : ''}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '1rem' }}>
                  {product.docs.filter(d => d.label !== 'Website').map(doc => (
                    <a key={doc.href} href={doc.href} target="_blank" rel="noopener noreferrer" className="bl-doc-btn">
                      {doc.label} ↗
                    </a>
                  ))}
                  <Link
                    href={`/apps/${product.slug}`}
                    className="bl-doc-btn"
                    style={{ color: 'var(--lime)', borderColor: 'rgba(200,255,71,0.3)' }}
                  >
                    App profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="bl-body" style={{ fontSize: '0.9rem', paddingTop: '1.2rem', maxWidth: '560px' }}>
            Apps currently in development will have their legal documents published on their own
            domains at launch.
          </p>
        </section>

        {/* THIS WEBSITE */}
        <section>
          <div style={{ paddingBottom: '1.5rem' }}>
            <SectionLabel>THIS WEBSITE</SectionLabel>
          </div>
          <div style={{ border: '1px solid var(--hair)', padding: '1.8rem', maxWidth: '720px' }}>
            <p className="bl-body" style={{ margin: 0 }}>
              beatlabs.ae is an informational website. It does not require an account, does not use
              tracking cookies, and does not collect personal data. If you contact us by email,
              your message is used solely to respond to you. For product-specific data practices,
              refer to each product&apos;s own privacy policy above. Questions:{' '}
              <a href="mailto:info@beatlabs.ae" style={{ color: 'var(--lime)', textDecoration: 'none' }}>info@beatlabs.ae</a>.
            </p>
          </div>
        </section>
      </Page>
    </>
  )
}
