// Framer Motion transition utilities

import {Transition} from 'framer-motion';

// Optimized transition config
export function getOptimizedTransition(overrides?: Partial<Transition>): Transition {
  const base: Transition = {
    duration: 0.3,
    ease: [0.42, 0, 0.58, 1],
  };
  return {...base, ...overrides};
}

// Common viewport configuration for scroll-triggered animations
export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;

// Props for scroll-triggered animations (fade + scale)
export const scrollAnimationProps = {
  initial: {opacity: 0, scale: 0.9},
  whileInView: {opacity: 1, scale: 1},
  viewport: defaultViewport,
  transition: getOptimizedTransition({duration: 0.2}),
} as const;

// Props for scroll-triggered animations with variants
export const scrollVariantsProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: defaultViewport,
} as const;

