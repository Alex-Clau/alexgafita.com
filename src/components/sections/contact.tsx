/**
 * ContactSection component
 * Contact section with call-to-action buttons
 */

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { scrollVariantsProps } from '@/lib/animations/transitions';
import { fadeScaleUpFromBottomVariants } from '@/lib/animations/variants';

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={fadeScaleUpFromBottomVariants}
      {...scrollVariantsProps}
      className="mt-auto p-8 sm:p-10 rounded-2xl backdrop-blur-xl border border-blue-900/40 bg-gradient-to-r from-indigo-950/40 via-stone-950/30 to-indigo-950/40 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-blue-800/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-blue-100">
            Let&apos;s build reliable systems
          </h2>
          <p className="max-w-xl text-sm sm:text-base text-stone-400 leading-relaxed">
            I&apos;m open to backend-heavy roles and projects focused on APIs,
            data workflows, and cloud infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 font-semibold shadow-lg shadow-blue-900/50 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/60"
          >
            <a href="https://github.com/Alex-Clau?tab=repositories">GitHub</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-blue-700/60 bg-blue-800/40 text-white hover:text-blue-400 hover:border-blue-600 hover:bg-blue-800/50 font-semibold backdrop-blur-sm transition-all duration-200 hover:scale-105"
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

