"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }"use client";



var _chunkGBKW6WAEjs = require('./chunk-GBKW6WAE.js');

// src/atoms/text/text.tsx
var _react = require('react');

// src/lib/cn.ts
var _clsx = require('clsx');
var _tailwindmerge = require('tailwind-merge');
var twMerge = _tailwindmerge.extendTailwindMerge.call(void 0, {
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "h1", "h2", "h3", "h4", "body-lg", "body", "body-sm", "caption"] }]
    }
  }
});
function cn(...inputs) {
  return twMerge(_clsx.clsx.call(void 0, inputs));
}

// src/atoms/text/text.variants.ts
var _classvarianceauthority = require('class-variance-authority');
var textVariants = _classvarianceauthority.cva.call(void 0, "font-sans", {
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
var _jsxruntime = require('react/jsx-runtime');
var Text = _react.forwardRef.call(void 0, 
  ({ as: Component = "p", className, size, weight, tone, align, truncate, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Component,
    {
      ref,
      className: cn(textVariants({ size, weight, tone, align, truncate }), className),
      "data-testid": _nullishCoalesce(testId, () => ( "text")),
      ...props
    }
  )
);
Text.displayName = "Text";

// src/atoms/heading/heading.tsx


// src/atoms/heading/heading.variants.ts

var headingVariants = _classvarianceauthority.cva.call(void 0, "font-display text-foreground tracking-tight", {
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

var Heading = _react.forwardRef.call(void 0, 
  ({ level = 2, size, align, className, "data-testid": testId, ...props }, ref) => {
    const Component = `h${level}`;
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      Component,
      {
        ref,
        className: cn(headingVariants({ size: _nullishCoalesce(size, () => ( `h${level}`)), align }), className),
        "data-testid": _nullishCoalesce(testId, () => ( `heading-h${level}`)),
        ...props
      }
    );
  }
);
Heading.displayName = "Heading";

// src/atoms/icon/icon.tsx


// src/atoms/icon/icon.variants.ts

var iconVariants = _classvarianceauthority.cva.call(void 0, "shrink-0", {
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

var Icon = _react.forwardRef.call(void 0, 
  ({ icon: IconComponent, size, tone, label, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    IconComponent,
    {
      ref,
      className: cn(iconVariants({ size, tone }), className),
      "aria-hidden": label ? void 0 : true,
      "aria-label": label,
      role: label ? "img" : void 0,
      focusable: "false",
      "data-testid": _nullishCoalesce(testId, () => ( "icon")),
      ...props
    }
  )
);
Icon.displayName = "Icon";

// src/atoms/link/link.tsx

var _lucidereact = require('lucide-react');

// src/atoms/link/link.variants.ts

var linkVariants = _classvarianceauthority.cva.call(void 0, 
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

var Link = _react.forwardRef.call(void 0, 
  ({ href, external, as, tone, underline, size, className, children, "data-testid": testId, ...props }, ref) => {
    const contextLink = _chunkGBKW6WAEjs.useLinkComponent.call(void 0, );
    const Component = external ? "a" : _nullishCoalesce(_nullishCoalesce(as, () => ( contextLink)), () => ( "a"));
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      Component,
      {
        ref,
        href,
        className: cn(linkVariants({ tone, underline, size }), className),
        "data-testid": _nullishCoalesce(testId, () => ( "link")),
        ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
        ...props,
        children: [
          children,
          external && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ExternalLink, { "aria-hidden": "true", className: "h-3.5 w-3.5" }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "sr-only", children: "(opens in a new tab)" })
          ] })
        ]
      }
    );
  }
);
Link.displayName = "Link";

// src/atoms/button/button.tsx


// src/atoms/button/button.variants.ts

var buttonVariants = _classvarianceauthority.cva.call(void 0, 
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

var Button = _react.forwardRef.call(void 0, 
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
    const contextLink = _chunkGBKW6WAEjs.useLinkComponent.call(void 0, );
    const classes = cn(buttonVariants({ variant, size, rounded, fullWidth }), isLoading && "relative", className);
    const testId = _nullishCoalesce(dataTestId, () => ( `button-${_nullishCoalesce(variant, () => ( "primary"))}`));
    const content = /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, { children: [
      isLoading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" }) }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: cn("inline-flex items-center gap-2", isLoading && "invisible"), children: [
        leftIcon,
        children,
        rightIcon
      ] })
    ] });
    if (href !== void 0) {
      const Component = _nullishCoalesce(_nullishCoalesce(as, () => ( contextLink)), () => ( "a"));
      return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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


// src/atoms/label/label.variants.ts

var labelVariants = _classvarianceauthority.cva.call(void 0, "inline-block font-sans font-medium text-foreground", {
  variants: {
    size: { sm: "text-caption", md: "text-body-sm", lg: "text-body" },
    disabled: { true: "cursor-not-allowed opacity-60", false: "" }
  },
  defaultVariants: { size: "md", disabled: false }
});

// src/atoms/label/label.tsx

var Label = _react.forwardRef.call(void 0, 
  ({ size, disabled, required, className, children, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "label",
    {
      ref,
      className: cn(labelVariants({ size, disabled }), className),
      "data-testid": _nullishCoalesce(testId, () => ( (props.htmlFor ? `label-${props.htmlFor}` : "label"))),
      ...props,
      children: [
        children,
        required && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", className: "ml-0.5 text-error-600", children: "*" })
      ]
    }
  )
);
Label.displayName = "Label";

// src/atoms/input/input.tsx


// src/lib/field-variants.ts

var fieldVariants = _classvarianceauthority.cva.call(void 0, 
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

var inputAdornmentVariants = _classvarianceauthority.cva.call(void 0, 
  "pointer-events-none absolute inset-y-0 flex items-center text-foreground-muted",
  {
    variants: {
      side: { left: "left-0 pl-3", right: "right-0 pr-3" }
    }
  }
);

// src/atoms/input/input.tsx

var Input = _react.forwardRef.call(void 0, 
  ({ size, invalid, leftElement, rightElement, className, type = "text", "data-testid": testId, ...props }, ref) => {
    const input = /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
        "data-testid": _nullishCoalesce(testId, () => ( (props.id ? `input-${props.id}` : "input"))),
        ...props
      }
    );
    if (!leftElement && !rightElement) return input;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: cn("relative w-full", className), children: [
      leftElement && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: inputAdornmentVariants({ side: "left" }), children: leftElement }),
      input,
      rightElement && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: inputAdornmentVariants({ side: "right" }), children: rightElement })
    ] });
  }
);
Input.displayName = "Input";

// src/atoms/textarea/textarea.tsx


// src/atoms/textarea/textarea.variants.ts

var textareaVariants = _classvarianceauthority.cva.call(void 0, "h-auto min-h-[5rem] py-2", {
  variants: {
    resize: { none: "resize-none", vertical: "resize-y", both: "resize" }
  },
  defaultVariants: { resize: "vertical" }
});

// src/atoms/textarea/textarea.tsx

var Textarea = _react.forwardRef.call(void 0, 
  ({ invalid, resize, className, rows = 4, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "textarea",
    {
      ref,
      rows,
      "aria-invalid": invalid || void 0,
      className: cn(fieldVariants({ size: "md", invalid }), textareaVariants({ resize }), className),
      "data-testid": _nullishCoalesce(testId, () => ( (props.id ? `textarea-${props.id}` : "textarea"))),
      ...props
    }
  )
);
Textarea.displayName = "Textarea";

// src/atoms/checkbox/checkbox.tsx



// src/atoms/checkbox/checkbox.variants.ts

var checkboxBoxVariants = _classvarianceauthority.cva.call(void 0, 
  "peer shrink-0 cursor-pointer appearance-none rounded-sm border border-border-strong bg-background transition-colors duration-fast hover:border-primary-500 checked:border-primary-600 checked:bg-primary-600 indeterminate:border-primary-600 indeterminate:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" },
      invalid: { true: "border-error-500", false: "" }
    },
    defaultVariants: { size: "md", invalid: false }
  }
);
var checkboxIconVariants = _classvarianceauthority.cva.call(void 0, 
  "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0",
  {
    variants: {
      size: { sm: "h-3 w-3", md: "h-3.5 w-3.5" }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/checkbox/checkbox.tsx

var Checkbox = _react.forwardRef.call(void 0, 
  ({ size, invalid, label, description, indeterminate = false, className, id, "data-testid": testId, ...props }, ref) => {
    const autoId = _react.useId.call(void 0, );
    const inputId = _nullishCoalesce(id, () => ( autoId));
    const innerRef = _react.useRef.call(void 0, null);
    _react.useImperativeHandle.call(void 0, ref, () => innerRef.current);
    _react.useEffect.call(void 0, () => {
      if (innerRef.current) innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);
    const box = /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "relative inline-flex", children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "input",
        {
          ref: innerRef,
          id: inputId,
          type: "checkbox",
          "aria-invalid": invalid || void 0,
          "aria-describedby": description ? `${inputId}-description` : void 0,
          className: cn(checkboxBoxVariants({ size, invalid }), !label && className),
          "data-testid": _nullishCoalesce(testId, () => ( `checkbox-${_nullishCoalesce(id, () => ( "input"))}`)),
          ...props
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _lucidereact.Check,
        {
          "aria-hidden": "true",
          strokeWidth: 3,
          className: cn(checkboxIconVariants({ size }), !indeterminate && "peer-checked:opacity-100")
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        _lucidereact.Minus,
        {
          "aria-hidden": "true",
          strokeWidth: 3,
          className: cn(checkboxIconVariants({ size }), indeterminate && "opacity-100")
        }
      )
    ] });
    if (!label) return box;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: cn("flex items-center", size === "sm" ? "h-5" : "h-6"), children: box }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
        description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { id: `${inputId}-description`, className: "font-sans text-body-sm text-foreground-muted", children: description })
      ] })
    ] });
  }
);
Checkbox.displayName = "Checkbox";

// src/atoms/radio/radio.tsx


// src/atoms/radio/radio.variants.ts

var radioVariants = _classvarianceauthority.cva.call(void 0, 
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
var radioGroupVariants = _classvarianceauthority.cva.call(void 0, "flex", {
  variants: {
    orientation: { vertical: "flex-col gap-3", horizontal: "flex-row flex-wrap gap-6" }
  },
  defaultVariants: { orientation: "vertical" }
});

// src/atoms/radio/radio.tsx

var RadioGroupContext = _react.createContext.call(void 0, null);
var RadioGroup = _react.forwardRef.call(void 0, 
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
    const autoName = _react.useId.call(void 0, );
    const [internal, setInternal] = _react.useState.call(void 0, defaultValue);
    const current = value !== void 0 ? value : internal;
    const onChange = (next) => {
      if (value === void 0) setInternal(next);
      _optionalChain([onValueChange, 'optionalCall', _2 => _2(next)]);
    };
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadioGroupContext.Provider, { value: { name: _nullishCoalesce(name, () => ( autoName)), value: current, onChange, size, disabled }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        ref,
        role: "radiogroup",
        "aria-orientation": _nullishCoalesce(orientation, () => ( "vertical")),
        className: cn(radioGroupVariants({ orientation }), className),
        "data-testid": _nullishCoalesce(testId, () => ( `radio-group-${_nullishCoalesce(name, () => ( "group"))}`)),
        ...props
      }
    ) });
  }
);
RadioGroup.displayName = "RadioGroup";
var Radio = _react.forwardRef.call(void 0, 
  ({ value, label, description, size, className, id, disabled, "data-testid": testId, ...props }, ref) => {
    const group = _react.useContext.call(void 0, RadioGroupContext);
    const autoId = _react.useId.call(void 0, );
    const inputId = _nullishCoalesce(id, () => ( autoId));
    const resolvedSize = _nullishCoalesce(size, () => ( _optionalChain([group, 'optionalAccess', _3 => _3.size])));
    const isDisabled = _nullishCoalesce(disabled, () => ( _optionalChain([group, 'optionalAccess', _4 => _4.disabled])));
    const groupProps = group ? {
      name: group.name,
      checked: group.value === value,
      onChange: () => group.onChange(value)
    } : {};
    const input = /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "input",
      {
        ref,
        id: inputId,
        type: "radio",
        value,
        disabled: isDisabled,
        "aria-describedby": description ? `${inputId}-description` : void 0,
        className: cn(radioVariants({ size: resolvedSize }), !label && className),
        "data-testid": _nullishCoalesce(testId, () => ( `radio-${value}`)),
        ...groupProps,
        ...props
      }
    );
    if (!label) return input;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: cn("flex items-start gap-2", className), children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: cn("flex items-center", resolvedSize === "sm" ? "h-5" : "h-6"), children: input }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "grid gap-0.5", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
        description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { id: `${inputId}-description`, className: "font-sans text-body-sm text-foreground-muted", children: description })
      ] })
    ] });
  }
);
Radio.displayName = "Radio";

// src/atoms/switch/switch.tsx


// src/atoms/switch/switch.variants.ts

var switchTrackVariants = _classvarianceauthority.cva.call(void 0, 
  "relative inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-grey-300 transition-colors duration-normal data-[state=checked]:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: { sm: "h-5 w-9", md: "h-6 w-11" }
    },
    defaultVariants: { size: "md" }
  }
);
var switchThumbVariants = _classvarianceauthority.cva.call(void 0, 
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

var Switch = _react.forwardRef.call(void 0, 
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
    const autoId = _react.useId.call(void 0, );
    const switchId = _nullishCoalesce(id, () => ( autoId));
    const [internal, setInternal] = _react.useState.call(void 0, defaultChecked);
    const isOn = checked !== void 0 ? checked : internal;
    const state = isOn ? "checked" : "unchecked";
    const button = /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
        "data-testid": _nullishCoalesce(testId, () => ( `switch-${_nullishCoalesce(id, () => ( "toggle"))}`)),
        onClick: (event) => {
          _optionalChain([onClick, 'optionalCall', _5 => _5(event)]);
          if (event.defaultPrevented) return;
          if (checked === void 0) setInternal(!isOn);
          _optionalChain([onCheckedChange, 'optionalCall', _6 => _6(!isOn)]);
        },
        ...props,
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "data-state": state, className: switchThumbVariants({ size }) })
      }
    );
    if (!label) return button;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: cn("inline-flex items-center gap-2", labelPosition === "left" && "flex-row-reverse", className), children: [
      button,
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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

var _reactselect = require('@radix-ui/react-select'); var SelectPrimitive = _interopRequireWildcard(_reactselect);


// src/atoms/select/select.variants.ts

var selectTriggerVariants = _classvarianceauthority.cva.call(void 0, 
  "inline-flex items-center justify-between gap-2 text-left data-[placeholder]:text-foreground-muted [&>span]:truncate"
);
var selectContentVariants = _classvarianceauthority.cva.call(void 0, 
  "relative z-50 max-h-[var(--radix-select-content-available-height)] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-border bg-background font-sans text-foreground shadow-lg"
);
var selectItemVariants = _classvarianceauthority.cva.call(void 0, 
  "relative flex w-full cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-3 text-body-sm outline-none data-[highlighted]:bg-surface-muted data-[state=checked]:font-medium data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
);

// src/atoms/select/select.tsx

var Select = _react.forwardRef.call(void 0, 
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
    const autoId = _react.useId.call(void 0, );
    const triggerId = _nullishCoalesce(id, () => ( autoId));
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      SelectPrimitive.Root,
      {
        value,
        defaultValue,
        onValueChange,
        disabled,
        required,
        name,
        children: [
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            SelectPrimitive.Trigger,
            {
              ref,
              id: triggerId,
              "aria-label": ariaLabel,
              "aria-labelledby": ariaLabelledBy,
              "aria-invalid": invalid || void 0,
              className: cn(fieldVariants({ size, invalid }), selectTriggerVariants(), className),
              "data-testid": _nullishCoalesce(testId, () => ( `select-${_nullishCoalesce(_nullishCoalesce(id, () => ( name)), () => ( "trigger"))}`)),
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Value, { placeholder }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ChevronDown, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 text-foreground-muted" }) })
              ]
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Content, { position: "popper", sideOffset: 4, className: selectContentVariants(), children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.Viewport, { className: "p-1", children: options.map((option) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
            SelectPrimitive.Item,
            {
              value: option.value,
              disabled: option.disabled,
              className: selectItemVariants(),
              "data-testid": `select-option-${option.value}`,
              children: [
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "absolute left-2 flex h-4 w-4 items-center justify-center", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.Check, { "aria-hidden": "true", className: "h-4 w-4 text-primary-600" }) }) }),
                /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SelectPrimitive.ItemText, { children: option.label })
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


// src/atoms/badge/badge.variants.ts

var badgeVariants = _classvarianceauthority.cva.call(void 0, 
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
var badgeDotVariants = _classvarianceauthority.cva.call(void 0, "h-1.5 w-1.5 rounded-full bg-current");

// src/atoms/badge/badge.tsx

var Badge = _react.forwardRef.call(void 0, 
  ({ tone, appearance, size, dot, icon, className, children, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
    "span",
    {
      ref,
      className: cn(badgeVariants({ tone, appearance, size }), className),
      "data-testid": _nullishCoalesce(testId, () => ( `badge-${_nullishCoalesce(tone, () => ( "neutral"))}`)),
      ...props,
      children: [
        dot && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", className: badgeDotVariants() }),
        icon,
        children
      ]
    }
  )
);
Badge.displayName = "Badge";

// src/atoms/alert/alert.tsx



// src/atoms/alert/alert.variants.ts

var alertVariants = _classvarianceauthority.cva.call(void 0, "relative flex w-full gap-3 rounded-lg border p-4 font-sans", {
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

var defaultIcons = {
  info: _lucidereact.Info,
  success: _lucidereact.CheckCircle2,
  warning: _lucidereact.AlertTriangle,
  error: _lucidereact.AlertCircle,
  neutral: _lucidereact.Info
};
var Alert = _react.forwardRef.call(void 0, 
  ({ tone, title, icon, onDismiss, actions, className, children, "data-testid": testId, ...props }, ref) => {
    const DefaultIcon = defaultIcons[_nullishCoalesce(tone, () => ( "info"))];
    const isUrgent = tone === "error" || tone === "warning";
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "div",
      {
        ref,
        role: isUrgent ? "alert" : "status",
        className: cn(alertVariants({ tone }), className),
        "data-testid": _nullishCoalesce(testId, () => ( `alert-${_nullishCoalesce(tone, () => ( "info"))}`)),
        ...props,
        children: [
          icon !== false && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "mt-0.5 shrink-0", children: _nullishCoalesce(icon, () => ( /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DefaultIcon, { "aria-hidden": "true", className: "h-5 w-5" }))) }),
          /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "min-w-0 flex-1 space-y-1", children: [
            title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-body-sm font-semibold", children: title }),
            children && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "text-body-sm opacity-90", children }),
            actions && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "flex flex-wrap gap-2 pt-2", children: actions })
          ] }),
          onDismiss && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "button",
            {
              type: "button",
              onClick: onDismiss,
              "aria-label": "Dismiss",
              className: "-m-1 h-7 w-7 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.X, { "aria-hidden": "true", className: "h-5 w-5" })
            }
          )
        ]
      }
    );
  }
);
Alert.displayName = "Alert";

// src/atoms/spinner/spinner.tsx


// src/atoms/spinner/spinner.variants.ts

var spinnerVariants = _classvarianceauthority.cva.call(void 0, 
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

var Spinner = _react.forwardRef.call(void 0, 
  ({ size, tone, label = "Loading", className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "span",
    {
      ref,
      role: "status",
      "aria-label": label,
      className: cn(spinnerVariants({ size, tone }), className),
      "data-testid": _nullishCoalesce(testId, () => ( "spinner")),
      ...props
    }
  )
);
Spinner.displayName = "Spinner";

// src/atoms/skeleton/skeleton.tsx


// src/atoms/skeleton/skeleton.variants.ts

var skeletonVariants = _classvarianceauthority.cva.call(void 0, "animate-pulse bg-grey-200", {
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

var Skeleton = _react.forwardRef.call(void 0, 
  ({ shape, width, height, lines = 1, className, style, "data-testid": testId, ...props }, ref) => {
    if (shape === "text" && lines > 1) {
      return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, "aria-hidden": "true", className: cn("space-y-2", className), "data-testid": _nullishCoalesce(testId, () => ( "skeleton")), ...props, children: Array.from({ length: lines }, (_, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "div",
        {
          className: skeletonVariants({ shape }),
          style: { width: i === lines - 1 ? "60%" : width, height }
        },
        i
      )) });
    }
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        ref,
        "aria-hidden": "true",
        className: cn(skeletonVariants({ shape }), className),
        style: { width, height, ...style },
        "data-testid": _nullishCoalesce(testId, () => ( "skeleton")),
        ...props
      }
    );
  }
);
Skeleton.displayName = "Skeleton";

// src/atoms/progress/progress.tsx


// src/atoms/progress/progress.variants.ts

var progressTrackVariants = _classvarianceauthority.cva.call(void 0, "relative w-full overflow-hidden rounded-full bg-grey-200", {
  variants: {
    size: { sm: "h-1", md: "h-2", lg: "h-3" }
  },
  defaultVariants: { size: "md" }
});
var progressBarVariants = _classvarianceauthority.cva.call(void 0, "h-full rounded-full transition-[width] duration-normal ease-out", {
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

var Progress = _react.forwardRef.call(void 0, 
  ({ value, max = 100, size, tone, label, showValue, className, "data-testid": testId, ...props }, ref) => {
    const indeterminate = value === void 0 || value === null;
    const percent = indeterminate ? 0 : Math.min(100, Math.max(0, value / max * 100));
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { ref, className: cn("w-full font-sans", className), "data-testid": _nullishCoalesce(testId, () => ( "progress")), ...props, children: [
      (label || showValue && !indeterminate) && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mb-1.5 flex items-center justify-between text-body-sm", children: [
        label && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "font-medium text-foreground", children: label }),
        showValue && !indeterminate && /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className: "tabular-nums text-foreground-muted", children: [
          Math.round(percent),
          "%"
        ] })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "div",
        {
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": max,
          "aria-valuenow": indeterminate ? void 0 : value,
          "aria-label": typeof label === "string" ? label : props["aria-label"],
          className: progressTrackVariants({ size }),
          children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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


// src/atoms/box/box.variants.ts


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
var boxVariants = _classvarianceauthority.cva.call(void 0, "", {
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

var Box = _react.forwardRef.call(void 0, 
  ({ as: Component = "div", padding, background, border, radius, shadow, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Component,
    {
      ref,
      className: cn(boxVariants({ padding, background, border, radius, shadow }), className),
      "data-testid": _nullishCoalesce(testId, () => ( "box")),
      ...props
    }
  )
);
Box.displayName = "Box";

// src/atoms/stack/stack.tsx


// src/atoms/stack/stack.variants.ts

var stackVariants = _classvarianceauthority.cva.call(void 0, "flex", {
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

var Stack = _react.forwardRef.call(void 0, 
  ({ as: Component = "div", direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Component,
    {
      ref,
      className: cn(stackVariants({ direction, gap, align, justify, wrap }), className),
      "data-testid": _nullishCoalesce(testId, () => ( `stack-${_nullishCoalesce(direction, () => ( "vertical"))}`)),
      ...props
    }
  )
);
Stack.displayName = "Stack";

// src/atoms/flex/flex.tsx


// src/atoms/flex/flex.variants.ts

var flexVariants = _classvarianceauthority.cva.call(void 0, "", {
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

var Flex = _react.forwardRef.call(void 0, 
  ({ as: Component = "div", inline, direction, gap, align, justify, wrap, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Component,
    {
      ref,
      className: cn(flexVariants({ inline, direction, gap, align, justify, wrap }), className),
      "data-testid": _nullishCoalesce(testId, () => ( "flex")),
      ...props
    }
  )
);
Flex.displayName = "Flex";

// src/atoms/container/container.tsx


// src/atoms/container/container.variants.ts

var containerVariants = _classvarianceauthority.cva.call(void 0, "mx-auto w-full px-4 sm:px-6 lg:px-8", {
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

var Container = _react.forwardRef.call(void 0, 
  ({ as: Component = "div", size, gutter, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    Component,
    {
      ref,
      className: cn(containerVariants({ size, gutter }), className),
      "data-testid": _nullishCoalesce(testId, () => ( "container")),
      ...props
    }
  )
);
Container.displayName = "Container";

// src/atoms/divider/divider.tsx


// src/atoms/divider/divider.variants.ts

var dividerVariants = _classvarianceauthority.cva.call(void 0, "shrink-0 border-border", {
  variants: {
    orientation: {
      horizontal: "w-full border-t",
      vertical: "min-h-[1em] self-stretch border-l"
    },
    variant: { solid: "border-solid", dashed: "border-dashed" }
  },
  defaultVariants: { orientation: "horizontal", variant: "solid" }
});
var dividerSpacingVariants = _classvarianceauthority.cva.call(void 0, "", {
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

var Divider = _react.forwardRef.call(void 0, 
  ({ orientation, variant, spacing, label, className, "data-testid": testId, ...props }, ref) => {
    const dataTestId = _nullishCoalesce(testId, () => ( `divider-${_nullishCoalesce(orientation, () => ( "horizontal"))}`));
    const spacingClass = dividerSpacingVariants({ orientation, spacing });
    if (label && orientation !== "vertical") {
      return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        "div",
        {
          ref,
          role: "separator",
          className: cn("flex w-full items-center gap-3", spacingClass, className),
          "data-testid": dataTestId,
          ...props,
          children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: cn(dividerVariants({ variant }), "flex-1") }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "font-sans text-caption font-medium uppercase text-foreground-muted", children: label }),
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: cn(dividerVariants({ variant }), "flex-1") })
          ]
        }
      );
    }
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "div",
      {
        ref,
        role: "separator",
        "aria-orientation": _nullishCoalesce(orientation, () => ( "horizontal")),
        className: cn(dividerVariants({ orientation, variant }), spacingClass, className),
        "data-testid": dataTestId,
        ...props
      }
    );
  }
);
Divider.displayName = "Divider";

// src/atoms/card/card.tsx


// src/atoms/card/card.variants.ts

var cardVariants = _classvarianceauthority.cva.call(void 0, "rounded-lg bg-background font-sans text-foreground", {
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

var Card = _react.forwardRef.call(void 0, 
  ({ variant, padding, interactive, className, "data-testid": testId, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    {
      ref,
      className: cn(cardVariants({ variant, padding, interactive }), className),
      "data-testid": _nullishCoalesce(testId, () => ( "card")),
      ...props
    }
  )
);
Card.displayName = "Card";
var CardHeader = _react.forwardRef.call(void 0, 
  ({ title, description, action, className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { ref, className: cn("mb-4 flex items-start justify-between gap-4", className), ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "min-w-0 space-y-1", children: [
      title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "h3", { className: "text-body-lg font-semibold text-foreground", children: title }),
      description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { className: "text-body-sm text-foreground-muted", children: description }),
      children
    ] }),
    action && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "shrink-0", children: action })
  ] })
);
CardHeader.displayName = "CardHeader";
var CardContent = _react.forwardRef.call(void 0, 
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, className: cn("text-body-sm", className), ...props })
);
CardContent.displayName = "CardContent";
var CardFooter = _react.forwardRef.call(void 0, 
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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


// src/atoms/avatar/avatar.variants.ts

var avatarVariants = _classvarianceauthority.cva.call(void 0, 
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
var avatarStatusVariants = _classvarianceauthority.cva.call(void 0, "absolute bottom-0 right-0 block rounded-full ring-2 ring-background", {
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

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}
var Avatar = _react.forwardRef.call(void 0, 
  ({ src, name, size, shape, tone, status, className, "data-testid": testId, ...props }, ref) => {
    const [failed, setFailed] = _react.useState.call(void 0, false);
    _react.useEffect.call(void 0, () => setFailed(false), [src]);
    const showImage = src && !failed;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "span",
      {
        ref,
        role: "img",
        "aria-label": _nullishCoalesce(name, () => ( "Avatar")),
        className: cn(avatarVariants({ size, shape, tone }), status && "overflow-visible", className),
        "data-testid": _nullishCoalesce(testId, () => ( "avatar")),
        ...props,
        children: [
          showImage ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "img",
            {
              src,
              alt: "",
              onError: () => setFailed(true),
              className: cn("h-full w-full object-cover", shape === "square" ? "rounded-md" : "rounded-full")
            }
          ) : /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", children: getInitials(name) }),
          status && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", className: avatarStatusVariants({ status, size }) })
        ]
      }
    );
  }
);
Avatar.displayName = "Avatar";

// src/atoms/tooltip/tooltip.tsx

var _reacttooltip = require('@radix-ui/react-tooltip'); var TooltipPrimitive = _interopRequireWildcard(_reacttooltip);

// src/atoms/tooltip/tooltip.variants.ts

var tooltipContentVariants = _classvarianceauthority.cva.call(void 0, 
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
var tooltipArrowVariants = _classvarianceauthority.cva.call(void 0, "", {
  variants: {
    tone: { dark: "fill-grey-900", light: "fill-background" }
  },
  defaultVariants: { tone: "dark" }
});

// src/atoms/tooltip/tooltip.tsx

var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = _react.forwardRef.call(void 0, 
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
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Provider, { delayDuration: delay, children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, TooltipPrimitive.Root, { open, defaultOpen, onOpenChange, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Trigger, { asChild: true, children }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Portal, { children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
        TooltipPrimitive.Content,
        {
          ref,
          side,
          align,
          sideOffset: 6,
          className: cn(tooltipContentVariants({ tone }), className),
          "data-testid": _nullishCoalesce(testId, () => ( `tooltip-content-${_nullishCoalesce(tone, () => ( "dark"))}`)),
          children: [
            content,
            showArrow && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TooltipPrimitive.Arrow, { className: tooltipArrowVariants({ tone }) })
          ]
        }
      ) })
    ] }) });
  }
);
Tooltip.displayName = "Tooltip";

// src/atoms/tag/tag.tsx



// src/atoms/tag/tag.variants.ts

var tagVariants = _classvarianceauthority.cva.call(void 0, 
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
var tagRemoveVariants = _classvarianceauthority.cva.call(void 0, 
  "-mr-1 inline-flex shrink-0 items-center justify-center rounded-sm opacity-60 transition-opacity hover:bg-black/5 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: { sm: "h-4 w-4", md: "h-5 w-5" }
    },
    defaultVariants: { size: "md" }
  }
);

// src/atoms/tag/tag.tsx

var Tag = _react.forwardRef.call(void 0, 
  ({ tone, size, disabled, icon, onRemove, removeLabel, className, children, "data-testid": testId, ...props }, ref) => {
    const text = typeof children === "string" ? children : void 0;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      "span",
      {
        ref,
        className: cn(tagVariants({ tone, size, disabled }), className),
        "data-testid": _nullishCoalesce(testId, () => ( `tag-${_nullishCoalesce(_nullishCoalesce(text, () => ( tone)), () => ( "neutral"))}`)),
        "aria-disabled": disabled || void 0,
        ...props,
        children: [
          icon && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "inline-flex shrink-0", children: icon }),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { className: "truncate", children }),
          onRemove && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            "button",
            {
              type: "button",
              onClick: onRemove,
              disabled: _nullishCoalesce(disabled, () => ( void 0)),
              "aria-label": _nullishCoalesce(removeLabel, () => ( (text ? `Remove ${text}` : "Remove"))),
              className: tagRemoveVariants({ size }),
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.X, { "aria-hidden": "true", className: size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5" })
            }
          )
        ]
      }
    );
  }
);
Tag.displayName = "Tag";































































exports.Alert = Alert; exports.Avatar = Avatar; exports.Badge = Badge; exports.BitwinUIProvider = _chunkGBKW6WAEjs.BitwinUIProvider; exports.Box = Box; exports.Button = Button; exports.Card = Card; exports.CardContent = CardContent; exports.CardFooter = CardFooter; exports.CardHeader = CardHeader; exports.Checkbox = Checkbox; exports.Container = Container; exports.Divider = Divider; exports.Flex = Flex; exports.Heading = Heading; exports.Icon = Icon; exports.Input = Input; exports.Label = Label; exports.Link = Link; exports.Progress = Progress; exports.Radio = Radio; exports.RadioGroup = RadioGroup; exports.Select = Select; exports.Skeleton = Skeleton; exports.Spinner = Spinner; exports.Stack = Stack; exports.Switch = Switch; exports.Tag = Tag; exports.Text = Text; exports.Textarea = Textarea; exports.Tooltip = Tooltip; exports.TooltipProvider = TooltipProvider; exports.alertVariants = alertVariants; exports.avatarVariants = avatarVariants; exports.badgeVariants = badgeVariants; exports.boxVariants = boxVariants; exports.buttonVariants = buttonVariants; exports.cardVariants = cardVariants; exports.checkboxBoxVariants = checkboxBoxVariants; exports.cn = cn; exports.containerVariants = containerVariants; exports.dividerVariants = dividerVariants; exports.fieldVariants = fieldVariants; exports.flexVariants = flexVariants; exports.getInitials = getInitials; exports.headingVariants = headingVariants; exports.iconVariants = iconVariants; exports.labelVariants = labelVariants; exports.linkVariants = linkVariants; exports.progressBarVariants = progressBarVariants; exports.progressTrackVariants = progressTrackVariants; exports.radioGroupVariants = radioGroupVariants; exports.radioVariants = radioVariants; exports.skeletonVariants = skeletonVariants; exports.spinnerVariants = spinnerVariants; exports.stackVariants = stackVariants; exports.switchThumbVariants = switchThumbVariants; exports.switchTrackVariants = switchTrackVariants; exports.tagVariants = tagVariants; exports.textVariants = textVariants; exports.tooltipContentVariants = tooltipContentVariants; exports.useLinkComponent = _chunkGBKW6WAEjs.useLinkComponent;
//# sourceMappingURL=index.js.map