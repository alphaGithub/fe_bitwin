"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { Search, X } from "lucide-react";
import { FieldIconButton } from "../../lib/field-icon-button";
import { useControllableState } from "../../lib/use-controllable-state";
import { Spinner } from "../spinner";
import { Input } from "../input";
import type { InputProps } from "../input";

export type SearchInputProps = Omit<InputProps, "type" | "value" | "defaultValue" | "onChange" | "leftElement" | "rightElement"> & {
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

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value,
      defaultValue = "",
      onValueChange,
      onSearch,
      onClear,
      isLoading,
      placeholder = "Search…",
      onKeyDown,
      disabled,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    const [current, setCurrent] = useControllableState(value, defaultValue, onValueChange);
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const clear = () => {
      setCurrent("");
      onClear?.();
      innerRef.current?.focus();
    };

    return (
      <Input
        ref={innerRef}
        type="search"
        role="searchbox"
        value={current}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrent(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(e);
          if (e.key === "Enter") onSearch?.(current);
          if (e.key === "Escape" && current) {
            e.preventDefault();
            clear();
          }
        }}
        className="[&_input::-webkit-search-cancel-button]:appearance-none"
        leftElement={<Search aria-hidden="true" className="h-4 w-4" />}
        rightElement={
          isLoading ? (
            <Spinner size="sm" tone="muted" label="Searching" />
          ) : current ? (
            <FieldIconButton onClick={clear} aria-label="Clear search" disabled={disabled}>
              <X aria-hidden="true" className="h-4 w-4" />
            </FieldIconButton>
          ) : null
        }
        data-testid={testId ?? "search-input"}
        {...props}
      />
    );
  }
);
SearchInput.displayName = "SearchInput";
