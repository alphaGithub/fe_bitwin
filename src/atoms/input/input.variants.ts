import { cva } from "class-variance-authority";

/** Wrapper used when the input has left/right adornments (icons, units, buttons). */
export const inputAdornmentVariants = cva(
  "pointer-events-none absolute inset-y-0 flex items-center text-foreground-muted",
  {
    variants: {
      side: { left: "left-0 pl-3", right: "right-0 pr-3" },
    },
  }
);
