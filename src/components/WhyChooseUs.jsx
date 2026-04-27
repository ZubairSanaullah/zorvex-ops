import React from 'react';
import { motion } from 'framer-motion';

const checks = [
  'ISO 27001 Bank-Level Security',
  'Top 3% Global Talent Selection',
  'Real-time Performance Dashboards',
  'API-Driven Workflow Integration',
  'Dedicated Success Managers',
];

const reasons = [
  { emoji:'📈', t:'Infinite Scalability', d:'Ramp up 400% volume in days, not months, without hiring chaos.' },
  { emoji:'🏆', t:'Specialist Expertise', d:'Deep domain knowledge in finance, tech, design, and operations.' },
  { emoji:'⚡', t:'14-Day Deployment', d:'Your dedicated team is integrated and running within two weeks.' },
];

const WhyChooseUs = () => (
  <section className="section" style={{ background:'#FAFCFB', position:'relative', overflow:'hidden' }}>
    <div className="glow-orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(34,181,115,0.07),transparent 70%)', bottom:0, left:0 }}/>
    <div className="container">
      <div className="lg-grid-half">
        <motion.div initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
          <span className="tag">Our Advantage</span>
          <h2 className="headline">Why <span className="hl">Elite Leaders</span><br />Choose Zorvex.</h2>
          <p className="body-text" style={{ marginBottom:40 }}>
            We provide the operational backbone that converts high-potential companies into global enterprises.
          </p>
          <div>
            {checks.map((c,i) => (
              <div key={i} className="check-item">
                <div className="check-dot">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="check-label">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
          {reasons.map((r,i) => (
            <motion.div key={i} className="card" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.15, duration:0.7, ease:[0.16,1,0.3,1] }}
              style={{ padding:'36px 40px', display:'flex', gap:28, alignItems:'flex-start' }}>
              <div style={{ fontSize:'2.5rem', flexShrink:0 }}>{r.emoji}</div>
              <div>
                <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'1.25rem', marginBottom:10 }}>{r.t}</h4>
                <p style={{ color:'#6B7280', fontSize:'0.95rem', lineHeight:1.7 }}>{r.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
