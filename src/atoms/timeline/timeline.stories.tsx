import type { Meta, StoryObj } from "@storybook/react";
import { Check, Package, ShoppingBag, Truck } from "lucide-react";
import { Timeline } from "./timeline";

const meta = {
  title: "Atoms/Display/Timeline",
  component: Timeline,
  args: {
    items: [
      { title: "Order placed", time: "12 Nov, 10:02 AM", description: "Paid ₹2,499 via UPI", icon: <ShoppingBag aria-hidden="true" />, tone: "success" },
      { title: "Packed", time: "12 Nov, 4:15 PM", icon: <Package aria-hidden="true" />, tone: "success" },
      { title: "Shipped", time: "13 Nov, 9:00 AM", description: "Delhivery • AWB 123456789", icon: <Truck aria-hidden="true" />, tone: "primary" },
      { title: "Delivered", time: "Expected 15 Nov", icon: <Check aria-hidden="true" />, tone: "neutral" },
    ],
    pending: true,
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Timeline>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcons: Story = {};
export const Dots: Story = {
  args: {
    pending: false,
    items: [
      { title: "Ticket created", time: "2h ago" },
      { title: "Assigned to Priya", time: "1h ago", tone: "neutral" },
      { title: "Escalated", time: "20m ago", tone: "error", description: "SLA breach risk" },
    ],
  },
};
export const TimeOnLeft: Story = { args: { timePosition: "left" }, decorators: [(Story) => <div className="w-[30rem]"><Story /></div>] };
