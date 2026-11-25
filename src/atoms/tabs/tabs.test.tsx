import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./tabs";

function Example(props: Partial<React.ComponentProps<typeof Tabs>>) {
  return (
    <Tabs defaultValue="a" {...props}>
      <Tabs.List aria-label="Sections">
        <Tabs.Trigger value="a" count={3}>Alpha</Tabs.Trigger>
        <Tabs.Trigger value="b">Beta</Tabs.Trigger>
        <Tabs.Trigger value="c" disabled>Gamma</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="a">Alpha panel</Tabs.Content>
      <Tabs.Content value="b">Beta panel</Tabs.Content>
      <Tabs.Content value="c">Gamma panel</Tabs.Content>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("shows the default panel and switches on click", async () => {
    render(<Example />);
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Alpha panel");
    await userEvent.click(screen.getByRole("tab", { name: "Beta" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Beta panel");
  });
  it("moves with arrow keys and skips disabled tabs", async () => {
    render(<Example />);
    await userEvent.click(screen.getByRole("tab", { name: /Alpha/ }));
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Beta" })).toHaveFocus();
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: /Alpha/ })).toHaveFocus();
  });
  it("supports vertical orientation", () => {
    render(<Example orientation="vertical" />);
    expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
  });
  it("calls onValueChange", async () => {
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("tab", { name: "Beta" }));
    expect(onValueChange).toHaveBeenCalledWith("b");
  });
});
