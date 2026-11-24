import { cva } from "class-variance-authority";

export const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-none",
    },
    gutter: { true: "", false: "px-0 sm:px-0 lg:px-0" },
  },
  defaultVariants: { size: "xl", gutter: true },
});
