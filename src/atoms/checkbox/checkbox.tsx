"use client";

import { forwardRef, useEffect, useId, useImperativeHandle, useRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { Check, Minus } from "lucide-react";
import { cn } from "../../lib/cn";
import { checkboxBoxVariants, checkboxIconVariants } from "./checkbox.variants";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> &
  VariantProps<typeof checkboxBoxVariants> & {
    /** Text shown next to the box (clickable). */
    label?: ReactNode;
    /** Helper text below the label. */
    description?: ReactNode;
    /** Shows a dash instead of a check — e.g. "some items selected". */
    indeterminate?: boolean;
    "data-testid"?: string;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { size, invalid, label, description, indeterminate = false, className, id, "data-testid": testId, ...props },
    ref
  ) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    useEffect(() => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const box = (
      <span className="relative inline-flex">
        <input
          ref={innerRef}
          id={inputId}
          type="checkbox"
          aria-invalid={invalid || undefined}
          aria-describedby={description ? `${inputId}-description` : undefined}
          className={cn(checkboxBoxVariants({ size, invalid }), !label && className)}
          data-testid={testId ?? `checkbox-${id ?? "input"}`}
          {...props}
        />
        <Check
          aria-hidden="true"
          strokeWidth={3}
          className={cn(checkboxIconVariants({ size }), !indeterminate && "peer-checked:opacity-100")}
        />
        <Minus
          aria-hidden="true"
          strokeWidth={3}
          className={cn(checkboxIconVariants({ size }), indeterminate && "opacity-100")}
        />
      </span>
    );

    if (!label) return box;

    return (
      <div className={cn("flex items-start gap-2", className)}>
        <span className={cn("flex items-center", size === "sm" ? "h-5" : "h-6")}>{box}</span>
        <div className="grid gap-0.5">
          <label
            htmlFor={inputId}
            className={cn(
              "cursor-pointer font-sans text-foreground",
              size === "sm" ? "text-body-sm" : "text-body",
              props.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {label}
          </label>
          {description && (
            <p id={`${inputId}-description`} className="font-sans text-body-sm text-foreground-muted">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";
