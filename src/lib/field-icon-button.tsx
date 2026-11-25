import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "./cn";

/** Small clickable icon button placed inside a field (clear, show password, +/-). */
export const FieldIconButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "pointer-events-auto inline-flex h-6 w-6 items-center justify-center rounded-sm text-foreground-muted " +
          "transition-colors hover:bg-surface-muted hover:text-foreground " +
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
FieldIconButton.displayName = "FieldIconButton";
