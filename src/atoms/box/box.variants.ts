import { cva } from "class-variance-authority";
import { paddingClasses } from "../../lib/layout-variants";

export const boxVariants = cva("", {
  variants: {
    padding: paddingClasses,
    background: {
      none: "",
      background: "bg-background",
      surface: "bg-surface",
      muted: "bg-surface-muted",
      primary: "bg-primary-50",
    },
    border: { true: "border border-border", false: "" },
    radius: { none: "", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", full: "rounded-full" },
    shadow: { none: "", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg" },
  },
});
