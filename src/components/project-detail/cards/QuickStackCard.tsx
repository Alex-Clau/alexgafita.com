// Displays quick stack summary and repository link

'use client';

import { getOptimizedTransition } from "@/lib/animations/transitions";
import { staggerContainerFast } from "@/lib/animations/variants";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { useRef } from "react";

interface QuickStackCardProps {
  readonly project: Project;
}

export function QuickStackCard({ project }: QuickStackCardProps) {
  const linksRef = useRef(null);
  const linksInView = useInView(linksRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={linksRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={linksInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={getOptimizedTransition({ duration: 0.2 })}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={linksInView ? { opacity: 1 } : { opacity: 0 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.05 })}
        className="space-y-2"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400/80">
          Quick Stack Summary
        </p>
        <motion.div
          className="flex flex-wrap gap-2"
          variants={staggerContainerFast}
          initial="hidden"
          animate={linksInView ? "visible" : "hidden"}
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
              className="inline-flex items-center rounded-full border border-blue-800/50 bg-indigo-950/40 px-3 py-1 text-xs text-blue-200/90 backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={linksInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.1 })}
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 font-semibold shadow-lg shadow-blue-900/50 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/60"
        >
          <a href={project.href} target="_blank" rel="noreferrer">
            View repository →
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}

