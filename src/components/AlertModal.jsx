import { useState, useEffect } from 'react'

const defaultForm = { destination: '', origin: 'Porto', maxFlight: '', maxHotel: '', weather: 'Any', dateFrom: '', dateTo: '' }

export default function AlertModal({ isOpen, onClose, prefill }) {
  const [form, setForm] = useState(defaultForm)

  useEffect(() => {
    if (prefill) {
      setForm({ ...defaultForm, destination: prefill.destination, origin: prefill.flight?.origin || 'Porto' })
    } else {
      setForm(defaultForm)
    }
  }, [prefill, isOpen])

  if (!isOpen) return null

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST alert to backend API
    console.log('Alert created:', form)
    onClose()
  }

  const inputCls = 'w-full px-3 py-2.5 rounded-lg bg-navy-700 border border-navy-600 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-electric transition'
  const labelCls = 'block text-xs font-medium text-slate-400 mb-1.5'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative bg-navy-800 border border-navy-600 rounded-2xl w-full max-w-md p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-white">New Alert</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-white transition">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelCls}>Destination</label>
            <input required value={form.destination} onChange={set('destination')} placeholder="e.g. Barcelona" className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Origin Airport</label>
            <input required value={form.origin} onChange={set('origin')} placeholder="e.g. Porto" className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Max Flight Price (€)</label>
              <input type="number" min="0" value={form.maxFlight} onChange={set('maxFlight')} placeholder="100" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Max Hotel/Night (€)</label>
              <input type="number" min="0" value={form.maxHotel} onChange={set('maxHotel')} placeholder="75" className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls}>Preferred Weather</label>
            <select value={form.weather} onChange={set('weather')} className={inputCls}>
              <option value="Any">Any</option>
              <option value="Sunny">Sunny</option>
              <option value="Warm">Warm</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>From</label>
              <input type="date" value={form.dateFrom} onChange={set('dateFrom')} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>To</label>
              <input type="date" value={form.dateTo} onChange={set('dateTo')} className={inputCls} />
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-electric hover:bg-electric-light text-white font-semibold rounded-lg transition mt-2">
            Create Alert
          </button>
        </form>
      </div>
    </div>
  )
}
