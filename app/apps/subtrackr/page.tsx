'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

/* ── Data ── */

const steps = [
  { num: '1', title: 'Add a subscription', desc: 'Name, price, billing cycle, renewal date. Takes 10 seconds.' },
  { num: '2', title: 'Set your alerts', desc: 'Pick how many days before renewal you want a heads-up.' },
  { num: '3', title: 'Review & save', desc: 'See your monthly total, spot what you forgot, and cut what you don\'t need.' },
]

const freeFeatures = [
  'Track up to 5 subscriptions',
  'Renewal notifications',
  'Multi-currency conversion',
  'Category organization',
  'Biometric lock',
]

const proFeatures = [
  'Unlimited subscriptions',
  'Cloud sync across devices',
  'Home Screen widgets',
  'Shared cost splitting',
  'Price increase detection',
  'Data export (JSON & CSV)',
]

const curbUrl = 'https://getcurbapp.com'

const faqItems = [
  { q: 'Is Curb free?', a: 'Yes. The free tier lets you track up to 5 subscriptions with full features including notifications, multi-currency, and biometric lock. Go Pro to unlock unlimited subscriptions, cloud sync, widgets, and more.' },
  { q: 'Do you connect to my bank?', a: 'No. Curb is completely manual and private. You add your subscriptions yourself — we never connect to your bank, read your emails, or access your financial accounts.' },
  { q: 'What platforms is it available on?', a: 'Curb is available on iOS and Android. Both versions support the same features including cloud sync between devices.' },
  { q: 'How does cloud sync work?', a: 'Sign in with Apple or Google, and your subscriptions sync automatically via a secure cloud database. Your data is encrypted in transit and at rest. You can also use the app without signing in — everything stays on your device.' },
  { q: 'What currencies are supported?', a: 'Over 30 currencies including USD, EUR, GBP, AED, SAR, JPY, and more. Exchange rates update daily so your monthly total is always accurate in your preferred currency.' },
  { q: 'Can I export my data?', a: 'Pro users can export all subscription data as JSON or CSV. You own your data — always.' },
  { q: 'How does the lifetime Pro work?', a: 'One-time purchase, yours forever. No recurring charges, no subscriptions to manage your subscriptions. The price is shown in the app.' },
]

/* ── Animations ── */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ── FAQ Item ── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.4rem 0', background: 'none', border: 'none',
          fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 600,
          color: '#fff', cursor: 'pointer', gap: '1rem',
        }}
      >
        <span>{q}</span>
        <span style={{
          fontFamily: 'var(--font-syne)', fontSize: '1.4rem', fontWeight: 300,
          color: 'var(--lime)', transition: 'transform 0.3s',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
          flexShrink: 0,
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? '300px' : '0',
        opacity: open ? 1 : 0,
        transition: 'max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease',
        paddingBottom: open ? '1.4rem' : '0',
        overflow: 'hidden',
      }}>
        <p style={{
          fontFamily: 'var(--font-syne)', fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
        }}>
          {a}
        </p>
      </div>
    </div>
  )
}

/* ── Wave Divider ── */

function Wave({ fill, flip }: { fill: string; flip?: boolean }) {
  return (
    <div style={{ lineHeight: 0, marginTop: '-2px', transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: '70px', display: 'block' }}>
        <path d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z" fill={fill} />
      </svg>
    </div>
  )
}

/* ── Page ── */

export default function SubtrackrPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main style={{ background: '#000', minHeight: '100vh', overflow: 'hidden' }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 2rem', height: '64px',
        background: scrollY > 60 ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: scrollY > 60 ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrollY > 60 ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.png" alt="beatLabs" style={{ height: '1.3rem', opacity: 0.5 }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {[
            { label: 'Features', href: '#features' },
            { label: 'Pro', href: '#pro' },
            { label: 'FAQ', href: '#faq' },
          ].map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--lime)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '6rem 2rem 4rem',
        maxWidth: '1120px', margin: '0 auto',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center', width: '100%',
        }}>
          {/* Text */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.35rem 0.9rem', borderRadius: '100px',
                background: 'rgba(200,255,71,0.08)', border: '1px solid rgba(200,255,71,0.15)',
                marginBottom: '1.8rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--lime)', boxShadow: '0 0 8px rgba(200,255,71,0.5)' }} />
                <span style={{ fontFamily: 'var(--font-syne)', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.04em', fontWeight: 500 }}>
                  Available on iOS &amp; Android
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              lineHeight: 0.92, color: '#fff', marginBottom: '1.2rem',
            }}>
              Know what<br />you&apos;re <span style={{ color: 'var(--lime)' }}>paying for.</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-syne)', fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.7,
              maxWidth: '440px', marginBottom: '2.5rem',
            }}>
              Curb - Subscription Tracker keeps every recurring payment in one place — with alerts before renewals, multi-currency totals, and zero surprises on your bank statement.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <a href={curbUrl} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.3rem', borderRadius: '14px',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                <svg width="18" height="22" viewBox="0 0 814 1000" fill="white"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.2-81-105.5-207.3-105.5-327.3 0-192.8 125.5-295.1 248.7-295.1 65.5 0 120 43.4 161.2 43.4 39.2 0 100.4-46.1 174.6-46.1 28.2 0 130 2.5 197.3 95.5zm-271.5-87.7c31.2-36.9 53.4-88.1 53.4-139.3 0-7.1-.6-14.3-1.9-20.1-50.9 1.9-111.5 33.9-148.1 76.5-26.3 29.8-53.6 81-53.6 133.1 0 7.8.9 15.6 1.3 18.1 2.5.3 6.5 1 10.5 1 45.6 0 103.7-30.4 138.4-69.3z"/></svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.4)' }}>Download on the</div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem', color: '#fff', fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
                </div>
              </a>
              <a href={curbUrl} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.3rem', borderRadius: '14px',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                <svg width="18" height="20" viewBox="0 0 512 512" fill="white"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.4)' }}>Get it on</div>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.8rem', color: '#fff', fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: '280px', height: '570px', borderRadius: '40px',
              border: '3px solid rgba(255,255,255,0.12)',
              background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
              overflow: 'hidden', position: 'relative',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
            }}>
              {/* Dynamic Island */}
              <div style={{
                position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)',
                width: '100px', height: '28px', borderRadius: '20px', background: '#000', zIndex: 2,
              }} />

              <div style={{ padding: '56px 20px 20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>
                  My Subscriptions
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Monthly Total</div>
                  <div style={{ fontFamily: 'var(--font-bebas)', fontSize: '2.5rem', color: 'var(--lime)', lineHeight: 1 }}>$47.96</div>
                </div>
                {[
                  { name: 'Netflix', price: '$15.99', color: '#E50914', icon: 'N' },
                  { name: 'Spotify', price: '$9.99', color: '#1DB954', icon: 'S' },
                  { name: 'iCloud+', price: '$2.99', color: '#3693F5', icon: 'i' },
                  { name: 'ChatGPT Plus', price: '$19.99', color: '#10A37F', icon: 'G' },
                ].map((sub, i) => (
                  <div key={sub.name} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '10px 12px', marginBottom: '6px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: '30px', height: '30px', borderRadius: '8px', background: sub.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-syne)', fontSize: '0.7rem', fontWeight: 700, color: '#fff',
                    }}>{sub.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: '#fff', fontWeight: 600 }}>{sub.name}</div>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.3)' }}>Renews in {3 + i * 5} days</div>
                    </div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{sub.price}</div>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                  <div style={{ width: '120px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.15)', margin: '0 auto' }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Wave: hero → how it works ── */}
      <Wave fill="#0a0a0a" />

      {/* ── HOW IT WORKS ── */}
      <section id="features" style={{ background: '#0a0a0a', padding: '5rem 2rem 6rem' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'center',
          }}>
            {/* Left: text + steps */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp}>
                <h2 style={{
                  fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  color: '#fff', lineHeight: 1, marginBottom: '0.8rem',
                }}>
                  How it works
                </h2>
                <p style={{
                  fontFamily: 'var(--font-syne)', fontSize: '0.95rem',
                  color: 'rgba(255,255,255,0.4)', lineHeight: 1.6,
                  marginBottom: '2.5rem', maxWidth: '400px',
                }}>
                  Getting started takes less than a minute.
                </p>
              </motion.div>

              {steps.map((s) => (
                <motion.div key={s.num} variants={fadeUp} style={{
                  display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                  marginBottom: '2rem',
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '14px', flexShrink: 0,
                    background: 'rgba(200,255,71,0.08)', border: '1px solid rgba(200,255,71,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-bebas)', fontSize: '1.2rem', color: 'var(--lime)',
                  }}>
                    {s.num}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-syne)', fontSize: '1rem', fontWeight: 600,
                      color: '#fff', marginBottom: '0.3rem',
                    }}>
                      {s.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-syne)', fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.35)', lineHeight: 1.6,
                    }}>
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right: feature highlights */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
            >
              {[
                { icon: '🔔', title: 'Renewal alerts', desc: 'Never get charged for something you forgot.' },
                { icon: '💱', title: 'Multi-currency', desc: 'Auto-converts 30+ currencies to yours.' },
                { icon: '📱', title: 'Widgets', desc: 'Upcoming renewals on your Home Screen.' },
                { icon: '🔒', title: 'Face ID lock', desc: 'Keep your finances private.' },
                { icon: '☁️', title: 'Cloud sync', desc: 'Sign in and sync across devices.' },
                { icon: '🌍', title: '13 languages', desc: 'From English to Arabic to Korean.' },
              ].map((f) => (
                <motion.div key={f.title} variants={fadeUp} style={{
                  padding: '1.5rem', borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,255,71,0.15)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{f.icon}</div>
                  <h4 style={{
                    fontFamily: 'var(--font-syne)', fontSize: '0.85rem', fontWeight: 600,
                    color: '#fff', marginBottom: '0.3rem',
                  }}>{f.title}</h4>
                  <p style={{
                    fontFamily: 'var(--font-syne)', fontSize: '0.75rem',
                    color: 'rgba(255,255,255,0.3)', lineHeight: 1.5,
                  }}>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Wave: how → pro ── */}
      <Wave fill="#000" />

      {/* ── FREE vs PRO ── */}
      <section id="pro" style={{ background: '#000', padding: '5rem 2rem 6rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: '#fff', lineHeight: 1, marginBottom: '0.8rem',
            }}>
              Free or Pro?
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.4)', lineHeight: 1.6,
            }}>
              Both are great. Pick what fits.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
          >
            {/* Free */}
            <motion.div variants={fadeUp} style={{
              padding: '2.5rem', borderRadius: '20px',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', color: '#fff',
                marginBottom: '0.3rem',
              }}>Free</h3>
              <p style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)', marginBottom: '1.8rem',
              }}>
                Everything you need to start.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {freeFeatures.map(f => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'center', gap: '0.7rem',
                    marginBottom: '0.9rem',
                    fontFamily: 'var(--font-syne)', fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.55)',
                  }}>
                    <span style={{ color: 'var(--lime)', fontSize: '0.9rem', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Pro */}
            <motion.div variants={fadeUp} style={{
              padding: '2.5rem', borderRadius: '20px',
              background: 'rgba(200,255,71,0.03)', border: '1px solid rgba(200,255,71,0.15)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: '-12px', right: '1.5rem',
                fontFamily: 'var(--font-syne)', fontSize: '0.55rem', fontWeight: 700,
                color: '#000', background: 'var(--lime)', padding: '0.25rem 0.8rem',
                borderRadius: '100px', letterSpacing: '0.06em',
              }}>
                LIFETIME
              </div>
              <h3 style={{
                fontFamily: 'var(--font-bebas)', fontSize: '1.8rem', color: 'var(--lime)',
                marginBottom: '0.3rem',
              }}>Pro</h3>
              <p style={{
                fontFamily: 'var(--font-syne)', fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.3)', marginBottom: '1.8rem',
              }}>
                One-time purchase. Yours forever.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {proFeatures.map(f => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'center', gap: '0.7rem',
                    marginBottom: '0.9rem',
                    fontFamily: 'var(--font-syne)', fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.55)',
                  }}>
                    <span style={{ color: 'var(--lime)', fontSize: '0.9rem', fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Wave: pro → faq ── */}
      <Wave fill="#0a0a0a" />

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: '#0a0a0a', padding: '5rem 2rem 6rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: 'var(--font-bebas)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: '#fff', lineHeight: 1, marginBottom: '0.8rem',
            }}>
              Questions? Answers.
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.4)', lineHeight: 1.6,
            }}>
              Everything you need to know about Curb - Subscription Tracker.
            </motion.p>
          </motion.div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {faqItems.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave: faq → cta ── */}
      <Wave fill="#000" />

      {/* ── CTA ── */}
      <section style={{ background: '#000', padding: '6rem 2rem 4rem', textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.h2 variants={fadeUp} style={{
            fontFamily: 'var(--font-bebas)', fontSize: 'clamp(3rem, 7vw, 5rem)',
            color: '#fff', lineHeight: 0.95, marginBottom: '1.2rem',
          }}>
            Stop guessing.<br />
            <span style={{ color: 'var(--lime)' }}>Start tracking.</span>
          </motion.h2>
          <motion.p variants={fadeUp} style={{
            fontFamily: 'var(--font-syne)', fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem',
          }}>
            Free to download. No account required.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a href={curbUrl} style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.8rem', fontWeight: 600,
              color: '#000', background: 'var(--lime)', padding: '0.85rem 2rem',
              borderRadius: '14px', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(200,255,71,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Download for iOS
            </a>
            <a href={curbUrl} style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.8rem', fontWeight: 600,
              color: '#fff', padding: '0.85rem 2rem', borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent' }}
            >
              Download for Android
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '2rem 2rem',
        maxWidth: '1120px', margin: '0 auto',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <img src="/logo.png" alt="beatLabs" style={{ height: '1.2rem', opacity: 0.35 }} />
            </Link>
            <span style={{ fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>
              &copy; 2026 Beat Labs &mdash; Dubai, UAE
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/apps/subtrackr/privacy" style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)',
              textDecoration: 'none',
            }}>Privacy</Link>
            <Link href="/apps/subtrackr/terms" style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)',
              textDecoration: 'none',
            }}>Terms</Link>
            <a href="mailto:info@beatlabs.ae" style={{
              fontFamily: 'var(--font-syne)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)',
              textDecoration: 'none',
            }}>Contact</a>
          </div>
        </div>
      </footer>

      {/* ── RESPONSIVE ── */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </main>
  )
}
