"use client";

import { forwardRef } from "react";
import type { ReactElement, ReactNode } from "react";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import { cn } from "../../lib/cn";
import { dropdownContentVariants, dropdownItemVariants } from "./dropdown-menu.variants";

export type DropdownMenuItem =
  | {
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
    }
  | {
      type: "checkbox";
      label: ReactNode;
      checked: boolean;
      onCheckedChange: (checked: boolean) => void;
      disabled?: boolean;
      key?: string;
    }
  | { type: "separator"; key?: string }
  | { type: "label"; label: ReactNode; key?: string };

export type DropdownMenuProps = {
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

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    { trigger, items, align = "start", side = "bottom", open, onOpenChange, keepOpenOnSelect, className, "data-testid": testId },
    ref
  ) => {
    const hasCheckbox = items.some((i) => i.type === "checkbox");

    return (
      <Menu.Root open={open} onOpenChange={onOpenChange} modal={false}>
        <Menu.Trigger asChild>{trigger}</Menu.Trigger>
        <Menu.Portal>
          <Menu.Content
            ref={ref}
            align={align}
            side={side}
            sideOffset={4}
            className={cn(dropdownContentVariants(), className)}
            data-testid={testId ?? "dropdown-menu"}
          >
            {items.map((item, index) => {
              const key = item.key ?? String(index);
              switch (item.type) {
                case "separator":
                  return <Menu.Separator key={key} className="-mx-1 my-1 h-px bg-border" />;
                case "label":
                  return (
                    <Menu.Label key={key} className="px-2 py-1.5 text-caption font-medium uppercase text-foreground-muted">
                      {item.label}
                    </Menu.Label>
                  );
                case "checkbox":
                  return (
                    <Menu.CheckboxItem
                      key={key}
                      checked={item.checked}
                      onCheckedChange={item.onCheckedChange}
                      disabled={item.disabled}
                      onSelect={(e) => keepOpenOnSelect && e.preventDefault()}
                      className={dropdownItemVariants({ inset: true })}
                    >
                      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
                        <Menu.ItemIndicator>
                          <Check aria-hidden="true" className="h-4 w-4 text-primary-600" />
                        </Menu.ItemIndicator>
                      </span>
                      {item.label}
                    </Menu.CheckboxItem>
                  );
                default: {
                  const content = (
                    <>
                      {item.icon && <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center">{item.icon}</span>}
                      <span className="flex-1">{item.label}</span>
                      {item.shortcut && <span className="ml-4 text-caption text-foreground-muted">{item.shortcut}</span>}
                    </>
                  );
                  const className = dropdownItemVariants({ danger: item.danger, inset: hasCheckbox && !item.icon });
                  return item.href ? (
                    <Menu.Item key={key} asChild disabled={item.disabled} onSelect={item.onSelect}>
                      <a href={item.href} className={className}>
                        {content}
                      </a>
                    </Menu.Item>
                  ) : (
                    <Menu.Item
                      key={key}
                      disabled={item.disabled}
                      onSelect={(e) => {
                        if (keepOpenOnSelect) e.preventDefault();
                        item.onSelect?.();
                      }}
                      className={className}
                    >
                      {content}
                    </Menu.Item>
                  );
                }
              }
            })}
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    );
  }
);
DropdownMenu.displayName = "DropdownMenu";
