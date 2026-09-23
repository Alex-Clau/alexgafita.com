// Project card: preview, title, description, stack. Same structure for every project.

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle } from '@/components/ui/card';
import { fadeScaleDownVariants } from '@/lib/animations/variants';
import type { Project } from '@/types';

interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={fadeScaleDownVariants} className="h-full">
      <Link href={`/projects/${project.slug}`} className="block h-full group">
        <Card className="h-full overflow-hidden border border-border bg-card p-0 gap-0 rounded-none shadow-none hover:border-primary transition-colors">
          <div
            className={
              project.imageFit === 'cover'
                ? 'relative aspect-[1024/562] w-full overflow-hidden bg-background'
                : 'relative aspect-[2/1] w-full overflow-hidden bg-background'
            }
          >
            <Image
              src={project.image}
              alt={`${project.name} - Project preview`}
              fill
              loading="lazy"
              decoding="async"
              className={
                project.imageFit === 'cover'
                  ? 'object-contain object-center'
                  : 'object-contain p-3 sm:p-4'
              }
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
            <CardTitle className="text-lg sm:text-xl font-semibold leading-snug text-heading line-clamp-2">
              {project.name}
            </CardTitle>
            <p className="text-sm leading-relaxed text-foreground line-clamp-3 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 border border-border bg-background text-foreground font-medium group-hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
