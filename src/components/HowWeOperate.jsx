import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { n:'01', t:'Strategic Audit', d:'Deep dive into your workflows to uncover every friction point and automation opportunity.' },
  { n:'02', t:'Elite Team Integration', d:'Deploy specialized talent seamlessly integrated with your culture and tech stack.' },
  { n:'03', t:'Scale & Optimize', d:'Continuous performance refinement as your business volume grows exponentially.' },
];

const HowWeOperate = () => (
  <section id="process" className="section" style={{ background:'#F3F7F5', position:'relative', overflow:'hidden' }}>
    <div className="container">
      <div style={{ textAlign:'center', marginBottom:80 }}>
        <span className="tag">Our Methodology</span>
        <h2 className="headline" style={{ margin:'0 auto' }}>The Zorvex <span className="hl">Blueprint.</span></h2>
      </div>

      <div style={{ position:'relative' }}>
        {/* Connector line */}
        <div className="hide-mobile" style={{ position:'absolute', top:50, left:'16.67%', width:'66.67%', height:2, background:'linear-gradient(90deg,#22B573,#7AD9A6,#22B573)', opacity:0.25, zIndex:0 }}/>

        <div className="grid-3" style={{ position:'relative', zIndex:1 }}>
          {steps.map((s,i) => (
            <motion.div key={i} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.2, duration:0.7, ease:[0.16,1,0.3,1] }}
              style={{ textAlign:'center' }}>
              <div className="step-circle">
                <span className="step-num">{s.n}</span>
              </div>
              <h4 style={{ fontFamily:'Outfit,sans-serif', fontSize:'1.35rem', marginBottom:16 }}>{s.t}</h4>
              <p style={{ color:'#6B7280', lineHeight:1.8, maxWidth:280, margin:'0 auto' }}>{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowWeOperate;
