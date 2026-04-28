import React from 'react';

const partners = ["MICROSOFT", "GOOGLE", "AMAZON", "ADOBE", "META", "NETFLIX", "SPOTIFY", "SALESFORCE"];

const Partners = () => (
  <div style={{ background: '#fff', borderTop: '1px solid #E2EDE8', borderBottom: '1px solid #E2EDE8', padding: '32px 0', overflow: 'hidden' }}>
    <div style={{ overflow: 'hidden' }}>
      <div className="marquee-track">
        {[...partners, ...partners].map((name, i) => (
          <span key={i} className="marquee-item">{name}</span>
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
