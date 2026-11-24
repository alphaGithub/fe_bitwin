import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import type { LayoutElement } from "../../lib/layout-variants";
import { flexVariants } from "./flex.variants";

export type FlexProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof flexVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
  };

/** Full-control flexbox (row by default). For simple spaced lists, prefer `Stack`. */
export const Flex = forwardRef<HTMLElement, FlexProps>(
  ({ as: Component = "div", inline, direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(flexVariants({ inline, direction, gap, align, justify, wrap }), className)}
      data-testid={testId ?? "flex"}
      {...props}
    />
  )
);
Flex.displayName = "Flex";
