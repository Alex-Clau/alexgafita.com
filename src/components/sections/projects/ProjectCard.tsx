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
        <Card className="overflow-hidden border border-blue-900/40 bg-black/40 backdrop-blur-sm rounded-xl hover:-translate-y-2 hover:border-blue-600/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(59,130,246,0.3)] h-full flex flex-col p-0">
          {/* Image Section */}
          <div className="relative aspect-2/1 w-full overflow-hidden bg-gradient-to-br from-indigo-950/20 to-blue-950/20 rounded-t-xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
            <Image
              src={project.image}
              alt={`${project.name} - Project preview`}
              fill
              loading="lazy"
              decoding="async"
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 relative z-10"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <CardTitle className="text-lg sm:text-xl font-bold text-blue-50 mb-2 group-hover:text-blue-100 transition-colors">
              {project.name}
            </CardTitle>
            <p className="text-sm text-stone-400 leading-relaxed line-clamp-2 mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-stone-800/40">
              <span className="text-xs text-blue-400/70 font-medium">View details →</span>
              <div className="flex gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full border border-blue-700/50 bg-indigo-950/50 text-blue-200 font-medium"
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

