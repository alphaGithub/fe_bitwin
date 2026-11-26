import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Star } from "lucide-react";
import { Chip, ChipGroup } from "./chip";

const meta = {
  title: "Atoms/Selection/Chip",
  component: Chip,
  args: { children: "In stock", onSelectedChange: fn() },
} satisfies Meta<typeof Chip>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Selected: Story = { args: { defaultSelected: true } };
export const WithCheck: Story = { args: { showCheck: true, defaultSelected: true } };
export const WithIconAndCount: Story = { args: { icon: <Star className="h-3.5 w-3.5" aria-hidden="true" />, count: 24, children: "Top rated" } };
export const Square: Story = { args: { shape: "square" } };

const filters = [
  { value: "new", label: "New arrivals", count: 12 },
  { value: "sale", label: "On sale", count: 30 },
  { value: "stock", label: "In stock" },
  { value: "free", label: "Free shipping" },
  { value: "pre", label: "Pre-order", disabled: true },
];

export const MultipleGroup: StoryObj<typeof ChipGroup> = {
  render: () => <ChipGroup label="Filters" options={filters} defaultValue={["sale"]} showCheck onValueChange={fn()} />,
};
export const SingleGroup: StoryObj<typeof ChipGroup> = {
  render: () => (
    <ChipGroup
      type="single"
      label="Size"
      labelPlacement="left"
      shape="square"
      options={["XS", "S", "M", "L", "XL"].map((s) => ({ value: s, label: s }))}
      defaultValue="M"
      onValueChange={fn()}
    />
  ),
};
