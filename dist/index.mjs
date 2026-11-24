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

// src/atoms/button/button.tsx
import { forwardRef as forwardRef5 } from "react";

// src/atoms/button/button.variants.ts
import { cva as cva5 } from "class-variance-authority";
var buttonVariants = cva5(
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
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Button = forwardRef5(
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
    const content = /* @__PURE__ */ jsxs2(Fragment2, { children: [
      isLoading && /* @__PURE__ */ jsx5("span", { "aria-hidden": "true", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx5("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
      /* @__PURE__ */ jsxs2("span", { className: cn("inline-flex items-center gap-2", isLoading && "invisible"), children: [
        leftIcon,
        children,
        rightIcon
      ] })
    ] });
    if (href !== void 0) {
      const Component = as ?? contextLink ?? "a";
      return /* @__PURE__ */ jsx5(
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
    return /* @__PURE__ */ jsx5(
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

// src/atoms/label/label.tsx
import { forwardRef as forwardRef6 } from "react";

// src/atoms/label/label.variants.ts
import { cva as cva6 } from "class-variance-authority";
var labelVariants = cva6("inline-block font-sans font-medium text-foreground", {
  variants: {
    size: { sm: "text-caption", md: "text-body-sm", lg: "text-body" },
    disabled: { true: "cursor-not-allowed opacity-60", false: "" }
  },
  defaultVariants: { size: "md", disabled: false }
});

// src/atoms/label/label.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var Label = forwardRef6(
  ({ size, disabled, required, className, children, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsxs3(
    "label",
    {
      ref,
      className: cn(labelVariants({ size, disabled }), className),
      "data-testid": testId ?? (props.htmlFor ? `label-${props.htmlFor}` : "label"),
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ jsx6("span", { "aria-hidden": "true", className: "ml-0.5 text-error-600", children: "*" })
      ]
    }
  )
);
Label.displayName = "Label";

// src/atoms/input/input.tsx
import { forwardRef as forwardRef7 } from "react";

// src/lib/field-variants.ts
import { cva as cva7 } from "class-variance-authority";
var fieldVariants = cva7(
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
import { cva as cva8 } from "class-variance-authority";
var inputAdornmentVariants = cva8(
  "pointer-events-none absolute inset-y-0 flex items-center text-foreground-muted",
  {
    variants: {
      side: { left: "left-0 pl-3", right: "right-0 pr-3" }
    }
  }
);

// src/atoms/input/input.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var Input = forwardRef7(
  ({ size, invalid, leftElement, rightElement, className, type = "text", "data-testid": testId, ...props }, ref) => {
    const input = /* @__PURE__ */ jsx7(
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
    return /* @__PURE__ */ jsxs4("div", { className: cn("relative w-full", className), children: [
      leftElement && /* @__PURE__ */ jsx7("span", { className: inputAdornmentVariants({ side: "left" }), children: leftElement }),
      input,
      rightElement && /* @__PURE__ */ jsx7("span", { className: inputAdornmentVariants({ side: "right" }), children: rightElement })
    ] });
  }
);
Input.displayName = "Input";

// src/atoms/textarea/textarea.tsx
import { forwardRef as forwardRef8 } from "react";

// src/atoms/textarea/textarea.variants.ts
import { cva as cva9 } from "class-variance-authority";
var textareaVariants = cva9("h-auto min-h-[5rem] py-2", {
  variants: {
    resize: { none: "resize-none", vertical: "resize-y", both: "resize" }
  },
  defaultVariants: { resize: "vertical" }
});

// src/atoms/textarea/textarea.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var Textarea = forwardRef8(
  ({ invalid, resize, className, rows = 4, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx8(
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
import { forwardRef as forwardRef9, useEffect, useId, useImperativeHandle, useRef } from "react";
import { Check, Minus } from "lucide-react";

// src/atoms/checkbox/checkbox.variants.ts
import { cva as cva10 } from "class-variance-authority";
var checkboxBoxVariants = cva10(
  "peer shrink-0 cursor-pointer appearance-none rounded-sm border border-border-strong bg-background transition-colors duration-fast hover:border-primary-500 checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" },
      invalid: { true: "border-error-500", false: "" }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);
var checkboxIconVariants = cva10(
  "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0",
  {
    variants: {
      size: { sm: "h-3 w-3", md: "h-3.5 w-3.5" }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/checkbox/checkbox.tsx
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var Checkbox = forwardRef9(
  ({ size, invalid, label, description, indeterminate = false, className, id, "data-testid": testId, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const innerRef = useRef(null);
    useImperativeHandle(ref, () => innerRef.current);
    useEffect(() => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);
    const box = /* @__PURE__ */ jsxs5("span", { className: "relative inline-flex", children: [
      /* @__PURE__ */ jsx9(
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
      /* @__PURE__ */ jsx9(
        Check,
        {
          "aria-hidden": "true",
          strokeWidth: 3,
          className: cn(checkboxIconVariants({ size }), !indeterminate && "peer-checked:opacity-100")
        }
      ),
      /* @__PURE__ */ jsx9(
        Minus,
        {
          "aria-hidden": "true",
          strokeWidth: 3,
          className: cn(checkboxIconVariants({ size }), indeterminate && "opacity-100")
        }
      )
    ] });
    if (!label) return box;
    return /* @__PURE__ */ jsxs5("div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ jsx9("span", { className: cn("flex items-center", size === "sm" ? "h-5" : "h-6"), children: box }),
      /* @__PURE__ */ jsxs5("div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ jsx9(
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
        description && /* @__PURE__ */ jsx9("p", { id: `${inputId}-description`, className: "font-sans text-body-sm text-foreground-muted", children: description })
      ] })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/atoms/radio/radio.tsx
import { createContext, forwardRef as forwardRef10, useContext, useId as useId2, useState } from "react";

// src/atoms/radio/radio.variants.ts
import { cva as cva11 } from "class-variance-authority";
var radioVariants = cva11(
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
var radioGroupVariants = cva11("flex", {
  variants: {
    orientation: { vertical: "flex-col gap-3", horizontal: "flex-row flex-wrap gap-6" }
  },
  defaultVariants: { orientation: "vertical" }
});

// src/atoms/radio/radio.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var RadioGroupContext = createContext(null);
var RadioGroup = forwardRef10(
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
    const autoName = useId2();
    const [internal, setInternal] = useState(defaultValue);
    const current = value !== void 0 ? value : internal;
    const onChange = (next) => {
      if (value === void 0) setInternal(next);
      onValueChange?.(next);
    };
    return /* @__PURE__ */ jsx10(RadioGroupContext.Provider, { value: { name: name ?? autoName, value: current, onChange, size, disabled }, children: /* @__PURE__ */ jsx10(
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
var Radio = forwardRef10(
  ({ value, label, description, size, className, id, disabled, "data-testid": testId, ...props }, ref) => {
    const group = useContext(RadioGroupContext);
    const autoId = useId2();
    const inputId = id ?? autoId;
    const resolvedSize = size ?? group?.size;
    const isDisabled = disabled ?? group?.disabled;
    const groupProps = group ? {
      name: group.name,
      checked: group.value === value,
      onChange: () => group.onChange(value)
    } : {};
    const input = /* @__PURE__ */ jsx10(
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
    return /* @__PURE__ */ jsxs6("div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ jsx10("span", { className: cn("flex items-center", resolvedSize === "sm" ? "h-5" : "h-6"), children: input }),
      /* @__PURE__ */ jsxs6("div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ jsx10(
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
        description && /* @__PURE__ */ jsx10("p", { id: `${inputId}-description`, className: "font-sans text-body-sm text-foreground-muted", children: description })
      ] })
    ] });
  }
);
Radio.displayName = "Radio";

// src/atoms/switch/switch.tsx
import { forwardRef as forwardRef11, useId as useId3, useState as useState2 } from "react";

// src/atoms/switch/switch.variants.ts
import { cva as cva12 } from "class-variance-authority";
var switchTrackVariants = cva12(
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-grey-300 transition-colors duration-normal data-[state=checked]:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-5 w-9", md: "h-6 w-11" }
    },
    defaultVariants: { size: "md" }
  }
);
var switchThumbVariants = cva12(
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
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var Switch = forwardRef11(
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
    const autoId = useId3();
    const switchId = id ?? autoId;
    const [internal, setInternal] = useState2(defaultChecked);
    const isOn = checked !== void 0 ? checked : internal;
    const state = isOn ? "checked" : "unchecked";
    const button = /* @__PURE__ */ jsx11(
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
        children: /* @__PURE__ */ jsx11("span", { "data-state": state, className: switchThumbVariants({ size }) })
      }
    );
    if (!label) return button;
    return /* @__PURE__ */ jsxs7("div", { className: cn("inline-flex items-center gap-2", labelPosition === "left" && "flex-row-reverse", className), children: [
      button,
      /* @__PURE__ */ jsx11(
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
import { forwardRef as forwardRef12, useId as useId4 } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown } from "lucide-react";

// src/atoms/select/select.variants.ts
import { cva as cva13 } from "class-variance-authority";
var selectTriggerVariants = cva13(
  "inline-flex items-center justify-between gap-2 text-left data-[placeholder]:text-foreground-muted [&>span]:truncate"
);
var selectContentVariants = cva13(
  "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-border bg-background font-sans text-foreground shadow-lg"
);
var selectItemVariants = cva13(
  "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-3 text-body-sm outline-none data-[highlighted]:bg-surface-muted data-[state=checked]:font-medium data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
);

// src/atoms/select/select.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var Select = forwardRef12(
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
    const autoId = useId4();
    const triggerId = id ?? autoId;
    return /* @__PURE__ */ jsxs8(
      SelectPrimitive.Root,
      {
        value,
        defaultValue,
        onValueChange,
        disabled,
        required,
        name,
        children: [
          /* @__PURE__ */ jsxs8(
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
                /* @__PURE__ */ jsx12(SelectPrimitive.Value, { placeholder }),
                /* @__PURE__ */ jsx12(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx12(ChevronDown, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-foreground-muted" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx12(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx12(SelectPrimitive.Content, { position: "popper", sideOffset: 4, className: selectContentVariants(), children: /* @__PURE__ */ jsx12(SelectPrimitive.Viewport, { className: "p-1", children: options.map((option) => /* @__PURE__ */ jsxs8(
            SelectPrimitive.Item,
            {
              value: option.value,
              disabled: option.disabled,
              className: selectItemVariants(),
              "data-testid": `select-option-${option.value}`,
              children: [
                /* @__PURE__ */ jsx12("span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ jsx12(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx12(Check2, { "aria-hidden": "true", className: "h-4 w-4 text-primary-600" }) }) }),
                /* @__PURE__ */ jsx12(SelectPrimitive.ItemText, { children: option.label })
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

// src/atoms/badge/badge.tsx
import { forwardRef as forwardRef13 } from "react";

// src/atoms/badge/badge.variants.ts
import { cva as cva14 } from "class-variance-authority";
var badgeVariants = cva14(
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
var badgeDotVariants = cva14("h-1.5 w-1.5 rounded-full bg-current");

// src/atoms/badge/badge.tsx
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var Badge = forwardRef13(
  ({ tone, appearance, size, dot, icon, className, children, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsxs9(
    "span",
    {
      ref,
      className: cn(badgeVariants({ tone, appearance, size }), className),
      "data-testid": testId ?? `badge-${tone ?? "neutral"}`,
      ...props,
      children: [
        dot && /* @__PURE__ */ jsx13("span", { "aria-hidden": "true", className: badgeDotVariants() }),
        icon,
        children
      ]
    }
  )
);
Badge.displayName = "Badge";

// src/atoms/alert/alert.tsx
import { forwardRef as forwardRef14 } from "react";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from "lucide-react";

// src/atoms/alert/alert.variants.ts
import { cva as cva15 } from "class-variance-authority";
var alertVariants = cva15("relative flex w-full gap-3 rounded-lg border p-4 font-sans", {
  variants: {
    tone: {
      info: "border-info-100 bg-info-50 text-info-700",
      success: "border-success-100 bg-success-50 text-success-700",
      warning: "border-warning-100 bg-warning-50 text-warning-700",
      error: "border-error-100 bg-error-50 text-error-700",
      neutral: "border-border bg-surface text-foreground"
    }
  },
  defaultVariants: { tone: "info" }
});

// src/atoms/alert/alert.tsx
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var defaultIcons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: AlertCircle,
  neutral: Info
};
var Alert = forwardRef14(
  ({ tone, title, icon, onDismiss, actions, className, children, "data-testid": testId, ...props }, ref) => {
    const DefaultIcon = defaultIcons[tone ?? "info"];
    const isUrgent = tone === "error" || tone === "warning";
    return /* @__PURE__ */ jsxs10(
      "div",
      {
        ref,
        role: isUrgent ? "alert" : "status",
        className: cn(alertVariants({ tone }), className),
        "data-testid": testId ?? `alert-${tone ?? "info"}`,
        ...props,
        children: [
          icon !== false && /* @__PURE__ */ jsx14("span", { className: "mt-0.5 shrink-0", children: icon ?? /* @__PURE__ */ jsx14(DefaultIcon, { "aria-hidden": "true", className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs10("div", { className: "min-w-0 flex-1 space-y-1", children: [
            title && /* @__PURE__ */ jsx14("p", { className: "text-body-sm font-semibold", children: title }),
            children && /* @__PURE__ */ jsx14("div", { className: "text-body-sm opacity-90", children }),
            actions && /* @__PURE__ */ jsx14("div", { className: "flex flex-wrap gap-2 pt-2", children: actions })
          ] }),
          onDismiss && /* @__PURE__ */ jsx14(
            "button",
            {
              type: "button",
              onClick: onDismiss,
              "aria-label": "Dismiss",
              className: "-m-1 h-7 w-7 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: /* @__PURE__ */ jsx14(X, { "aria-hidden": "true", className: "h-5 w-5" })
            }
          )
        ]
      }
    );
  }
);
Alert.displayName = "Alert";

// src/atoms/spinner/spinner.tsx
import { forwardRef as forwardRef15 } from "react";

// src/atoms/spinner/spinner.variants.ts
import { cva as cva16 } from "class-variance-authority";
var spinnerVariants = cva16(
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
import { jsx as jsx15 } from "react/jsx-runtime";
var Spinner = forwardRef15(
  ({ size, tone, label = "Loading", className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx15(
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

// src/atoms/skeleton/skeleton.tsx
import { forwardRef as forwardRef16 } from "react";

// src/atoms/skeleton/skeleton.variants.ts
import { cva as cva17 } from "class-variance-authority";
var skeletonVariants = cva17("animate-pulse bg-grey-200", {
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
import { jsx as jsx16 } from "react/jsx-runtime";
var Skeleton = forwardRef16(
  ({ shape, width, height, lines = 1, className, style, "data-testid": testId, ...props }, ref) => {
    if (shape === "text" && lines > 1) {
      return /* @__PURE__ */ jsx16("div", { ref, "aria-hidden": "true", className: cn("space-y-2", className), "data-testid": testId ?? "skeleton", ...props, children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ jsx16(
        "div",
        {
          className: skeletonVariants({ shape }),
          style: { width: i === lines - 1 ? "60%" : width, height }
        },
        i
      )) });
    }
    return /* @__PURE__ */ jsx16(
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
import { forwardRef as forwardRef17 } from "react";

// src/atoms/progress/progress.variants.ts
import { cva as cva18 } from "class-variance-authority";
var progressTrackVariants = cva18("relative w-full overflow-hidden rounded-full bg-grey-200", {
  variants: {
    size: { sm: "h-1", md: "h-2", lg: "h-3" }
  },
  defaultVariants: { size: "md" }
});
var progressBarVariants = cva18("h-full rounded-full transition-[width] duration-normal ease-out", {
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
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var Progress = forwardRef17(
  ({ value, max = 100, size, tone, label, showValue, className, "data-testid": testId, ...props }, ref) => {
    const indeterminate = value === void 0 || value === null;
    const percent = indeterminate ? 0 : Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ jsxs11("div", { ref, className: cn("w-full font-sans", className), "data-testid": testId ?? "progress", ...props, children: [
      (label || showValue && !indeterminate) && /* @__PURE__ */ jsxs11("div", { className: "mb-1.5 flex items-center justify-between text-body-sm", children: [
        label && /* @__PURE__ */ jsx17("span", { className: "font-medium text-foreground", children: label }),
        showValue && !indeterminate && /* @__PURE__ */ jsxs11("span", { className: "tabular-nums text-foreground-muted", children: [
          Math.round(percent),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsx17(
        "div",
        {
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": max,
          "aria-valuenow": indeterminate ? void 0 : value,
          "aria-label": typeof label === "string" ? label : props["aria-label"],
          className: progressTrackVariants({ size }),
          children: /* @__PURE__ */ jsx17(
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
import { forwardRef as forwardRef18 } from "react";

// src/atoms/box/box.variants.ts
import { cva as cva19 } from "class-variance-authority";

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
var boxVariants = cva19("", {
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
import { jsx as jsx18 } from "react/jsx-runtime";
var Box = forwardRef18(
  ({ as: Component = "div", padding, background, border, radius, shadow, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx18(
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
import { forwardRef as forwardRef19 } from "react";

// src/atoms/stack/stack.variants.ts
import { cva as cva20 } from "class-variance-authority";
var stackVariants = cva20("flex", {
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
import { jsx as jsx19 } from "react/jsx-runtime";
var Stack = forwardRef19(
  ({ as: Component = "div", direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx19(
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
import { forwardRef as forwardRef20 } from "react";

// src/atoms/flex/flex.variants.ts
import { cva as cva21 } from "class-variance-authority";
var flexVariants = cva21("", {
  variants: {
    inline: { true: "inline-flex", false: "flex" },
    direction: { row: "flex-row", column: "flex-col", "row-reverse": "flex-row-reverse", "column-reverse": "flex-col-reverse" },
    gap: gapClasses,
    align: alignClasses,
    justify: justifyClasses,
    wrap: { nowrap: "flex-nowrap", wrap: "flex-wrap", "wrap-reverse": "flex-wrap-reverse" }
  },
  defaultVariants: { inline: false, direction: "row", gap: "none" }
});

// src/atoms/flex/flex.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var Flex = forwardRef20(
  ({ as: Component = "div", inline, direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx20(
    Component,
    {
      ref,
      className: cn(flexVariants({ inline, direction, gap, align, justify, wrap }), className),
      "data-testid": testId ?? "flex",
      ...props
    }
  )
);
Flex.displayName = "Flex";

// src/atoms/container/container.tsx
import { forwardRef as forwardRef21 } from "react";

// src/atoms/container/container.variants.ts
import { cva as cva22 } from "class-variance-authority";
var containerVariants = cva22("mx-auto w-full px-4 sm:px-6 lg:px-8", {
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
import { jsx as jsx21 } from "react/jsx-runtime";
var Container = forwardRef21(
  ({ as: Component = "div", size, gutter, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx21(
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
import { forwardRef as forwardRef22 } from "react";

// src/atoms/divider/divider.variants.ts
import { cva as cva23 } from "class-variance-authority";
var dividerVariants = cva23("shrink-0 border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "min-h-[1em] self-stretch border-l"
    },
    variant: { solid: "border-solid", dashed: "border-dashed" }
  },
  defaultVariants: { orientation: "horizontal", variant: "solid" }
});
var dividerSpacingVariants = cva23("", {
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
import { jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
var Divider = forwardRef22(
  ({ orientation, variant, spacing, label, className, "data-testid": testId, ...props }, ref) => {
    const dataTestId = testId ?? `divider-${orientation ?? "horizontal"}`;
    const spacingClass = dividerSpacingVariants({ orientation, spacing });
    if (label && orientation !== "vertical") {
      return /* @__PURE__ */ jsxs12(
        "div",
        {
          ref,
          role: "separator",
          className: cn("flex w-full items-center gap-3", spacingClass, className),
          "data-testid": dataTestId,
          ...props,
          children: [
            /* @__PURE__ */ jsx22("span", { className: cn(dividerVariants({ variant }), "flex-1") }),
            /* @__PURE__ */ jsx22("span", { className: "font-sans text-caption font-medium uppercase text-foreground-muted", children: label }),
            /* @__PURE__ */ jsx22("span", { className: cn(dividerVariants({ variant }), "flex-1") })
          ]
        }
      );
    }
    return /* @__PURE__ */ jsx22(
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
import { forwardRef as forwardRef23 } from "react";

// src/atoms/card/card.variants.ts
import { cva as cva24 } from "class-variance-authority";
var cardVariants = cva24("rounded-lg bg-background font-sans text-foreground", {
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
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
var Card = forwardRef23(
  ({ variant, padding, interactive, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ jsx23(
    "div",
    {
      ref,
      className: cn(cardVariants({ variant, padding, interactive }), className),
      "data-testid": testId ?? "card",
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = forwardRef23(
  ({ title, description, action, className, children, ...props }, ref) => /* @__PURE__ */ jsxs13("div", { ref, className: cn("mb-4 flex items-start justify-between gap-4", className), ...props, children: [
    /* @__PURE__ */ jsxs13("div", { className: "min-w-0 space-y-1", children: [
      title && /* @__PURE__ */ jsx23("h3", { className: "text-body-lg font-semibold text-foreground", children: title }),
      description && /* @__PURE__ */ jsx23("p", { className: "text-body-sm text-foreground-muted", children: description }),
      children
    ] }),
    action && /* @__PURE__ */ jsx23("div", { className: "shrink-0", children: action })
  ] })
);
CardHeader.displayName = "CardHeader";
var CardContent = forwardRef23(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx23("div", { ref, className: cn("text-body-sm", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = forwardRef23(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
    "div",
    {
      ref,
      className: cn("mt-5 flex items-center justify-end gap-2 border-t border-border pt-4", className),
      ...props
    }
  )
);
CardFooter.displayName = "CardFooter";

// src/atoms/avatar/avatar.tsx
import { forwardRef as forwardRef24, useEffect as useEffect2, useState as useState3 } from "react";

// src/atoms/avatar/avatar.variants.ts
import { cva as cva25 } from "class-variance-authority";
var avatarVariants = cva25(
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
var avatarStatusVariants = cva25("absolute bottom-0 right-0 block rounded-full ring-2 ring-background", {
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
import { jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
var Avatar = forwardRef24(
  ({ src, name, size, shape, tone, status, className, "data-testid": testId, ...props }, ref) => {
    const [failed, setFailed] = useState3(false);
    useEffect2(() => setFailed(false), [src]);
    const showImage = src && !failed;
    return /* @__PURE__ */ jsxs14(
      "span",
      {
        ref,
        role: "img",
        "aria-label": name ?? "Avatar",
        className: cn(avatarVariants({ size, shape, tone }), status && "overflow-visible", className),
        "data-testid": testId ?? "avatar",
        ...props,
        children: [
          showImage ? /* @__PURE__ */ jsx24(
            "img",
            {
              src,
              alt: "",
              onError: () => setFailed(true),
              className: cn("h-full w-full object-cover", shape === "square" ? "rounded-md" : "rounded-full")
            }
          ) : /* @__PURE__ */ jsx24("span", { "aria-hidden": "true", children: getInitials(name) }),
          status && /* @__PURE__ */ jsx24("span", { "aria-hidden": "true", className: avatarStatusVariants({ status, size }) })
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/atoms/tooltip/tooltip.tsx
import { forwardRef as forwardRef25 } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// src/atoms/tooltip/tooltip.variants.ts
import { cva as cva26 } from "class-variance-authority";
var tooltipContentVariants = cva26(
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
var tooltipArrowVariants = cva26("", {
  variants: {
    tone: { dark: "fill-grey-900", light: "fill-background" }
  },
  defaultVariants: { tone: "dark" }
});

// src/atoms/tooltip/tooltip.tsx
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = forwardRef25(
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
    return /* @__PURE__ */ jsx25(TooltipPrimitive.Provider, { delayDuration: delay, children: /* @__PURE__ */ jsxs15(TooltipPrimitive.Root, { open, defaultOpen, onOpenChange, children: [
      /* @__PURE__ */ jsx25(TooltipPrimitive.Trigger, { asChild: true, children }),
      /* @__PURE__ */ jsx25(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs15(
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
            showArrow && /* @__PURE__ */ jsx25(TooltipPrimitive.Arrow, { className: tooltipArrowVariants({ tone }) })
          ]
        }
      ) })
    ] }) });
  }
);
Tooltip.displayName = "Tooltip";

// src/atoms/tag/tag.tsx
import { forwardRef as forwardRef26 } from "react";
import { X as X2 } from "lucide-react";

// src/atoms/tag/tag.variants.ts
import { cva as cva27 } from "class-variance-authority";
var tagVariants = cva27(
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
var tagRemoveVariants = cva27(
  "-mr-1 inline-flex shrink-0 items-center justify-center rounded-sm opacity-60 transition-opacity hover:bg-black/5 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/tag/tag.tsx
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
var Tag = forwardRef26(
  ({ tone, size, disabled, icon, onRemove, removeLabel, className, children, "data-testid": testId, ...props }, ref) => {
    const text = typeof children === "string" ? children : void 0;
    return /* @__PURE__ */ jsxs16(
      "span",
      {
        ref,
        className: cn(tagVariants({ tone, size, disabled }), className),
        "data-testid": testId ?? `tag-${text ?? tone ?? "neutral"}`,
        "aria-disabled": disabled || void 0,
        ...props,
        children: [
          icon && /* @__PURE__ */ jsx26("span", { className: "inline-flex shrink-0", children: icon }),
          /* @__PURE__ */ jsx26("span", { className: "truncate", children }),
          onRemove && /* @__PURE__ */ jsx26(
            "button",
            {
              type: "button",
              onClick: onRemove,
              disabled: disabled ?? void 0,
              "aria-label": removeLabel ?? (text ? `Remove ${text}` : "Remove"),
              className: tagRemoveVariants({ size }),
              children: /* @__PURE__ */ jsx26(X2, { "aria-hidden": "true", className: size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5" })
            }
          )
        ]
      }
    );
  }
);
Tag.displayName = "Tag";
export {
  Alert,
  Avatar,
  Badge,
  BitwinUIProvider,
  Box,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  Label,
  Link,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Spinner,
  Stack,
  Switch,
  Tag,
  Text,
  Textarea,
  Tooltip,
  TooltipProvider,
  alertVariants,
  avatarVariants,
  badgeVariants,
  boxVariants,
  buttonVariants,
  cardVariants,
  checkboxBoxVariants,
  cn,
  containerVariants,
  dividerVariants,
  fieldVariants,
  flexVariants,
  getInitials,
  headingVariants,
  iconVariants,
  labelVariants,
  linkVariants,
  progressBarVariants,
  progressTrackVariants,
  radioGroupVariants,
  radioVariants,
  skeletonVariants,
  spinnerVariants,
  stackVariants,
  switchThumbVariants,
  switchTrackVariants,
  tagVariants,
  textVariants,
  tooltipContentVariants,
  useLinkComponent
};
//# sourceMappingURL=index.mjs.map