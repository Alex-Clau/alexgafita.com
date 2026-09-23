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
  const imageClassName =
    project.imageFit === 'cover' ? 'object-cover object-center' : 'object-contain p-6 sm:p-8';

  return (
    <header className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.25, delay: 0.05 })}
        className="relative aspect-[2/1] w-full overflow-hidden bg-zinc-950"
      >
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          priority
          decoding="async"
          sizes="(min-width: 896px) 896px, 100vw"
          className={imageClassName}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.1 })}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
            {project.name}
          </h1>
          <div className="h-px w-12 bg-stone-600" />
        </div>
        {project.href ? (
          <Button
            asChild
            size="lg"
            className="min-h-[44px] w-full sm:w-auto bg-white text-black hover:bg-stone-200 font-medium border-0 shrink-0"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={project.linkLabel ?? 'View repository'}
            >
              {project.linkLabel ?? 'View repository'} →
            </a>
          </Button>
        ) : null}
      </motion.div>
    </header>
  );
}

