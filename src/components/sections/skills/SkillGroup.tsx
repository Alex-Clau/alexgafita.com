// Skill group styled like Experience entries

'use client';

import { motion } from 'framer-motion';
import { fadeScaleDownVariants } from '@/lib/animations/variants';

interface SkillGroupProps {
  readonly title: string;
  readonly items: readonly string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <motion.article
      variants={fadeScaleDownVariants}
      className="grid gap-3 sm:gap-4 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-start border-t border-border pt-6 sm:pt-8 first:border-t-0 first:pt-0"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-heading">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-1.5 max-w-2xl">
        {items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center border border-border bg-surface/70 px-2 py-0.5 text-xs text-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
