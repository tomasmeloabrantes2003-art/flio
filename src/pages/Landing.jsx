import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Bell, Search, TrendingDown, Sparkles, Plane, MapPin, Calendar, ArrowRight, Check } from 'lucide-react';
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
    dateRange: 'Jun 8 - Jun 14',
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
    dateRange: 'Jul 15 - Jul 22',
    imageUrl: 'https://images.unsplash.com/photo-1497339047006-39f2b26f005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjB3aGl0ZSUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NzU0ODI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    city: 'Bali',
    country: 'Indonesia',
    temperature: 28,
    weather: 'Partly cloudy',
    flightPrice: 124,
    hotelPrice: 45,
    dateRange: 'Aug 5 - Aug 12',
    imageUrl: 'https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc3NTQ2ODcxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Best deal'
  }
];

const steps = [
  { step: '1', title: 'Tell us what you want', description: 'Pick destinations, set your budget ceiling for flights and hotels, choose your ideal weather.', icon: Search, color: 'blue' },
  { step: '2', title: 'We watch everything', description: 'Flio checks flight prices, hotel rates, and weather forecasts daily across all your destinations.', icon: TrendingDown, color: 'green' },
  { step: '3', title: "Book when it's perfect", description: 'Get one notification when every condition is met. No spam, no false alarms — just the right moment.', icon: Bell, color: 'purple' },
];

const features = [
  { icon: Plane, text: 'Track unlimited destinations simultaneously' },
  { icon: MapPin, text: 'Real-time weather and price monitoring' },
  { icon: Calendar, text: 'Flexible date ranges that fit your schedule' },
  { icon: Bell, text: 'Instant alerts when all conditions align' },
];

const stats = [
  { number: '200+', label: 'Destinations tracked' },
  { number: '3', label: 'Data sources combined' },
  { number: '1', label: 'Alert is all you need' },
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1660207766758-a2e5985005ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzc1NDYyOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tropical paradise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80" />

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 lg:px-16 py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white"
          >
            flio
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/app">
              <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                Open app
              </Button>
            </Link>
          </motion.div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-6 lg:px-16 pt-20 pb-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30">
                <Sparkles className="w-3 h-3 mr-1" />
                STOP REFRESHING. START TRAVELING.
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              The right trip, at the right price, right now.
            </motion.h1>

            <motion.p
              className="text-xl text-white/90 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Set your dream conditions — weather, budget, dates — and Flio watches hundreds of destinations until everything clicks. One alert. No noise.
            </motion.p>

            {/* Email Signup Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-white/95 backdrop-blur-sm border-none text-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    You're in!
                  </>
                ) : (
                  <>
                    Join waitlist
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Example Alerts Section */}
      <div className="px-6 lg:px-16 -mt-20 pb-20 relative z-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Badge className="mb-3 bg-blue-100 text-blue-700 border-blue-200">
              <Bell className="w-3 h-3 mr-1" />
              ALERT TRIGGERED
            </Badge>
            <h2 className="text-3xl font-bold text-white">Perfect matches happening right now</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest, idx) => (
              <DestinationCard key={dest.city} {...dest} delay={0.7 + idx * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="px-6 lg:px-16 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-600">Three simple steps to your perfect trip</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.color === 'blue' ? 'bg-blue-100' : item.color === 'green' ? 'bg-green-100' : 'bg-purple-100'}`}>
                  <item.icon className={`w-8 h-8 ${item.color === 'blue' ? 'text-blue-600' : item.color === 'green' ? 'text-green-600' : 'text-purple-600'}`} />
                </div>
                <div className={`absolute top-0 -left-2 w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg ${item.color === 'blue' ? 'bg-blue-600' : item.color === 'green' ? 'bg-green-600' : 'bg-purple-600'}`}>
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why travelers love Flio</h2>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-lg text-gray-700 pt-2">{feature.text}</p>
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
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600 mb-2">Average savings</p>
                <p className="text-3xl font-bold text-green-600">€347</p>
                <p className="text-xs text-gray-500 mt-1">per trip</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 lg:px-16 py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl font-bold text-white mb-3">{stat.number}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 lg:px-16 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stop searching. Start traveling.
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of travelers who've found their perfect trip with Flio
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white"
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    You're in!
                  </>
                ) : (
                  <>
                    Get early access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 lg:px-16 py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">flio</div>
          <div className="text-sm text-gray-400">
            © 2026 Flio. Find your perfect trip.
          </div>
        </div>
      </footer>
    </div>
  );
}
