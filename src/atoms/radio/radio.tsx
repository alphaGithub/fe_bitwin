"use client";

import { createContext, forwardRef, useContext, useId, useState } from "react";
import type { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { radioGroupVariants, radioVariants } from "./radio.variants";

type RadioGroupContextValue = {
  name: string;
  value: string | undefined;
  onChange: (value: string) => void;
  size: VariantProps<typeof radioVariants>["size"];
  disabled?: boolean;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export type RadioGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> &
  VariantProps<typeof radioGroupVariants> &
  VariantProps<typeof radioVariants> & {
    /** Form field name. Auto-generated if omitted. */
    name?: string;
    /** Controlled value. */
    value?: string;
    /** Initial value when uncontrolled. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    "data-testid"?: string;
  };

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value,
      defaultValue,
      onValueChange,
      orientation,
      size,
      disabled,
      className,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const autoName = useId();
    const [internal, setInternal] = useState(defaultValue);
    const current = value !== undefined ? value : internal;

    const onChange = (next: string) => {
      if (value === undefined) setInternal(next);
      onValueChange?.(next);
    };

    return (
      <RadioGroupContext.Provider value={{ name: name ?? autoName, value: current, onChange, size, disabled }}>
        <div
          ref={ref}
          role="radiogroup"
          aria-orientation={orientation ?? "vertical"}
          className={cn(radioGroupVariants({ orientation }), className)}
          data-testid={testId ?? `radio-group-${name ?? "group"}`}
          {...props}
        />
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = "RadioGroup";

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "value"> &
  VariantProps<typeof radioVariants> & {
    value: string;
    label?: ReactNode;
    description?: ReactNode;
    "data-testid"?: string;
  };

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, description, size, className, id, disabled, "data-testid": testId, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    const autoId = useId();
    const inputId = id ?? autoId;
    const resolvedSize = size ?? group?.size;
    const isDisabled = disabled ?? group?.disabled;

    const groupProps = group
      ? {
          name: group.name,
          checked: group.value === value,
          onChange: () => group.onChange(value),
        }
      : {};

    const input = (
      <input
        ref={ref}
        id={inputId}
        type="radio"
        value={value}
        disabled={isDisabled}
        aria-describedby={description ? `${inputId}-description` : undefined}
        className={cn(radioVariants({ size: resolvedSize }), !label && className)}
        data-testid={testId ?? `radio-${value}`}
        {...groupProps}
        {...props}
      />
    );

    if (!label) return input;

    return (
      <div className={cn("flex items-start gap-2", className)}>
        <span className={cn("flex items-center", resolvedSize === "sm" ? "h-5" : "h-6")}>{input}</span>
        <div className="grid gap-0.5">
          <label
            htmlFor={inputId}
            className={cn(
              "cursor-pointer font-sans text-foreground",
              resolvedSize === "sm" ? "text-body-sm" : "text-body",
              isDisabled && "cursor-not-allowed opacity-60"
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
Radio.displayName = "Radio";
