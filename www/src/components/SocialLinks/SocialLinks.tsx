import { type ReactNode } from 'react'
import { socialLinks, type SocialLink } from '../../data/social'

const iconMap: Record<SocialLink['type'], ReactNode> = {
  github: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2c-5.52 0-10 4.48-10 10a10 10 0 0 0 6.84 9.54c.5.08.68-.22.68-.5v-1.74c-2.78.6-3.36-1.2-3.36-1.2-.46-1.16-1.12-1.46-1.12-1.46-.9-.62.06-.6.06-.6 1 .08 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.1-.66.36-1.1.64-1.36-2.22-.26-4.56-1.12-4.56-4.98 0-1.1.4-2 1.02-2.72-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.74 1.04a9.6 9.6 0 0 1 5 0c1.9-1.32 2.74-1.04 2.74-1.04.54 1.4.2 2.44.1 2.7.64.72 1.02 1.62 1.02 2.72 0 3.88-2.34 4.72-4.58 4.96.38.34.7 1 .7 2.02v2.98c0 .28.18.58.7.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  blog: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.83a3 3 0 0 0-.88-2.12l-3.83-3.83A3 3 0 0 0 14.17 3H6zm8 1.5 4.5 4.5H14a.5.5 0 0 1-.5-.5V4.5zM8 13h8a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm0 4h5a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2 8 5 8-5H4zm16 10V9l-8 5-8-5v8h16z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          [次元映射|Platforms]
        </h2>
        <span className="text-xs text-slate-400">GitHub / Blog / Mail</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.type === 'mail' ? '_self' : '_blank'}
            rel={link.type === 'mail' ? undefined : 'noreferrer'}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-brand-400/60 hover:bg-brand-500/10"
          >
            <span className="text-brand-600">{iconMap[link.type]}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialLinks
