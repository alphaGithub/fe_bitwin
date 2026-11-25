import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { FlexItem } from "../flex";
import { flexboxVariants } from "./flexbox.variants";

export type FlexboxProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof flexboxVariants> & {
    "data-testid"?: string;
  };

const FlexboxRoot = forwardRef<HTMLDivElement, FlexboxProps>(
  ({ direction, justify, align, gutter, mt, mb, nowrap, className, "data-testid": testId, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(flexboxVariants({ direction, justify, align, gutter, mt, mb, nowrap }), className)}
      data-testid={testId ?? "flexbox"}
      {...props}
    />
  )
);
FlexboxRoot.displayName = "Flexbox";

/**
 * **Migration helper** with the same props as Alfred's rsuite-based `Flexbox`, so screens can switch
 * imports first and move to `Flex` later. Prefer `Flex` for new code.
 *
 * ```tsx
 * <Flexbox justify="space-between" align="middle" gutter="sm">
 *   <Flexbox.Item colspan={12}>…</Flexbox.Item>
 *   <Flexbox.Item colspan={12}>…</Flexbox.Item>
 * </Flexbox>
 * ```
 */
export const Flexbox = Object.assign(FlexboxRoot, { Item: FlexItem });
