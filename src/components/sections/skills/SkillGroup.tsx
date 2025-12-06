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
      <div className="space-y-6 rounded-xl border border-blue-900/30 bg-gradient-to-br from-black/50 via-indigo-950/20 to-black/50 backdrop-blur-sm p-6 sm:p-7 hover:border-blue-800/60 hover:bg-black/60 hover:shadow-xl hover:shadow-blue-900/40 group-hover:scale-[1.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200 mb-2">
            {title}
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-blue-600/70 via-blue-500/50 to-transparent" />
        </div>

        <motion.div
          className="relative flex flex-wrap gap-4 sm:gap-5 pb-10"
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

