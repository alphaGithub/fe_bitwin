import { cva } from "class-variance-authority";

export type StatusTone = "success" | "warning" | "error" | "info" | "primary" | "neutral";

export const statusDotVariants = cva("relative inline-flex shrink-0 rounded-full", {
  variants: {
    tone: {
      success: "bg-success-500",
      warning: "bg-warning-500",
      error: "bg-error-500",
      info: "bg-info-500",
      primary: "bg-primary-600",
      neutral: "bg-grey-400",
    },
    size: { sm: "h-1.5 w-1.5", md: "h-2 w-2", lg: "h-2.5 w-2.5" },
  },
  defaultVariants: { tone: "success", size: "md" },
});
