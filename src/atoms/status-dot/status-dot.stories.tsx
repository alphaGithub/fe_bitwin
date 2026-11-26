import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "./status-dot";

const meta = { title: "Atoms/Display/StatusDot", component: StatusDot, args: { label: "Online" } } satisfies Meta<typeof StatusDot>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Live: Story = { args: { pulse: true, label: "Live", tone: "error" } };
export const Tones: Story = {
  render: () => (
    <div className="space-y-2">
      <StatusDot tone="success" label="Delivered" />
      <StatusDot tone="warning" label="Pending" />
      <StatusDot tone="error" label="Failed" />
      <StatusDot tone="info" label="In transit" />
      <StatusDot tone="primary" label="Processing" />
      <StatusDot tone="neutral" label="Draft" />
    </div>
  ),
};
