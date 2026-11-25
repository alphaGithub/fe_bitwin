import { forwardRef } from "react";
import type { CSSProperties, HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import type { LayoutElement } from "../../lib/layout-variants";
import { flexItemVariants, flexVariants } from "./flex.variants";

/** Number of columns in a full row for `Flex.Item colspan`. */
export const FLEX_COLUMNS = 24;

export type FlexProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof flexVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
  };

const FlexRoot = forwardRef<HTMLElement, FlexProps>(
  ({ as: Component = "div", inline, direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(flexVariants({ inline, direction, gap, align, justify, wrap }), className)}
      data-testid={testId ?? "flex"}
      {...props}
    />
  )
);
FlexRoot.displayName = "Flex";

export type FlexItemProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof flexItemVariants> & {
    as?: LayoutElement;
    /** Width in columns out of 24 (12 = half, 8 = third, 6 = quarter). Accounts for the parent's `gap`. */
    colspan?: number;
    /** Columns to push the item right by (out of 24). */
    offset?: number;
    /** `true` = flex-grow: 1, or a custom grow factor. */
    grow?: boolean | number;
    /** `false` = never shrink below its basis. */
    shrink?: boolean | number;
    /** Starting size before grow/shrink, e.g. `200`, `"30%"`, `"12rem"`. */
    basis?: CSSProperties["flexBasis"];
    order?: number;
    "data-testid"?: string;
  };

/** Width of `span` columns minus this item's share of the gaps between items. */
function columnWidth(span: number): string {
  const ratio = Math.min(Math.max(span, 0), FLEX_COLUMNS) / FLEX_COLUMNS;
  const percent = +(ratio * 100).toFixed(4);
  const gapShare = +(1 - ratio).toFixed(4);
  return `calc(${percent}% - var(--flex-gap, 0px) * ${gapShare})`;
}

function toFactor(value: boolean | number | undefined, whenTrue: number): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "number") return value;
  return value ? whenTrue : 0;
}

const FlexItem = forwardRef<HTMLElement, FlexItemProps>(
  (
    { as: Component = "div", colspan, offset, grow, shrink, basis, order, alignSelf, className, style, "data-testid": testId, ...props },
    ref
  ) => {
    const itemStyle: CSSProperties = {
      ...(colspan !== undefined && { flex: `0 0 ${columnWidth(colspan)}`, maxWidth: columnWidth(colspan) }),
      ...(offset !== undefined && { marginLeft: `calc(${+((offset / FLEX_COLUMNS) * 100).toFixed(4)}% + var(--flex-gap, 0px) * ${+(offset / FLEX_COLUMNS).toFixed(4)})` }),
      ...(grow !== undefined && { flexGrow: toFactor(grow, 1) }),
      ...(shrink !== undefined && { flexShrink: toFactor(shrink, 1) }),
      ...(basis !== undefined && { flexBasis: basis }),
      ...(order !== undefined && { order }),
      ...style,
    };

    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(flexItemVariants({ alignSelf }), className)}
        style={itemStyle}
        data-testid={testId ?? (colspan !== undefined ? `flex-item-${colspan}` : "flex-item")}
        {...props}
      />
    );
  }
);
FlexItem.displayName = "Flex.Item";

/**
 * Full-control flexbox (row by default). For simple spaced lists, prefer `Stack`.
 *
 * ```tsx
 * <Flex gap="md">
 *   <Flex.Item colspan={16}>Main</Flex.Item>
 *   <Flex.Item colspan={8}>Sidebar</Flex.Item>
 * </Flex>
 * ```
 */
export const Flex = Object.assign(FlexRoot, { Item: FlexItem });
export { FlexItem };
