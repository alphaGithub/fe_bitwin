import { cva } from "class-variance-authority";

export const ratingVariants = cva("inline-flex items-center", {
  variants: {
    size: { sm: "gap-0.5", md: "gap-1", lg: "gap-1" },
  },
  defaultVariants: { size: "md" },
});

export const ratingStarVariants = cva("shrink-0", {
  variants: {
    size: { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-7 w-7" },
  },
  defaultVariants: { size: "md" },
});
