import type { Metadata } from 'next'
import { ArrowIcon, Btn, Head, Shell } from '@/components/chrome'
import { company, publishedProducts } from '@/data/portfolio'
import { listNames, pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  path: '/legal',
  title: 'Legal — beatLabs',
  description: `Legal information for ${company.legalName} and its products. Privacy policies and terms of service for ${listNames(publishedProducts.map(p => p.displayName))}.`,
})

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

      <Head title="This website" />
      <section className="block block--rule">
        <p className="body">
          beatlabs.ae is an informational website. It does not require an account and does not use tracking cookies. On our Nibango page (/nibango), when a visit comes from an ad link, that visit and any tap on its store buttons are added to daily totals on Nibango&apos;s servers. The page sends the ad&apos;s source and campaign name, the action and the page language; only the daily totals per source and campaign are kept, never who visited, and the ad&apos;s name stays in your browser tab only until you close it. Like any website, our hosting and servers process technical data such as your IP address to deliver pages and prevent abuse. If you contact us by email, your message is used solely to respond to you. For product-specific data practices, refer to each product&apos;s own privacy policy above. Questions: <a href={`mailto:${company.email}`} className="mark">{company.email}</a>.
        </p>
      </section>
    </Shell>
  )
}
