import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#1E2022]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
        />
      </div>

      {/* Gradient overlay to soften visuals (won't block interaction) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/30 via-black/10 to-[#1E2022]/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Build Futuristic Experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#F0F5F9]/90">
          A modern portfolio template to showcase your work — fast, responsive, and immersive.
        </p>
        <a
          href="#about"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#F0F5F9] text-[#1E2022] px-6 py-3 font-semibold uppercase tracking-wider hover:scale-[1.03] hover:shadow-lg active:scale-100 transition"
        >
          Explore
        </a>
      </div>
    </section>
  );
}
