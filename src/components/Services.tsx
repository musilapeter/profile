import { Code2, Palette, ShieldCheck, Cpu } from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Scalable web and mobile applications built with cutting-edge tech stacks to match your business needs.',
    color: 'brand-500',
    bg: 'brand-500/10',
    bgHover: 'brand-500/20',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'User-centric interfaces that combine stunning aesthetics with seamless, intuitive functionality.',
    color: 'accent',
    bg: 'accent/10',
    bgHover: 'accent/20',
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    desc: 'Strategic guidance to optimize your digital infrastructure, security posture, and tech operations.',
    color: 'emerald-400',
    bg: 'emerald-500/10',
    bgHover: 'emerald-500/20',
  },
  {
    icon: Cpu,
    title: 'System Integration',
    desc: 'Connecting your tools and processes into a unified, efficient ecosystem that drives real results.',
    color: 'amber-400',
    bg: 'amber-500/10',
    bgHover: 'amber-500/20',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-28" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Our Core Expertise
          </h2>
          <p className="text-white/35 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Tailored solutions for the modern enterprise, built with precision and scale in mind.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="service-card group glass rounded-2xl p-7 sm:p-8 hover:border-white/[0.12] card-glow hover:-translate-y-2 transition-all duration-500 cursor-default opacity-0 translate-y-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-${s.bg} flex items-center justify-center mb-6 group-hover:bg-${s.bgHover} transition-colors duration-300`}
                >
                  <Icon className={`w-6 h-6 text-${s.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2.5 tracking-tight">{s.title}</h3>
                <p className="text-[13px] text-white/35 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
