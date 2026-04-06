import { useState, useEffect, useRef } from 'react'

const empty = { destination: '', origin: 'Porto', maxFlight: '', maxHotel: '', weather: 'Any', dateFrom: '', dateTo: '' }

export default function AlertModal({ isOpen, onClose, prefill }) {
  const [form, setForm] = useState(empty)
  const closeRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setForm(prefill
        ? { ...empty, destination: prefill.destination, origin: prefill.flight?.origin || 'Porto' }
        : empty
      )
      // Focus trap — move focus into modal
      setTimeout(() => closeRef.current?.focus(), 0)
    }
  }, [prefill, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST alert to backend API
    console.log('Alert created:', form)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Create new alert">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-base-900 border border-base-700/50 rounded-lg w-full max-w-sm p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[14px] font-semibold text-white">New alert</h2>
          <button ref={closeRef} onClick={onClose} className="text-base-500 hover:text-white transition text-sm" aria-label="Close">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Field label="Destination" required value={form.destination} onChange={set('destination')} placeholder="Barcelona" />
          <Field label="Origin" required value={form.origin} onChange={set('origin')} placeholder="Porto" />
          <div className="grid grid-cols-2 gap-2">
            <Field label="Max flight (€)" type="number" min="0" value={form.maxFlight} onChange={set('maxFlight')} placeholder="100" />
            <Field label="Max hotel/night (€)" type="number" min="0" value={form.maxHotel} onChange={set('maxHotel')} placeholder="75" />
          </div>
          <div>
            <label className="block text-[11px] text-base-400 mb-1">Weather preference</label>
            <select value={form.weather} onChange={set('weather')} className="w-full px-2.5 py-2 text-[13px] rounded bg-base-800 border border-base-700 text-white focus:outline-none focus:border-blue-500 transition">
              <option value="Any">Any</option>
              <option value="Sunny">Sunny</option>
              <option value="Warm">Warm</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="From" type="date" value={form.dateFrom} onChange={set('dateFrom')} />
            <Field label="To" type="date" value={form.dateTo} onChange={set('dateTo')} />
          </div>
          <button type="submit" className="w-full py-2 text-[13px] font-medium bg-blue-500 hover:bg-blue-400 text-white rounded transition mt-1">
            Create alert
          </button>
        </form>
      </div>
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-[11px] text-base-400 mb-1">{label}</label>
      <input
        {...props}
        className="w-full px-2.5 py-2 text-[13px] rounded bg-base-800 border border-base-700 text-white placeholder-base-500 focus:outline-none focus:border-blue-500 transition"
      />
    </div>
  )
}
