// Hero section - clean, sharp, professional

'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { getOptimizedTransition } from "@/lib/animations/transitions";
import { heroContainerVariants, heroItemVariants } from "@/lib/animations/variants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center w-full">
      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        transition={getOptimizedTransition({ duration: 0.6 })}
        className="w-full max-w-6xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {/* Profile Image */}
          <motion.div
            variants={heroItemVariants}
            transition={getOptimizedTransition({ delay: 0.1, duration: 0.4 })}
            className="relative flex-shrink-0"
          >
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56">
              <Image
                src="/profil.jpeg"
                alt="Alex Gafița - Software Developer & Cloud Engineer"
                fill
                priority
                fetchPriority="high"
                decoding="async"
                className="object-cover border border-stone-800"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="w-full md:w-auto md:max-w-2xl space-y-4 sm:space-y-6 text-center md:text-left">
            <motion.div variants={heroItemVariants} className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Gafița Claudiu-Alexandru
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-stone-300/90">
                  <span>Software Developer</span>
                  <span className="text-stone-600">·</span>
                  <span>Cloud Engineer</span>
                  <span className="text-stone-600">·</span>
                  <span>Computer Science Student</span>
              </div>
            </motion.div>

            <motion.div variants={heroItemVariants} className="pt-2 sm:pt-4">
              <p className="text-stone-300/90 text-sm sm:text-base md:text-lg leading-relaxed">
                Building scalable backend systems, cloud infrastructure, and APIs. 
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start pt-4 sm:pt-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-stone-200 font-medium px-6 py-5 sm:px-8 sm:py-6 border-0 text-sm sm:text-base"
                aria-label="Navigate to projects section"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border border-stone-700 text-stone-200/85 hover:bg-stone-900 hover:text-white hover:border-stone-600 font-medium px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base"
                aria-label="Navigate to contact section"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

