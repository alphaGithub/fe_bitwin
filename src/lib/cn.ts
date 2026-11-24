import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about our custom font-size tokens so `text-body` and `text-primary-600`
// aren't treated as conflicting classes.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "h4", "body-lg", "body", "body-sm", "caption"] }],
    },
  },
});

/** Combines conditional classes (clsx) and resolves conflicting Tailwind utilities (tailwind-merge). */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
