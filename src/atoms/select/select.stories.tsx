import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "./select";

const meta = {
  title: "Atoms/Select",
  component: Select,
  args: {
    "aria-label": "Fruit",
    placeholder: "Choose a fruit",
    onValueChange: fn(),
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "mango", label: "Mango" },
      { value: "durian", label: "Durian (out of stock)", disabled: true },
    ],
  },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "mango" } };
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Invalid: Story = { args: { invalid: true } };
export const Disabled: Story = { args: { disabled: true } };
