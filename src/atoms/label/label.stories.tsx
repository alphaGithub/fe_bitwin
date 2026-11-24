import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = { title: "Atoms/Label", component: Label, args: { children: "Email address" } } satisfies Meta<typeof Label>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const Disabled: Story = { args: { disabled: true } };
