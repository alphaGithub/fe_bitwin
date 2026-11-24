import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { dividerSpacingVariants, dividerVariants } from "./divider.variants";

export type DividerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dividerVariants> &
  VariantProps<typeof dividerSpacingVariants> & {
    /** Text in the middle of a horizontal divider, e.g. "OR". */
    label?: ReactNode;
    "data-testid"?: string;
  };

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ orientation, variant, spacing, label, className, "data-testid": testId, ...props }, ref) => {
    const dataTestId = testId ?? `divider-${orientation ?? "horizontal"}`;
    const spacingClass = dividerSpacingVariants({ orientation, spacing });

    if (label && orientation !== "vertical") {
      return (
        <div
          ref={ref}
          role="separator"
          className={cn("flex w-full items-center gap-3", spacingClass, className)}
          data-testid={dataTestId}
          {...props}
        >
          <span className={cn(dividerVariants({ variant }), "flex-1")} />
          <span className="font-sans text-caption font-medium uppercase text-foreground-muted">{label}</span>
          <span className={cn(dividerVariants({ variant }), "flex-1")} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation ?? "horizontal"}
        className={cn(dividerVariants({ orientation, variant }), spacingClass, className)}
        data-testid={dataTestId}
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";
