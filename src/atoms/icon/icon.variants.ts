import { cva } from "class-variance-authority";

export const iconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
    tone: {
      inherit: "",
      default: "text-foreground",
      muted: "text-foreground-muted",
      primary: "text-primary-600",
      success: "text-success-600",
      warning: "text-warning-600",
      error: "text-error-600",
    },
  },
  defaultVariants: { size: "md", tone: "inherit" },
});
