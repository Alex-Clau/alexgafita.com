// Skill group as a labeled chip row — no card chrome

'use client';

import { motion } from 'framer-motion';
import { fadeScaleVariants } from '@/lib/animations/variants';

interface SkillGroupProps {
  readonly title: string;
  readonly items: readonly string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <motion.div
      variants={fadeScaleVariants}
      className="grid gap-3 sm:gap-4 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:items-start"
    >
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary pt-1.5">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center bg-nord2/80 px-3 py-1.5 text-sm text-heading border border-border/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
