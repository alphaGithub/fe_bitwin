import type { Meta, StoryObj } from "@storybook/react";
import { TruncatedText } from "./truncated-text";

const long = "Men's Organic Cotton Relaxed-Fit Crew-Neck T-Shirt with Ribbed Collar — Pack of 3, Assorted Colours";

const meta = {
  title: "Atoms/Display/TruncatedText",
  component: TruncatedText,
  args: { text: long, className: "text-body-sm" },
  decorators: [(Story) => <div className="w-64 rounded-md border border-border p-3"><Story /></div>],
} satisfies Meta<typeof TruncatedText>;
export default meta;
type Story = StoryObj<typeof meta>;

export const SingleLine: Story = {};
export const TwoLines: Story = { args: { lines: 2 } };
export const ByCharacters: Story = { args: { maxLength: 30 } };
export const ShortText: Story = { args: { text: "Fits fine" } };
