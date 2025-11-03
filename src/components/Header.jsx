import React, { useEffect, useState } from 'react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
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
    <header className={`fixed top-0 inset-x-0 z-40 transition-shadow ${
      elevated ? 'shadow-md' : 'shadow-none'
    } bg-[#F0F5F9]/90 backdrop-blur`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-wide text-[#1E2022] text-lg">
          Atlas Portfolio
        </a>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#C9D6DF] text-[#1E2022] hover:bg-[#C9D6DF] transition"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-[#1E2022]"></span>
            <span className="block w-6 h-0.5 bg-[#1E2022]"></span>
            <span className="block w-6 h-0.5 bg-[#1E2022]"></span>
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85%] z-50 bg-[#F0F5F9] border-l border-[#C9D6DF] transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="p-4 flex items-center justify-between border-b border-[#C9D6DF]">
          <span className="font-semibold text-[#1E2022]">Navigation</span>
          <button
            aria-label="Close menu"
            onClick={closeMenu}
            className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[#C9D6DF] text-[#1E2022] hover:bg-[#C9D6DF] transition"
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
                className="block px-3 py-3 rounded-lg text-[#1E2022] hover:bg-[#C9D6DF] font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
