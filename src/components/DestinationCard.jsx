import { Plane, Sun, Calendar, Hotel } from 'lucide-react';
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        <div className="relative h-52">
          <img
            src={imageUrl}
            alt={`${city}, ${country}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          {badge && (
            <Badge className="absolute top-3 right-3 bg-orange-500 text-white border-none shadow-md text-xs">
              {badge}
            </Badge>
          )}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-bold leading-tight">{city}</h3>
            <p className="text-sm text-white/80 mt-0.5">{country}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="flex flex-col items-center bg-amber-50 rounded-lg py-3 px-2">
              <Sun className="w-4 h-4 text-amber-500 mb-1" />
              <span className="text-base font-bold text-gray-900">{temperature}°</span>
              <span className="text-[11px] text-gray-500 mt-0.5">{weather}</span>
            </div>
            <div className="flex flex-col items-center bg-blue-50 rounded-lg py-3 px-2">
              <Plane className="w-4 h-4 text-blue-500 mb-1" />
              <span className="text-base font-bold text-gray-900">€{flightPrice}</span>
              <span className="text-[11px] text-gray-500 mt-0.5">Flight</span>
            </div>
            <div className="flex flex-col items-center bg-emerald-50 rounded-lg py-3 px-2">
              <Hotel className="w-4 h-4 text-emerald-500 mb-1" />
              <span className="text-base font-bold text-gray-900">€{hotelPrice}</span>
              <span className="text-[11px] text-gray-500 mt-0.5">Hotel/night</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-t border-gray-100">
            <Calendar className="w-3.5 h-3.5" />
            <span>{dateRange}</span>
            <span className="ml-auto text-emerald-600 font-medium">All conditions met</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
