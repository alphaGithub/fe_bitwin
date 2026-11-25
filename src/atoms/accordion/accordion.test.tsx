import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./accordion";

function Example(props: { type?: "single" | "multiple" }) {
  const items = (
    <>
      <Accordion.Item value="a">
        <Accordion.Trigger>First</Accordion.Trigger>
        <Accordion.Content>First body</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="b">
        <Accordion.Trigger>Second</Accordion.Trigger>
        <Accordion.Content>Second body</Accordion.Content>
      </Accordion.Item>
    </>
  );
  return props.type === "multiple" ? (
    <Accordion type="multiple">{items}</Accordion>
  ) : (
    <Accordion type="single" collapsible>{items}</Accordion>
  );
}

describe("Accordion", () => {
  it("opens and closes an item", async () => {
    render(<Example />);
    const trigger = screen.getByRole("button", { name: "First" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("First body")).toBeVisible();
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
  it("single mode closes the other item", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("button", { name: "First" }));
    await userEvent.click(screen.getByRole("button", { name: "Second" }));
    expect(screen.getByRole("button", { name: "First" })).toHaveAttribute("aria-expanded", "false");
  });
  it("multiple mode keeps both open", async () => {
    render(<Example type="multiple" />);
    await userEvent.click(screen.getByRole("button", { name: "First" }));
    await userEvent.click(screen.getByRole("button", { name: "Second" }));
    expect(screen.getByRole("button", { name: "First" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Second" })).toHaveAttribute("aria-expanded", "true");
  });
});
