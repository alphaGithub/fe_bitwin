import type { Meta, StoryObj } from "@storybook/react";
import { Flexbox } from "./flexbox";

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md bg-primary-50 p-2 text-center text-body-sm text-primary-700">{children}</div>
);

const meta = {
  title: "Atoms/Layout/Flexbox (Alfred compat)",
  component: Flexbox,
  args: { justify: "space-between", align: "middle", gutter: "sm", className: "w-[36rem]" },
  argTypes: {
    justify: { control: "select", options: ["start", "center", "end", "space-between", "space-around"] },
    align: { control: "select", options: ["top", "middle", "bottom", "stretch"] },
    gutter: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
  },
  render: (args) => (
    <Flexbox {...args}>
      <Flexbox.Item colspan={12}><Cell>colspan 12</Cell></Flexbox.Item>
      <Flexbox.Item colspan={6}><Cell>colspan 6</Cell></Flexbox.Item>
      <Flexbox.Item colspan={6}><Cell>colspan 6</Cell></Flexbox.Item>
    </Flexbox>
  ),
} satisfies Meta<typeof Flexbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Column: Story = { args: { direction: "column", align: "stretch" } };
