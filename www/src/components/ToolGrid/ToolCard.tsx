import type { ToolLink } from '../../data/tools'

type ToolCardProps = {
  tool: ToolLink
}

function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={tool.href}
      target={tool.isExternal ? '_blank' : '_self'}
      rel={tool.isExternal ? 'noreferrer' : undefined}
      className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-brand-500/10"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
        <span>{tool.tag}</span>
        <span className="text-brand-600">↗</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{tool.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
      </div>
    </a>
  )
}

export default ToolCard
