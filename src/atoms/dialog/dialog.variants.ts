import { cva } from "class-variance-authority";

export const dialogOverlayVariants = cva("fixed inset-0 z-50 bg-grey-900/50 animate-fade-in");

export const dialogContentVariants = cva(
  "fixed z-50 flex flex-col bg-background font-sans text-foreground shadow-lg focus:outline-none",
  {
    variants: {
      placement: {
        center: "left-1/2 top-1/2 max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl animate-dialog-in",
        right: "inset-y-0 right-0 h-full w-full animate-drawer-in-right",
      },
      size: { sm: "", md: "", lg: "", xl: "", full: "" },
    },
    compoundVariants: [
      { placement: "center", size: "sm", class: "max-w-sm" },
      { placement: "center", size: "md", class: "max-w-lg" },
      { placement: "center", size: "lg", class: "max-w-2xl" },
      { placement: "center", size: "xl", class: "max-w-4xl" },
      { placement: "center", size: "full", class: "h-[calc(100dvh-2rem)] max-w-none" },
      { placement: "right", size: "sm", class: "max-w-sm" },
      { placement: "right", size: "md", class: "max-w-md" },
      { placement: "right", size: "lg", class: "max-w-xl" },
      { placement: "right", size: "xl", class: "max-w-3xl" },
      { placement: "right", size: "full", class: "max-w-none" },
    ],
    defaultVariants: { placement: "center", size: "md" },
  }
);
