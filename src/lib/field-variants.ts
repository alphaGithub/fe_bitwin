import { cva } from "class-variance-authority";

/** Shared look for text-like fields (Input, Textarea, Select trigger) so they line up in forms. */
export const fieldVariants = cva(
  "w-full rounded-md border bg-background font-sans text-foreground transition-colors duration-fast " +
    "placeholder:text-foreground-muted " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 " +
    "disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-body-sm",
        md: "h-10 px-3 text-body-sm",
        lg: "h-12 px-4 text-body",
      },
      invalid: {
        true: "border-error-500 focus-visible:ring-error-500",
        false: "border-border-strong hover:border-grey-400",
      },
    },
    defaultVariants: { size: "md", invalid: false },
  }
);
