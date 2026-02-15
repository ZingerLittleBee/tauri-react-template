# Tauri React 模板

[English Documentation](./README.md)

一个现代化、可用于生产环境的跨平台桌面应用模板，基于 Tauri、React，并提供清晰的开发体验。

## 特性

- Tauri 2.0 桌面应用架构
- React 19 + TypeScript + Vite 7
- Shadcn/ui 组件与 Tailwind CSS 4
- Zustand 状态管理：
  - 基础内存状态
  - 基于 Immer 的不可变状态
  - 基于 Tauri Store 的持久化状态
- Ultracite（Biome）代码质量工作流
- 开发环境自动加载 `react-grab`（在 `index.html` 中）

## 技术栈

- 前端：React 19、TypeScript、Vite 7
- 桌面端：Tauri 2.0
- UI：Shadcn/ui、Radix UI、Tailwind CSS 4
- 状态管理：Zustand、Immer
- 持久化：`@tauri-apps/plugin-store`
- 质量工具：Ultracite + Biome

## 前置要求

- Bun（推荐的包管理器/运行时）
- Rust（最新稳定版）
- Tauri 环境要求：https://tauri.app/start/prerequisites/

## 快速开始

1. 克隆仓库

```bash
git clone https://github.com/ZingerLittleBee/tauri-react-template.git
cd tauri-react-template
```

2. 安装依赖

```bash
bun install
```

3. 启动开发

```bash
bun tauri dev
```

4. 构建生产包

```bash
bun tauri build
```

## 可用脚本

- `bun dev` - 启动 Vite 开发服务器
- `bun build` - 构建前端资源
- `bun preview` - 预览生产构建
- `bun tauri dev` - 启动 Tauri 开发模式
- `bun tauri build` - 生成安装包/发布产物
- `bun check` - 执行 Ultracite 检查
- `bun fix` - 使用 Ultracite 自动修复

## 项目结构

```text
tauri-react-template/
├── src/
│   ├── components/        # UI 组件
│   ├── lib/               # 工具函数
│   ├── store/             # Zustand 状态（basic/immer/persist）
│   ├── app.tsx            # 主应用组件
│   └── main.tsx           # 前端入口
├── src-tauri/             # Rust + Tauri 后端
├── public/                # 静态资源
├── biome.jsonc            # Biome/Ultracite 配置
└── package.json           # 脚本与依赖
```

## Store 示例

- 基础组合状态：`src/store/index.ts`
- Immer 状态：`src/store/immer/immer-store.ts`
- 持久化状态与 Tauri 适配器：
  - `src/store/persist/persist-store.ts`
  - `src/store/persist/tauri-adapter.ts`

## 代码质量

本模板使用 Ultracite 与 Biome 预设。

- 检查：`bun x ultracite check`
- 修复：`bun x ultracite fix`
- 诊断：`bun x ultracite doctor`

## 构建产物

执行 `bun tauri build` 后，平台相关产物位于：

`src-tauri/target/release/bundle/`

## 参考链接

- Tauri：https://tauri.app/
- React：https://react.dev/
- Vite：https://vite.dev/
- Shadcn/ui：https://ui.shadcn.com/
- Zustand：https://zustand.docs.pmnd.rs/
- Tailwind CSS：https://tailwindcss.com/

## 许可证

MIT，见 `LICENSE`。
