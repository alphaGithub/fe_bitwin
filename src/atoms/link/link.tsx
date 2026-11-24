"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ElementType } from "react";
import type { VariantProps } from "class-variance-authority";
import { ExternalLink } from "lucide-react";
import { cn } from "../../lib/cn";
import { useLinkComponent } from "../../lib/link";
import { linkVariants } from "./link.variants";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkVariants> & {
    href: string;
    /** Opens in a new tab with safe `rel` and shows an external icon. */
    external?: boolean;
    /** Router link to render with. Falls back to BitwinUIProvider's, then `<a>`. */
    as?: ElementType;
    "data-testid"?: string;
  };

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, external, as, tone, underline, size, className, children, "data-testid": testId, ...props }, ref) => {
    const contextLink = useLinkComponent();
    // External links always use a plain anchor — router links are for in-app navigation.
    const Component = external ? "a" : (as ?? contextLink ?? "a");

    return (
      <Component
        ref={ref}
        href={href}
        className={cn(linkVariants({ tone, underline, size }), className)}
        data-testid={testId ?? "link"}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
        {external && (
          <>
            <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </>
        )}
      </Component>
    );
  }
);
Link.displayName = "Link";
