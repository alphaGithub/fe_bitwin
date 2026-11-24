import { cva } from "class-variance-authority";

export const tagVariants = cva(
  "inline-flex max-w-full items-center gap-1.5 rounded-md border font-sans font-medium transition-colors duration-fast",
  {
    variants: {
      tone: {
        neutral: "border-border bg-surface-muted text-foreground",
        primary: "border-primary-200 bg-primary-50 text-primary-700",
        success: "border-success-100 bg-success-50 text-success-700",
        warning: "border-warning-100 bg-warning-50 text-warning-700",
        error: "border-error-100 bg-error-50 text-error-700",
      },
      size: {
        sm: "h-6 px-2 text-caption",
        md: "h-8 px-2.5 text-body-sm",
      },
      disabled: { true: "pointer-events-none opacity-50", false: "" },
    },
    defaultVariants: { tone: "neutral", size: "md", disabled: false },
  }
);

export const tagRemoveVariants = cva(
  "-mr-1 inline-flex shrink-0 items-center justify-center rounded-sm opacity-60 transition-opacity " +
    "hover:bg-black/5 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" },
    },
    defaultVariants: { size: "md" },
  }
);
