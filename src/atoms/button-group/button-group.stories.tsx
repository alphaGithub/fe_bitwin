import type { Meta, StoryObj } from "@storybook/react";
import { AlignCenter, AlignLeft, AlignRight, ChevronDown } from "lucide-react";
import { Button } from "../button";
import { ButtonGroup } from "./button-group";

const meta = {
  title: "Atoms/Selection/ButtonGroup",
  component: ButtonGroup,
  args: { "aria-label": "Actions" },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Attached: Story = {};
export const Separate: Story = { args: { attached: false } };
export const Vertical: Story = { args: { orientation: "vertical" } };
export const IconButtons: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Alignment">
      <Button variant="outline" size="icon" aria-label="Align left"><AlignLeft className="h-4 w-4" aria-hidden="true" /></Button>
      <Button variant="outline" size="icon" aria-label="Align center"><AlignCenter className="h-4 w-4" aria-hidden="true" /></Button>
      <Button variant="outline" size="icon" aria-label="Align right"><AlignRight className="h-4 w-4" aria-hidden="true" /></Button>
    </ButtonGroup>
  ),
};
export const SplitButton: Story = {
  render: (args) => (
    <ButtonGroup {...args} aria-label="Save options">
      <Button>Save</Button>
      <Button size="icon" aria-label="More save options" className="border-l border-primary-500"><ChevronDown className="h-4 w-4" aria-hidden="true" /></Button>
    </ButtonGroup>
  ),
};
