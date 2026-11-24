import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden font-sans font-medium",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[0.625rem]",
        sm: "h-8 w-8 text-caption",
        md: "h-10 w-10 text-body-sm",
        lg: "h-12 w-12 text-body",
        xl: "h-16 w-16 text-body-lg",
      },
      shape: { circle: "rounded-full", square: "rounded-md" },
      tone: {
        grey: "bg-grey-200 text-grey-700",
        blue: "bg-blue-100 text-blue-700",
        green: "bg-green-100 text-green-700",
        red: "bg-red-100 text-red-700",
        yellow: "bg-yellow-100 text-yellow-800",
      },
    },
    defaultVariants: { size: "md", shape: "circle", tone: "grey" },
  }
);

export const avatarStatusVariants = cva("absolute bottom-0 right-0 block rounded-full ring-2 ring-background", {
  variants: {
    status: {
      online: "bg-success-500",
      offline: "bg-grey-400",
      busy: "bg-error-500",
      away: "bg-warning-500",
    },
    size: { xs: "h-1.5 w-1.5", sm: "h-2 w-2", md: "h-2.5 w-2.5", lg: "h-3 w-3", xl: "h-4 w-4" },
  },
  defaultVariants: { size: "md" },
});
