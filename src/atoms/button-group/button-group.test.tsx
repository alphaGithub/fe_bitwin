import { render, screen } from "@testing-library/react";
import { Button } from "../button";
import { ButtonGroup } from "./button-group";

describe("ButtonGroup", () => {
  it("renders a labelled group of buttons", () => {
    render(
      <ButtonGroup aria-label="Text alignment">
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole("group", { name: "Text alignment" })).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  it("uses a gap instead of joining when not attached", () => {
    render(<ButtonGroup attached={false}>x</ButtonGroup>);
    expect(screen.getByTestId("button-group")).toHaveClass("gap-2");
  });
});
