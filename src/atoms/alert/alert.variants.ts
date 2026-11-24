import { cva } from "class-variance-authority";

export const alertVariants = cva("relative flex w-full gap-3 rounded-lg border p-4 font-sans", {
  variants: {
    tone: {
      info: "border-info-100 bg-info-50 text-info-700",
      success: "border-success-100 bg-success-50 text-success-700",
      warning: "border-warning-100 bg-warning-50 text-warning-700",
      error: "border-error-100 bg-error-50 text-error-700",
      neutral: "border-border bg-surface text-foreground",
    },
  },
  defaultVariants: { tone: "info" },
});
