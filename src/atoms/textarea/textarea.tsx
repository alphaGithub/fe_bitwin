import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { fieldVariants } from "../../lib/field-variants";
import { textareaVariants } from "./textarea.variants";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<VariantProps<typeof fieldVariants>, "size"> &
  VariantProps<typeof textareaVariants> & {
    "data-testid"?: string;
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ invalid, resize, className, rows = 4, "data-testid": testId, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cn(fieldVariants({ size: "md", invalid }), textareaVariants({ resize }), className)}
      data-testid={testId ?? (props.id ? `textarea-${props.id}` : "textarea")}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
