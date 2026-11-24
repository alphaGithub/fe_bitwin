import { cva } from "class-variance-authority";

export const radioVariants = cva(
  "shrink-0 cursor-pointer appearance-none rounded-full border border-border-strong bg-background " +
    "transition-all duration-fast hover:border-primary-500 " +
    "checked:border-primary-600 checked:bg-background " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-4 checked:border-[5px]",
        md: "h-5 w-5 checked:border-[6px]",
      },
    },
    defaultVariants: { size: "md" },
  }
);

export const radioGroupVariants = cva("flex", {
  variants: {
    orientation: { vertical: "flex-col gap-3", horizontal: "flex-row flex-wrap gap-6" },
  },
  defaultVariants: { orientation: "vertical" },
});
