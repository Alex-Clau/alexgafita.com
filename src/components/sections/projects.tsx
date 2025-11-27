'use client';

import { motion } from 'framer-motion';
import { getOptimizedTransition, prefersReducedMotion } from "@/lib/motion-utils";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={getOptimizedTransition({ duration: 0.2 })}
        className="space-y-3"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100">
          Selected projects
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-stone-400 leading-relaxed">
          Click a project card to see the full case study, stack, and links.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: prefersReducedMotion() ? 0 : 0.03,
              delayChildren: prefersReducedMotion() ? 0 : 0.03
            }
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: getOptimizedTransition({ duration: 0.3 })
        }
      }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <Card className="group overflow-hidden border border-amber-900/40 bg-black/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-600/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(180,83,9,0.3)]">
          <div className="relative aspect-2/1 w-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-transparent to-amber-950/5 pointer-events-none" />
            <Image
              src={project.image}
              alt={`${project.name} - Project preview`}
              fill
              loading="lazy"
              decoding="async"
              className="object-contain transition-transform scale-90 duration-700 group-hover:scale-100 relative z-10"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-4 z-20">
              <CardTitle className="text-base sm:text-lg font-bold text-amber-50 drop-shadow-lg">
                {project.name}
              </CardTitle>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}


