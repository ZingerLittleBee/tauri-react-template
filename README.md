# Tauri React Template

[中文文档](./README.zh-CN.md)

A modern, production-ready template for building cross-platform desktop applications with Tauri, React, and a focused developer experience.

## Features

- Tauri 2.0 desktop app architecture
- React 19 + TypeScript + Vite 7
- Shadcn/ui components with Tailwind CSS 4
- Zustand state management:
  - Basic in-memory store
  - Immer-powered immutable store
  - Tauri Store persisted store
- Ultracite (Biome) code quality workflow
- Dev-only `react-grab` helper auto-loaded in `index.html`

## Tech Stack

- Frontend: React 19, TypeScript, Vite 7
- Desktop: Tauri 2.0
- UI: Shadcn/ui, Radix UI, Tailwind CSS 4
- State: Zustand, Immer
- Persistence: `@tauri-apps/plugin-store`
- Quality: Ultracite + Biome

## Prerequisites

- Bun (recommended package manager/runtime)
- Rust (latest stable)
- Tauri prerequisites: https://tauri.app/start/prerequisites/

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/ZingerLittleBee/tauri-react-template.git
cd tauri-react-template
```

2. Install dependencies

```bash
bun install
```

3. Start development

```bash
bun tauri dev
```

4. Build production app

```bash
bun tauri build
```

## Available Scripts

- `bun dev` - Start Vite dev server
- `bun build` - Build frontend assets
- `bun preview` - Preview production build
- `bun tauri dev` - Run app in Tauri dev mode
- `bun tauri build` - Build installers/bundles
- `bun check` - Run Ultracite checks
- `bun fix` - Auto-fix with Ultracite

## Project Structure

```text
tauri-react-template/
├── src/
│   ├── components/        # UI components
│   ├── lib/               # Utilities
│   ├── store/             # Zustand stores (basic/immer/persist)
│   ├── app.tsx            # Main app component
│   └── main.tsx           # Frontend entry
├── src-tauri/             # Rust + Tauri backend
├── public/                # Static assets
├── biome.jsonc            # Biome/Ultracite config
└── package.json           # Scripts and dependencies
```

## Store Examples

- Basic combined store: `src/store/index.ts`
- Immer store: `src/store/immer/immer-store.ts`
- Persist store + Tauri adapter:
  - `src/store/persist/persist-store.ts`
  - `src/store/persist/tauri-adapter.ts`

## Code Quality

This template uses Ultracite with Biome presets.

- Check: `bun x ultracite check`
- Fix: `bun x ultracite fix`
- Diagnose: `bun x ultracite doctor`

## Build Output

`bun tauri build` creates platform-specific artifacts under:

`src-tauri/target/release/bundle/`

## Resources

- Tauri: https://tauri.app/
- React: https://react.dev/
- Vite: https://vite.dev/
- Shadcn/ui: https://ui.shadcn.com/
- Zustand: https://zustand.docs.pmnd.rs/
- Tailwind CSS: https://tailwindcss.com/

## License

MIT. See `LICENSE`.
