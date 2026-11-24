import type { Preview } from "@storybook/react";
import "./preview.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i } },
    layout: "centered",
  },
};

export default preview;
