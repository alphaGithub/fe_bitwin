import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchInput } from "./search-input";

const meta = {
  title: "Atoms/Inputs/SearchInput",
  component: SearchInput,
  args: { "aria-label": "Search", onSearch: fn(), onValueChange: fn(), onClear: fn() },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "running shoes" } };
export const Loading: Story = { args: { defaultValue: "running", isLoading: true } };
export const Small: Story = { args: { size: "sm" } };
