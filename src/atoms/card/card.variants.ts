import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg bg-background font-sans text-foreground", {
  variants: {
    variant: {
      outlined: "border border-border",
      elevated: "border border-border shadow-md",
      filled: "bg-surface",
      ghost: "",
    },
    padding: { none: "", sm: "p-3", md: "p-5", lg: "p-6" },
    interactive: {
      true: "cursor-pointer transition-shadow duration-normal hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      false: "",
    },
  },
  defaultVariants: { variant: "outlined", padding: "md", interactive: false },
});
