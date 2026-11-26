"use client";

import { forwardRef, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/use-controllable-state";
import { segmentedControlVariants, segmentVariants } from "./segmented-control.variants";

export type SegmentOption = {
  value: string;
  label?: ReactNode;
  icon?: ReactNode;
  /** Required when the option is icon-only. */
  "aria-label"?: string;
  disabled?: boolean;
};

export type SegmentedControlProps = VariantProps<typeof segmentedControlVariants> &
  VariantProps<typeof segmentVariants> & {
    options: SegmentOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
  };

/** Pick one of a few options, shown as connected segments (e.g. Day / Week / Month). */
export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  (
    {
      options,
      value,
      defaultValue,
      onValueChange,
      size,
      tone,
      fullWidth,
      disabled,
      className,
      "aria-label": ariaLabel,
      "data-testid": testId,
    },
    ref
  ) => {
    const [current, setCurrent] = useControllableState(value, defaultValue ?? options[0]?.value ?? "", onValueChange);
    const buttons = useRef<Array<HTMLButtonElement | null>>([]);

    const onKeyDown = (index: number, e: KeyboardEvent<HTMLButtonElement>) => {
      const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      for (let step = 1; step <= options.length; step++) {
        const next = (index + dir * step + options.length) % options.length;
        if (!options[next].disabled) {
          buttons.current[next]?.focus();
          setCurrent(options[next].value);
          break;
        }
      }
    };

    return (
      <div
        ref={ref}
        role="radiogroup"
        aria-label={ariaLabel}
        className={cn(segmentedControlVariants({ fullWidth }), className)}
        data-testid={testId ?? "segmented-control"}
      >
        {options.map((option, index) => {
          const checked = option.value === current;
          return (
            <button
              key={option.value}
              ref={(el) => {
                buttons.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              aria-label={option["aria-label"]}
              tabIndex={checked ? 0 : -1}
              disabled={disabled || option.disabled}
              onClick={() => setCurrent(option.value)}
              onKeyDown={(e) => onKeyDown(index, e)}
              className={segmentVariants({ size, tone })}
              data-testid={`segment-${option.value}`}
            >
              {option.icon}
              {option.label}
            </button>
          );
        })}
      </div>
    );
  }
);
SegmentedControl.displayName = "SegmentedControl";
