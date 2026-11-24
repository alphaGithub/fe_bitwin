import type { Meta, StoryObj } from "@storybook/react";
import { Info } from "lucide-react";
import { Button } from "../button";
import { Tooltip } from "./tooltip";

const meta = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  args: { content: "Helpful hint", children: <Button variant="outline">Hover me</Button> },
  argTypes: { children: { control: false } },
} satisfies Meta<typeof Tooltip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Light: Story = { args: { tone: "light" } };
export const Sides: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-6 p-10">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} {...args} side={side} content={`On the ${side}`}>
          <Button variant="outline">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
export const OnIconButton: Story = {
  args: {
    content: "More information",
    children: (
      <Button variant="ghost" size="icon" aria-label="Info">
        <Info className="h-5 w-5" aria-hidden="true" />
      </Button>
    ),
  },
};
export const AlwaysOpen: Story = { args: { open: true } };
