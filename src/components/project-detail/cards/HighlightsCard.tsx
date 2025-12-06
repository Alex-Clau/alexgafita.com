/**
 * HighlightsCard component
 * Displays project highlights/features
 */

'use client';

import { getOptimizedTransition } from "@/lib/animations/transitions";
import { staggerContainer } from "@/lib/animations/variants";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/types";
import { useRef } from "react";

interface HighlightsCardProps {
  readonly project: Project;
}

export function HighlightsCard({ project }: HighlightsCardProps) {
  const highlightsRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={highlightsRef}
      initial={{ opacity: 0 }}
      animate={highlightsInView ? { opacity: 1 } : { opacity: 0 }}
      transition={getOptimizedTransition({ duration: 0.2 })}
      className="space-y-4"
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300/95">
        What I worked on
      </h3>
      <motion.ul
        className="space-y-3"
        variants={staggerContainer}
        initial="hidden"
        animate={highlightsInView ? "visible" : "hidden"}
      >
        {project.highlights.map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: getOptimizedTransition({ duration: 0.2 })
              }
            }}
            className="flex gap-3 group"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 group-hover:bg-blue-300 transition-colors flex-shrink-0" />
            <span className="text-base leading-relaxed text-stone-200">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

