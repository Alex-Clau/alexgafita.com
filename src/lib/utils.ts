import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple classNames with Tailwind merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get abbreviation from a skill label
 * Extracts initials or abbreviation from skill names
 */
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
