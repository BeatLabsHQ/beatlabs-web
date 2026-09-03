import type { Metadata } from 'next'
import { Btn, Head, Shell } from '@/components/chrome'
import { StudioCell } from '@/components/cells'
import { company, studios } from '@/data/portfolio'

export const metadata: Metadata = {
  title: 'Studios — beatLabs',
  description: 'The beatLabs studios: TrueLoveCreative (brand, design and web) and Estrela.photo (portraits, events and live shows). Open for client work in Dubai.',
  alternates: { canonical: 'https://beatlabs.ae/studios' },
  openGraph: {
    title: 'Studios — beatLabs',
    description: 'TrueLoveCreative and Estrela.photo: brand, web and photography, open for client work.',
    url: 'https://beatlabs.ae/studios',
  },
}

export default function StudiosPage() {
  return (
    <Shell current="studios">
      <section className="hero">
        <h1 className="wall">Two studios, <span className="out">open</span> for work.</h1>
        <p className="body">Brand, web and photography for clients, run by the same people who build the apps. Both are part of {company.legalName} and take work in Dubai and remotely.</p>
      </section>
      <section className="cells cells--2" aria-label="Studios">
        {studios.map(s => (
          <StudioCell key={s.id} studio={s} />
        ))}
      </section>
      <Head title="What they do" label="Web & creative · photography" />
      <section className="cells cells--2">
        <div className="cell">
          <span className="h3">{studios[0].name}</span>
          <p className="line">{studios[0].tagline} Open for client work, in Dubai and remotely.</p>
          <p className="meta">{studios[0].url.replace('https://', '')}<br /><span className="mark">Studio · open</span></p>
        </div>
        <div className="cell">
          <span className="h3">{studios[1].name}</span>
          <p className="line">{studios[1].tagline} Open for client work in Dubai.</p>
          <p className="meta">{studios[1].url.replace('https://', '')}<br /><span className="mark">Studio · open</span></p>
        </div>
      </section>
      <section className="contact">
        <a className="mail" href={`mailto:${company.email}`}>{company.email}</a>
        <p className="body" style={{ paddingTop: 14 }}>Tell us what you need and which studio it is for. One inbox, answered by the founder.</p>
        <div className="actions" style={{ justifyContent: 'flex-start', paddingTop: 22 }}>
          <Btn href={studios[0].url} external>{studios[0].name}</Btn>
          <Btn href={studios[1].url} external>{studios[1].name}</Btn>
        </div>
      </section>
    </Shell>
  )
}
