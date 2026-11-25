import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { NumberInput } from "./number-input";

const meta = {
  title: "Atoms/Inputs/NumberInput",
  component: NumberInput,
  args: { "aria-label": "Quantity", defaultValue: 1, min: 0, max: 10, onValueChange: fn() },
  decorators: [(Story) => <div className="w-56"><Story /></div>],
} satisfies Meta<typeof NumberInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Decimal: Story = { args: { step: 0.5, defaultValue: 2.5, max: 100, suffix: "kg" } };
export const Currency: Story = { args: { hideControls: true, prefix: "₹", defaultValue: 499, max: 100000 } };
export const Disabled: Story = { args: { disabled: true } };
