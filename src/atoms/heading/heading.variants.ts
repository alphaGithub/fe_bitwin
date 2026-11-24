import { cva } from "class-variance-authority";

export const headingVariants = cva("font-display text-foreground tracking-tight", {
  variants: {
    size: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-body-lg font-semibold",
      h6: "text-body font-semibold",
    },
    align: { left: "text-left", center: "text-center", right: "text-right" },
  },
});
