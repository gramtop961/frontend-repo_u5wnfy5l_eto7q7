import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="scroll-smooth text-[#111827] bg-white">
      <Header />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f1114]">About Us</h2>
              <p className="mt-4 leading-relaxed text-[#4B5563]">
                Atlas Portfolio is a sleek, responsive template crafted for creatives and
                teams to showcase work with impact. It blends modern aesthetics with practical
                performance so your story shines on every device.
              </p>
              <a
                href="#features"
                className="inline-flex mt-6 items-center justify-center rounded-full bg-[#0f1114] text-white px-6 py-3 font-semibold uppercase tracking-wider hover:scale-[1.03] hover:shadow-lg active:scale-100 transition"
              >
                See Features
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB]">
                <img
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
                  alt="Futuristic design"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <Features />

        {/* CTA */}
        <section id="contact" className="bg-[#0f1114] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to elevate your portfolio?</h3>
            <p className="mt-3 text-white/80">Get started today and present your work with confidence.</p>
            <a
              href="#home"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white text-[#0f1114] px-6 py-3 font-semibold uppercase tracking-wider hover:scale-[1.03] hover:shadow-lg active:scale-100 transition"
            >
              Back to Top
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
