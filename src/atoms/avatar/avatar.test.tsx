import { fireEvent, render, screen } from "@testing-library/react";
import { Avatar, getInitials } from "./avatar";

describe("getInitials", () => {
  it.each([
    ["Amit Kumar Shah", "AS"],
    ["amit", "A"],
    ["  ", "?"],
    [undefined, "?"],
  ])("%s → %s", (input, expected) => {
    expect(getInitials(input)).toBe(expected);
  });
});

describe("Avatar", () => {
  it("shows initials without an image", () => {
    render(<Avatar name="Jane Doe" />);
    expect(screen.getByRole("img", { name: "Jane Doe" })).toHaveTextContent("JD");
  });
  it("falls back to initials when the image fails", () => {
    const { container } = render(<Avatar name="Jane Doe" src="/broken.png" />);
    const img = container.querySelector("img")!;
    fireEvent.error(img);
    expect(container.querySelector("img")).toBeNull();
    expect(screen.getByRole("img")).toHaveTextContent("JD");
  });
});
