// Pure helpers behind the scroll-aware chrome (bar fade, progress ring, slider autoplay).

/** How far the page has been read, 0..1. Zero when the page does not scroll. */
export function scrollProgress(scrollY: number, scrollHeight: number, viewportHeight: number): number {
  const max = scrollHeight - viewportHeight
  if (max <= 0) return 0
  return Math.min(1, Math.max(0, scrollY / max))
}

/** The bar's fade from white (0) to black (1): starts after `offset` px, completes over `span` px, smoothstepped. */
export function barFade(scrollY: number, offset = 24, span = 360): number {
  const t = Math.min(1, Math.max(0, (scrollY - offset) / span))
  return t * t * (3 - 2 * t)
}

/** Index of the slide after `current`, wrapping round. */
export function nextIndex(current: number, count: number): number {
  if (count <= 0) return 0
  return ((current < 0 ? 0 : current + 1)) % count
}
