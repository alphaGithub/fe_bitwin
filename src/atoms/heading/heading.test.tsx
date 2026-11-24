import { render, screen } from "@testing-library/react";
import { Heading } from "./heading";

describe("Heading", () => {
  it("renders h2 by default", () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("text-h2");
  });
  it("decouples level from visual size", () => {
    render(<Heading level={1} size="h4">Small h1</Heading>);
    const h = screen.getByRole("heading", { level: 1 });
    expect(h).toHaveClass("text-h4");
    expect(h).not.toHaveClass("text-h1");
  });
});
