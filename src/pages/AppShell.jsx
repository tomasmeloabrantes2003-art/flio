import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const nav = [
  { to: '/app', label: 'Dashboard', end: true },
  { to: '/app/alerts', label: 'Alerts' },
  { to: '/app/explore', label: 'Explore' },
  { to: '/app/settings', label: 'Settings' },
]

export default function AppShell() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-base-950">
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full w-52 bg-base-900 border-r border-base-700/50 flex flex-col transition-transform md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="px-4 h-12 flex items-center justify-between border-b border-base-700/50">
          <span className="text-[14px] font-semibold text-white tracking-tight">flio</span>
          <button
            className="md:hidden text-base-400 text-sm"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            &times;
          </button>
        </div>
        <nav className="flex-1 py-2 px-2" role="navigation" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-1.5 rounded text-[13px] transition ${
                  isActive
                    ? 'bg-base-700/60 text-white font-medium'
                    : 'text-base-400 hover:text-base-300 hover:bg-base-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-12 flex items-center gap-3 px-4 border-b border-base-700/50">
          <button
            className="md:hidden text-base-400"
            onClick={() => setOpen(true)}
            aria-label="Open sidebar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <span className="text-[13px] text-base-400">Dashboard</span>
        </header>
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
