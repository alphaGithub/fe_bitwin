import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../button";
import { Alert } from "./alert";

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  args: { title: "Heads up", children: "Your trial ends in 3 days. Upgrade to keep your data." },
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};
export const Success: Story = { args: { tone: "success", title: "Saved", children: "Your changes have been saved." } };
export const Warning: Story = { args: { tone: "warning", title: "Check your details" } };
export const Error: Story = { args: { tone: "error", title: "Payment failed", children: "Your card was declined." } };
export const Neutral: Story = { args: { tone: "neutral" } };
export const Dismissible: Story = { args: { onDismiss: fn() } };
export const WithActions: Story = {
  args: {
    actions: (
      <>
        <Button size="sm">Upgrade</Button>
        <Button size="sm" variant="ghost">Later</Button>
      </>
    ),
  },
};
