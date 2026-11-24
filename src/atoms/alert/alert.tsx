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
  ({ tone, title, icon, onDismiss, actions, className, children, "data-testid": testId, ...props }, ref) => {
    const DefaultIcon = defaultIcons[tone ?? "info"];
    const isUrgent = tone === "error" || tone === "warning";

    return (
      <div
        ref={ref}
        role={isUrgent ? "alert" : "status"}
        className={cn(alertVariants({ tone }), className)}
        data-testid={testId ?? `alert-${tone ?? "info"}`}
        {...props}
      >
        {icon !== false && (
          <span className="mt-0.5 shrink-0">{icon ?? <DefaultIcon aria-hidden="true" className="h-5 w-5" />}</span>
        )}
        <div className="min-w-0 flex-1 space-y-1">
          {title && <p className="text-body-sm font-semibold">{title}</p>}
          {children && <div className="text-body-sm opacity-90">{children}</div>}
          {actions && <div className="flex flex-wrap gap-2 pt-2">{actions}</div>}
        </div>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label="Dismiss"
            className="-m-1 h-7 w-7 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";
