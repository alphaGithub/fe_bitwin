import type { Meta, StoryObj } from "@storybook/react";
import { PasswordInput } from "./password-input";

const meta = {
  title: "Atoms/Inputs/PasswordInput",
  component: PasswordInput,
  args: { placeholder: "Enter password", "aria-label": "Password" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof PasswordInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithLockIcon: Story = { args: { showLockIcon: true } };
export const Invalid: Story = { args: { invalid: true, defaultValue: "123" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "secret" } };
