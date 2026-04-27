import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name:'Sarah Jenkins', role:'CEO, TechFlow Inc.', init:'SJ', text:'Zorvex Ops transformed our back-office completely. Efficiency doubled within the first quarter — a true enterprise partner.' },
  { name:'Mark Thompson', role:'Director, Cloudscale', init:'MT', text:'The financial accuracy and reporting depth surpasses anything our in-house team produced. A premium-grade solution.' },
  { name:'Elena Rodriguez', role:'Founder, Global Logistics', init:'ER', text:'100% operational uptime on our data pipelines for over 2 years. Reliability is not just a promise — it\'s delivered.' },
];

const Stars = () => (
  <div style={{ display:'flex', gap:4 }}>
    {[...Array(5)].map((_,i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ))}
  </div>
);

const Testimonials = () => (
  <section id="reviews" className="section" style={{ background:'#F3F7F5', position:'relative', overflow:'hidden' }}>
    <div className="glow-orb" style={{ width:600, height:600, background:'radial-gradient(circle,rgba(15,127,79,0.07),transparent 70%)', top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}/>
    <div className="container">
      <div style={{ textAlign:'center', marginBottom:80 }}>
        <span className="tag">Wall of Love</span>
        <h2 className="headline" style={{ margin:'0 auto' }}>Trusted by <span className="hl">Global Leaders.</span></h2>
      </div>

      <div className="grid-3">
        {testimonials.map((t,i) => (
          <motion.div key={i} className="card" initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.12, duration:0.7, ease:[0.16,1,0.3,1] }}
            style={{ padding:48, display:'flex', flexDirection:'column', gap:24 }}>
            <Stars />
            <div style={{ color:'#0F7F4F', opacity:0.2 }}>
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p style={{ color:'#374151', fontSize:'1.08rem', fontStyle:'italic', lineHeight:1.8, flex:1 }}>"{t.text}"</p>
            <div style={{ display:'flex', alignItems:'center', gap:16, paddingTop:24, borderTop:'1px solid #E2EDE8' }}>
              <div className="testimonial-avatar">{t.init}</div>
              <div>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:800, fontSize:'1rem', color:'#0F172A' }}>{t.name}</div>
                <div style={{ fontSize:'0.75rem', fontWeight:800, color:'#0F7F4F', textTransform:'uppercase', letterSpacing:'0.15em' }}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
