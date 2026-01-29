export type ToolLink = {
  name: string
  description: string
  href: string
  tag: string
  isExternal?: boolean
}

// 工具导航卡片配置，便于后续维护与扩展。
export const tools: ToolLink[] = [
  {
    name: 'Resume',
    description: '快速查看我的最新履历与技能标签。',
    href: 'https://example.com/resume',
    tag: 'PDF',
    isExternal: true
  },
  {
    name: 'Portfolio',
    description: '近期项目与案例沉淀。',
    href: 'https://example.com/portfolio',
    tag: 'Case',
    isExternal: true
  },
  {
    name: 'Design Kit',
    description: '组件/设计资源下载入口。',
    href: 'https://example.com/design',
    tag: 'UI',
    isExternal: true
  },
  {
    name: 'Contact',
    description: '合作与咨询预约入口。',
    href: 'mailto:hello@example.com',
    tag: 'Talk',
    isExternal: true
  }
]
