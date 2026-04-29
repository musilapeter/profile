import { useState, type FormEvent } from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formsubmit.co/ajax/musiladev@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: '🚀 New Tecxify Waitlist Signup!',
          message: `New user joined the Tecxify waitlist: ${email}`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 sm:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-500/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 right-0 w-[300px] h-[300px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/15 mb-7 text-xs sm:text-sm text-brand-300 font-medium">
              <Sparkles className="w-4 h-4" />
              Limited early access
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Transform?
            </h2>
            <p className="text-white/35 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed">
              Join our exclusive waitlist for early access, priority onboarding,
              and special launch offers.
            </p>

            {/* Form */}
            {status !== 'success' ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm outline-none focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-brand-500 to-brand-300 text-surface-dark hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap disabled:opacity-60 disabled:cursor-wait cursor-pointer"
                >
                  {status === 'loading'
                    ? 'Sending...'
                    : status === 'error'
                    ? 'Try Again'
                    : 'Secure My Spot'}
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2.5 text-emerald-400 font-semibold text-sm animate-fade-up">
                <CheckCircle className="w-5 h-5" />
                You're on the list! We'll be in touch soon.
              </div>
            )}

            <p className="mt-7 text-[11px] text-white/15 tracking-wide">
              No spam, ever. We respect your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
