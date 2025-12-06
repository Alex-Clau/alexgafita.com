import {getOptimizedTransition} from "@/lib/motionUtils";
import {motion, useInView} from "framer-motion";
import type {Project} from "@/data/portfolio";
import {useRef} from "react";

type AnimatedProjectContentProps = {
  project: Project;
};

// Overview -> Section of the Component
export default function CardDescription({project}: AnimatedProjectContentProps) {
  const overviewRef = useRef(null);
  const overviewInView = useInView(overviewRef, {once: true, amount: 0.2});

  return <motion.section
    ref={overviewRef}
    initial={{opacity: 0, scale: 0.95}}
    animate={overviewInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.95}}
    transition={getOptimizedTransition({duration: 0.2})}
    className="space-y-3"
  >
    <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/95">
      Overview
    </h2>
    <p className="text-base leading-relaxed text-stone-200">{project.description}</p>
  </motion.section>
}