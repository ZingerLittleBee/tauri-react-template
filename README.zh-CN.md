# Tauri React 模板

[English Documentation](./README.md)

一个现代化、生产就绪的模板，用于构建跨平台桌面应用程序，基于 Tauri、React 和精心挑选的工具库。

## ✨ 特性

- 🚀 **Tauri 2.0** - 构建更小、更快、更安全的桌面应用程序
- ⚛️ **React 18** - 现代 React，支持 hooks 和并发特性
- ⚡ **Vite** - 闪电般快速的构建工具和开发服务器
- 🎨 **Shadcn/ui** - 美观且易于访问的 UI 组件
- 🐻 **Zustand** - 简单且可扩展的状态管理
- 💾 **Tauri Store** - 与 Zustand 集成的持久化存储
- 🎯 **TailwindCSS 4** - 实用优先的 CSS 框架，支持最新特性
- 📏 **ESLint + Prettier** - 代码格式化和代码检查
- 🔧 **导入排序** - 自动导入组织
- 🎨 **Tailwind 代码检查** - TailwindCSS 类排序和验证
- 📱 **TypeScript** - 完整的类型安全

## 🛠️ 技术栈

- **前端**: React 18 + TypeScript + Vite
- **桌面端**: Tauri 2.0
- **UI 组件**: Shadcn/ui + Radix UI
- **样式**: TailwindCSS 4 + Lucide Icons
- **状态管理**: Zustand + Immer
- **持久化**: Tauri Plugin Store
- **代码质量**: ESLint + Prettier + TypeScript
- **构建工具**: Vite 6

## 📦 前置要求

开始之前，请确保已安装以下软件：

- [Node.js](https://nodejs.org/) (v18 或更高版本)
- [pnpm](https://pnpm.io/) (推荐) 或 npm/yarn
- [Rust](https://rustup.rs/) (最新稳定版)
- [Tauri 要求](https://tauri.app/v2/guides/getting-started/prerequisites)

## 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/ZingerLittleBee/tauri-react-template.git
   cd tauri-react-template
   ```

2. **安装依赖**
   ```bash
   pnpm i
   ```

3. **启动开发服务器**
   ```bash
   pnpm tauri dev
   ```

4. **构建生产版本**
   ```bash
   pnpm tauri build
   ```

## 📝 可用脚本

- `pnpm dev` - 启动 Vite 开发服务器
- `pnpm build` - 构建生产版本
- `pnpm preview` - 预览生产构建
- `pnpm tauri dev` - 启动 Tauri 开发模式
- `pnpm tauri build` - 构建 Tauri 应用程序
- `pnpm lint` - 运行 ESLint 并自动修复
- `pnpm format` - 使用 Prettier 格式化代码

## 🏗️ 项目结构

```
tauri-react-template/
├── src/                    # React 源代码
│   ├── components/         # React 组件
│   ├── lib/               # 工具函数和配置
│   ├── stores/            # Zustand 状态管理
│   └── main.tsx           # 应用程序入口点
├── src-tauri/             # Tauri 后端代码
│   ├── src/               # Rust 源代码
│   ├── Cargo.toml         # Rust 依赖
│   └── tauri.conf.json    # Tauri 配置
├── public/                # 静态资源
└── package.json           # Node.js 依赖和脚本
```

## 🎨 UI 组件

此模板包含预配置的 Shadcn/ui 设置：

- 美观且易于访问的组件
- 深色/浅色主题支持
- 可自定义的设计系统
- TailwindCSS 集成

添加新组件：
```bash
pnpm dlx shadcn@latest add button
```

## 🐻 状态管理

Zustand 配置包含：

- **Immer 集成** 用于不可变更新
- **Tauri Store 持久化** 用于应用重启后保存的数据
- **TypeScript 支持** 用于类型安全的状态管理

带持久化的示例状态管理：
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

## 🔧 配置

### ESLint & Prettier

项目包含全面的 ESLint 和 Prettier 设置：

- React 特定规则
- TypeScript 支持
- 使用 `@ianvs/prettier-plugin-sort-imports` 进行导入排序
- 使用 `prettier-plugin-tailwindcss` 进行 TailwindCSS 类排序

### TailwindCSS 4

配置包含：
- 最新的 TailwindCSS 4 特性
- 自定义设计令牌
- 响应式设计工具
- 深色模式支持

## 🚀 生产构建

创建生产构建：

```bash
pnpm tauri build
```

这将在 `src-tauri/target/release/bundle/` 目录中创建平台特定的安装程序。

## 📄 许可证

此项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

## 📚 资源

- [Tauri 文档](https://tauri.app/)
- [React 文档](https://react.dev/)
- [Vite 文档](https://vitejs.dev/)
- [Shadcn/ui 文档](https://ui.shadcn.com/)
- [Zustand 文档](https://zustand-demo.pmnd.rs/)
- [TailwindCSS 文档](https://tailwindcss.com/)

---

用 ❤️ 制作，作者：[勤劳的小蜜蜂](https://github.com/ZingerLittleBee)