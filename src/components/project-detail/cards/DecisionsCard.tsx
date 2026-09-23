// Architecture Decision Records for a project case study

'use client';

import { getOptimizedTransition } from '@/lib/animations/transitions';
import { motion, useInView } from 'framer-motion';
import type { Project } from '@/types';
import { useRef } from 'react';

interface DecisionsCardProps {
  readonly project: Project;
}

export function DecisionsCard({ project }: DecisionsCardProps) {
  const decisions = project.decisions;
  const decisionsRef = useRef(null);
  const decisionsInView = useInView(decisionsRef, { once: true, amount: 0.1 });

  if (!decisions?.length) {
    return null;
  }

  return (
    <motion.section
      ref={decisionsRef}
      initial={{ opacity: 0 }}
      animate={decisionsInView ? { opacity: 1 } : { opacity: 0 }}
      transition={getOptimizedTransition({ duration: 0.2 })}
      className="space-y-8"
      aria-labelledby="adr-heading"
    >
      <div className="space-y-2 max-w-2xl">
        <h3
          id="adr-heading"
          className="text-sm font-semibold uppercase tracking-[0.18em] text-primary"
        >
          Architecture Decision Records
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          What was chosen, what was rejected, what it cost, and what I would revisit.
        </p>
      </div>

      <div className="space-y-10">
        {decisions.map((decision) => (
          <article key={decision.title} className="space-y-5 max-w-2xl">
            <h4 className="text-lg sm:text-xl font-semibold text-heading">
              {decision.title}
            </h4>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Context & constraints
              </p>
              <p className="text-base leading-relaxed text-foreground">
                {decision.context}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Rejected options
              </p>
              <ul className="space-y-2">
                {decision.rejected.map((option) => (
                  <li
                    key={option}
                    className="flex gap-3 items-baseline text-base leading-relaxed text-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 mt-[0.35em]" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Chosen architecture
              </p>
              <p className="text-base leading-relaxed text-foreground">
                {decision.choice}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Accepted trade-offs
              </p>
              <p className="text-base leading-relaxed text-foreground">
                {decision.tradeoff}
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Retrospective
              </p>
              <p className="text-base leading-relaxed text-foreground">
                {decision.retrospective}
              </p>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
