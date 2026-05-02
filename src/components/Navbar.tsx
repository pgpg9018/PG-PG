import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, MapPin, Smartphone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Deals', href: '#deals' },
    { name: 'Locations', href: '#locations', icon: MapPin },
    { name: 'Get App', href: '#app', icon: Smartphone },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-charcoal text-white py-3 shadow-lg' : 'bg-transparent text-brand-charcoal py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-red rounded-full p-2">
            <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-display font-black text-brand-red text-xl">F</div>
          </div>
          <span className={`font-display font-black text-2xl tracking-tighter ${isScrolled ? 'text-white' : 'text-brand-charcoal'}`}>
            FLAME<span className="text-brand-red">GRILL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-bold text-sm uppercase tracking-widest hover:text-brand-red transition-colors flex items-center gap-2"
            >
              {link.icon && <link.icon size={16} />}
              {link.name}
            </a>
          ))}
          <button className="bg-brand-red text-white px-8 py-3 rounded-full font-black uppercase tracking-tighter hover:bg-brand-orange transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl">
            <ShoppingBag size={18} />
            Order Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button className="p-2">
            <ShoppingBag size={24} className={isScrolled ? 'text-white' : 'text-brand-charcoal'} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-charcoal text-white p-6 md:hidden shadow-2xl border-t border-white/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-bold uppercase tracking-widest flex items-center gap-3"
                >
                  {link.icon && <link.icon size={20} className="text-brand-yellow" />}
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-red text-white w-full py-4 rounded-xl font-black uppercase tracking-tighter text-xl mt-2">
                Order Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
