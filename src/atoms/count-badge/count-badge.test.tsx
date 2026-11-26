import { render, screen } from "@testing-library/react";
import { CountBadge } from "./count-badge";

describe("CountBadge", () => {
  it("caps at max", () => {
    render(<CountBadge count={150} />);
    expect(screen.getByTestId("count-badge")).toHaveTextContent("99+");
  });
  it("hides at zero unless showZero", () => {
    const { rerender } = render(<CountBadge count={0} />);
    expect(screen.queryByTestId("count-badge")).toBeNull();
    rerender(<CountBadge count={0} showZero />);
    expect(screen.getByTestId("count-badge")).toBeInTheDocument();
  });
  it("pins to children with screen-reader text", () => {
    render(
      <CountBadge count={3} label="unread messages">
        <button type="button">Inbox</button>
      </CountBadge>
    );
    expect(screen.getByTestId("count-badge")).toHaveClass("absolute");
    expect(screen.getByText("3 unread messages")).toHaveClass("sr-only");
  });
});
