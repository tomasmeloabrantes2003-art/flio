import { useState } from 'react';
import { Grid, Globe as GlobeIcon, MapPin, Search, SlidersHorizontal, TrendingDown, Plane, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { motion, AnimatePresence } from 'motion/react';

const deals = [
  { id: '1', city: 'Barcelona', country: 'Spain', flightPrice: 62, hotelPrice: 55, weather: 'Sunny', temperature: 24, savings: 45, imageUrl: 'https://images.unsplash.com/photo-1662494501848-113e87d90cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBjaXR5c2NhcGUlMjBzYWdyYWRhJTIwZmFtaWxpYXxlbnwxfHx8fDE3NzU0ODU2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080', region: 'Europe' },
  { id: '2', city: 'Prague', country: 'Czech Republic', flightPrice: 78, hotelPrice: 42, weather: 'Warm', temperature: 18, savings: 32, imageUrl: 'https://images.unsplash.com/photo-1732841020457-80b1e50ebf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjYXN0bGUlMjBjemVjaCUyMHJlcHVibGljfGVufDF8fHx8MTc3NTQ4NzM0NHww&ixlib=rb-4.1.0&q=80&w=1080', region: 'Europe' },
  { id: '3', city: 'Dubai', country: 'UAE', flightPrice: 145, hotelPrice: 89, weather: 'Hot', temperature: 35, savings: 67, imageUrl: 'https://images.unsplash.com/photo-1628155092735-d1146f19cd58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBidXJqJTIwa2hhbGlmYXxlbnwxfHx8fDE3NzU0MzgwMzB8MA&ixlib=rb-4.1.0&q=80&w=1080', region: 'Middle East' },
  { id: '4', city: 'Reykjavik', country: 'Iceland', flightPrice: 92, hotelPrice: 110, weather: 'Cool', temperature: 12, savings: 28, imageUrl: 'https://images.unsplash.com/photo-1681834418277-b01c30279693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc1NDc5NDI4fDA&ixlib=rb-4.1.0&q=80&w=1080', region: 'Europe' },
  { id: '5', city: 'Rome', country: 'Italy', flightPrice: 54, hotelPrice: 72, weather: 'Sunny', temperature: 26, savings: 51, imageUrl: 'https://images.unsplash.com/photo-1698103182362-51abdc45d008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtJTIwaXRhbHl8ZW58MXx8fHwxNzc1NDE1NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080', region: 'Europe' },
  { id: '6', city: 'Marrakech', country: 'Morocco', flightPrice: 68, hotelPrice: 45, weather: 'Sunny', temperature: 28, savings: 38, imageUrl: 'https://images.unsplash.com/photo-1596750320291-a082a23dcc19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJyYWtlY2glMjBtb3JvY2NvJTIwbWFya2V0fGVufDF8fHx8MTc3NTQxOTc5N3ww&ixlib=rb-4.1.0&q=80&w=1080', region: 'Africa' },
  { id: '7', city: 'Bali', country: 'Indonesia', flightPrice: 198, hotelPrice: 52, weather: 'Tropical', temperature: 30, savings: 89, imageUrl: 'https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc3NTQ2ODcxMXww&ixlib=rb-4.1.0&q=80&w=1080', region: 'Asia' },
  { id: '8', city: 'Tokyo', country: 'Japan', flightPrice: 245, hotelPrice: 95, weather: 'Mild', temperature: 22, savings: 112, imageUrl: 'https://images.unsplash.com/photo-1583915223588-7d88ebf23414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwbmlnaHQlMjBjaXR5fGVufDF8fHx8MTc3NTQ4MDkyOHww&ixlib=rb-4.1.0&q=80&w=1080', region: 'Asia' },
];

const regions = ['all', 'Europe', 'Asia', 'Africa', 'Middle East', 'Americas'];

function getSavingsColor(savings) {
  if (savings > 60) return 'bg-green-500';
  if (savings > 40) return 'bg-orange-500';
  return 'bg-blue-500';
}

export default function Explore() {
  const [viewMode, setViewMode] = useState('globe');
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filteredDeals = selectedRegion === 'all' ? deals : deals.filter(d => d.region === selectedRegion);

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Deals</h1>
              <p className="text-gray-600">Discover amazing travel opportunities around the world</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant={viewMode === 'globe' ? 'default' : 'outline'} onClick={() => setViewMode('globe')} className={viewMode === 'globe' ? 'bg-blue-600 hover:bg-blue-700' : ''}>
                <GlobeIcon className="w-4 h-4 mr-2" />Map
              </Button>
              <Button variant={viewMode === 'cards' ? 'default' : 'outline'} onClick={() => setViewMode('cards')} className={viewMode === 'cards' ? 'bg-blue-600 hover:bg-blue-700' : ''}>
                <Grid className="w-4 h-4 mr-2" />Cards
              </Button>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input placeholder="Search destinations..." className="pl-10 h-11" />
            </div>
            <Button variant="outline" className="h-11">
              <SlidersHorizontal className="w-4 h-4 mr-2" />Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-auto">
        <AnimatePresence mode="wait">
          {viewMode === 'globe' ? (
            <motion.div key="globe" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full w-full p-8">
              <div className="max-w-7xl mx-auto h-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
                  <div className="lg:col-span-1">
                    <Card className="p-4 bg-white border border-gray-200 sticky top-0">
                      <h3 className="font-semibold text-gray-900 mb-4">Regions</h3>
                      <div className="space-y-2">
                        {regions.map(region => (
                          <button key={region} onClick={() => setSelectedRegion(region)} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedRegion === region ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            {region === 'all' ? 'All Regions' : region}
                          </button>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h3 className="font-semibold text-sm text-gray-900 mb-3">Savings</h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500" /><span className="text-xs text-gray-600">€60+</span></div>
                          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500" /><span className="text-xs text-gray-600">€40-60</span></div>
                          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-xs text-gray-600">Under €40</span></div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="lg:col-span-3">
                    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 h-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full auto-rows-min">
                        {filteredDeals.map((deal, idx) => (
                          <motion.div key={deal.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }} onClick={() => setSelectedDeal(deal)} className="cursor-pointer">
                            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white h-full">
                              <div className="relative h-32">
                                <img src={deal.imageUrl} alt={deal.city} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${getSavingsColor(deal.savings)} ring-2 ring-white`} />
                                <div className="absolute bottom-2 left-2 text-white">
                                  <div className="flex items-center gap-1"><MapPin className="w-3 h-3" /><h3 className="text-sm font-semibold">{deal.city}</h3></div>
                                  <p className="text-xs opacity-90">{deal.country}</p>
                                </div>
                              </div>
                              <div className="p-3">
                                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                                  <div className="flex items-center gap-1"><Plane className="w-3 h-3 text-blue-600" /><span className="font-semibold">€{deal.flightPrice}</span></div>
                                  <div className="flex items-center gap-1"><TrendingDown className="w-3 h-3 text-green-600" /><span className="font-semibold">€{deal.hotelPrice}</span></div>
                                  <div className="flex items-center gap-1"><Sun className="w-3 h-3 text-orange-600" /><span className="font-semibold">{deal.temperature}°</span></div>
                                </div>
                                <Badge className="w-full justify-center bg-green-50 text-green-700 border-green-200 hover:bg-green-100 text-xs">
                                  Save €{deal.savings}
                                </Badge>
                              </div>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Deal modal */}
              <AnimatePresence>
                {selectedDeal && (
                  <>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-40" onClick={() => setSelectedDeal(null)} />
                    <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50">
                      <Card className="overflow-hidden bg-white shadow-2xl mx-4">
                        <div className="relative h-56">
                          <img src={selectedDeal.imageUrl} alt={selectedDeal.city} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <button onClick={() => setSelectedDeal(null)} className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white text-xl" aria-label="Close">×</button>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-2xl font-bold mb-1">{selectedDeal.city}</h2>
                            <p className="text-sm opacity-90">{selectedDeal.country}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-blue-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2"><Plane className="w-4 h-4 text-blue-600" /><p className="text-xs text-gray-600">Flight</p></div>
                              <p className="text-2xl font-bold text-gray-900">€{selectedDeal.flightPrice}</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2"><TrendingDown className="w-4 h-4 text-green-600" /><p className="text-xs text-gray-600">Hotel/night</p></div>
                              <p className="text-2xl font-bold text-gray-900">€{selectedDeal.hotelPrice}</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-4">
                              <div className="flex items-center gap-2 mb-2"><Sun className="w-4 h-4 text-orange-600" /><p className="text-xs text-gray-600">Weather</p></div>
                              <p className="text-lg font-semibold text-gray-900">{selectedDeal.weather} {selectedDeal.temperature}°</p>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-4">
                              <p className="text-xs text-gray-600 mb-2">You save</p>
                              <p className="text-2xl font-bold text-green-600">€{selectedDeal.savings}</p>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">View full details</Button>
                            <Button variant="outline" className="flex-1">Set alert</Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div key="cards" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full overflow-auto p-8">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deals.map((deal, idx) => (
                    <motion.div key={deal.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                        <div className="relative h-48">
                          <img src={deal.imageUrl} alt={`${deal.city}, ${deal.country}`} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600 text-white border-none">Save €{deal.savings}</Badge>
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="flex items-center gap-2 mb-1"><MapPin className="w-4 h-4" /><h3 className="text-lg font-semibold">{deal.city}</h3></div>
                            <p className="text-sm opacity-90">{deal.country}</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div><p className="text-xs text-gray-600 mb-1">Flight</p><p className="text-lg font-semibold text-gray-900">€{deal.flightPrice}</p></div>
                            <div><p className="text-xs text-gray-600 mb-1">Hotel/night</p><p className="text-lg font-semibold text-gray-900">€{deal.hotelPrice}</p></div>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                            <span>{deal.weather}</span><span>{deal.temperature}°C</span>
                          </div>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">View details</Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
