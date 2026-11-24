import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { fieldVariants } from "../../lib/field-variants";
import { inputAdornmentVariants } from "./input.variants";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof fieldVariants> & {
    /** Content inside the field on the left, e.g. an `<Icon />`. */
    leftElement?: ReactNode;
    /** Content inside the field on the right, e.g. a unit or icon. */
    rightElement?: ReactNode;
    "data-testid"?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { size, invalid, leftElement, rightElement, className, type = "text", "data-testid": testId, ...props },
    ref
  ) => {
    const input = (
      <input
        ref={ref}
        type={type}
        aria-invalid={invalid || undefined}
        className={cn(
          fieldVariants({ size, invalid }),
          leftElement && "pl-10",
          rightElement && "pr-10",
          !leftElement && !rightElement && className
        )}
        data-testid={testId ?? (props.id ? `input-${props.id}` : "input")}
        {...props}
      />
    );

    if (!leftElement && !rightElement) return input;

    return (
      <div className={cn("relative w-full", className)}>
        {leftElement && <span className={inputAdornmentVariants({ side: "left" })}>{leftElement}</span>}
        {input}
        {rightElement && <span className={inputAdornmentVariants({ side: "right" })}>{rightElement}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";
