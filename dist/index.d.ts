import * as react from 'react';
import { HTMLAttributes, AnchorHTMLAttributes, ElementType, ButtonHTMLAttributes, ReactNode, LabelHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ComponentPropsWithoutRef, CSSProperties, ReactElement } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { LucideProps, LucideIcon } from 'lucide-react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DialogPrimitive from '@radix-ui/react-dialog';
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

type TruncatedTextProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
    text: string;
    /** Clamp to this many lines (CSS). Default 1. */
    lines?: number;
    /** Alternatively cut after this many characters and add "…". Takes priority over `lines`. */
    maxLength?: number;
    /** Show the full text in a tooltip when it's cut off. Default true. */
    showTooltip?: boolean;
    as?: "p" | "span" | "div";
    "data-testid"?: string;
};
/** Text that shortens itself with "…" and reveals the full value on hover. */
declare const TruncatedText: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLElement>, "children"> & {
    text: string;
    /** Clamp to this many lines (CSS). Default 1. */
    lines?: number;
    /** Alternatively cut after this many characters and add "…". Takes priority over `lines`. */
    maxLength?: number;
    /** Show the full text in a tooltip when it's cut off. Default true. */
    showTooltip?: boolean;
    as?: "p" | "span" | "div";
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

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

declare const buttonGroupVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    attached?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof buttonGroupVariants> & {
    "data-testid"?: string;
};
/** Groups related `Button`s; `attached` (default) joins them into one control. */
declare const ButtonGroup: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    attached?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

type CopyButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children" | "onCopy" | "onError"> & VariantProps<typeof buttonVariants> & {
    "data-testid"?: string;
    /** Text to copy. */
    text: string;
    /** Button label. Omit for an icon-only button. */
    label?: string;
    /** Label shown briefly after copying. */
    copiedLabel?: string;
    /** How long the "copied" state lasts, in ms. */
    resetAfter?: number;
    onCopy?: (text: string) => void;
    onError?: (error: unknown) => void;
};
declare const CopyButton: react.ForwardRefExoticComponent<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onCopy" | "onError" | "onClick"> & VariantProps<(props?: ({
    variant?: "link" | "primary" | "secondary" | "outline" | "ghost" | "danger" | null | undefined;
    size?: "lg" | "md" | "sm" | "icon" | null | undefined;
    rounded?: "lg" | "md" | "full" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    "data-testid"?: string;
    /** Text to copy. */
    text: string;
    /** Button label. Omit for an icon-only button. */
    label?: string;
    /** Label shown briefly after copying. */
    copiedLabel?: string;
    /** How long the "copied" state lasts, in ms. */
    resetAfter?: number;
    onCopy?: (text: string) => void;
    onError?: (error: unknown) => void;
} & react.RefAttributes<HTMLButtonElement>>;

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

type PasswordInputProps = Omit<InputProps, "type" | "rightElement"> & {
    /** Shows a lock icon on the left. */
    showLockIcon?: boolean;
};
declare const PasswordInput: react.ForwardRefExoticComponent<Omit<InputProps, "type" | "rightElement"> & {
    /** Shows a lock icon on the left. */
    showLockIcon?: boolean;
} & react.RefAttributes<HTMLInputElement>>;

type SearchInputProps = Omit<InputProps, "type" | "value" | "defaultValue" | "onChange" | "leftElement" | "rightElement"> & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Called on Enter. */
    onSearch?: (value: string) => void;
    /** Called when the clear (×) button is pressed. */
    onClear?: () => void;
    /** Shows a spinner instead of the clear button. */
    isLoading?: boolean;
};
declare const SearchInput: react.ForwardRefExoticComponent<Omit<InputProps, "defaultValue" | "onChange" | "type" | "value" | "leftElement" | "rightElement"> & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Called on Enter. */
    onSearch?: (value: string) => void;
    /** Called when the clear (×) button is pressed. */
    onClear?: () => void;
    /** Shows a spinner instead of the clear button. */
    isLoading?: boolean;
} & react.RefAttributes<HTMLInputElement>>;

type NumberInputProps = Omit<InputProps, "type" | "value" | "defaultValue" | "onChange" | "min" | "max" | "step" | "leftElement" | "rightElement"> & {
    /** `null` = empty. */
    value?: number | null;
    defaultValue?: number | null;
    onValueChange?: (value: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    /** Decimal places to round to. Defaults to the step's precision. */
    precision?: number;
    /** Hides the −/+ buttons. */
    hideControls?: boolean;
    /** Text after the number, e.g. "kg" or "%". */
    suffix?: string;
    /** Text before the number, e.g. "₹". */
    prefix?: string;
};
declare const NumberInput: react.ForwardRefExoticComponent<Omit<InputProps, "defaultValue" | "onChange" | "max" | "min" | "type" | "step" | "value" | "leftElement" | "rightElement"> & {
    /** `null` = empty. */
    value?: number | null;
    defaultValue?: number | null;
    onValueChange?: (value: number | null) => void;
    min?: number;
    max?: number;
    step?: number;
    /** Decimal places to round to. Defaults to the step's precision. */
    precision?: number;
    /** Hides the −/+ buttons. */
    hideControls?: boolean;
    /** Text after the number, e.g. "kg" or "%". */
    suffix?: string;
    /** Text before the number, e.g. "₹". */
    prefix?: string;
} & react.RefAttributes<HTMLInputElement>>;

declare const otpCellVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type OTPInputProps = VariantProps<typeof otpCellVariants> & {
    /** Number of boxes. */
    length?: number;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Fires once every box is filled. */
    onComplete?: (value: string) => void;
    /** `numeric` allows digits only. */
    type?: "numeric" | "alphanumeric";
    /** Masks characters like a password. */
    mask?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    /** Accessible label for the group, e.g. "Verification code". */
    "aria-label"?: string;
    className?: string;
    "data-testid"?: string;
};
declare const OTPInput: react.ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Number of boxes. */
    length?: number;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    /** Fires once every box is filled. */
    onComplete?: (value: string) => void;
    /** `numeric` allows digits only. */
    type?: "numeric" | "alphanumeric";
    /** Masks characters like a password. */
    mask?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    /** Accessible label for the group, e.g. "Verification code". */
    "aria-label"?: string;
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

declare const tagInputVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type TagInputProps = Omit<VariantProps<typeof tagInputVariants>, "disabled"> & {
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (tags: string[]) => void;
    placeholder?: string;
    /** Keys that commit the typed text as a tag. */
    separators?: string[];
    maxTags?: number;
    allowDuplicates?: boolean;
    /** Return `false` (or an error string) to reject a tag. */
    validate?: (tag: string) => boolean | string;
    /** Called when a tag is rejected, with the reason. */
    onReject?: (tag: string, reason: string) => void;
    tagTone?: TagProps["tone"];
    disabled?: boolean;
    id?: string;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
};
declare const TagInput: react.ForwardRefExoticComponent<Omit<VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    invalid?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string>, "disabled"> & {
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (tags: string[]) => void;
    placeholder?: string;
    /** Keys that commit the typed text as a tag. */
    separators?: string[];
    maxTags?: number;
    allowDuplicates?: boolean;
    /** Return `false` (or an error string) to reject a tag. */
    validate?: (tag: string) => boolean | string;
    /** Called when a tag is rejected, with the reason. */
    onReject?: (tag: string, reason: string) => void;
    tagTone?: TagProps["tone"];
    disabled?: boolean;
    id?: string;
    className?: string;
    "aria-label"?: string;
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

declare const chipVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    shape?: "rounded" | "square" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const chipGroupVariants: (props?: ({
    direction?: "row" | "column" | null | undefined;
    gap?: "md" | "sm" | "xs" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ChipProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & VariantProps<typeof chipVariants> & {
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    icon?: ReactNode;
    /** Shows a check mark when selected. */
    showCheck?: boolean;
    /** Small count after the label. */
    count?: number;
    "data-testid"?: string;
};
/** A toggle button that looks like a pill — for filters and quick choices. */
declare const Chip: react.ForwardRefExoticComponent<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    shape?: "rounded" | "square" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    selected?: boolean;
    defaultSelected?: boolean;
    onSelectedChange?: (selected: boolean) => void;
    icon?: ReactNode;
    /** Shows a check mark when selected. */
    showCheck?: boolean;
    /** Small count after the label. */
    count?: number;
    "data-testid"?: string;
} & react.RefAttributes<HTMLButtonElement>>;
type ChipOption = {
    value: string;
    label: ReactNode;
    icon?: ReactNode;
    count?: number;
    disabled?: boolean;
};
type ChipGroupBase = VariantProps<typeof chipGroupVariants> & Pick<ChipProps, "size" | "shape" | "showCheck"> & {
    options: ChipOption[];
    /** Optional visible title. */
    label?: ReactNode;
    labelPlacement?: "top" | "left";
    disabled?: boolean;
    /** Stretch chips to share the full width (column direction). */
    fullWidth?: boolean;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
};
type ChipGroupProps = (ChipGroupBase & {
    type: "single";
    value?: string | null;
    defaultValue?: string | null;
    onValueChange?: (value: string | null) => void;
    /** Allow clicking the selected chip to unselect it. */
    deselectable?: boolean;
}) | (ChipGroupBase & {
    type?: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    /** Maximum chips that can be selected. */
    max?: number;
});
/** A set of chips with single (radio-like) or multiple (checkbox-like) selection. */
declare const ChipGroup: react.ForwardRefExoticComponent<ChipGroupProps & react.RefAttributes<HTMLDivElement>>;

declare const segmentedControlVariants: (props?: ({
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const segmentVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    tone?: "primary" | "neutral" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type SegmentOption = {
    value: string;
    label?: ReactNode;
    icon?: ReactNode;
    /** Required when the option is icon-only. */
    "aria-label"?: string;
    disabled?: boolean;
};
type SegmentedControlProps = VariantProps<typeof segmentedControlVariants> & VariantProps<typeof segmentVariants> & {
    options: SegmentOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
};
/** Pick one of a few options, shown as connected segments (e.g. Day / Week / Month). */
declare const SegmentedControl: react.ForwardRefExoticComponent<VariantProps<(props?: ({
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    tone?: "primary" | "neutral" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    options: SegmentOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

declare const ratingVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type RatingProps = VariantProps<typeof ratingVariants> & {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    /** Number of stars. */
    max?: number;
    /** Display only. Fractions (e.g. 3.5) render partially filled stars. */
    readOnly?: boolean;
    disabled?: boolean;
    /** Shows the number next to the stars, e.g. "4.5". */
    showValue?: boolean;
    /** Review count next to the value, e.g. "(128)". */
    count?: number;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
};
declare const Rating: react.ForwardRefExoticComponent<VariantProps<(props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    /** Number of stars. */
    max?: number;
    /** Display only. Fractions (e.g. 3.5) render partially filled stars. */
    readOnly?: boolean;
    disabled?: boolean;
    /** Shows the number next to the stars, e.g. "4.5". */
    showValue?: boolean;
    /** Review count next to the value, e.g. "(128)". */
    count?: number;
    className?: string;
    "aria-label"?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

type TabsVariant = "underline" | "pill" | "enclosed";
type TabsOrientation = "horizontal" | "vertical";
declare const tabsListVariants: (props?: ({
    variant?: "underline" | "pill" | "enclosed" | null | undefined;
    orientation?: "horizontal" | "vertical" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const tabsTriggerVariants: (props?: ({
    variant?: "underline" | "pill" | "enclosed" | null | undefined;
    orientation?: "horizontal" | "vertical" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type TabsProps = Omit<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, "orientation"> & {
    /** `underline` (default), `pill`, or `enclosed` (segmented look). */
    variant?: TabsVariant;
    orientation?: TabsOrientation;
    size?: "sm" | "md" | "lg";
    "data-testid"?: string;
};
type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    /** Stretch triggers to fill the width. */
    fullWidth?: boolean;
};
declare const TabsList: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    /** Stretch triggers to fill the width. */
    fullWidth?: boolean;
} & react.RefAttributes<HTMLDivElement>>;
type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    icon?: ReactNode;
    /** Number shown in a small pill next to the label. */
    count?: number;
};
declare const TabsTrigger: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
    icon?: ReactNode;
    /** Number shown in a small pill next to the label. */
    count?: number;
} & react.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
/**
 * ```tsx
 * <Tabs defaultValue="orders">
 *   <Tabs.List>
 *     <Tabs.Trigger value="orders" count={12}>Orders</Tabs.Trigger>
 *     <Tabs.Trigger value="returns">Returns</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="orders">…</Tabs.Content>
 *   <Tabs.Content value="returns">…</Tabs.Content>
 * </Tabs>
 * ```
 */
declare const Tabs: react.ForwardRefExoticComponent<Omit<Omit<TabsPrimitive.TabsProps & react.RefAttributes<HTMLDivElement>, "ref">, "orientation"> & {
    /** `underline` (default), `pill`, or `enclosed` (segmented look). */
    variant?: TabsVariant;
    orientation?: TabsOrientation;
    size?: "sm" | "md" | "lg";
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>> & {
    List: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
        /** Stretch triggers to fill the width. */
        fullWidth?: boolean;
    } & react.RefAttributes<HTMLDivElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
        icon?: ReactNode;
        /** Number shown in a small pill next to the label. */
        count?: number;
    } & react.RefAttributes<HTMLButtonElement>>;
    Content: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const breadcrumbVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type BreadcrumbItem = {
    label: ReactNode;
    /** Renders as a link (via BitwinUIProvider's router link if set). */
    href?: string;
    /** Renders as a button when there's no href. */
    onClick?: () => void;
    icon?: ReactNode;
};
type BreadcrumbProps = Omit<HTMLAttributes<HTMLElement>, "children"> & VariantProps<typeof breadcrumbVariants> & {
    items: BreadcrumbItem[];
    separator?: ReactNode;
    /** Collapse the middle into "…" when there are more items than this. */
    maxItems?: number;
    "data-testid"?: string;
};
declare const Breadcrumb: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLElement>, "children"> & VariantProps<(props?: ({
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    items: BreadcrumbItem[];
    separator?: ReactNode;
    /** Collapse the middle into "…" when there are more items than this. */
    maxItems?: number;
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>>;

type StepStatus = "complete" | "current" | "upcoming" | "error";

type StepItem = {
    title: ReactNode;
    description?: ReactNode;
    /** Custom icon instead of the step number. */
    icon?: ReactNode;
    /** Forces a status (e.g. `"error"`); otherwise derived from `current`. */
    status?: StepStatus;
    disabled?: boolean;
};
type StepsProps = Omit<HTMLAttributes<HTMLOListElement>, "onChange"> & {
    steps: StepItem[];
    /** Index of the active step (0-based). Steps before it are complete. */
    current: number;
    orientation?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
    /** Makes completed steps (and the current one) clickable. */
    onStepClick?: (index: number) => void;
    /** Allow clicking upcoming steps too (free navigation). */
    allowSkipAhead?: boolean;
    "data-testid"?: string;
};
declare const Steps: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLOListElement>, "onChange"> & {
    steps: StepItem[];
    /** Index of the active step (0-based). Steps before it are complete. */
    current: number;
    orientation?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
    /** Makes completed steps (and the current one) clickable. */
    onStepClick?: (index: number) => void;
    /** Allow clicking upcoming steps too (free navigation). */
    allowSkipAhead?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLOListElement>>;

type AccordionVariant = "bordered" | "separated" | "ghost";
declare const accordionVariants: (props?: ({
    variant?: "ghost" | "bordered" | "separated" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type RootProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;
type AccordionProps = RootProps & {
    variant?: AccordionVariant;
    size?: "sm" | "md";
    /** Chevron on the left or right of the header. */
    iconPosition?: "left" | "right";
    "data-testid"?: string;
};
declare const AccordionItem: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type AccordionTriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    /** Leading icon. */
    icon?: ReactNode;
    /** Secondary text under the title. */
    description?: ReactNode;
    /** Right-side slot before the chevron, e.g. a Badge or count. */
    extra?: ReactNode;
};
declare const AccordionTrigger: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
    /** Leading icon. */
    icon?: ReactNode;
    /** Secondary text under the title. */
    description?: ReactNode;
    /** Right-side slot before the chevron, e.g. a Badge or count. */
    extra?: ReactNode;
} & react.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
/**
 * ```tsx
 * <Accordion type="single" collapsible defaultValue="shipping">
 *   <Accordion.Item value="shipping">
 *     <Accordion.Trigger>Shipping</Accordion.Trigger>
 *     <Accordion.Content>Ships in 2 days.</Accordion.Content>
 *   </Accordion.Item>
 * </Accordion>
 * ```
 * `type="multiple"` lets several items stay open.
 */
declare const Accordion: react.ForwardRefExoticComponent<AccordionProps & react.RefAttributes<HTMLDivElement>> & {
    Item: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & {
        /** Leading icon. */
        icon?: ReactNode;
        /** Secondary text under the title. */
        description?: ReactNode;
        /** Right-side slot before the chevron, e.g. a Badge or count. */
        extra?: ReactNode;
    } & react.RefAttributes<HTMLButtonElement>>;
    Content: react.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const badgeVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
    appearance?: "solid" | "outline" | "soft" | null | undefined;
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
    appearance?: "solid" | "outline" | "soft" | null | undefined;
    size?: "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Shows a small colored dot before the text. */
    dot?: boolean;
    icon?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

declare const countBadgeVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "dark" | null | undefined;
    size?: "md" | "sm" | null | undefined;
    dot?: boolean | null | undefined;
    attached?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type CountBadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & Omit<VariantProps<typeof countBadgeVariants>, "attached"> & {
    count?: number;
    /** Above this shows "max+". */
    max?: number;
    /** Show the badge when count is 0. */
    showZero?: boolean;
    /** When given, the badge is pinned to this element's top-right corner (e.g. a bell icon). */
    children?: ReactNode;
    /** Screen-reader text, e.g. "unread notifications". */
    label?: string;
    "data-testid"?: string;
};
/** Number bubble (e.g. unread count). Wrap an element to pin it to the corner. */
declare const CountBadge: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLSpanElement>, "children"> & Omit<VariantProps<(props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "dark" | null | undefined;
    size?: "md" | "sm" | null | undefined;
    dot?: boolean | null | undefined;
    attached?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string>, "attached"> & {
    count?: number;
    /** Above this shows "max+". */
    max?: number;
    /** Show the badge when count is 0. */
    showZero?: boolean;
    /** When given, the badge is pinned to this element's top-right corner (e.g. a bell icon). */
    children?: ReactNode;
    /** Screen-reader text, e.g. "unread notifications". */
    label?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

type StatusTone = "success" | "warning" | "error" | "info" | "primary" | "neutral";
declare const statusDotVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type StatusDotProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof statusDotVariants> & {
    /** Visible text after the dot, e.g. "Online". */
    label?: ReactNode;
    /** Animated ping, for "live" states. */
    pulse?: boolean;
    "data-testid"?: string;
};
/** Small colored dot for live status (online, active, failed…), optionally with a label. */
declare const StatusDot: react.ForwardRefExoticComponent<HTMLAttributes<HTMLSpanElement> & VariantProps<(props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "info" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Visible text after the dot, e.g. "Online". */
    label?: ReactNode;
    /** Animated ping, for "live" states. */
    pulse?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLSpanElement>>;

declare const alertVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "dark" | "info" | null | undefined;
    variant?: "banner" | "inline" | null | undefined;
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
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | "dark" | "info" | null | undefined;
    variant?: "banner" | "inline" | null | undefined;
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
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const flexItemVariants: (props?: ({
    alignSelf?: "end" | "start" | "center" | "auto" | "baseline" | "stretch" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

/** Number of columns in a full row for `Flex.Item colspan`. */
declare const FLEX_COLUMNS = 24;
type FlexProps = HTMLAttributes<HTMLElement> & VariantProps<typeof flexVariants> & {
    as?: LayoutElement;
    "data-testid"?: string;
};
type FlexItemProps = HTMLAttributes<HTMLElement> & VariantProps<typeof flexItemVariants> & {
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
declare const FlexItem: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    alignSelf?: "end" | "start" | "center" | "auto" | "baseline" | "stretch" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
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
} & react.RefAttributes<HTMLElement>>;
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
declare const Flex: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
    inline?: boolean | null | undefined;
    direction?: "row" | "column" | "column-reverse" | "row-reverse" | null | undefined;
    gap?: "lg" | "md" | "sm" | "xs" | "none" | "xl" | null | undefined;
    align?: "end" | "start" | "center" | "baseline" | "stretch" | null | undefined;
    justify?: "end" | "start" | "center" | "between" | "around" | "evenly" | null | undefined;
    wrap?: "nowrap" | "wrap" | "wrap-reverse" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    as?: LayoutElement;
    "data-testid"?: string;
} & react.RefAttributes<HTMLElement>> & {
    Item: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
        alignSelf?: "end" | "start" | "center" | "auto" | "baseline" | "stretch" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string> & {
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
    } & react.RefAttributes<HTMLElement>>;
};

/**
 * Alfred-compatible values. Gutter uses Alfred's spacing scale (4/8/12/16/24px), not ours,
 * so migrated screens keep their exact spacing.
 */
declare const flexboxVariants: (props?: ({
    direction?: "row" | "column" | null | undefined;
    justify?: "end" | "start" | "center" | "space-around" | "space-between" | null | undefined;
    align?: "bottom" | "end" | "top" | "middle" | "stretch" | null | undefined;
    gutter?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    mt?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    mb?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    nowrap?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type FlexboxProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof flexboxVariants> & {
    "data-testid"?: string;
};
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
declare const Flexbox: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    direction?: "row" | "column" | null | undefined;
    justify?: "end" | "start" | "center" | "space-around" | "space-between" | null | undefined;
    align?: "bottom" | "end" | "top" | "middle" | "stretch" | null | undefined;
    gutter?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    mt?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    mb?: "lg" | "md" | "sm" | "xs" | "xl" | null | undefined;
    nowrap?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>> & {
    Item: react.ForwardRefExoticComponent<HTMLAttributes<HTMLElement> & VariantProps<(props?: ({
        alignSelf?: "end" | "start" | "center" | "auto" | "baseline" | "stretch" | null | undefined;
    } & class_variance_authority_types.ClassProp) | undefined) => string> & {
        as?: LayoutElement;
        colspan?: number;
        offset?: number;
        grow?: boolean | number;
        shrink?: boolean | number;
        basis?: react.CSSProperties["flexBasis"];
        order?: number;
        "data-testid"?: string;
    } & react.RefAttributes<HTMLElement>>;
};

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
    variant?: "dashed" | "solid" | null | undefined;
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
    variant?: "dashed" | "solid" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & VariantProps<(props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
    spacing?: "lg" | "md" | "sm" | "none" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    /** Text in the middle of a horizontal divider, e.g. "OR". */
    label?: ReactNode;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>>;

declare const cardVariants: (props?: ({
    variant?: "filled" | "ghost" | "outlined" | "elevated" | null | undefined;
    padding?: "lg" | "md" | "sm" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type CardProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants> & {
    "data-testid"?: string;
};
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
/**
 * Surface container. Sub-parts are available both ways:
 * `<Card.Header />` or the named `CardHeader` export.
 */
declare const Card: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "filled" | "ghost" | "outlined" | "elevated" | null | undefined;
    padding?: "lg" | "md" | "sm" | "none" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>> & {
    Header: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
        title?: ReactNode;
        description?: ReactNode;
        /** Right-aligned slot, e.g. a menu button or badge. */
        action?: ReactNode;
    } & react.RefAttributes<HTMLDivElement>>;
    Content: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
    Footer: react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>;
};

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

declare const timelineMarkerVariants: (props?: ({
    tone?: "primary" | "success" | "warning" | "error" | "neutral" | null | undefined;
    hasIcon?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type TimelineItem = {
    title: ReactNode;
    description?: ReactNode;
    /** Timestamp or date label. */
    time?: ReactNode;
    /** Icon inside a larger marker; omit for a small dot. */
    icon?: ReactNode;
    tone?: VariantProps<typeof timelineMarkerVariants>["tone"];
    /** Extra content under the description (e.g. attachments, buttons). */
    content?: ReactNode;
    key?: string;
};
type TimelineProps = Omit<HTMLAttributes<HTMLOListElement>, "children"> & {
    items: TimelineItem[];
    /** Where the time shows: under the title, or in a column on the left. */
    timePosition?: "inline" | "left";
    /** Draws the connector to the last item dashed (e.g. "in progress"). */
    pending?: boolean;
    "data-testid"?: string;
};
/** Vertical list of events, e.g. order history or an activity log. */
declare const Timeline: react.ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLOListElement>, "children"> & {
    items: TimelineItem[];
    /** Where the time shows: under the title, or in a column on the left. */
    timePosition?: "inline" | "left";
    /** Draws the connector to the last item dashed (e.g. "in progress"). */
    pending?: boolean;
    "data-testid"?: string;
} & react.RefAttributes<HTMLOListElement>>;

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

declare const dialogContentVariants: (props?: ({
    placement?: "right" | "center" | null | undefined;
    size?: "lg" | "md" | "sm" | "xl" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type DialogProps = VariantProps<typeof dialogContentVariants> & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Element that opens the dialog, e.g. `<Button>Edit</Button>`. Optional when controlled. */
    trigger?: ReactElement;
    title?: ReactNode;
    description?: ReactNode;
    /** Buttons area, right-aligned at the bottom. */
    footer?: ReactNode;
    children?: ReactNode;
    /** Hide the × button. */
    hideCloseButton?: boolean;
    /** Prevent closing by clicking outside / pressing Escape (e.g. while saving). */
    preventClose?: boolean;
    /** Required for accessibility when there's no visible title. */
    "aria-label"?: string;
    className?: string;
    bodyClassName?: string;
    "data-testid"?: string;
};
/**
 * Modal dialog (or side drawer with `placement="right"`).
 *
 * ```tsx
 * <Dialog
 *   trigger={<Button>Delete</Button>}
 *   title="Delete product?"
 *   description="This can't be undone."
 *   footer={<><Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close><Button variant="danger">Delete</Button></>}
 * />
 * ```
 */
declare const Dialog: react.ForwardRefExoticComponent<VariantProps<(props?: ({
    placement?: "right" | "center" | null | undefined;
    size?: "lg" | "md" | "sm" | "xl" | "full" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Element that opens the dialog, e.g. `<Button>Edit</Button>`. Optional when controlled. */
    trigger?: ReactElement;
    title?: ReactNode;
    description?: ReactNode;
    /** Buttons area, right-aligned at the bottom. */
    footer?: ReactNode;
    children?: ReactNode;
    /** Hide the × button. */
    hideCloseButton?: boolean;
    /** Prevent closing by clicking outside / pressing Escape (e.g. while saving). */
    preventClose?: boolean;
    /** Required for accessibility when there's no visible title. */
    "aria-label"?: string;
    className?: string;
    bodyClassName?: string;
    "data-testid"?: string;
} & react.RefAttributes<HTMLDivElement>> & {
    Close: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
};
declare const DialogClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;

type DropdownMenuItem = {
    type?: "item";
    label: ReactNode;
    icon?: ReactNode;
    /** Hint on the right, e.g. "⌘K". */
    shortcut?: string;
    onSelect?: () => void;
    /** Renders the item as a link. */
    href?: string;
    danger?: boolean;
    disabled?: boolean;
    key?: string;
} | {
    type: "checkbox";
    label: ReactNode;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    key?: string;
} | {
    type: "separator";
    key?: string;
} | {
    type: "label";
    label: ReactNode;
    key?: string;
};
type DropdownMenuProps = {
    /** The element that opens the menu, e.g. `<Button>Actions</Button>`. */
    trigger: ReactElement;
    items: DropdownMenuItem[];
    align?: "start" | "center" | "end";
    side?: "top" | "right" | "bottom" | "left";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Keep open after selecting (useful for checkbox lists). */
    keepOpenOnSelect?: boolean;
    className?: string;
    "data-testid"?: string;
};
declare const DropdownMenu: react.ForwardRefExoticComponent<DropdownMenuProps & react.RefAttributes<HTMLDivElement>>;

declare const dropdownItemVariants: (props?: ({
    danger?: boolean | null | undefined;
    inset?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

/** Combines conditional classes (clsx) and resolves conflicting Tailwind utilities (tailwind-merge). */
declare function cn(...inputs: ClassValue[]): string;

/**
 * State that can be controlled (`value` passed) or uncontrolled (`defaultValue`), calling
 * `onChange` either way — the standard pattern for form-like atoms.
 */
declare function useControllableState<T>(value: T | undefined, defaultValue: T, onChange?: (next: T) => void): [T, (next: T) => void];

export { Accordion, AccordionContent, AccordionItem, type AccordionProps, AccordionTrigger, type AccordionTriggerProps, Alert, type AlertProps, Avatar, type AvatarProps, Badge, type BadgeProps, Box, type BoxProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Card, CardContent, CardFooter, CardHeader, type CardHeaderProps, type CardProps, Checkbox, type CheckboxProps, Chip, ChipGroup, type ChipGroupProps, type ChipOption, type ChipProps, Container, type ContainerProps, CopyButton, type CopyButtonProps, CountBadge, type CountBadgeProps, Dialog, DialogClose, type DialogProps, Divider, type DividerProps, DropdownMenu, type DropdownMenuItem, type DropdownMenuProps, FLEX_COLUMNS, Flex, FlexItem, type FlexItemProps, type FlexProps, Flexbox, type FlexboxProps, Heading, type HeadingProps, Icon, type IconProps, Input, type InputProps, Label, type LabelProps, Link, type LinkProps, NumberInput, type NumberInputProps, OTPInput, type OTPInputProps, PasswordInput, type PasswordInputProps, Progress, type ProgressProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Rating, type RatingProps, SearchInput, type SearchInputProps, type SegmentOption, SegmentedControl, type SegmentedControlProps, Select, type SelectOption, type SelectProps, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, Stack, type StackProps, StatusDot, type StatusDotProps, type StatusTone, type StepItem, type StepStatus, Steps, type StepsProps, Switch, type SwitchProps, Tabs, TabsContent, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, Tag, TagInput, type TagInputProps, type TagProps, Text, type TextProps, Textarea, type TextareaProps, Timeline, type TimelineItem, type TimelineProps, Tooltip, type TooltipProps, TooltipProvider, TruncatedText, type TruncatedTextProps, accordionVariants, alertVariants, avatarVariants, badgeVariants, boxVariants, breadcrumbVariants, buttonGroupVariants, buttonVariants, cardVariants, checkboxBoxVariants, chipGroupVariants, chipVariants, cn, containerVariants, countBadgeVariants, dialogContentVariants, dividerVariants, dropdownItemVariants, fieldVariants, flexItemVariants, flexVariants, flexboxVariants, getInitials, headingVariants, iconVariants, labelVariants, linkVariants, otpCellVariants, progressBarVariants, progressTrackVariants, radioGroupVariants, radioVariants, ratingVariants, segmentVariants, segmentedControlVariants, skeletonVariants, spinnerVariants, stackVariants, statusDotVariants, switchThumbVariants, switchTrackVariants, tabsListVariants, tabsTriggerVariants, tagInputVariants, tagVariants, textVariants, timelineMarkerVariants, tooltipContentVariants, useControllableState };
