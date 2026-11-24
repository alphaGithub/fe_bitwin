import { createRef, forwardRef } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button";
import { BitwinUIProvider } from "../../lib/link";
import type { LinkComponentProps } from "../../lib/link";

describe("Button", () => {
  it("renders a button with type=button by default", () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("data-testid", "button-primary");
  });

  it("calls onClick", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Go</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled and busy while loading", async () => {
    const onClick = vi.fn();
    render(
      <Button isLoading onClick={onClick}>
        Saving
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("derives the test id from the variant and allows override", () => {
    const { rerender } = render(<Button variant="danger">Delete</Button>);
    expect(screen.getByTestId("button-danger")).toBeInTheDocument();
    rerender(<Button data-testid="custom">Delete</Button>);
    expect(screen.getByTestId("custom")).toBeInTheDocument();
  });

  it("renders an anchor when href is set", () => {
    render(<Button href="/home">Home</Button>);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/home");
  });

  it("uses the link component from BitwinUIProvider", () => {
    const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(({ children, ...props }, ref) => (
      <a ref={ref} data-router="yes" {...props}>
        {children}
      </a>
    ));
    RouterLink.displayName = "RouterLink";
    render(
      <BitwinUIProvider linkComponent={RouterLink}>
        <Button href="/x">X</Button>
      </BitwinUIProvider>
    );
    expect(screen.getByRole("link")).toHaveAttribute("data-router", "yes");
  });

  it("forwards refs", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("merges className", () => {
    render(<Button className="mt-4">Cls</Button>);
    expect(screen.getByRole("button")).toHaveClass("mt-4");
  });
});
