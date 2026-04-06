import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bell, Search, TrendingDown, Sparkles, Plane, MapPin, Calendar, ArrowRight, Check, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { DestinationCard } from '../components/DestinationCard';
import { Badge } from '../components/ui/badge';

const destinations = [
  {
    city: 'Barcelona',
    country: 'Spain',
    temperature: 24,
    weather: 'Sunny',
    flightPrice: 42,
    hotelPrice: 51,
    dateRange: 'Jun 8 – Jun 14',
    imageUrl: 'https://images.unsplash.com/photo-1662494501848-113e87d90cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBjaXR5c2NhcGUlMjBzYWdyYWRhJTIwZmFtaWxpYXxlbnwxfHx8fDE3NzU0ODU2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Match found'
  },
  {
    city: 'Santorini',
    country: 'Greece',
    temperature: 26,
    weather: 'Sunny',
    flightPrice: 67,
    hotelPrice: 89,
    dateRange: 'Jul 15 – Jul 22',
    imageUrl: 'https://images.unsplash.com/photo-1497339047006-39f2b26f005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjB3aGl0ZSUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NzU0ODI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Top rated'
  },
  {
    city: 'Bali',
    country: 'Indonesia',
    temperature: 28,
    weather: 'Partly cloudy',
    flightPrice: 124,
    hotelPrice: 45,
    dateRange: 'Aug 5 – Aug 12',
    imageUrl: 'https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc3NTQ2ODcxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Best deal'
  }
];

export default function Landing() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // TODO: POST to waitlist API
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════ HERO ═══════════ */}
      <div className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1660207766758-a2e5985005ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzc1NDYyOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-950/95" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-5 max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white tracking-tight"
          >
            flio
          </motion.span>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/app">
              <Button variant="outline" className="bg-white/10 text-white border-white/25 hover:bg-white/20 backdrop-blur-sm text-sm">
                Open app
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 px-6 lg:px-16 pt-24 pb-40 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <Badge className="mb-6 bg-white/15 text-white/90 border-white/20 backdrop-blur-sm text-xs tracking-wider">
                <Sparkles className="w-3 h-3 mr-1.5" />
                STOP REFRESHING. START TRAVELING.
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.08] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              The right trip,<br />at the right price,<br />
              <span className="text-orange-400">right now.</span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-white/75 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Set your dream conditions — weather, budget, dates — and Flio watches hundreds of destinations until everything clicks.
            </motion.p>

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-13 bg-white border-none text-base text-gray-900 placeholder:text-gray-400 shadow-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-13 px-7 bg-orange-500 hover:bg-orange-400 text-white font-semibold shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-400/30"
              >
                {submitted ? (
                  <><Check className="w-5 h-5 mr-2" /> You're in!</>
                ) : (
                  <>Join waitlist <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
            </motion.form>

            <motion.p
              className="mt-4 text-sm text-white/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Free forever during beta · No spam · Unsubscribe anytime
            </motion.p>
          </div>
        </div>
      </div>

      {/* ═══════════ DESTINATION CARDS ═══════════ */}
      <div className="relative z-20 -mt-24 px-6 lg:px-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 bg-emerald-100 text-emerald-700 border-emerald-200 text-xs">
              <Zap className="w-3 h-3 mr-1" />
              LIVE ALERTS
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Perfect matches happening right now</h2>
            <p className="text-gray-500 mt-2">These deals matched someone's alert today — yours could be next.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => (
              <DestinationCard key={dest.city} {...dest} delay={0.1 + idx * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <div className="px-6 lg:px-16 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">How it works</h2>
            <p className="text-lg text-gray-500">Three steps. Zero effort.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {[
              { n: '01', title: 'Tell us what you want', desc: 'Pick destinations, set your budget ceiling for flights and hotels, choose your ideal weather.', icon: Search, accent: 'blue' },
              { n: '02', title: 'We watch everything', desc: 'Flio checks flight prices, hotel rates, and weather forecasts daily across all your destinations.', icon: TrendingDown, accent: 'emerald' },
              { n: '03', title: "Book when it's perfect", desc: 'Get one notification when every condition is met. No spam, no false alarms — just the right moment.', icon: Bell, accent: 'orange' },
            ].map((item, idx) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <span className="text-xs font-bold text-gray-300 tracking-widest">{item.n}</span>
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mt-3 mb-4 ${item.accent === 'blue' ? 'bg-blue-100' : item.accent === 'emerald' ? 'bg-emerald-100' : 'bg-orange-100'}`}>
                  <item.icon className={`w-7 h-7 ${item.accent === 'blue' ? 'text-blue-600' : item.accent === 'emerald' ? 'text-emerald-600' : 'text-orange-600'}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ WHY FLIO ═══════════ */}
      <div className="px-6 lg:px-16 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why travelers choose Flio</h2>
              <div className="space-y-5">
                {[
                  { icon: Plane, text: 'Track unlimited destinations at once', color: 'blue' },
                  { icon: MapPin, text: 'Real-time weather and price monitoring', color: 'emerald' },
                  { icon: Calendar, text: 'Flexible date ranges that fit your life', color: 'orange' },
                  { icon: Shield, text: 'No spam — only alerts that matter', color: 'purple' },
                ].map((f, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${f.color === 'blue' ? 'bg-blue-100' : f.color === 'emerald' ? 'bg-emerald-100' : f.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100'}`}>
                      <f.icon className={`w-5 h-5 ${f.color === 'blue' ? 'text-blue-600' : f.color === 'emerald' ? 'text-emerald-600' : f.color === 'orange' ? 'text-orange-600' : 'text-purple-600'}`} />
                    </div>
                    <p className="text-gray-700 font-medium">{f.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1592561849308-3ab187d49881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzU0ODU2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Paris Eiffel Tower"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white p-5 rounded-xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-gray-500 mb-1">Average savings</p>
                <p className="text-3xl font-bold text-emerald-600">€347</p>
                <p className="text-xs text-gray-400 mt-0.5">per trip booked via alert</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════ STATS ═══════════ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
        <div className="relative px-6 lg:px-16 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { number: '200+', label: 'Destinations tracked' },
              { number: '3', label: 'Data sources combined' },
              { number: '1', label: 'Alert is all you need' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-base text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <div className="px-6 lg:px-16 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your next trip is waiting.
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Join the waitlist — we'll tell you when your perfect trip is ready to book.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-13 text-base"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-13 px-7 bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20"
              >
                {submitted ? (
                  <><Check className="w-5 h-5 mr-2" /> You're in!</>
                ) : (
                  <>Get early access <ArrowRight className="w-5 h-5 ml-2" /></>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-lg font-bold text-gray-900 tracking-tight">flio</span>
          <p className="text-sm text-gray-400">© 2026 Flio. Find your perfect trip.</p>
        </div>
      </footer>
    </div>
  );
}
