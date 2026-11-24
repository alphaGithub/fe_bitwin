import { cva } from "class-variance-authority";

export const spinnerVariants = cva(
  "inline-block shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8 border-[3px]",
        xl: "h-12 w-12 border-4",
      },
      tone: {
        inherit: "",
        primary: "text-primary-600",
        muted: "text-foreground-muted",
        white: "text-white",
      },
    },
    defaultVariants: { size: "md", tone: "primary" },
  }
);
