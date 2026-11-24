import { render, screen } from "@testing-library/react";
import { Divider } from "./divider";

describe("Divider", () => {
  it("is a horizontal separator by default", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  });
  it("supports vertical orientation", () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveClass("border-l");
  });
  it("renders a centered label", () => {
    render(<Divider label="or" />);
    expect(screen.getByRole("separator")).toHaveTextContent("or");
  });
});
