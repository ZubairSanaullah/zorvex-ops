import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title:'Precision Workflows', desc:'Zero-error operational pipelines engineered for scale.' },
  { title:'Top 3% Talent', desc:'Rigorous global vetting ensures only the elite join your team.' },
  { title:'Real-time Analytics', desc:'Every decision backed by live performance dashboards.' },
  { title:'24/7 Global Coverage', desc:'Operations spanning 5 continents, zero downtime.' },
];

const About = () => (
  <section id="about" className="section" style={{ background:'#FAFCFB', position:'relative', overflow:'hidden' }}>
    <div className="glow-orb" style={{ width:600, height:600, background:'radial-gradient(circle,rgba(15,127,79,0.06),transparent 70%)', top:0, right:0 }}/>

    <div className="container">
      <div className="lg-grid-half">
        {/* Left panel */}
        <motion.div initial={{ opacity:0, scale:0.95 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
          <div className="card" style={{ padding:8, borderRadius:48, border:'8px solid #fff', boxShadow:'0 40px 100px rgba(15,127,79,0.14)' }}>
            <div style={{ background:'linear-gradient(135deg,#F3F7F5,#FAFCFB)', borderRadius:40, padding:48 }}>
              <h3 style={{ fontSize:'1.8rem', marginBottom:40 }}>Decades of Expertise.</h3>
              {features.map((f,i) => (
                <div key={i} style={{ display:'flex', gap:20, marginBottom:32 }}>
                  <div style={{
                    width:50, height:50, borderRadius:16, background:'rgba(34,181,115,0.10)',
                    display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                    color:'#0F7F4F', fontSize:'1.2rem', fontFamily:'Outfit,sans-serif', fontWeight:900,
                  }}>
                    {String(i+1).padStart(2,'0')}
                  </div>
                  <div>
                    <h4 style={{ fontSize:'1.05rem', fontFamily:'Outfit,sans-serif', marginBottom:4 }}>{f.title}</h4>
                    <p style={{ color:'#6B7280', fontSize:'0.92rem', lineHeight:1.7 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right copy */}
        <motion.div initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
          <span className="tag">About Zorvex Ops</span>
          <h2 className="headline">Redefining <span className="hl">Operational</span> Excellence.</h2>
          <p className="body-text" style={{ marginBottom:20 }}>
            We were built on a simple truth: high-growth companies are slowed down by the operations that should power them.
          </p>
          <p className="body-text" style={{ marginBottom:48 }}>
            Our ecosystem combines elite global talent with proprietary workflow technology to manage your back-office with uncompromising accuracy.
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginBottom:48 }}>
            {[{n:'10k+',l:'Tasks Daily'},{n:'99%',l:'Accuracy Rate'}].map((s,i) => (
              <div key={i} style={{ padding:'28px 24px', background:'#F3F7F5', borderRadius:20, border:'1px solid #E2EDE8' }}>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:'2.5rem', color:'#0F172A', letterSpacing:'-0.04em' }}>{s.n}</div>
                <div style={{ fontSize:'0.75rem', fontWeight:800, color:'#22B573', textTransform:'uppercase', letterSpacing:'0.2em', marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">Start a Partnership</a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
