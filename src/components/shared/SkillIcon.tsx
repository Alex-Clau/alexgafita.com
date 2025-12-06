/**
 * SkillIcon component
 * Reusable icon component for displaying skills with animations
 * Handles both icon and fallback abbreviation display
 */

'use client';

import { motion } from 'framer-motion';
import { fadeScaleCenterVariants } from '@/lib/animations/variants';
import { DEVICON_COMPONENTS } from '@/lib/icons';
import { getAbbreviation } from '@/lib/utils';

interface SkillIconProps {
  readonly label: string;
}

export function SkillIcon({ label }: SkillIconProps) {
  const IconComponent = DEVICON_COMPONENTS[label];
  const displayName = label.includes("(") ? label.split("(")[0].trim() : label;

  if (!IconComponent) {
    console.warn(`No Devicon icon found for: ${label}`);
    const abbreviation = getAbbreviation(label);
    
    return (
      <div className="relative group/icon">
        <motion.div
          variants={fadeScaleCenterVariants}
          whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
          className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border border-blue-900/60 bg-gradient-to-br from-indigo-950/30 to-blue-900/20 backdrop-blur-sm transition-all duration-200 hover:border-blue-700/80 hover:bg-indigo-950/50 hover:shadow-xl hover:shadow-blue-900/50 hover:shadow-blue-500/30"
          title={label}
          aria-label={label}
        >
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/0 to-indigo-800/0 group-hover/icon:from-blue-600/20 group-hover/icon:to-indigo-800/10 transition-all duration-200" />
          <span className="relative text-lg sm:text-xl font-bold text-blue-300/90">
            {abbreviation}
          </span>
        </motion.div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none z-50">
          <div className="whitespace-nowrap rounded bg-indigo-950/95 px-2 py-1 text-xs text-blue-200 border border-blue-800/60 backdrop-blur-sm shadow-lg">
            {displayName}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group/icon">
      <motion.div
        variants={fadeScaleCenterVariants}
        whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
        className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border border-blue-900/60 bg-gradient-to-br from-indigo-950/30 to-blue-900/20 backdrop-blur-sm transition-all duration-200 hover:border-blue-700/80 hover:bg-indigo-950/50 hover:shadow-xl hover:shadow-blue-900/50 hover:shadow-blue-500/30"
        title={label}
        aria-label={label}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/0 to-indigo-800/0 group-hover/icon:from-blue-600/20 group-hover/icon:to-indigo-800/10 transition-all duration-200" />
        <IconComponent
          className="relative z-10"
          size="2.75rem"
        />
      </motion.div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none z-50">
        <div className="whitespace-nowrap rounded bg-indigo-950/95 px-2 py-1 text-xs text-blue-200 border border-blue-800/60 backdrop-blur-sm shadow-lg">
          {displayName}
        </div>
      </div>
    </div>
  );
}

