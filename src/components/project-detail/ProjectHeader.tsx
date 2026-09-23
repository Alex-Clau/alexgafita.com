// Hero section for project detail: preview, brand mark, title, CTA

'use client';

import { motion } from 'framer-motion';
import { getOptimizedTransition } from '@/lib/animations/transitions';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';

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
        className="relative aspect-[2/1] w-full overflow-hidden bg-surface border border-border"
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
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {project.logo ? (
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden border border-border bg-background">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
          ) : null}
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-heading mb-1 truncate">
              {project.name}
            </h1>
            <div className="h-px w-12 bg-primary" />
          </div>
        </div>
        {project.href ? (
          <Button
            asChild
            size="lg"
            className="min-h-[44px] w-full sm:w-auto font-medium shrink-0"
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
