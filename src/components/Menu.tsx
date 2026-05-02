import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../constants';

export default function Menu() {
  const [filter, setFilter] = useState<MenuItem['category'] | 'All'>('All');
  const categories: (MenuItem['category'] | 'All')[] = ['All', 'Burgers', 'Combos', 'Sides', 'Drinks'];

  const filteredItems = filter === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === filter);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-4"
          >
            OUR <span className="text-brand-red">LEGENDARY</span> MENU
          </motion.h2>
          <p className="text-xl text-brand-charcoal/60 font-medium">Pick your passion. From flame-grilled classics to crispy sides.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-brand-red text-white shadow-xl scale-105' 
                : 'bg-brand-beige text-brand-charcoal hover:bg-brand-orange/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-brand-beige rounded-[2.5rem] p-6 group transition-all neumorphic relative"
              >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {item.isBestseller && (
                    <span className="bg-brand-yellow text-brand-red px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border border-brand-red/20 shadow-sm">
                      Bestseller
                    </span>
                  )}
                  {item.isVeg ? (
                    <span className="w-6 h-6 rounded-md bg-green-100 border-2 border-green-500 flex items-center justify-center p-0.5">
                       <div className="w-full h-full rounded-full bg-green-500" />
                    </span>
                  ) : (
                    <span className="w-6 h-6 rounded-md bg-red-100 border-2 border-red-500 flex items-center justify-center p-0.5">
                       <div className="w-full h-full rounded-full bg-red-500" />
                    </span>
                  )}
                </div>
                
                <button className="absolute top-6 right-6 z-10 text-brand-charcoal/20 hover:text-brand-red transition-colors">
                  <Heart size={24} />
                </button>

                {/* Product Image */}
                <div className="relative aspect-square mb-6 group-hover:scale-110 transition-transform duration-500">
                   <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain filter drop-shadow-xl"
                    referrerPolicy="no-referrer"
                   />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-brand-yellow mb-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-black text-brand-charcoal">{item.rating}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl tracking-tighter leading-tight group-hover:text-brand-red transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-brand-charcoal/60 font-medium line-clamp-2 min-h-[2.5rem]">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-brand-charcoal/5">
                    <span className="text-2xl font-black tracking-tighter text-brand-charcoal">
                      ${item.price}
                    </span>
                    <motion.button 
                      whileTap={{ scale: 0.9 }}
                      className="bg-brand-charcoal text-white p-3 rounded-2xl hover:bg-brand-red transition-all shadow-lg"
                    >
                      <ShoppingCart size={20} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
