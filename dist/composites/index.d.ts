import * as react from 'react';
import { ElementType, AnchorHTMLAttributes, ReactNode } from 'react';

/** Props every rendered link receives — the same shape a raw `<a href>` gets. */
type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};
/** A component usable as a link: `"a"` or a router Link (e.g. `next/link`, React Router `Link`). */
type LinkComponentType = ElementType<LinkComponentProps>;
type BitwinUIProviderProps = {
    /** Component used for every link the library renders. Omit to use a plain `<a>`. */
    linkComponent?: LinkComponentType;
    children: ReactNode;
};
/** Wire once near the app root to inject a router Link into all library components. */
declare function BitwinUIProvider({ linkComponent, children }: BitwinUIProviderProps): react.JSX.Element;
/** The injected link component, or `undefined` when no provider is mounted. */
declare function useLinkComponent(): LinkComponentType | undefined;

export { BitwinUIProvider, type BitwinUIProviderProps, type LinkComponentProps, type LinkComponentType, useLinkComponent };
