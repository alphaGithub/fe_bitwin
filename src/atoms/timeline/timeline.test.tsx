import { render, screen } from "@testing-library/react";
import { Timeline } from "./timeline";

describe("Timeline", () => {
  it("renders events in order with time and description", () => {
    render(
      <Timeline
        items={[
          { title: "Order placed", time: "10:00", description: "Paid via UPI" },
          { title: "Shipped", time: "14:30" },
        ]}
      />
    );
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Order placed");
    expect(items[0]).toHaveTextContent("Paid via UPI");
    expect(items[1]).toHaveTextContent("14:30");
  });
  it("supports a left time column", () => {
    render(<Timeline timePosition="left" items={[{ title: "A", time: "Mon" }]} />);
    expect(screen.getByText("Mon")).toHaveClass("text-right");
  });
});
