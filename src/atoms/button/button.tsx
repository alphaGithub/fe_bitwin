"use client";

import { forwardRef } from "react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode, Ref } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { useLinkComponent } from "../../lib/link";
import { buttonVariants } from "./button.variants";

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  as?: undefined;
};

type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /** Router link component (e.g. `next/link`). Falls back to BitwinUIProvider's, then `<a>`. */
  as?: ElementType;
};

export type ButtonProps = (ButtonAsButtonProps | ButtonAsLinkProps) &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    "data-testid"?: string;
  };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      fullWidth,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      href,
      as,
      "data-testid": dataTestId,
      ...props
    },
    ref
  ) => {
    const contextLink = useLinkComponent();
    const classes = cn(buttonVariants({ variant, size, rounded, fullWidth }), isLoading && "relative", className);
    const testId = dataTestId ?? `button-${variant ?? "primary"}`;

    const content = (
      <>
        {isLoading && (
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          </span>
        )}
        <span className={cn("inline-flex items-center gap-2", isLoading && "invisible")}>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </>
    );

    if (href !== undefined) {
      const Component = as ?? contextLink ?? "a";
      return (
        <Component
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          data-testid={testId}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Component>
      );
    }

    const { type = "button", disabled, ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={classes}
        data-testid={testId}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
