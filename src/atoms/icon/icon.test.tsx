import { render, screen } from "@testing-library/react";
import { Search } from "lucide-react";
import { Icon } from "./icon";

describe("Icon", () => {
  it("is decorative (aria-hidden) without a label", () => {
    render(<Icon icon={Search} />);
    expect(screen.getByTestId("icon")).toHaveAttribute("aria-hidden", "true");
  });
  it("is exposed as an image with a label", () => {
    render(<Icon icon={Search} label="Search" />);
    expect(screen.getByRole("img", { name: "Search" })).toBeInTheDocument();
  });
  it("applies size classes", () => {
    render(<Icon icon={Search} size="lg" />);
    expect(screen.getByTestId("icon")).toHaveClass("h-6", "w-6");
  });
});
