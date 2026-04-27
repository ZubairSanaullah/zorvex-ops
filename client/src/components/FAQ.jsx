import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q:'How quickly can we start?', a:'Discovery begins within 48 hours of your first call. Full team integration typically takes 2-4 weeks depending on complexity.' },
  { q:'Are your teams fully dedicated?', a:'Yes. Our dedicated model ensures an exclusive team focused entirely on your goals, culture, and KPIs.' },
  { q:'How do you protect our data?', a:'We\'re ISO 27001 certified with bank-grade encryption. All staff sign NDAs and undergo rigorous vetting.' },
  { q:'Can you scale up or down quickly?', a:'Absolutely — scaling is our superpower. We can ramp 400% during peak seasons and reduce just as fast.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" style={{ background:'#FAFCFB' }}>
      <div className="container" style={{ maxWidth:860, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:72 }}>
          <span className="tag">Common Questions</span>
          <h2 className="headline" style={{ margin:'0 auto' }}>Everything You Need <span className="hl">to Know.</span></h2>
        </div>

        {faqs.map((f,i) => (
          <motion.div key={i} className="faq-item" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}>
            <button className="faq-btn" aria-expanded={open===i} onClick={() => setOpen(open===i ? null : i)}>
              <span className="faq-q">{f.q}</span>
              <div className="faq-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                  {open===i ? <><line x1="5" y1="12" x2="19" y2="12"/></> : <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>}
                </svg>
              </div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} style={{ overflow:'hidden' }}>
                  <div className="faq-answer open">{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
