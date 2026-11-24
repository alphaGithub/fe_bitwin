import { render, screen } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  it("exposes value to assistive tech", () => {
    render(<Progress value={40} label="Upload" showValue />);
    const bar = screen.getByRole("progressbar", { name: "Upload" });
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(screen.getByText("40%")).toBeInTheDocument();
  });
  it("clamps out-of-range values", () => {
    render(<Progress value={150} showValue />);
    expect(screen.getByText("100%")).toBeInTheDocument();
  });
  it("is indeterminate without a value", () => {
    render(<Progress aria-label="Loading" />);
    expect(screen.getByRole("progressbar")).not.toHaveAttribute("aria-valuenow");
  });
});
