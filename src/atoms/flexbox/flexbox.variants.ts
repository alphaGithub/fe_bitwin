import { cva } from "class-variance-authority";

/**
 * Alfred-compatible values. Gutter uses Alfred's spacing scale (4/8/12/16/24px), not ours,
 * so migrated screens keep their exact spacing.
 */
export const flexboxVariants = cva("flex", {
  variants: {
    direction: { row: "flex-row", column: "flex-col" },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      "space-around": "justify-around",
    },
    align: {
      top: "items-start",
      middle: "items-center",
      bottom: "items-end",
      stretch: "items-stretch",
      end: "items-end",
    },
    gutter: {
      xs: "gap-1 [--flex-gap:4px]",
      sm: "gap-2 [--flex-gap:8px]",
      md: "gap-3 [--flex-gap:12px]",
      lg: "gap-4 [--flex-gap:16px]",
      xl: "gap-6 [--flex-gap:24px]",
    },
    mt: { xs: "mt-1", sm: "mt-2", md: "mt-3", lg: "mt-4", xl: "mt-6" },
    mb: { xs: "mb-1", sm: "mb-2", md: "mb-3", lg: "mb-4", xl: "mb-6" },
    nowrap: { true: "flex-nowrap", false: "flex-wrap" },
  },
  defaultVariants: { direction: "row", justify: "start", nowrap: false },
});
