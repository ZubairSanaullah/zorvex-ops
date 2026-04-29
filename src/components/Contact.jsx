import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ background: '#FAFCFB' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="tag">Get In Touch</span>
          <h2 className="headline" style={{ margin: '0 auto' }}>Start Your <span className="hl">Transformation.</span></h2>
        </div>

        <div className="card" style={{ padding: 0, display: 'grid', gridTemplateColumns: '1fr', overflow: 'hidden', boxShadow: '0 40px 100px rgba(15,127,79,0.14)', borderRadius: 40 }}>
          <div style={{ display: 'grid' }} className="lg-grid-5col">
            {/* Info panel */}
            <div className="contact-info">
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '2rem', fontWeight: 900, color: '#fff', marginBottom: 16 }}>Let's Build Scale.</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 56, lineHeight: 1.8 }}>Connect with our consultants to design your operational blueprint.</p>

                {[
                  { icon: '📧', l: 'Email', v: 'hello@zorvexops.com' },
                  { icon: '📞', l: 'Direct Line', v: '+92 317 4897063' },
                  { icon: '📍', l: 'Global HQ', v: 'Lahore, Punjab, Pakistan' },
                ].map((item, i) => (
                  <div key={i} className="contact-info-item">
                    <div className="contact-icon-box" style={{ fontSize: '1.4rem' }}>{item.icon}</div>
                    <div>
                      <div className="contact-info-label">{item.l}</div>
                      <div className="contact-info-val">{item.v}</div>
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
                    Trusted by 10+ companies
                  </div>

                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ padding: '64px 56px', background: '#fff', position: 'relative' }}>
              <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '1.6rem', marginBottom: 40, color: '#0F172A' }}>Send a Message</h3>
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: 10 }}>Full Name</label>
                    <input name="name" value={form.name} onChange={onChange} className="input" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: 10 }}>Work Email</label>
                    <input name="email" type="email" value={form.email} onChange={onChange} className="input" placeholder="john@company.com" required />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: 10 }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={onChange} className="input" placeholder="Service Inquiry" required />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9CA3AF', marginBottom: 10 }}>Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} className="input" placeholder="Tell us about your business challenges..." required style={{ minHeight: 160, resize: 'none' }} />
                </div>

                <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', padding: 20, fontSize: '1.05rem' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Inquiry →'}
                </button>

                {status === 'error' && (
                  <p style={{ textAlign: 'center', color: '#EF4444', fontWeight: 600 }}>Something went wrong. Please try again.</p>
                )}
              </form>

              {/* Success Overlay */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="success-overlay">
                    <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(34,181,115,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, fontSize: '3rem' }}>
                      ✅
                    </div>
                    <h3 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '2rem', marginBottom: 12, color: '#0F172A' }}>Message Received!</h3>
                    <p style={{ color: '#6B7280', marginBottom: 32, maxWidth: 300 }}>Our strategy team will respond within 24 business hours.</p>
                    <button onClick={() => setStatus('')} className="btn btn-secondary">Send Another</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
