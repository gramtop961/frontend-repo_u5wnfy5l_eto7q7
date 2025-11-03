import React from 'react';
import { Rocket, Star, Shield, Zap } from 'lucide-react';

const features = [
  {
    title: 'Blazing Fast',
    desc: 'Vite + React + Tailwind deliver top-tier performance out of the box.',
    Icon: Zap,
  },
  {
    title: 'Immersive Visuals',
    desc: '3D Spline scenes and subtle motion create a premium feel.',
    Icon: Star,
  },
  {
    title: 'Secure & Reliable',
    desc: 'Best practices baked in so you can ship with confidence.',
    Icon: Shield,
  },
  {
    title: 'Launch Ready',
    desc: 'Optimized for deployment on Vercel and Netlify.',
    Icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#F0F5F9] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2022]">Features</h2>
          <p className="mt-3 text-[#52616B]">Everything you need to present your work beautifully.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-xl bg-white border border-[#C9D6DF] p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#C9D6DF] text-[#1E2022] mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E2022]">{title}</h3>
              <p className="mt-2 text-[#52616B]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
