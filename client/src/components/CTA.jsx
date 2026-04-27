import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => (
  <section className="section" style={{ background:'#F3F7F5' }}>
    <div className="container">
      <motion.div className="cta-section" initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ fontSize:'3.5rem', marginBottom:24 }}>🚀</div>
          <h2 style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:'clamp(2.2rem,5vw,4rem)', color:'#fff', letterSpacing:'-0.03em', marginBottom:24, lineHeight:1.1 }}>
            Ready to <span style={{ color:'#7AD9A6' }}>Exponentially</span> Scale Your Operations?
          </h2>
          <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'1.2rem', maxWidth:560, margin:'0 auto 48px', lineHeight:1.8 }}>
            Join 500+ high-growth companies that trust Zorvex Ops for their mission-critical back-office.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:20, justifyContent:'center' }}>
            <a href="#contact" className="btn btn-white" style={{ fontSize:'1.1rem' }}>Book Free Strategy Call</a>
            <a href="mailto:hello@zorvexops.com" className="btn" style={{ background:'rgba(255,255,255,0.12)', color:'#fff', border:'2px solid rgba(255,255,255,0.3)', padding:'18px 44px', fontSize:'1.1rem' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.12)'; }}>
              Speak to Experts
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
