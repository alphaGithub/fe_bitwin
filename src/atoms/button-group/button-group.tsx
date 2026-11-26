import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { buttonGroupVariants } from "./button-group.variants";

export type ButtonGroupProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof buttonGroupVariants> & {
    "data-testid"?: string;
  };

/** Groups related `Button`s; `attached` (default) joins them into one control. */
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ orientation, attached, fullWidth, className, "data-testid": testId, ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      className={cn(buttonGroupVariants({ orientation, attached, fullWidth }), className)}
      data-testid={testId ?? "button-group"}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";
