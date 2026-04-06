import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AppShell from './pages/AppShell'
import Dashboard from './pages/Dashboard'
import MyAlerts from './pages/MyAlerts'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<AppShell />}>
        <Route index element={<Dashboard />} />
        <Route path="alerts" element={<MyAlerts />} />
        <Route path="explore" element={<Dashboard />} />
        <Route path="settings" element={<div className="text-slate-400 p-8">Settings coming soon.</div>} />
      </Route>
    </Routes>
  )
}
