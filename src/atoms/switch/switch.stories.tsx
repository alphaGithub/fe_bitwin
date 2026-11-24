import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch } from "./switch";

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  args: { label: "Enable notifications", onCheckedChange: fn() },
} satisfies Meta<typeof Switch>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const On: Story = { args: { defaultChecked: true } };
export const Small: Story = { args: { size: "sm" } };
export const LabelLeft: Story = { args: { labelPosition: "left" } };
export const Disabled: Story = { args: { disabled: true, defaultChecked: true } };
