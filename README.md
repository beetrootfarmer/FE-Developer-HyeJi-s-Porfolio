# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Performance

Measured 2026-07-16 on `main` (`a125b5b`): production build (`npm run build`) served via `vite preview`, timings captured with Playwright/Chromium using the Navigation and Paint Timing APIs.

### Bundle size

| File | Raw | Gzip |
| --- | --- | --- |
| JS (single bundle) | 349.6 KB | 113.6 KB |
| CSS | 9.25 KB | 2.54 KB |
| HTML | 0.96 KB | 0.52 KB |

No code-splitting yet — React, ReactDOM, and Framer Motion all ship in one chunk.

### Load timing

| Metric | No throttle | Simulated Slow 4G |
| --- | --- | --- |
| TTFB | 1.7 ms | 1.4 ms |
| DOMContentLoaded | 345 ms | 915 ms |
| load event | 348 ms | 915 ms |
| First Contentful Paint | 588 ms | 1048 ms |

### Initial network requests (4 total)

- Google Fonts CSS (external, ~270–290 ms despite `preconnect` — the biggest single latency contributor)
- `index-*.css` (2.8 KB)
- `index-*.js` (114 KB gzip)
- `beeve1.jpg` card thumbnail (63 KB) — the other project-detail carousel images (`beeve2–4.jpg`) only load when a project is opened

### Takeaways

Light and fast for a static portfolio: sub-1s FCP even under simulated Slow 4G, 4 requests, ~176 KB transferred on first load. Lower-priority follow-ups if the site grows:

1. Self-host fonts (e.g. Fontsource) to remove the Google Fonts round-trip.
2. Lazy-load `ProjectDetail` (`React.lazy`) once there are enough projects to justify splitting it out of the main bundle.
3. Add explicit `loading="lazy"` to project images as more are added.
