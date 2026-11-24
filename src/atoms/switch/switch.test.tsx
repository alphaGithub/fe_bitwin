import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./switch";

describe("Switch", () => {
  it("toggles uncontrolled state and reports changes", async () => {
    const onCheckedChange = vi.fn();
    render(<Switch label="Wi-Fi" onCheckedChange={onCheckedChange} />);
    const sw = screen.getByRole("switch", { name: "Wi-Fi" });
    expect(sw).toHaveAttribute("aria-checked", "false");
    await userEvent.click(sw);
    expect(sw).toHaveAttribute("aria-checked", "true");
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
  it("respects controlled value", async () => {
    render(<Switch aria-label="X" checked={false} />);
    await userEvent.click(screen.getByRole("switch"));
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "false");
  });
  it("toggles with the keyboard", async () => {
    render(<Switch aria-label="Kbd" />);
    screen.getByRole("switch").focus();
    await userEvent.keyboard(" ");
    expect(screen.getByRole("switch")).toHaveAttribute("aria-checked", "true");
  });
});
