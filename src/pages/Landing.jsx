import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: '🌤️',
    title: 'Smart Weather Matching',
    desc: 'Set your ideal conditions — we monitor forecasts across hundreds of destinations and alert you when they match.',
  },
  {
    icon: '✈️',
    title: 'Flight Price Alerts',
    desc: 'Track prices from your home airport. Get notified the moment fares drop below your threshold.',
  },
  {
    icon: '🔗',
    title: 'Combined Triggers',
    desc: 'Weather + flights + hotels in one alert. Only get pinged when everything lines up perfectly.',
  },
]

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
    <div className="min-h-screen bg-navy-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <span className="text-2xl font-bold text-white tracking-tight">flio</span>
        <Link to="/app" className="text-sm text-electric hover:text-electric-light transition">
          Open App →
        </Link>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Travel when the moment<br />
          <span className="text-electric">is perfect.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
          Flio watches weather, flights, and hotels — then alerts you when your dream trip aligns at the right price.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-10 flex gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-slate-500 focus:outline-none focus:border-electric transition"
            />
            <button type="submit" className="px-6 py-3 bg-electric hover:bg-electric-light text-white font-semibold rounded-lg transition whitespace-nowrap">
              Join the waitlist
            </button>
          </form>
        ) : (
          <p className="mt-10 text-amber font-medium">You're on the list! We'll be in touch.</p>
        )}
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-navy-800 border border-navy-600 rounded-xl p-6 text-left hover:border-electric/40 transition">
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      <footer className="text-center text-xs text-slate-600 pb-8">Flio — built for spontaneous travelers.</footer>
    </div>
  )
}
