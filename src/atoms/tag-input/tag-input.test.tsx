import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TagInput } from "./tag-input";

describe("TagInput", () => {
  it("adds tags with Enter and comma", async () => {
    const onValueChange = vi.fn();
    render(<TagInput aria-label="Skills" onValueChange={onValueChange} />);
    const input = screen.getByRole("textbox", { name: "Skills" });
    await userEvent.type(input, "react{enter}vue,");
    expect(onValueChange).toHaveBeenLastCalledWith(["react", "vue"]);
    expect(screen.getByText("react")).toBeInTheDocument();
  });
  it("removes the last tag on Backspace and via the × button", async () => {
    render(<TagInput aria-label="Skills" defaultValue={["a", "b", "c"]} />);
    await userEvent.type(screen.getByRole("textbox"), "{backspace}");
    expect(screen.queryByText("c")).toBeNull();
    await userEvent.click(screen.getByRole("button", { name: "Remove a" }));
    expect(screen.queryByText("a")).toBeNull();
  });
  it("rejects duplicates and invalid tags", async () => {
    const onReject = vi.fn();
    render(
      <TagInput
        aria-label="Emails"
        defaultValue={["a@x.com"]}
        validate={(t) => t.includes("@") || "not an email"}
        onReject={onReject}
      />
    );
    await userEvent.type(screen.getByRole("textbox"), "A@x.com{enter}nope{enter}");
    expect(onReject).toHaveBeenCalledWith("A@x.com", "duplicate");
    expect(onReject).toHaveBeenCalledWith("nope", "not an email");
  });
  it("respects maxTags", async () => {
    render(<TagInput aria-label="T" defaultValue={["one"]} maxTags={1} />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
  it("splits pasted lists", async () => {
    const onValueChange = vi.fn();
    render(<TagInput aria-label="T" onValueChange={onValueChange} />);
    await userEvent.click(screen.getByRole("textbox"));
    await userEvent.paste("x, y, z");
    expect(onValueChange).toHaveBeenLastCalledWith(["x", "y", "z"]);
  });
});
