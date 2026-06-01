'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const modules = [
  { id: '001', name: 'NIBANGO', type: 'APP', status: 'launching', statusText: 'LAUNCHING', dot: '◉', uptime: '90%', url: null },
  { id: '002', name: 'CURB', type: 'APP', status: 'launching', statusText: 'LAUNCHING', dot: '◉', uptime: '95%', url: 'https://getcurbapp.com' },
  { id: '003', name: 'TIMEUP', type: 'APP', status: 'dev', statusText: 'DEV', dot: '○', uptime: '—', url: null },
  { id: '004', name: 'CONTRACKR', type: 'APP', status: 'dev', statusText: 'DEV', dot: '○', uptime: '—', url: null },
  { id: '005', name: 'WEBVANGUARD', type: 'STUDIO', status: 'live', statusText: 'LIVE', dot: '●', uptime: '100%', url: 'https://webvanguard.co' },
  { id: '006', name: 'TRUE_LOVE_CRTV', type: 'STUDIO', status: 'live', statusText: 'LIVE', dot: '●', uptime: '100%', url: 'https://truelovecreative.es' },
  { id: '007', name: 'ESTRELA_PHOTO', type: 'STUDIO', status: 'live', statusText: 'LIVE', dot: '●', uptime: '100%', url: 'https://estrela.photo' },
]

const bootLines = [
  '> INITIALIZING BEATLABS_OS...',
  '> LOADING ENTITY: BEATLABS FZE LLC [OK]',
  '> LICENSE: 53228 AJMAN FREE ZONE [VERIFIED]',
  '> MODULES: 7 [LOADED]',
  '> STATUS: OPERATIONAL',
  '',
  '> MISSION: WE BUILD COMPANIES. NOT PROJECTS.',
]

const bootDelays = [0, 400, 800, 1200, 1600, 1900, 2200]

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 })
  const [time, setTime] = useState('00:00:00')
  const [reportDate, setReportDate] = useState('')
  const [visibleBootLines, setVisibleBootLines] = useState<number[]>([])
  const [bootDone, setBootDone] = useState(false)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  // Custom cursor
  useEffect(() => {
    const move = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const dxb = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }))
      const h = String(dxb.getHours()).padStart(2, '0')
      const m = String(dxb.getMinutes()).padStart(2, '0')
      const s = String(dxb.getSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    tick()
    const i = setInterval(tick, 1000)
    return () => clearInterval(i)
  }, [])

  // Report date
  useEffect(() => {
    const now = new Date()
    const y = now.getFullYear()
    const mo = String(now.getMonth() + 1).padStart(2, '0')
    const da = String(now.getDate()).padStart(2, '0')
    setReportDate(`${y}-${mo}-${da}`)
  }, [])

  // Boot sequence
  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    bootDelays.forEach((delay, i) => {
      timers.push(setTimeout(() => {
        setVisibleBootLines(prev => [...prev, i])
      }, delay))
    })
    timers.push(setTimeout(() => setBootDone(true), 3000))
    return () => timers.forEach(clearTimeout)
  }, [])


  const mono = 'var(--mono)'
  const lime = 'var(--lime)'
  const bg = 'var(--black)'
  const textColor = 'var(--lime-dim)'
  const dimColor = 'rgba(255,255,255,0.3)'
  const borderColor = 'var(--lime-border)'
  const brightWhite = 'rgba(240,240,240,0.85)'

  const renderBootLineContent = (line: string) => {
    if (line === '') return <>&nbsp;</>
    if (line.includes('[OK]')) {
      const parts = line.split('[OK]')
      return <>{parts[0]}<span style={{ color: lime, fontWeight: 700 }}>[OK]</span>{parts[1]}</>
    }
    if (line.includes('[VERIFIED]')) {
      const parts = line.split('[VERIFIED]')
      return <>{parts[0]}<span style={{ color: lime, fontWeight: 700 }}>[VERIFIED]</span>{parts[1]}</>
    }
    if (line.includes('[LOADED]')) {
      const parts = line.split('[LOADED]')
      return <>{parts[0]}<span style={{ color: lime, fontWeight: 700 }}>[LOADED]</span>{parts[1]}</>
    }
    return <>{line}</>
  }

  const ModuleRow = ({ mod }: { mod: typeof modules[0] }) => {
    const isHovered = hoveredRow === mod.id

    const padName = mod.name.padEnd(18, ' ')
    const padType = mod.type.padEnd(12, ' ')
    const padStatus = `${mod.dot} ${mod.statusText}`.padEnd(16, ' ')
    const content = `${mod.id}   ${padName}${padType}${padStatus}${mod.uptime}`

    const rowStyle: React.CSSProperties = {
      fontFamily: mono,
      fontSize: '0.78rem',
      padding: '5px 4px',
      cursor: mod.url ? 'pointer' : 'default',
      transition: 'background 0.1s, color 0.1s',
      whiteSpace: 'pre',
      display: 'block',
      background: isHovered ? lime : 'transparent',
      color: isHovered ? bg : textColor,
      textDecoration: 'none',
    }

    if (mod.url) {
      return (
        <a
          href={mod.url}
          target="_blank"
          rel="noopener noreferrer"
          style={rowStyle}
          onMouseEnter={() => setHoveredRow(mod.id)}
          onMouseLeave={() => setHoveredRow(null)}
        >
          {content}
        </a>
      )
    }

    return (
      <span
        style={rowStyle}
        onMouseEnter={() => setHoveredRow(mod.id)}
        onMouseLeave={() => setHoveredRow(null)}
      >
        {content}
      </span>
    )
  }

  const MobileModuleCard = ({ mod }: { mod: typeof modules[0] }) => {
    const mobileDotColor = mod.status === 'live' || mod.status === 'launching' ? lime : dimColor
    const card = (
      <div style={{
        fontFamily: mono,
        fontSize: '0.75rem',
        color: textColor,
        padding: '10px 0',
        borderBottom: `1px solid ${borderColor}`,
      }}>
        <div style={{ color: lime, fontWeight: 700, marginBottom: '2px' }}>
          {mod.id}  {mod.name}
        </div>
        <div><span style={{ color: dimColor }}>TYPE:</span> {mod.type}</div>
        <div><span style={{ color: dimColor }}>STATUS:</span> <span style={{ color: mobileDotColor }}>{mod.dot}</span> {mod.statusText}</div>
        {mod.uptime !== '—' && <div><span style={{ color: dimColor }}>UPTIME:</span> {mod.uptime}</div>}
      </div>
    )

    if (mod.url) {
      return (
        <a href={mod.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          {card}
        </a>
      )
    }
    return card
  }

  return (
    <>
      <div className="cursor" style={{ left: mousePos.x, top: mousePos.y }} />

      <motion.div
        className="fixed top-0 left-0 h-[1px] z-[200]"
        style={{ width: lineWidth, background: lime }}
      />

      <style jsx global>{`
        @keyframes terminal-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .terminal-cursor {
          animation: terminal-blink 1s step-end infinite;
          color: var(--lime);
        }
        a { text-decoration: none; color: inherit; }
        a:visited { color: inherit; }

        @media (max-width: 768px) {
          .desktop-sidebar { display: none !important; }
          .mobile-info-bar { display: flex !important; }
          .desktop-topbar { display: none !important; }
          .dashboard-grid { grid-template-columns: 1fr !important; }
          .panel-left-desktop { display: block !important; border-right: none !important; padding-right: 0 !important; margin-bottom: 16px; overflow-x: hidden; font-size: 0.7rem !important; }
          .panel-right-desktop { padding-left: 0 !important; }
          .module-table-desktop { display: none !important; }
          .module-cards-mobile { display: block !important; }
          body { font-size: 0.75rem !important; }
        }

        @media (min-width: 769px) {
          .mobile-info-bar { display: none !important; }
          .module-cards-mobile { display: none !important; }
        }
      `}</style>

      {/* ── DESKTOP TOP BAR ── */}
      <div
        className="desktop-topbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: bg,
          borderBottom: `1px solid ${borderColor}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 20px',
          fontFamily: mono,
          fontSize: '0.75rem',
          color: lime,
        }}
      >
        <div style={{ flex: 1 }}>BEATLABS_OS v1.0.0</div>
        <div style={{ flex: 1, textAlign: 'center' }}>FZE://ajman-media-city/53228</div>
        <div style={{ flex: 1, textAlign: 'right' }}>[SYS: ONLINE] [TIME: {time} DXB]</div>
      </div>

      {/* ── MOBILE TOP BAR ── */}
      <div
        className="mobile-info-bar"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: bg,
          borderBottom: `1px solid ${borderColor}`,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 12px',
          fontFamily: mono,
          fontSize: '0.65rem',
          color: lime,
        }}
      >
        <span>BEATLABS_OS v1.0.0</span>
        <span>{time} DXB</span>
      </div>

      <main
        ref={mainRef}
        style={{
          background: bg,
          color: textColor,
          fontFamily: mono,
          fontSize: '14px',
          lineHeight: 1.6,
          overflowX: 'hidden',
          paddingTop: '50px',
          maxWidth: '1100px',
          margin: '0 auto',
          paddingLeft: '20px',
          paddingRight: '20px',
          cursor: 'none',
        }}
      >
        {/* ── BOOT SEQUENCE ── */}
        <div style={{ padding: '30px 0 20px', minHeight: '200px' }}>
          {bootLines.map((line, i) => (
            <div
              key={i}
              style={{
                opacity: visibleBootLines.includes(i) ? 1 : 0,
                whiteSpace: 'pre',
                color: lime,
                fontFamily: mono,
                fontSize: '0.85rem',
                transition: 'opacity 0.1s',
              }}
            >
              {renderBootLineContent(line)}
            </div>
          ))}
          {/* Cursor after last boot line */}
          <div style={{
            opacity: visibleBootLines.includes(bootLines.length - 1) ? 1 : 0,
            whiteSpace: 'pre',
            color: lime,
            fontFamily: mono,
            fontSize: '0.85rem',
          }}>
            {'> '}<span className="terminal-cursor">_</span>
          </div>
        </div>

        {/* ── SEPARATOR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={bootDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          style={{
            color: dimColor,
            padding: '10px 0',
            fontSize: '0.8rem',
            userSelect: 'none',
          }}
        >
          ────────────────────────────────────────────────────────────
        </motion.div>

        {/* ── DASHBOARD ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={bootDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="dashboard-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '30% 70%',
              gap: 0,
            }}
          >
            {/* ── LEFT PANEL (desktop only) ── */}
            <div
              className="panel-left-desktop"
              style={{
                paddingRight: '20px',
                borderRight: `1px solid rgba(200,255,71,0.15)`,
                fontFamily: mono,
                fontSize: '0.8rem',
                lineHeight: 1.5,
              }}
            >
              {/* Entity box */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ color: 'rgba(200,255,71,0.3)' }}>┌─ ENTITY ──────────────────┐</div>
                <div>│ <span style={{ color: brightWhite }}>BeatLabs FZE LLC</span>          │</div>
                <div>│ <span style={{ color: dimColor }}>Reg:</span> <span style={{ color: brightWhite }}>53228</span>                │</div>
                <div>│ <span style={{ color: dimColor }}>Zone:</span> <span style={{ color: brightWhite }}>Ajman Media City</span>    │</div>
                <div>│ <span style={{ color: dimColor }}>Status:</span> <span style={{ color: lime }}>ACTIVE</span>            │</div>
                <div>│ <span style={{ color: dimColor }}>Founded:</span> <span style={{ color: brightWhite }}>2026-03-25</span>       │</div>
                <div style={{ color: 'rgba(200,255,71,0.3)' }}>└───────────────────────────┘</div>
              </div>

              {/* Contact box */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ color: 'rgba(200,255,71,0.3)' }}>┌─ CONTACT ─────────────────┐</div>
                <div>│ <span style={{ color: brightWhite }}>info@beatlabs.ae</span>          │</div>
                <div>│ <span style={{ color: brightWhite }}>+971585324519</span>             │</div>
                <div style={{ color: 'rgba(200,255,71,0.3)' }}>└───────────────────────────┘</div>
              </div>

              {/* Status box */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ color: 'rgba(200,255,71,0.3)' }}>┌─ STATUS ──────────────────┐</div>
                <div>│ <span style={{ color: dimColor }}>SYS:</span>    <span style={{ color: lime }}>ONLINE</span>             │</div>
                <div>│ <span style={{ color: dimColor }}>DEPLOY:</span> <span style={{ color: brightWhite }}>2026-03-25</span>         │</div>
                <div>│ <span style={{ color: dimColor }}>UPTIME:</span> <span style={{ color: brightWhite }}>100%</span>              │</div>
                <div>│ <span style={{ color: dimColor }}>ENV:</span>    <span style={{ color: brightWhite }}>PRODUCTION</span>        │</div>
                <div style={{ color: 'rgba(200,255,71,0.3)' }}>└───────────────────────────┘</div>
              </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div
              className="panel-right-desktop"
              id="section-modules"
              style={{ paddingLeft: '20px', fontFamily: mono }}
            >
              <div style={{ color: lime, fontSize: '0.8rem', marginBottom: '8px' }}>
                MODULE_LIST &gt; STATUS_REPORT &gt; {reportDate}
              </div>

              {/* Desktop table */}
              <div className="module-table-desktop">
                <div style={{ fontSize: '0.75rem', color: dimColor, padding: '4px 0' }}>
                  ID    NAME              TYPE        STATUS          UPTIME
                </div>
                <div style={{ color: borderColor, fontSize: '0.75rem', userSelect: 'none' }}>
                  ────────────────────────────────────────────────────────────
                </div>

                {modules.map(mod => (
                  <ModuleRow key={mod.id} mod={mod} />
                ))}

                <div style={{ color: borderColor, fontSize: '0.75rem', userSelect: 'none' }}>
                  ────────────────────────────────────────────────────────────
                </div>
                <div style={{ fontSize: '0.75rem', color: textColor, paddingTop: '8px' }}>
                  TOTAL: 7 | LIVE: 3 | IN_DEV: 4
                </div>
              </div>

              {/* Mobile cards */}
              <div className="module-cards-mobile" style={{ display: 'none' }}>
                {/* Mobile status panel */}
                <div style={{
                  fontFamily: mono,
                  fontSize: '0.75rem',
                  color: textColor,
                  padding: '10px 0',
                  borderBottom: `1px solid ${borderColor}`,
                  marginBottom: '4px',
                }}>
                  <div style={{ color: lime, fontWeight: 700, marginBottom: '4px' }}>SYS_STATUS</div>
                  <div><span style={{ color: dimColor }}>SYS:</span> <span style={{ color: lime }}>ONLINE</span></div>
                  <div><span style={{ color: dimColor }}>DEPLOY:</span> <span style={{ color: brightWhite }}>2026-03-25</span></div>
                  <div><span style={{ color: dimColor }}>UPTIME:</span> <span style={{ color: brightWhite }}>100%</span></div>
                  <div><span style={{ color: dimColor }}>ENV:</span> <span style={{ color: brightWhite }}>PRODUCTION</span></div>
                </div>
                {modules.map(mod => (
                  <MobileModuleCard key={mod.id} mod={mod} />
                ))}
                <div style={{ fontSize: '0.7rem', color: textColor, paddingTop: '8px' }}>
                  TOTAL: 7 | LIVE: 3 | IN_DEV: 4
                </div>
              </div>

              <div style={{ paddingTop: '16px', fontSize: '0.85rem', color: lime }}>
                {'> '}<span className="terminal-cursor">_</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── ABOUT SECTION ── */}
        <motion.div
          id="section-about"
          initial={{ opacity: 0 }}
          animate={bootDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ paddingTop: '10px' }}
        >
          <div style={{
            color: borderColor,
            fontSize: '0.75rem',
            padding: '16px 0 8px',
            userSelect: 'none',
          }}>
            ────────────────────────────────────────────────────────────
          </div>

          <p style={{ color: lime, fontWeight: 700, fontSize: '0.85rem', fontFamily: mono }}>
            {'> whoami'}
          </p>
          <div style={{ fontSize: '0.8rem', padding: '4px 0', lineHeight: 1.6, fontFamily: mono }}>
            <div>
              <span style={{ color: dimColor, display: 'inline-block', minWidth: '100px' }}>NAME:</span>
              <span style={{ color: brightWhite }}>Francisco Javier Estrela Belmonte</span>
            </div>
            <div>
              <span style={{ color: dimColor, display: 'inline-block', minWidth: '100px' }}>ROLE:</span>
              <span style={{ color: brightWhite }}>Founder &amp; Manager, BeatLabs FZE LLC</span>
            </div>
            <div>
              <span style={{ color: dimColor, display: 'inline-block', minWidth: '100px' }}>LOCATION:</span>
              <span style={{ color: brightWhite }}>Dubai, UAE</span>
            </div>
            <div>
              <span style={{ color: dimColor, display: 'inline-block', minWidth: '100px' }}>SKILLS:</span>
              <span style={{ color: brightWhite }}>design, code, launch, repeat</span>
            </div>
          </div>

          <br />
          <p style={{ color: lime, fontWeight: 700, fontSize: '0.85rem', fontFamily: mono }}>
            {'> mission'}
          </p>
          <div style={{
            fontSize: '0.8rem',
            lineHeight: 1.7,
            color: textColor,
            maxWidth: '600px',
            paddingTop: '6px',
            fontFamily: mono,
          }}>
            beatLabs is the holding entity behind everything I build.<br />
            Each project has its own identity, its own audience, its own path.<br />
            Built properly. Always.
          </div>
          <div style={{ paddingTop: '16px', fontSize: '0.85rem', color: lime, fontFamily: mono }}>
            {'> '}<span className="terminal-cursor">_</span>
          </div>
        </motion.div>

        {/* ── CONTACT SECTION ── */}
        <motion.div
          id="section-contact"
          initial={{ opacity: 0 }}
          animate={bootDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ paddingTop: '10px' }}
        >
          <div style={{
            color: borderColor,
            fontSize: '0.75rem',
            padding: '16px 0 8px',
            userSelect: 'none',
          }}>
            ────────────────────────────────────────────────────────────
          </div>

          <p style={{ color: lime, fontWeight: 700, fontSize: '0.85rem', fontFamily: mono }}>
            {'> contact'}
          </p>
          <div style={{ fontSize: '0.8rem', paddingTop: '8px', fontFamily: mono }}>
            <div>$ mail info@beatlabs.ae</div>
            <div>
              <a
                href="mailto:info@beatlabs.ae"
                style={{
                  color: lime,
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                [CLICK TO COMPOSE →]
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── FOOTER ── */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={bootDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            padding: '30px 0 20px',
            fontSize: '0.7rem',
            color: dimColor,
            textAlign: 'center',
            lineHeight: 1.8,
            fontFamily: mono,
          }}
        >
          <div style={{ color: 'rgba(200,255,71,0.15)', userSelect: 'none' }}>
            ─────────────────────────────────────────────────────────────
          </div>
          BEATLABS_OS · © 2026 BeatLabs FZE LLC · License 53228 · Ajman Media City Free Zone<br />
          Free Zone Establishment incorporated under Amiri Decree No.8 of 2021
          <div style={{ color: 'rgba(200,255,71,0.15)', userSelect: 'none' }}>
            ─────────────────────────────────────────────────────────────
          </div>
        </motion.footer>
      </main>
    </>
  )
}
