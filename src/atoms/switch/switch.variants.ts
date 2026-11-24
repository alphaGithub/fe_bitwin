import { cva } from "class-variance-authority";

export const switchTrackVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent " +
    "bg-grey-300 transition-colors duration-normal " +
    "data-[state=checked]:bg-primary-600 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-5 w-9", md: "h-6 w-11" },
    },
    defaultVariants: { size: "md" },
  }
);

export const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-sm transition-transform duration-normal translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: { size: "md" },
  }
);
