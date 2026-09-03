'use client'

import { useEffect, useState } from 'react'

// Mobile index: the record header's INDEX cell opens a sheet of the pages.
export function IndexToggle({ items }: { items: { href: string; no: string; label: string }[] }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])
  return (
    <>
      <button type="button" className="rec-index" aria-expanded={open} aria-controls="index-sheet" onClick={() => setOpen(o => !o)}>
        {open ? 'Close' : 'Index'}
      </button>
      <nav className="index-sheet" id="index-sheet" aria-label="Index" hidden={!open}>
        <ol>
          {items.map(it => (
            <li key={it.href}><a href={it.href} onClick={() => setOpen(false)}><span>{it.no}</span>{it.label}</a></li>
          ))}
        </ol>
      </nav>
    </>
  )
}
