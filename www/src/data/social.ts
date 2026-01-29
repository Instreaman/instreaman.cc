export type SocialLink = {
  label: string
  href: string
  type: 'github' | 'blog' | 'mail'
}

// 社交入口配置，新增平台时只需在这里添加。
export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/instreaman',
    type: 'github'
  },
  {
    label: 'Blog',
    href: 'https://blog.instreaman.cc',
    type: 'blog'
  },
  {
    label: 'Mail',
    href: 'mailto:instreaman@gmail.com',
    type: 'mail'
  }
]
