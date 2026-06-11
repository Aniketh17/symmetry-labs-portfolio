import React from 'react';
import { motion } from 'framer-motion';

export default function StructuralSolutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.5, 0, 0, 1] } }
  };

  const ServiceCard = ({ icon, title, description, delay }) => (
    <motion.div 
      variants={itemVariants}
      style={{
        border: '1px solid var(--outline-variant)',
        padding: 'var(--spacing-xl)',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--surface)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: delay ? 'var(--spacing-lg)' : '0'
      }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px -15px rgba(160,65,21,0.05)' }}
      transition={{ duration: 0.3 }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--secondary)', marginBottom: 'var(--spacing-lg)', fontVariationSettings: "'wght' 300" }}>{icon}</span>
      <h3 className="headline-md" style={{ marginBottom: 'var(--spacing-sm)' }}>{title}</h3>
      <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{description}</p>
    </motion.div>
  );

  return (
    <section id="methodology" className="container" style={{ padding: 'var(--spacing-xxl) var(--margin-mobile)' }}>
      <motion.h2 
        className="headline-lg" 
        style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Freelance Services
      </motion.h2>

      <motion.div 
        className="grid-12" 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div style={{ gridColumn: 'span 12' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <ServiceCard 
              icon="code"
              title="Custom Web Development"
              description="Building performant, highly scalable web applications from scratch, tailored to your exact business needs."
            />
            <ServiceCard 
              icon="rule"
              title="Rigorous QA & Testing"
              description="Comprehensive automated and manual testing to ensure every feature works flawlessly before launch."
              delay={true}
            />
            <ServiceCard 
              icon="handshake"
              title="Direct Collaboration"
              description="Work directly with the architects. No middlemen, just transparent communication and rapid iteration."
              delay={true}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
