import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";
import { Flex } from "./flex";

const meta = {
  title: "Atoms/Layout/Flex",
  component: Flex,
  args: { gap: "sm", wrap: "wrap", className: "w-80" },
  render: (args) => (
    <Flex {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i} padding="sm" background="muted" radius="md" className="text-body-sm">Tag {i + 1}</Box>
      ))}
    </Flex>
  ),
} satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Wrapping: Story = {};
export const Centered: Story = { args: { justify: "center", align: "center" } };
