import { Plane, Sun, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { motion } from 'motion/react';

export function DestinationCard({
  city,
  country,
  temperature,
  weather,
  flightPrice,
  hotelPrice,
  dateRange,
  imageUrl,
  badge,
  delay = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={`${city}, ${country}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {badge && (
            <Badge className="absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-white border-none">
              {badge}
            </Badge>
          )}
          <div className="absolute bottom-3 left-3 text-white">
            <h3 className="text-xl font-semibold">{city}</h3>
            <p className="text-sm opacity-90">{country}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="flex flex-col items-center justify-center bg-blue-50 rounded-lg p-3">
              <Sun className="w-5 h-5 text-blue-600 mb-1" />
              <span className="text-lg font-semibold text-gray-900">{temperature}°</span>
              <span className="text-xs text-gray-600">{weather}</span>
            </div>

            <div className="flex flex-col items-center justify-center bg-green-50 rounded-lg p-3">
              <Plane className="w-5 h-5 text-green-600 mb-1" />
              <span className="text-lg font-semibold text-gray-900">€{flightPrice}</span>
              <span className="text-xs text-gray-600">Flight</span>
            </div>

            <div className="flex flex-col items-center justify-center bg-purple-50 rounded-lg p-3">
              <Calendar className="w-5 h-5 text-purple-600 mb-1" />
              <span className="text-lg font-semibold text-gray-900">€{hotelPrice}</span>
              <span className="text-xs text-gray-600">Hotel/night</span>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 border-t pt-3">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{dateRange} - All conditions met</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
