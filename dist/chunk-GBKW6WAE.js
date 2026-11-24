"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/lib/link.tsx
var _react = require('react');
var _jsxruntime = require('react/jsx-runtime');
var LinkComponentContext = _react.createContext.call(void 0, void 0);
function BitwinUIProvider({ linkComponent, children }) {
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, LinkComponentContext.Provider, { value: linkComponent, children });
}
function useLinkComponent() {
  return _react.useContext.call(void 0, LinkComponentContext);
}




exports.BitwinUIProvider = BitwinUIProvider; exports.useLinkComponent = useLinkComponent;
//# sourceMappingURL=chunk-GBKW6WAE.js.map