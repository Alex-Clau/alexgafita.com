// Project detail page as a short case study

'use client';

import { motion, useInView } from 'framer-motion';
import { getOptimizedTransition } from '@/lib/animations/transitions';
import type { Project } from '@/types';
import Link from 'next/link';
import { useRef } from 'react';
import { ProjectHeader } from './ProjectHeader';
import { HighlightsCard } from './cards/HighlightsCard';
import { QuickStackCard } from './cards/QuickStackCard';
import { DecisionsCard } from './cards/DecisionsCard';

interface ProjectDetailPageProps {
  readonly project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const problemRef = useRef(null);
  const problemInView = useInView(problemRef, { once: true, amount: 0.2 });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getOptimizedTransition({ duration: 0.2 })}
        className="sticky top-0 z-10 -mx-6 lg:-mx-8 px-6 lg:px-8 py-3 mb-4 sm:mb-6 bg-background/90 backdrop-blur-sm border-b border-border/60"
      >
        <Link
          href="/"
          aria-label="Back to home"
          className="inline-flex items-center gap-1.5 min-h-[44px] text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
        >
          <span className="text-primary">←</span>
          <span>Back</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.05 })}
        className="space-y-6 sm:space-y-8"
      >
        <ProjectHeader project={project} />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,280px)] gap-6 sm:gap-8 items-start">
          <motion.section
            ref={problemRef}
            initial={{ opacity: 0, y: 8 }}
            animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={getOptimizedTransition({ duration: 0.2 })}
            className="space-y-2 max-w-2xl"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Problem
            </h2>
            <p className="text-base leading-relaxed text-foreground">{project.problem}</p>
          </motion.section>

          <QuickStackCard project={project} />
        </div>

        <div className="pt-2 border-t border-border">
          <HighlightsCard project={project} />
        </div>

        {project.decisions?.length ? (
          <div className="pt-2 border-t border-border">
            <DecisionsCard project={project} />
          </div>
        ) : null}
      </motion.div>
    </>
  );
}
