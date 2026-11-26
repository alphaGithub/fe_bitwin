import { cva } from "class-variance-authority";

export const chipVariants = cva(
  "inline-flex select-none items-center justify-center gap-1.5 whitespace-nowrap border font-sans font-medium " +
    "transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 " +
    "disabled:pointer-events-none disabled:opacity-50 " +
    "border-border-strong bg-background text-foreground hover:border-primary-400 hover:bg-primary-50/50 " +
    "aria-pressed:border-primary-600 aria-pressed:bg-primary-50 aria-pressed:text-primary-700 " +
    "aria-checked:border-primary-600 aria-checked:bg-primary-50 aria-checked:text-primary-700",
  {
    variants: {
      size: {
        sm: "h-7 px-2.5 text-caption",
        md: "h-8 px-3 text-body-sm",
        lg: "h-10 px-4 text-body-sm",
      },
      shape: { rounded: "rounded-full", square: "rounded-md" },
      fullWidth: { true: "w-full", false: "" },
    },
    defaultVariants: { size: "md", shape: "rounded", fullWidth: false },
  }
);

export const chipGroupVariants = cva("flex", {
  variants: {
    direction: { row: "flex-row flex-wrap", column: "flex-col items-stretch" },
    gap: { xs: "gap-1", sm: "gap-2", md: "gap-3" },
  },
  defaultVariants: { direction: "row", gap: "sm" },
});
