import {getOptimizedTransition, prefersReducedMotion} from "@/lib/motionUtils";
import {motion, useInView} from "framer-motion";
import {StackBadges} from "@/components/stackBadges";
import type {Project} from "@/data/portfolio";
import {useRef} from "react";

type AnimatedProjectContentProps = {
  project: Project;
};

// Tech Stack -> Section of the Component
export default function CardTechStack({project} : AnimatedProjectContentProps){
  const stackRef = useRef(null);
  const stackInView = useInView(stackRef, {once: true, amount: 0.2});

  return <motion.section
    ref={stackRef}
    initial={{opacity: 0}}
    animate={stackInView ? {opacity: 1} : {opacity: 0}}
    transition={getOptimizedTransition({duration: 0.2})}
    className="space-y-6"
  >
    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/95">
      Tech Stack
    </h3>
    <motion.div
      className="grid gap-6 md:grid-cols-3"
      variants={{
        hidden: {opacity: 0},
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: prefersReducedMotion() ? 0 : 0.03,
            delayChildren: prefersReducedMotion() ? 0 : 0.05
          }
        }
      }}
      initial="hidden"
      animate={stackInView ? "visible" : "hidden"}
    >
      <motion.div
        variants={{
          hidden: {opacity: 0, scale: 0.9},
          visible: {
            opacity: 1,
            scale: 1,
            transition: getOptimizedTransition({duration: 0.2})
          }
        }}
        className="space-y-3"
      >
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
          Languages
        </h4>
        <StackBadges items={project.languages}/>
      </motion.div>
      <motion.div
        variants={{
          hidden: {opacity: 0, scale: 0.9},
          visible: {
            opacity: 1,
            scale: 1,
            transition: getOptimizedTransition({duration: 0.2})
          }
        }}
        className="space-y-3"
      >
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
          Frameworks
        </h4>
        <StackBadges items={project.frameworks}/>
      </motion.div>
      <motion.div
        variants={{
          hidden: {opacity: 0, scale: 0.9},
          visible: {
            opacity: 1,
            scale: 1,
            transition: getOptimizedTransition({duration: 0.2})
          }
        }}
        className="space-y-3"
      >
        <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-400/80">
          Infrastructure
        </h4>
        <StackBadges items={project.infrastructure}/>
      </motion.div>
    </motion.div>
  </motion.section>
}