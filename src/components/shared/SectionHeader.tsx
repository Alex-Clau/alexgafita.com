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
      className={cn('space-y-4', className)}
    >
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600/60 to-transparent" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-50">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-600/60 to-transparent" />
      </div>
      <p className="max-w-2xl text-sm sm:text-base text-stone-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

