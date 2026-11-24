import { cva } from "class-variance-authority";
import { alignClasses, gapClasses, justifyClasses } from "../../lib/layout-variants";

export const flexVariants = cva("", {
  variants: {
    inline: { true: "inline-flex", false: "flex" },
    direction: { row: "flex-row", column: "flex-col", "row-reverse": "flex-row-reverse", "column-reverse": "flex-col-reverse" },
    gap: gapClasses,
    align: alignClasses,
    justify: justifyClasses,
    wrap: { nowrap: "flex-nowrap", wrap: "flex-wrap", "wrap-reverse": "flex-wrap-reverse" },
  },
  defaultVariants: { inline: false, direction: "row", gap: "none" },
});
