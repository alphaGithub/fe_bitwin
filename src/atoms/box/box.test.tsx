import { render, screen } from "@testing-library/react";
import { Box } from "./box";

describe("Box", () => {
  it("renders a div with token classes", () => {
    render(<Box padding="md" background="surface" border radius="lg">x</Box>);
    expect(screen.getByTestId("box")).toHaveClass("p-4", "bg-surface", "border", "rounded-lg");
  });
  it("renders a custom element", () => {
    render(<Box as="section">x</Box>);
    expect(screen.getByTestId("box").tagName).toBe("SECTION");
  });
});
