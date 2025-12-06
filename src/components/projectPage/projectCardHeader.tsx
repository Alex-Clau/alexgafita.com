import {motion} from "framer-motion";
import {getOptimizedTransition} from "@/lib/motionUtils";
import Image from "next/image";
import {CardHeader, CardTitle} from "@/components/ui/card";
import {type Project} from "@/data/portfolio";

type AnimatedProjectContentProps = {
  project: Project;
};

export default function ProjectCardHeader({project} : AnimatedProjectContentProps) {
  return <>
    <CardHeader className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between p-8 sm:p-10">
      <motion.div
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={getOptimizedTransition({duration: 0.2, delay: 0.1})}
        className="flex items-start gap-6"
      >
        <motion.div
          initial={{opacity: 0, scale: 0.5, rotate: -10}}
          animate={{opacity: 1, scale: 1, rotate: 0}}
          transition={getOptimizedTransition({duration: 0.25, delay: 0.15})}
          className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-950/50 to-amber-900/30 border-2 border-amber-900/50 shadow-lg shadow-amber-900/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent"/>
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
            initial={{width: 0, opacity: 0}}
            animate={{width: 64, opacity: 1}}
            transition={getOptimizedTransition({duration: 0.25, delay: 0.2})}
            className="h-px bg-gradient-to-r from-amber-600/60 to-transparent mb-4"
          />
        </div>
      </motion.div>
    </CardHeader></>
}