import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import AppShell from './pages/AppShell'
import Dashboard from './pages/Dashboard'
import MyAlerts from './pages/MyAlerts'
import Explore from './pages/Explore'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/app" element={<AppShell />}>
        <Route index element={<Dashboard />} />
        <Route path="alerts" element={<MyAlerts />} />
        <Route path="explore" element={<Explore />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
