import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background blobs */}
      <div className="fixed -top-60 -left-60 w-[700px] h-[700px] bg-brand-500/[0.05] rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed -bottom-60 -right-60 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
