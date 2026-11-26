import { cva } from "class-variance-authority";

export const timelineMarkerVariants = cva(
  "relative z-10 flex shrink-0 items-center justify-center rounded-full ring-4 ring-background",
  {
    variants: {
      tone: {
        primary: "bg-primary-600 text-white",
        success: "bg-success-600 text-white",
        warning: "bg-warning-500 text-white",
        error: "bg-error-600 text-white",
        neutral: "bg-grey-300 text-grey-700",
      },
      hasIcon: { true: "h-7 w-7", false: "mt-1.5 h-2.5 w-2.5" },
    },
    defaultVariants: { tone: "primary", hasIcon: false },
  }
);
