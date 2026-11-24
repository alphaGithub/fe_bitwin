import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const meta = { title: "Atoms/Link", component: Link, args: { href: "#", children: "View details" } } satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Neutral: Story = { args: { tone: "neutral" } };
export const Muted: Story = { args: { tone: "muted" } };
export const AlwaysUnderlined: Story = { args: { underline: "always" } };
export const External: Story = { args: { href: "https://example.com", external: true, children: "Documentation" } };
export const InText: Story = {
  render: (args) => (
    <p className="max-w-sm text-body-sm text-foreground">
      By continuing you agree to our <Link {...args} underline="always">Terms of Service</Link> and{" "}
      <Link {...args} underline="always">Privacy Policy</Link>.
    </p>
  ),
};
