import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CopyButton } from "./copy-button";

const meta = {
  title: "Atoms/Display/CopyButton",
  component: CopyButton,
  args: { text: "ORD-2026-11-000123", onCopy: fn() },
} satisfies Meta<typeof CopyButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const IconOnly: Story = {};
export const WithLabel: Story = { args: { label: "Copy order ID", variant: "outline" } };
export const InlineWithValue: Story = {
  render: (args) => (
    <div className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1 font-mono text-body-sm">
      {args.text}
      <CopyButton {...args} size="icon" className="h-7 w-7" />
    </div>
  ),
};
