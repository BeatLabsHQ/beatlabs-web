import type { Metadata } from 'next'
import { ArrowIcon, Btn, Head, Shell } from '@/components/chrome'
import { company, publishedProducts } from '@/data/portfolio'

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

export default function LegalPage() {
  return (
    <Shell current="legal">
      <section className="hero">
        <h1 className="wall">Company <span className="out">&amp; legal.</span></h1>
        <div className="hero-lower">
          <p className="body">Every {company.brand} product is its own brand, and its legal documents live on its own domain. This page is the directory, plus the company behind all of them.</p>
          <div className="actions"><Btn href={`mailto:${company.email}`} external>Contact</Btn></div>
        </div>
      </section>

      <Head title="The entity" label={`Licence ${company.license}`} />
      <section className="rows">
        <div className="row"><span className="label">Name</span><span className="val">{company.legalName}</span></div>
        <div className="row"><span className="label">Licence</span><span className="val">No. {company.license} · {company.zone}, UAE</span></div>
        <div className="row"><span className="label">Form</span><span className="val">{company.form}</span></div>
        <div className="row"><span className="label">Address</span><span className="val">{company.address}</span></div>
        <div className="row"><span className="label">Founded</span><span className="val">{company.founded}</span></div>
        <div className="row"><span className="label">Founder</span><span className="val">{company.founder.name} · {company.founder.role}</span></div>
        <div className="row"><span className="label">Contact</span><span className="val"><a href={`mailto:${company.email}`} className="mark">{company.email}</a></span></div>
      </section>

      <Head title="Product legal documents" label="Published on each product's domain" />
      <section className="cells cells--3">
        {publishedProducts.map(p => (
          <div key={p.slug} className="cell">
            <div className="title">
              {p.icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.icon} alt="" width={96} height={96} />
              )}
              <span className="h3">{p.displayName}</span>
            </div>
            <p className="meta">{p.siteUrl ? p.siteUrl.replace('https://', '').split('/')[0] : '—'}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
              {p.docs.filter(d => d.label !== 'Website').map(doc => (
                <a key={doc.href} href={doc.href} className="btn" target="_blank" rel="noopener noreferrer">{doc.label}<ArrowIcon up /></a>
              ))}
              <Btn href={`/apps/${p.slug}`} black>App</Btn>
            </div>
          </div>
        ))}
      </section>
      <p className="body block block--tight">Apps in development get their documents on their own domains at launch.</p>

      <Head title="This website" />
      <section className="block block--rule">
        <p className="body">
          beatlabs.ae is an informational website. It does not require an account, does not use tracking cookies, and does not collect personal data. If you contact us by email, your message is used solely to respond to you. For product-specific data practices, refer to each product&apos;s own privacy policy above. Questions: <a href={`mailto:${company.email}`} className="mark">{company.email}</a>.
        </p>
      </section>
    </Shell>
  )
}
