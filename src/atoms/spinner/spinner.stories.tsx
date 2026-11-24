import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const meta = { title: "Atoms/Spinner", component: Spinner } satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Spinner key={size} {...args} size={size} />
      ))}
    </div>
  ),
};
export const OnDark: Story = {
  args: { tone: "white" },
  decorators: [(Story) => <div className="rounded-md bg-grey-900 p-4"><Story /></div>],
};
