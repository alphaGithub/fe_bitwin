import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";
import { Stack } from "./stack";

const Item = ({ n }: { n: number }) => (
  <Box padding="sm" background="primary" radius="md" className="text-body-sm text-primary-700">Item {n}</Box>
);

const meta = {
  title: "Atoms/Layout/Stack",
  component: Stack,
  render: (args) => (
    <Stack {...args}>
      <Item n={1} />
      <Item n={2} />
      <Item n={3} />
    </Stack>
  ),
} satisfies Meta<typeof Stack>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};
export const Horizontal: Story = { args: { direction: "horizontal", align: "center" } };
export const SpaceBetween: Story = { args: { direction: "horizontal", justify: "between", className: "w-96" } };
