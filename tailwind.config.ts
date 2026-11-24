// Used only by Storybook in this repo. Consumers use the preset from `@bitwin/ui/tokens/tailwind-preset`.
import type { Config } from "tailwindcss";
import preset from "./src/tokens/tailwind-preset";

const config: Config = {
  presets: [preset],
  content: ["./src/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
};

export default config;
