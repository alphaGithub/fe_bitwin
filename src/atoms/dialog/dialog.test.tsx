import { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "./dialog";

describe("Dialog", () => {
  it("opens from the trigger and closes with the × button", async () => {
    render(
      <Dialog trigger={<button type="button">Open</button>} title="Edit profile" description="Update your details">
        Body
      </Dialog>
    );
    await userEvent.click(screen.getByRole("button", { name: "Open" }));
    const dialog = screen.getByRole("dialog", { name: "Edit profile" });
    expect(dialog).toHaveAccessibleDescription("Update your details");
    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });
  it("closes on Escape unless preventClose", async () => {
    const { rerender } = render(<Dialog open title="T" preventClose onOpenChange={() => {}}>x</Dialog>);
    await userEvent.keyboard("{Escape}");
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    function Controlled() {
      const [open, setOpen] = useState(true);
      return <Dialog open={open} onOpenChange={setOpen} title="T">x</Dialog>;
    }
    rerender(<Controlled />);
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });
  it("Dialog.Close closes from the footer", async () => {
    render(
      <Dialog defaultOpen title="Confirm" footer={<Dialog.Close>Cancel</Dialog.Close>}>
        Sure?
      </Dialog>
    );
    await userEvent.click(screen.getByRole("button", { name: "Cancel" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
  });
  it("uses aria-label when there's no title", () => {
    render(<Dialog open aria-label="Image preview">img</Dialog>);
    expect(screen.getByRole("dialog", { name: "Image preview" })).toBeInTheDocument();
  });
});
