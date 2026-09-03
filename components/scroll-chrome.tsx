'use client'

import { useEffect, useRef } from 'react'
import { barFade, scrollProgress } from '@/lib/scroll'

// One scroll listener for the two scroll-aware pieces of chrome: the bar that fades
// to black as the page moves, and the progress ring in the corner that fills as you
// read (and empties as you go back up). Click the ring to return to the top.
const R = 20
const C = 2 * Math.PI * R

export function ScrollChrome() {
  const ring = useRef<SVGCircleElement>(null)
  const num = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const root = document.documentElement
    let raf = 0
    const update = () => {
      raf = 0
      const p = scrollProgress(window.scrollY, root.scrollHeight, window.innerHeight)
      root.dataset.scrolled = window.scrollY > 24 ? '1' : '0'
      root.style.setProperty('--bar', String(barFade(window.scrollY)))
      if (ring.current) ring.current.style.strokeDashoffset = String(C * (1 - p))
      if (num.current) num.current.textContent = `${Math.round(p * 100)}`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return (
    <button type="button" className="progress" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <svg viewBox="0 0 48 48" aria-hidden>
        <circle className="progress-track" cx="24" cy="24" r={R} />
        <circle ref={ring} className="progress-bar" cx="24" cy="24" r={R} strokeDasharray={C} strokeDashoffset={C} />
      </svg>
      <span className="progress-num" aria-hidden><span ref={num}>0</span><small>%</small></span>
    </button>
  )
}
