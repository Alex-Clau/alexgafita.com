'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { getOptimizedTransition, prefersReducedMotion } from "@/lib/motion-utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Project } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { StackBadges } from "@/components/stack-badges";

type AnimatedProjectContentProps = {
  project: Project;
};

export function AnimatedProjectContent({ project }: AnimatedProjectContentProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.2 })}
      >
        <Button
          asChild
          variant="ghost"
          className="-ml-2 w-fit text-xs text-muted-foreground"
        >
          <Link href="/" aria-label="Back to home">
            ← Back
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={getOptimizedTransition({ duration: 0.2, delay: 0.05 })}
      >
        <Card className="border border-amber-900/40 bg-gradient-to-br from-black/50 via-amber-950/10 to-black/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(180,83,9,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-stone-950/20 pointer-events-none rounded-lg" />
          
          <CardHeader className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between p-8 sm:p-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={getOptimizedTransition({ duration: 0.2, delay: 0.1 })}
              className="flex items-start gap-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={getOptimizedTransition({ duration: 0.25, delay: 0.15 })}
                className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/50 to-amber-900/30 border-2 border-amber-900/50 shadow-lg shadow-amber-900/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent" />
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
              <div className="flex-1">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-amber-50 mb-2">
                  {project.name}
                </CardTitle>
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 64, opacity: 1 }}
                  transition={getOptimizedTransition({ duration: 0.25, delay: 0.2 })}
                  className="h-px bg-gradient-to-r from-amber-600/60 to-transparent mb-4"
                />
              </div>
            </motion.div>
          </CardHeader>
          
          <CardContent className="relative space-y-8 p-8 sm:p-10 pt-0 text-sm text-stone-300">
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={getOptimizedTransition({ duration: 0.2 })}
              className="space-y-3"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/95">
                Overview
              </h2>
              <p className="text-base leading-relaxed text-stone-200">{project.description}</p>
            </motion.section>

            <div className="h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={getOptimizedTransition({ duration: 0.2 })}
              className="space-y-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/95">
                Tech Stack
              </h3>
              <motion.div
                className="grid gap-6 md:grid-cols-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: prefersReducedMotion() ? 0 : 0.03,
                      delayChildren: prefersReducedMotion() ? 0 : 0.05
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: getOptimizedTransition({ duration: 0.2 })
                    }
                  }}
                  className="space-y-3"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
                    Languages
                  </h4>
                  <StackBadges items={project.languages} />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: getOptimizedTransition({ duration: 0.2 })
                    }
                  }}
                  className="space-y-3"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
                    Frameworks
                  </h4>
                  <StackBadges items={project.frameworks} />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: getOptimizedTransition({ duration: 0.2 })
                    }
                  }}
                  className="space-y-3"
                >
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
                    Infrastructure
                  </h4>
                  <StackBadges items={project.infrastructure} />
                </motion.div>
              </motion.div>
            </motion.section>

            <div className="h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={getOptimizedTransition({ duration: 0.2 })}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/95">
                What I worked on
              </h3>
              <motion.ul
                className="space-y-3"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: prefersReducedMotion() ? 0 : 0.03,
                      delayChildren: prefersReducedMotion() ? 0 : 0.05
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {project.highlights.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: getOptimizedTransition({ duration: 0.2 })
                      }
                    }}
                    className="flex gap-3 group"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 group-hover:bg-amber-300 transition-colors flex-shrink-0" />
                    <span className="text-base leading-relaxed text-stone-200">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            <div className="h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />

            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={getOptimizedTransition({ duration: 0.2 })}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={getOptimizedTransition({ duration: 0.2, delay: 0.05 })}
                className="space-y-2"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
                  Quick Stack Summary
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: prefersReducedMotion() ? 0 : 0.02,
                        delayChildren: prefersReducedMotion() ? 0 : 0.05
                      }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {project.stack.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: getOptimizedTransition({ duration: 0.15 })
                        }
                      }}
                      className="inline-flex items-center rounded-full border border-amber-800/50 bg-amber-950/40 px-3 py-1 text-xs text-amber-200/90 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={getOptimizedTransition({ duration: 0.2, delay: 0.1 })}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-500 hover:to-amber-600 font-semibold shadow-lg shadow-amber-900/50 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-amber-900/60"
                >
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View repository →
                  </a>
                </Button>
              </motion.div>
            </motion.section>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

