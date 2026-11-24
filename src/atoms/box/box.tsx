import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import type { LayoutElement } from "../../lib/layout-variants";
import { boxVariants } from "./box.variants";

export type BoxProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof boxVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
  };

/** Generic container with token-based padding, background, border, radius and shadow. */
export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as: Component = "div", padding, background, border, radius, shadow, className, "data-testid": testId, ...props }, ref) => (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(boxVariants({ padding, background, border, radius, shadow }), className)}
      data-testid={testId ?? "box"}
      {...props}
    />
  )
);
Box.displayName = "Box";
