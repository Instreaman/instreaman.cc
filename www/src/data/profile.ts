export type Profile = {
  name: string
  title: string
  bio: string
  location: string
  availability: string
  avatarUrl?: string
}

// 统一在此处维护个人基础信息，组件只负责渲染。
export const profile: Profile = {
  name: 'Instreaman',
  title: 'Frontend Architect',
  bio: '专注现代前端架构与体验设计，持续打造高质量的产品与组件体系。',
  location: 'China · Remote Friendly',
  availability: 'Open to collaboration',
  avatarUrl: ''
}
