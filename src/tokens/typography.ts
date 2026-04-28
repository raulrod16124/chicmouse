/**
 * Design tokens — Typography
 * Reference: src/VISUAL_DESIGN_GUIDE.md — Tipografía
 *
 * Font family: Poppins (current) — recommended migration: Inter
 * Hierarchy: H1 > H2 > H3 > body > caption
 */

export const typography = {
  fontFamily: {
    base: "'Poppins', sans-serif",
  },
  fontSize: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '36px',
    '6xl': '40px',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    base: 1.5,
    relaxed: 1.7,
  },
  // Semantic aliases aligned to the design guide hierarchy
  h1: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '28px',
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  body: {
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  caption: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.5,
  },
} as const;

export type TypographyToken = typeof typography;
