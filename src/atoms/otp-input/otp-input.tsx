"use client";

import { forwardRef, useRef } from "react";
import type { ClipboardEvent, KeyboardEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/use-controllable-state";
import { otpCellVariants } from "./otp-input.variants";

export type OTPInputProps = VariantProps<typeof otpCellVariants> & {
  /** Number of boxes. */
  length?: number;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** Fires once every box is filled. */
  onComplete?: (value: string) => void;
  /** `numeric` allows digits only. */
  type?: "numeric" | "alphanumeric";
  /** Masks characters like a password. */
  mask?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
  /** Accessible label for the group, e.g. "Verification code". */
  "aria-label"?: string;
  className?: string;
  "data-testid"?: string;
};

export const OTPInput = forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      length = 6,
      value,
      defaultValue = "",
      onValueChange,
      onComplete,
      type = "numeric",
      mask,
      disabled,
      autoFocus,
      size,
      invalid,
      className,
      "aria-label": ariaLabel = "One-time code",
      "data-testid": testId,
    },
    ref
  ) => {
    const [code, setCode] = useControllableState(value, defaultValue, onValueChange);
    const inputs = useRef<Array<HTMLInputElement | null>>([]);
    const allowed = type === "numeric" ? /^[0-9]$/ : /^[a-zA-Z0-9]$/;
    const chars = Array.from({ length }, (_, i) => code[i] ?? "");

    const focusAt = (index: number) => {
      const el = inputs.current[Math.max(0, Math.min(length - 1, index))];
      el?.focus();
      el?.select();
    };

    const update = (next: string[]) => {
      const joined = next.join("").slice(0, length);
      setCode(joined);
      if (joined.length === length && next.every(Boolean)) onComplete?.(joined);
    };

    const handleInput = (index: number, raw: string) => {
      const char = raw.slice(-1);
      if (!allowed.test(char)) return;
      const next = [...chars];
      next[index] = type === "alphanumeric" ? char.toUpperCase() : char;
      update(next);
      if (index < length - 1) focusAt(index + 1);
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        const next = [...chars];
        if (next[index]) {
          next[index] = "";
          update(next);
        } else if (index > 0) {
          next[index - 1] = "";
          update(next);
          focusAt(index - 1);
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        focusAt(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        focusAt(index + 1);
      }
    };

    const handlePaste = (index: number, e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/\s/g, "")
        .split("")
        .filter((c) => allowed.test(c));
      if (!pasted.length) return;
      const next = [...chars];
      pasted.slice(0, length - index).forEach((c, i) => {
        next[index + i] = type === "alphanumeric" ? c.toUpperCase() : c;
      });
      update(next);
      focusAt(Math.min(index + pasted.length, length - 1));
    };

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        className={cn("inline-flex gap-2", className)}
        data-testid={testId ?? "otp-input"}
      >
        {chars.map((char, i) => (
          <input
            key={i}
            ref={(el) => {
              inputs.current[i] = el;
            }}
            type={mask ? "password" : "text"}
            inputMode={type === "numeric" ? "numeric" : "text"}
            autoComplete={i === 0 ? "one-time-code" : "off"}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus && i === 0}
            maxLength={2}
            value={char}
            disabled={disabled}
            aria-label={`Digit ${i + 1} of ${length}`}
            aria-invalid={invalid || undefined}
            className={otpCellVariants({ size, invalid })}
            onChange={(e) => handleInput(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={(e) => handlePaste(i, e)}
            onFocus={(e) => e.target.select()}
            data-testid={`otp-input-cell-${i}`}
          />
        ))}
      </div>
    );
  }
);
OTPInput.displayName = "OTPInput";
