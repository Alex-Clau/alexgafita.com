'use client';

import {motion, useInView} from 'framer-motion';
import {Button} from "@/components/ui/button";
import {getOptimizedTransition} from "@/lib/motionUtils";
import {Card} from "@/components/ui/card";
import {type Project} from "@/data/portfolio";
import Link from "next/link";
import ProjectCardHeader from "@/components/projectPage/projectCardHeader";
import ProjectCardComponent from "@/components/projectPage/projectCardComponent";

type AnimatedProjectContentProps = {
  project: Project;
};

export function AnimatedProjectContent({project}: AnimatedProjectContentProps) {
  return (
    <>
      <motion.div
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        transition={getOptimizedTransition({duration: 0.2})}
      >
        <Button asChild variant="ghost" className="-ml-2 w-fit text-xs text-muted-foreground">
          <Link href="/" aria-label="Back to home">
            ← Back
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        transition={getOptimizedTransition({duration: 0.2, delay: 0.05})}
      >
        <Card className="border border-amber-900/40 bg-gradient-to-br from-black/50 via-amber-950/10 to-black/50 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(180,83,9,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-stone-950/20 pointer-events-none rounded-lg"/>

          <ProjectCardHeader project={project}/>
          <ProjectCardComponent project={project}/>

        </Card>
      </motion.div>
    </>
  );
}

