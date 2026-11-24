"use client";

import { forwardRef, useId } from "react";
import type { ReactNode } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import type { VariantProps } from "class-variance-authority";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../../lib/cn";
import { fieldVariants } from "../../lib/field-variants";
import { selectContentVariants, selectItemVariants, selectTriggerVariants } from "./select.variants";

export type SelectOption = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
};

export type SelectProps = VariantProps<typeof fieldVariants> & {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  /** Form field name (renders a hidden native select for form submission). */
  name?: string;
  id?: string;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "data-testid"?: string;
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      value,
      defaultValue,
      onValueChange,
      placeholder = "Select…",
      disabled,
      required,
      name,
      id,
      size,
      invalid,
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "data-testid": testId,
    },
    ref
  ) => {
    const autoId = useId();
    const triggerId = id ?? autoId;

    return (
      <SelectPrimitive.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        required={required}
        name={name}
      >
        <SelectPrimitive.Trigger
          ref={ref}
          id={triggerId}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-invalid={invalid || undefined}
          className={cn(fieldVariants({ size, invalid }), selectTriggerVariants(), className)}
          data-testid={testId ?? `select-${id ?? name ?? "trigger"}`}
        >
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon asChild>
            <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-foreground-muted" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content position="popper" sideOffset={4} className={selectContentVariants()}>
            <SelectPrimitive.Viewport className="p-1">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={selectItemVariants()}
                  data-testid={`select-option-${option.value}`}
                >
                  <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
                    <SelectPrimitive.ItemIndicator>
                      <Check aria-hidden="true" className="h-4 w-4 text-primary-600" />
                    </SelectPrimitive.ItemIndicator>
                  </span>
                  <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);
Select.displayName = "Select";
