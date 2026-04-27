import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import About from './components/About';
import Values from './components/Values';
import Services from './components/Services';
import HowWeOperate from './components/HowWeOperate';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
      setShowTop(el.scrollTop > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      <Navbar />

      <main>
        <Hero />
        <Partners />
        <Stats />
        <About />
        <Values />
        <Services />
        <HowWeOperate />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>

      <Footer />

      {/* Back-to-top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: 36,
            right: 36,
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#0F7F4F,#22B573)',
            border: 'none',
            color: '#fff',
            fontSize: '1.4rem',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(15,127,79,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
            transition: 'transform 0.3s, box-shadow 0.3s',
            animation: 'fade-up 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
            e.currentTarget.style.boxShadow = '0 16px 40px rgba(15,127,79,0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(15,127,79,0.35)';
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
