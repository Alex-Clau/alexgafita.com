// Skills section: shared site chrome, its own cluster layout

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
        title="Skills & Stack"
        description="The layer I build with — application core, data, integrations, production checks, and AI workflows."
      />

      <motion.div
        className="grid gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14"
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
