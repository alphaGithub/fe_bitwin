"use client";

import { createContext, forwardRef, useContext } from "react";
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/cn";
import {
  accordionContentVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionVariants,
} from "./accordion.variants";
import type { AccordionVariant } from "./accordion.variants";

type AccordionStyle = { variant: AccordionVariant; size: "sm" | "md"; iconPosition: "left" | "right" };
const AccordionStyleContext = createContext<AccordionStyle>({ variant: "bordered", size: "md", iconPosition: "right" });

type RootProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

export type AccordionProps = RootProps & {
  variant?: AccordionVariant;
  size?: "sm" | "md";
  /** Chevron on the left or right of the header. */
  iconPosition?: "left" | "right";
  "data-testid"?: string;
};

const AccordionRoot = forwardRef<ElementRef<typeof AccordionPrimitive.Root>, AccordionProps>(
  ({ variant = "bordered", size = "md", iconPosition = "right", className, "data-testid": testId, ...props }, ref) => (
    <AccordionStyleContext.Provider value={{ variant, size, iconPosition }}>
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(accordionVariants({ variant }), className)}
        data-testid={testId ?? `accordion-${variant}`}
        {...(props as RootProps)}
      />
    </AccordionStyleContext.Provider>
  )
);
AccordionRoot.displayName = "Accordion";

const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const { variant } = useContext(AccordionStyleContext);
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(accordionItemVariants({ variant }), className)}
      data-testid={`accordion-item-${props.value}`}
      {...props}
    />
  );
});
AccordionItem.displayName = "Accordion.Item";

export type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
  /** Leading icon. */
  icon?: ReactNode;
  /** Secondary text under the title. */
  description?: ReactNode;
  /** Right-side slot before the chevron, e.g. a Badge or count. */
  extra?: ReactNode;
};

const AccordionTrigger = forwardRef<ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
  ({ icon, description, extra, className, children, ...props }, ref) => {
    const { variant, size, iconPosition } = useContext(AccordionStyleContext);
    const chevron = (
      <ChevronDown
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-normal group-data-[state=open]:rotate-180"
      />
    );
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(accordionTriggerVariants({ variant, size }), className)}
          {...props}
        >
          {iconPosition === "left" && chevron}
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="flex min-w-0 flex-1 flex-col gap-0.5">
            <span>{children}</span>
            {description && <span className="text-body-sm font-normal text-foreground-muted">{description}</span>}
          </span>
          {extra && <span className="shrink-0">{extra}</span>}
          {iconPosition === "right" && chevron}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = "Accordion.Trigger";

const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { variant } = useContext(AccordionStyleContext);
  return (
    <AccordionPrimitive.Content ref={ref} className={accordionContentVariants({ variant })} {...props}>
      <div className={cn("pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = "Accordion.Content";

/**
 * ```tsx
 * <Accordion type="single" collapsible defaultValue="shipping">
 *   <Accordion.Item value="shipping">
 *     <Accordion.Trigger>Shipping</Accordion.Trigger>
 *     <Accordion.Content>Ships in 2 days.</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion>
 * ```
 * `type="multiple"` lets several items stay open.
 */
export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
export { AccordionItem, AccordionTrigger, AccordionContent };
