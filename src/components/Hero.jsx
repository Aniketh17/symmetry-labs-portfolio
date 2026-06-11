import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.5, 0, 0, 1] },
    },
  };

  return (
    <section className="container" style={{ paddingTop: 'var(--spacing-xxl)', paddingBottom: 'var(--spacing-xl)' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid-12"
        style={{ alignItems: 'flex-end' }}
      >
        <motion.div variants={itemVariants} className="col-span-8">
          <h1 className="display-lg-mobile md-display-lg" style={{ marginBottom: 'var(--spacing-lg)' }}>
            Digital Experiences, <br />Crafted by Experts.
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants} className="col-span-4" style={{ paddingBottom: 'var(--spacing-sm)' }}>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
            We are a team dedicated to building fast, robust, and beautiful web applications. From flawless code architecture to rigorous quality assurance.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.5, 0, 0, 1] }}
        style={{
          marginTop: 'var(--spacing-xl)',
          width: '100%',
          height: '50vh',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          position: 'relative',
        }}
        className="hero-image-container"
      >
        <img
          src="/hero-image.png"
          alt="Two freelancers working collaboratively in a warm sun-drenched office"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Subtle overlay for tonal blending */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'var(--surface)',
          opacity: 0.1,
          mixBlendMode: 'multiply'
        }}></div>
      </motion.div>

      <style>{`
        @media (min-width: 768px) {
          .md-display-lg {
            font-size: 64px !important;
          }
          .hero-image-container {
            height: 70vh !important;
          }
        }
      `}</style>
    </section>
  );
}
