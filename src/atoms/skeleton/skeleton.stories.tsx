import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta = { title: "Atoms/Skeleton", component: Skeleton, args: { width: 240, height: 120 } } satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Rect: Story = {};
export const Circle: Story = { args: { shape: "circle", width: 48, height: 48 } };
export const TextLines: Story = { args: { shape: "text", lines: 4, width: undefined, height: undefined, className: "w-72" } };
export const CardPlaceholder: Story = {
  render: () => (
    <div className="flex w-80 gap-3">
      <Skeleton shape="circle" width={40} height={40} />
      <div className="flex-1">
        <Skeleton shape="text" lines={3} />
      </div>
    </div>
  ),
};
