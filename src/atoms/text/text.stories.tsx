import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  args: { children: "The quick brown fox jumps over the lazy dog." },
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Text {...args} size="lg">Large — {args.children}</Text>
      <Text {...args} size="md">Medium — {args.children}</Text>
      <Text {...args} size="sm">Small — {args.children}</Text>
      <Text {...args} size="xs">Extra small — {args.children}</Text>
    </div>
  ),
};
export const Tones: Story = {
  render: (args) => (
    <div className="space-y-2">
      {(["default", "muted", "primary", "success", "warning", "error"] as const).map((tone) => (
        <Text key={tone} {...args} tone={tone}>{tone}</Text>
      ))}
    </div>
  ),
};
export const Truncated: Story = {
  args: { truncate: true, className: "w-48" },
};
