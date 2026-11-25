import { cva } from "class-variance-authority";

export const tagInputVariants = cva(
  "flex w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border bg-background px-2 py-1.5 font-sans " +
    "transition-colors duration-fast focus-within:ring-2 focus-within:ring-ring",
  {
    variants: {
      size: { sm: "min-h-8", md: "min-h-10", lg: "min-h-12" },
      invalid: {
        true: "border-error-500 focus-within:ring-error-500",
        false: "border-border-strong hover:border-grey-400",
      },
      disabled: { true: "cursor-not-allowed bg-surface-muted opacity-60", false: "" },
    },
    defaultVariants: { size: "md", invalid: false, disabled: false },
  }
);
