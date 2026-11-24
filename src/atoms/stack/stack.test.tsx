import { render, screen } from "@testing-library/react";
import { Stack } from "./stack";

describe("Stack", () => {
  it("is a vertical flex column with md gap by default", () => {
    render(<Stack>x</Stack>);
    expect(screen.getByTestId("stack-vertical")).toHaveClass("flex", "flex-col", "gap-4");
  });
  it("supports horizontal direction and alignment", () => {
    render(<Stack direction="horizontal" align="center" gap="sm">x</Stack>);
    expect(screen.getByTestId("stack-horizontal")).toHaveClass("flex-row", "items-center", "gap-2");
  });
});
