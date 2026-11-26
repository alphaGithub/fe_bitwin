import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { statusDotVariants } from "./status-dot.variants";

export type StatusDotProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof statusDotVariants> & {
    /** Visible text after the dot, e.g. "Online". */
    label?: ReactNode;
    /** Animated ping, for "live" states. */
    pulse?: boolean;
    "data-testid"?: string;
  };

/** Small colored dot for live status (online, active, failed…), optionally with a label. */
export const StatusDot = forwardRef<HTMLSpanElement, StatusDotProps>(
  ({ tone, size, label, pulse, className, "aria-label": ariaLabel, "data-testid": testId, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("inline-flex items-center gap-1.5 font-sans text-body-sm text-foreground", className)}
      data-testid={testId ?? `status-dot-${tone ?? "success"}`}
      {...props}
    >
      <span
        className={statusDotVariants({ tone, size })}
        role={label ? undefined : "img"}
        aria-label={label ? undefined : (ariaLabel ?? tone ?? "success")}
        aria-hidden={label ? true : undefined}
      >
        {pulse && (
          <span className={cn(statusDotVariants({ tone, size }), "absolute inset-0 animate-ping opacity-75")} />
        )}
      </span>
      {label}
    </span>
  )
);
StatusDot.displayName = "StatusDot";
