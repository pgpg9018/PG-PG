import { Facebook, Instagram, Twitter, Youtube, Flame } from 'lucide-react';

export default function Footer() {
  const links = [
    { name: 'Menu', items: ['Burgers', 'Sides', 'Drinks', 'Combos'] },
    { name: 'Company', items: ['About Us', 'Careers', 'Sustainability', 'Investors'] },
    { name: 'Legal', items: ['Privacy Policy', 'Terms of Use', 'Accessibility', 'Contact'] },
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          {/* Logo & Info */}
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-brand-red rounded-full p-2">
                <div className="w-8 h-8 rounded-full bg-brand-yellow flex items-center justify-center font-display font-black text-brand-red text-xl">F</div>
              </div>
              <span className="font-display font-black text-3xl tracking-tighter">
                FLAME<span className="text-brand-red">GRILL</span>
              </span>
            </div>
            <p className="text-lg text-white/60 font-medium max-w-sm leading-relaxed">
              Igniting the true flavor of beef since 1972. Our flame-grilled burgers are made to order, exactly how you like it. 
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.map((group) => (
            <div key={group.name} className="space-y-6">
              <h4 className="font-black text-lg tracking-widest text-brand-red uppercase">{group.name}</h4>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/60 font-bold hover:text-brand-yellow transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact Button */}
          <div className="col-span-2 md:col-span-1 space-y-6">
             <h4 className="font-black text-lg tracking-widest text-brand-red uppercase">Newsletter</h4>
             <p className="text-sm text-white/50 font-bold">Stay up to date with our grill-masters.</p>
             <button className="w-full bg-brand-red text-white py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-brand-orange transition-colors">
                SIGN UP
             </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold text-white/30">
            © 2026 FLAMEGRILL IP HOLDER LLC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-white/30 font-bold italic">
            <Flame size={16} fill="currentColor" />
            FLAME-GRILLED IS BETTER
          </div>
        </div>
      </div>
    </footer>
  );
}
