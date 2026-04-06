import { Plane, MapPin, Calendar, Sun, TrendingDown } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'motion/react';

const badgeClasses = {
  default: 'bg-blue-500 hover:bg-blue-600',
  success: 'bg-green-500 hover:bg-green-600',
  warning: 'bg-orange-500 hover:bg-orange-600'
};

export function OpportunityCard({
  city, country, temperature, weather, flightPrice, flightFrom, hotelPrice, dateRange, imageUrl, badge, badgeVariant = 'default', delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
        <div className="flex flex-col lg:flex-row">
          <div className="relative lg:w-1/3 h-48 lg:h-auto">
            <img src={imageUrl} alt={`${city}, ${country}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {badge && (
              <Badge className={`absolute top-3 right-3 ${badgeClasses[badgeVariant]} text-white border-none`}>
                {badge}
              </Badge>
            )}
          </div>

          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <h3 className="text-2xl font-semibold text-gray-900">{city}</h3>
                </div>
                <p className="text-sm text-gray-600">{country}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Sun className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-gray-600">Weather</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">{temperature}°</p>
                <p className="text-xs text-gray-500">{weather}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Plane className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-gray-600">Flight</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">€{flightPrice}</p>
                <p className="text-xs text-gray-500">from {flightFrom}</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-600">Hotel</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">€{hotelPrice}</p>
                <p className="text-xs text-gray-500">per night</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-gray-600">Dates</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{dateRange}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View details</Button>
              <Button variant="outline" className="flex-1">Set alert</Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
