import { Zap, Lock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Rapid Delivery',
    desc: 'From concept to launch in weeks, not months. Agile sprints tuned for speed.',
    color: 'text-brand-500',
    bg: 'bg-brand-500/10',
  },
  {
    icon: Lock,
    title: 'Security-First',
    desc: 'Every line of code is built with enterprise-grade security standards baked in.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'Ongoing maintenance, monitoring, and a direct line to your engineering team.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '3x', label: 'Faster Delivery' },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-16 sm:py-20 lg:py-28 border-t border-white/[0.04]">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-brand-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Why Tecxify
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
              Technology that{' '}
              <span className="gradient-text">actually works</span> for your
              business.
            </h2>
            <p className="text-white/35 text-base sm:text-lg leading-relaxed mb-12">
              We're not just another dev shop. We partner with ambitious
              companies who want technology that's as serious as their growth
              ambitions.
            </p>

            <div className="space-y-7">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mt-0.5`}
                    >
                      <Icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{f.title}</h4>
                      <p className="text-white/35 text-[13px] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-7 sm:p-9 text-center card-glow hover:-translate-y-1 transition-all duration-500"
              >
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-2 tracking-tight">
                  {s.value}
                </p>
                <p className="text-[11px] sm:text-xs text-white/35 uppercase tracking-wider font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
