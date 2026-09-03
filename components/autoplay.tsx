'use client'

import { useEffect } from 'react'
import { nextIndex } from '@/lib/scroll'

// Advances a radio-driven slider every `interval` ms. Pauses while the pointer is over it,
// while a control inside has focus, and while the tab is hidden; a manual change restarts the clock.
export function Autoplay({ group, interval = 5000 }: { group: string; interval?: number }) {
  useEffect(() => {
    const radios = Array.from(document.querySelectorAll<HTMLInputElement>(`input[type="radio"][name="${group}"]`))
    if (radios.length < 2) return
    const host = radios[0].closest('section') ?? document.body
    let timer = 0
    const tick = () => {
      if (document.hidden || host.matches(':hover') || host.contains(document.activeElement)) return
      radios[nextIndex(radios.findIndex(r => r.checked), radios.length)].checked = true
    }
    const start = () => { window.clearInterval(timer); timer = window.setInterval(tick, interval) }
    const onChange = () => start()
    host.addEventListener('change', onChange)
    start()
    return () => { window.clearInterval(timer); host.removeEventListener('change', onChange) }
  }, [group, interval])
  return null
}
