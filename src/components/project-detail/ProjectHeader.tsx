// Header section for project detail page with logo and title

'use client';

import { motion } from "framer-motion";
import { getOptimizedTransition } from "@/lib/animations/transitions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types";

interface ProjectHeaderProps {
  readonly project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 md:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={getOptimizedTransition({ duration: 0.25, delay: 0.1 })}
        className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden border border-zinc-800 bg-zinc-950 flex-shrink-0"
      >
        <Image
          src={project.image}
          alt={`${project.name} logo`}
          fill
          loading="lazy"
          decoding="async"
          sizes="(min-width: 640px) 96px, 80px"
          className="object-contain p-2"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.15 })}
        className="flex-1"
      >
        <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-2">
          {project.name}
        </CardTitle>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={getOptimizedTransition({ duration: 0.25, delay: 0.2 })}
          className="h-px bg-stone-800"
        />
      </motion.div>
    </CardHeader>
  );
}

