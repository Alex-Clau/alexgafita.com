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
        title="Skills & Stack"
        description="Curated by how production software is built: core application work, data and infrastructure, business integrations, observability, and agentic AI workflows."
      />

      <motion.div
        className="space-y-6 sm:space-y-8 md:space-y-10"
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
