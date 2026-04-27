import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value:'500+', label:'Clients Globally' },
  { value:'10M+', label:'Tickets Resolved' },
  { value:'98%',  label:'Client Retention' },
  { value:'24/7', label:'Expert Support' },
];

const Stats = () => (
  <section style={{ background:'linear-gradient(135deg,#0F7F4F 0%,#22B573 100%)', padding:'80px 0', position:'relative', overflow:'hidden' }}>
    {/* dot pattern */}
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.08) 1px,transparent 1px)', backgroundSize:'36px 36px', zIndex:0 }}/>
    <div className="container" style={{ position:'relative', zIndex:1 }}>
      <div className="grid-4">
        {stats.map((s,i) => (
          <motion.div key={i} initial={{ opacity:0, scale:0.7 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.6, ease:[0.16,1,0.3,1] }}
            style={{ textAlign:'center' }}>
            <div className="stat-num">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
