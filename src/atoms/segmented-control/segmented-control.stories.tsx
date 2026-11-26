import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LayoutGrid, List } from "lucide-react";
import { SegmentedControl } from "./segmented-control";

const meta = {
  title: "Atoms/Selection/SegmentedControl",
  component: SegmentedControl,
  args: {
    "aria-label": "Date range",
    onValueChange: fn(),
    options: [
      { value: "day", label: "Day" },
      { value: "week", label: "Week" },
      { value: "month", label: "Month" },
      { value: "year", label: "Year" },
    ],
  },
} satisfies Meta<typeof SegmentedControl>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Primary: Story = { args: { tone: "primary", defaultValue: "week" } };
export const IconOnly: Story = {
  args: {
    "aria-label": "View",
    options: [
      { value: "grid", icon: <LayoutGrid className="h-4 w-4" aria-hidden="true" />, "aria-label": "Grid view" },
      { value: "list", icon: <List className="h-4 w-4" aria-hidden="true" />, "aria-label": "List view" },
    ],
  },
};
export const FullWidth: Story = { args: { fullWidth: true, className: "w-96" } };
export const Small: Story = { args: { size: "sm" } };
