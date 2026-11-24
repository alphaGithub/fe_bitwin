"use client";

import { forwardRef } from "react";
import type { ReactElement, ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { tooltipArrowVariants, tooltipContentVariants } from "./tooltip.variants";

/**
 * Optional: wrap your app once to share hover-delay behavior across all tooltips.
 * Each `Tooltip` also works on its own without it.
 */
export const TooltipProvider = TooltipPrimitive.Provider;

export type TooltipProps = VariantProps<typeof tooltipContentVariants> & {
  /** What appears in the tooltip. */
  content: ReactNode;
  /** The element that triggers the tooltip. Must accept a ref (Button, Icon button, etc.). */
  children: ReactElement;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  /** Milliseconds before showing. */
  delay?: number;
  showArrow?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  className?: string;
  "data-testid"?: string;
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      children,
      side = "top",
      align = "center",
      delay = 200,
      showArrow = true,
      tone,
      open,
      defaultOpen,
      onOpenChange,
      disabled,
      className,
      "data-testid": testId,
    },
    ref
  ) => {
    if (disabled || content === null || content === undefined || content === "") return children;

    return (
      <TooltipPrimitive.Provider delayDuration={delay}>
        <TooltipPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
          <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
          <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
              ref={ref}
              side={side}
              align={align}
              sideOffset={6}
              className={cn(tooltipContentVariants({ tone }), className)}
              data-testid={testId ?? `tooltip-content-${tone ?? "dark"}`}
            >
              {content}
              {showArrow && <TooltipPrimitive.Arrow className={tooltipArrowVariants({ tone })} />}
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  }
);
Tooltip.displayName = "Tooltip";
