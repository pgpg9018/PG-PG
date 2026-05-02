import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Jason M.',
    rating: 5,
    text: "The smokey flavor is unparalleled. Best burger I've had in years. The Flame King Double is a spiritual experience.",
    image: 'https://i.pravatar.cc/150?u=jason'
  },
  {
    name: 'Sarah L.',
    rating: 5,
    text: "App delivery was so fast the fries were still crunchy. Love the secret deals on Wednesdays!",
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Mike R.',
    rating: 5,
    text: "Finally a place that knows how to grill! No soggy patties, just pure fire-grilled goodness.",
    image: 'https://i.pravatar.cc/150?u=mike'
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#FFB100" className="text-brand-yellow" size={32} />
            ))}
          </motion.div>
          <h2 className="font-display font-black text-5xl md:text-7xl tracking-tighter mb-4 uppercase">
            LOVED BY <span className="text-brand-orange">MILLIONS.</span>
          </h2>
          <p className="text-xl text-brand-charcoal/60 font-medium max-w-2xl">
            Don't take our word for it. Join the community of flavor fanatics who've discovered the truth about flame-grilled perfection.
          </p>
        </div>

        {/* Marquee or Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-brand-beige p-10 rounded-[3rem] relative group"
            >
              <div className="absolute -top-6 left-10 text-brand-red bg-white p-4 rounded-2xl shadow-lg border border-brand-red/10">
                <Quote size={32} fill="currentColor" />
              </div>
              
              <div className="flex flex-col h-full mt-4">
                <p className="text-xl font-bold text-brand-charcoal leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-black text-xl tracking-tighter leading-none">{t.name}</p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={12} fill="#FFB100" className="text-brand-yellow" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 grayscale opacity-40">
           <span className="font-display font-black text-4xl tracking-tighter">NYTimes</span>
           <span className="font-display font-black text-4xl tracking-tighter italic">VOGUE</span>
           <span className="font-display font-black text-4xl tracking-tighter">FORBES</span>
           <span className="font-display font-black text-4xl tracking-tighter">TECHCRUNCH</span>
        </div>
      </div>
    </section>
  );
}
