import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind class merger function
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
