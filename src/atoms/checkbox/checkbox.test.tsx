import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("toggles when the label is clicked", async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Accept terms" onChange={onChange} />);
    const box = screen.getByRole("checkbox", { name: "Accept terms" });
    await userEvent.click(screen.getByText("Accept terms"));
    expect(box).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it("sets the DOM indeterminate state", () => {
    render(<Checkbox aria-label="All" indeterminate />);
    expect((screen.getByRole("checkbox") as HTMLInputElement).indeterminate).toBe(true);
  });
  it("links the description", () => {
    render(<Checkbox id="news" label="Newsletter" description="Weekly email" />);
    expect(screen.getByRole("checkbox")).toHaveAccessibleDescription("Weekly email");
  });
  it("does not toggle when disabled", async () => {
    render(<Checkbox label="Off" disabled />);
    await userEvent.click(screen.getByText("Off"));
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
