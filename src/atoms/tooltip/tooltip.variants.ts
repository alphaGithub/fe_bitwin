import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva(
  "z-50 max-w-xs rounded-md px-2.5 py-1.5 font-sans text-caption shadow-md animate-fade-in",
  {
    variants: {
      tone: {
        dark: "bg-grey-900 text-white",
        light: "border border-border bg-background text-foreground",
      },
    },
    defaultVariants: { tone: "dark" },
  }
);

export const tooltipArrowVariants = cva("", {
  variants: {
    tone: { dark: "fill-grey-900", light: "fill-background" },
  },
  defaultVariants: { tone: "dark" },
});
