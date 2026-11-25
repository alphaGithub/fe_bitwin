import { cva } from "class-variance-authority";

export type TabsVariant = "underline" | "pill" | "enclosed";
export type TabsOrientation = "horizontal" | "vertical";

export const tabsListVariants = cva("flex font-sans", {
  variants: {
    variant: {
      underline: "",
      pill: "gap-1",
      enclosed: "gap-1 rounded-lg bg-surface-muted p-1",
    },
    orientation: { horizontal: "flex-row items-center", vertical: "flex-col items-stretch" },
    fullWidth: { true: "w-full [&>*]:flex-1", false: "" },
  },
  compoundVariants: [
    { variant: "underline", orientation: "horizontal", class: "gap-6 border-b border-border" },
    { variant: "underline", orientation: "vertical", class: "gap-1 border-l border-border" },
    { variant: "enclosed", orientation: "horizontal", class: "inline-flex" },
  ],
  defaultVariants: { variant: "underline", orientation: "horizontal", fullWidth: false },
});

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-foreground-muted transition-colors duration-fast " +
    "hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        underline: "data-[state=active]:text-primary-600",
        pill: "rounded-full data-[state=active]:bg-primary-50 data-[state=active]:text-primary-700",
        enclosed: "rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      },
      orientation: { horizontal: "", vertical: "justify-start" },
      size: { sm: "text-body-sm", md: "text-body-sm", lg: "text-body" },
    },
    compoundVariants: [
      { variant: "underline", orientation: "horizontal", class: "-mb-px border-b-2 border-transparent pb-2.5 pt-1 data-[state=active]:border-primary-600" },
      { variant: "underline", orientation: "vertical", class: "-ml-px border-l-2 border-transparent px-4 py-2 data-[state=active]:border-primary-600 data-[state=active]:bg-primary-50" },
      { variant: "pill", size: "sm", class: "h-7 px-3" },
      { variant: "pill", size: "md", class: "h-9 px-4" },
      { variant: "pill", size: "lg", class: "h-10 px-5" },
      { variant: "enclosed", size: "sm", class: "h-7 px-3" },
      { variant: "enclosed", size: "md", class: "h-8 px-3" },
      { variant: "enclosed", size: "lg", class: "h-10 px-4" },
    ],
    defaultVariants: { variant: "underline", orientation: "horizontal", size: "md" },
  }
);

/** Count pill inside a trigger; turns brand-colored when its tab is active. */
export const tabsCountVariants = cva(
  "inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-grey-200 px-1.5 text-caption font-medium text-grey-700 " +
    "group-data-[state=active]:bg-primary-600 group-data-[state=active]:text-white"
);
