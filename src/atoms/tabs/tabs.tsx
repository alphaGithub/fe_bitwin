"use client";

import { createContext, forwardRef, useContext } from "react";
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../../lib/cn";
import { tabsCountVariants, tabsListVariants, tabsTriggerVariants } from "./tabs.variants";
import type { TabsOrientation, TabsVariant } from "./tabs.variants";

type TabsStyle = { variant: TabsVariant; orientation: TabsOrientation; size: "sm" | "md" | "lg" };
const TabsStyleContext = createContext<TabsStyle>({ variant: "underline", orientation: "horizontal", size: "md" });

export type TabsProps = Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "orientation"> & {
  /** `underline` (default), `pill`, or `enclosed` (segmented look). */
  variant?: TabsVariant;
  orientation?: TabsOrientation;
  size?: "sm" | "md" | "lg";
  "data-testid"?: string;
};

const TabsRoot = forwardRef<ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ variant = "underline", orientation = "horizontal", size = "md", className, "data-testid": testId, ...props }, ref) => (
    <TabsStyleContext.Provider value={{ variant, orientation, size }}>
      <TabsPrimitive.Root
        ref={ref}
        orientation={orientation}
        className={cn(orientation === "vertical" ? "flex gap-6" : "flex flex-col gap-4", className)}
        data-testid={testId ?? `tabs-${variant}`}
        {...props}
      />
    </TabsStyleContext.Provider>
  )
);
TabsRoot.displayName = "Tabs";

export type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  /** Stretch triggers to fill the width. */
  fullWidth?: boolean;
};

const TabsList = forwardRef<ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ fullWidth, className, ...props }, ref) => {
    const { variant, orientation } = useContext(TabsStyleContext);
    return (
      <TabsPrimitive.List
        ref={ref}
        className={cn(tabsListVariants({ variant, orientation, fullWidth }), className)}
        {...props}
      />
    );
  }
);
TabsList.displayName = "Tabs.List";

export type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  icon?: ReactNode;
  /** Number shown in a small pill next to the label. */
  count?: number;
};

const TabsTrigger = forwardRef<ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ icon, count, className, children, ...props }, ref) => {
    const { variant, orientation, size } = useContext(TabsStyleContext);
    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(tabsTriggerVariants({ variant, orientation, size }), "group", className)}
        data-testid={`tab-trigger-${props.value}`}
        {...props}
      >
        {icon}
        {children}
        {count !== undefined && <span className={tabsCountVariants()}>{count}</span>}
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = "Tabs.Trigger";

const TabsContent = forwardRef<ElementRef<typeof TabsPrimitive.Content>, ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("min-w-0 flex-1 font-sans focus-visible:outline-none", className)}
      data-testid={`tab-content-${props.value}`}
      {...props}
    />
  )
);
TabsContent.displayName = "Tabs.Content";

/**
 * ```tsx
 * <Tabs defaultValue="orders">
 *   <Tabs.List>
 *     <Tabs.Trigger value="orders" count={12}>Orders</Tabs.Trigger>
 *     <Tabs.Trigger value="returns">Returns</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="orders">…</Tabs.Content>
 *   <Tabs.Content value="returns">…</Tabs.Content>
 * </Tabs>
 * ```
 */
export const Tabs = Object.assign(TabsRoot, { List: TabsList, Trigger: TabsTrigger, Content: TabsContent });
export { TabsList, TabsTrigger, TabsContent };
