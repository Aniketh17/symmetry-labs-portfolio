import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // close menu on click
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    } else {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: scrolled || menuOpen ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled || menuOpen ? '1px solid var(--outline-variant)' : '1px solid transparent',
        zIndex: 50,
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-lg) var(--margin-mobile)' }}>
        <Link to="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', textDecoration: 'none' }}>
          <motion.span 
            animate={{ scale: [1, 1.1, 1] }} 
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            style={{ color: 'var(--secondary)', fontSize: '28px', fontWeight: '900', fontFamily: 'var(--font-display)', display: 'inline-block' }}
          >
            {'{ }'}
          </motion.span>
          <span className="headline-md" style={{ fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--on-surface)' }}>
            SYMMETRY LABS
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: 'var(--spacing-lg)', alignItems: 'center' }} className="lg-flex">
          <a href="#portfolio" onClick={(e) => handleAnchorClick(e, 'portfolio')} className="label-md" style={{ color: 'var(--on-surface-variant)', transition: 'color 0.3s', cursor: 'pointer' }}>Portfolio</a>
          <a href="#methodology" onClick={(e) => handleAnchorClick(e, 'methodology')} className="label-md" style={{ color: 'var(--on-surface-variant)', transition: 'color 0.3s', cursor: 'pointer' }}>Services</a>
          <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="label-md" style={{ color: 'var(--on-surface-variant)', transition: 'color 0.3s', cursor: 'pointer' }}>Contact</a>
          <Link to="/about" className="label-md" style={{ color: location.pathname === '/about' ? 'var(--secondary)' : 'var(--on-surface-variant)', transition: 'color 0.3s', borderBottom: location.pathname === '/about' ? '1px solid var(--secondary)' : 'none', paddingBottom: location.pathname === '/about' ? '4px' : '0' }}>About Us</Link>
        </nav>

        <button className="btn-primary lg-block" style={{ display: 'none' }} onClick={(e) => handleAnchorClick(e, 'contact')} >Hire Us</button>

        {/* Mobile Toggle */}
        <button style={{ color: 'var(--on-surface)' }} className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--outline-variant)' }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', padding: 'var(--spacing-md) var(--margin-mobile) var(--spacing-xl)' }}>
              <a href="#portfolio" onClick={(e) => handleAnchorClick(e, 'portfolio')} className="label-md" style={{ color: 'var(--on-surface-variant)' }}>Portfolio</a>
              <a href="#methodology" onClick={(e) => handleAnchorClick(e, 'methodology')} className="label-md" style={{ color: 'var(--on-surface-variant)' }}>Services</a>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="label-md" style={{ color: 'var(--on-surface-variant)' }}>Contact</a>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="label-md" style={{ color: location.pathname === '/about' ? 'var(--secondary)' : 'var(--on-surface-variant)' }}>About Us</Link>
              <button className="btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-sm)' }} onClick={(e) => handleAnchorClick(e, 'contact')} >Hire Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .lg-flex { display: flex !important; }
          .lg-block { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        nav a:hover { color: var(--secondary) !important; }
      `}</style>
    </motion.header>
  );
}
