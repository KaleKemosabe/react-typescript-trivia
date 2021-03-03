import React from 'react';

function Footer() {
  return (
    <div className="footer" 
      style={{ width: '100vw', height: '4rem', position: 'absolute', bottom: '0', backgroundColor:'black', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff' }}>
      <a href="https://etureppu.fi/takatasku/" style={{ color: '#ffffff', fontSize: '1.2rem', padding: '1rem 0' }}>Back to Etureppu</a>
    </div>
  )
}

export default Footer;
