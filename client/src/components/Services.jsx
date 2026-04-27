import React from 'react';
import { motion } from 'framer-motion';

const icons = {
  BarChart: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  Headphones: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  Database: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  Settings: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 1 0 0 14.14M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
  Palette: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  Code: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Search: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Shield: () => <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
};

const services = [
  { title:'Finance & Accounting', desc:'Expert bookkeeping, tax compliance, and CFO-level financial oversight.', Icon:icons.BarChart, colorClass:'icon-blue' },
  { title:'CS Operations', desc:'24/7 omnichannel customer support with 98%+ CSAT scores.', Icon:icons.Headphones, colorClass:'icon-green' },
  { title:'Data Management', desc:'High-accuracy data entry, migration, and BI analytics pipelines.', Icon:icons.Database, colorClass:'icon-purple' },
  { title:'IT Support', desc:'Proactive infrastructure management for remote & office teams.', Icon:icons.Settings, colorClass:'icon-orange' },
  { title:'Graphic Design', desc:'Stunning visual assets, brand identity, and UI/UX excellence.', Icon:icons.Palette, colorClass:'icon-pink' },
  { title:'Full Stack Dev', desc:'Scalable MERN and Next.js applications built by elite engineers.', Icon:icons.Code, colorClass:'icon-cyan' },
  { title:'SEO Optimization', desc:'Dominate search rankings through technical audits and strategy.', Icon:icons.Search, colorClass:'icon-yellow' },
  { title:'Cyber Security', desc:'Enterprise-grade threat detection, compliance, and protection.', Icon:icons.Shield, colorClass:'icon-red' },
];

const Services = () => (
  <section id="services" className="section bg-alt" style={{ background:'#F3F7F5' }}>
    <div className="container">
      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-end', gap:32, marginBottom:72 }}>
        <div>
          <span className="tag">Our Services</span>
          <h2 className="headline">Comprehensive <span className="hl">Outsourcing</span><br />Capabilities</h2>
        </div>
        <p className="body-text" style={{ maxWidth:360 }}>Unlock your potential by offloading complex ops to our specialist teams.</p>
      </div>

      <div className="grid-auto">
        {services.map((s,i) => (
          <motion.div key={i} className="card" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.6, ease:[0.16,1,0.3,1] }}
            style={{ padding:40, display:'flex', flexDirection:'column', gap:20 }}>
            <div className={`icon-box ${s.colorClass}`}>
              <s.Icon />
            </div>
            <div>
              <h3 style={{ fontSize:'1.25rem', marginBottom:10 }}>{s.title}</h3>
              <p style={{ color:'#6B7280', fontSize:'0.95rem', lineHeight:1.7 }}>{s.desc}</p>
            </div>
            <div style={{ marginTop:'auto', display:'flex', alignItems:'center', gap:8, fontWeight:700, color:'#0F172A', fontSize:'0.9rem', cursor:'pointer', transition:'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color='#0F7F4F'}
              onMouseLeave={e => e.currentTarget.style.color='#0F172A'}>
              Learn More
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
