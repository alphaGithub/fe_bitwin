"use client";

import { createContext, useContext } from "react";
import type { AnchorHTMLAttributes, ElementType, ReactNode } from "react";

/** Props every rendered link receives — the same shape a raw `<a href>` gets. */
export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** A component usable as a link: `"a"` or a router Link (e.g. `next/link`, React Router `Link`). */
export type LinkComponentType = ElementType<LinkComponentProps>;

const LinkComponentContext = createContext<LinkComponentType | undefined>(undefined);

export type BitwinUIProviderProps = {
  /** Component used for every link the library renders. Omit to use a plain `<a>`. */
  linkComponent?: LinkComponentType;
  children: ReactNode;
};

/** Wire once near the app root to inject a router Link into all library components. */
export function BitwinUIProvider({ linkComponent, children }: BitwinUIProviderProps) {
  return <LinkComponentContext.Provider value={linkComponent}>{children}</LinkComponentContext.Provider>;
}

/** The injected link component, or `undefined` when no provider is mounted. */
export function useLinkComponent(): LinkComponentType | undefined {
  return useContext(LinkComponentContext);
}
