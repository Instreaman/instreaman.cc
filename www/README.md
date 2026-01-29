# www
个人名片主页主站（Vite + React + TypeScript + Tailwind CSS）。

## 快速开始

```bash
npm install
npm run dev
```

## 常用命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 本地预览
npm run preview
```

## 结构概览

```
src/
├─ components/          # 纯展示组件
│  ├─ Header/
│  ├─ SocialLinks/
│  └─ ToolGrid/
├─ sections/            # 页面组合区块
│  └─ Home/
├─ data/                # 可配置数据源
│  ├─ profile.ts
│  ├─ social.ts
│  └─ tools.ts
├─ App.tsx
└─ main.tsx
```

## 配置入口
- 个人信息：src/data/profile.ts
- 社交链接：src/data/social.ts
- 工具卡片：src/data/tools.ts

## 说明
- 使用 Tailwind CSS 进行样式开发。
- 采用数据驱动方式维护内容，组件保持解耦。
