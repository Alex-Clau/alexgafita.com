// Skills as its own landing-page chapter: inventory panel, not a timeline or card grid

'use client';

import { motion } from 'framer-motion';
import { SkillGroup } from './SkillGroup';
import {
  scrollVariantsProps,
  scrollAnimationProps,
} from '@/lib/animations/transitions';
import { staggerContainer } from '@/lib/animations/variants';
import { skillGroups } from '@/data/portfolio';

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full space-y-8 sm:space-y-10 md:space-y-12 relative z-10"
    >
      <motion.div
        {...scrollAnimationProps}
        className="flex flex-col gap-4 sm:gap-5 max-w-2xl"
      >
        <div className="flex items-center gap-3">
          <span className="h-px w-8 sm:w-10 bg-primary" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Toolkit
          </p>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading text-left">
          Skills & Stack
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-left">
          Not every library I have touched — the layer I actually build with, from the core app to the agentic workflows around it.
        </p>
      </motion.div>

      <motion.div
        className="border border-border bg-card/50 backdrop-blur-[2px] px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 divide-y divide-border"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        {skillGroups.map((group, index) => (
          <SkillGroup
            key={group.title}
            index={index}
            title={group.title}
            items={group.items}
          />
        ))}
      </motion.div>
    </section>
  );
}
