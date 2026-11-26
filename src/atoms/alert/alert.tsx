"use client";

import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";
import { alertVariants } from "./alert.variants";

const defaultIcons: Record<NonNullable<AlertProps["tone"]>, LucideIcon> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  neutral: Info,
  primary: Info,
  dark: Info,
};

export type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> &
  VariantProps<typeof alertVariants> & {
    title?: ReactNode;
    /** Custom icon element, or `false` to hide the icon. */
    icon?: ReactNode | false;
    /** Shows a close button that calls this. */
    onDismiss?: () => void;
    /** Buttons/links shown under the content. */
    actions?: ReactNode;
    "data-testid"?: string;
  };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ tone, variant, title, icon, onDismiss, actions, className, children, "data-testid": testId, ...props }, ref) => {
    const DefaultIcon = defaultIcons[tone ?? "info"];
    const isUrgent = tone === "error" || tone === "warning";
    const isBanner = variant === "banner";

    return (
      <div
        ref={ref}
        role={isUrgent ? "alert" : "status"}
        className={cn(alertVariants({ tone, variant }), className)}
        data-testid={testId ?? `alert-${tone ?? "info"}`}
        {...props}
      >
        {icon !== false && (
          <span className={cn("shrink-0", !isBanner && "mt-0.5")}>
            {icon ?? <DefaultIcon aria-hidden="true" className={isBanner ? "h-4 w-4" : "h-5 w-5"} />}
          </span>
        )}
        {isBanner ? (
          <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-body-sm">
            {title && <span className="font-semibold">{title}</span>}
            {children && <span className="opacity-90">{children}</span>}
            {actions && <span className="flex flex-wrap gap-2">{actions}</span>}
          </div>
        ) : (
          <div className="min-w-0 flex-1 space-y-1">
            {title && <p className="text-body-sm font-semibold">{title}</p>}
            {children && <div className="text-body-sm opacity-90">{children}</div>}
            {actions && <div className="flex flex-wrap gap-2 pt-2">{actions}</div>}
          </div>
        )}
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className={cn(
              "-m-1 h-7 w-7 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isBanner && "absolute right-3 top-1/2 m-0 -translate-y-1/2"
            )}
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";
