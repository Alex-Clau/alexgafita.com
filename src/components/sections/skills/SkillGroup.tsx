// Displays a group of skills with a title

'use client';

import { motion } from 'framer-motion';
import { fadeScaleVariants, staggerContainerFast } from '@/lib/animations/variants';
import { SkillIcon } from '@/components/shared/SkillIcon';

interface SkillGroupProps {
  readonly title: string;
  readonly items: readonly string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <motion.div
      variants={fadeScaleVariants}
      className="group relative overflow-visible"
    >
      <div className="space-y-5 sm:space-y-6 border border-zinc-800 bg-zinc-950 p-4 sm:p-6 md:p-7 hover:border-zinc-700 transition-colors">
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-400 mb-1.5 sm:mb-2">
            {title}
          </p>
          <div className="h-px w-12 sm:w-16 bg-stone-800" />
        </div>

        <motion.div
          className="relative flex flex-wrap gap-1.5 sm:gap-2 md:gap-3"
          variants={staggerContainerFast}
        >
          {items.map((item) => {
            const icon = <SkillIcon label={item} />;
            return icon ? (
              <div key={item} className="overflow-visible">
                {icon}
              </div>
            ) : null;
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

