import { Users, Code, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function TalentNetwork() {
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
    const elements = sectionRef.current?.querySelectorAll('.reveal-elem');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="network" className="relative py-10 sm:py-16 lg:py-24 border-t border-white/[0.04]" ref={sectionRef}>
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-20 reveal-elem opacity-0 translate-y-10 transition-all duration-700">
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            The Tecxify Collective
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Powered by Elite Talent
          </h2>
          <p className="text-white/35 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We don't just rely on an in-house team. Tecxify partners with a vetted, global network of top-tier independent developers. This means our clients get specialized expertise on-demand, and developers get to build amazing products at agreed, fair rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* For Businesses */}
          <div className="glass rounded-3xl p-8 sm:p-10 card-glow reveal-elem opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-8">
              <Users className="w-7 h-7 text-brand-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">For Businesses</h3>
            <p className="text-white/40 leading-relaxed mb-8">
              Tap into a highly curated pool of engineering talent. By leveraging our partner network, we assemble the perfect team for your specific tech stack, ensuring rapid delivery, extreme scalability, and competitive pricing without compromising quality.
            </p>
            <ul className="space-y-3 mb-8">
              {['Vetted engineering talent', 'Faster project turnaround', 'Cost-effective scaling'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors">
              Source talent for your project <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* For Developers */}
          <div className="glass rounded-3xl p-8 sm:p-10 border border-brand-500/10 relative overflow-hidden reveal-elem opacity-0 translate-y-10 transition-all duration-700 delay-200">
            {/* Subtle glow specifically for the dev card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">For Developers</h3>
              <p className="text-white/40 leading-relaxed mb-8">
                Are you a top-tier engineer looking for high-quality projects? Join the Tecxify partner network. We handle the client acquisition, scoping, and project management—you focus on writing exceptional code at rates you agree on.
              </p>
              <ul className="space-y-3 mb-8">
                {['Consistent pipeline of projects', 'Work at your agreed rate', 'Focus on code, not sales'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    {item}
                  </li>
                ))}
              </ul>
              
              {/* Dev Waitlist Trigger - Could link to a specific form or the main waitlist */}
              <a href="#waitlist" className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-surface-dark hover:bg-white/90 transition-colors duration-300">
                Apply to Partner Network
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
