import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Chip, ChipGroup } from "./chip";

const options = [
  { value: "s", label: "Small" },
  { value: "m", label: "Medium" },
  { value: "l", label: "Large", disabled: true },
];

describe("Chip", () => {
  it("toggles aria-pressed", async () => {
    const onSelectedChange = vi.fn();
    render(<Chip onSelectedChange={onSelectedChange}>In stock</Chip>);
    const chip = screen.getByRole("button", { name: "In stock" });
    expect(chip).toHaveAttribute("aria-pressed", "false");
    await userEvent.click(chip);
    expect(chip).toHaveAttribute("aria-pressed", "true");
    expect(onSelectedChange).toHaveBeenCalledWith(true);
  });
});

describe("ChipGroup", () => {
  it("multiple: selects several and respects max", async () => {
    const onValueChange = vi.fn();
    render(<ChipGroup aria-label="Sizes" options={options} max={1} onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("button", { name: "Small" }));
    expect(onValueChange).toHaveBeenLastCalledWith(["s"]);
    expect(screen.getByRole("button", { name: "Medium" })).toBeDisabled();
    await userEvent.click(screen.getByRole("button", { name: "Small" }));
    expect(onValueChange).toHaveBeenLastCalledWith([]);
  });
  it("single: behaves like a radio group with arrow keys", async () => {
    const onValueChange = vi.fn();
    render(<ChipGroup type="single" aria-label="Size" options={options} defaultValue="s" onValueChange={onValueChange} />);
    expect(screen.getByRole("radiogroup", { name: "Size" })).toBeInTheDocument();
    const small = screen.getByRole("radio", { name: "Small" });
    expect(small).toHaveAttribute("aria-checked", "true");
    small.focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onValueChange).toHaveBeenLastCalledWith("m");
    expect(screen.getByRole("radio", { name: "Medium" })).toHaveFocus();
    // wraps past the disabled "Large"
    await userEvent.keyboard("{ArrowRight}");
    expect(onValueChange).toHaveBeenLastCalledWith("s");
  });
  it("single: clicking the selected chip keeps it unless deselectable", async () => {
    const onValueChange = vi.fn();
    const { rerender } = render(<ChipGroup type="single" aria-label="S" options={options} defaultValue="s" onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Small" }));
    expect(onValueChange).not.toHaveBeenCalled();
    rerender(<ChipGroup type="single" aria-label="S" options={options} value="s" deselectable onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("radio", { name: "Small" }));
    expect(onValueChange).toHaveBeenCalledWith(null);
  });
});
