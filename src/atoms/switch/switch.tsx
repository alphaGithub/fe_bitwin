"use client";

import { forwardRef, useId, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { switchThumbVariants, switchTrackVariants } from "./switch.variants";

export type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> &
  VariantProps<typeof switchTrackVariants> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: ReactNode;
    /** Label position relative to the switch. */
    labelPosition?: "left" | "right";
    "data-testid"?: string;
  };

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      size,
      label,
      labelPosition = "right",
      className,
      id,
      disabled,
      onClick,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const autoId = useId();
    const switchId = id ?? autoId;
    const [internal, setInternal] = useState(defaultChecked);
    const isOn = checked !== undefined ? checked : internal;
    const state = isOn ? "checked" : "unchecked";

    const button = (
      <button
        ref={ref}
        id={switchId}
        type="button"
        role="switch"
        aria-checked={isOn}
        data-state={state}
        disabled={disabled}
        className={cn(switchTrackVariants({ size }), !label && className)}
        data-testid={testId ?? `switch-${id ?? "toggle"}`}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (checked === undefined) setInternal(!isOn);
          onCheckedChange?.(!isOn);
        }}
        {...props}
      >
        <span data-state={state} className={switchThumbVariants({ size })} />
      </button>
    );

    if (!label) return button;

    return (
      <div className={cn("inline-flex items-center gap-2", labelPosition === "left" && "flex-row-reverse", className)}>
        {button}
        <label
          htmlFor={switchId}
          className={cn(
            "cursor-pointer select-none font-sans text-foreground",
            size === "sm" ? "text-body-sm" : "text-body",
            disabled && "cursor-not-allowed opacity-60"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);
Switch.displayName = "Switch";
