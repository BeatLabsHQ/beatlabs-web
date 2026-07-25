'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const features = [
  { id: '01', title: '6 categories. One app.', desc: 'Properties, Motor, Services, Jobs, Pets, Classifieds. Each with custom fields, smart filters, and specialized search.' },
  { id: '02', title: '4 pricing models.', desc: 'Fixed price, negotiable, auction, or free donation. Sellers pick the model that fits the item. Buyers know what they\'re getting.' },
  { id: '03', title: 'Real-time chat.', desc: 'WebSocket-powered messaging. Send images, share locations, make offers — all without leaving the app.' },
  { id: '04', title: 'Zero commissions.', desc: 'What you sell for is what you get. No platform cuts, no hidden fees. Ever.' },
]

const howItWorks = [
  { step: '01', title: 'Discover', desc: 'Browse curated listings by category, location, and price. Smart filters find exactly what you need — fast.' },
  { step: '02', title: 'Connect', desc: 'Real-time chat. Send images, share locations, make offers — all without leaving the app.' },
  { step: '03', title: 'Close', desc: 'Fixed price, negotiation, auction, or free donation. Pick the model that fits. Done.' },
]

const stats = [
  { value: '6', label: 'Categories' },
  { value: '4', label: 'Pricing models' },
  { value: '0%', label: 'Commission' },
]

export default function NibangoPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh' }}>

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.2rem 1.5rem',
          borderBottom: scrollY > 40 ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          background: scrollY > 40 ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrollY > 40 ? 'blur(12px)' : 'none',
          transition: 'all 0.3s',
        }}
      >
        <Link href="/">
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.6rem', width: 'auto', cursor: 'pointer', opacity: 0.7 }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/apps" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>
            ← ALL APPS
          </Link>
          <a href="https://nibango.com/uiapp" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.6rem', color: 'var(--lime)', letterSpacing: '0.2em', textDecoration: 'none', fontFamily: 'var(--font-syne)', fontWeight: 700, border: '1px solid var(--lime)', padding: '0.4rem 0.9rem' }}>
            VISIT SITE →
          </a>
        </div>
      </motion.nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8rem 2.5rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '760px', position: 'relative' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '2rem', height: '1px', background: 'var(--lime)' }} />
            <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>MARKETPLACE APP · BY BEATLABS</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(5rem, 12vw, 12rem)', lineHeight: 0.88, letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '2.5rem' }}>
            Ni<span style={{ color: 'var(--lime)' }}>bango.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem', color: 'rgba(240,237,232,0.5)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '1rem' }}>
            The marketplace that actually works.
          </p>
          <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', color: 'rgba(240,237,232,0.35)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '3rem' }}>
            Buy. Sell. Bid. Donate. 6 categories, 4 pricing models, real-time chat — zero commissions. Your neighbourhood, reimagined for the Gulf.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://nibango.com/uiapp" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.7rem', letterSpacing: '0.2em', fontWeight: 700, color: 'var(--black)', background: 'var(--lime)', padding: '0.9rem 2.2rem', textDecoration: 'none', display: 'inline-block' }}>
              VISIT NIBANGO →
            </a>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-syne)', color: 'var(--muted)', letterSpacing: '0.15em' }}>
              iOS · ANDROID · WEB
            </span>
          </div>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '4rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--lime)', lineHeight: 1, letterSpacing: '0.02em' }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.15em', marginTop: '0.6rem' }}>
                {s.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: '8rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>FEATURES</span>
        </motion.div>
        <div>
          {features.map((f, i) => (
            <motion.div key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem 0', display: 'grid', gridTemplateColumns: '3rem 1fr 1fr', gap: '2rem', alignItems: 'start' }}
            >
              <span style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--muted)', letterSpacing: '0.1em', paddingTop: '0.3rem' }}>{f.id}</span>
              <h3 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1 }}>
                {f.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', color: 'rgba(240,237,232,0.45)', lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: '8rem 2.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '5rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--lime)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>HOW IT WORKS</span>
          <h2 style={{ fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '0.02em', marginTop: '1.5rem' }}>
            Three steps.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Zero friction.</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {howItWorks.map((h, i) => (
            <motion.div key={h.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '2.5rem', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '0.85rem', color: 'var(--lime)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>{h.step}</div>
              <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2rem', color: 'var(--white)', letterSpacing: '0.05em', lineHeight: 1, marginBottom: '1rem' }}>
                {h.title}<span style={{ color: 'var(--lime)' }}>.</span>
              </div>
              <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', color: 'rgba(240,237,232,0.4)', lineHeight: 1.7 }}>
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── LEGAL ── */}
      <section style={{ padding: '6rem 2.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.25em', fontFamily: 'var(--font-syne)', fontWeight: 700 }}>LEGAL</span>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          {[
            { title: 'Privacy Policy', desc: 'How we collect, use, and protect your data.', href: 'https://nibango.com/privacy' },
            { title: 'Terms of Service', desc: 'Rules and conditions for using Nibango.', href: 'https://nibango.com/terms' },
          ].map((doc, i) => (
            <motion.div key={doc.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a href={doc.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.06)', transition: 'border-color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,71,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', color: 'var(--white)', letterSpacing: '0.03em', lineHeight: 1, marginBottom: '0.8rem' }}>
                  {doc.title} →
                </div>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem', color: 'rgba(240,237,232,0.35)', lineHeight: 1.5 }}>
                  {doc.desc}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '3rem 2.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="beatLabs" style={{ height: '1.4rem', opacity: 0.5 }} />
          </Link>
          <span style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)' }}>
            © 2026 beatLabs — Dubai, UAE
          </span>
        </div>
        <a href="mailto:info@beatlabs.ae" style={{ fontSize: '0.6rem', color: 'var(--muted)', letterSpacing: '0.15em', fontFamily: 'var(--font-syne)', textDecoration: 'none' }}>
          info@beatlabs.ae
        </a>
      </footer>

    </main>
  )
}
