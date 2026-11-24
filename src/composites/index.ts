// Keep the "use client" directive: tsup only preserves it on the bundle when the entry declares it.
// Composites may only import from ../atoms, ../lib, and ../tokens.
"use client";

export { BitwinUIProvider, useLinkComponent } from "../lib/link";
export type { BitwinUIProviderProps, LinkComponentProps, LinkComponentType } from "../lib/link";
