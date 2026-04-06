export default function OpportunityCard({ opp, onSetAlert }) {
  const badgeBg = opp.badgeColor === 'amber' ? 'bg-amber/15 text-amber' : 'bg-electric/15 text-electric'

  return (
    <div className="bg-navy-800 border border-navy-600 rounded-xl p-5 hover:border-electric/40 transition">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">
            {opp.flag} {opp.destination}
          </h3>
          <p className="text-xs text-slate-500">{opp.country}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeBg}`}>
          {opp.badge}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4 text-center">
        <div className="bg-navy-700 rounded-lg p-3">
          <p className="text-lg">{opp.weather.icon}</p>
          <p className="text-sm font-medium text-white">{opp.weather.temp}°C</p>
          <p className="text-[11px] text-slate-500">{opp.weather.condition}</p>
        </div>
        <div className="bg-navy-700 rounded-lg p-3">
          {/* TODO: fetch from Amadeus API */}
          <p className="text-lg">✈️</p>
          <p className="text-sm font-medium text-white">€{opp.flight.price}</p>
          <p className="text-[11px] text-slate-500">from {opp.flight.origin}</p>
        </div>
        <div className="bg-navy-700 rounded-lg p-3">
          {/* TODO: fetch from Booking/Hotels API */}
          <p className="text-lg">🏨</p>
          <p className="text-sm font-medium text-white">€{opp.hotel.price}</p>
          <p className="text-[11px] text-slate-500">/night</p>
        </div>
      </div>

      <button
        onClick={() => onSetAlert(opp)}
        className="w-full py-2.5 bg-electric hover:bg-electric-light text-white text-sm font-semibold rounded-lg transition"
      >
        Set Alert
      </button>
    </div>
  )
}
