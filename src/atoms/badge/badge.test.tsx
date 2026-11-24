import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders text with tone-based test id", () => {
    render(<Badge tone="success">Active</Badge>);
    expect(screen.getByTestId("badge-success")).toHaveTextContent("Active");
  });
  it("applies compound tone + appearance classes", () => {
    render(<Badge tone="error" appearance="solid">Failed</Badge>);
    expect(screen.getByText("Failed")).toHaveClass("bg-error-600", "text-white");
  });
  it("renders a dot", () => {
    const { container } = render(<Badge dot>Live</Badge>);
    expect(container.querySelector("[aria-hidden='true']")).toBeInTheDocument();
  });
});
