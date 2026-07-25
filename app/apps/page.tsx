'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const apps = [
  {
    id: '01',
    name: 'Nibango',
    type: 'Marketplace App',
    desc: 'Peer-to-peer second-hand marketplace reimagined for the Gulf. Buy, sell, trust.',
    status: 'Launching',
    flagship: true,
    slug: 'nibango',
    docs: [
      { label: 'Website', href: 'https://nibango.com' },
      { label: 'Privacy Policy', href: 'https://nibango.com/privacy' },
      { label: 'Terms of Service', href: 'https://nibango.com/terms' },
    ],
  },
  {
    id: '02',
    name: 'Curb - Subscription Tracker',
    type: 'Finance App',
    desc: "Track all your subscriptions in one place. Know exactly what you're paying, when, and cancel what you don't need.",
    status: 'Live',
    flagship: false,
    slug: 'curb',
    docs: [
      { label: 'Website', href: 'https://getcurbapp.com' },
      { label: 'Privacy Policy', href: 'https://getcurbapp.com/privacy.html' },
      { label: 'Terms of Service', href: 'https://getcurbapp.com/terms.html' },
    ],
  },
  {
    id: '03',
    name: 'Raved',
    type: 'Social App',
    desc: 'An inbox for recommendations. Save every song, movie, place, and tip your friends send you — and actually get to them.',
    status: 'Launching',
    flagship: false,
    slug: 'raved',
    docs: [
      { label: 'Website', href: 'https://raved.app' },
      { label: 'Privacy Policy', href: 'https://raved.app/privacy' },
      { label: 'Terms of Service', href: 'https://raved.app/terms' },
    ],
  },
  {
    id: '04',
    name: 'Epiloq',
    type: 'Entertainment App',
    desc: 'Track shows, movies, comics, and books in one place. Minimal, calm, tool-first — for everything you watch and read.',
    status: 'In Development',
    flagship: false,
    slug: 'epiloq',
    docs: [],
  },
  {
    id: '05',
    name: 'TimeUp',
    type: 'Productivity App',
    desc: 'Time management reimagined. Focus blocks, deep work sessions, and real accountability for how you spend your hours.',
    status: 'In Development',
    flagship: false,
    slug: 'timeup',
    docs: [],
  },
]

export default function AppsPage() {
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
          <Link href="/" style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← HOME
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '10rem 2.5rem 4rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>APPS</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 8vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '1.5rem' }}>
            Our<br /><span style={{ color: 'var(--lime)' }}>Applications.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7, maxWidth: '480px' }}>
            Mobile applications built by beatLabs. Each app is its own brand — with its own domain, identity, documentation, and legal pages.
          </p>
        </motion.div>
      </section>

      {/* FLAGSHIP — Nibango */}
      <section style={{ padding: '0 2.5rem 3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            border: '1px solid rgba(200,255,71,0.15)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(200,255,71,0.03) 0%, rgba(8,8,8,1) 70%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{
              fontSize: '0.55rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
              padding: '0.25rem 0.8rem', letterSpacing: '0.2em',
              background: 'var(--lime)', color: 'var(--black)',
            }}>
              FLAGSHIP
            </span>
            <span style={{
              fontSize: '0.55rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
              padding: '0.25rem 0.8rem', letterSpacing: '0.15em',
              border: '1px solid rgba(200,255,71,0.4)', color: 'var(--lime)',
            }}>
              {apps[0].status.toUpperCase()}
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-bebas)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            letterSpacing: '0.03em',
            color: 'var(--white)',
            lineHeight: 1,
            marginBottom: '1rem',
          }}>
            Nibango
          </h2>

          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '1rem' }}>
            MARKETPLACE APP · P2P COMMERCE
          </p>

          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2rem' }}>
            {apps[0].desc}
          </p>

          {/* Legal docs */}
          {apps[0].docs.length > 0 && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em', alignSelf: 'center' }}>LEGAL DOCS:</span>
              {apps[0].docs.map(doc => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 700,
                    color: 'var(--white)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.5rem 1.2rem', textDecoration: 'none',
                  }}
                >
                  {doc.label} →
                </a>
              ))}
            </div>
          )}

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            fontFamily: 'var(--font-syne)', fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700,
            color: 'var(--lime)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lime)' }} />
            LAUNCHING SOON
          </div>
        </motion.div>
      </section>

      {/* OTHER APPS — Grid */}
      <section style={{ padding: '0 2.5rem 8rem' }}>
        <div className="pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px' }}>
          {apps.slice(1).map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', letterSpacing: '0.03em', color: 'var(--white)', lineHeight: 1 }}>
                  {app.name}
                </h2>
                <span style={{
                  fontSize: '0.5rem', fontFamily: 'var(--font-syne)', fontWeight: 700,
                  padding: '0.2rem 0.6rem', letterSpacing: '0.15em',
                  border: app.status === 'Live' ? '1px solid rgba(200,255,71,0.4)' : '1px solid rgba(255,255,255,0.1)',
                  color: app.status === 'Live' ? 'var(--lime)' : 'var(--muted)',
                }}>
                  {app.status === 'Live' ? '● LIVE' : app.status.toUpperCase()}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', marginBottom: '0.8rem' }}>
                {app.type.toUpperCase()}
              </p>

              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.4)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {app.desc}
              </p>

              {/* Legal docs if any */}
              {app.docs.length > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {app.docs.map(doc => (
                    <a
                      key={doc.href}
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-syne)', fontSize: '0.58rem', letterSpacing: '0.12em', fontWeight: 700,
                        color: 'var(--muted)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.4rem 0.8rem', textDecoration: 'none',
                      }}
                    >
                      {doc.label} →
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
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
            © 2026 BeatLabs FZE LLC. All rights reserved.  ·  Free Zone Establishment incorporated under Amiri Decree No.8 of 2021  ·  <Link href="/legal" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Legal →</Link>
          </p>
        </div>
      </footer>

    </main>
  )
}
