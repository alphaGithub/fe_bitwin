import { cva } from "class-variance-authority";

export const labelVariants = cva("inline-block font-sans font-medium text-foreground", {
  variants: {
    size: { sm: "text-caption", md: "text-body-sm", lg: "text-body" },
    disabled: { true: "cursor-not-allowed opacity-60", false: "" },
  },
  defaultVariants: { size: "md", disabled: false },
});
