/**
 * SkillGroup component
 * Displays a group of skills with a title
 */

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
      <div className="space-y-5 rounded-xl border border-blue-900/20 bg-gradient-to-br from-black/40 via-indigo-950/15 to-black/40 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:border-blue-800/50 hover:bg-black/50 hover:shadow-xl hover:shadow-blue-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/95 mb-1">
            {title}
          </p>
          <div className="h-px w-12 bg-gradient-to-r from-blue-600/60 to-transparent" />
        </div>

        <motion.div
          className="relative flex flex-wrap gap-4 sm:gap-5 pb-10"
          variants={staggerContainerFast}
        >
          {items.map((item) => (
            <div key={item} className="overflow-visible">
              <SkillIcon label={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

