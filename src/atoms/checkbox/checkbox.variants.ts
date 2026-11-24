import { cva } from "class-variance-authority";

export const checkboxBoxVariants = cva(
  "peer shrink-0 cursor-pointer appearance-none rounded-sm border border-border-strong bg-background " +
    "transition-colors duration-fast " +
    "hover:border-primary-500 " +
    "checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" },
      invalid: { true: "border-error-500", false: "" },
    },
    defaultVariants: { size: "md", invalid: false },
  }
);

export const checkboxIconVariants = cva(
  "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0",
  {
    variants: {
      size: { sm: "h-3 w-3", md: "h-3.5 w-3.5" },
    },
    defaultVariants: { size: "md" },
  }
);
