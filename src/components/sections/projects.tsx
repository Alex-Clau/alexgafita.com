'use client';

import { motion } from 'framer-motion';
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100">
          Selected projects
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-stone-400 leading-relaxed">
          Click a project card to see the full case study, stack, and links.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} project={project} delay={idx * 0.15} />
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
  delay?: number;
};

function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <Card className="group overflow-hidden border border-amber-900/40 bg-black/50 backdrop-blur-sm rounded-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-600/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(180,83,9,0.3)]">
          <div className="relative aspect-2/1 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-transparent via-transparent to-amber-950/20 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 pb-4">
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


