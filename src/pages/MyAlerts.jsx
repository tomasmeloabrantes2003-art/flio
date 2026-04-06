import { useState } from 'react'
import { mockAlerts } from '../data/mock'

export default function MyAlerts() {
  // TODO: fetch alerts from backend API
  const [alerts, setAlerts] = useState(mockAlerts)

  const deleteAlert = (id) => {
    // TODO: DELETE alert via API
    setAlerts(alerts.filter((a) => a.id !== id))
  }

  if (alerts.length === 0) {
    return (
      <div className="py-16 text-center" role="status">
        <p className="text-[13px] text-base-500">No alerts yet.</p>
        <p className="text-[12px] text-base-500 mt-1">Create one from the Dashboard.</p>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-[15px] font-semibold text-base-300 mb-4">Alerts</h1>
      <div className="space-y-1.5">
        {alerts.map((a) => (
          <div
            key={a.id}
            className="flex items-center justify-between gap-3 px-3 py-2.5 rounded bg-base-900 border border-base-700 hover:border-base-600 transition"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-[13px] font-medium text-base-300">{a.destination}</span>
              <span
                className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                  a.status === 'triggered'
                    ? 'text-warm-400 bg-warm-500/10'
                    : 'text-green-400 bg-green-500/10'
                }`}
              >
                {a.status === 'triggered' ? 'Triggered' : 'Active'}
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[11px] text-base-500 hidden sm:block">
                ≤€{a.maxFlight} flight · ≤€{a.maxHotel}/n · {a.weather} · {a.dateFrom}
              </span>
              <button
                onClick={() => deleteAlert(a.id)}
                className="text-[11px] text-base-500 hover:text-red-400 transition"
                aria-label={`Delete alert for ${a.destination}`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
