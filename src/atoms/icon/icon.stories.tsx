import type { Meta, StoryObj } from "@storybook/react";
import { Bell, Check, Heart, Search, Settings, User } from "lucide-react";
import { Icon } from "./icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  args: { icon: Search },
  argTypes: { icon: { control: false } },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Icon key={size} {...args} size={size} />
      ))}
    </div>
  ),
};
export const Tones: Story = {
  render: () => (
    <div className="flex gap-4">
      <Icon icon={User} tone="default" />
      <Icon icon={Settings} tone="muted" />
      <Icon icon={Bell} tone="primary" />
      <Icon icon={Check} tone="success" />
      <Icon icon={Heart} tone="error" />
    </div>
  ),
};
