import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  it("associates with an input via htmlFor", () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <input id="email" />
      </>
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByTestId("label-email")).toBeInTheDocument();
  });
  it("shows a required marker", () => {
    render(<Label required>Name</Label>);
    expect(screen.getByText("*")).toBeInTheDocument();
  });
});
