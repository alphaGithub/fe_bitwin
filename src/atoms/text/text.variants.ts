import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    size: {
      lg: "text-body-lg",
      md: "text-body",
      sm: "text-body-sm",
      xs: "text-caption",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    tone: {
      default: "text-foreground",
      muted: "text-foreground-muted",
      primary: "text-primary-600",
      success: "text-success-700",
      warning: "text-warning-700",
      error: "text-error-600",
      inherit: "text-inherit",
    },
    align: { left: "text-left", center: "text-center", right: "text-right" },
    truncate: { true: "truncate", false: "" },
  },
  defaultVariants: { size: "md", weight: "regular", tone: "default", truncate: false },
});
