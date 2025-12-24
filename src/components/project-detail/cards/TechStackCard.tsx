// Displays detailed tech stack organized by category

'use client';

import { getOptimizedTransition } from "@/lib/animations/transitions";
import { staggerContainer, fadeScaleVariants } from "@/lib/animations/variants";
import { motion, useInView } from "framer-motion";
import { StackBadges } from "@/components/shared/StackBadges";
import type { Project } from "@/types";
import { useRef } from "react";

interface TechStackCardProps {
  readonly project: Project;
}

export function TechStackCard({ project }: TechStackCardProps) {
  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={stackRef}
      initial={{ opacity: 0 }}
      animate={stackInView ? { opacity: 1 } : { opacity: 0 }}
      transition={getOptimizedTransition({ duration: 0.2 })}
      className="space-y-6"
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
        Tech Stack
      </h3>
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate={stackInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={fadeScaleVariants}
          className="space-y-3"
        >
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
            Languages
          </h4>
          <StackBadges items={project.languages} />
        </motion.div>
        <motion.div
          variants={fadeScaleVariants}
          className="space-y-3"
        >
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
            Frameworks
          </h4>
          <StackBadges items={project.frameworks} />
        </motion.div>
        <motion.div
          variants={fadeScaleVariants}
          className="space-y-3"
        >
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
            Infrastructure
          </h4>
          <StackBadges items={project.infrastructure} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

