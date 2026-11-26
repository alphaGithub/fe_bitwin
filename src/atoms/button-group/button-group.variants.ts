import { cva } from "class-variance-authority";

export const buttonGroupVariants = cva("inline-flex", {
  variants: {
    orientation: { horizontal: "flex-row", vertical: "flex-col" },
    attached: { true: "", false: "" },
    fullWidth: { true: "flex w-full [&>*]:flex-1", false: "" },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      attached: true,
      class:
        "[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:focus-visible]:z-10 [&>*:hover]:z-10",
    },
    {
      orientation: "vertical",
      attached: true,
      class:
        "[&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:focus-visible]:z-10 [&>*:hover]:z-10",
    },
    { orientation: "horizontal", attached: false, class: "gap-2" },
    { orientation: "vertical", attached: false, class: "gap-2" },
  ],
  defaultVariants: { orientation: "horizontal", attached: true, fullWidth: false },
});
