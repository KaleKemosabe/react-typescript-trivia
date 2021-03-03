import React from 'react';

function Navbar() {
  return (
    <div className="navbar" 
      style={{ margin: '0 auto', width: '100vw', backgroundColor:'black', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff' }}>
      <a href="https://etureppu.fi/" style={{ padding: '0.5rem 0', color: '#ffffff', fontFamily: 'Pacifico', fontSize: '2rem', letterSpacing: '0.2rem', textDecoration: 'none' }}>Etureppu</a>
    </div>
  )
}

export default Navbar;
