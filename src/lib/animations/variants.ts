// Centralized Framer Motion animation variants

import { Variants } from 'framer-motion';
import { getOptimizedTransition } from './transitions';

// Fade + scale animation variants - subtle for minimal design
export const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.2 }),
  },
};

// Fade + scale + slide up from bottom
export const fadeScaleUpFromBottomVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: getOptimizedTransition({ duration: 0.3 }),
  },
};

// Fade + scale down - subtle for minimal design
export const fadeScaleDownVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.25 }),
  },
};

// Fade + scale from center
export const fadeScaleCenterVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.2 }),
  },
};

// Hero section container variants
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Hero section item variants - subtle for minimal design
export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: getOptimizedTransition({ duration: 0.3 }),
  },
};

// Factory function for creating stagger containers
export function createStaggerContainer(
  staggerDelay: number = 0.03,
  delayChildren: number = 0.03
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };
}

// Pre-configured stagger containers
export const staggerContainer = createStaggerContainer(0.03, 0.03);
export const staggerContainerFast = createStaggerContainer(0.02, 0.03);

