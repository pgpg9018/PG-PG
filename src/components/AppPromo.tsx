import { motion } from 'motion/react';
import { Smartphone, Download, CheckCircle, Apple, Play } from 'lucide-react';

export default function AppPromo() {
  return (
    <section id="app" className="py-24 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-red rounded-[5rem] overflow-hidden relative min-h-[600px] flex items-center shadow-2xl">
          {/* Content */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20 relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full font-bold text-sm mb-8 uppercase tracking-widest border border-white/30 backdrop-blur-sm">
                <Smartphone size={16} />
                THE FLAME APP
              </div>
              <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">
                GRILL ON THE GO. <br />
                <span className="text-brand-yellow">GET FREE FRIES.</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-md">
                Download the FlameGrill app today and unlock exclusive daily rewards and priority delivery.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  'Daily "App-only" secret offers',
                  'Earn GrillPoints on every order',
                  'Lightning-fast checkout with saved address',
                  'Live flame-tracking from kitchen to door'
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-bold">
                    <CheckCircle className="text-brand-yellow" fill="none" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-charcoal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-3 hover:scale-105 transition-all shadow-lg border border-white/10">
                  <Apple fill="currentColor" />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-60">Download on the</p>
                    <p className="text-lg leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-brand-charcoal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-3 hover:scale-105 transition-all shadow-lg border border-white/10">
                  <Play fill="currentColor" />
                  <div className="text-left">
                    <p className="text-[10px] leading-none opacity-60">Get it on</p>
                    <p className="text-lg leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Visual - Needs absolute positioning for overlap */}
          <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 p-12">
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative h-full flex items-center justify-center translate-x-20"
            >
              {/* Phone Mockup Frame */}
              <div className="w-[300px] aspect-[1/2] bg-brand-charcoal rounded-[3rem] p-3 shadow-2xl relative overflow-hidden ring-[12px] ring-brand-charcoal/50">
                <div className="w-full h-full bg-brand-beige rounded-[2.2rem] overflow-hidden relative">
                   {/* Mock App UI */}
                   <div className="p-6">
                      <div className="w-12 h-12 bg-brand-red rounded-xl mb-4" />
                      <div className="w-3/4 h-8 bg-brand-charcoal/10 rounded-lg mb-8" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-brand-orange/20 rounded-2xl animate-pulse" />
                        <div className="aspect-square bg-brand-yellow/20 rounded-2xl animate-pulse" />
                        <div className="aspect-square bg-brand-red/20 rounded-2xl animate-pulse" />
                        <div className="aspect-square bg-brand-charcoal/10 rounded-2xl animate-pulse" />
                      </div>
                   </div>
                   {/* Home Indicator */}
                   <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-brand-charcoal/20 rounded-full" />
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 left-0 bg-white p-4 rounded-3xl shadow-xl text-brand-red"
              >
                <Download size={32} strokeWidth={3} />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-40 left-10 bg-brand-yellow p-5 rounded-full shadow-xl text-brand-red"
              >
                <CheckCircle size={40} fill="currentColor" className="text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
