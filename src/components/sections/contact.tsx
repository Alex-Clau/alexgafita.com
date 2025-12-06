// Contact section with call-to-action buttons

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollVariantsProps } from '@/lib/animations/transitions';
import { fadeScaleVariants } from '@/lib/animations/variants';

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={fadeScaleVariants}
      {...scrollVariantsProps}
      className="mt-auto p-8 sm:p-10 rounded-2xl backdrop-blur-xl border border-blue-900/40 bg-gradient-to-br from-indigo-950/50 via-blue-950/30 to-indigo-950/50 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-blue-800/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_0_100px_rgba(59,130,246,0.2)] relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-50">
            Let&apos;s build reliable systems
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-stone-300 leading-relaxed">
            I&apos;m open to backend-heavy roles and projects focused on APIs,
            data workflows, and cloud infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 font-semibold shadow-lg shadow-blue-900/50 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/60"
          >
            <a 
              href="https://github.com/Alex-Clau?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-blue-700/60 bg-blue-800/40 text-white hover:text-blue-300 hover:border-blue-500 hover:bg-blue-800/60 font-semibold backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30"
          >
            <a
              href="https://www.linkedin.com/in/alex-gafita"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

