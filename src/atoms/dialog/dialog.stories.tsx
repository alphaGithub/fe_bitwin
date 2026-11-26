import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Dialog } from "./dialog";

const footer = (
  <>
    <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
    <Button>Save changes</Button>
  </>
);

const meta = {
  title: "Atoms/Overlays/Dialog",
  component: Dialog,
  args: {
    trigger: <Button>Open dialog</Button>,
    title: "Edit profile",
    description: "Make changes to your profile. Click save when you're done.",
    footer,
    children: (
      <div className="space-y-4">
        <div className="space-y-1.5"><Label htmlFor="d-name">Name</Label><Input id="d-name" defaultValue="Amit" /></div>
        <div className="space-y-1.5"><Label htmlFor="d-email">Email</Label><Input id="d-email" type="email" defaultValue="amit@example.com" /></div>
      </div>
    ),
  },
  argTypes: { trigger: { control: false }, footer: { control: false }, children: { control: false } },
} satisfies Meta<typeof Dialog>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = {
  args: {
    size: "sm",
    title: "Delete product?",
    description: "This action can't be undone.",
    children: undefined,
    trigger: <Button variant="danger">Delete</Button>,
    footer: (
      <>
        <Dialog.Close asChild><Button variant="ghost">Cancel</Button></Dialog.Close>
        <Button variant="danger">Delete</Button>
      </>
    ),
  },
};
export const Large: Story = { args: { size: "lg" } };
export const Drawer: Story = { args: { placement: "right", trigger: <Button variant="outline">Open drawer</Button> } };
export const LongContent: Story = {
  args: {
    children: <div className="space-y-3">{Array.from({ length: 30 }, (_, i) => <p key={i}>Paragraph {i + 1} of scrollable content.</p>)}</div>,
  },
};
