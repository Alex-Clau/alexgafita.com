// Main section displaying all projects in a grid layout

'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { scrollVariantsProps } from '@/lib/animations/transitions';
import { staggerContainer } from '@/lib/animations/variants';
import { projects } from '@/data/portfolio';

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <SectionHeader
        title="Main Projects"
        description="Click a project card to see the full case study, stack, and links."
      />

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

