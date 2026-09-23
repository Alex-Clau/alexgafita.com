// Main section displaying the stack used day to day

'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SkillGroup } from './SkillGroup';
import { scrollVariantsProps } from '@/lib/animations/transitions';
import { staggerContainer } from '@/lib/animations/variants';
import { skillGroups } from '@/data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
      <SectionHeader
        title="Stack"
        description="Spring Boot and TypeScript first. Around them, the integrations a product needs, and the checks that say when production breaks. I also work on AI orchestration — agents, rules, and skills — so more of the repetitive work can be handed off."
      />

      <motion.div
        className="grid gap-6 sm:gap-8 lg:grid-cols-3 overflow-visible"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </motion.div>
    </section>
  );
}
