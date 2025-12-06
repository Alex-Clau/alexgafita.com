import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combines multiple classNames
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
