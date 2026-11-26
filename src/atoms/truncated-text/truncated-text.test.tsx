import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TruncatedText } from "./truncated-text";

describe("TruncatedText", () => {
  it("cuts by character count and shows the full text in a tooltip", async () => {
    render(<TruncatedText text="Organic cotton crew-neck t-shirt" maxLength={10} />);
    const el = screen.getByTestId("truncated-text");
    expect(el).toHaveTextContent("Organic co…");
    expect(el).toHaveAttribute("data-truncated", "true");
    await userEvent.tab();
    expect(await screen.findByRole("tooltip")).toHaveTextContent("Organic cotton crew-neck t-shirt");
  });
  it("leaves short text alone with no tooltip", () => {
    render(<TruncatedText text="Short" maxLength={10} />);
    const el = screen.getByTestId("truncated-text");
    expect(el).toHaveTextContent("Short");
    expect(el).not.toHaveAttribute("data-truncated");
    expect(el).not.toHaveAttribute("tabindex");
  });
  it("uses CSS truncation for a single line", () => {
    render(<TruncatedText text="anything" />);
    expect(screen.getByTestId("truncated-text")).toHaveClass("truncate");
  });
  it("clamps multiple lines", () => {
    render(<TruncatedText text="long" lines={3} />);
    expect(screen.getByTestId("truncated-text").style.webkitLineClamp).toBe("3");
  });
});
