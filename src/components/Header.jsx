import React, { useEffect, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[70] transition-all ${
        elevated ? 'shadow-lg bg-white/80 backdrop-blur' : 'bg-white/60 backdrop-blur'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#1E2022] text-white font-bold">A</span>
          <span className="font-semibold tracking-wide text-[#1E2022]">Atlas Portfolio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[#1E2022]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-[#52616B] transition">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[#1E2022] px-4 py-2 text-sm font-medium hover:bg-[#1E2022] hover:text-white transition"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#C9D6DF] text-[#1E2022] hover:bg-[#C9D6DF]/60 transition"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-[#1E2022]"></span>
            <span className="block w-6 h-0.5 bg-[#1E2022]"></span>
            <span className="block w-6 h-0.5 bg-[#1E2022]"></span>
          </div>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[75] bg-black/50 backdrop-blur-sm transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85%] z-[80] bg-white border-l border-[#C9D6DF] transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="p-4 flex items-center justify-between border-b border-[#C9D6DF]">
          <span className="font-semibold text-[#1E2022]">Menu</span>
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[#C9D6DF] text-[#1E2022] hover:bg-[#C9D6DF]/60 transition"
          >
            <span className="sr-only">Close</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block px-3 py-3 rounded-lg text-[#1E2022] hover:bg-[#C9D6DF]/60 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block px-3 py-3 rounded-full text-center bg-[#1E2022] text-white font-semibold"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
