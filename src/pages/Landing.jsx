import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // TODO: POST to waitlist API
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-base-950 flex flex-col">
      <nav className="flex items-center justify-between px-5 py-4 max-w-5xl w-full mx-auto">
        <span className="text-[15px] font-semibold text-base-300 tracking-tight">flio</span>
        <Link
          to="/app"
          className="text-[13px] text-base-500 hover:text-base-300 transition"
        >
          Open app
        </Link>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-5 pb-20">
        <div className="max-w-lg w-full">
          <p className="text-[13px] text-blue-500 font-medium mb-3 tracking-wide uppercase">
            Travel alerts, simplified
          </p>
          <h1 className="text-[32px] sm:text-[40px] font-semibold text-base-300 leading-[1.15] tracking-tight">
            Know when to book.
          </h1>
          <p className="mt-3 text-base-400 text-[15px] leading-relaxed max-w-sm">
            Flio monitors weather, flights, and hotel prices for your dream destinations — then pings you when everything aligns.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 flex gap-2 max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-[13px] rounded-md bg-base-900 border border-base-700 text-base-300 placeholder-base-500 focus:outline-none focus:border-blue-500 transition"
              />
              <button
                type="submit"
                className="px-4 py-2 text-[13px] font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md transition"
              >
                Join waitlist
              </button>
            </form>
          ) : (
            <p className="mt-6 text-[13px] text-green-500">You're in. We'll email you when it's ready.</p>
          )}

          <div className="mt-14 grid gap-6">
            <Feature
              label="Weather matching"
              desc="Set target conditions — sun, warmth, dry days. We check forecasts across hundreds of cities."
            />
            <Feature
              label="Price drops"
              desc="Flight and hotel price thresholds. Get notified only when both drop below your limit."
            />
            <Feature
              label="Combined triggers"
              desc="Weather + price in a single alert. No more checking three apps before booking."
            />
          </div>
        </div>
      </div>

      <footer className="text-center text-[11px] text-base-500 pb-5">
        flio
      </footer>
    </div>
  )
}

function Feature({ label, desc }) {
  return (
    <div className="flex gap-3">
      <div className="w-1 rounded-full bg-blue-500/30 shrink-0" />
      <div>
        <p className="text-[13px] font-medium text-base-300">{label}</p>
        <p className="text-[13px] text-base-400 mt-0.5">{desc}</p>
      </div>
    </div>
  )
}
