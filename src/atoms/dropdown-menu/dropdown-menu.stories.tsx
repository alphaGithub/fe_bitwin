import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { fn } from "@storybook/test";
import { ChevronDown, Copy, MoreHorizontal, Pencil, Share2, Trash2 } from "lucide-react";
import { Button } from "../button";
import { DropdownMenu } from "./dropdown-menu";

const meta = {
  title: "Atoms/Overlays/DropdownMenu",
  component: DropdownMenu,
  args: {
    trigger: <Button variant="outline" rightIcon={<ChevronDown className="h-4 w-4" aria-hidden="true" />}>Actions</Button>,
    items: [
      { type: "label", label: "Product" },
      { label: "Edit", icon: <Pencil className="h-4 w-4" aria-hidden="true" />, shortcut: "⌘E", onSelect: fn() },
      { label: "Duplicate", icon: <Copy className="h-4 w-4" aria-hidden="true" />, shortcut: "⌘D", onSelect: fn() },
      { label: "Share", icon: <Share2 className="h-4 w-4" aria-hidden="true" />, disabled: true },
      { type: "separator" },
      { label: "Delete", icon: <Trash2 className="h-4 w-4" aria-hidden="true" />, danger: true, onSelect: fn() },
    ],
  },
  argTypes: { trigger: { control: false } },
} satisfies Meta<typeof DropdownMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const IconTrigger: Story = {
  args: {
    align: "end",
    trigger: <Button variant="ghost" size="icon" aria-label="More options"><MoreHorizontal className="h-5 w-5" aria-hidden="true" /></Button>,
  },
};
function ColumnPicker() {
  const [cols, setCols] = useState({ price: true, stock: true, sku: false });
  return (
    <DropdownMenu
      keepOpenOnSelect
      trigger={<Button variant="outline">Columns</Button>}
      items={[
        { type: "label", label: "Show columns" },
        ...(Object.keys(cols) as Array<keyof typeof cols>).map((k) => ({
          type: "checkbox" as const,
          label: k.toUpperCase(),
          checked: cols[k],
          onCheckedChange: (checked: boolean) => setCols((c) => ({ ...c, [k]: checked })),
        })),
      ]}
    />
  );
}

export const CheckboxItems: Story = { render: () => <ColumnPicker /> };
