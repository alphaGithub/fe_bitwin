import { render, screen } from "@testing-library/react";
import { FlexItem } from "../flex";
import { Flexbox } from "./flexbox";

describe("Flexbox (Alfred-compatible)", () => {
  it("wraps by default like rsuite FlexboxGrid", () => {
    render(<Flexbox>x</Flexbox>);
    expect(screen.getByTestId("flexbox")).toHaveClass("flex", "flex-row", "flex-wrap", "justify-start");
  });
  it("maps Alfred prop values", () => {
    render(<Flexbox justify="space-between" align="middle" gutter="md" mt="sm" nowrap>x</Flexbox>);
    expect(screen.getByTestId("flexbox")).toHaveClass(
      "justify-between",
      "items-center",
      "gap-3",
      "[--flex-gap:12px]",
      "mt-2",
      "flex-nowrap"
    );
  });
  it("Flexbox.Item is Flex.Item (colspan out of 24)", () => {
    expect(Flexbox.Item).toBe(FlexItem);
    render(
      <Flexbox gutter="sm">
        <Flexbox.Item colspan={8}>third</Flexbox.Item>
      </Flexbox>
    );
    expect(screen.getByTestId("flex-item-8").style.maxWidth).toContain("33.3333%");
  });
});
