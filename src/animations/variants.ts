/**
 * Framer Motion animation variants
 * Reference: src/VISUAL_DESIGN_GUIDE.md — Microinteracciones (150–250ms)
 *
 * Usage:
 *   import { fadeUp, staggerContainer } from "animations/variants";
 *   <motion.div variants={fadeUp} initial="hidden" animate="visible" />
 */

import type {Variants} from 'framer-motion';

export const fadeUp: Variants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.45, ease: 'easeOut'},
  },
};

export const fadeIn: Variants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {duration: 0.3, ease: 'easeOut'},
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardEntrance: Variants = {
  hidden: {opacity: 0, y: 24},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.4, ease: 'easeOut'},
  },
};

export const pageTransition: Variants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {duration: 0.2, ease: 'easeOut'},
  },
  exit: {
    opacity: 0,
    transition: {duration: 0.15, ease: 'easeIn'},
  },
};
