import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(6,7,20,0.65), rgba(6,7,20,0.95)), url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass mb-10 text-xs sm:text-sm text-brand-200 font-medium animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
          </span>
          Now accepting early clients
        </div>

        {/* Heading */}
        <h1
          className="text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.02] tracking-tight mb-7 animate-fade-up"
          style={{ animationDelay: '0.12s' }}
        >
          Building the{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">Future</span> of Business{' '}
          <br className="hidden lg:block" />
          Technology
        </h1>

        {/* Subtitle */}
        <p
          className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.24s' }}
        >
          We craft high-performance software, provide strategic IT consulting,
          and build systems that scale with your vision.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.36s' }}
        >
          <a
            href="#waitlist"
            className="group w-full sm:w-auto px-9 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-brand-500 to-brand-300 text-surface-dark shadow-lg shadow-brand-500/15 hover:shadow-brand-500/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 animate-pulse-glow"
          >
            Join the Waitlist
            <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-9 py-4 rounded-full text-sm font-semibold border border-white/10 text-white/80 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-20 flex flex-col items-center gap-3 animate-fade-up"
          style={{ animationDelay: '0.48s' }}
        >
          <p className="text-[11px] text-white/20 uppercase tracking-[0.2em] font-medium">
            Trusted by forward-thinking teams
          </p>
          <div className="flex items-center gap-8">
            {['Startup Co', 'FinTech Inc', 'Scale Labs', 'GrowthOS'].map((name) => (
              <span key={name} className="text-xs text-white/[0.12] font-semibold tracking-wider">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-float">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/20" />
      </div>
    </section>
  );
}
