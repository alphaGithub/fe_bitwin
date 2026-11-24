import { render, screen } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("is hidden from assistive tech and sized via props", () => {
    render(<Skeleton width={120} height={20} />);
    const el = screen.getByTestId("skeleton");
    expect(el).toHaveAttribute("aria-hidden", "true");
    expect(el).toHaveStyle({ width: "120px", height: "20px" });
  });
  it("renders multiple text lines", () => {
    render(<Skeleton shape="text" lines={3} />);
    expect(screen.getByTestId("skeleton").children).toHaveLength(3);
  });
});
