import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { skeletonVariants } from "./skeleton.variants";

export type SkeletonProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof skeletonVariants> & {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    /** For `shape="text"`: renders this many lines, the last one shorter. */
    lines?: number;
    "data-testid"?: string;
  };

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ shape, width, height, lines = 1, className, style, "data-testid": testId, ...props }, ref) => {
    if (shape === "text" && lines > 1) {
      return (
        <div ref={ref} aria-hidden="true" className={cn("space-y-2", className)} data-testid={testId ?? "skeleton"} {...props}>
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              className={skeletonVariants({ shape })}
              style={{ width: i === lines - 1 ? "60%" : width, height }}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(skeletonVariants({ shape }), className)}
        style={{ width, height, ...style }}
        data-testid={testId ?? "skeleton"}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";
