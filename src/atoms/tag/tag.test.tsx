import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tag } from "./tag";

describe("Tag", () => {
  it("renders text", () => {
    render(<Tag>React</Tag>);
    expect(screen.getByTestId("tag-React")).toHaveTextContent("React");
  });
  it("calls onRemove from an accessible button", async () => {
    const onRemove = vi.fn();
    render(<Tag onRemove={onRemove}>React</Tag>);
    await userEvent.click(screen.getByRole("button", { name: "Remove React" }));
    expect(onRemove).toHaveBeenCalled();
  });
  it("has no remove button by default", () => {
    render(<Tag>Static</Tag>);
    expect(screen.queryByRole("button")).toBeNull();
  });
});
