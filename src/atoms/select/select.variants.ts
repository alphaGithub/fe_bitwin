import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva(
  "inline-flex items-center justify-between gap-2 text-left data-[placeholder]:text-foreground-muted [&>span]:truncate"
);

export const selectContentVariants = cva(
  "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] " +
    "overflow-hidden rounded-md border border-border bg-background font-sans text-foreground shadow-lg"
);

export const selectItemVariants = cva(
  "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-3 text-body-sm outline-none " +
    "data-[highlighted]:bg-surface-muted data-[state=checked]:font-medium " +
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
);
