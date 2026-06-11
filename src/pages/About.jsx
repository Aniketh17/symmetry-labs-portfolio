import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const StoryBlock = ({ title, content, isLeft, icon }) => (
    <div className={`story-block ${isLeft ? 'story-left' : 'story-right'}`}>
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="story-content"
      >
        <div className="story-header">
          {!isLeft && <span className="material-symbols-outlined desktop-icon" style={{ color: 'var(--secondary)' }}>{icon}</span>}
          <span className="material-symbols-outlined mobile-icon" style={{ color: 'var(--secondary)' }}>{icon}</span>
          <h3 className="headline-lg">{title}</h3>
          {isLeft && <span className="material-symbols-outlined desktop-icon" style={{ color: 'var(--secondary)' }}>{icon}</span>}
        </div>
        <p className="body-lg" style={{ color: 'var(--on-surface-variant)', fontSize: '18px', lineHeight: '1.8' }}>
          {content}
        </p>
      </motion.div>

      {/* Center Node */}
      <div className="story-node-container">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="story-node"
        />
      </div>

      {/* Empty spacer for alignment on desktop */}
      <div className="story-spacer"></div>
    </div>
  );

  return (
    <section className="container" style={{ padding: 'var(--spacing-xxl) var(--margin-mobile)', position: 'relative', overflow: 'hidden' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h1 className="display-lg-mobile md-display-lg">The Symmetry Labs Story</h1>
        <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: 'var(--spacing-md) auto 0' }}>
          A tale of  architectural minds, bridging the gap between brilliant logic and unbreakable stability.
        </p>
      </motion.div>

      <div ref={containerRef} style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Animated Central Timeline */}
        <div className="timeline-bg"></div>
        <motion.div 
          className="timeline-progress"
          style={{ scaleY: scaleY, transformOrigin: 'top' }} 
        ></motion.div>

        {/* Story Blocks */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <StoryBlock 
            isLeft={true}
            icon="terminal"
            title="The Developer"
            content="With deep roots in system architecture, The Developer has spent years architecting industry-grade SaaS platforms. Forging backend microservices and engineering responsive, intelligent interfaces became second nature. It's about writing logic that scales the pure Syntax behind the machine."
          />
          <StoryBlock 
            isLeft={false}
            icon="verified"
            title="The Quality Architect"
            content="Code is fragile until proven otherwise. With over 14 years of rigorous QA experience across diverse industries, The Quality Architect brings an unyielding eye for detail. From performance profiling to security audits, they ensure every digital structure is as solid as Stone."
          />
          <StoryBlock 
            isLeft={true}
            icon="handshake"
            title="The Convergence"
            content="Together, they realized that brilliant engineering without rigorous testing is just a prototype, and testing without brilliant engineering is a bottleneck. Symmetry Labs delivers digital experiences crafted by experts, where every line of code is challenged, and every interaction is perfected."
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .md-display-lg {
            font-size: 64px !important;
          }
        }

        /* Mobile Layout First */
        .timeline-bg {
          position: absolute; top: 0; bottom: 0; left: 14px; width: 2px;
          background-color: var(--outline-variant); opacity: 0.3;
        }
        .timeline-progress {
          position: absolute; top: 0; bottom: 0; left: 13px; width: 4px;
          background-color: var(--secondary); border-radius: 2px; zIndex: 1;
        }
        
        .story-block {
          display: flex;
          flex-direction: row-reverse; /* Content on right, node on left */
          width: 100%;
          margin-bottom: var(--spacing-xl);
          gap: var(--spacing-md);
        }
        
        .story-content {
          flex: 1;
          text-align: left;
          padding-bottom: var(--spacing-lg);
        }

        .story-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .desktop-icon { display: none; }
        .mobile-icon { display: block; }

        .story-node-container {
          position: relative;
          width: 30px;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
          padding-top: 6px;
        }

        .story-node {
          width: 12px; height: 12px; border-radius: 50%;
          background-color: var(--secondary); z-index: 2;
          box-shadow: 0 0 15px rgba(160,65,21,0.5);
        }

        .story-spacer { display: none; }

        /* Desktop Layout */
        @media (min-width: 768px) {
          .timeline-bg { left: 50%; transform: translateX(-50%); }
          .timeline-progress { left: 50%; transform: translateX(-50%); }

          .story-block {
            margin-bottom: var(--spacing-xxl);
            align-items: center;
          }
          
          .story-block.story-left { flex-direction: row; }
          .story-block.story-right { flex-direction: row-reverse; }

          .story-content { padding-bottom: 0; }
          .story-block.story-left .story-content { text-align: right; }
          .story-block.story-right .story-content { text-align: left; }

          .story-block.story-left .story-header { justify-content: flex-end; }
          .story-block.story-right .story-header { justify-content: flex-start; }

          .desktop-icon { display: block; }
          .mobile-icon { display: none; }

          .story-node-container { width: 40px; padding-top: 0; }
          .story-node { width: 16px; height: 16px; box-shadow: 0 0 20px rgba(160,65,21,0.5); }
          .story-spacer { display: block; flex: 1; }
        }
      `}</style>
    </section>
  );
}
