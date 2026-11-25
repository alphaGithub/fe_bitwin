import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OTPInput } from "./otp-input";

const cells = () => screen.getAllByRole("textbox");

describe("OTPInput", () => {
  it("auto-advances and fires onComplete", async () => {
    const onComplete = vi.fn();
    render(<OTPInput length={4} onComplete={onComplete} />);
    await userEvent.click(cells()[0]);
    await userEvent.keyboard("1234");
    expect(cells().map((c) => (c as HTMLInputElement).value)).toEqual(["1", "2", "3", "4"]);
    expect(onComplete).toHaveBeenCalledWith("1234");
  });
  it("rejects letters in numeric mode", async () => {
    render(<OTPInput length={4} />);
    await userEvent.click(cells()[0]);
    await userEvent.keyboard("a");
    expect(cells()[0]).toHaveValue("");
  });
  it("backspace on an empty cell clears and moves to the previous one", async () => {
    render(<OTPInput length={4} defaultValue="12" />);
    await userEvent.click(cells()[2]);
    await userEvent.keyboard("{Backspace}");
    expect(cells()[1]).toHaveValue("");
    expect(cells()[1]).toHaveFocus();
  });
  it("fills from paste", async () => {
    const onValueChange = vi.fn();
    render(<OTPInput length={6} onValueChange={onValueChange} />);
    await userEvent.click(cells()[0]);
    await userEvent.paste("12 34 56");
    expect(onValueChange).toHaveBeenLastCalledWith("123456");
  });
});
