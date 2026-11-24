import { cva } from "class-variance-authority";

export const dividerVariants = cva("shrink-0 border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "min-h-[1em] self-stretch border-l",
    },
    variant: { solid: "border-solid", dashed: "border-dashed" },
  },
  defaultVariants: { orientation: "horizontal", variant: "solid" },
});

/** Outer margin around the divider. */
export const dividerSpacingVariants = cva("", {
  variants: {
    orientation: { horizontal: "", vertical: "" },
    spacing: { none: "", sm: "", md: "", lg: "" },
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "sm", class: "my-2" },
    { orientation: "horizontal", spacing: "md", class: "my-4" },
    { orientation: "horizontal", spacing: "lg", class: "my-6" },
    { orientation: "vertical", spacing: "sm", class: "mx-2" },
    { orientation: "vertical", spacing: "md", class: "mx-4" },
    { orientation: "vertical", spacing: "lg", class: "mx-6" },
  ],
  defaultVariants: { orientation: "horizontal", spacing: "none" },
});
