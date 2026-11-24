import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  args: { value: 60, label: "Profile completion", showValue: true },
  argTypes: { value: { control: { type: "range", min: 0, max: 100 } } },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Tones: Story = {
  render: (args) => (
    <div className="space-y-4">
      {(["primary", "success", "warning", "error"] as const).map((tone) => (
        <Progress key={tone} {...args} tone={tone} label={tone} />
      ))}
    </div>
  ),
};
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Progress key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
};
export const Indeterminate: Story = { args: { value: undefined, label: "Loading…", showValue: false } };
