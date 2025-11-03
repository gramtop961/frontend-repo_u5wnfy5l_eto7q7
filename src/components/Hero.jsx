import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0f1114]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
        />
      </div>

      {/* Gradient overlay to soften visuals (won't block interaction) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.6)_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Build Futuristic Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-[#F0F5F9]/90"
        >
          A modern portfolio template to showcase your work — fast, responsive, and immersive.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          href="#about"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-[#0f1114] px-6 py-3 font-semibold uppercase tracking-wider hover:scale-[1.03] hover:shadow-lg active:scale-100 transition"
        >
          Explore
        </motion.a>
      </div>
    </section>
  );
}
