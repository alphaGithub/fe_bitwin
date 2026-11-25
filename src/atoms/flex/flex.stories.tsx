import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../box";
import { Flex } from "./flex";

const Cell = ({ children }: { children: React.ReactNode }) => (
  <Box padding="sm" background="primary" radius="md" className="text-center text-body-sm text-primary-700">{children}</Box>
);

const meta = {
  title: "Atoms/Layout/Flex",
  component: Flex,
  args: { gap: "sm", wrap: "wrap", className: "w-80" },
  render: (args) => (
    <Flex {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i} padding="sm" background="muted" radius="md" className="text-body-sm">Tag {i + 1}</Box>
      ))}
    </Flex>
  ),
} satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Wrapping: Story = {};
export const Centered: Story = { args: { justify: "center", align: "center" } };

export const Columns: Story = {
  args: { gap: "md", wrap: "wrap", className: "w-[40rem]" },
  render: (args) => (
    <div className="space-y-3">
      <Flex {...args}><Flex.Item colspan={24}><Cell>24</Cell></Flex.Item></Flex>
      <Flex {...args}>
        <Flex.Item colspan={12}><Cell>12</Cell></Flex.Item>
        <Flex.Item colspan={12}><Cell>12</Cell></Flex.Item>
      </Flex>
      <Flex {...args}>
        {[8, 8, 8].map((n, i) => <Flex.Item key={i} colspan={n}><Cell>{n}</Cell></Flex.Item>)}
      </Flex>
      <Flex {...args}>
        {[6, 6, 6, 6].map((n, i) => <Flex.Item key={i} colspan={n}><Cell>{n}</Cell></Flex.Item>)}
      </Flex>
      <Flex {...args}>
        <Flex.Item colspan={16}><Cell>16 — main</Cell></Flex.Item>
        <Flex.Item colspan={8}><Cell>8 — sidebar</Cell></Flex.Item>
      </Flex>
      <Flex {...args}>
        <Flex.Item colspan={8} offset={8}><Cell>8, offset 8</Cell></Flex.Item>
      </Flex>
    </div>
  ),
};

export const GrowAndBasis: Story = {
  args: { gap: "md", align: "center", className: "w-[40rem]" },
  render: (args) => (
    <Flex {...args}>
      <Flex.Item basis={120} shrink={false}><Cell>fixed 120px</Cell></Flex.Item>
      <Flex.Item grow><Cell>grows to fill</Cell></Flex.Item>
      <Flex.Item><Cell>auto</Cell></Flex.Item>
    </Flex>
  ),
};
