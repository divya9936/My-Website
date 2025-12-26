import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const links = ["home", "about", "experience", "skills", "projects", "contact"];
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <strong className="nav-logo">Divya.dev<span style={{color: 'var(--accent)'}}>.</span></strong>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {links.map(l => (
            <button
              key={l}
              className="nav-btn"
              onClick={() => {
                document.getElementById(l)?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}