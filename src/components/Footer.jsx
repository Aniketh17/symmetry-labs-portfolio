import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--surface-container-highest)', borderTop: '1px solid var(--outline-variant)', width: '100%' }}>
      <div className="container" style={{ padding: 'var(--spacing-xl) var(--margin-mobile)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <motion.span 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{ color: 'var(--secondary)', fontSize: '24px', fontWeight: '900', fontFamily: 'var(--font-display)', display: 'inline-block' }}
            >
              {'{ }'}
            </motion.span>
            <h2 className="headline-md" style={{ letterSpacing: '0.05em' }}>SYMMETRY LABS</h2>
          </div>
        </div>
        
        <nav style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
          <a href="/#methodology" className="label-sm" style={{ color: 'var(--on-surface-variant)', transition: 'color 0.3s', textDecoration: 'none' }}>Services</a>
          <a href="/#portfolio" className="label-sm" style={{ color: 'var(--on-surface-variant)', transition: 'color 0.3s', textDecoration: 'none' }}>Portfolio</a>
          <a href="/#contact" className="label-sm" style={{ color: 'var(--on-surface-variant)', transition: 'color 0.3s', textDecoration: 'none' }}>Contact</a>
        </nav>
      </div>

      <style>{`
        footer nav a:hover {
          color: var(--secondary) !important;
        }
        @media (min-width: 768px) {
          footer .container {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
