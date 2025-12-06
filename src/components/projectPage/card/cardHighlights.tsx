import {getOptimizedTransition, prefersReducedMotion} from "@/lib/motionUtils";
import {motion, useInView} from "framer-motion";
import type {Project} from "@/data/portfolio";
import {useRef} from "react";

type AnimatedProjectContentProps = {
  project: Project;
};

// What I Worked On -> Section of the Component
export default function CardHighlights({project} : AnimatedProjectContentProps){
  const highlightsRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, {once: true, amount: 0.2});

  return <motion.section
    ref={highlightsRef}
    initial={{opacity: 0}}
    animate={highlightsInView ? {opacity: 1} : {opacity: 0}}
    transition={getOptimizedTransition({duration: 0.2})}
    className="space-y-4"
  >
    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/95">
      What I worked on
    </h3>
    <motion.ul
      className="space-y-3"
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
      animate={highlightsInView ? "visible" : "hidden"}
    >
      {project.highlights.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: {opacity: 0, scale: 0.9},
            visible: {
              opacity: 1,
              scale: 1,
              transition: getOptimizedTransition({duration: 0.2})
            }
          }}
          className="flex gap-3 group"
        >
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 group-hover:bg-amber-300 transition-colors flex-shrink-0"/>

          <span className="text-base leading-relaxed text-stone-200">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.section>
}