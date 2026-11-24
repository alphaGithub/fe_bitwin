import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./divider";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Dashed: Story = { args: { variant: "dashed" } };
export const WithLabel: Story = { args: { label: "or continue with" } };
export const Vertical: Story = {
  render: () => (
    <div className="flex h-6 items-center text-body-sm">
      <span>Home</span>
      <Divider orientation="vertical" spacing="md" />
      <span>Docs</span>
      <Divider orientation="vertical" spacing="md" />
      <span>Blog</span>
    </div>
  ),
};
