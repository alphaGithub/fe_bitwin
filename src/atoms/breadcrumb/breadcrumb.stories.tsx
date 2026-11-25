import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "lucide-react";
import { Breadcrumb } from "./breadcrumb";

const meta = {
  title: "Atoms/Navigation/Breadcrumb",
  component: Breadcrumb,
  args: {
    items: [
      { label: "Home", href: "#", icon: <Home className="h-3.5 w-3.5" aria-hidden="true" /> },
      { label: "Catalog", href: "#" },
      { label: "Shoes", href: "#" },
      { label: "Running", href: "#" },
      { label: "Air Zoom Pegasus" },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Collapsed: Story = { args: { maxItems: 3 } };
export const SlashSeparator: Story = { args: { separator: <span className="text-foreground-muted">/</span> } };
export const Small: Story = { args: { size: "sm" } };
