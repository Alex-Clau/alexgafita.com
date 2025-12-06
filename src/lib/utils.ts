import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combines multiple classNames with Tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
