import { cva } from "class-variance-authority";

export type StepStatus = "complete" | "current" | "upcoming" | "error";

export const stepsVariants = cva("flex font-sans", {
  variants: {
    orientation: { horizontal: "w-full flex-row items-start", vertical: "flex-col" },
  },
  defaultVariants: { orientation: "horizontal" },
});

export const stepIndicatorVariants = cva(
  "relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-colors duration-normal",
  {
    variants: {
      status: {
        complete: "border-primary-600 bg-primary-600 text-white",
        current: "border-primary-600 bg-background text-primary-600",
        upcoming: "border-border-strong bg-background text-foreground-muted",
        error: "border-error-600 bg-error-600 text-white",
      },
      size: { sm: "h-6 w-6 text-caption", md: "h-8 w-8 text-body-sm", lg: "h-10 w-10 text-body" },
    },
    defaultVariants: { status: "upcoming", size: "md" },
  }
);

export const stepConnectorVariants = cva("transition-colors duration-normal", {
  variants: {
    complete: { true: "bg-primary-600", false: "bg-border-strong" },
    orientation: { horizontal: "h-0.5 flex-1", vertical: "w-0.5 flex-1 min-h-[1.5rem]" },
  },
  defaultVariants: { complete: false, orientation: "horizontal" },
});

export const stepTitleVariants = cva("font-medium", {
  variants: {
    status: {
      complete: "text-foreground",
      current: "text-primary-600",
      upcoming: "text-foreground-muted",
      error: "text-error-600",
    },
    size: { sm: "text-caption", md: "text-body-sm", lg: "text-body" },
  },
  defaultVariants: { status: "upcoming", size: "md" },
});
