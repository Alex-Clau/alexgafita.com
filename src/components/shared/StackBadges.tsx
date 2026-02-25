// Displays a collection of technology badges with icons

'use client';

import { DEVICON_COMPONENTS } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface StackBadgesProps {
  readonly items: readonly string[];
  readonly className?: string;
}

export function StackBadges({ items, className = "" }: StackBadgesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 sm:gap-3", className)}>
      {items.map((item) => {
        const IconComponent = DEVICON_COMPONENTS[item];
        const displayName = item.includes("(") ? item.split("(")[0].trim() : item;

        if (IconComponent) {
          return (
            <div
              key={item}
              className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center border border-stone-800 bg-black hover:border-stone-700 hover:bg-stone-900 transition-colors"
              title={item}
              aria-label={item}
            >
              <IconComponent 
                size="2rem"
                className={`w-[2.25rem] h-[2.25rem] sm:w-[2.5rem] sm:h-[2.5rem] ${item === 'Express.js' || item === 'Expo' ? 'brightness-0 invert' : ''}`}
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                <div className="whitespace-nowrap bg-zinc-950 px-2 py-1 text-xs text-stone-200/85 border border-zinc-800">
                  {displayName}
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

