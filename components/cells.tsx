import Link from 'next/link'
import type { AppProduct, StudioModule } from '@/data/portfolio'
import { ArrowIcon } from './chrome'

export const STATUS = { live: 'Live', launching: 'Launching', dev: 'In development' } as const

/** One app as a MacPaw product tile: name and descriptor top-left, status top-right, the icon centred, "Read more ↗". */
export function AppCell({ app }: { app: AppProduct; big?: boolean; compact?: boolean }) {
  const isDev = app.status === 'dev'
  const inner = (
    <>
      <div className="card-head">
        <div>
          <div className="h3">{app.displayName}</div>
          <div className="line">{app.type}{app.flagship ? ' · Flagship' : ''}</div>
        </div>
        <span className={isDev ? 'pill-dark mark' : 'mark'} style={isDev ? { background: '#e4e4e4', color: '#7a7a7a' } : undefined}>{STATUS[app.status]}</span>
      </div>
      <div className="card-icon">
        {app.icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={app.icon} alt="" width={96} height={96} />
        ) : <div className="placeholder" aria-hidden />}
      </div>
      <span className="card-desc">{app.oneLiner}</span>
      {!isDev && <span className="more">Read more<ArrowIcon /></span>}
    </>
  )
  return isDev ? (
    <div className="cell card-app cell--dev">{inner}</div>
  ) : (
    <Link href={`/apps/${app.slug}`} className="cell card-app" aria-label={`${app.displayName} — read more`}>{inner}</Link>
  )
}

export function StudioCell({ studio }: { studio: StudioModule }) {
  return (
    <a href={studio.url} className="cell card-app" target="_blank" rel="noopener noreferrer" aria-label={`${studio.name} — opens its website`}>
      <div className="card-head">
        <div>
          <div className="h3">{studio.name}</div>
          <div className="line">{studio.url.replace('https://', '')}</div>
        </div>
        <span className="mark">Open</span>
      </div>
      <div className="card-icon">
        {studio.icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={studio.icon} alt="" width={96} height={96} />
        ) : studio.mark ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={studio.mark} alt="" className="mark-img" width={512} height={99} style={{ width: 'auto', height: 40, borderRadius: 0, filter: 'invert(1)' }} />
        ) : null}
      </div>
      <span className="card-desc">{studio.tagline}</span>
      <span className="more">Visit<ArrowIcon /></span>
    </a>
  )
}
