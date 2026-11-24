import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { textVariants } from "./text.variants";

export type TextProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    /** Element to render. Defaults to `p`. */
    as?: "p" | "span" | "div" | "label" | "small" | "strong" | "em";
    "data-testid"?: string;
  };

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = "p", className, size, weight, tone, align, truncate, "data-testid": testId, ...props }, ref) => (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(textVariants({ size, weight, tone, align, truncate }), className)}
      data-testid={testId ?? "text"}
      {...props}
    />
  )
);
Text.displayName = "Text";
