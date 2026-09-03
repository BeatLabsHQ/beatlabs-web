import { describe, expect, it } from 'vitest'
import { barFade, nextIndex, scrollProgress } from './scroll'

describe('scrollProgress', () => {
  it('is 0 at the top and 1 at the bottom', () => {
    expect(scrollProgress(0, 3000, 900)).toBe(0)
    expect(scrollProgress(2100, 3000, 900)).toBe(1)
  })
  it('is proportional in between', () => {
    expect(scrollProgress(1050, 3000, 900)).toBeCloseTo(0.5)
  })
  it('clamps overscroll and handles pages that do not scroll', () => {
    expect(scrollProgress(-50, 3000, 900)).toBe(0)
    expect(scrollProgress(5000, 3000, 900)).toBe(1)
    expect(scrollProgress(0, 800, 900)).toBe(0)
  })
})

describe('barFade', () => {
  it('stays white before the offset', () => {
    expect(barFade(0)).toBe(0)
    expect(barFade(24)).toBe(0)
  })
  it('is fully black once the span is covered and beyond', () => {
    expect(barFade(24 + 360)).toBe(1)
    expect(barFade(10000)).toBe(1)
  })
  it('eases: half way through the span it is exactly half, and slower at the ends', () => {
    expect(barFade(24 + 180)).toBeCloseTo(0.5)
    expect(barFade(24 + 36)).toBeLessThan(0.1)
    expect(barFade(24 + 324)).toBeGreaterThan(0.9)
  })
})

describe('nextIndex', () => {
  it('advances and wraps', () => {
    expect(nextIndex(0, 4)).toBe(1)
    expect(nextIndex(3, 4)).toBe(0)
  })
  it('starts from the first slide when nothing is selected', () => {
    expect(nextIndex(-1, 4)).toBe(0)
  })
  it('is safe with no slides', () => {
    expect(nextIndex(0, 0)).toBe(0)
  })
})
