import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Bell, Globe, Settings, LogOut, Menu, X } from 'lucide-react';
import { cn } from '../components/ui/utils';

const navItems = [
  { to: '/app', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/app/alerts', icon: Bell, label: 'Alerts' },
  { to: '/app/explore', icon: Globe, label: 'Explore' },
  { to: '/app/settings', icon: Settings, label: 'Settings' },
];

export default function AppShell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {open && (
        <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={() => setOpen(false)} />
      )}

      <aside className={`fixed md:static z-40 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col transition-transform md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600">flio</h1>
          <button className="md:hidden text-gray-400" onClick={() => setOpen(false)} aria-label="Close sidebar">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                )
              }
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <LogOut className="w-5 h-5" />
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="h-16 flex items-center px-4 border-b border-gray-200 bg-white md:hidden">
          <button onClick={() => setOpen(true)} aria-label="Open sidebar">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <span className="ml-3 text-lg font-bold text-blue-600">flio</span>
        </div>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
