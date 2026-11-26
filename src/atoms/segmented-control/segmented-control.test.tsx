import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SegmentedControl } from "./segmented-control";

const options = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];

describe("SegmentedControl", () => {
  it("selects the first option by default and changes on click", async () => {
    const onValueChange = vi.fn();
    render(<SegmentedControl aria-label="Range" options={options} onValueChange={onValueChange} />);
    expect(screen.getByRole("radio", { name: "Day" })).toHaveAttribute("aria-checked", "true");
    await userEvent.click(screen.getByRole("radio", { name: "Month" }));
    expect(onValueChange).toHaveBeenCalledWith("month");
    expect(screen.getByRole("radio", { name: "Month" })).toHaveAttribute("aria-checked", "true");
  });
  it("uses roving focus with arrow keys", async () => {
    render(<SegmentedControl aria-label="Range" options={options} defaultValue="week" />);
    const week = screen.getByRole("radio", { name: "Week" });
    expect(week).toHaveAttribute("tabindex", "0");
    expect(screen.getByRole("radio", { name: "Day" })).toHaveAttribute("tabindex", "-1");
    week.focus();
    await userEvent.keyboard("{ArrowLeft}");
    expect(screen.getByRole("radio", { name: "Day" })).toHaveFocus();
    expect(screen.getByRole("radio", { name: "Day" })).toHaveAttribute("aria-checked", "true");
  });
});
