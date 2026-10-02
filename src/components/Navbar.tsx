import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why' },
    { label: 'Network', href: '#network' },
    { label: 'Waitlist', href: '#waitlist' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface-dark/90 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src="/logo.png"
            alt="Tecxify"
            className="h-24 md:h-28 w-auto"
          />
        </a>

        {/* Desktop Links & Search */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/50 hover:text-white transition-colors duration-300 font-medium uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}

          {/* Search Services */}
          <a
            href="#services"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-brand-500/40 text-white/70 hover:text-white transition-all duration-300 text-xs font-medium tracking-wide group"
            aria-label="Search services"
          >
            <Search size={14} className="text-brand-400 group-hover:scale-110 transition-transform duration-200" />
            <span>Search services</span>
          </a>

          <a
            href="#waitlist"
            className="ml-1 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-brand-500 to-brand-300 text-surface-dark hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile Search & Toggle */}
        <div className="flex items-center gap-2.5 md:hidden">
          <a
            href="#services"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/80 text-xs font-medium"
            aria-label="Search services"
          >
            <Search size={13} className="text-brand-400" />
            <span>Search services</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-dark/98 backdrop-blur-2xl border-t border-white/5 px-6 py-8 flex flex-col items-center gap-5">
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white/80 hover:text-white transition-colors text-sm font-medium"
            aria-label="Search services"
          >
            <Search size={16} className="text-brand-400" />
            <span>Search services</span>
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-white/60 hover:text-white transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 w-full text-center px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-brand-500 to-brand-300 text-surface-dark"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
