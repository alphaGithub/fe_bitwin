"use client";

import { forwardRef, useId, useRef, useState } from "react";
import type { ClipboardEvent, KeyboardEvent } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/cn";
import { useControllableState } from "../../lib/use-controllable-state";
import { Tag } from "../tag";
import type { TagProps } from "../tag";
import { tagInputVariants } from "./tag-input.variants";

export type TagInputProps = Omit<VariantProps<typeof tagInputVariants>, "disabled"> & {
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

export const TagInput = forwardRef<HTMLInputElement, TagInputProps>(
  (
    {
      value,
      defaultValue = [],
      onValueChange,
      placeholder = "Add…",
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
      "data-testid": testId,
    },
    ref
  ) => {
    const [tags, setTags] = useControllableState(value, defaultValue, onValueChange);
    const [draft, setDraft] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const autoId = useId();
    const inputId = id ?? autoId;
    const atLimit = maxTags !== undefined && tags.length >= maxTags;

    const addTags = (candidates: string[]) => {
      const next = [...tags];
      for (const raw of candidates) {
        const tag = raw.trim();
        if (!tag) continue;
        if (maxTags !== undefined && next.length >= maxTags) {
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

    const removeAt = (index: number) => setTags(tags.filter((_, i) => i !== index));

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
      const text = e.clipboardData.getData("text");
      const parts = text.split(/[,\n\t]/);
      if (parts.length > 1) {
        e.preventDefault();
        addTags(parts);
      }
    };

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div
        className={cn(tagInputVariants({ size, invalid, disabled }), className)}
        onClick={() => inputRef.current?.focus()}
        data-testid={testId ?? "tag-input"}
      >
        {tags.map((tag, i) => (
          <Tag
            key={`${tag}-${i}`}
            size="sm"
            tone={tagTone}
            disabled={disabled}
            onRemove={disabled ? undefined : () => removeAt(i)}
          >
            {tag}
          </Tag>
        ))}
        <input
          ref={(el) => {
            inputRef.current = el;
            if (typeof ref === "function") ref(el);
            else if (ref) ref.current = el;
          }}
          id={inputId}
          value={draft}
          disabled={disabled || atLimit}
          placeholder={atLimit ? "" : tags.length ? "" : placeholder}
          aria-label={ariaLabel}
          aria-invalid={invalid || undefined}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={() => draft.trim() && addTags([draft])}
          className="min-w-[6rem] flex-1 bg-transparent px-1 text-body-sm text-foreground outline-none placeholder:text-foreground-muted disabled:cursor-not-allowed"
        />
      </div>
    );
  }
);
TagInput.displayName = "TagInput";
