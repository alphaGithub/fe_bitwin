import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { OTPInput } from "./otp-input";

const meta = {
  title: "Atoms/Inputs/OTPInput",
  component: OTPInput,
  args: { onComplete: fn(), onValueChange: fn() },
} satisfies Meta<typeof OTPInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FourDigits: Story = { args: { length: 4 } };
export const Alphanumeric: Story = { args: { type: "alphanumeric", length: 5 } };
export const Masked: Story = { args: { mask: true, length: 4 } };
export const Invalid: Story = { args: { invalid: true, defaultValue: "123456" } };
export const Small: Story = { args: { size: "sm" } };
