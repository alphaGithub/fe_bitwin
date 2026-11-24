import { cva } from "class-variance-authority";

export const progressTrackVariants = cva("relative w-full overflow-hidden rounded-full bg-grey-200", {
  variants: {
    size: { sm: "h-1", md: "h-2", lg: "h-3" },
  },
  defaultVariants: { size: "md" },
});

export const progressBarVariants = cva("h-full rounded-full transition-[width] duration-normal ease-out", {
  variants: {
    tone: {
      primary: "bg-primary-600",
      success: "bg-success-600",
      warning: "bg-warning-500",
      error: "bg-error-600",
    },
    indeterminate: {
      true: "absolute inset-y-0 w-1/3 animate-progress-indeterminate",
      false: "",
    },
  },
  defaultVariants: { tone: "primary", indeterminate: false },
});
