"use client";

import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Check, X } from "lucide-react";
import { cn } from "../../lib/cn";
import {
  stepConnectorVariants,
  stepIndicatorVariants,
  stepsVariants,
  stepTitleVariants,
} from "./steps.variants";
import type { StepStatus } from "./steps.variants";

export type StepItem = {
  title: ReactNode;
  description?: ReactNode;
  /** Custom icon instead of the step number. */
  icon?: ReactNode;
  /** Forces a status (e.g. `"error"`); otherwise derived from `current`. */
  status?: StepStatus;
  disabled?: boolean;
};

export type StepsProps = Omit<HTMLAttributes<HTMLOListElement>, "onChange"> & {
  steps: StepItem[];
  /** Index of the active step (0-based). Steps before it are complete. */
  current: number;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  /** Makes completed steps (and the current one) clickable. */
  onStepClick?: (index: number) => void;
  /** Allow clicking upcoming steps too (free navigation). */
  allowSkipAhead?: boolean;
  "data-testid"?: string;
};

function statusFor(step: StepItem, index: number, current: number): StepStatus {
  if (step.status) return step.status;
  if (index < current) return "complete";
  if (index === current) return "current";
  return "upcoming";
}

export const Steps = forwardRef<HTMLOListElement, StepsProps>(
  (
    {
      steps,
      current,
      orientation = "horizontal",
      size = "md",
      onStepClick,
      allowSkipAhead = false,
      className,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const iconSize = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
    const isVertical = orientation === "vertical";

    return (
      <ol
        ref={ref}
        className={cn(stepsVariants({ orientation }), className)}
        data-testid={testId ?? `steps-${orientation}`}
        {...props}
      >
        {steps.map((step, index) => {
          const status = statusFor(step, index, current);
          const isLast = index === steps.length - 1;
          const clickable =
            !!onStepClick && !step.disabled && (allowSkipAhead || status === "complete" || status === "current");

          const indicator = (
            <span className={cn(stepIndicatorVariants({ status, size }), clickable && "group-hover:ring-4 group-hover:ring-primary-100")}>
              {step.icon ??
                (status === "complete" ? (
                  <Check aria-hidden="true" strokeWidth={3} className={iconSize} />
                ) : status === "error" ? (
                  <X aria-hidden="true" strokeWidth={3} className={iconSize} />
                ) : (
                  index + 1
                ))}
            </span>
          );

          const text = (
            <span className={cn("flex min-w-0 flex-col gap-0.5", isVertical ? "pb-6 pt-1" : "mt-2 items-center px-2 text-center")}>
              <span className={stepTitleVariants({ status, size })}>{step.title}</span>
              {step.description && <span className="text-caption text-foreground-muted">{step.description}</span>}
            </span>
          );

          const body = isVertical ? (
            <>
              <span className="flex flex-col items-center">
                {indicator}
                {!isLast && <span className={stepConnectorVariants({ complete: index < current, orientation })} />}
              </span>
              {text}
            </>
          ) : (
            <>
              <span className="flex w-full items-center">
                <span className={cn(stepConnectorVariants({ complete: index <= current, orientation }), index === 0 && "invisible")} />
                {indicator}
                <span className={cn(stepConnectorVariants({ complete: index < current, orientation }), isLast && "invisible")} />
              </span>
              {text}
            </>
          );

          const wrapperClass = cn(
            isVertical ? "flex gap-3 text-left" : "flex w-full flex-col items-center",
            step.disabled && "opacity-50"
          );

          return (
            <li
              key={index}
              className={cn(!isVertical && "flex-1")}
              aria-current={status === "current" ? "step" : undefined}
              data-status={status}
              data-testid={`step-${index}`}
            >
              {clickable ? (
                <button
                  type="button"
                  onClick={() => onStepClick?.(index)}
                  className={cn(
                    wrapperClass,
                    "group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                >
                  {body}
                </button>
              ) : (
                <div className={wrapperClass}>{body}</div>
              )}
            </li>
          );
        })}
      </ol>
    );
  }
);
Steps.displayName = "Steps";
