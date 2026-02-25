// Displays quick stack summary and repository link

'use client';

import { getOptimizedTransition } from "@/lib/animations/transitions";
import { staggerContainerFast } from "@/lib/animations/variants";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/types";
import { useRef } from "react";

interface QuickStackCardProps {
  readonly project: Project;
}

export function QuickStackCard({ project }: QuickStackCardProps) {
  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={stackRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={stackInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={getOptimizedTransition({ duration: 0.2 })}
      className="space-y-3"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-300/90">
        Tech stack
      </p>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={staggerContainerFast}
        initial="hidden"
        animate={stackInView ? "visible" : "hidden"}
      >
        {project.stack.map((tech) => (
          <motion.span
            key={tech}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: getOptimizedTransition({ duration: 0.15 })
              }
            }}
            className="inline-flex items-center border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-stone-300/90 min-h-[32px]"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}

