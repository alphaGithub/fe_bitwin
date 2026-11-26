"use client";

import { forwardRef, useId, useRef } from "react";
import type { ButtonHTMLAttributes, KeyboardEvent, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/use-controllable-state";
import { chipGroupVariants, chipVariants } from "./chip.variants";

export type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> &
  VariantProps<typeof chipVariants> & {
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    icon?: ReactNode;
    /** Shows a check mark when selected. */
    showCheck?: boolean;
    /** Small count after the label. */
    count?: number;
    "data-testid"?: string;
  };

/** A toggle button that looks like a pill — for filters and quick choices. */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      selected,
      defaultSelected = false,
      onSelectedChange,
      icon,
      showCheck = false,
      count,
      size,
      shape,
      fullWidth,
      className,
      children,
      onClick,
      role,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const [isOn, setOn] = useControllableState(selected, defaultSelected, onSelectedChange);
    const stateProps = role === "radio" || role === "checkbox" ? { "aria-checked": isOn } : { "aria-pressed": isOn };

    return (
      <button
        ref={ref}
        type="button"
        role={role}
        {...stateProps}
        className={cn(chipVariants({ size, shape, fullWidth }), className)}
        onClick={(e) => {
          onClick?.(e);
          if (!e.defaultPrevented) setOn(!isOn);
        }}
        data-testid={testId ?? "chip"}
        data-state={isOn ? "on" : "off"}
        {...props}
      >
        {showCheck && isOn ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : icon}
        {children}
        {count !== undefined && <span className="tabular-nums opacity-70">{count}</span>}
      </button>
    );
  }
);
Chip.displayName = "Chip";

export type ChipOption = {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
  count?: number;
  disabled?: boolean;
};

type ChipGroupBase = VariantProps<typeof chipGroupVariants> &
  Pick<ChipProps, "size" | "shape" | "showCheck"> & {
    options: ChipOption[];
    /** Optional visible title. */
    label?: ReactNode;
    labelPlacement?: "top" | "left";
    disabled?: boolean;
    /** Stretch chips to share the full width (column direction). */
    fullWidth?: boolean;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
  };

export type ChipGroupProps =
  | (ChipGroupBase & {
      type: "single";
      value?: string | null;
      defaultValue?: string | null;
      onValueChange?: (value: string | null) => void;
      /** Allow clicking the selected chip to unselect it. */
      deselectable?: boolean;
    })
  | (ChipGroupBase & {
      type?: "multiple";
      value?: string[];
      defaultValue?: string[];
      onValueChange?: (value: string[]) => void;
      /** Maximum chips that can be selected. */
      max?: number;
    });

/** A set of chips with single (radio-like) or multiple (checkbox-like) selection. */
export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>((props, ref) => {
  const {
    options,
    label,
    labelPlacement = "top",
    direction,
    gap,
    size,
    shape,
    showCheck,
    disabled,
    fullWidth,
    className,
    "aria-label": ariaLabel,
    "data-testid": testId,
  } = props;
  const isSingle = props.type === "single";
  const labelId = useId();
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  const [single, setSingle] = useControllableState<string | null>(
    isSingle ? props.value : undefined,
    isSingle ? (props.defaultValue ?? null) : null,
    isSingle ? props.onValueChange : undefined
  );
  const [multiple, setMultiple] = useControllableState<string[]>(
    !isSingle ? props.value : undefined,
    !isSingle ? (props.defaultValue ?? []) : [],
    !isSingle ? props.onValueChange : undefined
  );

  const isSelected = (value: string) => (isSingle ? single === value : multiple.includes(value));
  const max = !isSingle ? props.max : undefined;

  const toggle = (value: string) => {
    if (isSingle) {
      if (single === value) {
        if (props.deselectable) setSingle(null);
      } else setSingle(value);
    } else if (multiple.includes(value)) {
      setMultiple(multiple.filter((v) => v !== value));
    } else if (max === undefined || multiple.length < max) {
      setMultiple([...multiple, value]);
    }
  };

  // Single mode behaves like a radio group: arrow keys move and select.
  const onKeyDown = (index: number, e: KeyboardEvent<HTMLButtonElement>) => {
    if (!isSingle) return;
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    for (let step = 1; step <= options.length; step++) {
      const next = (index + dir * step + options.length) % options.length;
      if (!options[next].disabled) {
        buttons.current[next]?.focus();
        setSingle(options[next].value);
        break;
      }
    }
  };

  const focusIndex = isSingle ? Math.max(0, options.findIndex((o) => o.value === single)) : -1;

  return (
    <div
      ref={ref}
      className={cn(labelPlacement === "left" ? "flex items-center gap-3" : "flex flex-col gap-2", className)}
      data-testid={testId ?? `chip-group-${isSingle ? "single" : "multiple"}`}
    >
      {label && (
        <span id={labelId} className="font-sans text-body-sm font-medium text-foreground">
          {label}
        </span>
      )}
      <div
        role={isSingle ? "radiogroup" : "group"}
        aria-label={label ? undefined : ariaLabel}
        aria-labelledby={label ? labelId : undefined}
        className={chipGroupVariants({ direction, gap })}
      >
        {options.map((option, index) => {
          const selected = isSelected(option.value);
          const atMax = !isSingle && max !== undefined && multiple.length >= max && !selected;
          return (
            <Chip
              key={option.value}
              ref={(el) => {
                buttons.current[index] = el;
              }}
              role={isSingle ? "radio" : undefined}
              tabIndex={isSingle ? (index === focusIndex ? 0 : -1) : undefined}
              selected={selected}
              onSelectedChange={() => toggle(option.value)}
              onKeyDown={(e) => onKeyDown(index, e)}
              disabled={disabled || option.disabled || atMax}
              icon={option.icon}
              count={option.count}
              size={size}
              shape={shape}
              showCheck={showCheck}
              fullWidth={fullWidth}
              data-testid={`chip-${option.value}`}
            >
              {option.label}
            </Chip>
          );
        })}
      </div>
    </div>
  );
});
ChipGroup.displayName = "ChipGroup";
