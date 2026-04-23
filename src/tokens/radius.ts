/**
 * Design tokens — Border Radius
 * Reference: src/VISUAL_DESIGN_GUIDE.md — UI Components (Cards: 12px)
 */

export const radius = {
  sm: '6px',
  md: '12px',
  lg: '20px',
  full: '9999px',
} as const;

export type RadiusToken = typeof radius;
export type RadiusKey = keyof RadiusToken;
