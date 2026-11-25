import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva("flex flex-wrap items-center gap-1.5 font-sans", {
  variants: {
    size: { sm: "text-caption", md: "text-body-sm" },
  },
  defaultVariants: { size: "md" },
});

export const breadcrumbItemVariants = cva("inline-flex items-center gap-1.5", {
  variants: {
    current: {
      true: "font-medium text-foreground",
      false: "text-foreground-muted",
    },
  },
  defaultVariants: { current: false },
});
