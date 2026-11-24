import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";

const meta = {
  title: "Atoms/Layout/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div className="bg-surface-muted py-6">
      <Container {...args}>
        <div className="rounded-md bg-background p-4 text-body-sm shadow-sm">Content is centered and capped at the container width.</div>
      </Container>
    </div>
  ),
} satisfies Meta<typeof Container>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ExtraLarge: Story = {};
export const Medium: Story = { args: { size: "md" } };
export const Small: Story = { args: { size: "sm" } };
