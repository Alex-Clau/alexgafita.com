// Reusable icon component for displaying skills with animations

'use client';

import { motion } from 'framer-motion';
import { fadeScaleCenterVariants } from '@/lib/animations/variants';
import { DEVICON_COMPONENTS } from '@/lib/icons';

interface SkillIconProps {
  readonly label: string;
}

export function SkillIcon({ label }: SkillIconProps) {
  const IconComponent = DEVICON_COMPONENTS[label];
  const displayName = label.includes("(") ? label.split("(")[0].trim() : label;

  if (!IconComponent) {
    console.error(`No Devicon icon found for: ${label}`);
    return null;
  }

  return (
    <div className="relative group/icon">
      <motion.div
        variants={fadeScaleCenterVariants}
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center border border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900 transition-colors"
        title={label}
        aria-label={label}
      >
        <IconComponent
          size="2rem"
          className={`relative z-10 w-[2.25rem] h-[2.25rem] sm:w-[2.5rem] sm:h-[2.5rem] ${label === 'Express.js' || label === 'Expo' ? 'brightness-0 invert' : ''}`}
        />
      </motion.div>
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none z-50">
        <div className="whitespace-nowrap bg-zinc-950 px-2 py-1 text-xs text-stone-300 border border-zinc-800">
          {displayName}
        </div>
      </div>
    </div>
  );
}

