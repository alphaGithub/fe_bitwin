import type { Meta, StoryObj } from "@storybook/react";
import { Bell, ShoppingCart } from "lucide-react";
import { Button } from "../button";
import { CountBadge } from "./count-badge";

const meta = { title: "Atoms/Display/CountBadge", component: CountBadge, args: { count: 5 } } satisfies Meta<typeof CountBadge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Overflow: Story = { args: { count: 120 } };
export const Tones: Story = {
  render: () => (
    <div className="flex gap-2">
      {(["primary", "error", "success", "warning", "neutral", "dark"] as const).map((tone) => (
        <CountBadge key={tone} tone={tone} count={8} />
      ))}
    </div>
  ),
};
export const OnIcon: Story = {
  render: () => (
    <div className="flex gap-6">
      <CountBadge count={3} label="notifications">
        <Button variant="ghost" size="icon" aria-label="Notifications"><Bell className="h-5 w-5" aria-hidden="true" /></Button>
      </CountBadge>
      <CountBadge count={12} tone="primary" label="items in cart">
        <Button variant="ghost" size="icon" aria-label="Cart"><ShoppingCart className="h-5 w-5" aria-hidden="true" /></Button>
      </CountBadge>
      <CountBadge dot label="New updates">
        <Button variant="ghost" size="icon" aria-label="Updates"><Bell className="h-5 w-5" aria-hidden="true" /></Button>
      </CountBadge>
    </div>
  ),
};
