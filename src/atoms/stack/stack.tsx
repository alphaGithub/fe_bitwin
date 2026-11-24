import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import type { LayoutElement } from "../../lib/layout-variants";
import { stackVariants } from "./stack.variants";

export type StackProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof stackVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
  };

/** Puts children in a column (default) or row with consistent spacing. */
export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ as: Component = "div", direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(stackVariants({ direction, gap, align, justify, wrap }), className)}
      data-testid={testId ?? `stack-${direction ?? "vertical"}`}
      {...props}
    />
  )
);
Stack.displayName = "Stack";
