import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropdownMenu } from "./dropdown-menu";

describe("DropdownMenu", () => {
  it("opens, runs onSelect, and closes", async () => {
    const onEdit = vi.fn();
    render(
      <DropdownMenu
        trigger={<button type="button">Actions</button>}
        items={[
          { label: "Edit", onSelect: onEdit, shortcut: "E" },
          { type: "separator" },
          { label: "Delete", danger: true },
          { label: "Archive", disabled: true },
        ]}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: "Actions" }));
    expect(screen.getByRole("menu")).toBeInTheDocument();
    expect(screen.getByRole("menuitem", { name: "Archive" })).toHaveAttribute("data-disabled");
    await userEvent.click(screen.getByRole("menuitem", { name: /Edit/ }));
    expect(onEdit).toHaveBeenCalled();
    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
  });
  it("supports keyboard navigation", async () => {
    const onSelect = vi.fn();
    render(
      <DropdownMenu
        trigger={<button type="button">Menu</button>}
        items={[{ label: "One" }, { label: "Two", onSelect }]}
      />
    );
    screen.getByRole("button", { name: "Menu" }).focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard("{ArrowDown}{Enter}");
    expect(onSelect).toHaveBeenCalled();
  });
  it("renders checkbox items", async () => {
    const onCheckedChange = vi.fn();
    render(
      <DropdownMenu
        trigger={<button type="button">Columns</button>}
        items={[{ type: "checkbox", label: "Price", checked: true, onCheckedChange }]}
      />
    );
    await userEvent.click(screen.getByRole("button", { name: "Columns" }));
    const item = screen.getByRole("menuitemcheckbox", { name: "Price" });
    expect(item).toHaveAttribute("aria-checked", "true");
    await userEvent.click(item);
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });
});
