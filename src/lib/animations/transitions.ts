/**
 * Animation transition utilities
 * Handles accessibility (prefers-reduced-motion) and provides reusable transition configs
 */

import {Transition} from 'framer-motion';

/**
 * Check if user prefers reduced motion
 *
 * This reads the user's OS/browser accessibility setting:
 * - macOS: System Settings → Accessibility → Display → "Reduce motion"
 * - Windows: Settings → Ease of Access → Display → "Show animations"
 * - iOS: Settings → Accessibility → Motion → "Reduce Motion"
 * - Android: Settings → Accessibility → "Remove animations"
 *
 * @returns true if user has reduced motion enabled, false otherwise
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false; // SSR safety
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Optimized transition config that respects user preferences
 *
 * @param overrides - Optional transition overrides
 * @returns Transition configuration
 */
export function getOptimizedTransition(overrides?: Partial<Transition>): Transition {
  const base: Transition = {
    duration: prefersReducedMotion() ? 0.01 : 0.3,
    ease: [0.42, 0, 0.58, 1],
  };
  return {...base, ...overrides};
}

/**
 * Common viewport configuration for scroll-triggered animations
 */
export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;

/**
 * Props for scroll-triggered animations (fade + scale)
 * Ready-to-use animation props for common scroll animations
 */
export const scrollAnimationProps = {
  initial: {opacity: 0, scale: 0.9},
  whileInView: {opacity: 1, scale: 1},
  viewport: defaultViewport,
  transition: getOptimizedTransition({duration: 0.2}),
} as const;

/**
 * Props for scroll-triggered animations with variants
 * Use with motion components that have variants prop
 */
export const scrollVariantsProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: defaultViewport,
} as const;

