// Main component for displaying project detail page

'use client';

import { motion, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getOptimizedTransition } from "@/lib/animations/transitions";
import type { Project } from "@/types";
import Link from "next/link";
import { useRef } from "react";
import { ProjectHeader } from "./ProjectHeader";
import { HighlightsCard } from "./cards/HighlightsCard";
import { TechStackCard } from "./cards/TechStackCard";
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.2 })}
      >
        <Button asChild variant="ghost" className="-ml-2 w-fit text-xs text-muted-foreground">
          <Link href="/" aria-label="Back to home">
            ← Back
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.05 })}
      >
        <Card className="border border-blue-900/40 bg-gradient-to-br from-black/50 via-indigo-950/10 to-black/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(59,130,246,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-transparent to-stone-950/20 pointer-events-none rounded-lg" />

          <ProjectHeader project={project} />

          <CardContent className="relative space-y-8 p-8 sm:p-10 pt-0 text-sm text-stone-300">
            {/* Description Section - Inlined */}
            <motion.section
              ref={descriptionRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={descriptionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={getOptimizedTransition({ duration: 0.2 })}
              className="space-y-3"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300/95">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-stone-200">{project.description}</p>
            </motion.section>

            <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

            <TechStackCard project={project} />

            <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

            <HighlightsCard project={project} />

            <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

            <QuickStackCard project={project} />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
