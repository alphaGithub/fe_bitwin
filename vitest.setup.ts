import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement ResizeObserver, which Radix Popper-based components (Tooltip, Popover…) use.
class ResizeObserverPolyfill {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver ??= ResizeObserverPolyfill;

// jsdom doesn't implement these either; Radix Select's pointer-based selection relies on them.
Element.prototype.hasPointerCapture ??= () => false;
Element.prototype.setPointerCapture ??= () => {};
Element.prototype.releasePointerCapture ??= () => {};
Element.prototype.scrollIntoView ??= () => {};
