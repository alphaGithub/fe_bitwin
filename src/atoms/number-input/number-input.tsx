"use client";

import { forwardRef, useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import { Minus, Plus } from "lucide-react";
import { FieldIconButton } from "../../lib/field-icon-button";
import { useControllableState } from "../../lib/use-controllable-state";
import { Input } from "../input";
import type { InputProps } from "../input";

export type NumberInputProps = Omit<
  InputProps,
  "type" | "value" | "defaultValue" | "onChange" | "min" | "max" | "step" | "leftElement" | "rightElement"
> & {
  /** `null` = empty. */
  value?: number | null;
  defaultValue?: number | null;
  onValueChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Decimal places to round to. Defaults to the step's precision. */
  precision?: number;
  /** Hides the −/+ buttons. */
  hideControls?: boolean;
  /** Text after the number, e.g. "kg" or "%". */
  suffix?: string;
  /** Text before the number, e.g. "₹". */
  prefix?: string;
};

const decimals = (n: number) => (String(n).split(".")[1] ?? "").length;

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      value,
      defaultValue = null,
      onValueChange,
      min = Number.NEGATIVE_INFINITY,
      max = Number.POSITIVE_INFINITY,
      step = 1,
      precision,
      hideControls,
      suffix,
      prefix,
      disabled,
      readOnly,
      onBlur,
      onKeyDown,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const [current, setCurrent] = useControllableState<number | null>(value, defaultValue, onValueChange);
    const [draft, setDraft] = useState(current === null ? "" : String(current));
    const places = precision ?? decimals(step);

    // Keep the text in sync when the value changes from outside (controlled or +/- buttons).
    useEffect(() => {
      setDraft(current === null ? "" : String(current));
    }, [current]);

    const normalize = (n: number) => Math.min(max, Math.max(min, Number(n.toFixed(places))));

    const commit = (text: string) => {
      const trimmed = text.trim();
      if (trimmed === "" || trimmed === "-") {
        setCurrent(null);
        setDraft("");
        return;
      }
      const parsed = Number(trimmed);
      if (Number.isNaN(parsed)) {
        setDraft(current === null ? "" : String(current));
        return;
      }
      const next = normalize(parsed);
      setCurrent(next);
      setDraft(String(next));
    };

    const stepBy = (direction: 1 | -1) => {
      const base = current ?? (Number.isFinite(min) ? min : 0);
      setCurrent(normalize(base + direction * step));
    };

    const canDecrement = !disabled && !readOnly && (current === null || current > min);
    const canIncrement = !disabled && !readOnly && (current === null || current < max);

    return (
      <Input
        ref={ref}
        type="text"
        inputMode={places > 0 ? "decimal" : "numeric"}
        role="spinbutton"
        aria-valuemin={Number.isFinite(min) ? min : undefined}
        aria-valuemax={Number.isFinite(max) ? max : undefined}
        aria-valuenow={current ?? undefined}
        value={draft}
        disabled={disabled}
        readOnly={readOnly}
        onChange={(e) => {
          if (/^-?\d*\.?\d*$/.test(e.target.value)) setDraft(e.target.value);
        }}
        onBlur={(e) => {
          commit(draft);
          onBlur?.(e);
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(e);
          if (e.key === "ArrowUp") {
            e.preventDefault();
            if (canIncrement) stepBy(1);
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (canDecrement) stepBy(-1);
          } else if (e.key === "Enter") {
            commit(draft);
          }
        }}
        className="tabular-nums"
        leftElement={
          hideControls ? (
            prefix ? <span className="text-body-sm">{prefix}</span> : undefined
          ) : (
            <FieldIconButton onClick={() => stepBy(-1)} disabled={!canDecrement} aria-label="Decrease" tabIndex={-1}>
              <Minus aria-hidden="true" className="h-4 w-4" />
            </FieldIconButton>
          )
        }
        rightElement={
          hideControls ? (
            suffix ? <span className="text-body-sm">{suffix}</span> : undefined
          ) : (
            <span className="pointer-events-auto flex items-center gap-1">
              {suffix && <span className="text-body-sm">{suffix}</span>}
              <FieldIconButton onClick={() => stepBy(1)} disabled={!canIncrement} aria-label="Increase" tabIndex={-1}>
                <Plus aria-hidden="true" className="h-4 w-4" />
              </FieldIconButton>
            </span>
          )
        }
        data-testid={testId ?? "number-input"}
        {...props}
      />
    );
  }
);
NumberInput.displayName = "NumberInput";
