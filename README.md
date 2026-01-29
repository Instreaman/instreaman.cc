# instreaman.cc
个人名片式主页规划（静态单页）。

## 方案推荐
Vite + React + TypeScript + Tailwind CSS
- 轻量、构建快、部署简单，适合纯静态个人名片主页。
- 组件化清晰，便于后续扩展 blog 或多页面。

## 目录结构（规划）
主站放在 www，blog 预留在 blog：

```
/
├─ www/                 # 主站
│  ├─ src/
│  │  ├─ assets/         # 图片/字体
│  │  ├─ components/     # 纯展示组件（解耦复用）
│  │  │  ├─ Header/
│  │  │  ├─ SocialLinks/
│  │  │  └─ ToolGrid/
│  │  ├─ sections/       # 页面块级组合
│  │  │  └─ Home/
│  │  ├─ data/           # 配置化数据（头像、链接、工具卡片）
│  │  ├─ styles/         # Tailwind 扩展与全局样式
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ public/
│  ├─ index.html
│  ├─ tailwind.config.js
│  └─ vite.config.ts
├─ blog/                # 预留博客（后续）
└─ README.md
```

## 首页功能模块（www）
1. 头部 Header
	- 头像、昵称、个人 Bio
	- 组件：Header（纯展示）
	- 数据：data/profile.ts

2. 社交链接区 Social Links
	- GitHub / Blog / Mail
	- 组件：SocialLinks（可配置、支持新增平台）
	- 数据：data/social.ts

3. 工具导航区 Tool Grid
	- 平铺卡片式工具入口
	- 组件：ToolGrid + ToolCard
	- 数据：data/tools.ts

## 约束与标准
- 使用 Tailwind CSS 完成样式开发。
- 生产环境可用：结构清晰、组件解耦、可配置数据源。
- 关键逻辑与组件提供必要注释。
