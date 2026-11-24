import { cva } from "class-variance-authority";

export const skeletonVariants = cva("animate-pulse bg-grey-200", {
  variants: {
    shape: {
      rect: "rounded-md",
      text: "h-4 w-full rounded-sm",
      circle: "rounded-full",
    },
  },
  defaultVariants: { shape: "rect" },
});
