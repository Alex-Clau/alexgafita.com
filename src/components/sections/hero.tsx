// Main hero section with profile, introduction, and call-to-action

'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { getOptimizedTransition } from "@/lib/animations/transitions";
import { heroContainerVariants, heroItemVariants } from "@/lib/animations/variants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 py-8 sm:py-12 md:py-16">
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        transition={getOptimizedTransition({ duration: 0.6 })}
        className="w-full max-w-3xl relative z-10"
      >
        <Card className="group border border-blue-900/30 bg-black/50 backdrop-blur-2xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(59,130,246,0.15)] overflow-hidden hover:border-blue-800/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_120px_rgba(59,130,246,0.25)]">
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/15 via-transparent to-stone-950/25 pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-120" />
          
          {/* Subtle animated border glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-600/0 via-blue-500/20 to-indigo-600/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

          <CardHeader className="relative p-8 sm:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
              {/* Profile Image */}
              <motion.div
                variants={heroItemVariants}
                custom={{ initialRotate: -5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={getOptimizedTransition({ delay: 0.1, duration: 0.4 })}
                className="relative flex-shrink-0"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                  {/* Animated glow ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-600/40 via-indigo-600/30 to-purple-600/40 blur-xl opacity-60 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-indigo-900/20 blur-2xl opacity-50" />
                  <Image
                    src="/profil.jpeg"
                    alt="Alex Gafița - Software Engineer and Computer Science Student"
                    fill
                    priority
                    fetchPriority="high"
                    decoding="async"
                    className="relative rounded-full object-cover border-2 border-blue-900/50 shadow-2xl shadow-blue-900/30 bg-indigo-950/20 group-hover:border-blue-700/60 group-hover:shadow-blue-800/40"
                  />
                </div>
              </motion.div>

              {/* Text Content + Skills */}
              <div className="flex-1 text-center md:text-left">
                <motion.div variants={heroItemVariants}>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-50 mb-3">
                    Gafița Claudiu-Alexandru
                  </h1>
                  <CardDescription className="text-sm sm:text-base text-blue-400/95 font-medium mb-5 flex items-center gap-2 flex-wrap justify-center md:justify-start">
                    <span>Software Engineer</span>
                    <span className="text-blue-600/40">·</span>
                    <span>Computer Science Student</span>
                  </CardDescription>
                </motion.div>

                {/* Skills Badges */}
                <motion.div
                  variants={heroItemVariants}
                  className="flex flex-wrap justify-center md:justify-start gap-2.5"
                >
                  <span className="rounded-full border border-blue-800/60 bg-indigo-950/50 px-3.5 py-1.5 text-xs sm:text-sm text-blue-200 font-medium backdrop-blur-sm hover:border-blue-700/80 hover:bg-indigo-950/70 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30">
                    Next.js / Express.js / TypeScript
                  </span>
                  <span className="rounded-full border border-blue-800/60 bg-indigo-950/50 px-3.5 py-1.5 text-xs sm:text-sm text-blue-200 font-medium backdrop-blur-sm hover:border-blue-700/80 hover:bg-indigo-950/70 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30">
                    AWS / Firebase / MongoDB
                  </span>
                </motion.div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative p-8 sm:p-10 pt-6 border-t border-stone-800/60 bg-gradient-to-b from-transparent via-stone-950/5 to-transparent">
            {/* Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-end"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 font-semibold shadow-lg shadow-blue-900/50 px-8 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/60"
                aria-label="Navigate to projects section"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-700/60 bg-blue-800/40 text-white hover:text-blue-300 hover:border-blue-500 hover:bg-blue-800/60 font-semibold px-8 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30"
                aria-label="Navigate to contact section"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

