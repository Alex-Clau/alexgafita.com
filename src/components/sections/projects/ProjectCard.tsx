/**
 * ProjectCard component
 * Displays a single project card with image and title
 */

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
      <Link href={`/projects/${project.slug}`} className="block">
        <Card className="group overflow-hidden border border-blue-900/40 bg-black/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-600/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(59,130,246,0.3)]">
          <div className="relative aspect-2/1 w-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-transparent to-indigo-950/5 pointer-events-none" />
            <Image
              src={project.image}
              alt={`${project.name} - Project preview`}
              fill
              loading="lazy"
              decoding="async"
              className="object-contain transition-transform scale-90 duration-700 group-hover:scale-100 relative z-10"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 pb-4 z-20">
            <CardTitle className="text-base sm:text-lg font-bold text-blue-50 drop-shadow-lg">
              {project.name}
            </CardTitle>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

