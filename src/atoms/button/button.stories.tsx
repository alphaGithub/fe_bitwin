import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  args: { children: "Button", onClick: fn() },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "outline", "ghost", "danger", "link"] },
    size: { control: "select", options: ["sm", "md", "lg", "icon"] },
    rounded: { control: "select", options: ["md", "lg", "full"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Danger: Story = { args: { variant: "danger" } };
export const Link: Story = { args: { variant: "link" } };
export const Loading: Story = { args: { isLoading: true } };
export const Disabled: Story = { args: { disabled: true } };
export const FullWidth: Story = { args: { fullWidth: true } };
export const AsAnchor: Story = { args: { href: "#", children: "I'm a link" } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};
