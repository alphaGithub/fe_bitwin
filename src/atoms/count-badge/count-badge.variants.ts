import { cva } from "class-variance-authority";

export const countBadgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-sans font-semibold tabular-nums leading-none",
  {
    variants: {
      tone: {
        primary: "bg-primary-600 text-white",
        error: "bg-error-600 text-white",
        success: "bg-success-600 text-white",
        warning: "bg-warning-500 text-white",
        neutral: "bg-grey-200 text-grey-800",
        dark: "bg-grey-900 text-white",
      },
      size: {
        sm: "h-4 min-w-[1rem] px-1 text-[0.625rem]",
        md: "h-5 min-w-[1.25rem] px-1.5 text-caption",
      },
      dot: { true: "h-2.5 w-2.5 min-w-0 p-0", false: "" },
      attached: { true: "absolute -right-1 -top-1 ring-2 ring-background", false: "" },
    },
    defaultVariants: { tone: "error", size: "md", dot: false, attached: false },
  }
);
