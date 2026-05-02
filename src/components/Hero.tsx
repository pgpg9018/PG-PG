import { motion } from 'motion/react';
import { Flame, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 overflow-hidden flex items-center bg-[radial-gradient(circle_at_50%_120%,rgba(214,35,0,0.15),transparent)]">
      {/* Animated Flames Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 bg-gradient-to-t from-brand-orange/20 to-transparent rounded-full blur-3xl"
            style={{
              width: `${20 + i * 10}%`,
              left: `${-10 + i * 20}%`,
              height: `${40 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-2 rounded-full font-bold text-sm mb-6 uppercase tracking-widest border border-brand-red/20">
            <Flame size={16} fill="currentColor" />
            Limited Time Offers 🔥
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8 drop-shadow-sm">
            <span className="block">FLAME-</span>
            <span className="block text-brand-red">GRILLED</span>
            <span className="block">PERFECTION.</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-charcoal/80 mb-10 max-w-lg font-medium leading-tight">
            We don't just cook. We ignite the flavor that defined a generation. Delivered hot to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-red text-white px-10 py-5 rounded-full font-black uppercase tracking-tighter text-xl hover:bg-brand-orange transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              Order Now
              <ArrowRight size={24} />
            </button>
            <button className="bg-white text-brand-charcoal px-10 py-5 rounded-full font-black uppercase tracking-tighter text-xl hover:bg-brand-beige transition-all border-4 border-brand-charcoal flex items-center justify-center gap-3">
              <Play size={24} fill="currentColor" />
              View Menu
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
             <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-beige overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?u=${i}`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
             </div>
             <div>
                <p className="font-black text-2xl tracking-tighter leading-none">1.2M+</p>
                <p className="text-sm font-bold opacity-60">Happy Grillerz</p>
             </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative"
        >
          <div className="relative z-10 pointer-events-none select-none">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000" 
              alt="The Big Flame Burger" 
              className="w-full drop-shadow-[0_35px_35px_rgba(214,35,0,0.4)]"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -right-4 bg-brand-yellow text-brand-red p-6 rounded-full font-black text-center shadow-2xl z-20 border-4 border-brand-red"
          >
            <p className="text-sm leading-none uppercase">Starting at</p>
            <p className="text-4xl tracking-tighter leading-none">$8.99</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -left-8 bg-brand-charcoal text-white p-5 rounded-2xl font-black shadow-2xl z-20 flex items-center gap-3 border-l-8 border-brand-red"
          >
            <div className="bg-brand-red rounded-lg p-2">
               <Flame size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs opacity-60 uppercase">Grilled</p>
              <p className="text-lg tracking-tighter">100% BEEF</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
