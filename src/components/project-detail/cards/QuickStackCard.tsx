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
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
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
              className="inline-flex items-center border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-stone-400"
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
          className="bg-white text-black hover:bg-stone-200 font-medium border-0"
        >
          <a href={project.href} target="_blank" rel="noreferrer">
            View repository →
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
}

