# Flickersong

Minimalist landing and projects site for the Flickersong sole proprietorship. Built with **Vite**, **Preact**, and **TypeScript**.

## Stack

- **Vite** — build and dev server
- **Preact** — UI (with `preact-router` for client-side routing)
- **TypeScript** — strict mode, TSDoc on public APIs
- **Vitest** + **@testing-library/preact** — unit tests

## Commands

| Command       | Description                    |
| ------------- | ------------------------------ |
| `npm install` | Install dependencies           |
| `npm run dev` | Start dev server (default 5173)|
| `npm run build` | Production build             |
| `npm run preview` | Serve `dist/` locally     |
| `npm run test` | Run Vitest (watch by default)  |

## Structure

- `src/pages/` — Landing and Projects pages
- `src/components/` — Header, layout primitives (Container, Section, Heading), ThemeSwitcher
- `src/theme/` — Theme IDs, token definitions (Mono minimal, Noir cosmic, Soft brutalist), ThemeProvider
- `src/types/` — `Project` and shared types
- `src/data/` — Static project list (replace with API/CMS later)

## Themes

Three aesthetic paradigms are available via the header theme switcher; choice is persisted in `localStorage`.

1. **Mono minimal** — Light, generous whitespace, monospace headings, subtle blue accent, thin borders.
2. **Noir cosmic** — Dark background, nebula-style hero gradient, cyan accent, translucent cards.
3. **Soft brutalist** — Cream/off-white, bold type, chunky cards and borders, red accent.

## License

See [LICENSE](LICENSE).
