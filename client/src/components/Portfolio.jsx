import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  { cat:'CS Operations', title:'Global E-commerce Scale-Up', result:'+50k tickets/mo at 98% CSAT', desc:'Helped a global retailer scale customer support 10x during peak seasons without hiring delays.' },
  { cat:'Finance & Data', title:'FinTech Compliance Overhaul', result:'100% compliance in 90 days', desc:'Automated financial reporting and compliance workflows for a Series-B fintech startup.' },
  { cat:'IT & Development', title:'SaaS Platform Build-Out', result:'2× faster deployment cycles', desc:'Architected and shipped a full-stack HR platform serving 200k+ enterprise users globally.' },
];

const Portfolio = () => (
  <section id="portfolio" className="section" style={{ background:'#FAFCFB' }}>
    <div className="container">
      <div style={{ textAlign:'center', marginBottom:80 }}>
        <span className="tag">Case Studies</span>
        <h2 className="headline" style={{ margin:'0 auto' }}>Proven Operational <span className="hl">Impact.</span></h2>
      </div>

      <div className="grid-3">
        {cases.map((c,i) => (
          <motion.div key={i} className="card" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.15, duration:0.7, ease:[0.16,1,0.3,1] }}
            style={{ overflow:'hidden', padding:0 }}>
            {/* Card Header */}
            <div className="portfolio-img" style={{ background:'linear-gradient(135deg,#F3F7F5,#E8F4EE)' }}>
              <div style={{ textAlign:'center', position:'relative', zIndex:1 }}>
                <div style={{ width:64, height:64, borderRadius:20, background:'#fff', boxShadow:'0 8px 24px rgba(15,127,79,0.15)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', fontSize:'1.8rem' }}>
                  {i===0?'📞':i===1?'💰':'💻'}
                </div>
                <span className="badge">{c.cat}</span>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding:40 }}>
              <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'1.2rem', marginBottom:10, color:'#0F172A' }}>{c.title}</h4>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(34,181,115,0.08)', border:'1px solid rgba(34,181,115,0.15)', borderRadius:99, padding:'6px 16px', marginBottom:20 }}>
                <span style={{ width:8, height:8, borderRadius:'50%', background:'#22B573', display:'inline-block' }}></span>
                <span style={{ fontSize:'0.82rem', fontWeight:800, color:'#0F7F4F' }}>{c.result}</span>
              </div>
              <p style={{ color:'#6B7280', fontSize:'0.95rem', lineHeight:1.75, marginBottom:28 }}>{c.desc}</p>
              <button style={{ display:'flex', alignItems:'center', gap:8, fontWeight:800, color:'#0F172A', background:'none', border:'none', cursor:'pointer', fontSize:'0.9rem', padding:0, transition:'color 0.3s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#0F7F4F'}
                onMouseLeave={e=>e.currentTarget.style.color='#0F172A'}>
                Read Case Study
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
