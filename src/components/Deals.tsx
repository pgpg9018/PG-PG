import { motion } from 'motion/react';
import { Tag, Clock } from 'lucide-react';
import { DEALS } from '../constants';

export default function Deals() {
  return (
    <section id="deals" className="py-24 bg-brand-charcoal text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 blur-[120px] rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 bg-brand-red px-3 py-1 rounded-md text-xs font-black uppercase tracking-widest mb-4"
            >
              <Tag size={14} fill="currentColor" />
              HOT DEALS
            </motion.div>
            <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter leading-none">
              FLAME-FRESH <br />
              <span className="text-brand-orange">OFFERS</span>
            </h2>
          </div>
          <p className="text-xl text-white/60 font-medium max-w-sm mb-2">
            Limited time rewards carefully crafted for our elite grillers. Use codes at checkout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {DEALS.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[3rem] relative group hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-brand-yellow text-brand-red px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                    {deal.badge}
                  </span>
                  {deal.expiry && (
                    <div className="flex items-center gap-2 text-brand-orange font-bold text-sm">
                      <Clock size={16} />
                      {deal.expiry}
                    </div>
                  )}
                </div>

                <h3 className="font-display font-black text-4xl tracking-tighter mb-4 group-hover:text-brand-orange transition-colors">
                  {deal.title}
                </h3>
                <p className="text-lg text-white/60 font-medium mb-8">
                  {deal.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 p-2 bg-white/5 rounded-2xl border border-white/10">
                   <div className="px-6 py-3 font-mono font-black text-2xl tracking-[0.2em] text-brand-yellow uppercase">
                    {deal.code}
                   </div>
                   <button className="bg-brand-red text-white px-8 py-3 rounded-xl font-black uppercase tracking-tighter hover:bg-brand-orange transition-colors">
                    COPY
                   </button>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-brand-orange p-10 rounded-[4rem] text-center text-brand-charcoal relative overflow-hidden"
        >
           <div className="relative z-10">
              <h3 className="font-display font-black text-4xl md:text-5xl tracking-tighter mb-4">WANT MORE FIRE?</h3>
              <p className="text-xl font-bold opacity-80 mb-8 max-w-lg mx-auto">Subscribe to our grill-letter and get a secret reward instantly.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white px-8 py-5 rounded-full font-bold focus:outline-none focus:ring-4 focus:ring-brand-red/20 text-brand-charcoal"
                />
                <button className="bg-brand-charcoal text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-red transition-all shadow-xl">
                  IGNITE
                </button>
              </form>
           </div>
           
           {/* Decor Dots */}
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none grid grid-cols-20 gap-4">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-charcoal" />
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
