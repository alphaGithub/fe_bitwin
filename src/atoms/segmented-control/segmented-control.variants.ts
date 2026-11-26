import { cva } from "class-variance-authority";

export const segmentedControlVariants = cva("inline-flex items-center gap-0.5 rounded-lg bg-surface-muted p-1 font-sans", {
  variants: {
    fullWidth: { true: "flex w-full [&>*]:flex-1", false: "" },
  },
  defaultVariants: { fullWidth: false },
});

export const segmentVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium text-foreground-muted " +
    "transition-all duration-fast hover:text-foreground " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 " +
    "aria-checked:bg-background aria-checked:text-foreground aria-checked:shadow-sm",
  {
    variants: {
      size: { sm: "h-7 px-2.5 text-caption", md: "h-8 px-3 text-body-sm", lg: "h-10 px-4 text-body-sm" },
      tone: {
        neutral: "",
        primary: "aria-checked:bg-primary-600 aria-checked:text-white",
      },
    },
    defaultVariants: { size: "md", tone: "neutral" },
  }
);
