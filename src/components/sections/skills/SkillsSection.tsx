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
    <section id="skills" className="w-full space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
      <SectionHeader
        title="Skills & Stack"
        description="I enjoy working close to the backend: scalable APIs, data, and cloud infrastructure, with just enough frontend to ship complete features."
      />

      <motion.div
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 overflow-visible"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        <SkillGroup title="Programming Languages" items={skills.programmingLanguages} />
        <SkillGroup title="Frameworks & Libraries" items={skills.frameworksLibraries} />
        <SkillGroup title="Cloud & DevOps" items={skills.cloudDevops} />
        <SkillGroup title="Databases & Tools" items={skills.databasesTools} />
      </motion.div>
    </section>
  );
}

