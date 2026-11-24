import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Search } from "lucide-react";
import { Icon } from "../icon";
import { Input } from "./input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  args: { placeholder: "Type here…", "aria-label": "Example" },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-3">
      <Input {...args} size="sm" placeholder="Small" />
      <Input {...args} size="md" placeholder="Medium" />
      <Input {...args} size="lg" placeholder="Large" />
    </div>
  ),
};
export const WithIcons: Story = {
  args: { leftElement: <Icon icon={Search} size="sm" />, placeholder: "Search…" },
};
export const RightElement: Story = {
  args: { type: "email", leftElement: <Icon icon={Mail} size="sm" />, rightElement: <span className="text-caption">@bitwin.com</span> },
};
export const Invalid: Story = { args: { invalid: true, defaultValue: "not-an-email" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Can't edit" } };
