import type { Config } from "tailwindcss";

/**
 * Shared Tailwind preset. Consuming apps:
 *
 *   module.exports = {
 *     presets: [require("@bitwin/ui/tokens/tailwind-preset").default],
 *     content: ["./src/**\/*.{ts,tsx}", "./node_modules/@bitwin/ui/dist/**\/*.{js,mjs}"],
 *   };
 *
 * Every color maps to a CSS variable from `tokens/colors.css`, so the app must also import
 * `@bitwin/ui/tokens/css/base.css` once.
 */

const rgb = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const scale = (name: string, steps: number[]) =>
  Object.fromEntries(steps.map((step) => [step, rgb(`${name}-${step}`)]));

const FULL = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const STATUS = [50, 100, 500, 600, 700];

const textToken = (name: string): [string, { lineHeight: string; fontWeight: string }] => [
  `var(--text-${name}-size)`,
  { lineHeight: `var(--text-${name}-leading)`, fontWeight: `var(--text-${name}-weight)` },
];

const preset = {
  content: [],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Palette — named colors, overriding Tailwind's built-in blue/green/red/yellow with ours.
        white: rgb("white"),
        black: rgb("black"),
        blue: scale("blue", FULL),
        green: scale("green", FULL),
        grey: scale("grey", FULL),
        red: scale("red", FULL),
        yellow: scale("yellow", FULL),
        // Semantic — point at the palette via CSS variables in colors.css.
        primary: { ...scale("primary", FULL), DEFAULT: rgb("primary-600") },
        neutral: { ...scale("neutral", [0, ...FULL]) },
        success: { ...scale("success", STATUS), DEFAULT: rgb("success-600") },
        warning: { ...scale("warning", STATUS), DEFAULT: rgb("warning-600") },
        error: { ...scale("error", STATUS), DEFAULT: rgb("error-600") },
        info: { ...scale("info", STATUS), DEFAULT: rgb("info-600") },
        background: rgb("background"),
        surface: { DEFAULT: rgb("surface"), muted: rgb("surface-muted") },
        foreground: { DEFAULT: rgb("foreground"), muted: rgb("foreground-muted") },
        border: { DEFAULT: rgb("border"), strong: rgb("border-strong") },
        ring: rgb("ring"),
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        display: textToken("display"),
        h1: textToken("h1"),
        h2: textToken("h2"),
        h3: textToken("h3"),
        h4: textToken("h4"),
        "body-lg": textToken("body-lg"),
        body: textToken("body"),
        "body-sm": textToken("body-sm"),
        caption: textToken("caption"),
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "progress-indeterminate": {
          "0%": { left: "-33%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in var(--duration-fast) ease-out",
        "progress-indeterminate": "progress-indeterminate 1.2s ease-in-out infinite",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
      },
    },
  },
} satisfies Config;

export default preset;
