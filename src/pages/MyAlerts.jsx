import { useState } from 'react';
import { Plus, MapPin, Calendar, Euro, Sun, Edit2, Trash2, Bell, BellOff } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import { motion } from 'motion/react';

const initialAlerts = [
  {
    id: '1', destination: 'Barcelona', country: 'Spain', dateRange: 'Jun 8 - Jun 30',
    maxFlightPrice: 80, maxHotelPrice: 60, minTemp: 20, maxTemp: 28, weatherPreference: 'Sunny',
    isActive: true, matchesFound: 3,
    imageUrl: 'https://images.unsplash.com/photo-1662494501848-113e87d90cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBjaXR5c2NhcGUlMjBzYWdyYWRhJTIwZmFtaWxpYXxlbnwxfHx8fDE3NzU0ODU2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '2', destination: 'Santorini', country: 'Greece', dateRange: 'Jul 1 - Jul 31',
    maxFlightPrice: 100, maxHotelPrice: 90, minTemp: 24, maxTemp: 30, weatherPreference: 'Sunny',
    isActive: true, matchesFound: 1,
    imageUrl: 'https://images.unsplash.com/photo-1497339047006-39f2b26f005d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjB3aGl0ZSUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NzU0ODI5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '3', destination: 'Reykjavik', country: 'Iceland', dateRange: 'Sep 15 - Oct 15',
    maxFlightPrice: 120, maxHotelPrice: 130, minTemp: 8, maxTemp: 15, weatherPreference: 'Clear',
    isActive: false, matchesFound: 0,
    imageUrl: 'https://images.unsplash.com/photo-1681834418277-b01c30279693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc1NDc5NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '4', destination: 'Bali', country: 'Indonesia', dateRange: 'Aug 1 - Aug 31',
    maxFlightPrice: 200, maxHotelPrice: 70, minTemp: 26, maxTemp: 32, weatherPreference: 'Tropical',
    isActive: true, matchesFound: 2,
    imageUrl: 'https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc3NTQ2ODcxMXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function MyAlerts() {
  const [alerts, setAlerts] = useState(initialAlerts);

  const toggleAlert = (id) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, isActive: !a.isActive } : a));
  };

  const deleteAlert = (id) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  const activeAlerts = alerts.filter(a => a.isActive).length;
  const totalMatches = alerts.reduce((sum, a) => sum + a.matchesFound, 0);

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Alerts</h1>
            <p className="text-gray-600">Manage your travel alert preferences</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create new alert
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total alerts</p>
                <p className="text-3xl font-bold text-gray-900">{alerts.length}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active alerts</p>
                <p className="text-3xl font-bold text-gray-900">{activeAlerts}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Bell className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Matches found</p>
                <p className="text-3xl font-bold text-gray-900">{totalMatches}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert, idx) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className={`overflow-hidden transition-all duration-300 ${alert.isActive ? 'border-blue-200 bg-white' : 'border-gray-200 bg-gray-50 opacity-75'}`}>
                <div className="flex flex-col lg:flex-row">
                  <div className="relative lg:w-1/4 h-48 lg:h-auto">
                    <img src={alert.imageUrl} alt={alert.destination} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {alert.matchesFound > 0 && (
                      <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white border-none">
                        {alert.matchesFound} {alert.matchesFound === 1 ? 'match' : 'matches'}
                      </Badge>
                    )}
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <h3 className="text-lg font-semibold">{alert.destination}</h3>
                      </div>
                      <p className="text-sm opacity-90">{alert.country}</p>
                    </div>
                  </div>

                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Switch checked={alert.isActive} onCheckedChange={() => toggleAlert(alert.id)} />
                          <span className="text-sm font-medium text-gray-700">
                            {alert.isActive ? 'Active' : 'Paused'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit2 className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => deleteAlert(alert.id)} className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-xs text-gray-600">Date range</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{alert.dateRange}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Euro className="w-4 h-4 text-gray-500" />
                          <span className="text-xs text-gray-600">Max flight</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">€{alert.maxFlightPrice}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Euro className="w-4 h-4 text-gray-500" />
                          <span className="text-xs text-gray-600">Max hotel/night</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">€{alert.maxHotelPrice}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Sun className="w-4 h-4 text-gray-500" />
                          <span className="text-xs text-gray-600">Weather</span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{alert.minTemp}°-{alert.maxTemp}°C, {alert.weatherPreference}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {alerts.length === 0 && (
          <Card className="p-12 text-center bg-white border border-gray-200">
            <BellOff className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No alerts yet</h3>
            <p className="text-gray-600 mb-6">Create your first alert to start tracking travel deals</p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create your first alert
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}
