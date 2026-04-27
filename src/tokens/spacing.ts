/**
 * Design tokens — Spacing
 * Reference: src/VISUAL_DESIGN_GUIDE.md — UX & Layout
 * Base unit: 4px
 */

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
  20: '80px',
  30: '120px',
} as const;

export const spacing_dvh = {
  1: '2dvh',
  2: '4dvh',
  3: '8dvh',
  4: '16dvh',
  6: '24dvh',
} as const;

export type SpacingToken = typeof spacing;
export type SpacingKey = keyof SpacingToken;
