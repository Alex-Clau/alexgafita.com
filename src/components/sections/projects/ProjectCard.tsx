// Displays a single project card with image and title

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
    <motion.div variants={fadeScaleDownVariants}>
      <Link href={`/projects/${project.slug}`} className="block group">
        <Card className="overflow-hidden border border-zinc-800 bg-zinc-950 h-full flex flex-col p-0 gap-0 rounded-none hover:border-zinc-700 transition-colors shadow-none">
          {/* Image Section */}
          <div className="relative aspect-2/1 w-full overflow-hidden bg-zinc-950">
            <Image
              src={project.image}
              alt={`${project.name} - Project preview`}
              fill
              loading="lazy"
              decoding="async"
              className={
                project.imageFit === 'cover'
                  ? 'object-cover object-center'
                  : 'object-contain p-3 sm:p-4'
              }
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-6 md:p-8 flex flex-col flex-1 border-t border-zinc-800">
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              {project.logo ? (
                <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 overflow-hidden border border-zinc-800 bg-black">
                  <Image
                    src={project.logo}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
              ) : null}
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                {project.name}
              </CardTitle>
            </div>
            <p className="text-sm sm:text-base text-stone-300/90 leading-relaxed line-clamp-2 mb-5 sm:mb-6 flex-1">
              {project.description}
            </p>
            <div className="flex items-center justify-start pt-4 border-t border-zinc-800 mt-auto">
              <div className="flex gap-1.5 sm:gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 border border-zinc-800 bg-zinc-900 text-stone-300/90 font-medium hover:border-zinc-700 hover:bg-zinc-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

