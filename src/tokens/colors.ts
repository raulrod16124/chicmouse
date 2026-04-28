/**
 * Design tokens — Color System
 * Reference: src/VISUAL_DESIGN_GUIDE.md — Color System
 *
 * Primary (Dark Mode — principal)
 * Secondary (Light Mode — complementary)
 *
 * Rules:
 * - accentYellow is accent only — never use on large surfaces
 * - Avoid pure black (#000000)
 * - Avoid pure white (#FFFFFF) in dark mode
 * - Never use more than two accent colors simultaneously
 */

export const colors = {
  // --- Dark Mode backgrounds ---
  bgPrimary: "#0B132B",
  bgSecondary: "#1C2541",
  surface: "#243B53",

  // --- Text ---
  textPrimary: "#F5F5F5",
  textSecondary: "#C9D1D9",

  // --- Accents ---
  accentYellow: "#FFC857",
  accentBlue: "#3A86FF",

  // --- Light Mode (complementary) ---
  lightBgPrimary: "#F7F9FC",
  lightBgSecondary: "#FFFFFF",
  lightTextPrimary: "#0B132B",
  lightTextSecondary: "#4A5568",
} as const;

export type ColorToken = typeof colors;
export type ColorKey = keyof ColorToken;
