// Skill group as a numbered inventory row inside the stack panel

'use client';

import { motion } from 'framer-motion';
import { fadeScaleVariants } from '@/lib/animations/variants';

interface SkillGroupProps {
  readonly index: number;
  readonly title: string;
  readonly items: readonly string[];
}

export function SkillGroup({ index, title, items }: SkillGroupProps) {
  const label = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      variants={fadeScaleVariants}
      className="group grid gap-4 sm:gap-6 sm:grid-cols-[3.5rem_1fr] lg:grid-cols-[4rem_minmax(12rem,16rem)_1fr] items-start py-6 sm:py-7 first:pt-0 last:pb-0"
    >
      <span
        className="font-mono text-sm sm:text-base tracking-widest text-primary/80 group-hover:text-primary transition-colors"
        aria-hidden="true"
      >
        {label}
      </span>

      <h3 className="text-base sm:text-lg font-semibold text-heading sm:pt-0.5">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-2 sm:col-span-2 lg:col-span-1 sm:pt-0.5">
        {items.map((item) => (
          <li
            key={item}
            className="inline-flex items-center border border-primary/25 bg-background/40 px-3 py-1.5 text-sm text-foreground group-hover:border-primary/45 transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
