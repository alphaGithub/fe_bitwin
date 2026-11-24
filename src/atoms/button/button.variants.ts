import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium " +
    "transition-colors duration-fast select-none " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
        secondary: "bg-primary-50 text-primary-700 hover:bg-primary-100 active:bg-primary-200",
        outline:
          "border border-border-strong bg-background text-foreground hover:bg-surface-muted active:bg-neutral-200",
        ghost: "bg-transparent text-foreground hover:bg-surface-muted active:bg-neutral-200",
        danger: "bg-error-600 text-white hover:bg-error-700 active:bg-error-700",
        link: "bg-transparent text-primary-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-body-sm",
        md: "h-10 px-4 text-body-sm",
        lg: "h-12 px-5 text-body",
        icon: "h-10 w-10 p-0",
      },
      rounded: {
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [{ variant: "link", class: "h-auto px-0" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      fullWidth: false,
    },
  }
);
