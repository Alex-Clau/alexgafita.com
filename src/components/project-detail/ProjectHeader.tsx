// Hero section for project detail: image (no box) + title + CTA

'use client';

import { motion } from "framer-motion";
import { getOptimizedTransition } from "@/lib/animations/transitions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectHeaderProps {
  readonly project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.25, delay: 0.05 })}
        className="relative h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 overflow-hidden rounded-2xl"
      >
        <Image
          src={project.image}
          alt={`${project.name}`}
          fill
          loading="eager"
          decoding="async"
          sizes="(min-width: 640px) 128px, 96px"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.1 })}
        className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {project.name}
          </h1>
          <div className="h-px w-12 bg-stone-600" />
        </div>
        <Button
          asChild
          size="lg"
          className="min-h-[44px] w-full sm:w-auto bg-white text-black hover:bg-stone-200 font-medium border-0 shrink-0"
        >
          <a href={project.href} target="_blank" rel="noreferrer" aria-label="View repository">
            View repository →
          </a>
        </Button>
      </motion.div>
    </header>
  );
}

