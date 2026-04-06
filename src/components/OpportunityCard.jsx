export default function OpportunityCard({ opp, onSetAlert }) {
  return (
    <div className="bg-base-900 border border-base-700/50 rounded-lg p-4 hover:border-base-600 transition group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-[14px] font-medium text-white leading-tight">
            {opp.destination}
          </p>
          <p className="text-[11px] text-base-500 mt-0.5">{opp.country}</p>
        </div>
        <Badge label={opp.badge} color={opp.badgeColor} />
      </div>

      <div className="flex gap-2 mb-3">
        {/* TODO: fetch from OpenWeatherMap API */}
        <Stat label={opp.weather.condition} value={`${opp.weather.temp}°`} />
        {/* TODO: fetch from Amadeus API */}
        <Stat label={`from ${opp.flight.origin}`} value={`€${opp.flight.price}`} />
        {/* TODO: fetch from Booking/Hotels API */}
        <Stat label="per night" value={`€${opp.hotel.price}`} />
      </div>

      <button
        onClick={() => onSetAlert(opp)}
        className="w-full py-1.5 text-[12px] font-medium text-blue-400 border border-base-600 rounded hover:bg-base-800 hover:border-blue-500/40 transition"
      >
        Set alert
      </button>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="flex-1 bg-base-800 rounded px-2.5 py-2 text-center">
      <p className="text-[14px] font-medium text-white leading-none">{value}</p>
      <p className="text-[10px] text-base-500 mt-1">{label}</p>
    </div>
  )
}

function Badge({ label, color }) {
  const cls = color === 'amber'
    ? 'text-warm-400 bg-warm-500/10'
    : 'text-blue-400 bg-blue-500/10'
  return (
    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${cls}`}>
      {label}
    </span>
  )
}
