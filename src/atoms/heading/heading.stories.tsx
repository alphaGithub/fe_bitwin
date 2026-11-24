import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./heading";

const meta = {
  title: "Atoms/Heading",
  component: Heading,
  args: { children: "Heading text" },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Levels: Story = {
  render: (args) => (
    <div className="space-y-3">
      <Heading {...args} level={1} size="display">Display</Heading>
      {([1, 2, 3, 4, 5, 6] as const).map((level) => (
        <Heading key={level} {...args} level={level}>Heading {level}</Heading>
      ))}
    </div>
  ),
};
