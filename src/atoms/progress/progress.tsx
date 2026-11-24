import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { progressBarVariants, progressTrackVariants } from "./progress.variants";

export type ProgressProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> &
  VariantProps<typeof progressTrackVariants> &
  Omit<VariantProps<typeof progressBarVariants>, "indeterminate"> & {
    /** Current value. Omit for an indeterminate (loading) bar. */
    value?: number;
    max?: number;
    /** Text shown above the bar. */
    label?: ReactNode;
    /** Shows the percentage next to the label. */
    showValue?: boolean;
    "data-testid"?: string;
  };

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, max = 100, size, tone, label, showValue, className, "data-testid": testId, ...props }, ref) => {
    const indeterminate = value === undefined || value === null;
    const percent = indeterminate ? 0 : Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div ref={ref} className={cn("w-full font-sans", className)} data-testid={testId ?? "progress"} {...props}>
        {(label || (showValue && !indeterminate)) && (
          <div className="mb-1.5 flex items-center justify-between text-body-sm">
            {label && <span className="font-medium text-foreground">{label}</span>}
            {showValue && !indeterminate && (
              <span className="tabular-nums text-foreground-muted">{Math.round(percent)}%</span>
            )}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={indeterminate ? undefined : value}
          aria-label={typeof label === "string" ? label : props["aria-label"]}
          className={progressTrackVariants({ size })}
        >
          <div
            className={progressBarVariants({ tone, indeterminate })}
            style={indeterminate ? undefined : { width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }
);
Progress.displayName = "Progress";
