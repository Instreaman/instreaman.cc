import Header from '../../components/Header/Header.tsx'
import SocialLinks from '../../components/SocialLinks/SocialLinks.tsx'
import ToolGrid from '../../components/ToolGrid/ToolGrid.tsx'

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* 背景渐变装饰层，保持视觉层次感 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)]" />

      <main className="relative mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
        <Header />
        <SocialLinks />
        <ToolGrid />

        <footer className="text-xs text-slate-500">
          © 2026 Instreaman. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default Home
