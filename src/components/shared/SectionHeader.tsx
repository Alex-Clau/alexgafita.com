// Reusable header component for all sections

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
      className={cn('space-y-3 sm:space-y-4', className)}
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <div className="h-px flex-1 bg-stone-800" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {title}
        </h2>
        <div className="h-px flex-1 bg-stone-800" />
      </div>
      {description && (
        <p className="flex flex-col items-center text-sm sm:text-base md:text-lg text-stone-300/90 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

