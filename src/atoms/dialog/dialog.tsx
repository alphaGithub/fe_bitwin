"use client";

import { forwardRef } from "react";
import type { ReactElement, ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";
import { dialogContentVariants, dialogOverlayVariants } from "./dialog.variants";

export type DialogProps = VariantProps<typeof dialogContentVariants> & {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Element that opens the dialog, e.g. `<Button>Edit</Button>`. Optional when controlled. */
  trigger?: ReactElement;
  title?: ReactNode;
  description?: ReactNode;
  /** Buttons area, right-aligned at the bottom. */
  footer?: ReactNode;
  children?: ReactNode;
  /** Hide the × button. */
  hideCloseButton?: boolean;
  /** Prevent closing by clicking outside / pressing Escape (e.g. while saving). */
  preventClose?: boolean;
  /** Required for accessibility when there's no visible title. */
  "aria-label"?: string;
  className?: string;
  bodyClassName?: string;
  "data-testid"?: string;
};

const DialogRoot = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      open,
      defaultOpen,
      onOpenChange,
      trigger,
      title,
      description,
      footer,
      children,
      hideCloseButton,
      preventClose,
      placement,
      size,
      className,
      bodyClassName,
      "aria-label": ariaLabel,
      "data-testid": testId,
    },
    ref
  ) => {
    const block = (e: Event) => {
      if (preventClose) e.preventDefault();
    };

    return (
      <DialogPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
        {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className={dialogOverlayVariants()} />
          <DialogPrimitive.Content
            ref={ref}
            // Without a description, explicitly opt out so Radix doesn't warn.
            {...(!description && { "aria-describedby": undefined })}
            onPointerDownOutside={block}
            onEscapeKeyDown={block}
            className={cn(dialogContentVariants({ placement, size }), className)}
            data-testid={testId ?? "dialog"}
          >
            {(title || !hideCloseButton) && (
              <div className={cn("flex items-start gap-4 px-6 pt-5", !title && "absolute right-0 top-0 z-10")}>
                {title && (
                  <div className="min-w-0 flex-1 space-y-1">
                    <DialogPrimitive.Title className="text-h4 text-foreground">{title}</DialogPrimitive.Title>
                    {description && (
                      <DialogPrimitive.Description className="text-body-sm text-foreground-muted">
                        {description}
                      </DialogPrimitive.Description>
                    )}
                  </div>
                )}
                {!hideCloseButton && (
                  <DialogPrimitive.Close
                    aria-label="Close"
                    disabled={preventClose}
                    className="-mr-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                  >
                    <X aria-hidden="true" className="h-5 w-5" />
                  </DialogPrimitive.Close>
                )}
              </div>
            )}
            {!title && <DialogPrimitive.Title className="sr-only">{ariaLabel ?? "Dialog"}</DialogPrimitive.Title>}
            {!title && description && (
              <DialogPrimitive.Description className="sr-only">{description}</DialogPrimitive.Description>
            )}
            <div className={cn("min-h-0 flex-1 overflow-y-auto px-6 py-5 text-body-sm", bodyClassName)}>{children}</div>
            {footer && (
              <div className="flex flex-wrap items-center justify-end gap-2 border-t border-border px-6 py-4">{footer}</div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }
);
DialogRoot.displayName = "Dialog";

/**
 * Modal dialog (or side drawer with `placement="right"`).
 *
 * ```tsx
 * <Dialog
 *   trigger={<Button>Delete</Button>}
 *   title="Delete product?"
 *   description="This can't be undone."
 *   footer={<><Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close><Button variant="danger">Delete</Button></>}
 * />
 * ```
 */
export const Dialog = Object.assign(DialogRoot, { Close: DialogPrimitive.Close });
export const DialogClose = DialogPrimitive.Close;
