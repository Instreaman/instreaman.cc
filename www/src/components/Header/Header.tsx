import { useEffect, useMemo, useState } from 'react'
import { profile } from '../../data/profile'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Header() {
  const initials = getInitials(profile.name)
  const bios = useMemo(() => profile.bios?.filter(Boolean) ?? [], [])
  const [bioIndex, setBioIndex] = useState(0)

  useEffect(() => {
    if (bios.length <= 1) return

    // 定时轮播简介，保持节奏感与可读性。
    const timer = window.setInterval(() => {
      setBioIndex((prev) => (prev + 1) % bios.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [bios])

  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:flex-row md:items-center">
      <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-2xl font-semibold text-slate-900">
        {profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={`${profile.name} avatar`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          initials
        )}
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-600">
            {profile.title}
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">{profile.name}</h1>
        </div>
        <p className="max-w-2xl text-base text-slate-600">
          {bios.length > 0 ? bios[bioIndex] : profile.bio}
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
            📍 {profile.location}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
            ✨ {profile.availability}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Header
