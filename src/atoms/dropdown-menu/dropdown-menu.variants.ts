import { cva } from "class-variance-authority";

export const dropdownContentVariants = cva(
  "z-50 min-w-[10rem] max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-y-auto " +
    "rounded-md border border-border bg-background p-1 font-sans text-foreground shadow-lg animate-pop-in"
);

export const dropdownItemVariants = cva(
  "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-body-sm outline-none " +
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      danger: {
        true: "text-error-600 data-[highlighted]:bg-error-50",
        false: "data-[highlighted]:bg-surface-muted",
      },
      inset: { true: "pl-8", false: "" },
    },
    defaultVariants: { danger: false, inset: false },
  }
);
