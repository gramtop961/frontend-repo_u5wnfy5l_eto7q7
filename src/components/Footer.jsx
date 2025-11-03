import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#C9D6DF] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xl font-bold text-[#1E2022]">Atlas Portfolio</div>
          <p className="mt-2 text-[#52616B]">Designed for creators who value speed, clarity, and polish.</p>
        </div>
        <div className="md:justify-self-end">
          <nav className="flex flex-wrap items-center gap-6 text-[#1E2022]">
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <span className="w-px h-6 bg-[#52616B]/30" />
            <a href="https://github.com" aria-label="GitHub" className="hover:opacity-80"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:opacity-80"><Mail className="w-5 h-5" /></a>
          </nav>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-[#52616B]">© {new Date().getFullYear()} Atlas Portfolio. All rights reserved.</div>
    </footer>
  );
}
