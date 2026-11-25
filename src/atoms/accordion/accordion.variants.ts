import { cva } from "class-variance-authority";

export type AccordionVariant = "bordered" | "separated" | "ghost";

export const accordionVariants = cva("w-full font-sans", {
  variants: {
    variant: {
      bordered: "divide-y divide-border rounded-lg border border-border",
      separated: "space-y-3",
      ghost: "divide-y divide-border",
    },
  },
  defaultVariants: { variant: "bordered" },
});

export const accordionItemVariants = cva("", {
  variants: {
    variant: {
      bordered: "",
      separated: "rounded-lg border border-border bg-background",
      ghost: "",
    },
  },
  defaultVariants: { variant: "bordered" },
});

export const accordionTriggerVariants = cva(
  "group flex w-full items-center gap-3 text-left font-medium text-foreground transition-colors duration-fast " +
    "hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: { bordered: "px-4 py-3.5", separated: "rounded-lg px-4 py-3.5", ghost: "px-0 py-3.5 hover:bg-transparent" },
      size: { sm: "text-body-sm", md: "text-body" },
      iconPosition: { right: "", left: "flex-row-reverse justify-end" },
    },
    defaultVariants: { variant: "bordered", size: "md", iconPosition: "right" },
  }
);

export const accordionContentVariants = cva(
  "overflow-hidden text-body-sm text-foreground-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: { bordered: "px-4", separated: "px-4", ghost: "px-0" },
    },
    defaultVariants: { variant: "bordered" },
  }
);
