import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../button";
import { Steps } from "./steps";

const steps = [
  { title: "Cart", description: "3 items" },
  { title: "Address", description: "Where to ship" },
  { title: "Payment", description: "Card or UPI" },
  { title: "Confirm" },
];

const meta = {
  title: "Atoms/Navigation/Steps",
  component: Steps,
  args: { steps, current: 1 },
  decorators: [(Story) => <div className="w-[40rem]"><Story /></div>],
} satisfies Meta<typeof Steps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};
export const Vertical: Story = { args: { orientation: "vertical" } };
export const Small: Story = { args: { size: "sm" } };
export const WithError: Story = { args: { current: 2, steps: steps.map((s, i) => (i === 2 ? { ...s, status: "error" as const, description: "Payment failed" } : s)) } };
function InteractiveSteps(args: React.ComponentProps<typeof Steps>) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-6">
      <Steps {...args} current={current} onStepClick={setCurrent} />
      <div className="flex justify-between">
        <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>Back</Button>
        <Button disabled={current === steps.length - 1} onClick={() => setCurrent((c) => c + 1)}>Next</Button>
      </div>
    </div>
  );
}

export const Interactive: Story = { render: (args) => <InteractiveSteps {...args} /> };
