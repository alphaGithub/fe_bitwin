"use client";

import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import { tagRemoveVariants, tagVariants } from "./tag.variants";

export type TagProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof tagVariants> & {
    /** Leading icon or avatar. */
    icon?: ReactNode;
    /** Shows an × button that calls this. */
    onRemove?: () => void;
    /** Accessible label for the remove button. Defaults to "Remove <text>". */
    removeLabel?: string;
    "data-testid"?: string;
  };

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    { tone, size, disabled, icon, onRemove, removeLabel, className, children, "data-testid": testId, ...props },
    ref
  ) => {
    const text = typeof children === "string" ? children : undefined;

    return (
      <span
        ref={ref}
        className={cn(tagVariants({ tone, size, disabled }), className)}
        data-testid={testId ?? `tag-${text ?? tone ?? "neutral"}`}
        aria-disabled={disabled || undefined}
        {...props}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span className="truncate">{children}</span>
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            disabled={disabled ?? undefined}
            aria-label={removeLabel ?? (text ? `Remove ${text}` : "Remove")}
            className={tagRemoveVariants({ size })}
          >
            <X aria-hidden="true" className={size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"} />
          </button>
        )}
      </span>
    );
  }
);
Tag.displayName = "Tag";
