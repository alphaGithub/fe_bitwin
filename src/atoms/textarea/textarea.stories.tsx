import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  args: { placeholder: "Write a message…", "aria-label": "Message" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Invalid: Story = { args: { invalid: true } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Read only content" } };
export const NoResize: Story = { args: { resize: "none" } };
