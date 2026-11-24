import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  it("shows content on keyboard focus", async () => {
    render(
      <Tooltip content="Copy to clipboard" delay={0}>
        <button type="button">Copy</button>
      </Tooltip>
    );
    await userEvent.tab();
    expect(await screen.findByRole("tooltip")).toHaveTextContent("Copy to clipboard");
  });
  it("renders when open is controlled", () => {
    render(
      <Tooltip content="Always" open>
        <button type="button">Btn</button>
      </Tooltip>
    );
    expect(screen.getByRole("tooltip")).toHaveTextContent("Always");
  });
  it("renders only the child when disabled", () => {
    render(
      <Tooltip content="Hidden" disabled open>
        <button type="button">Btn</button>
      </Tooltip>
    );
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
});
