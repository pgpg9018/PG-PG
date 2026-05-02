/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Deals from './components/Deals';
import SocialProof from './components/SocialProof';
import AppPromo from './components/AppPromo';
import LocationFinder from './components/LocationFinder';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-beige overflow-x-hidden selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Animated Bar */}
        <div className="bg-brand-red py-6 overflow-hidden flex whitespace-nowrap border-y-8 border-brand-charcoal transform -rotate-1 relative z-20 shadow-2xl">
           <div className="animate-marquee inline-block">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-white font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mx-10 flex items-center gap-4">
                  FLAME-GRILLED SINCE 1972 <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                  NO ARTIFICIAL PRESERVATIVES <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                  100% REAL BEEF <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                </span>
              ))}
           </div>
        </div>

        <Menu />
        <Deals />
        <SocialProof />
        <AppPromo />
        <LocationFinder />
      </main>

      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full bg-brand-red text-white py-5 rounded-[2.5rem] font-black uppercase tracking-tighter text-xl shadow-[0_20px_50px_rgba(214,35,0,0.5)] border-4 border-brand-charcoal animate-bounce-subtle">
           ORDER NOW 🔥
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}

