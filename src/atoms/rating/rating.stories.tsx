import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Rating } from "./rating";

const meta = { title: "Atoms/Selection/Rating", component: Rating, args: { onValueChange: fn() } } satisfies Meta<typeof Rating>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = { args: { defaultValue: 3 } };
export const ReadOnlyFractional: Story = { args: { value: 4.3, readOnly: true, showValue: true, count: 1284 } };
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Rating {...args} size="sm" defaultValue={4} />
      <Rating {...args} size="md" defaultValue={4} />
      <Rating {...args} size="lg" defaultValue={4} />
    </div>
  ),
};
export const TenStars: Story = { args: { max: 10, defaultValue: 7 } };
export const Disabled: Story = { args: { disabled: true, value: 2 } };
