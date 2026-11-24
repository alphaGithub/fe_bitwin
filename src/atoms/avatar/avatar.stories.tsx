import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  args: { name: "Amit Shah" },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {};
export const WithImage: Story = { args: { src: "https://i.pravatar.cc/120?img=12" } };
export const BrokenImage: Story = { args: { src: "/does-not-exist.png" } };
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar key={size} {...args} size={size} />
      ))}
    </div>
  ),
};
export const Tones: Story = {
  render: (args) => (
    <div className="flex gap-3">
      {(["grey", "blue", "green", "red", "yellow"] as const).map((tone) => (
        <Avatar key={tone} {...args} tone={tone} />
      ))}
    </div>
  ),
};
export const WithStatus: Story = { args: { status: "online", size: "lg" } };
export const Square: Story = { args: { shape: "square" } };
