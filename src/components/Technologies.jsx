import React from 'react';
import { motion } from 'framer-motion';

export default function Technologies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.5, 0, 0, 1] } }
  };

  const TechItem = ({ name, iconName }) => {
    const iconUrl = `https://cdn.simpleicons.org/${iconName}/a04115`;
    
    return (
      <motion.div 
        variants={itemVariants}
        whileHover={{ y: -5, backgroundColor: 'var(--surface-container-high)', scale: 1.05 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--spacing-sm)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--outline-variant)',
          borderRadius: 'var(--radius-md)',
          transition: 'all 0.3s ease',
          width: '120px',
          height: '120px',
          flexShrink: 0
        }}
      >
        <img 
          src={iconUrl} 
          alt={name} 
          style={{ width: '40px', height: '40px', marginBottom: 'var(--spacing-xs)', objectFit: 'contain' }} 
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <span className="label-sm" style={{ color: 'var(--on-surface-variant)', textAlign: 'center' }}>{name}</span>
      </motion.div>
    );
  };

  return (
    <section className="container" style={{ padding: 'var(--spacing-xl) var(--margin-mobile) var(--spacing-xxl)' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
      >
        <h2 className="headline-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>Technology Stack</h2>
        <p className="body-md" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
          The foundational tools we use to build robust, scalable, and intelligent digital systems.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'var(--spacing-md)',
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        {/* Frontend */}
        <TechItem name="HTML5" iconName="html5" />
        <TechItem name="CSS3" iconName="css3" />
        <TechItem name="React" iconName="react" />
        
        {/* Backend */}
        <TechItem name="Node.js" iconName="nodedotjs" />
        <TechItem name="Spring Boot" iconName="springboot" />
        
        {/* Databases */}
        <TechItem name="PostgreSQL" iconName="postgresql" />
        <TechItem name="MongoDB" iconName="mongodb" />
        
        {/* Machine Learning */}
        <TechItem name="PyTorch" iconName="pytorch" />
        <TechItem name="NumPy" iconName="numpy" />
      </motion.div>
    </section>
  );
}
