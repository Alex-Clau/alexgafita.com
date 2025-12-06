import { Transition } from 'framer-motion';

/**
 * Check if user prefers reduced motion
 * 
 * This reads the user's OS/browser accessibility setting:
 * - macOS: System Settings → Accessibility → Display → "Reduce motion"
 * - Windows: Settings → Ease of Access → Display → "Show animations"
 * - iOS: Settings → Accessibility → Motion → "Reduce Motion"
 * - Android: Settings → Accessibility → "Remove animations"
 * 
 * The preference is set at the OS level and automatically respected by browsers.
 * 
 * @returns true if user has reduced motion enabled, false otherwise
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false; // SSR safety - no window on server
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Optimized transition config that respects user preferences
 */
export function getOptimizedTransition(overrides?: Partial<Transition>): Transition {
  const base: Transition = {
    duration: prefersReducedMotion() ? 0.01 : 0.3,
    ease: [0.42, 0, 0.58, 1],
  };
  return { ...base, ...overrides };
}


