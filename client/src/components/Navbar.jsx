import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const links = ['About', 'Services', 'Process', 'Reviews', 'Contact'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? '12px 0' : '24px 0',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(226,237,232,0.8)',
            borderRadius: '99px',
            padding: '10px 28px',
            boxShadow: scrolled ? '0 8px 32px rgba(15,127,79,0.10)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
          }}>
            {/* Logo */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: 'linear-gradient(135deg,#0F7F4F,#22B573)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 8, boxShadow: '0 4px 12px rgba(15,127,79,0.3)',
                flexShrink: 0,
              }}>
                <img src="/logo.png" alt="Logo" style={{ width:'100%', height:'100%', objectFit:'contain', filter:'brightness(0) invert(1)' }} />
              </div>
              <span style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:'1.35rem', letterSpacing:'-0.04em', color:'#0F172A' }}>
                Zorvex<span style={{ color:'#0F7F4F' }}>Ops</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hide-mobile" style={{ display:'flex', alignItems:'center', gap:40 }}>
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div style={{ display:'flex', alignItems:'center', gap:16 }}>
              <a href="#contact" className="btn btn-primary hide-mobile" style={{ padding:'12px 28px', fontSize:'0.9rem' }}>
                Get Started
              </a>
              <button onClick={() => setMenuOpen(true)} className="hide-desktop" style={{
                width:44, height:44, borderRadius:12, border:'1.5px solid #E2EDE8',
                background:'transparent', display:'flex', alignItems:'center', justifyContent:'center',
                color:'#0F172A', cursor:'pointer',
              }}>
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="18" x2="19" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mobile-menu" style={{ zIndex: 1001 }}>
            <button onClick={() => setMenuOpen(false)} style={{
              position:'absolute', top:24, right:24, width:48, height:48,
              borderRadius:14, border:'1.5px solid #E2EDE8', background:'transparent',
              display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:'#0F172A',
            }}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>
              </svg>
            </button>
            {links.map((l,i) => (
              <motion.a key={l} href={`#${l.toLowerCase()}`} className="mobile-nav-link"
                initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.08 }}
                onClick={() => setMenuOpen(false)}
              >{l}</motion.a>
            ))}
            <motion.a href="#contact" className="btn btn-primary" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay: 0.4 }} onClick={() => setMenuOpen(false)}>
              Book Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
