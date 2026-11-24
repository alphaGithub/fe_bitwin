import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { spinnerVariants } from "./spinner.variants";

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof spinnerVariants> & {
    /** Screen-reader text. */
    label?: string;
    "data-testid"?: string;
  };

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size, tone, label = "Loading", className, "data-testid": testId, ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size, tone }), className)}
      data-testid={testId ?? "spinner"}
      {...props}
    />
  )
);
Spinner.displayName = "Spinner";
