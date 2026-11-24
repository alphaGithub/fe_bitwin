import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const tones = ["neutral", "primary", "success", "warning", "error", "info"] as const;

const meta = { title: "Atoms/Badge", component: Badge, args: { children: "Badge" } } satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const AllTones: Story = {
  render: (args) => (
    <div className="space-y-3">
      {(["soft", "solid", "outline"] as const).map((appearance) => (
        <div key={appearance} className="flex gap-2">
          {tones.map((tone) => (
            <Badge key={tone} {...args} tone={tone} appearance={appearance}>{tone}</Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};
export const WithDot: Story = { args: { dot: true, tone: "success", children: "Online" } };
export const Medium: Story = { args: { size: "md" } };
