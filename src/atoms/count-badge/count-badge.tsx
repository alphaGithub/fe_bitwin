import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { countBadgeVariants } from "./count-badge.variants";

export type CountBadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> &
  Omit<VariantProps<typeof countBadgeVariants>, "attached"> & {
    count?: number;
    /** Above this shows "max+". */
    max?: number;
    /** Show the badge when count is 0. */
    showZero?: boolean;
    /** When given, the badge is pinned to this element's top-right corner (e.g. a bell icon). */
    children?: ReactNode;
    /** Screen-reader text, e.g. "unread notifications". */
    label?: string;
    "data-testid"?: string;
  };

/** Number bubble (e.g. unread count). Wrap an element to pin it to the corner. */
export const CountBadge = forwardRef<HTMLSpanElement, CountBadgeProps>(
  (
    { count = 0, max = 99, showZero = false, dot, tone, size, label, children, className, "data-testid": testId, ...props },
    ref
  ) => {
    const hidden = !dot && count === 0 && !showZero;
    const text = count > max ? `${max}+` : String(count);
    const srText = dot ? (label ?? "New") : `${count}${label ? ` ${label}` : ""}`;

    const badge = hidden ? null : (
      <span
        ref={ref}
        className={cn(countBadgeVariants({ tone, size, dot, attached: !!children }), className)}
        data-testid={testId ?? "count-badge"}
        {...props}
      >
        {!dot && <span aria-hidden="true">{text}</span>}
        <span className="sr-only">{srText}</span>
      </span>
    );

    if (!children) return badge;
    return (
      <span className="relative inline-flex">
        {children}
        {badge}
      </span>
    );
  }
);
CountBadge.displayName = "CountBadge";
