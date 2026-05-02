import { motion } from 'motion/react';
import { MapPin, Search, Navigation } from 'lucide-react';

export default function LocationFinder() {
  return (
    <section id="locations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-charcoal text-white rounded-[5rem] overflow-hidden relative shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-12 lg:p-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-8 leading-none">
                  FIND YOUR <br />
                   <span className="text-brand-yellow">NEAREST FLAME.</span>
                </h2>
                <div className="relative mb-12">
                   <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <Search className="text-brand-charcoal/40" />
                   </div>
                   <input 
                    type="text" 
                    placeholder="Enter City or Zip Code" 
                    className="w-full bg-white text-brand-charcoal px-16 py-6 rounded-3xl font-bold text-xl focus:outline-none focus:ring-8 focus:ring-brand-yellow/20"
                   />
                   <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-brand-red text-white p-4 rounded-2xl hover:bg-brand-orange transition-colors">
                      <Navigation size={24} />
                   </button>
                </div>

                <div className="space-y-6">
                   {[
                    { name: 'FlameGrill Downtown', dist: '0.8 miles', status: 'Open until Midnight' },
                    { name: 'The Flame Hub - North', dist: '2.4 miles', status: '24/7' },
                    { name: 'Sunset Boulevard Branch', dist: '5.1 miles', status: 'Closes in 45 min' }
                   ].map((loc, i) => (
                    <motion.div 
                      key={loc.name}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                       <div className="flex items-start gap-4">
                          <div className="bg-brand-yellow/10 p-3 rounded-xl text-brand-yellow">
                            <MapPin size={24} />
                          </div>
                          <div>
                            <p className="font-black text-xl tracking-tighter leading-none mb-1">{loc.name}</p>
                            <p className="text-sm font-bold text-white/50">{loc.status}</p>
                          </div>
                       </div>
                       <p className="font-black text-brand-orange">{loc.dist}</p>
                    </motion.div>
                   ))}
                </div>
              </motion.div>
            </div>

            {/* Mock Map */}
            <div className="bg-brand-beige min-h-[400px] relative overflow-hidden">
               <div className="absolute inset-0 opacity-40">
                  {/* Mock Map Background via Gradients */}
                  <div className="w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.1)_0%,transparent_100%)] opacity-30" />
                  <div className="absolute top-1/4 left-1/3 w-2 h-32 bg-brand-charcoal/10 -rotate-45" />
                  <div className="absolute top-1/2 right-1/4 w-32 h-2 bg-brand-charcoal/10" />
               </div>
               
               {/* Map Markers */}
               <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute top-1/3 left-1/2"
               >
                  <div className="relative">
                     <div className="absolute -top-12 -left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-2 rounded-xl border-4 border-white shadow-xl whitespace-nowrap font-black text-sm">
                        Downtown Branch
                     </div>
                     <MapPin size={48} className="text-brand-red" fill="currentColor" />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
