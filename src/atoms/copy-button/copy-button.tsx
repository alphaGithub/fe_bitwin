"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { Check, Copy } from "lucide-react";
import { Button, buttonVariants } from "../button";
import { Tooltip } from "../tooltip";

export type CopyButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children" | "onCopy" | "onError"> &
  VariantProps<typeof buttonVariants> & {
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

async function writeClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for non-secure contexts (http) where the Clipboard API is unavailable.
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

export const CopyButton = forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      text,
      label,
      copiedLabel = "Copied!",
      resetAfter = 2000,
      onCopy,
      onError,
      variant = "ghost",
      size,
      "aria-label": ariaLabel,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>();
    useEffect(() => () => clearTimeout(timer.current), []);

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

    const icon = copied ? (
      <Check aria-hidden="true" className="h-4 w-4 text-success-600" />
    ) : (
      <Copy aria-hidden="true" className="h-4 w-4" />
    );
    const iconOnly = !label;

    const button = (
      <Button
        ref={ref}
        variant={variant}
        size={size ?? (iconOnly ? "icon" : "sm")}
        onClick={copy}
        aria-label={iconOnly ? (copied ? copiedLabel : (ariaLabel ?? "Copy to clipboard")) : ariaLabel}
        leftIcon={iconOnly ? undefined : icon}
        data-testid={testId ?? "copy-button"}
        data-copied={copied || undefined}
        {...props}
      >
        {iconOnly ? icon : copied ? copiedLabel : label}
      </Button>
    );

    return (
      <>
        {iconOnly ? <Tooltip content={copied ? copiedLabel : "Copy"} delay={300}>{button}</Tooltip> : button}
        <span role="status" aria-live="polite" className="sr-only">
          {copied ? copiedLabel : ""}
        </span>
      </>
    );
  }
);
CopyButton.displayName = "CopyButton";
