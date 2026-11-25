import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberInput } from "./number-input";

describe("NumberInput", () => {
  it("steps with buttons and respects min/max", async () => {
    const onValueChange = vi.fn();
    render(<NumberInput aria-label="Qty" defaultValue={1} min={0} max={2} onValueChange={onValueChange} />);
    const input = screen.getByRole("spinbutton", { name: "Qty" });
    await userEvent.click(screen.getByRole("button", { name: "Increase" }));
    expect(input).toHaveValue("2");
    expect(screen.getByRole("button", { name: "Increase" })).toBeDisabled();
    await userEvent.click(screen.getByRole("button", { name: "Decrease" }));
    await userEvent.click(screen.getByRole("button", { name: "Decrease" }));
    expect(input).toHaveValue("0");
    expect(onValueChange).toHaveBeenLastCalledWith(0);
  });
  it("supports arrow keys", async () => {
    render(<NumberInput aria-label="Qty" defaultValue={5} step={5} />);
    const input = screen.getByRole("spinbutton");
    input.focus();
    await userEvent.keyboard("{ArrowUp}");
    expect(input).toHaveValue("10");
  });
  it("clamps typed values on blur and ignores letters", async () => {
    render(<NumberInput aria-label="Qty" max={100} />);
    const input = screen.getByRole("spinbutton");
    await userEvent.type(input, "5a00");
    expect(input).toHaveValue("500");
    await userEvent.tab();
    expect(input).toHaveValue("100");
  });
  it("rounds to step precision", async () => {
    render(<NumberInput aria-label="Price" step={0.5} />);
    const input = screen.getByRole("spinbutton");
    await userEvent.type(input, "1.26");
    await userEvent.tab();
    expect(input).toHaveValue("1.3");
  });
  it("empties to null", async () => {
    const onValueChange = vi.fn();
    render(<NumberInput aria-label="Qty" defaultValue={3} onValueChange={onValueChange} />);
    await userEvent.clear(screen.getByRole("spinbutton"));
    await userEvent.tab();
    expect(onValueChange).toHaveBeenLastCalledWith(null);
  });
});
