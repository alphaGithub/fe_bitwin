"use client";
import {
  BitwinUIProvider,
  useLinkComponent
} from "./chunk-ICXWWKLX.mjs";

// src/atoms/text/text.tsx
import { forwardRef } from "react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
var twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "h4", "body-lg", "body", "body-sm", "caption"] }]
    }
  }
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/atoms/text/text.variants.ts
import { cva } from "class-variance-authority";
var textVariants = cva("font-sans", {
  variants: {
    size: {
      lg: "text-body-lg",
      md: "text-body",
      sm: "text-body-sm",
      xs: "text-caption"
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold"
    },
    tone: {
      default: "text-foreground",
      muted: "text-foreground-muted",
      primary: "text-primary-600",
      success: "text-success-700",
      warning: "text-warning-700",
      error: "text-error-600",
      inherit: "text-inherit"
    },
    align: { left: "text-left", center: "text-center", right: "text-right" },
    truncate: { true: "truncate", false: "" }
  },
  defaultVariants: { size: "md", weight: "regular", tone: "default", truncate: false }
});

// src/atoms/text/text.tsx
import { jsx } from "react/jsx-runtime";
var Text = forwardRef(
  ({ as: Component = "p", className, size, weight, tone, align, truncate, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx(
    Component,
    {
      ref,
      className: cn(textVariants({ size, weight, tone, align, truncate }), className),
      "data-testid": testId ?? "text",
      ...props
    }
  )
);
Text.displayName = "Text";

// src/atoms/heading/heading.tsx
import { forwardRef as forwardRef2 } from "react";

// src/atoms/heading/heading.variants.ts
import { cva as cva2 } from "class-variance-authority";
var headingVariants = cva2("font-display text-foreground tracking-tight", {
  variants: {
    size: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
      h5: "text-body-lg font-semibold",
      h6: "text-body font-semibold"
    },
    align: { left: "text-left", center: "text-center", right: "text-right" }
  }
});

// src/atoms/heading/heading.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Heading = forwardRef2(
  ({ level = 2, size, align, className, "data-testid": testId, ...props }, ref) => {
    const Component = `h${level}`;
    return /* @__PURE__ */ jsx2(
      Component,
      {
        ref,
        className: cn(headingVariants({ size: size ?? `h${level}`, align }), className),
        "data-testid": testId ?? `heading-h${level}`,
        ...props
      }
    );
  }
);
Heading.displayName = "Heading";

// src/atoms/icon/icon.tsx
import { forwardRef as forwardRef3 } from "react";

// src/atoms/icon/icon.variants.ts
import { cva as cva3 } from "class-variance-authority";
var iconVariants = cva3("shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    },
    tone: {
      inherit: "",
      default: "text-foreground",
      muted: "text-foreground-muted",
      primary: "text-primary-600",
      success: "text-success-600",
      warning: "text-warning-600",
      error: "text-error-600"
    }
  },
  defaultVariants: { size: "md", tone: "inherit" }
});

// src/atoms/icon/icon.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Icon = forwardRef3(
  ({ icon: IconComponent, size, tone, label, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx3(
    IconComponent,
    {
      ref,
      className: cn(iconVariants({ size, tone }), className),
      "aria-hidden": label ? void 0 : true,
      "aria-label": label,
      role: label ? "img" : void 0,
      focusable: "false",
      "data-testid": testId ?? "icon",
      ...props
    }
  )
);
Icon.displayName = "Icon";

// src/atoms/link/link.tsx
import { forwardRef as forwardRef4 } from "react";
import { ExternalLink } from "lucide-react";

// src/atoms/link/link.variants.ts
import { cva as cva4 } from "class-variance-authority";
var linkVariants = cva4(
  "inline-flex items-center gap-1 rounded-sm font-sans font-medium underline-offset-4 transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      tone: {
        primary: "text-primary-600 hover:text-primary-700",
        neutral: "text-foreground hover:text-primary-600",
        muted: "text-foreground-muted hover:text-foreground",
        inherit: "text-inherit"
      },
      underline: {
        hover: "hover:underline",
        always: "underline",
        none: "no-underline"
      },
      size: { inherit: "", sm: "text-body-sm", md: "text-body" }
    },
    defaultVariants: { tone: "primary", underline: "hover", size: "inherit" }
  }
);

// src/atoms/link/link.tsx
import { Fragment, jsx as jsx4, jsxs } from "react/jsx-runtime";
var Link = forwardRef4(
  ({ href, external, as, tone, underline, size, className, children, "data-testid": testId, ...props }, ref) => {
    const contextLink = useLinkComponent();
    const Component = external ? "a" : as ?? contextLink ?? "a";
    return /* @__PURE__ */ jsxs(
      Component,
      {
        ref,
        href,
        className: cn(linkVariants({ tone, underline, size }), className),
        "data-testid": testId ?? "link",
        ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
        ...props,
        children: [
          children,
          external && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx4(ExternalLink, { "aria-hidden": "true", className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ jsx4("span", { className: "sr-only", children: "(opens in a new tab)" })
          ] })
        ]
      }
    );
  }
);
Link.displayName = "Link";

// src/atoms/truncated-text/truncated-text.tsx
import { forwardRef as forwardRef6, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";

// src/atoms/tooltip/tooltip.tsx
import { forwardRef as forwardRef5 } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// src/atoms/tooltip/tooltip.variants.ts
import { cva as cva5 } from "class-variance-authority";
var tooltipContentVariants = cva5(
  "z-50 max-w-xs rounded-md px-2.5 py-1.5 font-sans text-caption shadow-md animate-fade-in",
  {
    variants: {
      tone: {
        dark: "bg-grey-900 text-white",
        light: "border border-border bg-background text-foreground"
      }
    },
    defaultVariants: { tone: "dark" }
  }
);
var tooltipArrowVariants = cva5("", {
  variants: {
    tone: { dark: "fill-grey-900", light: "fill-background" }
  },
  defaultVariants: { tone: "dark" }
});

// src/atoms/tooltip/tooltip.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = forwardRef5(
  ({
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
    "data-testid": testId
  }, ref) => {
    if (disabled || content === null || content === void 0 || content === "") return children;
    return /* @__PURE__ */ jsx5(TooltipPrimitive.Provider, { delayDuration: delay, children: /* @__PURE__ */ jsxs2(TooltipPrimitive.Root, { open, defaultOpen, onOpenChange, children: [
      /* @__PURE__ */ jsx5(TooltipPrimitive.Trigger, { asChild: true, children }),
      /* @__PURE__ */ jsx5(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs2(
        TooltipPrimitive.Content,
        {
          ref,
          side,
          align,
          sideOffset: 6,
          className: cn(tooltipContentVariants({ tone }), className),
          "data-testid": testId ?? `tooltip-content-${tone ?? "dark"}`,
          children: [
            content,
            showArrow && /* @__PURE__ */ jsx5(TooltipPrimitive.Arrow, { className: tooltipArrowVariants({ tone }) })
          ]
        }
      ) })
    ] }) });
  }
);
Tooltip.displayName = "Tooltip";

// src/atoms/truncated-text/truncated-text.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var TruncatedText = forwardRef6(
  ({ text, lines = 1, maxLength, showTooltip = true, as: Component = "span", className, style, "data-testid": testId, ...props }, ref) => {
    const innerRef = useRef(null);
    useImperativeHandle(ref, () => innerRef.current);
    const [overflowing, setOverflowing] = useState(false);
    const byLength = maxLength !== void 0;
    const display = byLength && text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}\u2026` : text;
    const measure = useCallback(() => {
      const el = innerRef.current;
      if (!el || byLength) return;
      setOverflowing(el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1);
    }, [byLength]);
    useEffect(() => {
      measure();
      const el = innerRef.current;
      if (!el || typeof ResizeObserver === "undefined") return;
      const observer = new ResizeObserver(measure);
      observer.observe(el);
      return () => observer.disconnect();
    }, [measure, text, lines]);
    const truncated = byLength ? display !== text : overflowing;
    const clampStyle = !byLength && lines > 1 ? { display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical", overflow: "hidden" } : void 0;
    const node = /* @__PURE__ */ jsx6(
      Component,
      {
        ref: innerRef,
        className: cn(!byLength && lines === 1 && "block truncate", "min-w-0", className),
        style: { ...clampStyle, ...style },
        tabIndex: truncated && showTooltip ? 0 : void 0,
        "data-truncated": truncated || void 0,
        "data-testid": testId ?? "truncated-text",
        ...props,
        children: display
      }
    );
    return showTooltip ? /* @__PURE__ */ jsx6(Tooltip, { content: text, disabled: !truncated, children: node }) : node;
  }
);
TruncatedText.displayName = "TruncatedText";

// src/atoms/button/button.tsx
import { forwardRef as forwardRef7 } from "react";

// src/atoms/button/button.variants.ts
import { cva as cva6 } from "class-variance-authority";
var buttonVariants = cva6(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-colors duration-fast select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
        secondary: "bg-primary-50 text-primary-700 hover:bg-primary-100 active:bg-primary-200",
        outline: "border border-border-strong bg-background text-foreground hover:bg-surface-muted active:bg-neutral-200",
        ghost: "bg-transparent text-foreground hover:bg-surface-muted active:bg-neutral-200",
        danger: "bg-error-600 text-white hover:bg-error-700 active:bg-error-700",
        link: "bg-transparent text-primary-600 underline-offset-4 hover:underline"
      },
      size: {
        sm: "h-8 px-3 text-body-sm",
        md: "h-10 px-4 text-body-sm",
        lg: "h-12 px-5 text-body",
        icon: "h-10 w-10 p-0"
      },
      rounded: {
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      }
    },
    compoundVariants: [{ variant: "link", class: "h-auto px-0" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
      fullWidth: false
    }
  }
);

// src/atoms/button/button.tsx
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Button = forwardRef7(
  ({
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
  }, ref) => {
    const contextLink = useLinkComponent();
    const classes = cn(buttonVariants({ variant, size, rounded, fullWidth }), isLoading && "relative", className);
    const testId = dataTestId ?? `button-${variant ?? "primary"}`;
    const content = /* @__PURE__ */ jsxs3(Fragment2, { children: [
      isLoading && /* @__PURE__ */ jsx7("span", { "aria-hidden": "true", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx7("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
      /* @__PURE__ */ jsxs3("span", { className: cn("inline-flex items-center gap-2", isLoading && "invisible"), children: [
        leftIcon,
        children,
        rightIcon
      ] })
    ] });
    if (href !== void 0) {
      const Component = as ?? contextLink ?? "a";
      return /* @__PURE__ */ jsx7(
        Component,
        {
          ref,
          href,
          className: classes,
          "data-testid": testId,
          ...props,
          children: content
        }
      );
    }
    const { type = "button", disabled, ...buttonProps } = props;
    return /* @__PURE__ */ jsx7(
      "button",
      {
        ref,
        type,
        disabled: disabled || isLoading,
        "aria-busy": isLoading || void 0,
        className: classes,
        "data-testid": testId,
        ...buttonProps,
        children: content
      }
    );
  }
);
Button.displayName = "Button";

// src/atoms/button-group/button-group.tsx
import { forwardRef as forwardRef8 } from "react";

// src/atoms/button-group/button-group.variants.ts
import { cva as cva7 } from "class-variance-authority";
var buttonGroupVariants = cva7("inline-flex", {
  variants: {
    orientation: { horizontal: "flex-row", vertical: "flex-col" },
    attached: { true: "", false: "" },
    fullWidth: { true: "flex w-full [&>*]:flex-1", false: "" }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      attached: true,
      class: "[&>*:not(:first-child)]:-ml-px [&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:focus-visible]:z-10 [&>*:hover]:z-10"
    },
    {
      orientation: "vertical",
      attached: true,
      class: "[&>*:not(:first-child)]:-mt-px [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:focus-visible]:z-10 [&>*:hover]:z-10"
    },
    { orientation: "horizontal", attached: false, class: "gap-2" },
    { orientation: "vertical", attached: false, class: "gap-2" }
  ],
  defaultVariants: { orientation: "horizontal", attached: true, fullWidth: false }
});

// src/atoms/button-group/button-group.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var ButtonGroup = forwardRef8(
  ({ orientation, attached, fullWidth, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx8(
    "div",
    {
      ref,
      role: "group",
      className: cn(buttonGroupVariants({ orientation, attached, fullWidth }), className),
      "data-testid": testId ?? "button-group",
      ...props
    }
  )
);
ButtonGroup.displayName = "ButtonGroup";

// src/atoms/copy-button/copy-button.tsx
import { forwardRef as forwardRef9, useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { Check, Copy } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
async function writeClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!ok) throw new Error("Copy failed");
}
var CopyButton = forwardRef9(
  ({
    text,
    label,
    copiedLabel = "Copied!",
    resetAfter = 2e3,
    onCopy,
    onError,
    variant = "ghost",
    size,
    "aria-label": ariaLabel,
    "data-testid": testId,
    ...props
  }, ref) => {
    const [copied, setCopied] = useState2(false);
    const timer = useRef2();
    useEffect2(() => () => clearTimeout(timer.current), []);
    const copy = async () => {
      try {
        await writeClipboard(text);
        setCopied(true);
        onCopy?.(text);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetAfter);
      } catch (error) {
        onError?.(error);
      }
    };
    const icon = copied ? /* @__PURE__ */ jsx9(Check, { "aria-hidden": "true", className: "h-4 w-4 text-success-600" }) : /* @__PURE__ */ jsx9(Copy, { "aria-hidden": "true", className: "h-4 w-4" });
    const iconOnly = !label;
    const button = /* @__PURE__ */ jsx9(
      Button,
      {
        ref,
        variant,
        size: size ?? (iconOnly ? "icon" : "sm"),
        onClick: copy,
        "aria-label": iconOnly ? copied ? copiedLabel : ariaLabel ?? "Copy to clipboard" : ariaLabel,
        leftIcon: iconOnly ? void 0 : icon,
        "data-testid": testId ?? "copy-button",
        "data-copied": copied || void 0,
        ...props,
        children: iconOnly ? icon : copied ? copiedLabel : label
      }
    );
    return /* @__PURE__ */ jsxs4(Fragment3, { children: [
      iconOnly ? /* @__PURE__ */ jsx9(Tooltip, { content: copied ? copiedLabel : "Copy", delay: 300, children: button }) : button,
      /* @__PURE__ */ jsx9("span", { role: "status", "aria-live": "polite", className: "sr-only", children: copied ? copiedLabel : "" })
    ] });
  }
);
CopyButton.displayName = "CopyButton";

// src/atoms/label/label.tsx
import { forwardRef as forwardRef10 } from "react";

// src/atoms/label/label.variants.ts
import { cva as cva8 } from "class-variance-authority";
var labelVariants = cva8("inline-block font-sans font-medium text-foreground", {
  variants: {
    size: { sm: "text-caption", md: "text-body-sm", lg: "text-body" },
    disabled: { true: "cursor-not-allowed opacity-60", false: "" }
  },
  defaultVariants: { size: "md", disabled: false }
});

// src/atoms/label/label.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var Label = forwardRef10(
  ({ size, disabled, required, className, children, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsxs5(
    "label",
    {
      ref,
      className: cn(labelVariants({ size, disabled }), className),
      "data-testid": testId ?? (props.htmlFor ? `label-${props.htmlFor}` : "label"),
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ jsx10("span", { "aria-hidden": "true", className: "ml-0.5 text-error-600", children: "*" })
      ]
    }
  )
);
Label.displayName = "Label";

// src/atoms/input/input.tsx
import { forwardRef as forwardRef11 } from "react";

// src/lib/field-variants.ts
import { cva as cva9 } from "class-variance-authority";
var fieldVariants = cva9(
  "w-full rounded-md border bg-background font-sans text-foreground transition-colors duration-fast placeholder:text-foreground-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-body-sm",
        md: "h-10 px-3 text-body-sm",
        lg: "h-12 px-4 text-body"
      },
      invalid: {
        true: "border-error-500 focus-visible:ring-error-500",
        false: "border-border-strong hover:border-grey-400"
      }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);

// src/atoms/input/input.variants.ts
import { cva as cva10 } from "class-variance-authority";
var inputAdornmentVariants = cva10(
  "pointer-events-none absolute inset-y-0 flex items-center text-foreground-muted",
  {
    variants: {
      side: { left: "left-0 pl-3", right: "right-0 pr-3" }
    }
  }
);

// src/atoms/input/input.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var Input = forwardRef11(
  ({ size, invalid, leftElement, rightElement, className, type = "text", "data-testid": testId, ...props }, ref) => {
    const input = /* @__PURE__ */ jsx11(
      "input",
      {
        ref,
        type,
        "aria-invalid": invalid || void 0,
        className: cn(
          fieldVariants({ size, invalid }),
          leftElement && "pl-10",
          rightElement && "pr-10",
          !leftElement && !rightElement && className
        ),
        "data-testid": testId ?? (props.id ? `input-${props.id}` : "input"),
        ...props
      }
    );
    if (!leftElement && !rightElement) return input;
    return /* @__PURE__ */ jsxs6("div", { className: cn("relative w-full", className), children: [
      leftElement && /* @__PURE__ */ jsx11("span", { className: inputAdornmentVariants({ side: "left" }), children: leftElement }),
      input,
      rightElement && /* @__PURE__ */ jsx11("span", { className: inputAdornmentVariants({ side: "right" }), children: rightElement })
    ] });
  }
);
Input.displayName = "Input";

// src/atoms/password-input/password-input.tsx
import { forwardRef as forwardRef13, useState as useState3 } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";

// src/lib/field-icon-button.tsx
import { forwardRef as forwardRef12 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var FieldIconButton = forwardRef12(
  ({ className, type = "button", ...props }, ref) => /* @__PURE__ */ jsx12(
    "button",
    {
      ref,
      type,
      className: cn(
        "pointer-events-auto inline-flex h-6 w-6 items-center justify-center rounded-sm text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        className
      ),
      ...props
    }
  )
);
FieldIconButton.displayName = "FieldIconButton";

// src/atoms/password-input/password-input.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var PasswordInput = forwardRef13(
  ({ showLockIcon = false, leftElement, disabled, "data-testid": testId, ...props }, ref) => {
    const [visible, setVisible] = useState3(false);
    return /* @__PURE__ */ jsx13(
      Input,
      {
        ref,
        type: visible ? "text" : "password",
        autoComplete: "current-password",
        disabled,
        leftElement: leftElement ?? (showLockIcon ? /* @__PURE__ */ jsx13(Lock, { "aria-hidden": "true", className: "h-4 w-4" }) : void 0),
        rightElement: /* @__PURE__ */ jsx13(
          FieldIconButton,
          {
            onClick: () => setVisible((v) => !v),
            "aria-label": visible ? "Hide password" : "Show password",
            "aria-pressed": visible,
            disabled,
            children: visible ? /* @__PURE__ */ jsx13(EyeOff, { "aria-hidden": "true", className: "h-4 w-4" }) : /* @__PURE__ */ jsx13(Eye, { "aria-hidden": "true", className: "h-4 w-4" })
          }
        ),
        "data-testid": testId ?? "password-input",
        ...props
      }
    );
  }
);
PasswordInput.displayName = "PasswordInput";

// src/atoms/search-input/search-input.tsx
import { forwardRef as forwardRef15, useImperativeHandle as useImperativeHandle2, useRef as useRef4 } from "react";
import { Search, X } from "lucide-react";

// src/lib/use-controllable-state.ts
import { useCallback as useCallback2, useRef as useRef3, useState as useState4 } from "react";
function useControllableState(value, defaultValue, onChange) {
  const [internal, setInternal] = useState4(defaultValue);
  const isControlled = value !== void 0;
  const current = isControlled ? value : internal;
  const onChangeRef = useRef3(onChange);
  onChangeRef.current = onChange;
  const setValue = useCallback2(
    (next) => {
      if (!isControlled) setInternal(next);
      onChangeRef.current?.(next);
    },
    [isControlled]
  );
  return [current, setValue];
}

// src/atoms/spinner/spinner.tsx
import { forwardRef as forwardRef14 } from "react";

// src/atoms/spinner/spinner.variants.ts
import { cva as cva11 } from "class-variance-authority";
var spinnerVariants = cva11(
  "inline-block shrink-0 animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8 border-[3px]",
        xl: "h-12 w-12 border-4"
      },
      tone: {
        inherit: "",
        primary: "text-primary-600",
        muted: "text-foreground-muted",
        white: "text-white"
      }
    },
    defaultVariants: { size: "md", tone: "primary" }
  }
);

// src/atoms/spinner/spinner.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var Spinner = forwardRef14(
  ({ size, tone, label = "Loading", className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx14(
    "span",
    {
      ref,
      role: "status",
      "aria-label": label,
      className: cn(spinnerVariants({ size, tone }), className),
      "data-testid": testId ?? "spinner",
      ...props
    }
  )
);
Spinner.displayName = "Spinner";

// src/atoms/search-input/search-input.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var SearchInput = forwardRef15(
  ({
    value,
    defaultValue = "",
    onValueChange,
    onSearch,
    onClear,
    isLoading,
    placeholder = "Search\u2026",
    onKeyDown,
    disabled,
    "data-testid": testId,
    ...props
  }, ref) => {
    const [current, setCurrent] = useControllableState(value, defaultValue, onValueChange);
    const innerRef = useRef4(null);
    useImperativeHandle2(ref, () => innerRef.current);
    const clear = () => {
      setCurrent("");
      onClear?.();
      innerRef.current?.focus();
    };
    return /* @__PURE__ */ jsx15(
      Input,
      {
        ref: innerRef,
        type: "search",
        role: "searchbox",
        value: current,
        placeholder,
        disabled,
        onChange: (e) => setCurrent(e.target.value),
        onKeyDown: (e) => {
          onKeyDown?.(e);
          if (e.key === "Enter") onSearch?.(current);
          if (e.key === "Escape" && current) {
            e.preventDefault();
            clear();
          }
        },
        className: "[&_input::-webkit-search-cancel-button]:appearance-none",
        leftElement: /* @__PURE__ */ jsx15(Search, { "aria-hidden": "true", className: "h-4 w-4" }),
        rightElement: isLoading ? /* @__PURE__ */ jsx15(Spinner, { size: "sm", tone: "muted", label: "Searching" }) : current ? /* @__PURE__ */ jsx15(FieldIconButton, { onClick: clear, "aria-label": "Clear search", disabled, children: /* @__PURE__ */ jsx15(X, { "aria-hidden": "true", className: "h-4 w-4" }) }) : null,
        "data-testid": testId ?? "search-input",
        ...props
      }
    );
  }
);
SearchInput.displayName = "SearchInput";

// src/atoms/number-input/number-input.tsx
import { forwardRef as forwardRef16, useEffect as useEffect3, useState as useState5 } from "react";
import { Minus, Plus } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var decimals = (n) => (String(n).split(".")[1] ?? "").length;
var NumberInput = forwardRef16(
  ({
    value,
    defaultValue = null,
    onValueChange,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    step = 1,
    precision,
    hideControls,
    suffix,
    prefix,
    disabled,
    readOnly,
    onBlur,
    onKeyDown,
    "data-testid": testId,
    ...props
  }, ref) => {
    const [current, setCurrent] = useControllableState(value, defaultValue, onValueChange);
    const [draft, setDraft] = useState5(current === null ? "" : String(current));
    const places = precision ?? decimals(step);
    useEffect3(() => {
      setDraft(current === null ? "" : String(current));
    }, [current]);
    const normalize = (n) => Math.min(max, Math.max(min, Number(n.toFixed(places))));
    const commit = (text) => {
      const trimmed = text.trim();
      if (trimmed === "" || trimmed === "-") {
        setCurrent(null);
        setDraft("");
        return;
      }
      const parsed = Number(trimmed);
      if (Number.isNaN(parsed)) {
        setDraft(current === null ? "" : String(current));
        return;
      }
      const next = normalize(parsed);
      setCurrent(next);
      setDraft(String(next));
    };
    const stepBy = (direction) => {
      const base = current ?? (Number.isFinite(min) ? min : 0);
      setCurrent(normalize(base + direction * step));
    };
    const canDecrement = !disabled && !readOnly && (current === null || current > min);
    const canIncrement = !disabled && !readOnly && (current === null || current < max);
    return /* @__PURE__ */ jsx16(
      Input,
      {
        ref,
        type: "text",
        inputMode: places > 0 ? "decimal" : "numeric",
        role: "spinbutton",
        "aria-valuemin": Number.isFinite(min) ? min : void 0,
        "aria-valuemax": Number.isFinite(max) ? max : void 0,
        "aria-valuenow": current ?? void 0,
        value: draft,
        disabled,
        readOnly,
        onChange: (e) => {
          if (/^-?\d*\.?\d*$/.test(e.target.value)) setDraft(e.target.value);
        },
        onBlur: (e) => {
          commit(draft);
          onBlur?.(e);
        },
        onKeyDown: (e) => {
          onKeyDown?.(e);
          if (e.key === "ArrowUp") {
            e.preventDefault();
            if (canIncrement) stepBy(1);
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (canDecrement) stepBy(-1);
          } else if (e.key === "Enter") {
            commit(draft);
          }
        },
        className: "tabular-nums",
        leftElement: hideControls ? prefix ? /* @__PURE__ */ jsx16("span", { className: "text-body-sm", children: prefix }) : void 0 : /* @__PURE__ */ jsx16(FieldIconButton, { onClick: () => stepBy(-1), disabled: !canDecrement, "aria-label": "Decrease", tabIndex: -1, children: /* @__PURE__ */ jsx16(Minus, { "aria-hidden": "true", className: "h-4 w-4" }) }),
        rightElement: hideControls ? suffix ? /* @__PURE__ */ jsx16("span", { className: "text-body-sm", children: suffix }) : void 0 : /* @__PURE__ */ jsxs7("span", { className: "pointer-events-auto flex items-center gap-1", children: [
          suffix && /* @__PURE__ */ jsx16("span", { className: "text-body-sm", children: suffix }),
          /* @__PURE__ */ jsx16(FieldIconButton, { onClick: () => stepBy(1), disabled: !canIncrement, "aria-label": "Increase", tabIndex: -1, children: /* @__PURE__ */ jsx16(Plus, { "aria-hidden": "true", className: "h-4 w-4" }) })
        ] }),
        "data-testid": testId ?? "number-input",
        ...props
      }
    );
  }
);
NumberInput.displayName = "NumberInput";

// src/atoms/otp-input/otp-input.tsx
import { forwardRef as forwardRef17, useRef as useRef5 } from "react";

// src/atoms/otp-input/otp-input.variants.ts
import { cva as cva12 } from "class-variance-authority";
var otpCellVariants = cva12(
  "rounded-md border bg-background text-center font-sans font-semibold text-foreground tabular-nums caret-primary-600 transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-60",
  {
    variants: {
      size: {
        sm: "h-9 w-8 text-body",
        md: "h-12 w-10 text-body-lg",
        lg: "h-14 w-12 text-h4"
      },
      invalid: {
        true: "border-error-500 focus:ring-error-500",
        false: "border-border-strong"
      }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);

// src/atoms/otp-input/otp-input.tsx
import { jsx as jsx17 } from "react/jsx-runtime";
var OTPInput = forwardRef17(
  ({
    length = 6,
    value,
    defaultValue = "",
    onValueChange,
    onComplete,
    type = "numeric",
    mask,
    disabled,
    autoFocus,
    size,
    invalid,
    className,
    "aria-label": ariaLabel = "One-time code",
    "data-testid": testId
  }, ref) => {
    const [code, setCode] = useControllableState(value, defaultValue, onValueChange);
    const inputs = useRef5([]);
    const allowed = type === "numeric" ? /^[0-9]$/ : /^[a-zA-Z0-9]$/;
    const chars = Array.from({ length }, (_, i) => code[i] ?? "");
    const focusAt = (index) => {
      const el = inputs.current[Math.max(0, Math.min(length - 1, index))];
      el?.focus();
      el?.select();
    };
    const update = (next) => {
      const joined = next.join("").slice(0, length);
      setCode(joined);
      if (joined.length === length && next.every(Boolean)) onComplete?.(joined);
    };
    const handleInput = (index, raw) => {
      const char = raw.slice(-1);
      if (!allowed.test(char)) return;
      const next = [...chars];
      next[index] = type === "alphanumeric" ? char.toUpperCase() : char;
      update(next);
      if (index < length - 1) focusAt(index + 1);
    };
    const handleKeyDown = (index, e) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        const next = [...chars];
        if (next[index]) {
          next[index] = "";
          update(next);
        } else if (index > 0) {
          next[index - 1] = "";
          update(next);
          focusAt(index - 1);
        }
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        focusAt(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        focusAt(index + 1);
      }
    };
    const handlePaste = (index, e) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text").replace(/\s/g, "").split("").filter((c) => allowed.test(c));
      if (!pasted.length) return;
      const next = [...chars];
      pasted.slice(0, length - index).forEach((c, i) => {
        next[index + i] = type === "alphanumeric" ? c.toUpperCase() : c;
      });
      update(next);
      focusAt(Math.min(index + pasted.length, length - 1));
    };
    return /* @__PURE__ */ jsx17(
      "div",
      {
        ref,
        role: "group",
        "aria-label": ariaLabel,
        className: cn("inline-flex gap-2", className),
        "data-testid": testId ?? "otp-input",
        children: chars.map((char, i) => /* @__PURE__ */ jsx17(
          "input",
          {
            ref: (el) => {
              inputs.current[i] = el;
            },
            type: mask ? "password" : "text",
            inputMode: type === "numeric" ? "numeric" : "text",
            autoComplete: i === 0 ? "one-time-code" : "off",
            autoFocus: autoFocus && i === 0,
            maxLength: 2,
            value: char,
            disabled,
            "aria-label": `Digit ${i + 1} of ${length}`,
            "aria-invalid": invalid || void 0,
            className: otpCellVariants({ size, invalid }),
            onChange: (e) => handleInput(i, e.target.value),
            onKeyDown: (e) => handleKeyDown(i, e),
            onPaste: (e) => handlePaste(i, e),
            onFocus: (e) => e.target.select(),
            "data-testid": `otp-input-cell-${i}`
          },
          i
        ))
      }
    );
  }
);
OTPInput.displayName = "OTPInput";

// src/atoms/tag-input/tag-input.tsx
import { forwardRef as forwardRef19, useId, useRef as useRef6, useState as useState6 } from "react";

// src/atoms/tag/tag.tsx
import { forwardRef as forwardRef18 } from "react";
import { X as X2 } from "lucide-react";

// src/atoms/tag/tag.variants.ts
import { cva as cva13 } from "class-variance-authority";
var tagVariants = cva13(
  "inline-flex max-w-full items-center gap-1.5 rounded-md border font-sans font-medium transition-colors duration-fast",
  {
    variants: {
      tone: {
        neutral: "border-border bg-surface-muted text-foreground",
        primary: "border-primary-200 bg-primary-50 text-primary-700",
        success: "border-success-100 bg-success-50 text-success-700",
        warning: "border-warning-100 bg-warning-50 text-warning-700",
        error: "border-error-100 bg-error-50 text-error-700"
      },
      size: {
        sm: "h-6 px-2 text-caption",
        md: "h-8 px-2.5 text-body-sm"
      },
      disabled: { true: "pointer-events-none opacity-50", false: "" }
    },
    defaultVariants: { tone: "neutral", size: "md", disabled: false }
  }
);
var tagRemoveVariants = cva13(
  "-mr-1 inline-flex shrink-0 items-center justify-center rounded-sm opacity-60 transition-opacity hover:bg-black/5 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/tag/tag.tsx
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
var Tag = forwardRef18(
  ({ tone, size, disabled, icon, onRemove, removeLabel, className, children, "data-testid": testId, ...props }, ref) => {
    const text = typeof children === "string" ? children : void 0;
    return /* @__PURE__ */ jsxs8(
      "span",
      {
        ref,
        className: cn(tagVariants({ tone, size, disabled }), className),
        "data-testid": testId ?? `tag-${text ?? tone ?? "neutral"}`,
        "aria-disabled": disabled || void 0,
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx18("span", { className: "inline-flex shrink-0", children: icon }),
          /* @__PURE__ */ jsx18("span", { className: "truncate", children }),
          onRemove && /* @__PURE__ */ jsx18(
            "button",
            {
              type: "button",
              onClick: onRemove,
              disabled: disabled ?? void 0,
              "aria-label": removeLabel ?? (text ? `Remove ${text}` : "Remove"),
              className: tagRemoveVariants({ size }),
              children: /* @__PURE__ */ jsx18(X2, { "aria-hidden": "true", className: size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5" })
            }
          )
        ]
      }
    );
  }
);
Tag.displayName = "Tag";

// src/atoms/tag-input/tag-input.variants.ts
import { cva as cva14 } from "class-variance-authority";
var tagInputVariants = cva14(
  "flex w-full cursor-text flex-wrap items-center gap-1.5 rounded-md border bg-background px-2 py-1.5 font-sans transition-colors duration-fast focus-within:ring-2 focus-within:ring-ring",
  {
    variants: {
      size: { sm: "min-h-8", md: "min-h-10", lg: "min-h-12" },
      invalid: {
        true: "border-error-500 focus-within:ring-error-500",
        false: "border-border-strong hover:border-grey-400"
      },
      disabled: { true: "cursor-not-allowed bg-surface-muted opacity-60", false: "" }
    },
    defaultVariants: { size: "md", invalid: false, disabled: false }
  }
);

// src/atoms/tag-input/tag-input.tsx
import { jsx as jsx19, jsxs as jsxs9 } from "react/jsx-runtime";
var TagInput = forwardRef19(
  ({
    value,
    defaultValue = [],
    onValueChange,
    placeholder = "Add\u2026",
    separators = ["Enter", ","],
    maxTags,
    allowDuplicates = false,
    validate,
    onReject,
    tagTone = "primary",
    size,
    invalid,
    disabled,
    id,
    className,
    "aria-label": ariaLabel,
    "data-testid": testId
  }, ref) => {
    const [tags, setTags] = useControllableState(value, defaultValue, onValueChange);
    const [draft, setDraft] = useState6("");
    const inputRef = useRef6(null);
    const autoId = useId();
    const inputId = id ?? autoId;
    const atLimit = maxTags !== void 0 && tags.length >= maxTags;
    const addTags = (candidates) => {
      const next = [...tags];
      for (const raw of candidates) {
        const tag = raw.trim();
        if (!tag) continue;
        if (maxTags !== void 0 && next.length >= maxTags) {
          onReject?.(tag, "limit");
          break;
        }
        if (!allowDuplicates && next.some((t) => t.toLowerCase() === tag.toLowerCase())) {
          onReject?.(tag, "duplicate");
          continue;
        }
        const result = validate?.(tag) ?? true;
        if (result !== true) {
          onReject?.(tag, typeof result === "string" ? result : "invalid");
          continue;
        }
        next.push(tag);
      }
      if (next.length !== tags.length) setTags(next);
      setDraft("");
    };
    const removeAt = (index) => setTags(tags.filter((_, i) => i !== index));
    const handleKeyDown = (e) => {
      if (separators.includes(e.key)) {
        if (draft.trim()) {
          e.preventDefault();
          addTags([draft]);
        } else if (e.key !== "Enter") {
          e.preventDefault();
        }
      } else if (e.key === "Backspace" && draft === "" && tags.length) {
        removeAt(tags.length - 1);
      }
    };
    const handlePaste = (e) => {
      const text = e.clipboardData.getData("text");
      const parts = text.split(/[,\n\t]/);
      if (parts.length > 1) {
        e.preventDefault();
        addTags(parts);
      }
    };
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      /* @__PURE__ */ jsxs9(
        "div",
        {
          className: cn(tagInputVariants({ size, invalid, disabled }), className),
          onClick: () => inputRef.current?.focus(),
          "data-testid": testId ?? "tag-input",
          children: [
            tags.map((tag, i) => /* @__PURE__ */ jsx19(
              Tag,
              {
                size: "sm",
                tone: tagTone,
                disabled,
                onRemove: disabled ? void 0 : () => removeAt(i),
                children: tag
              },
              `${tag}-${i}`
            )),
            /* @__PURE__ */ jsx19(
              "input",
              {
                ref: (el) => {
                  inputRef.current = el;
                  if (typeof ref === "function") ref(el);
                  else if (ref) ref.current = el;
                },
                id: inputId,
                value: draft,
                disabled: disabled || atLimit,
                placeholder: atLimit ? "" : tags.length ? "" : placeholder,
                "aria-label": ariaLabel,
                "aria-invalid": invalid || void 0,
                onChange: (e) => setDraft(e.target.value),
                onKeyDown: handleKeyDown,
                onPaste: handlePaste,
                onBlur: () => draft.trim() && addTags([draft]),
                className: "min-w-[6rem] flex-1 bg-transparent px-1 text-body-sm text-foreground outline-none placeholder:text-foreground-muted disabled:cursor-not-allowed"
              }
            )
          ]
        }
      )
    );
  }
);
TagInput.displayName = "TagInput";

// src/atoms/textarea/textarea.tsx
import { forwardRef as forwardRef20 } from "react";

// src/atoms/textarea/textarea.variants.ts
import { cva as cva15 } from "class-variance-authority";
var textareaVariants = cva15("h-auto min-h-[5rem] py-2", {
  variants: {
    resize: { none: "resize-none", vertical: "resize-y", both: "resize" }
  },
  defaultVariants: { resize: "vertical" }
});

// src/atoms/textarea/textarea.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var Textarea = forwardRef20(
  ({ invalid, resize, className, rows = 4, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx20(
    "textarea",
    {
      ref,
      rows,
      "aria-invalid": invalid || void 0,
      className: cn(fieldVariants({ size: "md", invalid }), textareaVariants({ resize }), className),
      "data-testid": testId ?? (props.id ? `textarea-${props.id}` : "textarea"),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";

// src/atoms/checkbox/checkbox.tsx
import { forwardRef as forwardRef21, useEffect as useEffect4, useId as useId2, useImperativeHandle as useImperativeHandle3, useRef as useRef7 } from "react";
import { Check as Check2, Minus as Minus2 } from "lucide-react";

// src/atoms/checkbox/checkbox.variants.ts
import { cva as cva16 } from "class-variance-authority";
var checkboxBoxVariants = cva16(
  "peer shrink-0 cursor-pointer appearance-none rounded-sm border border-border-strong bg-background transition-colors duration-fast hover:border-primary-500 checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" },
      invalid: { true: "border-error-500", false: "" }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);
var checkboxIconVariants = cva16(
  "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0",
  {
    variants: {
      size: { sm: "h-3 w-3", md: "h-3.5 w-3.5" }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/checkbox/checkbox.tsx
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var Checkbox = forwardRef21(
  ({ size, invalid, label, description, indeterminate = false, className, id, "data-testid": testId, ...props }, ref) => {
    const autoId = useId2();
    const inputId = id ?? autoId;
    const innerRef = useRef7(null);
    useImperativeHandle3(ref, () => innerRef.current);
    useEffect4(() => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);
    const box = /* @__PURE__ */ jsxs10("span", { className: "relative inline-flex", children: [
      /* @__PURE__ */ jsx21(
        "input",
        {
          ref: innerRef,
          id: inputId,
          type: "checkbox",
          "aria-invalid": invalid || void 0,
          "aria-describedby": description ? `${inputId}-description` : void 0,
          className: cn(checkboxBoxVariants({ size, invalid }), !label && className),
          "data-testid": testId ?? `checkbox-${id ?? "input"}`,
          ...props
        }
      ),
      /* @__PURE__ */ jsx21(
        Check2,
        {
          "aria-hidden": "true",
          strokeWidth: 3,
          className: cn(checkboxIconVariants({ size }), !indeterminate && "peer-checked:opacity-100")
        }
      ),
      /* @__PURE__ */ jsx21(
        Minus2,
        {
          "aria-hidden": "true",
          strokeWidth: 3,
          className: cn(checkboxIconVariants({ size }), indeterminate && "opacity-100")
        }
      )
    ] });
    if (!label) return box;
    return /* @__PURE__ */ jsxs10("div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ jsx21("span", { className: cn("flex items-center", size === "sm" ? "h-5" : "h-6"), children: box }),
      /* @__PURE__ */ jsxs10("div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ jsx21(
          "label",
          {
            htmlFor: inputId,
            className: cn(
              "cursor-pointer font-sans text-foreground",
              size === "sm" ? "text-body-sm" : "text-body",
              props.disabled && "cursor-not-allowed opacity-60"
            ),
            children: label
          }
        ),
        description && /* @__PURE__ */ jsx21("p", { id: `${inputId}-description`, className: "font-sans text-body-sm text-foreground-muted", children: description })
      ] })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/atoms/radio/radio.tsx
import { createContext, forwardRef as forwardRef22, useContext, useId as useId3, useState as useState7 } from "react";

// src/atoms/radio/radio.variants.ts
import { cva as cva17 } from "class-variance-authority";
var radioVariants = cva17(
  "shrink-0 cursor-pointer appearance-none rounded-full border border-border-strong bg-background transition-all duration-fast hover:border-primary-500 checked:border-primary-600 checked:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-4 checked:border-[5px]",
        md: "h-5 w-5 checked:border-[6px]"
      }
    },
    defaultVariants: { size: "md" }
  }
);
var radioGroupVariants = cva17("flex", {
  variants: {
    orientation: { vertical: "flex-col gap-3", horizontal: "flex-row flex-wrap gap-6" }
  },
  defaultVariants: { orientation: "vertical" }
});

// src/atoms/radio/radio.tsx
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var RadioGroupContext = createContext(null);
var RadioGroup = forwardRef22(
  ({
    name,
    value,
    defaultValue,
    onValueChange,
    orientation,
    size,
    disabled,
    className,
    "data-testid": testId,
    ...props
  }, ref) => {
    const autoName = useId3();
    const [internal, setInternal] = useState7(defaultValue);
    const current = value !== void 0 ? value : internal;
    const onChange = (next) => {
      if (value === void 0) setInternal(next);
      onValueChange?.(next);
    };
    return /* @__PURE__ */ jsx22(RadioGroupContext.Provider, { value: { name: name ?? autoName, value: current, onChange, size, disabled }, children: /* @__PURE__ */ jsx22(
      "div",
      {
        ref,
        role: "radiogroup",
        "aria-orientation": orientation ?? "vertical",
        className: cn(radioGroupVariants({ orientation }), className),
        "data-testid": testId ?? `radio-group-${name ?? "group"}`,
        ...props
      }
    ) });
  }
);
RadioGroup.displayName = "RadioGroup";
var Radio = forwardRef22(
  ({ value, label, description, size, className, id, disabled, "data-testid": testId, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    const autoId = useId3();
    const inputId = id ?? autoId;
    const resolvedSize = size ?? group?.size;
    const isDisabled = disabled ?? group?.disabled;
    const groupProps = group ? {
      name: group.name,
      checked: group.value === value,
      onChange: () => group.onChange(value)
    } : {};
    const input = /* @__PURE__ */ jsx22(
      "input",
      {
        ref,
        id: inputId,
        type: "radio",
        value,
        disabled: isDisabled,
        "aria-describedby": description ? `${inputId}-description` : void 0,
        className: cn(radioVariants({ size: resolvedSize }), !label && className),
        "data-testid": testId ?? `radio-${value}`,
        ...groupProps,
        ...props
      }
    );
    if (!label) return input;
    return /* @__PURE__ */ jsxs11("div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ jsx22("span", { className: cn("flex items-center", resolvedSize === "sm" ? "h-5" : "h-6"), children: input }),
      /* @__PURE__ */ jsxs11("div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ jsx22(
          "label",
          {
            htmlFor: inputId,
            className: cn(
              "cursor-pointer font-sans text-foreground",
              resolvedSize === "sm" ? "text-body-sm" : "text-body",
              isDisabled && "cursor-not-allowed opacity-60"
            ),
            children: label
          }
        ),
        description && /* @__PURE__ */ jsx22("p", { id: `${inputId}-description`, className: "font-sans text-body-sm text-foreground-muted", children: description })
      ] })
    ] });
  }
);
Radio.displayName = "Radio";

// src/atoms/switch/switch.tsx
import { forwardRef as forwardRef23, useId as useId4, useState as useState8 } from "react";

// src/atoms/switch/switch.variants.ts
import { cva as cva18 } from "class-variance-authority";
var switchTrackVariants = cva18(
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-grey-300 transition-colors duration-normal data-[state=checked]:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-5 w-9", md: "h-6 w-11" }
    },
    defaultVariants: { size: "md" }
  }
);
var switchThumbVariants = cva18(
  "pointer-events-none block rounded-full bg-white shadow-sm transition-transform duration-normal translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5"
      }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/switch/switch.tsx
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var Switch = forwardRef23(
  ({
    checked,
    defaultChecked = false,
    onCheckedChange,
    size,
    label,
    labelPosition = "right",
    className,
    id,
    disabled,
    onClick,
    "data-testid": testId,
    ...props
  }, ref) => {
    const autoId = useId4();
    const switchId = id ?? autoId;
    const [internal, setInternal] = useState8(defaultChecked);
    const isOn = checked !== void 0 ? checked : internal;
    const state = isOn ? "checked" : "unchecked";
    const button = /* @__PURE__ */ jsx23(
      "button",
      {
        ref,
        id: switchId,
        type: "button",
        role: "switch",
        "aria-checked": isOn,
        "data-state": state,
        disabled,
        className: cn(switchTrackVariants({ size }), !label && className),
        "data-testid": testId ?? `switch-${id ?? "toggle"}`,
        onClick: (event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (checked === void 0) setInternal(!isOn);
          onCheckedChange?.(!isOn);
        },
        ...props,
        children: /* @__PURE__ */ jsx23("span", { "data-state": state, className: switchThumbVariants({ size }) })
      }
    );
    if (!label) return button;
    return /* @__PURE__ */ jsxs12("div", { className: cn("inline-flex items-center gap-2", labelPosition === "left" && "flex-row-reverse", className), children: [
      button,
      /* @__PURE__ */ jsx23(
        "label",
        {
          htmlFor: switchId,
          className: cn(
            "cursor-pointer select-none font-sans text-foreground",
            size === "sm" ? "text-body-sm" : "text-body",
            disabled && "cursor-not-allowed opacity-60"
          ),
          children: label
        }
      )
    ] });
  }
);
Switch.displayName = "Switch";

// src/atoms/select/select.tsx
import { forwardRef as forwardRef24, useId as useId5 } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check3, ChevronDown } from "lucide-react";

// src/atoms/select/select.variants.ts
import { cva as cva19 } from "class-variance-authority";
var selectTriggerVariants = cva19(
  "inline-flex items-center justify-between gap-2 text-left data-[placeholder]:text-foreground-muted [&>span]:truncate"
);
var selectContentVariants = cva19(
  "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-border bg-background font-sans text-foreground shadow-lg"
);
var selectItemVariants = cva19(
  "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-3 text-body-sm outline-none data-[highlighted]:bg-surface-muted data-[state=checked]:font-medium data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
);

// src/atoms/select/select.tsx
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var Select = forwardRef24(
  ({
    options,
    value,
    defaultValue,
    onValueChange,
    placeholder = "Select\u2026",
    disabled,
    required,
    name,
    id,
    size,
    invalid,
    className,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "data-testid": testId
  }, ref) => {
    const autoId = useId5();
    const triggerId = id ?? autoId;
    return /* @__PURE__ */ jsxs13(
      SelectPrimitive.Root,
      {
        value,
        defaultValue,
        onValueChange,
        disabled,
        required,
        name,
        children: [
          /* @__PURE__ */ jsxs13(
            SelectPrimitive.Trigger,
            {
              ref,
              id: triggerId,
              "aria-label": ariaLabel,
              "aria-labelledby": ariaLabelledBy,
              "aria-invalid": invalid || void 0,
              className: cn(fieldVariants({ size, invalid }), selectTriggerVariants(), className),
              "data-testid": testId ?? `select-${id ?? name ?? "trigger"}`,
              children: [
                /* @__PURE__ */ jsx24(SelectPrimitive.Value, { placeholder }),
                /* @__PURE__ */ jsx24(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx24(ChevronDown, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-foreground-muted" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx24(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx24(SelectPrimitive.Content, { position: "popper", sideOffset: 4, className: selectContentVariants(), children: /* @__PURE__ */ jsx24(SelectPrimitive.Viewport, { className: "p-1", children: options.map((option) => /* @__PURE__ */ jsxs13(
            SelectPrimitive.Item,
            {
              value: option.value,
              disabled: option.disabled,
              className: selectItemVariants(),
              "data-testid": `select-option-${option.value}`,
              children: [
                /* @__PURE__ */ jsx24("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsx24(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx24(Check3, { "aria-hidden": "true", className: "h-4 w-4 text-primary-600" }) }) }),
                /* @__PURE__ */ jsx24(SelectPrimitive.ItemText, { children: option.label })
              ]
            },
            option.value
          )) }) }) })
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/atoms/chip/chip.tsx
import { forwardRef as forwardRef25, useId as useId6, useRef as useRef8 } from "react";
import { Check as Check4 } from "lucide-react";

// src/atoms/chip/chip.variants.ts
import { cva as cva20 } from "class-variance-authority";
var chipVariants = cva20(
  "inline-flex select-none items-center justify-center gap-1.5 whitespace-nowrap border font-sans font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 border-border-strong bg-background text-foreground hover:border-primary-400 hover:bg-primary-50/50 aria-pressed:border-primary-600 aria-pressed:bg-primary-50 aria-pressed:text-primary-700 aria-checked:border-primary-600 aria-checked:bg-primary-50 aria-checked:text-primary-700",
  {
    variants: {
      size: {
        sm: "h-7 px-2.5 text-caption",
        md: "h-8 px-3 text-body-sm",
        lg: "h-10 px-4 text-body-sm"
      },
      shape: { rounded: "rounded-full", square: "rounded-md" },
      fullWidth: { true: "w-full", false: "" }
    },
    defaultVariants: { size: "md", shape: "rounded", fullWidth: false }
  }
);
var chipGroupVariants = cva20("flex", {
  variants: {
    direction: { row: "flex-row flex-wrap", column: "flex-col items-stretch" },
    gap: { xs: "gap-1", sm: "gap-2", md: "gap-3" }
  },
  defaultVariants: { direction: "row", gap: "sm" }
});

// src/atoms/chip/chip.tsx
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
var Chip = forwardRef25(
  ({
    selected,
    defaultSelected = false,
    onSelectedChange,
    icon,
    showCheck = false,
    count,
    size,
    shape,
    fullWidth,
    className,
    children,
    onClick,
    role,
    "data-testid": testId,
    ...props
  }, ref) => {
    const [isOn, setOn] = useControllableState(selected, defaultSelected, onSelectedChange);
    const stateProps = role === "radio" || role === "checkbox" ? { "aria-checked": isOn } : { "aria-pressed": isOn };
    return /* @__PURE__ */ jsxs14(
      "button",
      {
        ref,
        type: "button",
        role,
        ...stateProps,
        className: cn(chipVariants({ size, shape, fullWidth }), className),
        onClick: (e) => {
          onClick?.(e);
          if (!e.defaultPrevented) setOn(!isOn);
        },
        "data-testid": testId ?? "chip",
        "data-state": isOn ? "on" : "off",
        ...props,
        children: [
          showCheck && isOn ? /* @__PURE__ */ jsx25(Check4, { "aria-hidden": "true", className: "h-3.5 w-3.5" }) : icon,
          children,
          count !== void 0 && /* @__PURE__ */ jsx25("span", { className: "tabular-nums opacity-70", children: count })
        ]
      }
    );
  }
);
Chip.displayName = "Chip";
var ChipGroup = forwardRef25((props, ref) => {
  const {
    options,
    label,
    labelPlacement = "top",
    direction,
    gap,
    size,
    shape,
    showCheck,
    disabled,
    fullWidth,
    className,
    "aria-label": ariaLabel,
    "data-testid": testId
  } = props;
  const isSingle = props.type === "single";
  const labelId = useId6();
  const buttons = useRef8([]);
  const [single, setSingle] = useControllableState(
    isSingle ? props.value : void 0,
    isSingle ? props.defaultValue ?? null : null,
    isSingle ? props.onValueChange : void 0
  );
  const [multiple, setMultiple] = useControllableState(
    !isSingle ? props.value : void 0,
    !isSingle ? props.defaultValue ?? [] : [],
    !isSingle ? props.onValueChange : void 0
  );
  const isSelected = (value) => isSingle ? single === value : multiple.includes(value);
  const max = !isSingle ? props.max : void 0;
  const toggle = (value) => {
    if (isSingle) {
      if (single === value) {
        if (props.deselectable) setSingle(null);
      } else setSingle(value);
    } else if (multiple.includes(value)) {
      setMultiple(multiple.filter((v) => v !== value));
    } else if (max === void 0 || multiple.length < max) {
      setMultiple([...multiple, value]);
    }
  };
  const onKeyDown = (index, e) => {
    if (!isSingle) return;
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1;
    for (let step = 1; step <= options.length; step++) {
      const next = (index + dir * step + options.length) % options.length;
      if (!options[next].disabled) {
        buttons.current[next]?.focus();
        setSingle(options[next].value);
        break;
      }
    }
  };
  const focusIndex = isSingle ? Math.max(0, options.findIndex((o) => o.value === single)) : -1;
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      ref,
      className: cn(labelPlacement === "left" ? "flex items-center gap-3" : "flex flex-col gap-2", className),
      "data-testid": testId ?? `chip-group-${isSingle ? "single" : "multiple"}`,
      children: [
        label && /* @__PURE__ */ jsx25("span", { id: labelId, className: "font-sans text-body-sm font-medium text-foreground", children: label }),
        /* @__PURE__ */ jsx25(
          "div",
          {
            role: isSingle ? "radiogroup" : "group",
            "aria-label": label ? void 0 : ariaLabel,
            "aria-labelledby": label ? labelId : void 0,
            className: chipGroupVariants({ direction, gap }),
            children: options.map((option, index) => {
              const selected = isSelected(option.value);
              const atMax = !isSingle && max !== void 0 && multiple.length >= max && !selected;
              return /* @__PURE__ */ jsx25(
                Chip,
                {
                  ref: (el) => {
                    buttons.current[index] = el;
                  },
                  role: isSingle ? "radio" : void 0,
                  tabIndex: isSingle ? index === focusIndex ? 0 : -1 : void 0,
                  selected,
                  onSelectedChange: () => toggle(option.value),
                  onKeyDown: (e) => onKeyDown(index, e),
                  disabled: disabled || option.disabled || atMax,
                  icon: option.icon,
                  count: option.count,
                  size,
                  shape,
                  showCheck,
                  fullWidth,
                  "data-testid": `chip-${option.value}`,
                  children: option.label
                },
                option.value
              );
            })
          }
        )
      ]
    }
  );
});
ChipGroup.displayName = "ChipGroup";

// src/atoms/segmented-control/segmented-control.tsx
import { forwardRef as forwardRef26, useRef as useRef9 } from "react";

// src/atoms/segmented-control/segmented-control.variants.ts
import { cva as cva21 } from "class-variance-authority";
var segmentedControlVariants = cva21("inline-flex items-center gap-0.5 rounded-lg bg-surface-muted p-1 font-sans", {
  variants: {
    fullWidth: { true: "flex w-full [&>*]:flex-1", false: "" }
  },
  defaultVariants: { fullWidth: false }
});
var segmentVariants = cva21(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md font-medium text-foreground-muted transition-all duration-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-checked:bg-background aria-checked:text-foreground aria-checked:shadow-sm",
  {
    variants: {
      size: { sm: "h-7 px-2.5 text-caption", md: "h-8 px-3 text-body-sm", lg: "h-10 px-4 text-body-sm" },
      tone: {
        neutral: "",
        primary: "aria-checked:bg-primary-600 aria-checked:text-white"
      }
    },
    defaultVariants: { size: "md", tone: "neutral" }
  }
);

// src/atoms/segmented-control/segmented-control.tsx
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var SegmentedControl = forwardRef26(
  ({
    options,
    value,
    defaultValue,
    onValueChange,
    size,
    tone,
    fullWidth,
    disabled,
    className,
    "aria-label": ariaLabel,
    "data-testid": testId
  }, ref) => {
    const [current, setCurrent] = useControllableState(value, defaultValue ?? options[0]?.value ?? "", onValueChange);
    const buttons = useRef9([]);
    const onKeyDown = (index, e) => {
      const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      for (let step = 1; step <= options.length; step++) {
        const next = (index + dir * step + options.length) % options.length;
        if (!options[next].disabled) {
          buttons.current[next]?.focus();
          setCurrent(options[next].value);
          break;
        }
      }
    };
    return /* @__PURE__ */ jsx26(
      "div",
      {
        ref,
        role: "radiogroup",
        "aria-label": ariaLabel,
        className: cn(segmentedControlVariants({ fullWidth }), className),
        "data-testid": testId ?? "segmented-control",
        children: options.map((option, index) => {
          const checked = option.value === current;
          return /* @__PURE__ */ jsxs15(
            "button",
            {
              ref: (el) => {
                buttons.current[index] = el;
              },
              type: "button",
              role: "radio",
              "aria-checked": checked,
              "aria-label": option["aria-label"],
              tabIndex: checked ? 0 : -1,
              disabled: disabled || option.disabled,
              onClick: () => setCurrent(option.value),
              onKeyDown: (e) => onKeyDown(index, e),
              className: segmentVariants({ size, tone }),
              "data-testid": `segment-${option.value}`,
              children: [
                option.icon,
                option.label
              ]
            },
            option.value
          );
        })
      }
    );
  }
);
SegmentedControl.displayName = "SegmentedControl";

// src/atoms/rating/rating.tsx
import { forwardRef as forwardRef27, useState as useState9 } from "react";
import { Star } from "lucide-react";

// src/atoms/rating/rating.variants.ts
import { cva as cva22 } from "class-variance-authority";
var ratingVariants = cva22("inline-flex items-center", {
  variants: {
    size: { sm: "gap-0.5", md: "gap-1", lg: "gap-1" }
  },
  defaultVariants: { size: "md" }
});
var ratingStarVariants = cva22("shrink-0", {
  variants: {
    size: { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-7 w-7" }
  },
  defaultVariants: { size: "md" }
});

// src/atoms/rating/rating.tsx
import { jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
function StarIcon({ fill, size }) {
  const cls = ratingStarVariants({ size });
  return /* @__PURE__ */ jsxs16("span", { className: "relative inline-flex", children: [
    /* @__PURE__ */ jsx27(Star, { "aria-hidden": "true", className: cn(cls, "fill-grey-200 text-grey-200") }),
    fill > 0 && /* @__PURE__ */ jsx27("span", { className: "absolute inset-0 overflow-hidden", style: { width: `${fill * 100}%` }, children: /* @__PURE__ */ jsx27(Star, { "aria-hidden": "true", className: cn(cls, "fill-yellow-400 text-yellow-400") }) })
  ] });
}
var Rating = forwardRef27(
  ({
    value,
    defaultValue = 0,
    onValueChange,
    max = 5,
    readOnly,
    disabled,
    showValue,
    count,
    size,
    className,
    "aria-label": ariaLabel = "Rating",
    "data-testid": testId
  }, ref) => {
    const [current, setCurrent] = useControllableState(value, defaultValue, onValueChange);
    const [hover, setHover] = useState9(null);
    const shown = hover ?? current;
    const interactive = !readOnly && !disabled;
    const summary = (showValue || count !== void 0) && /* @__PURE__ */ jsxs16("span", { className: "ml-1.5 font-sans text-body-sm text-foreground-muted tabular-nums", children: [
      showValue && /* @__PURE__ */ jsx27("span", { className: "font-medium text-foreground", children: current.toFixed(1) }),
      count !== void 0 && /* @__PURE__ */ jsxs16("span", { children: [
        " (",
        count.toLocaleString(),
        ")"
      ] })
    ] });
    if (!interactive) {
      return /* @__PURE__ */ jsxs16(
        "div",
        {
          ref,
          role: "img",
          "aria-label": `${ariaLabel}: ${current} out of ${max}`,
          className: cn(ratingVariants({ size }), disabled && "opacity-50", className),
          "data-testid": testId ?? "rating",
          children: [
            Array.from({ length: max }, (_, i) => /* @__PURE__ */ jsx27(StarIcon, { size, fill: Math.min(1, Math.max(0, current - i)) }, i)),
            summary
          ]
        }
      );
    }
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        setCurrent(Math.min(max, Math.floor(current) + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        setCurrent(Math.max(0, Math.ceil(current) - 1));
      }
    };
    return /* @__PURE__ */ jsxs16("div", { className: cn("inline-flex items-center", className), children: [
      /* @__PURE__ */ jsx27(
        "div",
        {
          ref,
          role: "slider",
          tabIndex: 0,
          "aria-label": ariaLabel,
          "aria-valuemin": 0,
          "aria-valuemax": max,
          "aria-valuenow": current,
          "aria-valuetext": `${current} out of ${max} stars`,
          onKeyDown,
          onMouseLeave: () => setHover(null),
          className: cn(ratingVariants({ size }), "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"),
          "data-testid": testId ?? "rating",
          children: Array.from({ length: max }, (_, i) => {
            const starValue = i + 1;
            return /* @__PURE__ */ jsx27(
              "button",
              {
                type: "button",
                tabIndex: -1,
                "aria-label": `${starValue} star${starValue > 1 ? "s" : ""}`,
                onMouseEnter: () => setHover(starValue),
                onClick: () => setCurrent(starValue === current ? 0 : starValue),
                className: "transition-transform duration-fast hover:scale-110",
                "data-testid": `rating-star-${starValue}`,
                children: /* @__PURE__ */ jsx27(StarIcon, { size, fill: shown >= starValue ? 1 : 0 })
              },
              i
            );
          })
        }
      ),
      summary
    ] });
  }
);
Rating.displayName = "Rating";

// src/atoms/tabs/tabs.tsx
import { createContext as createContext2, forwardRef as forwardRef28, useContext as useContext2 } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// src/atoms/tabs/tabs.variants.ts
import { cva as cva23 } from "class-variance-authority";
var tabsListVariants = cva23("flex font-sans", {
  variants: {
    variant: {
      underline: "",
      pill: "gap-1",
      enclosed: "gap-1 rounded-lg bg-surface-muted p-1"
    },
    orientation: { horizontal: "flex-row items-center", vertical: "flex-col items-stretch" },
    fullWidth: { true: "w-full [&>*]:flex-1", false: "" }
  },
  compoundVariants: [
    { variant: "underline", orientation: "horizontal", class: "gap-6 border-b border-border" },
    { variant: "underline", orientation: "vertical", class: "gap-1 border-l border-border" },
    { variant: "enclosed", orientation: "horizontal", class: "inline-flex" }
  ],
  defaultVariants: { variant: "underline", orientation: "horizontal", fullWidth: false }
});
var tabsTriggerVariants = cva23(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-foreground-muted transition-colors duration-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        underline: "data-[state=active]:text-primary-600",
        pill: "rounded-full data-[state=active]:bg-primary-50 data-[state=active]:text-primary-700",
        enclosed: "rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
      },
      orientation: { horizontal: "", vertical: "justify-start" },
      size: { sm: "text-body-sm", md: "text-body-sm", lg: "text-body" }
    },
    compoundVariants: [
      { variant: "underline", orientation: "horizontal", class: "-mb-px border-b-2 border-transparent pb-2.5 pt-1 data-[state=active]:border-primary-600" },
      { variant: "underline", orientation: "vertical", class: "-ml-px border-l-2 border-transparent px-4 py-2 data-[state=active]:border-primary-600 data-[state=active]:bg-primary-50" },
      { variant: "pill", size: "sm", class: "h-7 px-3" },
      { variant: "pill", size: "md", class: "h-9 px-4" },
      { variant: "pill", size: "lg", class: "h-10 px-5" },
      { variant: "enclosed", size: "sm", class: "h-7 px-3" },
      { variant: "enclosed", size: "md", class: "h-8 px-3" },
      { variant: "enclosed", size: "lg", class: "h-10 px-4" }
    ],
    defaultVariants: { variant: "underline", orientation: "horizontal", size: "md" }
  }
);
var tabsCountVariants = cva23(
  "inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-grey-200 px-1.5 text-caption font-medium text-grey-700 group-data-[state=active]:bg-primary-600 group-data-[state=active]:text-white"
);

// src/atoms/tabs/tabs.tsx
import { jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
var TabsStyleContext = createContext2({ variant: "underline", orientation: "horizontal", size: "md" });
var TabsRoot = forwardRef28(
  ({ variant = "underline", orientation = "horizontal", size = "md", className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx28(TabsStyleContext.Provider, { value: { variant, orientation, size }, children: /* @__PURE__ */ jsx28(
    TabsPrimitive.Root,
    {
      ref,
      orientation,
      className: cn(orientation === "vertical" ? "flex gap-6" : "flex flex-col gap-4", className),
      "data-testid": testId ?? `tabs-${variant}`,
      ...props
    }
  ) })
);
TabsRoot.displayName = "Tabs";
var TabsList = forwardRef28(
  ({ fullWidth, className, ...props }, ref) => {
    const { variant, orientation } = useContext2(TabsStyleContext);
    return /* @__PURE__ */ jsx28(
      TabsPrimitive.List,
      {
        ref,
        className: cn(tabsListVariants({ variant, orientation, fullWidth }), className),
        ...props
      }
    );
  }
);
TabsList.displayName = "Tabs.List";
var TabsTrigger = forwardRef28(
  ({ icon, count, className, children, ...props }, ref) => {
    const { variant, orientation, size } = useContext2(TabsStyleContext);
    return /* @__PURE__ */ jsxs17(
      TabsPrimitive.Trigger,
      {
        ref,
        className: cn(tabsTriggerVariants({ variant, orientation, size }), "group", className),
        "data-testid": `tab-trigger-${props.value}`,
        ...props,
        children: [
          icon,
          children,
          count !== void 0 && /* @__PURE__ */ jsx28("span", { className: tabsCountVariants(), children: count })
        ]
      }
    );
  }
);
TabsTrigger.displayName = "Tabs.Trigger";
var TabsContent = forwardRef28(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx28(
    TabsPrimitive.Content,
    {
      ref,
      className: cn("min-w-0 flex-1 font-sans focus-visible:outline-none", className),
      "data-testid": `tab-content-${props.value}`,
      ...props
    }
  )
);
TabsContent.displayName = "Tabs.Content";
var Tabs = Object.assign(TabsRoot, { List: TabsList, Trigger: TabsTrigger, Content: TabsContent });

// src/atoms/breadcrumb/breadcrumb.tsx
import { forwardRef as forwardRef29, Fragment as Fragment4, useState as useState10 } from "react";
import { ChevronRight } from "lucide-react";

// src/atoms/breadcrumb/breadcrumb.variants.ts
import { cva as cva24 } from "class-variance-authority";
var breadcrumbVariants = cva24("flex flex-wrap items-center gap-1.5 font-sans", {
  variants: {
    size: { sm: "text-caption", md: "text-body-sm" }
  },
  defaultVariants: { size: "md" }
});
var breadcrumbItemVariants = cva24("inline-flex items-center gap-1.5", {
  variants: {
    current: {
      true: "font-medium text-foreground",
      false: "text-foreground-muted"
    }
  },
  defaultVariants: { current: false }
});

// src/atoms/breadcrumb/breadcrumb.tsx
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var Breadcrumb = forwardRef29(
  ({ items, separator, maxItems, size, className, "aria-label": ariaLabel = "Breadcrumb", "data-testid": testId, ...props }, ref) => {
    const [expanded, setExpanded] = useState10(false);
    const shouldCollapse = !expanded && maxItems !== void 0 && items.length > maxItems && maxItems >= 2;
    const visible = shouldCollapse ? [items[0], "ellipsis", ...items.slice(items.length - (maxItems - 1))] : items;
    const sep = separator ?? /* @__PURE__ */ jsx29(ChevronRight, { "aria-hidden": "true", className: "h-3.5 w-3.5 text-foreground-muted" });
    return /* @__PURE__ */ jsx29("nav", { ref, "aria-label": ariaLabel, "data-testid": testId ?? "breadcrumb", ...props, children: /* @__PURE__ */ jsx29("ol", { className: cn(breadcrumbVariants({ size }), className), children: visible.map((item, index) => {
      const isLast = index === visible.length - 1;
      return /* @__PURE__ */ jsxs18(Fragment4, { children: [
        /* @__PURE__ */ jsx29("li", { className: breadcrumbItemVariants({ current: isLast }), children: item === "ellipsis" ? /* @__PURE__ */ jsx29(
          "button",
          {
            type: "button",
            onClick: () => setExpanded(true),
            "aria-label": "Show all breadcrumbs",
            className: "rounded-sm px-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            children: "\u2026"
          }
        ) : isLast ? /* @__PURE__ */ jsxs18("span", { "aria-current": "page", className: "inline-flex items-center gap-1.5", children: [
          item.icon,
          item.label
        ] }) : item.href ? /* @__PURE__ */ jsxs18(Link, { href: item.href, tone: "muted", underline: "hover", onClick: item.onClick, children: [
          item.icon,
          item.label
        ] }) : item.onClick ? /* @__PURE__ */ jsxs18(
          "button",
          {
            type: "button",
            onClick: item.onClick,
            className: "inline-flex items-center gap-1.5 rounded-sm hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            children: [
              item.icon,
              item.label
            ]
          }
        ) : /* @__PURE__ */ jsxs18("span", { className: "inline-flex items-center gap-1.5", children: [
          item.icon,
          item.label
        ] }) }),
        !isLast && /* @__PURE__ */ jsx29("li", { role: "presentation", "aria-hidden": "true", className: "inline-flex", children: sep })
      ] }, index);
    }) }) });
  }
);
Breadcrumb.displayName = "Breadcrumb";

// src/atoms/steps/steps.tsx
import { forwardRef as forwardRef30 } from "react";
import { Check as Check5, X as X3 } from "lucide-react";

// src/atoms/steps/steps.variants.ts
import { cva as cva25 } from "class-variance-authority";
var stepsVariants = cva25("flex font-sans", {
  variants: {
    orientation: { horizontal: "w-full flex-row items-start", vertical: "flex-col" }
  },
  defaultVariants: { orientation: "horizontal" }
});
var stepIndicatorVariants = cva25(
  "relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 font-semibold transition-colors duration-normal",
  {
    variants: {
      status: {
        complete: "border-primary-600 bg-primary-600 text-white",
        current: "border-primary-600 bg-background text-primary-600",
        upcoming: "border-border-strong bg-background text-foreground-muted",
        error: "border-error-600 bg-error-600 text-white"
      },
      size: { sm: "h-6 w-6 text-caption", md: "h-8 w-8 text-body-sm", lg: "h-10 w-10 text-body" }
    },
    defaultVariants: { status: "upcoming", size: "md" }
  }
);
var stepConnectorVariants = cva25("transition-colors duration-normal", {
  variants: {
    complete: { true: "bg-primary-600", false: "bg-border-strong" },
    orientation: { horizontal: "h-0.5 flex-1", vertical: "w-0.5 flex-1 min-h-[1.5rem]" }
  },
  defaultVariants: { complete: false, orientation: "horizontal" }
});
var stepTitleVariants = cva25("font-medium", {
  variants: {
    status: {
      complete: "text-foreground",
      current: "text-primary-600",
      upcoming: "text-foreground-muted",
      error: "text-error-600"
    },
    size: { sm: "text-caption", md: "text-body-sm", lg: "text-body" }
  },
  defaultVariants: { status: "upcoming", size: "md" }
});

// src/atoms/steps/steps.tsx
import { Fragment as Fragment5, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
function statusFor(step, index, current) {
  if (step.status) return step.status;
  if (index < current) return "complete";
  if (index === current) return "current";
  return "upcoming";
}
var Steps = forwardRef30(
  ({
    steps,
    current,
    orientation = "horizontal",
    size = "md",
    onStepClick,
    allowSkipAhead = false,
    className,
    "data-testid": testId,
    ...props
  }, ref) => {
    const iconSize = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-5 w-5" : "h-4 w-4";
    const isVertical = orientation === "vertical";
    return /* @__PURE__ */ jsx30(
      "ol",
      {
        ref,
        className: cn(stepsVariants({ orientation }), className),
        "data-testid": testId ?? `steps-${orientation}`,
        ...props,
        children: steps.map((step, index) => {
          const status = statusFor(step, index, current);
          const isLast = index === steps.length - 1;
          const clickable = !!onStepClick && !step.disabled && (allowSkipAhead || status === "complete" || status === "current");
          const indicator = /* @__PURE__ */ jsx30("span", { className: cn(stepIndicatorVariants({ status, size }), clickable && "group-hover:ring-4 group-hover:ring-primary-100"), children: step.icon ?? (status === "complete" ? /* @__PURE__ */ jsx30(Check5, { "aria-hidden": "true", strokeWidth: 3, className: iconSize }) : status === "error" ? /* @__PURE__ */ jsx30(X3, { "aria-hidden": "true", strokeWidth: 3, className: iconSize }) : index + 1) });
          const text = /* @__PURE__ */ jsxs19("span", { className: cn("flex min-w-0 flex-col gap-0.5", isVertical ? "pb-6 pt-1" : "mt-2 items-center px-2 text-center"), children: [
            /* @__PURE__ */ jsx30("span", { className: stepTitleVariants({ status, size }), children: step.title }),
            step.description && /* @__PURE__ */ jsx30("span", { className: "text-caption text-foreground-muted", children: step.description })
          ] });
          const body = isVertical ? /* @__PURE__ */ jsxs19(Fragment5, { children: [
            /* @__PURE__ */ jsxs19("span", { className: "flex flex-col items-center", children: [
              indicator,
              !isLast && /* @__PURE__ */ jsx30("span", { className: stepConnectorVariants({ complete: index < current, orientation }) })
            ] }),
            text
          ] }) : /* @__PURE__ */ jsxs19(Fragment5, { children: [
            /* @__PURE__ */ jsxs19("span", { className: "flex w-full items-center", children: [
              /* @__PURE__ */ jsx30("span", { className: cn(stepConnectorVariants({ complete: index <= current, orientation }), index === 0 && "invisible") }),
              indicator,
              /* @__PURE__ */ jsx30("span", { className: cn(stepConnectorVariants({ complete: index < current, orientation }), isLast && "invisible") })
            ] }),
            text
          ] });
          const wrapperClass = cn(
            isVertical ? "flex gap-3 text-left" : "flex w-full flex-col items-center",
            step.disabled && "opacity-50"
          );
          return /* @__PURE__ */ jsx30(
            "li",
            {
              className: cn(!isVertical && "flex-1"),
              "aria-current": status === "current" ? "step" : void 0,
              "data-status": status,
              "data-testid": `step-${index}`,
              children: clickable ? /* @__PURE__ */ jsx30(
                "button",
                {
                  type: "button",
                  onClick: () => onStepClick?.(index),
                  className: cn(
                    wrapperClass,
                    "group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  ),
                  children: body
                }
              ) : /* @__PURE__ */ jsx30("div", { className: wrapperClass, children: body })
            },
            index
          );
        })
      }
    );
  }
);
Steps.displayName = "Steps";

// src/atoms/accordion/accordion.tsx
import { createContext as createContext3, forwardRef as forwardRef31, useContext as useContext3 } from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown as ChevronDown2 } from "lucide-react";

// src/atoms/accordion/accordion.variants.ts
import { cva as cva26 } from "class-variance-authority";
var accordionVariants = cva26("w-full font-sans", {
  variants: {
    variant: {
      bordered: "divide-y divide-border rounded-lg border border-border",
      separated: "space-y-3",
      ghost: "divide-y divide-border"
    }
  },
  defaultVariants: { variant: "bordered" }
});
var accordionItemVariants = cva26("", {
  variants: {
    variant: {
      bordered: "",
      separated: "rounded-lg border border-border bg-background",
      ghost: ""
    }
  },
  defaultVariants: { variant: "bordered" }
});
var accordionTriggerVariants = cva26(
  "group flex w-full items-center gap-3 text-left font-medium text-foreground transition-colors duration-fast hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: { bordered: "px-4 py-3.5", separated: "rounded-lg px-4 py-3.5", ghost: "px-0 py-3.5 hover:bg-transparent" },
      size: { sm: "text-body-sm", md: "text-body" },
      iconPosition: { right: "", left: "flex-row-reverse justify-end" }
    },
    defaultVariants: { variant: "bordered", size: "md", iconPosition: "right" }
  }
);
var accordionContentVariants = cva26(
  "overflow-hidden text-body-sm text-foreground-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: { bordered: "px-4", separated: "px-4", ghost: "px-0" }
    },
    defaultVariants: { variant: "bordered" }
  }
);

// src/atoms/accordion/accordion.tsx
import { jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var AccordionStyleContext = createContext3({ variant: "bordered", size: "md", iconPosition: "right" });
var AccordionRoot = forwardRef31(
  ({ variant = "bordered", size = "md", iconPosition = "right", className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx31(AccordionStyleContext.Provider, { value: { variant, size, iconPosition }, children: /* @__PURE__ */ jsx31(
    AccordionPrimitive.Root,
    {
      ref,
      className: cn(accordionVariants({ variant }), className),
      "data-testid": testId ?? `accordion-${variant}`,
      ...props
    }
  ) })
);
AccordionRoot.displayName = "Accordion";
var AccordionItem = forwardRef31(({ className, ...props }, ref) => {
  const { variant } = useContext3(AccordionStyleContext);
  return /* @__PURE__ */ jsx31(
    AccordionPrimitive.Item,
    {
      ref,
      className: cn(accordionItemVariants({ variant }), className),
      "data-testid": `accordion-item-${props.value}`,
      ...props
    }
  );
});
AccordionItem.displayName = "Accordion.Item";
var AccordionTrigger = forwardRef31(
  ({ icon, description, extra, className, children, ...props }, ref) => {
    const { variant, size, iconPosition } = useContext3(AccordionStyleContext);
    const chevron = /* @__PURE__ */ jsx31(
      ChevronDown2,
      {
        "aria-hidden": "true",
        className: "h-4 w-4 shrink-0 text-foreground-muted transition-transform duration-normal group-data-[state=open]:rotate-180"
      }
    );
    return /* @__PURE__ */ jsx31(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs20(
      AccordionPrimitive.Trigger,
      {
        ref,
        className: cn(accordionTriggerVariants({ variant, size }), className),
        ...props,
        children: [
          iconPosition === "left" && chevron,
          icon && /* @__PURE__ */ jsx31("span", { className: "shrink-0", children: icon }),
          /* @__PURE__ */ jsxs20("span", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [
            /* @__PURE__ */ jsx31("span", { children }),
            description && /* @__PURE__ */ jsx31("span", { className: "text-body-sm font-normal text-foreground-muted", children: description })
          ] }),
          extra && /* @__PURE__ */ jsx31("span", { className: "shrink-0", children: extra }),
          iconPosition === "right" && chevron
        ]
      }
    ) });
  }
);
AccordionTrigger.displayName = "Accordion.Trigger";
var AccordionContent = forwardRef31(({ className, children, ...props }, ref) => {
  const { variant } = useContext3(AccordionStyleContext);
  return /* @__PURE__ */ jsx31(AccordionPrimitive.Content, { ref, className: accordionContentVariants({ variant }), ...props, children: /* @__PURE__ */ jsx31("div", { className: cn("pb-4", className), children }) });
});
AccordionContent.displayName = "Accordion.Content";
var Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent
});

// src/atoms/badge/badge.tsx
import { forwardRef as forwardRef32 } from "react";

// src/atoms/badge/badge.variants.ts
import { cva as cva27 } from "class-variance-authority";
var badgeVariants = cva27(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-full border font-sans font-medium",
  {
    variants: {
      tone: {
        neutral: "",
        primary: "",
        success: "",
        warning: "",
        error: "",
        info: ""
      },
      appearance: {
        soft: "border-transparent",
        solid: "border-transparent text-white",
        outline: "bg-transparent"
      },
      size: {
        sm: "px-2 py-0.5 text-caption",
        md: "px-2.5 py-0.5 text-body-sm"
      }
    },
    compoundVariants: [
      { tone: "neutral", appearance: "soft", class: "bg-grey-100 text-grey-700" },
      { tone: "primary", appearance: "soft", class: "bg-primary-50 text-primary-700" },
      { tone: "success", appearance: "soft", class: "bg-success-50 text-success-700" },
      { tone: "warning", appearance: "soft", class: "bg-warning-50 text-warning-700" },
      { tone: "error", appearance: "soft", class: "bg-error-50 text-error-700" },
      { tone: "info", appearance: "soft", class: "bg-info-50 text-info-700" },
      { tone: "neutral", appearance: "solid", class: "bg-grey-600" },
      { tone: "primary", appearance: "solid", class: "bg-primary-600" },
      { tone: "success", appearance: "solid", class: "bg-success-600" },
      { tone: "warning", appearance: "solid", class: "bg-warning-600" },
      { tone: "error", appearance: "solid", class: "bg-error-600" },
      { tone: "info", appearance: "solid", class: "bg-info-600" },
      { tone: "neutral", appearance: "outline", class: "border-grey-300 text-grey-700" },
      { tone: "primary", appearance: "outline", class: "border-primary-500 text-primary-700" },
      { tone: "success", appearance: "outline", class: "border-success-500 text-success-700" },
      { tone: "warning", appearance: "outline", class: "border-warning-500 text-warning-700" },
      { tone: "error", appearance: "outline", class: "border-error-500 text-error-700" },
      { tone: "info", appearance: "outline", class: "border-info-500 text-info-700" }
    ],
    defaultVariants: { tone: "neutral", appearance: "soft", size: "sm" }
  }
);
var badgeDotVariants = cva27("h-1.5 w-1.5 rounded-full bg-current");

// src/atoms/badge/badge.tsx
import { jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
var Badge = forwardRef32(
  ({ tone, appearance, size, dot, icon, className, children, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsxs21(
    "span",
    {
      ref,
      className: cn(badgeVariants({ tone, appearance, size }), className),
      "data-testid": testId ?? `badge-${tone ?? "neutral"}`,
      ...props,
      children: [
        dot && /* @__PURE__ */ jsx32("span", { "aria-hidden": "true", className: badgeDotVariants() }),
        icon,
        children
      ]
    }
  )
);
Badge.displayName = "Badge";

// src/atoms/count-badge/count-badge.tsx
import { forwardRef as forwardRef33 } from "react";

// src/atoms/count-badge/count-badge.variants.ts
import { cva as cva28 } from "class-variance-authority";
var countBadgeVariants = cva28(
  "inline-flex items-center justify-center rounded-full font-sans font-semibold tabular-nums leading-none",
  {
    variants: {
      tone: {
        primary: "bg-primary-600 text-white",
        error: "bg-error-600 text-white",
        success: "bg-success-600 text-white",
        warning: "bg-warning-500 text-white",
        neutral: "bg-grey-200 text-grey-800",
        dark: "bg-grey-900 text-white"
      },
      size: {
        sm: "h-4 min-w-[1rem] px-1 text-[0.625rem]",
        md: "h-5 min-w-[1.25rem] px-1.5 text-caption"
      },
      dot: { true: "h-2.5 w-2.5 min-w-0 p-0", false: "" },
      attached: { true: "absolute -right-1 -top-1 ring-2 ring-background", false: "" }
    },
    defaultVariants: { tone: "error", size: "md", dot: false, attached: false }
  }
);

// src/atoms/count-badge/count-badge.tsx
import { jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var CountBadge = forwardRef33(
  ({ count = 0, max = 99, showZero = false, dot, tone, size, label, children, className, "data-testid": testId, ...props }, ref) => {
    const hidden = !dot && count === 0 && !showZero;
    const text = count > max ? `${max}+` : String(count);
    const srText = dot ? label ?? "New" : `${count}${label ? ` ${label}` : ""}`;
    const badge = hidden ? null : /* @__PURE__ */ jsxs22(
      "span",
      {
        ref,
        className: cn(countBadgeVariants({ tone, size, dot, attached: !!children }), className),
        "data-testid": testId ?? "count-badge",
        ...props,
        children: [
          !dot && /* @__PURE__ */ jsx33("span", { "aria-hidden": "true", children: text }),
          /* @__PURE__ */ jsx33("span", { className: "sr-only", children: srText })
        ]
      }
    );
    if (!children) return badge;
    return /* @__PURE__ */ jsxs22("span", { className: "relative inline-flex", children: [
      children,
      badge
    ] });
  }
);
CountBadge.displayName = "CountBadge";

// src/atoms/status-dot/status-dot.tsx
import { forwardRef as forwardRef34 } from "react";

// src/atoms/status-dot/status-dot.variants.ts
import { cva as cva29 } from "class-variance-authority";
var statusDotVariants = cva29("relative inline-flex shrink-0 rounded-full", {
  variants: {
    tone: {
      success: "bg-success-500",
      warning: "bg-warning-500",
      error: "bg-error-500",
      info: "bg-info-500",
      primary: "bg-primary-600",
      neutral: "bg-grey-400"
    },
    size: { sm: "h-1.5 w-1.5", md: "h-2 w-2", lg: "h-2.5 w-2.5" }
  },
  defaultVariants: { tone: "success", size: "md" }
});

// src/atoms/status-dot/status-dot.tsx
import { jsx as jsx34, jsxs as jsxs23 } from "react/jsx-runtime";
var StatusDot = forwardRef34(
  ({ tone, size, label, pulse, className, "aria-label": ariaLabel, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsxs23(
    "span",
    {
      ref,
      className: cn("inline-flex items-center gap-1.5 font-sans text-body-sm text-foreground", className),
      "data-testid": testId ?? `status-dot-${tone ?? "success"}`,
      ...props,
      children: [
        /* @__PURE__ */ jsx34(
          "span",
          {
            className: statusDotVariants({ tone, size }),
            role: label ? void 0 : "img",
            "aria-label": label ? void 0 : ariaLabel ?? tone ?? "success",
            "aria-hidden": label ? true : void 0,
            children: pulse && /* @__PURE__ */ jsx34("span", { className: cn(statusDotVariants({ tone, size }), "absolute inset-0 animate-ping opacity-75") })
          }
        ),
        label
      ]
    }
  )
);
StatusDot.displayName = "StatusDot";

// src/atoms/alert/alert.tsx
import { forwardRef as forwardRef35 } from "react";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X as X4 } from "lucide-react";

// src/atoms/alert/alert.variants.ts
import { cva as cva30 } from "class-variance-authority";
var alertVariants = cva30("relative flex w-full gap-3 font-sans", {
  variants: {
    tone: {
      info: "border-info-100 bg-info-50 text-info-700",
      success: "border-success-100 bg-success-50 text-success-700",
      warning: "border-warning-100 bg-warning-50 text-warning-700",
      error: "border-error-100 bg-error-50 text-error-700",
      neutral: "border-border bg-surface text-foreground",
      primary: "border-primary-100 bg-primary-50 text-primary-700",
      dark: "border-grey-900 bg-grey-900 text-white"
    },
    /**
     * `inline` — boxed message inside page content (default).
     * `banner` — full-width strip for the top of a page or section (announcements, trial ends, etc.).
     */
    variant: {
      inline: "rounded-lg border p-4",
      banner: "items-center justify-center border-b px-4 py-2.5"
    }
  },
  defaultVariants: { tone: "info", variant: "inline" }
});

// src/atoms/alert/alert.tsx
import { jsx as jsx35, jsxs as jsxs24 } from "react/jsx-runtime";
var defaultIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  neutral: Info,
  primary: Info,
  dark: Info
};
var Alert = forwardRef35(
  ({ tone, variant, title, icon, onDismiss, actions, className, children, "data-testid": testId, ...props }, ref) => {
    const DefaultIcon = defaultIcons[tone ?? "info"];
    const isUrgent = tone === "error" || tone === "warning";
    const isBanner = variant === "banner";
    return /* @__PURE__ */ jsxs24(
      "div",
      {
        ref,
        role: isUrgent ? "alert" : "status",
        className: cn(alertVariants({ tone, variant }), className),
        "data-testid": testId ?? `alert-${tone ?? "info"}`,
        ...props,
        children: [
          icon !== false && /* @__PURE__ */ jsx35("span", { className: cn("shrink-0", !isBanner && "mt-0.5"), children: icon ?? /* @__PURE__ */ jsx35(DefaultIcon, { "aria-hidden": "true", className: isBanner ? "h-4 w-4" : "h-5 w-5" }) }),
          isBanner ? /* @__PURE__ */ jsxs24("div", { className: "flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-body-sm", children: [
            title && /* @__PURE__ */ jsx35("span", { className: "font-semibold", children: title }),
            children && /* @__PURE__ */ jsx35("span", { className: "opacity-90", children }),
            actions && /* @__PURE__ */ jsx35("span", { className: "flex flex-wrap gap-2", children: actions })
          ] }) : /* @__PURE__ */ jsxs24("div", { className: "min-w-0 flex-1 space-y-1", children: [
            title && /* @__PURE__ */ jsx35("p", { className: "text-body-sm font-semibold", children: title }),
            children && /* @__PURE__ */ jsx35("div", { className: "text-body-sm opacity-90", children }),
            actions && /* @__PURE__ */ jsx35("div", { className: "flex flex-wrap gap-2 pt-2", children: actions })
          ] }),
          onDismiss && /* @__PURE__ */ jsx35(
            "button",
            {
              type: "button",
              onClick: onDismiss,
              "aria-label": "Dismiss",
              className: cn(
                "-m-1 h-7 w-7 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isBanner && "absolute right-3 top-1/2 m-0 -translate-y-1/2"
              ),
              children: /* @__PURE__ */ jsx35(X4, { "aria-hidden": "true", className: "h-5 w-5" })
            }
          )
        ]
      }
    );
  }
);
Alert.displayName = "Alert";

// src/atoms/skeleton/skeleton.tsx
import { forwardRef as forwardRef36 } from "react";

// src/atoms/skeleton/skeleton.variants.ts
import { cva as cva31 } from "class-variance-authority";
var skeletonVariants = cva31("animate-pulse bg-grey-200", {
  variants: {
    shape: {
      rect: "rounded-md",
      text: "h-4 w-full rounded-sm",
      circle: "rounded-full"
    }
  },
  defaultVariants: { shape: "rect" }
});

// src/atoms/skeleton/skeleton.tsx
import { jsx as jsx36 } from "react/jsx-runtime";
var Skeleton = forwardRef36(
  ({ shape, width, height, lines = 1, className, style, "data-testid": testId, ...props }, ref) => {
    if (shape === "text" && lines > 1) {
      return /* @__PURE__ */ jsx36("div", { ref, "aria-hidden": "true", className: cn("space-y-2", className), "data-testid": testId ?? "skeleton", ...props, children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ jsx36(
        "div",
        {
          className: skeletonVariants({ shape }),
          style: { width: i === lines - 1 ? "60%" : width, height }
        },
        i
      )) });
    }
    return /* @__PURE__ */ jsx36(
      "div",
      {
        ref,
        "aria-hidden": "true",
        className: cn(skeletonVariants({ shape }), className),
        style: { width, height, ...style },
        "data-testid": testId ?? "skeleton",
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";

// src/atoms/progress/progress.tsx
import { forwardRef as forwardRef37 } from "react";

// src/atoms/progress/progress.variants.ts
import { cva as cva32 } from "class-variance-authority";
var progressTrackVariants = cva32("relative w-full overflow-hidden rounded-full bg-grey-200", {
  variants: {
    size: { sm: "h-1", md: "h-2", lg: "h-3" }
  },
  defaultVariants: { size: "md" }
});
var progressBarVariants = cva32("h-full rounded-full transition-[width] duration-normal ease-out", {
  variants: {
    tone: {
      primary: "bg-primary-600",
      success: "bg-success-600",
      warning: "bg-warning-500",
      error: "bg-error-600"
    },
    indeterminate: {
      true: "absolute inset-y-0 w-1/3 animate-progress-indeterminate",
      false: ""
    }
  },
  defaultVariants: { tone: "primary", indeterminate: false }
});

// src/atoms/progress/progress.tsx
import { jsx as jsx37, jsxs as jsxs25 } from "react/jsx-runtime";
var Progress = forwardRef37(
  ({ value, max = 100, size, tone, label, showValue, className, "data-testid": testId, ...props }, ref) => {
    const indeterminate = value === void 0 || value === null;
    const percent = indeterminate ? 0 : Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ jsxs25("div", { ref, className: cn("w-full font-sans", className), "data-testid": testId ?? "progress", ...props, children: [
      (label || showValue && !indeterminate) && /* @__PURE__ */ jsxs25("div", { className: "mb-1.5 flex items-center justify-between text-body-sm", children: [
        label && /* @__PURE__ */ jsx37("span", { className: "font-medium text-foreground", children: label }),
        showValue && !indeterminate && /* @__PURE__ */ jsxs25("span", { className: "tabular-nums text-foreground-muted", children: [
          Math.round(percent),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx37(
        "div",
        {
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": max,
          "aria-valuenow": indeterminate ? void 0 : value,
          "aria-label": typeof label === "string" ? label : props["aria-label"],
          className: progressTrackVariants({ size }),
          children: /* @__PURE__ */ jsx37(
            "div",
            {
              className: progressBarVariants({ tone, indeterminate }),
              style: indeterminate ? void 0 : { width: `${percent}%` }
            }
          )
        }
      )
    ] });
  }
);
Progress.displayName = "Progress";

// src/atoms/box/box.tsx
import { forwardRef as forwardRef38 } from "react";

// src/atoms/box/box.variants.ts
import { cva as cva33 } from "class-variance-authority";

// src/lib/layout-variants.ts
var gapClasses = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8"
};
var paddingClasses = {
  none: "p-0",
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8"
};
var alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};
var justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
};

// src/atoms/box/box.variants.ts
var boxVariants = cva33("", {
  variants: {
    padding: paddingClasses,
    background: {
      none: "",
      background: "bg-background",
      surface: "bg-surface",
      muted: "bg-surface-muted",
      primary: "bg-primary-50"
    },
    border: { true: "border border-border", false: "" },
    radius: { none: "", sm: "rounded-sm", md: "rounded-md", lg: "rounded-lg", xl: "rounded-xl", full: "rounded-full" },
    shadow: { none: "", sm: "shadow-sm", md: "shadow-md", lg: "shadow-lg" }
  }
});

// src/atoms/box/box.tsx
import { jsx as jsx38 } from "react/jsx-runtime";
var Box = forwardRef38(
  ({ as: Component = "div", padding, background, border, radius, shadow, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx38(
    Component,
    {
      ref,
      className: cn(boxVariants({ padding, background, border, radius, shadow }), className),
      "data-testid": testId ?? "box",
      ...props
    }
  )
);
Box.displayName = "Box";

// src/atoms/stack/stack.tsx
import { forwardRef as forwardRef39 } from "react";

// src/atoms/stack/stack.variants.ts
import { cva as cva34 } from "class-variance-authority";
var stackVariants = cva34("flex", {
  variants: {
    direction: { vertical: "flex-col", horizontal: "flex-row" },
    gap: gapClasses,
    align: alignClasses,
    justify: justifyClasses,
    wrap: { true: "flex-wrap", false: "" }
  },
  defaultVariants: { direction: "vertical", gap: "md" }
});

// src/atoms/stack/stack.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var Stack = forwardRef39(
  ({ as: Component = "div", direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx39(
    Component,
    {
      ref,
      className: cn(stackVariants({ direction, gap, align, justify, wrap }), className),
      "data-testid": testId ?? `stack-${direction ?? "vertical"}`,
      ...props
    }
  )
);
Stack.displayName = "Stack";

// src/atoms/flex/flex.tsx
import { forwardRef as forwardRef40 } from "react";

// src/atoms/flex/flex.variants.ts
import { cva as cva35 } from "class-variance-authority";
var flexGapClasses = {
  none: "gap-0 [--flex-gap:0px]",
  xs: "gap-1 [--flex-gap:0.25rem]",
  sm: "gap-2 [--flex-gap:0.5rem]",
  md: "gap-4 [--flex-gap:1rem]",
  lg: "gap-6 [--flex-gap:1.5rem]",
  xl: "gap-8 [--flex-gap:2rem]"
};
var flexVariants = cva35("", {
  variants: {
    inline: { true: "inline-flex", false: "flex" },
    direction: { row: "flex-row", column: "flex-col", "row-reverse": "flex-row-reverse", "column-reverse": "flex-col-reverse" },
    gap: flexGapClasses,
    align: alignClasses,
    justify: justifyClasses,
    wrap: { nowrap: "flex-nowrap", wrap: "flex-wrap", "wrap-reverse": "flex-wrap-reverse" }
  },
  defaultVariants: { inline: false, direction: "row", gap: "none" }
});
var flexItemVariants = cva35("min-w-0", {
  variants: {
    alignSelf: {
      auto: "self-auto",
      start: "self-start",
      center: "self-center",
      end: "self-end",
      stretch: "self-stretch",
      baseline: "self-baseline"
    }
  }
});

// src/atoms/flex/flex.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
var FLEX_COLUMNS = 24;
var FlexRoot = forwardRef40(
  ({ as: Component = "div", inline, direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx40(
    Component,
    {
      ref,
      className: cn(flexVariants({ inline, direction, gap, align, justify, wrap }), className),
      "data-testid": testId ?? "flex",
      ...props
    }
  )
);
FlexRoot.displayName = "Flex";
function columnWidth(span) {
  const ratio = Math.min(Math.max(span, 0), FLEX_COLUMNS) / FLEX_COLUMNS;
  const percent = +(ratio * 100).toFixed(4);
  const gapShare = +(1 - ratio).toFixed(4);
  return `calc(${percent}% - var(--flex-gap, 0px) * ${gapShare})`;
}
function toFactor(value, whenTrue) {
  if (value === void 0) return void 0;
  if (typeof value === "number") return value;
  return value ? whenTrue : 0;
}
var FlexItem = forwardRef40(
  ({ as: Component = "div", colspan, offset, grow, shrink, basis, order, alignSelf, className, style, "data-testid": testId, ...props }, ref) => {
    const itemStyle = {
      ...colspan !== void 0 && { flex: `0 0 ${columnWidth(colspan)}`, maxWidth: columnWidth(colspan) },
      ...offset !== void 0 && { marginLeft: `calc(${+(offset / FLEX_COLUMNS * 100).toFixed(4)}% + var(--flex-gap, 0px) * ${+(offset / FLEX_COLUMNS).toFixed(4)})` },
      ...grow !== void 0 && { flexGrow: toFactor(grow, 1) },
      ...shrink !== void 0 && { flexShrink: toFactor(shrink, 1) },
      ...basis !== void 0 && { flexBasis: basis },
      ...order !== void 0 && { order },
      ...style
    };
    return /* @__PURE__ */ jsx40(
      Component,
      {
        ref,
        className: cn(flexItemVariants({ alignSelf }), className),
        style: itemStyle,
        "data-testid": testId ?? (colspan !== void 0 ? `flex-item-${colspan}` : "flex-item"),
        ...props
      }
    );
  }
);
FlexItem.displayName = "Flex.Item";
var Flex = Object.assign(FlexRoot, { Item: FlexItem });

// src/atoms/flexbox/flexbox.tsx
import { forwardRef as forwardRef41 } from "react";

// src/atoms/flexbox/flexbox.variants.ts
import { cva as cva36 } from "class-variance-authority";
var flexboxVariants = cva36("flex", {
  variants: {
    direction: { row: "flex-row", column: "flex-col" },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      "space-around": "justify-around"
    },
    align: {
      top: "items-start",
      middle: "items-center",
      bottom: "items-end",
      stretch: "items-stretch",
      end: "items-end"
    },
    gutter: {
      xs: "gap-1 [--flex-gap:4px]",
      sm: "gap-2 [--flex-gap:8px]",
      md: "gap-3 [--flex-gap:12px]",
      lg: "gap-4 [--flex-gap:16px]",
      xl: "gap-6 [--flex-gap:24px]"
    },
    mt: { xs: "mt-1", sm: "mt-2", md: "mt-3", lg: "mt-4", xl: "mt-6" },
    mb: { xs: "mb-1", sm: "mb-2", md: "mb-3", lg: "mb-4", xl: "mb-6" },
    nowrap: { true: "flex-nowrap", false: "flex-wrap" }
  },
  defaultVariants: { direction: "row", justify: "start", nowrap: false }
});

// src/atoms/flexbox/flexbox.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
var FlexboxRoot = forwardRef41(
  ({ direction, justify, align, gutter, mt, mb, nowrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx41(
    "div",
    {
      ref,
      className: cn(flexboxVariants({ direction, justify, align, gutter, mt, mb, nowrap }), className),
      "data-testid": testId ?? "flexbox",
      ...props
    }
  )
);
FlexboxRoot.displayName = "Flexbox";
var Flexbox = Object.assign(FlexboxRoot, { Item: FlexItem });

// src/atoms/container/container.tsx
import { forwardRef as forwardRef42 } from "react";

// src/atoms/container/container.variants.ts
import { cva as cva37 } from "class-variance-authority";
var containerVariants = cva37("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-none"
    },
    gutter: { true: "", false: "px-0 sm:px-0 lg:px-0" }
  },
  defaultVariants: { size: "xl", gutter: true }
});

// src/atoms/container/container.tsx
import { jsx as jsx42 } from "react/jsx-runtime";
var Container = forwardRef42(
  ({ as: Component = "div", size, gutter, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx42(
    Component,
    {
      ref,
      className: cn(containerVariants({ size, gutter }), className),
      "data-testid": testId ?? "container",
      ...props
    }
  )
);
Container.displayName = "Container";

// src/atoms/divider/divider.tsx
import { forwardRef as forwardRef43 } from "react";

// src/atoms/divider/divider.variants.ts
import { cva as cva38 } from "class-variance-authority";
var dividerVariants = cva38("shrink-0 border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "min-h-[1em] self-stretch border-l"
    },
    variant: { solid: "border-solid", dashed: "border-dashed" }
  },
  defaultVariants: { orientation: "horizontal", variant: "solid" }
});
var dividerSpacingVariants = cva38("", {
  variants: {
    orientation: { horizontal: "", vertical: "" },
    spacing: { none: "", sm: "", md: "", lg: "" }
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "sm", class: "my-2" },
    { orientation: "horizontal", spacing: "md", class: "my-4" },
    { orientation: "horizontal", spacing: "lg", class: "my-6" },
    { orientation: "vertical", spacing: "sm", class: "mx-2" },
    { orientation: "vertical", spacing: "md", class: "mx-4" },
    { orientation: "vertical", spacing: "lg", class: "mx-6" }
  ],
  defaultVariants: { orientation: "horizontal", spacing: "none" }
});

// src/atoms/divider/divider.tsx
import { jsx as jsx43, jsxs as jsxs26 } from "react/jsx-runtime";
var Divider = forwardRef43(
  ({ orientation, variant, spacing, label, className, "data-testid": testId, ...props }, ref) => {
    const dataTestId = testId ?? `divider-${orientation ?? "horizontal"}`;
    const spacingClass = dividerSpacingVariants({ orientation, spacing });
    if (label && orientation !== "vertical") {
      return /* @__PURE__ */ jsxs26(
        "div",
        {
          ref,
          role: "separator",
          className: cn("flex w-full items-center gap-3", spacingClass, className),
          "data-testid": dataTestId,
          ...props,
          children: [
            /* @__PURE__ */ jsx43("span", { className: cn(dividerVariants({ variant }), "flex-1") }),
            /* @__PURE__ */ jsx43("span", { className: "font-sans text-caption font-medium uppercase text-foreground-muted", children: label }),
            /* @__PURE__ */ jsx43("span", { className: cn(dividerVariants({ variant }), "flex-1") })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsx43(
      "div",
      {
        ref,
        role: "separator",
        "aria-orientation": orientation ?? "horizontal",
        className: cn(dividerVariants({ orientation, variant }), spacingClass, className),
        "data-testid": dataTestId,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";

// src/atoms/card/card.tsx
import { forwardRef as forwardRef44 } from "react";

// src/atoms/card/card.variants.ts
import { cva as cva39 } from "class-variance-authority";
var cardVariants = cva39("rounded-lg bg-background font-sans text-foreground", {
  variants: {
    variant: {
      outlined: "border border-border",
      elevated: "border border-border shadow-md",
      filled: "bg-surface",
      ghost: ""
    },
    padding: { none: "", sm: "p-3", md: "p-5", lg: "p-6" },
    interactive: {
      true: "cursor-pointer transition-shadow duration-normal hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      false: ""
    }
  },
  defaultVariants: { variant: "outlined", padding: "md", interactive: false }
});

// src/atoms/card/card.tsx
import { jsx as jsx44, jsxs as jsxs27 } from "react/jsx-runtime";
var CardRoot = forwardRef44(
  ({ variant, padding, interactive, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx44(
    "div",
    {
      ref,
      className: cn(cardVariants({ variant, padding, interactive }), className),
      "data-testid": testId ?? "card",
      ...props
    }
  )
);
CardRoot.displayName = "Card";
var CardHeader = forwardRef44(
  ({ title, description, action, className, children, ...props }, ref) => /* @__PURE__ */ jsxs27("div", { ref, className: cn("mb-4 flex items-start justify-between gap-4", className), ...props, children: [
    /* @__PURE__ */ jsxs27("div", { className: "min-w-0 space-y-1", children: [
      title && /* @__PURE__ */ jsx44("h3", { className: "text-body-lg font-semibold text-foreground", children: title }),
      description && /* @__PURE__ */ jsx44("p", { className: "text-body-sm text-foreground-muted", children: description }),
      children
    ] }),
    action && /* @__PURE__ */ jsx44("div", { className: "shrink-0", children: action })
  ] })
);
CardHeader.displayName = "CardHeader";
var CardContent = forwardRef44(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx44("div", { ref, className: cn("text-body-sm", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = forwardRef44(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
    "div",
    {
      ref,
      className: cn("mt-5 flex items-center justify-end gap-2 border-t border-border pt-4", className),
      ...props
    }
  )
);
CardFooter.displayName = "CardFooter";
var Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter
});

// src/atoms/avatar/avatar.tsx
import { forwardRef as forwardRef45, useEffect as useEffect5, useState as useState11 } from "react";

// src/atoms/avatar/avatar.variants.ts
import { cva as cva40 } from "class-variance-authority";
var avatarVariants = cva40(
  "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden font-sans font-medium",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-[0.625rem]",
        sm: "h-8 w-8 text-caption",
        md: "h-10 w-10 text-body-sm",
        lg: "h-12 w-12 text-body",
        xl: "h-16 w-16 text-body-lg"
      },
      shape: { circle: "rounded-full", square: "rounded-md" },
      tone: {
        grey: "bg-grey-200 text-grey-700",
        blue: "bg-blue-100 text-blue-700",
        green: "bg-green-100 text-green-700",
        red: "bg-red-100 text-red-700",
        yellow: "bg-yellow-100 text-yellow-800"
      }
    },
    defaultVariants: { size: "md", shape: "circle", tone: "grey" }
  }
);
var avatarStatusVariants = cva40("absolute bottom-0 right-0 block rounded-full ring-2 ring-background", {
  variants: {
    status: {
      online: "bg-success-500",
      offline: "bg-grey-400",
      busy: "bg-error-500",
      away: "bg-warning-500"
    },
    size: { xs: "h-1.5 w-1.5", sm: "h-2 w-2", md: "h-2.5 w-2.5", lg: "h-3 w-3", xl: "h-4 w-4" }
  },
  defaultVariants: { size: "md" }
});

// src/atoms/avatar/avatar.tsx
import { jsx as jsx45, jsxs as jsxs28 } from "react/jsx-runtime";
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
var Avatar = forwardRef45(
  ({ src, name, size, shape, tone, status, className, "data-testid": testId, ...props }, ref) => {
    const [failed, setFailed] = useState11(false);
    useEffect5(() => setFailed(false), [src]);
    const showImage = src && !failed;
    return /* @__PURE__ */ jsxs28(
      "span",
      {
        ref,
        role: "img",
        "aria-label": name ?? "Avatar",
        className: cn(avatarVariants({ size, shape, tone }), status && "overflow-visible", className),
        "data-testid": testId ?? "avatar",
        ...props,
        children: [
          showImage ? /* @__PURE__ */ jsx45(
            "img",
            {
              src,
              alt: "",
              onError: () => setFailed(true),
              className: cn("h-full w-full object-cover", shape === "square" ? "rounded-md" : "rounded-full")
            }
          ) : /* @__PURE__ */ jsx45("span", { "aria-hidden": "true", children: getInitials(name) }),
          status && /* @__PURE__ */ jsx45("span", { "aria-hidden": "true", className: avatarStatusVariants({ status, size }) })
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/atoms/timeline/timeline.tsx
import { forwardRef as forwardRef46 } from "react";

// src/atoms/timeline/timeline.variants.ts
import { cva as cva41 } from "class-variance-authority";
var timelineMarkerVariants = cva41(
  "relative z-10 flex shrink-0 items-center justify-center rounded-full ring-4 ring-background",
  {
    variants: {
      tone: {
        primary: "bg-primary-600 text-white",
        success: "bg-success-600 text-white",
        warning: "bg-warning-500 text-white",
        error: "bg-error-600 text-white",
        neutral: "bg-grey-300 text-grey-700"
      },
      hasIcon: { true: "h-7 w-7", false: "mt-1.5 h-2.5 w-2.5" }
    },
    defaultVariants: { tone: "primary", hasIcon: false }
  }
);

// src/atoms/timeline/timeline.tsx
import { jsx as jsx46, jsxs as jsxs29 } from "react/jsx-runtime";
var Timeline = forwardRef46(
  ({ items, timePosition = "inline", pending, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx46("ol", { ref, className: cn("font-sans", className), "data-testid": testId ?? "timeline", ...props, children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    const hasIcon = !!item.icon;
    return /* @__PURE__ */ jsxs29("li", { className: "flex gap-3", "data-testid": `timeline-item-${index}`, children: [
      timePosition === "left" && /* @__PURE__ */ jsx46("span", { className: "w-24 shrink-0 pt-1 text-right text-caption text-foreground-muted", children: item.time }),
      /* @__PURE__ */ jsxs29("span", { className: "flex w-7 flex-col items-center", children: [
        /* @__PURE__ */ jsx46("span", { className: timelineMarkerVariants({ tone: item.tone, hasIcon }), children: hasIcon && /* @__PURE__ */ jsx46("span", { className: "inline-flex h-3.5 w-3.5 items-center justify-center [&>svg]:h-3.5 [&>svg]:w-3.5", children: item.icon }) }),
        !isLast && /* @__PURE__ */ jsx46(
          "span",
          {
            "aria-hidden": "true",
            className: cn(
              "-my-0.5 w-px flex-1",
              pending && index === items.length - 2 ? "border-l border-dashed border-border-strong" : "bg-border-strong"
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxs29("div", { className: cn("min-w-0 flex-1", !isLast && "pb-6", hasIcon && "pt-0.5"), children: [
        /* @__PURE__ */ jsx46("p", { className: "text-body-sm font-medium text-foreground", children: item.title }),
        timePosition === "inline" && item.time && /* @__PURE__ */ jsx46("p", { className: "text-caption text-foreground-muted", children: item.time }),
        item.description && /* @__PURE__ */ jsx46("p", { className: "mt-1 text-body-sm text-foreground-muted", children: item.description }),
        item.content && /* @__PURE__ */ jsx46("div", { className: "mt-2", children: item.content })
      ] })
    ] }, item.key ?? index);
  }) })
);
Timeline.displayName = "Timeline";

// src/atoms/dialog/dialog.tsx
import { forwardRef as forwardRef47 } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X as X5 } from "lucide-react";

// src/atoms/dialog/dialog.variants.ts
import { cva as cva42 } from "class-variance-authority";
var dialogOverlayVariants = cva42("fixed inset-0 z-50 bg-grey-900/50 animate-fade-in");
var dialogContentVariants = cva42(
  "fixed z-50 flex flex-col bg-background font-sans text-foreground shadow-lg focus:outline-none",
  {
    variants: {
      placement: {
        center: "left-1/2 top-1/2 max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl animate-dialog-in",
        right: "inset-y-0 right-0 h-full w-full animate-drawer-in-right"
      },
      size: { sm: "", md: "", lg: "", xl: "", full: "" }
    },
    compoundVariants: [
      { placement: "center", size: "sm", class: "max-w-sm" },
      { placement: "center", size: "md", class: "max-w-lg" },
      { placement: "center", size: "lg", class: "max-w-2xl" },
      { placement: "center", size: "xl", class: "max-w-4xl" },
      { placement: "center", size: "full", class: "h-[calc(100dvh-2rem)] max-w-none" },
      { placement: "right", size: "sm", class: "max-w-sm" },
      { placement: "right", size: "md", class: "max-w-md" },
      { placement: "right", size: "lg", class: "max-w-xl" },
      { placement: "right", size: "xl", class: "max-w-3xl" },
      { placement: "right", size: "full", class: "max-w-none" }
    ],
    defaultVariants: { placement: "center", size: "md" }
  }
);

// src/atoms/dialog/dialog.tsx
import { jsx as jsx47, jsxs as jsxs30 } from "react/jsx-runtime";
var DialogRoot = forwardRef47(
  ({
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
    "data-testid": testId
  }, ref) => {
    const block = (e) => {
      if (preventClose) e.preventDefault();
    };
    return /* @__PURE__ */ jsxs30(DialogPrimitive.Root, { open, defaultOpen, onOpenChange, children: [
      trigger && /* @__PURE__ */ jsx47(DialogPrimitive.Trigger, { asChild: true, children: trigger }),
      /* @__PURE__ */ jsxs30(DialogPrimitive.Portal, { children: [
        /* @__PURE__ */ jsx47(DialogPrimitive.Overlay, { className: dialogOverlayVariants() }),
        /* @__PURE__ */ jsxs30(
          DialogPrimitive.Content,
          {
            ref,
            ...!description && { "aria-describedby": void 0 },
            onPointerDownOutside: block,
            onEscapeKeyDown: block,
            className: cn(dialogContentVariants({ placement, size }), className),
            "data-testid": testId ?? "dialog",
            children: [
              (title || !hideCloseButton) && /* @__PURE__ */ jsxs30("div", { className: cn("flex items-start gap-4 px-6 pt-5", !title && "absolute right-0 top-0 z-10"), children: [
                title && /* @__PURE__ */ jsxs30("div", { className: "min-w-0 flex-1 space-y-1", children: [
                  /* @__PURE__ */ jsx47(DialogPrimitive.Title, { className: "text-h4 text-foreground", children: title }),
                  description && /* @__PURE__ */ jsx47(DialogPrimitive.Description, { className: "text-body-sm text-foreground-muted", children: description })
                ] }),
                !hideCloseButton && /* @__PURE__ */ jsx47(
                  DialogPrimitive.Close,
                  {
                    "aria-label": "Close",
                    disabled: preventClose,
                    className: "-mr-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-foreground-muted transition-colors hover:bg-surface-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
                    children: /* @__PURE__ */ jsx47(X5, { "aria-hidden": "true", className: "h-5 w-5" })
                  }
                )
              ] }),
              !title && /* @__PURE__ */ jsx47(DialogPrimitive.Title, { className: "sr-only", children: ariaLabel ?? "Dialog" }),
              !title && description && /* @__PURE__ */ jsx47(DialogPrimitive.Description, { className: "sr-only", children: description }),
              /* @__PURE__ */ jsx47("div", { className: cn("min-h-0 flex-1 overflow-y-auto px-6 py-5 text-body-sm", bodyClassName), children }),
              footer && /* @__PURE__ */ jsx47("div", { className: "flex flex-wrap items-center justify-end gap-2 border-t border-border px-6 py-4", children: footer })
            ]
          }
        )
      ] })
    ] });
  }
);
DialogRoot.displayName = "Dialog";
var Dialog = Object.assign(DialogRoot, { Close: DialogPrimitive.Close });
var DialogClose = DialogPrimitive.Close;

// src/atoms/dropdown-menu/dropdown-menu.tsx
import { forwardRef as forwardRef48 } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { Check as Check6 } from "lucide-react";

// src/atoms/dropdown-menu/dropdown-menu.variants.ts
import { cva as cva43 } from "class-variance-authority";
var dropdownContentVariants = cva43(
  "z-50 min-w-[10rem] max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-y-auto rounded-md border border-border bg-background p-1 font-sans text-foreground shadow-lg animate-pop-in"
);
var dropdownItemVariants = cva43(
  "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-body-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      danger: {
        true: "text-error-600 data-[highlighted]:bg-error-50",
        false: "data-[highlighted]:bg-surface-muted"
      },
      inset: { true: "pl-8", false: "" }
    },
    defaultVariants: { danger: false, inset: false }
  }
);

// src/atoms/dropdown-menu/dropdown-menu.tsx
import { Fragment as Fragment6, jsx as jsx48, jsxs as jsxs31 } from "react/jsx-runtime";
var DropdownMenu = forwardRef48(
  ({ trigger, items, align = "start", side = "bottom", open, onOpenChange, keepOpenOnSelect, className, "data-testid": testId }, ref) => {
    const hasCheckbox = items.some((i) => i.type === "checkbox");
    return /* @__PURE__ */ jsxs31(Menu.Root, { open, onOpenChange, modal: false, children: [
      /* @__PURE__ */ jsx48(Menu.Trigger, { asChild: true, children: trigger }),
      /* @__PURE__ */ jsx48(Menu.Portal, { children: /* @__PURE__ */ jsx48(
        Menu.Content,
        {
          ref,
          align,
          side,
          sideOffset: 4,
          className: cn(dropdownContentVariants(), className),
          "data-testid": testId ?? "dropdown-menu",
          children: items.map((item, index) => {
            const key = item.key ?? String(index);
            switch (item.type) {
              case "separator":
                return /* @__PURE__ */ jsx48(Menu.Separator, { className: "-mx-1 my-1 h-px bg-border" }, key);
              case "label":
                return /* @__PURE__ */ jsx48(Menu.Label, { className: "px-2 py-1.5 text-caption font-medium uppercase text-foreground-muted", children: item.label }, key);
              case "checkbox":
                return /* @__PURE__ */ jsxs31(
                  Menu.CheckboxItem,
                  {
                    checked: item.checked,
                    onCheckedChange: item.onCheckedChange,
                    disabled: item.disabled,
                    onSelect: (e) => keepOpenOnSelect && e.preventDefault(),
                    className: dropdownItemVariants({ inset: true }),
                    children: [
                      /* @__PURE__ */ jsx48("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsx48(Menu.ItemIndicator, { children: /* @__PURE__ */ jsx48(Check6, { "aria-hidden": "true", className: "h-4 w-4 text-primary-600" }) }) }),
                      item.label
                    ]
                  },
                  key
                );
              default: {
                const content = /* @__PURE__ */ jsxs31(Fragment6, { children: [
                  item.icon && /* @__PURE__ */ jsx48("span", { className: "inline-flex h-4 w-4 shrink-0 items-center justify-center", children: item.icon }),
                  /* @__PURE__ */ jsx48("span", { className: "flex-1", children: item.label }),
                  item.shortcut && /* @__PURE__ */ jsx48("span", { className: "ml-4 text-caption text-foreground-muted", children: item.shortcut })
                ] });
                const className2 = dropdownItemVariants({ danger: item.danger, inset: hasCheckbox && !item.icon });
                return item.href ? /* @__PURE__ */ jsx48(Menu.Item, { asChild: true, disabled: item.disabled, onSelect: item.onSelect, children: /* @__PURE__ */ jsx48("a", { href: item.href, className: className2, children: content }) }, key) : /* @__PURE__ */ jsx48(
                  Menu.Item,
                  {
                    disabled: item.disabled,
                    onSelect: (e) => {
                      if (keepOpenOnSelect) e.preventDefault();
                      item.onSelect?.();
                    },
                    className: className2,
                    children: content
                  },
                  key
                );
              }
            }
          })
        }
      ) })
    ] });
  }
);
DropdownMenu.displayName = "DropdownMenu";
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  Avatar,
  Badge,
  BitwinUIProvider,
  Box,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Chip,
  ChipGroup,
  Container,
  CopyButton,
  CountBadge,
  Dialog,
  DialogClose,
  Divider,
  DropdownMenu,
  FLEX_COLUMNS,
  Flex,
  FlexItem,
  Flexbox,
  Heading,
  Icon,
  Input,
  Label,
  Link,
  NumberInput,
  OTPInput,
  PasswordInput,
  Progress,
  Radio,
  RadioGroup,
  Rating,
  SearchInput,
  SegmentedControl,
  Select,
  Skeleton,
  Spinner,
  Stack,
  StatusDot,
  Steps,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  TagInput,
  Text,
  Textarea,
  Timeline,
  Tooltip,
  TooltipProvider,
  TruncatedText,
  accordionVariants,
  alertVariants,
  avatarVariants,
  badgeVariants,
  boxVariants,
  breadcrumbVariants,
  buttonGroupVariants,
  buttonVariants,
  cardVariants,
  checkboxBoxVariants,
  chipGroupVariants,
  chipVariants,
  cn,
  containerVariants,
  countBadgeVariants,
  dialogContentVariants,
  dividerVariants,
  dropdownItemVariants,
  fieldVariants,
  flexItemVariants,
  flexVariants,
  flexboxVariants,
  getInitials,
  headingVariants,
  iconVariants,
  labelVariants,
  linkVariants,
  otpCellVariants,
  progressBarVariants,
  progressTrackVariants,
  radioGroupVariants,
  radioVariants,
  ratingVariants,
  segmentVariants,
  segmentedControlVariants,
  skeletonVariants,
  spinnerVariants,
  stackVariants,
  statusDotVariants,
  switchThumbVariants,
  switchTrackVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tagInputVariants,
  tagVariants,
  textVariants,
  timelineMarkerVariants,
  tooltipContentVariants,
  useControllableState,
  useLinkComponent
};
//# sourceMappingURL=index.mjs.map