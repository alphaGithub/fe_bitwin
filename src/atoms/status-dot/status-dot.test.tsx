import { render, screen } from "@testing-library/react";
import { StatusDot } from "./status-dot";

describe("StatusDot", () => {
  it("renders a label", () => {
    render(<StatusDot tone="success" label="Online" />);
    expect(screen.getByText("Online")).toBeInTheDocument();
  });
  it("has an accessible name when there's no label", () => {
    render(<StatusDot tone="error" aria-label="Payment failed" />);
    expect(screen.getByRole("img", { name: "Payment failed" })).toBeInTheDocument();
  });
  it("can pulse", () => {
    const { container } = render(<StatusDot pulse />);
    expect(container.querySelector(".animate-ping")).toBeInTheDocument();
  });
});
