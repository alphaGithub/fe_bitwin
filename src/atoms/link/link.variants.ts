import { cva } from "class-variance-authority";

export const linkVariants = cva(
  "inline-flex items-center gap-1 rounded-sm font-sans font-medium underline-offset-4 transition-colors duration-fast " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      tone: {
        primary: "text-primary-600 hover:text-primary-700",
        neutral: "text-foreground hover:text-primary-600",
        muted: "text-foreground-muted hover:text-foreground",
        inherit: "text-inherit",
      },
      underline: {
        hover: "hover:underline",
        always: "underline",
        none: "no-underline",
      },
      size: { inherit: "", sm: "text-body-sm", md: "text-body" },
    },
    defaultVariants: { tone: "primary", underline: "hover", size: "inherit" },
  }
);
