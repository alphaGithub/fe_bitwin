import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Breadcrumb } from "./breadcrumb";

const items = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Shoes", href: "/catalog/shoes" },
  { label: "Running", href: "/catalog/shoes/running" },
  { label: "Air Zoom" },
];

describe("Breadcrumb", () => {
  it("renders links and marks the last item as current page", () => {
    render(<Breadcrumb items={items.slice(0, 3)} />);
    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Shoes")).toHaveAttribute("aria-current", "page");
  });
  it("collapses the middle and expands on click", async () => {
    render(<Breadcrumb items={items} maxItems={3} />);
    expect(screen.queryByText("Catalog")).toBeNull();
    await userEvent.click(screen.getByRole("button", { name: "Show all breadcrumbs" }));
    expect(screen.getByText("Catalog")).toBeInTheDocument();
  });
  it("supports onClick items without href", async () => {
    const onClick = vi.fn();
    render(<Breadcrumb items={[{ label: "Back", onClick }, { label: "Here" }]} />);
    await userEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(onClick).toHaveBeenCalled();
  });
});
