import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/composites/index.ts",
    "src/tokens/index.ts",
    "src/tokens/tailwind-preset.ts",
  ],
  format: ["esm", "cjs"],
  dts: true,
  // Shared code (e.g. the link context) lives in one chunk so `@bitwin/ui` and
  // `@bitwin/ui/composites` use the same React context instance.
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
});
