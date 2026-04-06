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
      {/* Nav */}
      <nav className="flex items-center justify-between px-5 py-4 max-w-5xl w-full mx-auto">
        <span className="text-[15px] font-semibold text-base-300 tracking-tight">flio</span>
        <Link to="/app" className="text-[13px] text-base-500 hover:text-base-300 transition">
          Open app
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl w-full mx-auto px-5 pt-16 sm:pt-24 pb-12">
        <div className="max-w-xl">
          <p className="text-[13px] text-blue-500 font-medium mb-4 tracking-wide uppercase">
            Stop refreshing. Start traveling.
          </p>
          <h1 className="text-[36px] sm:text-[48px] font-bold text-base-300 leading-[1.1] tracking-tight">
            The right trip, at the<br />right price, right now.
          </h1>
          <p className="mt-4 text-base-400 text-[16px] leading-relaxed max-w-md">
            Set your dream conditions — weather, budget, dates — and Flio watches hundreds of destinations until everything clicks. One alert. No noise.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 flex gap-2 max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2.5 text-[13px] rounded-md bg-base-900 border border-base-700 text-base-300 placeholder-base-500 focus:outline-none focus:border-blue-500 transition"
              />
              <button type="submit" className="px-5 py-2.5 text-[13px] font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md transition">
                Join waitlist
              </button>
            </form>
          ) : (
            <div className="mt-8 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-md inline-block">
              <p className="text-[13px] text-green-500 font-medium">You're in — we'll reach out soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Live preview card */}
      <section className="max-w-5xl w-full mx-auto px-5 pb-16">
        <div className="bg-base-900 border border-base-700 rounded-lg p-5 max-w-md">
          <p className="text-[11px] text-base-500 uppercase tracking-wide mb-3">Alert triggered</p>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[20px] font-semibold text-base-300">Barcelona</span>
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-warm-500/10 text-warm-400">Match found</span>
          </div>
          <div className="flex gap-2 mb-3">
            <MiniStat value="24°" label="Sunny" />
            <MiniStat value="€42" label="Flight" />
            <MiniStat value="€51" label="Hotel/night" />
          </div>
          <p className="text-[12px] text-base-400">Jun 8 – Jun 14 · All conditions met</p>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl w-full mx-auto px-5 pb-20">
        <h2 className="text-[13px] text-base-500 uppercase tracking-wide mb-6">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <Step num="1" title="Tell us what you want" desc="Pick destinations, set your budget ceiling for flights and hotels, choose your ideal weather." />
          <Step num="2" title="We watch everything" desc="Flio checks flight prices, hotel rates, and weather forecasts daily across all your destinations." />
          <Step num="3" title="Book when it's perfect" desc="Get one notification when every condition is met. No spam, no false alarms — just the right moment." />
        </div>
      </section>

      {/* Social proof / numbers */}
      <section className="border-t border-base-700">
        <div className="max-w-5xl w-full mx-auto px-5 py-12 flex flex-wrap gap-8 sm:gap-16">
          <NumStat value="200+" label="Destinations tracked" />
          <NumStat value="3" label="Data sources combined" />
          <NumStat value="1" label="Alert is all you need" />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl w-full mx-auto px-5 py-16 text-center">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-base-300 tracking-tight">
          Stop planning. Start going.
        </h2>
        <p className="mt-2 text-base-400 text-[14px] max-w-sm mx-auto">
          Join the waitlist and be the first to try Flio when we launch.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-6 flex gap-2 max-w-xs mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-3 py-2.5 text-[13px] rounded-md bg-base-900 border border-base-700 text-base-300 placeholder-base-500 focus:outline-none focus:border-blue-500 transition"
            />
            <button type="submit" className="px-5 py-2.5 text-[13px] font-medium bg-blue-500 hover:bg-blue-400 text-white rounded-md transition">
              Join
            </button>
          </form>
        ) : (
          <p className="mt-6 text-[13px] text-green-500">You're on the list!</p>
        )}
      </section>

      <footer className="text-center text-[11px] text-base-500 pb-5">
        flio — built for spontaneous travelers
      </footer>
    </div>
  )
}

function Step({ num, title, desc }) {
  return (
    <div>
      <span className="text-[12px] font-semibold text-blue-500">{num}</span>
      <h3 className="text-[14px] font-medium text-base-300 mt-1">{title}</h3>
      <p className="text-[13px] text-base-400 mt-1 leading-relaxed">{desc}</p>
    </div>
  )
}

function MiniStat({ value, label }) {
  return (
    <div className="flex-1 bg-base-800 rounded px-2.5 py-2 text-center">
      <p className="text-[14px] font-medium text-base-300 leading-none">{value}</p>
      <p className="text-[10px] text-base-500 mt-1">{label}</p>
    </div>
  )
}

function NumStat({ value, label }) {
  return (
    <div>
      <p className="text-[24px] font-semibold text-base-300">{value}</p>
      <p className="text-[12px] text-base-500 mt-0.5">{label}</p>
    </div>
  )
}
