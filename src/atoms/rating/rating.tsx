"use client";

import { forwardRef, useState } from "react";
import type { KeyboardEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import { Star } from "lucide-react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/use-controllable-state";
import { ratingStarVariants, ratingVariants } from "./rating.variants";

export type RatingProps = VariantProps<typeof ratingVariants> & {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  /** Number of stars. */
  max?: number;
  /** Display only. Fractions (e.g. 3.5) render partially filled stars. */
  readOnly?: boolean;
  disabled?: boolean;
  /** Shows the number next to the stars, e.g. "4.5". */
  showValue?: boolean;
  /** Review count next to the value, e.g. "(128)". */
  count?: number;
  className?: string;
  "aria-label"?: string;
  "data-testid"?: string;
};

function StarIcon({ fill, size }: { fill: number; size: RatingProps["size"] }) {
  const cls = ratingStarVariants({ size });
  return (
    <span className="relative inline-flex">
      <Star aria-hidden="true" className={cn(cls, "fill-grey-200 text-grey-200")} />
      {fill > 0 && (
        <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
          <Star aria-hidden="true" className={cn(cls, "fill-yellow-400 text-yellow-400")} />
        </span>
      )}
    </span>
  );
}

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      value,
      defaultValue = 0,
      onValueChange,
      max = 5,
      readOnly,
      disabled,
      showValue,
      count,
      size,
      className,
      "aria-label": ariaLabel = "Rating",
      "data-testid": testId,
    },
    ref
  ) => {
    const [current, setCurrent] = useControllableState(value, defaultValue, onValueChange);
    const [hover, setHover] = useState<number | null>(null);
    const shown = hover ?? current;
    const interactive = !readOnly && !disabled;

    const summary = (showValue || count !== undefined) && (
      <span className="ml-1.5 font-sans text-body-sm text-foreground-muted tabular-nums">
        {showValue && <span className="font-medium text-foreground">{current.toFixed(1)}</span>}
        {count !== undefined && <span> ({count.toLocaleString()})</span>}
      </span>
    );

    if (!interactive) {
      return (
        <div
          ref={ref}
          role="img"
          aria-label={`${ariaLabel}: ${current} out of ${max}`}
          className={cn(ratingVariants({ size }), disabled && "opacity-50", className)}
          data-testid={testId ?? "rating"}
        >
          {Array.from({ length: max }, (_, i) => (
            <StarIcon key={i} size={size} fill={Math.min(1, Math.max(0, current - i))} />
          ))}
          {summary}
        </div>
      );
    }

    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        setCurrent(Math.min(max, Math.floor(current) + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        setCurrent(Math.max(0, Math.ceil(current) - 1));
      }
    };

    return (
      <div className={cn("inline-flex items-center", className)}>
        <div
          ref={ref}
          role="slider"
          tabIndex={0}
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={current}
          aria-valuetext={`${current} out of ${max} stars`}
          onKeyDown={onKeyDown}
          onMouseLeave={() => setHover(null)}
          className={cn(ratingVariants({ size }), "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring")}
          data-testid={testId ?? "rating"}
        >
          {Array.from({ length: max }, (_, i) => {
            const starValue = i + 1;
            return (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                aria-label={`${starValue} star${starValue > 1 ? "s" : ""}`}
                onMouseEnter={() => setHover(starValue)}
                onClick={() => setCurrent(starValue === current ? 0 : starValue)}
                className="transition-transform duration-fast hover:scale-110"
                data-testid={`rating-star-${starValue}`}
              >
                <StarIcon size={size} fill={shown >= starValue ? 1 : 0} />
              </button>
            );
          })}
        </div>
        {summary}
      </div>
    );
  }
);
Rating.displayName = "Rating";
