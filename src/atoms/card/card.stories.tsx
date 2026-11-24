import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../badge";
import { Button } from "../button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  render: (args) => (
    <Card {...args} className="w-96">
      <CardHeader
        title="Team plan"
        description="Billed monthly"
        action={<Badge tone="success" dot>Active</Badge>}
      />
      <CardContent>Up to 10 members, unlimited projects and priority support.</CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Upgrade</Button>
      </CardFooter>
    </Card>
  ),
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {};
export const Elevated: Story = { args: { variant: "elevated" } };
export const Filled: Story = { args: { variant: "filled" } };
export const Interactive: Story = { args: { interactive: true, tabIndex: 0 } };
