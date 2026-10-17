'use client'

import { useRef, type ReactNode } from 'react'

// A store button for a platform the app is not on yet: it opens a small "coming soon"
// dialog instead of a dead link. The native <dialog> gives focus trap and Esc for free.
export function SoonDialog({ id, label, black, icon, children }: { id: string; label: string; black?: boolean; icon?: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  return (
    <>
      <button type="button" className={`btn${black ? ' btn--black' : ''}`} aria-haspopup="dialog" aria-controls={id} onClick={() => ref.current?.showModal()}>
        {label}{icon}
      </button>
      <dialog
        ref={ref}
        id={id}
        className="soon"
        aria-labelledby={`${id}-title`}
        onClick={e => { if (e.target === e.currentTarget) e.currentTarget.close() }}
      >
        {/* The dialog itself has no padding, so a click that lands on it is a click on the backdrop. */}
        <div className="soon-body">
          <form method="dialog">
            <button type="submit" className="soon-close" aria-label="Close">×</button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  )
}
