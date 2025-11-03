import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f1114] text-white py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-xl font-bold">Atlas Portfolio</div>
          <p className="mt-2 text-white/70">Designed for creators who value speed, clarity, and polish.</p>
        </div>
        <div className="md:justify-self-end">
          <nav className="flex flex-wrap items-center gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <span className="w-px h-6 bg-white/20" />
            <a href="https://github.com" aria-label="GitHub" className="hover:opacity-80"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:opacity-80"><Mail className="w-5 h-5" /></a>
          </nav>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-white/60">© {new Date().getFullYear()} Atlas Portfolio. All rights reserved.</div>
    </footer>
  );
}
