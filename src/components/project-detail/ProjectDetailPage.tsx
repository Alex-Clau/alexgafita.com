// Main component for displaying project detail page

'use client';

import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { getOptimizedTransition } from "@/lib/animations/transitions";
import type { Project } from "@/types";
import Link from "next/link";
import { useRef } from "react";
import { ProjectHeader } from "./ProjectHeader";
import { HighlightsCard } from "./cards/HighlightsCard";
import { QuickStackCard } from "./cards/QuickStackCard";

interface ProjectDetailPageProps {
  readonly project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const descriptionRef = useRef(null);
  const descriptionInView = useInView(descriptionRef, { once: true, amount: 0.2 });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getOptimizedTransition({ duration: 0.2 })}
        className="mb-2 sm:mb-4"
      >
        <Link 
          href="/" 
          aria-label="Back to home"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-stone-500 hover:text-stone-300 transition-colors uppercase tracking-wider"
        >
          <span className="text-stone-600">←</span>
          <span>Back</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.05 })}
      >
        <Card className="border border-zinc-800 bg-zinc-950 rounded-none shadow-none gap-0">  

          <ProjectHeader project={project} />

          <CardContent className="relative space-y-8 p-6 sm:p-8 md:p-10 pt-0 text-sm text-stone-300">
            {/* Description Section - Inlined */}
            <motion.section
              ref={descriptionRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={descriptionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={getOptimizedTransition({ duration: 0.2 })}
              className="space-y-3"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-stone-200">{project.description}</p>
            </motion.section>

            <div className="h-px bg-stone-800" />

            <QuickStackCard project={project} />

            <div className="h-px bg-stone-800" />

            <HighlightsCard project={project} />

          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
