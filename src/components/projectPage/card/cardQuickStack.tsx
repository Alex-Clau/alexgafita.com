import {getOptimizedTransition, prefersReducedMotion} from "@/lib/motionUtils";
import {motion, useInView} from "framer-motion";
import {Button} from "@/components/ui/button";
import {useRef} from "react";
import type {Project} from "@/data/portfolio";

type AnimatedProjectContentProps = {
  project: Project;
};

// Quick Stack Summary-> Section of the Component
export default function CardQuickStack({project} : AnimatedProjectContentProps){
  const linksRef = useRef(null);
  const linksInView = useInView(linksRef, {once: true, amount: 0.2});

  return <motion.section
    ref={linksRef}
    initial={{opacity: 0, scale: 0.95}}
    animate={linksInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.95}}
    transition={getOptimizedTransition({duration: 0.2})}
    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2"
  >
    <motion.div
      initial={{opacity: 0}}
      animate={linksInView ? {opacity: 1} : {opacity: 0}}
      transition={getOptimizedTransition({duration: 0.2, delay: 0.05})}
      className="space-y-2"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
        Quick Stack Summary
      </p>
      <motion.div
        className="flex flex-wrap gap-2"
        variants={{
          hidden: {opacity: 0},
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: prefersReducedMotion() ? 0 : 0.02,
              delayChildren: prefersReducedMotion() ? 0 : 0.05
            }
          }
        }}
        initial="hidden"
        animate={linksInView ? "visible" : "hidden"}
      >
        {project.stack.map((tech) => (
          <motion.span
            key={tech}
            variants={{
              hidden: {opacity: 0, scale: 0.8},
              visible: {
                opacity: 1,
                scale: 1,
                transition: getOptimizedTransition({duration: 0.15})
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
      initial={{opacity: 0, scale: 0.9}}
      animate={linksInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
      transition={getOptimizedTransition({duration: 0.2, delay: 0.1})}
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
}