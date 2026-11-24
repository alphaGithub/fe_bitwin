import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  args: { label: "Remember me" },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Indeterminate: Story = { args: { indeterminate: true, label: "Select all" } };
export const WithDescription: Story = {
  args: { label: "Email notifications", description: "Get an email when someone replies to you." },
};
export const Small: Story = { args: { size: "sm" } };
export const Invalid: Story = { args: { invalid: true, label: "I agree to the terms" } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };
export const BoxOnly: Story = { args: { label: undefined, "aria-label": "Select row" } };
