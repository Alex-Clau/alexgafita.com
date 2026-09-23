// Skill cluster - title + chips, no card and no inventory chrome

'use client';

import { motion } from 'framer-motion';
import { fadeScaleVariants } from '@/lib/animations/variants';

interface SkillGroupProps {
  readonly title: string;
  readonly items: readonly string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <motion.div variants={fadeScaleVariants} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-base sm:text-lg font-semibold text-heading">
          {title}
        </h3>
        <div className="h-px w-10 bg-primary" aria-hidden="true" />
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center border border-border bg-surface/70 px-2.5 py-1 text-sm text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
