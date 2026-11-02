import type { Metadata } from 'next'
import { Btn, Shell } from '@/components/chrome'
import { StudioCell } from '@/components/cells'
import { company, studios } from '@/data/portfolio'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  path: '/studios',
  title: 'Studios — beatLabs',
  description: `The beatLabs studios: ${studios[0].name} (web and graphic design) and ${studios[1].name} (photography for artists, DJs and performers). Open for client work in Dubai.`,
})

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
      <section className="contact">
        <p className="h2">Tell the studio what you need.</p>
        <div className="actions" style={{ justifyContent: 'flex-start', paddingTop: 22 }}>
          {studios.map(st => <Btn key={st.id} href={`mailto:${st.email}`} external>Write to {st.name}</Btn>)}
        </div>
      </section>
    </Shell>
  )
}
