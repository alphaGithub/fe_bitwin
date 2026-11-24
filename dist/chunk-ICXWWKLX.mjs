// src/lib/link.tsx
import { createContext, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var LinkComponentContext = createContext(void 0);
function BitwinUIProvider({ linkComponent, children }) {
  return /* @__PURE__ */ jsx(LinkComponentContext.Provider, { value: linkComponent, children });
}
function useLinkComponent() {
  return useContext(LinkComponentContext);
}

export {
  BitwinUIProvider,
  useLinkComponent
};
//# sourceMappingURL=chunk-ICXWWKLX.mjs.map