'use client';

import { DEVICON_CLASS } from "./sections/skills";

type StackBadgesProps = {
  items: string[];
  className?: string;
};

export function StackBadges({ items, className = "" }: StackBadgesProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {items.map((item) => {
        const iconClass = DEVICON_CLASS[item];
        const displayName = item.includes("(") ? item.split("(")[0].trim() : item;
        
        if (iconClass) {
          return (
            <div
              key={item}
              className="group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg border border-amber-900/60 bg-amber-950/30 backdrop-blur-sm transition-all duration-200 hover:border-amber-800/80 hover:bg-amber-950/40 hover:shadow-lg hover:shadow-amber-900/40 hover:shadow-amber-500/20 hover:scale-105"
              title={item}
              aria-label={item}
            >
              <i 
                className={iconClass} 
                style={{ 
                  fontSize: '2rem',
                  lineHeight: '1',
                  display: 'inline-block'
                }} 
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="whitespace-nowrap rounded bg-amber-950/95 px-2 py-1 text-xs text-amber-200 border border-amber-800/60 backdrop-blur-sm">
                  {displayName}
                </div>
              </div>
            </div>
          );
        }
        
        // Fallback for items without icons
        const abbreviation = getAbbreviation(item);
        return (
          <div
            key={item}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg border border-amber-900/60 bg-amber-950/30 backdrop-blur-sm transition-all duration-200 hover:border-amber-800/80 hover:bg-amber-950/40 hover:shadow-lg hover:shadow-amber-900/40 hover:scale-105"
            title={item}
            aria-label={item}
          >
            <span className="text-xs sm:text-sm font-bold text-amber-300/90">
              {abbreviation}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function getAbbreviation(label: string): string {
  if (label.includes("(")) {
    return label.split("(")[0].trim();
  }
  if (label.includes("/")) {
    return label
      .split("/")
      .map((word) => word.charAt(0))
      .join("");
  }
  return label
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 3);
}

