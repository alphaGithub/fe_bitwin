import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./input";

describe("Input", () => {
  it("accepts typing", async () => {
    render(<Input aria-label="Name" />);
    const input = screen.getByRole("textbox", { name: "Name" });
    await userEvent.type(input, "Amit");
    expect(input).toHaveValue("Amit");
  });
  it("marks invalid state for assistive tech", () => {
    render(<Input aria-label="Email" invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });
  it("renders adornments and forwards ref to the input", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} aria-label="Search" leftElement={<span>🔍</span>} />);
    expect(screen.getByText("🔍")).toBeInTheDocument();
    expect(ref.current).toBe(screen.getByRole("textbox"));
  });
  it("is disabled", () => {
    render(<Input aria-label="X" disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });
});
