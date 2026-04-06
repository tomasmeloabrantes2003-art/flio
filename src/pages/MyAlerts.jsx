import { useState } from 'react'
import { mockAlerts } from '../data/mock'

export default function MyAlerts() {
  // TODO: fetch alerts from backend API
  const [alerts, setAlerts] = useState(mockAlerts)

  const deleteAlert = (id) => {
    // TODO: DELETE alert via API
    setAlerts(alerts.filter((a) => a.id !== id))
  }

  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-6">My Alerts</h2>

      {alerts.length === 0 ? (
        <p className="text-slate-500">No alerts yet. Create one from the Dashboard.</p>
      ) : (
        <div className="space-y-3">
          {alerts.map((a) => (
            <div key={a.id} className="bg-navy-800 border border-navy-600 rounded-xl p-4 flex items-center justify-between gap-4 hover:border-navy-600/80 transition">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-medium">{a.destination}</h3>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${a.status === 'triggered' ? 'bg-amber/15 text-amber' : 'bg-electric/15 text-electric'}`}>
                    {a.status === 'triggered' ? 'Triggered' : 'Active'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 truncate">
                  From {a.origin} · ✈️ ≤€{a.maxFlight} · 🏨 ≤€{a.maxHotel}/n · {a.weather} · {a.dateFrom} → {a.dateTo}
                </p>
              </div>
              <button
                onClick={() => deleteAlert(a.id)}
                className="text-slate-500 hover:text-red-400 transition text-sm shrink-0"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
