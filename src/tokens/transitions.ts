/**
 * Design tokens — Transitions
 * Reference: src/VISUAL_DESIGN_GUIDE.md — Microinteracciones (150–250ms)
 */

export const transitions = {
  fast: '150ms ease',
  base: '250ms ease',
  slow: '400ms ease',
} as const;

export type TransitionsToken = typeof transitions;
export type TransitionKey = keyof TransitionsToken;
