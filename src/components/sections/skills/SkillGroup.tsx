// Displays a named group of skills as readable labels

'use client';

import { motion } from 'framer-motion';
import { fadeScaleVariants } from '@/lib/animations/variants';

interface SkillGroupProps {
  readonly title: string;
  readonly items: readonly string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <motion.div variants={fadeScaleVariants} className="group relative overflow-visible">
      <div className="space-y-5 sm:space-y-6 border border-zinc-800 bg-zinc-950 p-4 sm:p-6 md:p-7 hover:border-zinc-700 transition-colors h-full">
        <div className="relative">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-300/90 mb-1.5 sm:mb-2">
            {title}
          </h3>
          <div className="h-px w-12 sm:w-16 bg-stone-800" />
        </div>

        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-stone-200/90"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
