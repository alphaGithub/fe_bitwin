# @bitwin/ui

Bitwin's shared React component library: design tokens, **atoms**, and **composites** in a single package, installed by other apps directly from git over SSH.

## Development

```bash
npm install
npm run storybook   # http://localhost:6006
npm test            # Vitest + Testing Library
npm run typecheck
npm run lint
npm run build       # tsup → dist/ (ESM + CJS + .d.ts)
```

## Layout

```
src/
├── tokens/        CSS variables (colors, typography, effects) + Tailwind preset
├── atoms/         Small building blocks (Button, …)
├── composites/    Business components — may only import from ../atoms, ../lib, ../tokens
├── lib/           cn() helper, BitwinUIProvider (router link injection)
├── index.ts       "@bitwin/ui" entry (atoms)
└── composites/index.ts  "@bitwin/ui/composites" entry
```

### Atoms

| Group | Atoms |
|---|---|
| Typography & visuals | `Text`, `Heading`, `Icon` (wraps any `lucide-react` icon), `Link` |
| Actions | `Button` |
| Form controls | `Label`, `Input`, `Textarea`, `Checkbox`, `RadioGroup` + `Radio`, `Switch`, `Select` |
| Feedback | `Badge`, `Alert`, `Spinner`, `Skeleton`, `Progress` |
| Layout | `Box`, `Stack`, `Flex`, `Container`, `Divider`, `Card` (+ `CardHeader`, `CardContent`, `CardFooter`) |
| Display & overlays | `Avatar`, `Tooltip` (+ `TooltipProvider`), `Tag` |

Shared helpers live in `src/lib/`: `field-variants.ts` (common look for Input, Textarea and Select) and `layout-variants.ts` (gap, padding and alignment scale for the layout atoms).

### Component conventions

Each component lives in `src/atoms/<name>/` or `src/composites/<name>/` and has these files:

| File | Purpose |
|---|---|
| `<name>.tsx` | Component (`"use client"`, `forwardRef`, default `data-testid`) |
| `<name>.variants.ts` | `cva` class strings per variant/size/state |
| `<name>.test.tsx` | Vitest + Testing Library |
| `<name>.stories.tsx` | Storybook stories |
| `index.ts` | Re-exports |

Then add `export * from "./atoms/<name>"` to `src/index.ts` (or the composites barrel). Use `src/atoms/button/` as the template.

Style with the token-backed Tailwind classes (`bg-primary-600`, `text-foreground-muted`, `border-border`, `rounded-md`, `text-body-sm`), not hard-coded hex values or `bg-[var(...)]`.

## Tokens

- `src/tokens/colors.css` has two layers. Values are RGB channels (`--color-blue-600: 37 99 235`), so opacity modifiers like `bg-blue-600/40` work.
  - **Palette:** named colours `blue`, `green`, `grey`, `red` and `yellow` (50–900), plus `white` and `black`. Use them directly: `bg-blue-600`, `text-grey-700`, or `var(--color-green-500)` in CSS.
  - **Semantic:** `primary` → blue, `neutral` → grey, `success` → green, `warning` → yellow, `error` → red, `info` → blue, plus `background`, `surface`, `foreground`, `border` and `ring` (with dark-mode overrides). Prefer these in components. To rebrand, repoint `--color-primary-*` to another palette colour.
- `src/tokens/typography.css` holds font families and the type scale (`display`, `h1`–`h4`, `body-lg`, `body`, `body-sm`, `caption`).
- `src/tokens/effects.css` holds radii, shadows and durations.
- `src/tokens/tailwind-preset.ts` maps all of the above to Tailwind theme keys.

The current values are neutral placeholders. Swap them as brand specs arrive.

## Consuming from another app

**Install** (pin to a tag):

```bash
npm i git+ssh://<git-host>/<repo>.git#v0.1.0
```

**Tailwind config:**

```js
module.exports = {
  presets: [require("@bitwin/ui/tokens/tailwind-preset").default],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@bitwin/ui/dist/**/*.{js,mjs}", // required, or every library class gets purged
  ],
};
```

**Root layout / entry:**

```tsx
import "@bitwin/ui/tokens/css/base.css";
import { BitwinUIProvider } from "@bitwin/ui";
import Link from "next/link"; // optional: any router Link

<BitwinUIProvider linkComponent={Link}>{children}</BitwinUIProvider>
```

**Use:**

```tsx
import { Button } from "@bitwin/ui";
import { /* composites */ } from "@bitwin/ui/composites";
```

## Releasing

`dist/` is **committed on purpose**, because git installs don't run our build.

1. `npm run typecheck && npm run lint && npm test`
2. Bump `version` in `package.json`
3. `npm run build`
4. Commit (including `dist/`), `git tag vX.Y.Z`, `git push --follow-tags`
5. Consumers bump their `#vX.Y.Z` ref
