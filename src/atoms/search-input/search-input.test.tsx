import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from "./search-input";

describe("SearchInput", () => {
  it("calls onSearch on Enter with the typed value", async () => {
    const onSearch = vi.fn();
    render(<SearchInput aria-label="Search" onSearch={onSearch} />);
    await userEvent.type(screen.getByRole("searchbox"), "shoes{enter}");
    expect(onSearch).toHaveBeenCalledWith("shoes");
  });
  it("clears with the × button and Escape", async () => {
    const onClear = vi.fn();
    render(<SearchInput aria-label="Search" defaultValue="abc" onClear={onClear} />);
    const box = screen.getByRole("searchbox");
    await userEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(box).toHaveValue("");
    expect(onClear).toHaveBeenCalled();
    await userEvent.type(box, "x{escape}");
    expect(box).toHaveValue("");
  });
  it("hides the clear button when empty", () => {
    render(<SearchInput aria-label="Search" />);
    expect(screen.queryByRole("button", { name: "Clear search" })).toBeNull();
  });
  it("shows a spinner while loading", () => {
    render(<SearchInput aria-label="Search" defaultValue="a" isLoading />);
    expect(screen.getByRole("status", { name: "Searching" })).toBeInTheDocument();
  });
});
