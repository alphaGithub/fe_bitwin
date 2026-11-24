import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import type { LayoutElement } from "../../lib/layout-variants";
import { containerVariants } from "./container.variants";

export type ContainerProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof containerVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
  };

/** Centers page content with a max width and responsive side padding. */
export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ as: Component = "div", size, gutter, className, "data-testid": testId, ...props }, ref) => (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(containerVariants({ size, gutter }), className)}
      data-testid={testId ?? "container"}
      {...props}
    />
  )
);
Container.displayName = "Container";
