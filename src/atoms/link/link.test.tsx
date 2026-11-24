import { forwardRef } from "react";
import { render, screen } from "@testing-library/react";
import { BitwinUIProvider } from "../../lib/link";
import type { LinkComponentProps } from "../../lib/link";
import { Link } from "./link";

describe("Link", () => {
  it("renders an anchor", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
  });
  it("opens external links safely in a new tab", () => {
    render(<Link href="https://example.com" external>Docs</Link>);
    const link = screen.getByRole("link", { name: /Docs/ });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveTextContent("(opens in a new tab)");
  });
  it("uses the provider's router link for internal links only", () => {
    const RouterLink = forwardRef<HTMLAnchorElement, LinkComponentProps>(({ children, ...p }, ref) => (
      <a ref={ref} data-router="yes" {...p}>{children}</a>
    ));
    RouterLink.displayName = "RouterLink";
    render(
      <BitwinUIProvider linkComponent={RouterLink}>
        <Link href="/in">In</Link>
        <Link href="https://out.com" external>Out</Link>
      </BitwinUIProvider>
    );
    expect(screen.getByRole("link", { name: "In" })).toHaveAttribute("data-router", "yes");
    expect(screen.getByRole("link", { name: /Out/ })).not.toHaveAttribute("data-router");
  });
});
