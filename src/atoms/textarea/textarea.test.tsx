import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("accepts multi-line typing", async () => {
    render(<Textarea aria-label="Notes" />);
    const el = screen.getByRole("textbox", { name: "Notes" });
    await userEvent.type(el, "a{enter}b");
    expect(el).toHaveValue("a\nb");
  });
  it("marks invalid state", () => {
    render(<Textarea aria-label="Notes" invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
});
