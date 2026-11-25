"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/tokens/tailwind-preset.ts
var rgb = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;
var scale = (name, steps) => Object.fromEntries(steps.map((step) => [step, rgb(`${name}-${step}`)]));
var FULL = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
var STATUS = [50, 100, 500, 600, 700];
var textToken = (name) => [
  `var(--text-${name}-size)`,
  { lineHeight: `var(--text-${name}-leading)`, fontWeight: `var(--text-${name}-weight)` }
];
var preset = {
  content: [],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Palette — named colors, overriding Tailwind's built-in blue/green/red/yellow with ours.
        white: rgb("white"),
        black: rgb("black"),
        brand: scale("brand", FULL),
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
        ring: rgb("ring")
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"]
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
        caption: textToken("caption")
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)"
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)"
      },
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "progress-indeterminate": {
          "0%": { left: "-33%" },
          "100%": { left: "100%" }
        }
      },
      animation: {
        "fade-in": "fade-in var(--duration-fast) ease-out",
        "progress-indeterminate": "progress-indeterminate 1.2s ease-in-out infinite"
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)"
      }
    }
  }
};
var tailwind_preset_default = preset;



exports.tailwind_preset_default = tailwind_preset_default;
//# sourceMappingURL=chunk-4JCYG35Z.js.map