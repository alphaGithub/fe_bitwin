import { render, screen } from "@testing-library/react";
import { Flex } from "./flex";

describe("Flex", () => {
  it("is a flex row by default", () => {
    render(<Flex>x</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex", "flex-row");
  });
  it("applies wrap, justify and inline", () => {
    render(<Flex inline wrap="wrap" justify="between">x</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("inline-flex", "flex-wrap", "justify-between");
  });
});
