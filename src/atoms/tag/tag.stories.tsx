import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Hash } from "lucide-react";
import { Avatar } from "../avatar";
import { Tag } from "./tag";

const meta = { title: "Atoms/Tag", component: Tag, args: { children: "Design" } } satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Removable: Story = { args: { onRemove: fn() } };
export const Tones: Story = {
  render: (args) => (
    <div className="flex gap-2">
      {(["neutral", "primary", "success", "warning", "error"] as const).map((tone) => (
        <Tag key={tone} {...args} tone={tone} onRemove={fn()}>{tone}</Tag>
      ))}
    </div>
  ),
};
export const WithIcon: Story = { args: { icon: <Hash className="h-3.5 w-3.5" aria-hidden="true" />, children: "frontend" } };
export const WithAvatar: Story = {
  args: { icon: <Avatar name="Jane Doe" size="xs" tone="blue" />, children: "Jane Doe", onRemove: fn() },
};
export const Small: Story = { args: { size: "sm", onRemove: fn() } };
export const Disabled: Story = { args: { disabled: true, onRemove: fn() } };
