import type { Meta, StoryObj } from "@storybook/react";
import { Package, RotateCcw, Truck } from "lucide-react";
import { Tabs } from "./tabs";

const meta = {
  title: "Atoms/Navigation/Tabs",
  component: Tabs,
  args: { defaultValue: "orders" },
  argTypes: {
    variant: { control: "select", options: ["underline", "pill", "enclosed"] },
    orientation: { control: "select", options: ["horizontal", "vertical"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
  render: (args) => (
    <Tabs {...args} className="w-[36rem]">
      <Tabs.List aria-label="Order sections">
        <Tabs.Trigger value="orders" icon={<Package className="h-4 w-4" aria-hidden="true" />} count={12}>Orders</Tabs.Trigger>
        <Tabs.Trigger value="shipping" icon={<Truck className="h-4 w-4" aria-hidden="true" />}>Shipping</Tabs.Trigger>
        <Tabs.Trigger value="returns" icon={<RotateCcw className="h-4 w-4" aria-hidden="true" />} count={2}>Returns</Tabs.Trigger>
        <Tabs.Trigger value="archived" disabled>Archived</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="orders" className="text-body-sm">12 open orders.</Tabs.Content>
      <Tabs.Content value="shipping" className="text-body-sm">Shipping settings.</Tabs.Content>
      <Tabs.Content value="returns" className="text-body-sm">2 return requests.</Tabs.Content>
    </Tabs>
  ),
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Underline: Story = {};
export const Pill: Story = { args: { variant: "pill" } };
export const Enclosed: Story = { args: { variant: "enclosed" } };
export const Vertical: Story = { args: { orientation: "vertical" } };
export const Small: Story = { args: { size: "sm", variant: "enclosed" } };
