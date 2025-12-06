// Main section displaying skills organized by category

'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { SkillGroup } from './SkillGroup';
import { scrollVariantsProps } from '@/lib/animations/transitions';
import { staggerContainer } from '@/lib/animations/variants';
import { skills } from '@/data/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <SectionHeader
        title="Skills & Stack"
        description="I enjoy working close to the backend: scalable APIs, data, and cloud infrastructure, with just enough frontend to ship complete features."
      />

      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 overflow-visible"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        <SkillGroup title="Programming Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Cloud & DevOps" items={skills.cloudDevops} />
        <SkillGroup title="Databases & Tools" items={skills.databasesTools} />
      </motion.div>
    </section>
  );
}

