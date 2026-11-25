import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { cardVariants } from "./card.variants";

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants> & {
    "data-testid"?: string;
  };

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, interactive, className, "data-testid": testId, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      data-testid={testId ?? "card"}
      {...props}
    />
  )
);
CardRoot.displayName = "Card";

export type CardHeaderProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  title?: ReactNode;
  description?: ReactNode;
  /** Right-aligned slot, e.g. a menu button or badge. */
  action?: ReactNode;
};

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, description, action, className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4 flex items-start justify-between gap-4", className)} {...props}>
      <div className="min-w-0 space-y-1">
        {title && <h3 className="text-body-lg font-semibold text-foreground">{title}</h3>}
        {description && <p className="text-body-sm text-foreground-muted">{description}</p>}
        {children}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("text-body-sm", className)} {...props} />
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mt-5 flex items-center justify-end gap-2 border-t border-border pt-4", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

/**
 * Surface container. Sub-parts are available both ways:
 * `<Card.Header />` or the named `CardHeader` export.
 */
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});
