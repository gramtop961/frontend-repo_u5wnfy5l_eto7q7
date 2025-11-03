import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth text-[#52616B] bg-white">
      <Header />
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="bg-[#C9D6DF]">
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2022]">About Us</h2>
              <p className="mt-4 leading-relaxed">
                Atlas Portfolio is a sleek, responsive template crafted for creatives and
                teams to showcase work with impact. It blends modern aesthetics with practical
                performance so your story shines on every device.
              </p>
              <a
                href="#features"
                className="inline-flex mt-6 items-center justify-center rounded-full bg-[#1E2022] text-white px-6 py-3 font-semibold uppercase tracking-wider hover:scale-[1.03] hover:shadow-lg active:scale-100 transition"
              >
                See Features
              </a>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-[#C9D6DF]">
                <img
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop"
                  alt="Futuristic design"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Simple CTA */}
        <section id="contact" className="bg-[#1E2022] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to elevate your portfolio?</h3>
            <p className="mt-3 text-[#F0F5F9]/90">Get started today and present your work with confidence.</p>
            <a
              href="#home"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#F0F5F9] text-[#1E2022] px-6 py-3 font-semibold uppercase tracking-wider hover:scale-[1.03] hover:shadow-lg active:scale-100 transition"
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
