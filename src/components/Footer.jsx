import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: 'Resources',
      links: ['Case Studies', 'Service Guide', 'Client Portal', 'Partner Program', 'Privacy Policy'],
      href: '#',
    },
    {
      heading: 'Services',
      links: ['Finance & Accounting', 'CS Operations', 'Data Management', 'IT Support', 'Full Stack Dev', 'SEO Optimization'],
      href: '#services',
    },
  ];

  return (
    <footer style={{ background: '#0F172A', color: '#fff', paddingTop: 96, paddingBottom: 48, position: 'relative', overflow: 'hidden' }}>
      {/* Subtle glow */}
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,181,115,0.06),transparent 70%)', top: '-200px', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '56px', marginBottom: 72 }}>
          {/* Brand col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg,#0F7F4F,#22B573)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, boxShadow: '0 4px 16px rgba(34,181,115,0.3)', flexShrink: 0 }}>
                <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </div>
              <span style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.04em' }}>
                Zorvex<span style={{ color: '#22B573' }}>Ops</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 280, marginBottom: 32 }}>
              Pioneering back-office excellence through elite global talent and proprietary workflow technology.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {['𝕏', 'in', 'f', '▶'].map((ic, i) => (
                <a key={i} className="social-btn" href="#">
                  <span style={{ fontSize: '0.9rem', fontWeight: 900 }}>{ic}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {cols.map((col, ci) => (
            <div key={ci}>
              <h5 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>{col.heading}</h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.links.map((l, i) => (
                  <li key={i}>
                    <a href={col.href} className="footer-link" style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#22B573'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <h5 style={{ fontFamily: 'Outfit,sans-serif', fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.35)', marginBottom: 28 }}>Contact</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '📍', val: 'Lahore, Punjab, Pakistan' },
                { icon: '📧', val: 'hello@zorvexops.com' },
                { icon: '📞', val: '+92 317 4897063' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.val}</span>
                </div>
              ))}

              {/* CTA chip */}
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                marginTop: 16, padding: '14px 28px',
                background: 'rgba(34,181,115,0.12)', border: '1px solid rgba(34,181,115,0.25)',
                borderRadius: 99, color: '#22B573', fontWeight: 800, fontSize: '0.9rem',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,181,115,0.22)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(34,181,115,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Start a Project →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 40 }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            © {year} Zorvex Operations Group LLC. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 32 }}>
            {['Terms of Service', 'Cookie Policy', 'Sitemap'].map((l, i) => (
              <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#22B573'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
