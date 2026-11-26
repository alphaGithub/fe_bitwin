"use client";

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { Tooltip } from "../tooltip";

export type TruncatedTextProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
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
export const TruncatedText = forwardRef<HTMLElement, TruncatedTextProps>(
  (
    { text, lines = 1, maxLength, showTooltip = true, as: Component = "span", className, style, "data-testid": testId, ...props },
    ref
  ) => {
    const innerRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLElement);
    const [overflowing, setOverflowing] = useState(false);

    const byLength = maxLength !== undefined;
    const display = byLength && text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text;

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
    const clampStyle =
      !byLength && lines > 1
        ? { display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }
        : undefined;

    const node = (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={innerRef as any}
        className={cn(!byLength && lines === 1 && "block truncate", "min-w-0", className)}
        style={{ ...clampStyle, ...style }}
        tabIndex={truncated && showTooltip ? 0 : undefined}
        data-truncated={truncated || undefined}
        data-testid={testId ?? "truncated-text"}
        {...props}
      >
        {display}
      </Component>
    );

    return showTooltip ? (
      <Tooltip content={text} disabled={!truncated}>
        {node}
      </Tooltip>
    ) : (
      node
    );
  }
);
TruncatedText.displayName = "TruncatedText";
