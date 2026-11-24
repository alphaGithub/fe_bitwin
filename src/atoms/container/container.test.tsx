import { render, screen } from "@testing-library/react";
import { Container } from "./container";

describe("Container", () => {
  it("centers with a max width", () => {
    render(<Container size="md">x</Container>);
    expect(screen.getByTestId("container")).toHaveClass("mx-auto", "max-w-screen-md");
  });
  it("can drop the gutter", () => {
    render(<Container gutter={false}>x</Container>);
    expect(screen.getByTestId("container")).toHaveClass("px-0");
  });
});
