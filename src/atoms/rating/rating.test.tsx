import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Rating } from "./rating";

describe("Rating", () => {
  it("sets the value on click and toggles off when clicking the same star", async () => {
    const onValueChange = vi.fn();
    render(<Rating onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("button", { name: "4 stars" }));
    expect(onValueChange).toHaveBeenLastCalledWith(4);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "4");
    await userEvent.click(screen.getByRole("button", { name: "4 stars" }));
    expect(onValueChange).toHaveBeenLastCalledWith(0);
  });
  it("supports arrow keys", async () => {
    render(<Rating defaultValue={2} />);
    screen.getByRole("slider").focus();
    await userEvent.keyboard("{ArrowRight}{ArrowRight}");
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "4");
  });
  it("read-only shows an accessible summary", () => {
    render(<Rating value={3.5} readOnly showValue count={128} />);
    expect(screen.getByRole("img", { name: "Rating: 3.5 out of 5" })).toBeInTheDocument();
    expect(screen.getByText("3.5")).toBeInTheDocument();
    expect(screen.getByText("(128)")).toBeInTheDocument();
  });
});
