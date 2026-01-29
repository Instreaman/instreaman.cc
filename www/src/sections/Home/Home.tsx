import Header from '../../components/Header/Header.tsx'
import SocialLinks from '../../components/SocialLinks/SocialLinks.tsx'
import ToolGrid from '../../components/ToolGrid/ToolGrid.tsx'

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      {/* 动态背景层：渐变 + 浮动光晕，营造高级感 */}
      <div className="bg-layer">
        <div className="animated-bg" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <main className="relative mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
        <Header />
        <SocialLinks />
        <ToolGrid />

        <footer className="space-y-2 text-xs text-slate-500">
          <p>Status: [ 正在努力折纸飞机中... ]</p>
          <p>
            此站点由 Instreaman 手动维护，若导航失效，可能是因为站长正在进行一场永远不醒的午睡。
          </p>
          <p className="flex flex-wrap items-center gap-1">
            <span>Licensed under</span>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span className="inline-flex items-center gap-1">
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
                  alt="CC"
                  className="h-4 w-4"
                  loading="lazy"
                />
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
                  alt="BY"
                  className="h-4 w-4"
                  loading="lazy"
                />
                <img
                  src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"
                  alt="SA"
                  className="h-4 w-4"
                  loading="lazy"
                />
              </span>
              <span>CC BY-SA 4.0</span>
            </a>
            <span>.</span>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default Home
