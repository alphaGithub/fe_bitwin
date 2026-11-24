import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { badgeDotVariants, badgeVariants } from "./badge.variants";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    /** Shows a small colored dot before the text. */
    dot?: boolean;
    icon?: ReactNode;
    "data-testid"?: string;
  };

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ tone, appearance, size, dot, icon, className, children, "data-testid": testId, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ tone, appearance, size }), className)}
      data-testid={testId ?? `badge-${tone ?? "neutral"}`}
      {...props}
    >
      {dot && <span aria-hidden="true" className={badgeDotVariants()} />}
      {icon}
      {children}
    </span>
  )
);
Badge.displayName = "Badge";
