import { tools } from '../../data/tools'
import ToolCard from './ToolCard'

function ToolGrid() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          [补给枢纽|Tools]
        </h2>
        <span className="text-xs text-slate-400">常用入口</span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  )
}

export default ToolGrid
