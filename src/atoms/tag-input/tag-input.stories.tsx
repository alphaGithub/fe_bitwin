import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TagInput } from "./tag-input";

const meta = {
  title: "Atoms/Inputs/TagInput",
  component: TagInput,
  args: { "aria-label": "Tags", placeholder: "Type and press Enter", onValueChange: fn(), onReject: fn() },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof TagInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithTags: Story = { args: { defaultValue: ["design", "frontend", "react"] } };
export const MaxThree: Story = { args: { defaultValue: ["one", "two"], maxTags: 3 } };
export const EmailValidation: Story = {
  args: { placeholder: "Add emails", validate: (t: string) => /\S+@\S+\.\S+/.test(t) || "invalid email", tagTone: "neutral" },
};
export const Disabled: Story = { args: { disabled: true, defaultValue: ["locked"] } };
