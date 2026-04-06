import { Plus, TrendingUp, Bell, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { OpportunityCard } from '../components/OpportunityCard';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';

const opportunities = [
  {
    city: 'Lisbon', country: 'Portugal', temperature: 24, weather: 'Sunny',
    flightPrice: 45, flightFrom: 'Porto', hotelPrice: 68, dateRange: 'Jun 8 - Jun 14',
    imageUrl: 'https://images.unsplash.com/photo-1442265367415-27e484dcdceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBwb3J0dWdhbCUyMGNvbG9yZnVsJTIwYnVpbGRpbmdzfGVufDF8fHx8MTc3NTQ4NzM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Perfect weather', badgeVariant: 'success'
  },
  {
    city: 'Barcelona', country: 'Spain', temperature: 22, weather: 'Partly cloudy',
    flightPrice: 62, flightFrom: 'Porto', hotelPrice: 55, dateRange: 'Jun 10 - Jun 16',
    imageUrl: 'https://images.unsplash.com/photo-1662494501848-113e87d90cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBjaXR5c2NhcGUlMjBzYWdyYWRhJTIwZmFtaWxpYXxlbnwxfHx8fDE3NzU0ODU2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Great deal', badgeVariant: 'warning'
  },
  {
    city: 'Prague', country: 'Czech Republic', temperature: 18, weather: 'Warm',
    flightPrice: 78, flightFrom: 'Porto', hotelPrice: 42, dateRange: 'Jun 12 - Jun 18',
    imageUrl: 'https://images.unsplash.com/photo-1732841020457-80b1e50ebf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjYXN0bGUlMjBjemVjaCUyMHJlcHVibGljfGVufDF8fHx8MTc3NTQ4NzM0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Budget pick', badgeVariant: 'default'
  }
];

const stats = [
  { label: 'Active alerts', value: '12', icon: Bell, color: 'text-blue-600', bgColor: 'bg-blue-100' },
  { label: 'Opportunities found', value: '47', icon: Sparkles, color: 'text-green-600', bgColor: 'bg-green-100' },
  { label: 'Avg. savings', value: '€245', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100' },
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Your personalized travel opportunities</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            New alert
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-6 bg-white border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Opportunities */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Opportunities</h2>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              Flights from Porto — updated today
            </Badge>
          </div>
          <p className="text-gray-600 mb-6">Based on your active alerts, here are the best matches right now</p>
        </div>

        <div className="space-y-4">
          {opportunities.map((opp, idx) => (
            <OpportunityCard key={opp.city} {...opp} delay={idx * 0.1} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">Load more opportunities</Button>
        </div>
      </div>
    </div>
  );
}
