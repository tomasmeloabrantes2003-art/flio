import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/app', label: 'Dashboard', icon: '📊' },
  { to: '/app/alerts', label: 'My Alerts', icon: '🔔' },
  { to: '/app/explore', label: 'Explore', icon: '🌍' },
  { to: '/app/settings', label: 'Settings', icon: '⚙️' },
]

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-navy-900">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static z-40 top-0 left-0 h-full w-60 bg-navy-800 border-r border-navy-600 flex flex-col transition-transform md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="px-5 py-5 flex items-center justify-between">
          <span className="text-xl font-bold text-white tracking-tight">flio</span>
          <button className="md:hidden text-slate-400" onClick={() => setSidebarOpen(false)}>✕</button>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/app'}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${isActive ? 'bg-electric/15 text-electric' : 'text-slate-400 hover:text-white hover:bg-navy-700'}`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center gap-4 px-6 py-4 border-b border-navy-700">
          <button className="md:hidden text-slate-400 text-xl" onClick={() => setSidebarOpen(true)}>☰</button>
          <h1 className="text-lg font-semibold text-white">Flio</h1>
        </header>
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
