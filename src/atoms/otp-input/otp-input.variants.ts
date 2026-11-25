import { cva } from "class-variance-authority";

export const otpCellVariants = cva(
  "rounded-md border bg-background text-center font-sans font-semibold text-foreground tabular-nums caret-primary-600 " +
    "transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-ring " +
    "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "h-9 w-8 text-body",
        md: "h-12 w-10 text-body-lg",
        lg: "h-14 w-12 text-h4",
      },
      invalid: {
        true: "border-error-500 focus:ring-error-500",
        false: "border-border-strong",
      },
    },
    defaultVariants: { size: "md", invalid: false },
  }
);
