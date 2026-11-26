import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CopyButton } from "./copy-button";

describe("CopyButton", () => {
  it("copies text and shows the copied state, then resets", async () => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const onCopy = vi.fn();
    render(<CopyButton text="ORDER-123" label="Copy ID" onCopy={onCopy} resetAfter={1000} />);

    await user.click(screen.getByRole("button", { name: "Copy ID" }));
    expect(onCopy).toHaveBeenCalledWith("ORDER-123");
    await expect(navigator.clipboard.readText()).resolves.toBe("ORDER-123");
    expect(screen.getByRole("button", { name: "Copied!" })).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1100));
    expect(screen.getByRole("button", { name: "Copy ID" })).toBeInTheDocument();
    vi.useRealTimers();
  });
  it("icon-only button has an accessible name", () => {
    render(<CopyButton text="x" />);
    expect(screen.getByRole("button", { name: "Copy to clipboard" })).toBeInTheDocument();
  });
});
