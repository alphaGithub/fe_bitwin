import { forwardRef } from "react";
import type { LabelHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { labelVariants } from "./label.variants";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants> & {
    /** Shows a red asterisk. */
    required?: boolean;
    "data-testid"?: string;
  };

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ size, disabled, required, className, children, "data-testid": testId, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ size, disabled }), className)}
      data-testid={testId ?? (props.htmlFor ? `label-${props.htmlFor}` : "label")}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-error-600">
          *
        </span>
      )}
    </label>
  )
);
Label.displayName = "Label";
