import { render, screen } from "@testing-library/react";
import { Flex, FlexItem } from "./flex";

describe("Flex", () => {
  it("is a flex row by default", () => {
    render(<Flex>x</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex", "flex-row");
  });
  it("applies wrap, justify and inline", () => {
    render(<Flex inline wrap="wrap" justify="between">x</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("inline-flex", "flex-wrap", "justify-between");
  });
  it("exposes the gap as a CSS variable for items", () => {
    render(<Flex gap="md">x</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("gap-4", "[--flex-gap:1rem]");
  });
});

describe("Flex.Item", () => {
  it("is available as Flex.Item and FlexItem", () => {
    expect(Flex.Item).toBe(FlexItem);
  });
  it("sizes by colspan out of 24, subtracting its share of the gap", () => {
    render(
      <Flex gap="md">
        <Flex.Item colspan={12}>half</Flex.Item>
      </Flex>
    );
    const item = screen.getByTestId("flex-item-12");
    expect(item.style.flex).toContain("calc(50% - var(--flex-gap, 0px) * 0.5)");
    expect(item.style.maxWidth).toBe("calc(50% - var(--flex-gap, 0px) * 0.5)");
  });
  it("full width has no gap share", () => {
    render(<Flex.Item colspan={24}>full</Flex.Item>);
    expect(screen.getByTestId("flex-item-24").style.maxWidth).toBe("calc(100% - var(--flex-gap, 0px) * 0)");
  });
  it("supports grow, shrink, basis and order", () => {
    render(<Flex.Item grow shrink={false} basis={200} order={2}>x</Flex.Item>);
    const item = screen.getByTestId("flex-item");
    expect(item.style.flexGrow).toBe("1");
    expect(item.style.flexShrink).toBe("0");
    expect(item.style.flexBasis).toBe("200px");
    expect(item.style.order).toBe("2");
  });
});
