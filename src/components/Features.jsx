import React from 'react';
import { Rocket, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="features" className="bg-[#F6F8FA] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">Features</h2>
          <p className="mt-3 text-[#4B5563]">Everything you need to present your work beautifully.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl bg-white border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 hover:scale-[1.01]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#111827] text-white mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
              <p className="mt-2 text-[#4B5563]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
