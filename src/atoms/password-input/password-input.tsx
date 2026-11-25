"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { FieldIconButton } from "../../lib/field-icon-button";
import { Input } from "../input";
import type { InputProps } from "../input";

export type PasswordInputProps = Omit<InputProps, "type" | "rightElement"> & {
  /** Shows a lock icon on the left. */
  showLockIcon?: boolean;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showLockIcon = false, leftElement, disabled, "data-testid": testId, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    return (
      <Input
        ref={ref}
        type={visible ? "text" : "password"}
        autoComplete="current-password"
        disabled={disabled}
        leftElement={leftElement ?? (showLockIcon ? <Lock aria-hidden="true" className="h-4 w-4" /> : undefined)}
        rightElement={
          <FieldIconButton
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
            disabled={disabled}
          >
            {visible ? <EyeOff aria-hidden="true" className="h-4 w-4" /> : <Eye aria-hidden="true" className="h-4 w-4" />}
          </FieldIconButton>
        }
        data-testid={testId ?? "password-input"}
        {...props}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";
