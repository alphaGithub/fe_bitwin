import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { headingVariants } from "./heading.variants";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    /** Semantic level (`h1`–`h6`). Visual size defaults to match, override with `size`. */
    level?: Level;
    "data-testid"?: string;
  };

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, size, align, className, "data-testid": testId, ...props }, ref) => {
    const Component = `h${level}` as const;
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size: size ?? (`h${level}` as const), align }), className)}
        data-testid={testId ?? `heading-h${level}`}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";
