import { cva } from "class-variance-authority";

export const alertVariants = cva("relative flex w-full gap-3 font-sans", {
  variants: {
    tone: {
      info: "border-info-100 bg-info-50 text-info-700",
      success: "border-success-100 bg-success-50 text-success-700",
      warning: "border-warning-100 bg-warning-50 text-warning-700",
      error: "border-error-100 bg-error-50 text-error-700",
      neutral: "border-border bg-surface text-foreground",
      primary: "border-primary-100 bg-primary-50 text-primary-700",
      dark: "border-grey-900 bg-grey-900 text-white",
    },
    /**
     * `inline` — boxed message inside page content (default).
     * `banner` — full-width strip for the top of a page or section (announcements, trial ends, etc.).
     */
    variant: {
      inline: "rounded-lg border p-4",
      banner: "items-center justify-center border-b px-4 py-2.5",
    },
  },
  defaultVariants: { tone: "info", variant: "inline" },
});
