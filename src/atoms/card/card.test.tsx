import { render, screen } from "@testing-library/react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

describe("Card", () => {
  it("renders header, content and footer", () => {
    render(
      <Card>
        <CardHeader title="Plan" description="Your subscription" action={<span>Edit</span>} />
        <CardContent>Pro</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );
    expect(screen.getByRole("heading", { name: "Plan" })).toBeInTheDocument();
    expect(screen.getByText("Your subscription")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });
  it("applies variant classes", () => {
    render(<Card variant="elevated">x</Card>);
    expect(screen.getByTestId("card")).toHaveClass("shadow-md");
  });
  it("exposes sub-parts via dot notation", () => {
    expect(Card.Header).toBe(CardHeader);
    expect(Card.Content).toBe(CardContent);
    expect(Card.Footer).toBe(CardFooter);
  });
});
