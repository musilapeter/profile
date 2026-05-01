export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Tecxify" className="h-20 w-auto opacity-60" />
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Tecxify. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-white/25 hover:text-brand-500 transition-colors duration-300">
            Privacy
          </a>
          <a href="#" className="text-xs text-white/25 hover:text-brand-500 transition-colors duration-300">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
