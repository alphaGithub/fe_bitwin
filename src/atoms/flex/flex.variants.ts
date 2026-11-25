import { cva } from "class-variance-authority";
import { alignClasses, justifyClasses } from "../../lib/layout-variants";

/**
 * Each gap also sets `--flex-gap`, so `Flex.Item colspan` can subtract its share of the gaps and
 * columns still add up to exactly 100% (e.g. two `colspan={12}` items + a gap fit on one row).
 */
export const flexGapClasses = {
  none: "gap-0 [--flex-gap:0px]",
  xs: "gap-1 [--flex-gap:0.25rem]",
  sm: "gap-2 [--flex-gap:0.5rem]",
  md: "gap-4 [--flex-gap:1rem]",
  lg: "gap-6 [--flex-gap:1.5rem]",
  xl: "gap-8 [--flex-gap:2rem]",
} as const;

export const flexVariants = cva("", {
  variants: {
    inline: { true: "inline-flex", false: "flex" },
    direction: { row: "flex-row", column: "flex-col", "row-reverse": "flex-row-reverse", "column-reverse": "flex-col-reverse" },
    gap: flexGapClasses,
    align: alignClasses,
    justify: justifyClasses,
    wrap: { nowrap: "flex-nowrap", wrap: "flex-wrap", "wrap-reverse": "flex-wrap-reverse" },
  },
  defaultVariants: { inline: false, direction: "row", gap: "none" },
});

export const flexItemVariants = cva("min-w-0", {
  variants: {
    alignSelf: {
      auto: "self-auto",
      start: "self-start",
      center: "self-center",
      end: "self-end",
      stretch: "self-stretch",
      baseline: "self-baseline",
    },
  },
});
