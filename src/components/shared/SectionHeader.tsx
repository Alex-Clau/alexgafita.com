/**
 * SectionHeader component
 * Reusable header component for all sections
 * Provides consistent styling and animation
 */

'use client';

import { motion } from 'framer-motion';
import { scrollAnimationProps } from '@/lib/animations/transitions';
import type { SectionHeaderProps } from '@/types';
import { cn } from '@/lib/utils';

export function SectionHeader({
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      {...scrollAnimationProps}
      className={cn('space-y-3', className)}
    >
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-blue-100">
        {title}
      </h2>
      <p className="max-w-2xl text-sm sm:text-base text-stone-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

