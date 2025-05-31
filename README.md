# Tauri React Template

[中文文档](./README.zh-CN.md)

A modern, production-ready template for building cross-platform desktop applications with Tauri, React, and a carefully curated set of tools and libraries.

## ✨ Features

- 🚀 **Tauri 2.0** - Build smaller, faster, and more secure desktop applications
- ⚛️ **React 18** - Modern React with hooks and concurrent features
- ⚡ **Vite** - Lightning fast build tool and development server
- 🎨 **Shadcn/ui** - Beautiful and accessible UI components
- 🐻 **Zustand** - Simple and scalable state management
- 💾 **Tauri Store** - Persistent storage with Zustand integration
- 🎯 **TailwindCSS 4** - Utility-first CSS framework with latest features
- 📏 **ESLint + Prettier** - Code formatting and linting
- 🔧 **Import Sorting** - Automatic import organization
- 🎨 **Tailwind Linting** - TailwindCSS class sorting and validation
- 📱 **TypeScript** - Full type safety

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Desktop**: Tauri 2.0
- **UI Components**: Shadcn/ui + Radix UI
- **Styling**: TailwindCSS 4 + Lucide Icons
- **State Management**: Zustand + Immer
- **Persistence**: Tauri Plugin Store
- **Code Quality**: ESLint + Prettier + TypeScript
- **Build Tool**: Vite 6

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn
- [Rust](https://rustup.rs/) (latest stable)
- [Tauri Prerequisites](https://tauri.app/v2/guides/getting-started/prerequisites)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZingerLittleBee/tauri-react-template.git
   cd tauri-react-template
   ```

2. **Install dependencies**
   ```bash
   pnpm i
   ```

3. **Start development server**
   ```bash
   pnpm tauri dev
   ```

4. **Build for production**
   ```bash
   pnpm tauri build
   ```

## 📝 Available Scripts

- `pnpm dev` - Start Vite development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm tauri dev` - Start Tauri development mode
- `pnpm tauri build` - Build Tauri application
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier

## 🏗️ Project Structure

```
tauri-react-template/
├── src/                    # React source code
│   ├── components/         # React components
│   ├── lib/               # Utility functions and configurations
│   ├── stores/            # Zustand stores
│   └── main.tsx           # Application entry point
├── src-tauri/             # Tauri backend code
│   ├── src/               # Rust source code
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
├── public/                # Static assets
└── package.json           # Node.js dependencies and scripts
```

## 🎨 UI Components

This template includes a pre-configured Shadcn/ui setup with:

- Beautiful and accessible components
- Dark/light theme support
- Customizable design system
- TailwindCSS integration

To add new components:
```bash
pnpm dlx shadcn@latest add button
```

## 🐻 State Management

Zustand is configured with:

- **Immer integration** for immutable updates
- **Tauri Store persistence** for data that survives app restarts
- **TypeScript support** for type-safe stores

Example store with Immer:
```bash
src/store/immer/immer-store.ts
```

Example store with persistence:
```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { tauriStorage } from './tauri-storage'

interface AppState {
  count: number
  increment: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'app-storage',
      storage: tauriStorage,
    }
  )
)
```

## 🔧 Configuration

### ESLint & Prettier

The project includes a comprehensive ESLint and Prettier setup with:

- React-specific rules
- TypeScript support
- Import sorting with `@ianvs/prettier-plugin-sort-imports`
- TailwindCSS class sorting with `prettier-plugin-tailwindcss`

### TailwindCSS 4

Configured with:
- Latest TailwindCSS 4 features
- Custom design tokens
- Responsive design utilities
- Dark mode support

## 🚀 Building for Production

To create a production build:

```bash
pnpm tauri build
```

This will create platform-specific installers in the `src-tauri/target/release/bundle/` directory.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 Resources

- [Tauri Documentation](https://tauri.app/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

---

Made with ❤️ by [ZingerLittleBee](https://github.com/ZingerLittleBee)
