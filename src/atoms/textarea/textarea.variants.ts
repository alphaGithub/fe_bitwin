import { cva } from "class-variance-authority";

export const textareaVariants = cva("h-auto min-h-[5rem] py-2", {
  variants: {
    resize: { none: "resize-none", vertical: "resize-y", both: "resize" },
  },
  defaultVariants: { resize: "vertical" },
});
