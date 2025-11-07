import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-emerald-400 text-white shadow-lg shadow-fuchsia-500/30">
                <Sparkles size={18} />
              </span>
              <span className="font-semibold tracking-tight text-white group-hover:text-cyan-200 transition-colors">Flames Agency</span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_10px_30px_-5px_rgba(255,255,255,0.6)] transition-shadow">
                Get a quote
              </a>
            </nav>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="rounded-lg bg-white text-black px-3 py-2 text-center font-medium">
                  Get a quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
