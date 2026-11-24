import { render, screen } from "@testing-library/react";
import { Text } from "./text";

describe("Text", () => {
  it("renders a paragraph by default", () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText("Hello").tagName).toBe("P");
  });
  it("renders the element given by `as`", () => {
    render(<Text as="span">Hi</Text>);
    expect(screen.getByText("Hi").tagName).toBe("SPAN");
  });
  it("applies tone and size classes", () => {
    render(<Text tone="muted" size="sm">Muted</Text>);
    expect(screen.getByText("Muted")).toHaveClass("text-foreground-muted", "text-body-sm");
  });
});
