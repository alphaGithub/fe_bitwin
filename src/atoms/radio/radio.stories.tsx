import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./radio";

const meta = {
  title: "Atoms/Radio",
  component: RadioGroup,
  args: { defaultValue: "monthly", "aria-label": "Billing" },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="monthly" label="Monthly" description="Pay every month, cancel anytime." />
      <Radio value="yearly" label="Yearly" description="Two months free." />
      <Radio value="lifetime" label="Lifetime" disabled />
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Horizontal: Story = { args: { orientation: "horizontal" } };
export const Small: Story = { args: { size: "sm" } };
export const Disabled: Story = { args: { disabled: true } };
