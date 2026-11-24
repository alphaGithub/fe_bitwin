import * as react from 'react';
import { HTMLAttributes, AnchorHTMLAttributes, ElementType, ButtonHTMLAttributes, ReactNode, LabelHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, CSSProperties, ReactElement } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { LucideProps, LucideIcon } from 'lucide-react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ClassValue } from 'clsx';
export { BitwinUIProvider, BitwinUIProviderProps, LinkComponentProps, LinkComponentType, useLinkComponent } from './composites/index.js';

declare const textVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
    weight?: "bold" | "regular" | "medium" | "semibold" | null | undefined;
    tone?: "default" | "muted" | "primary" | "success" | "warning" | "error" | "inherit" | null | undefined;
    align?: "left" | "right" | "center" | null | undefined;
    truncate?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type TextProps = HTMLAttributes<HTMLElement> & VariantProps<typeof textVariants> & {
    /** Element to render. Defaults to `p`. */
    as?: "p" | "span" | "div" | "label" | "small" | "strong" | "em";
    "data-testid"?: string;
};
declare const Text: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | "xs" | null | undefined;
    weight?: "bold" | "regular" | "medium" | "semibold" | null | undefined;
    tone?: "default" | "muted" | "primary" | "success" | "warning" | "error" | "inherit" | null | undefined;
    align?: "left" | "right" | "center" | null | undefined;
    truncate?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Element to render. Defaults to `p`. */
    as?: "p" | "span" | "div" | "label" | "small" | "strong" | "em";
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

declare const headingVariants: (props?: ({
    size?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    align?: "left" | "right" | "center" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingProps = HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof headingVariants> & {
    /** Semantic level (`h1`–`h6`). Visual size defaults to match, override with `size`. */
    level?: Level;
    "data-testid"?: string;
};
declare const Heading: react.ForwardRefExoticComponent<HTMLAttributes<HTMLHeadingElement> & VariantProps<(props?: ({
    size?: "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
    align?: "left" | "right" | "center" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Semantic level (`h1`–`h6`). Visual size defaults to match, override with `size`. */
    level?: Level;
    "data-testid"?: string;
} & react.RefAttributes<HTMLHeadingElement>>;

declare const iconVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    tone?: "default" | "muted" | "primary" | "success" | "warning" | "error" | "inherit" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type IconProps = Omit<LucideProps, "size" | "ref"> & VariantProps<typeof iconVariants> & {
    /** Any lucide-react icon, e.g. `import { Search } from "lucide-react"`. */
    icon: LucideIcon;
    /** Accessible name. Omit for decorative icons (they're hidden from screen readers). */
    label?: string;
    "data-testid"?: string;
};
declare const Icon: react.ForwardRefExoticComponent<Omit<LucideProps, "size" | "ref"> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    tone?: "default" | "muted" | "primary" | "success" | "warning" | "error" | "inherit" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Any lucide-react icon, e.g. `import { Search } from "lucide-react"`. */
    icon: LucideIcon;
    /** Accessible name. Omit for decorative icons (they're hidden from screen readers). */
    label?: string;
    "data-testid"?: string;
} & react.RefAttributes<SVGSVGElement>>;

declare const linkVariants: (props?: ({
    tone?: "muted" | "primary" | "inherit" | "neutral" | null | undefined;
    underline?: "none" | "hover" | "always" | null | undefined;
    size?: "md" | "sm" | "inherit" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof linkVariants> & {
    href: string;
    /** Opens in a new tab with safe `rel` and shows an external icon. */
    external?: boolean;
    /** Router link to render with. Falls back to BitwinUIProvider's, then `<a>`. */
    as?: ElementType;
    "data-testid"?: string;
};
declare const Link: react.ForwardRefExoticComponent<AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<(props?: ({
    tone?: "muted" | "primary" | "inherit" | "neutral" | null | undefined;
    underline?: "none" | "hover" | "always" | null | undefined;
    size?: "md" | "sm" | "inherit" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    href: string;
    /** Opens in a new tab with safe `rel` and shows an external icon. */
    external?: boolean;
    /** Router link to render with. Falls back to BitwinUIProvider's, then `<a>`. */
    as?: ElementType;
    "data-testid"?: string;
} & react.RefAttributes<HTMLAnchorElement>>;

declare const buttonVariants: (props?: ({
    variant?: "link" | "primary" | "secondary" | "outline" | "ghost" | "danger" | null | undefined;
    size?: "lg" | "md" | "sm" | "icon" | null | undefined;
    rounded?: "lg" | "md" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    as?: undefined;
};
type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    /** Router link component (e.g. `next/link`). Falls back to BitwinUIProvider's, then `<a>`. */
    as?: ElementType;
};
type ButtonProps = (ButtonAsButtonProps | ButtonAsLinkProps) & VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    "data-testid"?: string;
};
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;

declare const labelVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & VariantProps<typeof labelVariants> & {
    /** Shows a red asterisk. */
    required?: boolean;
    "data-testid"?: string;
};
declare const Label: react.ForwardRefExoticComponent<LabelHTMLAttributes<HTMLLabelElement> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Shows a red asterisk. */
    required?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLLabelElement>>;

/** Shared look for text-like fields (Input, Textarea, Select trigger) so they line up in forms. */
declare const fieldVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & VariantProps<typeof fieldVariants> & {
    /** Content inside the field on the left, e.g. an `<Icon />`. */
    leftElement?: ReactNode;
    /** Content inside the field on the right, e.g. a unit or icon. */
    rightElement?: ReactNode;
    "data-testid"?: string;
};
declare const Input: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Content inside the field on the left, e.g. an `<Icon />`. */
    leftElement?: ReactNode;
    /** Content inside the field on the right, e.g. a unit or icon. */
    rightElement?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLInputElement>>;

declare const textareaVariants: (props?: ({
    resize?: "none" | "both" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<VariantProps<typeof fieldVariants>, "size"> & VariantProps<typeof textareaVariants> & {
    "data-testid"?: string;
};
declare const Textarea: react.ForwardRefExoticComponent<TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string>, "size"> & VariantProps<(props?: ({
    resize?: "none" | "both" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    "data-testid"?: string;
} & react.RefAttributes<HTMLTextAreaElement>>;

declare const checkboxBoxVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & VariantProps<typeof checkboxBoxVariants> & {
    /** Text shown next to the box (clickable). */
    label?: ReactNode;
    /** Helper text below the label. */
    description?: ReactNode;
    /** Shows a dash instead of a check — e.g. "some items selected". */
    indeterminate?: boolean;
    "data-testid"?: string;
};
declare const Checkbox: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> & VariantProps<(props?: ({
    size?: "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Text shown next to the box (clickable). */
    label?: ReactNode;
    /** Helper text below the label. */
    description?: ReactNode;
    /** Shows a dash instead of a check — e.g. "some items selected". */
    indeterminate?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLInputElement>>;

declare const radioVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const radioGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type RadioGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> & VariantProps<typeof radioGroupVariants> & VariantProps<typeof radioVariants> & {
    /** Form field name. Auto-generated if omitted. */
    name?: string;
    /** Controlled value. */
    value?: string;
    /** Initial value when uncontrolled. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    "data-testid"?: string;
};
declare const RadioGroup: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> & VariantProps<(props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & VariantProps<(props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Form field name. Auto-generated if omitted. */
    name?: string;
    /** Controlled value. */
    value?: string;
    /** Initial value when uncontrolled. */
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;
type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "value"> & VariantProps<typeof radioVariants> & {
    value: string;
    label?: ReactNode;
    description?: ReactNode;
    "data-testid"?: string;
};
declare const Radio: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value"> & VariantProps<(props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    value: string;
    label?: ReactNode;
    description?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLInputElement>>;

declare const switchTrackVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const switchThumbVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & VariantProps<typeof switchTrackVariants> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: ReactNode;
    /** Label position relative to the switch. */
    labelPosition?: "left" | "right";
    "data-testid"?: string;
};
declare const Switch: react.ForwardRefExoticComponent<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & VariantProps<(props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    checked?: boolean;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: ReactNode;
    /** Label position relative to the switch. */
    labelPosition?: "left" | "right";
    "data-testid"?: string;
} & react.RefAttributes<HTMLButtonElement>>;

type SelectOption = {
    value: string;
    label: ReactNode;
    disabled?: boolean;
};
type SelectProps = VariantProps<typeof fieldVariants> & {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    /** Form field name (renders a hidden native select for form submission). */
    name?: string;
    id?: string;
    className?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "data-testid"?: string;
};
declare const Select: react.ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    /** Form field name (renders a hidden native select for form submission). */
    name?: string;
    id?: string;
    className?: string;
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLButtonElement>>;

declare const badgeVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
    appearance?: "outline" | "soft" | "solid" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants> & {
    /** Shows a small colored dot before the text. */
    dot?: boolean;
    icon?: ReactNode;
    "data-testid"?: string;
};
declare const Badge: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & VariantProps<(props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
    appearance?: "outline" | "soft" | "solid" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Shows a small colored dot before the text. */
    dot?: boolean;
    icon?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

declare const alertVariants: (props?: ({
    tone?: "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type AlertProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & VariantProps<typeof alertVariants> & {
    title?: ReactNode;
    /** Custom icon element, or `false` to hide the icon. */
    icon?: ReactNode | false;
    /** Shows a close button that calls this. */
    onDismiss?: () => void;
    /** Buttons/links shown under the content. */
    actions?: ReactNode;
    "data-testid"?: string;
};
declare const Alert: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "title"> & VariantProps<(props?: ({
    tone?: "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    title?: ReactNode;
    /** Custom icon element, or `false` to hide the icon. */
    icon?: ReactNode | false;
    /** Shows a close button that calls this. */
    onDismiss?: () => void;
    /** Buttons/links shown under the content. */
    actions?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

declare const spinnerVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    tone?: "muted" | "primary" | "inherit" | "white" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type SpinnerProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof spinnerVariants> & {
    /** Screen-reader text. */
    label?: string;
    "data-testid"?: string;
};
declare const Spinner: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    tone?: "muted" | "primary" | "inherit" | "white" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Screen-reader text. */
    label?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

declare const skeletonVariants: (props?: ({
    shape?: "text" | "circle" | "rect" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type SkeletonProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof skeletonVariants> & {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    /** For `shape="text"`: renders this many lines, the last one shorter. */
    lines?: number;
    "data-testid"?: string;
};
declare const Skeleton: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    shape?: "text" | "circle" | "rect" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    /** For `shape="text"`: renders this many lines, the last one shorter. */
    lines?: number;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

declare const progressTrackVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const progressBarVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | null | undefined;
    indeterminate?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ProgressProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & VariantProps<typeof progressTrackVariants> & Omit<VariantProps<typeof progressBarVariants>, "indeterminate"> & {
    /** Current value. Omit for an indeterminate (loading) bar. */
    value?: number;
    max?: number;
    /** Text shown above the bar. */
    label?: ReactNode;
    /** Shows the percentage next to the label. */
    showValue?: boolean;
    "data-testid"?: string;
};
declare const Progress: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "children"> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & Omit<VariantProps<(props?: ({
    tone?: "primary" | "success" | "warning" | "error" | null | undefined;
    indeterminate?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string>, "indeterminate"> & {
    /** Current value. Omit for an indeterminate (loading) bar. */
    value?: number;
    max?: number;
    /** Text shown above the bar. */
    label?: ReactNode;
    /** Shows the percentage next to the label. */
    showValue?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

/** Elements layout atoms may render as. */
type LayoutElement = "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav" | "ul" | "ol" | "li" | "span" | "form";

declare const boxVariants: (props?: ({
    padding?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    background?: "muted" | "primary" | "none" | "background" | "surface" | null | undefined;
    border?: boolean | null | undefined;
    radius?: "lg" | "md" | "sm" | "none" | "xl" | "full" | null | undefined;
    shadow?: "lg" | "md" | "sm" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type BoxProps = HTMLAttributes<HTMLElement> & VariantProps<typeof boxVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
};
/** Generic container with token-based padding, background, border, radius and shadow. */
declare const Box: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    padding?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    background?: "muted" | "primary" | "none" | "background" | "surface" | null | undefined;
    border?: boolean | null | undefined;
    radius?: "lg" | "md" | "sm" | "none" | "xl" | "full" | null | undefined;
    shadow?: "lg" | "md" | "sm" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    as?: LayoutElement;
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

declare const stackVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
    gap?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    align?: "end" | "start" | "center" | "baseline" | "stretch" | null | undefined;
    justify?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    wrap?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type StackProps = HTMLAttributes<HTMLElement> & VariantProps<typeof stackVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
};
/** Puts children in a column (default) or row with consistent spacing. */
declare const Stack: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
    gap?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    align?: "end" | "start" | "center" | "baseline" | "stretch" | null | undefined;
    justify?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    wrap?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    as?: LayoutElement;
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

declare const flexVariants: (props?: ({
    inline?: boolean | null | undefined;
    direction?: "row" | "column" | "column-reverse" | "row-reverse" | null | undefined;
    gap?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    align?: "end" | "start" | "center" | "baseline" | "stretch" | null | undefined;
    justify?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    wrap?: "wrap" | "nowrap" | "wrap-reverse" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type FlexProps = HTMLAttributes<HTMLElement> & VariantProps<typeof flexVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
};
/** Full-control flexbox (row by default). For simple spaced lists, prefer `Stack`. */
declare const Flex: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    inline?: boolean | null | undefined;
    direction?: "row" | "column" | "column-reverse" | "row-reverse" | null | undefined;
    gap?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    align?: "end" | "start" | "center" | "baseline" | "stretch" | null | undefined;
    justify?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    wrap?: "wrap" | "nowrap" | "wrap-reverse" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    as?: LayoutElement;
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

declare const containerVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xl" | "full" | "2xl" | null | undefined;
    gutter?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ContainerProps = HTMLAttributes<HTMLElement> & VariantProps<typeof containerVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
};
/** Centers page content with a max width and responsive side padding. */
declare const Container: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | "xl" | "full" | "2xl" | null | undefined;
    gutter?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    as?: LayoutElement;
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

declare const dividerVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "solid" | "dashed" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/** Outer margin around the divider. */
declare const dividerSpacingVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    spacing?: "lg" | "md" | "sm" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type DividerProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof dividerVariants> & VariantProps<typeof dividerSpacingVariants> & {
    /** Text in the middle of a horizontal divider, e.g. "OR". */
    label?: ReactNode;
    "data-testid"?: string;
};
declare const Divider: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    variant?: "solid" | "dashed" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & VariantProps<(props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    spacing?: "lg" | "md" | "sm" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Text in the middle of a horizontal divider, e.g. "OR". */
    label?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

declare const cardVariants: (props?: ({
    variant?: "ghost" | "filled" | "outlined" | "elevated" | null | undefined;
    padding?: "lg" | "md" | "sm" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type CardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants> & {
    "data-testid"?: string;
};
declare const Card: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "ghost" | "filled" | "outlined" | "elevated" | null | undefined;
    padding?: "lg" | "md" | "sm" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;
type CardHeaderProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    title?: ReactNode;
    description?: ReactNode;
    /** Right-aligned slot, e.g. a menu button or badge. */
    action?: ReactNode;
};
declare const CardHeader: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
    title?: ReactNode;
    description?: ReactNode;
    /** Right-aligned slot, e.g. a menu button or badge. */
    action?: ReactNode;
} & react.RefAttributes<HTMLDivElement>>;
declare const CardContent: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;

declare const avatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    shape?: "square" | "circle" | null | undefined;
    tone?: "blue" | "green" | "grey" | "red" | "yellow" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const avatarStatusVariants: (props?: ({
    status?: "online" | "offline" | "busy" | "away" | null | undefined;
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type AvatarProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof avatarVariants> & {
    src?: string;
    /** Person's name — used for alt text and to build initials if the image is missing. */
    name?: string;
    status?: VariantProps<typeof avatarStatusVariants>["status"];
    "data-testid"?: string;
};
/** "Amit Kumar Shah" → "AS", "amit" → "A". */
declare function getInitials(name?: string): string;
declare const Avatar: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    shape?: "square" | "circle" | null | undefined;
    tone?: "blue" | "green" | "grey" | "red" | "yellow" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    src?: string;
    /** Person's name — used for alt text and to build initials if the image is missing. */
    name?: string;
    status?: VariantProps<typeof avatarStatusVariants>["status"];
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

declare const tooltipContentVariants: (props?: ({
    tone?: "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

/**
 * Optional: wrap your app once to share hover-delay behavior across all tooltips.
 * Each `Tooltip` also works on its own without it.
 */
declare const TooltipProvider: react.FC<TooltipPrimitive.TooltipProviderProps>;
type TooltipProps = VariantProps<typeof tooltipContentVariants> & {
    /** What appears in the tooltip. */
    content: ReactNode;
    /** The element that triggers the tooltip. Must accept a ref (Button, Icon button, etc.). */
    children: ReactElement;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    /** Milliseconds before showing. */
    delay?: number;
    showArrow?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    className?: string;
    "data-testid"?: string;
};
declare const Tooltip: react.ForwardRefExoticComponent<VariantProps<(props?: ({
    tone?: "dark" | "light" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** What appears in the tooltip. */
    content: ReactNode;
    /** The element that triggers the tooltip. Must accept a ref (Button, Icon button, etc.). */
    children: ReactElement;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
    /** Milliseconds before showing. */
    delay?: number;
    showArrow?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    className?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

declare const tagVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | null | undefined;
    size?: "md" | "sm" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type TagProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof tagVariants> & {
    /** Leading icon or avatar. */
    icon?: ReactNode;
    /** Shows an × button that calls this. */
    onRemove?: () => void;
    /** Accessible label for the remove button. Defaults to "Remove <text>". */
    removeLabel?: string;
    "data-testid"?: string;
};
declare const Tag: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & VariantProps<(props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | null | undefined;
    size?: "md" | "sm" | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Leading icon or avatar. */
    icon?: ReactNode;
    /** Shows an × button that calls this. */
    onRemove?: () => void;
    /** Accessible label for the remove button. Defaults to "Remove <text>". */
    removeLabel?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

/** Combines conditional classes (clsx) and resolves conflicting Tailwind utilities (tailwind-merge). */
declare function cn(...inputs: ClassValue[]): string;

export { Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Box, type BoxProps, Button, type ButtonProps, Card, CardContent, CardFooter, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, Container, type ContainerProps, Divider, type DividerProps, Flex, type FlexProps, Heading, type HeadingProps, Icon, type IconProps, Input, type InputProps, Label, type LabelProps, Link, type LinkProps, Progress, type ProgressProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Select, type SelectOption, type SelectProps, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, Stack, type StackProps, Switch, type SwitchProps, Tag, type TagProps, Text, type TextProps, Textarea, type TextareaProps, Tooltip, type TooltipProps, TooltipProvider, alertVariants, avatarVariants, badgeVariants, boxVariants, buttonVariants, cardVariants, checkboxBoxVariants, cn, containerVariants, dividerVariants, fieldVariants, flexVariants, getInitials, headingVariants, iconVariants, labelVariants, linkVariants, progressBarVariants, progressTrackVariants, radioGroupVariants, radioVariants, skeletonVariants, spinnerVariants, stackVariants, switchThumbVariants, switchTrackVariants, tagVariants, textVariants, tooltipContentVariants };
