import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./select";

const options = [
  { value: "in", label: "India" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom", disabled: true },
];

describe("Select", () => {
  it("shows the placeholder, then the chosen option", async () => {
    const onValueChange = vi.fn();
    render(<Select aria-label="Country" options={options} placeholder="Pick one" onValueChange={onValueChange} />);
    const trigger = screen.getByRole("combobox", { name: "Country" });
    expect(trigger).toHaveTextContent("Pick one");

    await userEvent.click(trigger);
    await userEvent.click(await screen.findByRole("option", { name: "India" }));

    expect(onValueChange).toHaveBeenCalledWith("in");
    expect(trigger).toHaveTextContent("India");
  });

  it("renders the default value", () => {
    render(<Select aria-label="Country" options={options} defaultValue="us" />);
    expect(screen.getByRole("combobox")).toHaveTextContent("United States");
  });

  it("is disabled", () => {
    render(<Select aria-label="Country" options={options} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
