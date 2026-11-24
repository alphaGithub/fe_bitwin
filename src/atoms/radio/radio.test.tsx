import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio, RadioGroup } from "./radio";

describe("RadioGroup", () => {
  it("selects one option at a time (uncontrolled)", async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup aria-label="Plan" defaultValue="free" onValueChange={onValueChange}>
        <Radio value="free" label="Free" />
        <Radio value="pro" label="Pro" />
      </RadioGroup>
    );
    expect(screen.getByRole("radio", { name: "Free" })).toBeChecked();
    await userEvent.click(screen.getByText("Pro"));
    expect(screen.getByRole("radio", { name: "Pro" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "Free" })).not.toBeChecked();
    expect(onValueChange).toHaveBeenCalledWith("pro");
  });

  it("works controlled", async () => {
    function Controlled() {
      const [v, setV] = useState("a");
      return (
        <>
          <RadioGroup aria-label="Letters" value={v} onValueChange={setV}>
            <Radio value="a" label="A" />
            <Radio value="b" label="B" />
          </RadioGroup>
          <span data-testid="out">{v}</span>
        </>
      );
    }
    render(<Controlled />);
    await userEvent.click(screen.getByText("B"));
    expect(screen.getByTestId("out")).toHaveTextContent("b");
  });

  it("disables all items when the group is disabled", () => {
    render(
      <RadioGroup aria-label="X" disabled>
        <Radio value="1" label="One" />
      </RadioGroup>
    );
    expect(screen.getByRole("radio")).toBeDisabled();
  });
});
