import { cva } from "class-variance-authority";
import { alignClasses, gapClasses, justifyClasses } from "../../lib/layout-variants";

export const stackVariants = cva("flex", {
  variants: {
    direction: { vertical: "flex-col", horizontal: "flex-row" },
    gap: gapClasses,
    align: alignClasses,
    justify: justifyClasses,
    wrap: { true: "flex-wrap", false: "" },
  },
  defaultVariants: { direction: "vertical", gap: "md" },
});
