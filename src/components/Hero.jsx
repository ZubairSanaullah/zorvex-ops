import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="section" style={{ minHeight:'100vh', display:'flex', alignItems:'center', paddingTop:140, background:'#FAFCFB', position:'relative', overflow:'hidden' }}>
    {/* Decorative orbs */}
    <div className="glow-orb" style={{ width:700, height:700, background:'radial-gradient(circle,rgba(34,181,115,0.12),transparent 70%)', top:-200, right:-150 }}/>
    <div className="glow-orb" style={{ width:500, height:500, background:'radial-gradient(circle,rgba(15,127,79,0.08),transparent 70%)', bottom:-100, left:-100 }}/>

    <div className="container" style={{ position:'relative', zIndex:1 }}>
      <div className="lg-grid-half">
        {/* Left: Copy */}
        <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.9, ease:[0.16,1,0.3,1] }}>
          <span className="tag">🌟 Enterprise Back-Office Excellence</span>

          <h1 style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:'clamp(2.8rem,6vw,5rem)', lineHeight:1.02, letterSpacing:'-0.04em', color:'#0F172A', marginBottom:28 }}>
            Accelerate Your<br />
            Business with<br />
            <span style={{ color:'#0F7F4F' }}>Next-Gen</span> Ops.
          </h1>

          <p className="body-text" style={{ marginBottom:44, fontSize:'1.15rem' }}>
            World-class outsourcing designed for high-growth companies. Finance, IT, CS, Design and more — all under one premium roof.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:16, marginBottom:56 }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize:'1.05rem' }}>Book Free Consultation</a>
            <a href="#services" className="btn btn-secondary" style={{ fontSize:'1.05rem' }}>Explore Services</a>
          </div>

          {/* Trust badges */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:24, borderTop:'1px solid #E2EDE8', paddingTop:32 }}>
            {[
              { n:'500+', l:'Global Clients' },
              { n:'99%', l:'Accuracy Rate' },
              { n:'24/7', l:'Expert Support' },
            ].map((s,i) => (
              <div key={i} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'Outfit,sans-serif', fontWeight:900, fontSize:'1.6rem', color:'#0F172A', letterSpacing:'-0.04em' }}>{s.n}</div>
                <div style={{ fontSize:'0.75rem', fontWeight:700, color:'#22B573', textTransform:'uppercase', letterSpacing:'0.15em' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual card */}
        <motion.div className="hide-mobile" initial={{ opacity:0, scale:0.88, rotate:2 }} animate={{ opacity:1, scale:1, rotate:0 }} transition={{ duration:1.2, ease:[0.16,1,0.3,1] }}
          style={{ position:'relative' }}>
          <div style={{
            background:'#fff', borderRadius:40, padding:8,
            boxShadow:'0 40px 100px rgba(15,127,79,0.18)',
            border:'1px solid #E2EDE8', position:'relative',
          }}>
            <div style={{
              background:'linear-gradient(135deg,#F3F7F5 0%,#FAFCFB 100%)',
              borderRadius:34, padding:'60px 40px',
              display:'flex', alignItems:'center', justifyContent:'center', minHeight:480,
            }}>
              <img src="/logo.png" alt="Zorvex Ops" style={{ width:'100%', maxWidth:340, filter:'drop-shadow(0 20px 40px rgba(15,127,79,0.15))' }} />
            </div>
          </div>

          {/* Floating stat cards */}
          <motion.div animate={{ y:[-8,8,-8] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
            className="float-card" style={{ top:40, left:-40 }}>
            <div className="float-card-num">+150%</div>
            <div className="float-card-label">Efficiency Boost</div>
          </motion.div>

          <motion.div animate={{ y:[8,-8,8] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut' }}
            className="float-card" style={{ bottom:60, right:-40 }}>
            <div className="float-card-num">98%</div>
            <div className="float-card-label">CSAT Score</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
