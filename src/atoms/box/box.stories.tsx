import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./box";

const meta = {
  title: "Atoms/Layout/Box",
  component: Box,
  args: { children: "Box content", padding: "md", background: "surface", border: true, radius: "md" },
} satisfies Meta<typeof Box>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Elevated: Story = { args: { background: "background", shadow: "md", border: false, padding: "lg" } };
