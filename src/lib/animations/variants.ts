/**
 * Animation variants
 * Centralized Framer Motion variants for consistent animations across the app
 */

import { Variants } from 'framer-motion';
import { getOptimizedTransition, prefersReducedMotion } from './transitions';

/**
 * Fade + scale animation variants
 * Common animation for most UI elements
 */
export const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.2 }),
  },
};

/**
 * Fade + scale + slide up from bottom
 * Used for contact section and elements entering from bottom
 */
export const fadeScaleUpFromBottomVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: getOptimizedTransition({ duration: 0.3 }),
  },
};

/**
 * Fade + scale down
 * Used for project cards and similar elements
 */
export const fadeScaleDownVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.3 }),
  },
};

/**
 * Fade + scale from center
 * Used for icons and small elements
 */
export const fadeScaleCenterVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.2 }),
  },
};

/**
 * Hero section container variants
 * For on-load animations (not scroll-triggered)
 */
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/**
 * Hero section item variants
 * For individual elements within hero section
 */
export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: getOptimizedTransition({ duration: 0.4 }),
  },
};

/**
 * Factory function for creating stagger containers
 * Allows customization of stagger timing
 * 
 * @param staggerDelay - Delay between each child animation
 * @param delayChildren - Initial delay before children start animating
 * @returns Stagger container variants
 */
export function createStaggerContainer(
  staggerDelay: number = 0.03,
  delayChildren: number = 0.03
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion() ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion() ? 0 : delayChildren,
      },
    },
  };
}

/**
 * Pre-configured stagger containers
 * Common stagger configurations for different use cases
 */
export const staggerContainer = createStaggerContainer(0.03, 0.03);
export const staggerContainerFast = createStaggerContainer(0.02, 0.03);

