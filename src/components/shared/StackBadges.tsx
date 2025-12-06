/**
 * StackBadges component
 * Displays a collection of technology badges with icons
 */

'use client';

import { DEVICON_COMPONENTS } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface StackBadgesProps {
  readonly items: readonly string[];
  readonly className?: string;
}

export function StackBadges({ items, className = "" }: StackBadgesProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item) => {
        const IconComponent = DEVICON_COMPONENTS[item];
        const displayName = item.includes("(") ? item.split("(")[0].trim() : item;

        if (IconComponent) {
          return (
            <div
              key={item}
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg border border-blue-900/60 bg-indigo-950/30 backdrop-blur-sm transition-all duration-200 hover:border-blue-800/80 hover:bg-indigo-950/40 hover:shadow-lg hover:shadow-blue-900/40 hover:shadow-blue-500/20 hover:scale-105"
              title={item}
              aria-label={item}
            >
              <IconComponent size="2rem" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="whitespace-nowrap rounded bg-indigo-950/95 px-2 py-1 text-xs text-blue-200 border border-blue-800/60 backdrop-blur-sm">
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

