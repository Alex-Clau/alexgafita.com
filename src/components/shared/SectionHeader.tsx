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
        <div className="h-px flex-1 bg-border" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading">
          {title}
        </h2>
        <div className="h-px flex-1 bg-border" />
      </div>
      {description ? (
        <div className="flex flex-col items-center text-center text-sm sm:text-base md:text-lg text-foreground leading-relaxed">
          {description}
        </div>
      ) : null}
    </motion.div>
  );
}
