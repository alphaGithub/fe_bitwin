import type { Meta, StoryObj } from "@storybook/react";
import { CreditCard, RotateCcw, Truck } from "lucide-react";
import { Badge } from "../badge";
import { Accordion } from "./accordion";

const meta = {
  title: "Atoms/Navigation/Accordion",
  component: Accordion,
  args: { type: "single", collapsible: true, defaultValue: "shipping" },
  render: (args) => (
    <Accordion {...args} className="w-[32rem]">
      <Accordion.Item value="shipping">
        <Accordion.Trigger icon={<Truck className="h-5 w-5 text-foreground-muted" aria-hidden="true" />} description="Delivery times and charges">
          Shipping
        </Accordion.Trigger>
        <Accordion.Content>Orders ship within 2 business days. Free shipping above ₹999.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="returns">
        <Accordion.Trigger icon={<RotateCcw className="h-5 w-5 text-foreground-muted" aria-hidden="true" />} extra={<Badge tone="success">New</Badge>}>
          Returns
        </Accordion.Trigger>
        <Accordion.Content>Return any item within 30 days for a full refund.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="payment">
        <Accordion.Trigger icon={<CreditCard className="h-5 w-5 text-foreground-muted" aria-hidden="true" />}>Payment</Accordion.Trigger>
        <Accordion.Content>We accept cards, UPI and net banking.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Bordered: Story = {};
export const Separated: Story = { args: { variant: "separated" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const IconLeft: Story = { args: { iconPosition: "left" } };
export const Multiple: Story = { args: { type: "multiple", defaultValue: ["shipping", "returns"] } as never };
