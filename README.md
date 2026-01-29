# instreaman.cc
个人名片式主页（静态单页）。

## 技术栈
Vite + React + TypeScript + Tailwind CSS

## 项目结构
主站放在 www，blog 预留在 blog。

```
/
├─ www/                 # 主站（Vite + React）
│  ├─ src/
│  │  ├─ assets/         # 图片/字体
│  │  ├─ components/     # 纯展示组件
│  │  │  ├─ Header/
│  │  │  ├─ SocialLinks/
│  │  │  └─ ToolGrid/
│  │  ├─ sections/       # 页面块级组合
│  │  │  └─ Home/
│  │  ├─ data/           # 配置化数据
│  │  ├─ App.tsx
│  │  └─ main.tsx
│  ├─ public/
│  ├─ index.html
│  ├─ tailwind.config.js
│  └─ vite.config.ts
├─ blog/                # 预留博客（后续）
└─ README.md
```

## 首页模块
- Header：头像、昵称、个人简介
- Social Links：GitHub / Blog / Mail
- Tool Grid：工具导航卡片

## 数据配置
- 个人信息：[www/src/data/profile.ts](www/src/data/profile.ts)
- 社交链接：[www/src/data/social.ts](www/src/data/social.ts)
- 工具卡片：[www/src/data/tools.ts](www/src/data/tools.ts)

## 开发
在 www 目录启动开发服务器：

- 启动：`npm --prefix www run dev`
- 构建：`npm --prefix www run build`
- 预览：`npm --prefix www run preview`

## 约定
- 使用 Tailwind CSS 开发样式。
- 组件解耦、数据驱动、可维护。
