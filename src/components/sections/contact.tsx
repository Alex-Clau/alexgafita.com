'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mt-auto rounded-2xl border border-amber-900/40 bg-gradient-to-r from-amber-950/40 via-stone-950/30 to-amber-950/40 p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] sm:p-10 transition-all duration-300 hover:border-amber-800/50 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100">
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
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:from-amber-500 hover:to-amber-600 font-semibold shadow-lg shadow-amber-900/50 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-amber-900/60"
          >
            <a href="https://github.com/Alex-Clau?tab=repositories">GitHub</a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-amber-700/60 bg-amber-800/40 text-white hover:text-amber-400 hover:border-amber-600 hover:bg-amber-800/50 font-semibold backdrop-blur-sm transition-all duration-200 hover:scale-105"
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


