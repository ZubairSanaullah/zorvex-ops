import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { emoji:'🤝', title:'Integrity First', desc:'Absolute transparency in every operational node and partnership we create.' },
  { emoji:'🎯', title:'Mission Driven', desc:'Your business KPIs become our primary engineering and execution targets.' },
  { emoji:'🔐', title:'Security Obsessed', desc:'Zero-compromise data protection protocols. Your data is our responsibility.' },
  { emoji:'⚡', title:'Speed to Value', desc:'Rapid deployment and execution without sacrificing accuracy or quality.' },
];

const Values = () => (
  <section className="section" style={{ background:'#F3F7F5' }}>
    <div className="container">
      <div style={{ textAlign:'center', marginBottom:72 }}>
        <span className="tag">Our Values</span>
        <h2 className="headline" style={{ margin:'0 auto' }}>The Principles That <span className="hl">Drive Us.</span></h2>
      </div>
      <div className="grid-4">
        {values.map((v,i) => (
          <motion.div key={i} className="card" initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.6, ease:[0.16,1,0.3,1] }}
            style={{ padding:48, textAlign:'center' }}>
            <div style={{ fontSize:'3rem', marginBottom:24 }}>{v.emoji}</div>
            <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'1.2rem', marginBottom:12, color:'#0F172A' }}>{v.title}</h4>
            <p style={{ color:'#6B7280', fontSize:'0.95rem', lineHeight:1.75 }}>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Values;
