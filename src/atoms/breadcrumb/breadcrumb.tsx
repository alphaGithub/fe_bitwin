"use client";

import { forwardRef, Fragment, useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/cn";
import { Link } from "../link";
import { breadcrumbItemVariants, breadcrumbVariants } from "./breadcrumb.variants";

export type BreadcrumbItem = {
  label: ReactNode;
  /** Renders as a link (via BitwinUIProvider's router link if set). */
  href?: string;
  /** Renders as a button when there's no href. */
  onClick?: () => void;
  icon?: ReactNode;
};

export type BreadcrumbProps = Omit<HTMLAttributes<HTMLElement>, "children"> &
  VariantProps<typeof breadcrumbVariants> & {
    items: BreadcrumbItem[];
    separator?: ReactNode;
    /** Collapse the middle into "…" when there are more items than this. */
    maxItems?: number;
    "data-testid"?: string;
  };

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    { items, separator, maxItems, size, className, "aria-label": ariaLabel = "Breadcrumb", "data-testid": testId, ...props },
    ref
  ) => {
    const [expanded, setExpanded] = useState(false);
    const shouldCollapse = !expanded && maxItems !== undefined && items.length > maxItems && maxItems >= 2;
    const visible: Array<BreadcrumbItem | "ellipsis"> = shouldCollapse
      ? [items[0], "ellipsis", ...items.slice(items.length - (maxItems - 1))]
      : items;

    const sep = separator ?? <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-foreground-muted" />;

    return (
      <nav ref={ref} aria-label={ariaLabel} data-testid={testId ?? "breadcrumb"} {...props}>
        <ol className={cn(breadcrumbVariants({ size }), className)}>
          {visible.map((item, index) => {
            const isLast = index === visible.length - 1;
            return (
              <Fragment key={index}>
                <li className={breadcrumbItemVariants({ current: isLast })}>
                  {item === "ellipsis" ? (
                    <button
                      type="button"
                      onClick={() => setExpanded(true)}
                      aria-label="Show all breadcrumbs"
                      className="rounded-sm px-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      …
                    </button>
                  ) : isLast ? (
                    <span aria-current="page" className="inline-flex items-center gap-1.5">
                      {item.icon}
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <Link href={item.href} tone="muted" underline="hover" onClick={item.onClick}>
                      {item.icon}
                      {item.label}
                    </Link>
                  ) : item.onClick ? (
                    <button
                      type="button"
                      onClick={item.onClick}
                      className="inline-flex items-center gap-1.5 rounded-sm hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      {item.icon}
                      {item.label}
                    </span>
                  )}
                </li>
                {!isLast && (
                  <li role="presentation" aria-hidden="true" className="inline-flex">
                    {sep}
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";
