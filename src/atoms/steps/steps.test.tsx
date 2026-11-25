import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Steps } from "./steps";

const steps = [{ title: "Cart" }, { title: "Address" }, { title: "Payment" }, { title: "Done" }];

describe("Steps", () => {
  it("derives status from current", () => {
    render(<Steps steps={steps} current={2} />);
    expect(screen.getByTestId("step-0")).toHaveAttribute("data-status", "complete");
    expect(screen.getByTestId("step-2")).toHaveAttribute("data-status", "current");
    expect(screen.getByTestId("step-2")).toHaveAttribute("aria-current", "step");
    expect(screen.getByTestId("step-3")).toHaveAttribute("data-status", "upcoming");
  });
  it("lets users click back to completed steps only", async () => {
    const onStepClick = vi.fn();
    render(<Steps steps={steps} current={1} onStepClick={onStepClick} />);
    await userEvent.click(screen.getByRole("button", { name: /Cart/ }));
    expect(onStepClick).toHaveBeenCalledWith(0);
    expect(screen.queryByRole("button", { name: /Payment/ })).toBeNull();
  });
  it("supports an explicit error status", () => {
    render(<Steps steps={[{ title: "A" }, { title: "B", status: "error" }]} current={1} />);
    expect(screen.getByTestId("step-1")).toHaveAttribute("data-status", "error");
  });
});
