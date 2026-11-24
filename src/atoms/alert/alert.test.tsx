import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./alert";

describe("Alert", () => {
  it("uses role=status for info and role=alert for errors", () => {
    const { rerender } = render(<Alert title="FYI">Body</Alert>);
    expect(screen.getByRole("status")).toHaveTextContent("FYI");
    rerender(<Alert tone="error" title="Oops" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Oops");
  });
  it("calls onDismiss", async () => {
    const onDismiss = vi.fn();
    render(<Alert onDismiss={onDismiss}>Hi</Alert>);
    await userEvent.click(screen.getByRole("button", { name: "Dismiss" }));
    expect(onDismiss).toHaveBeenCalled();
  });
  it("can hide the icon", () => {
    const { container } = render(<Alert icon={false}>No icon</Alert>);
    expect(container.querySelector("svg")).toBeNull();
  });
});
