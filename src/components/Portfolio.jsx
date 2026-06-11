import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.5, 0, 0, 1] } 
    }
  };

  return (
    <section id="portfolio" style={{ backgroundColor: 'var(--surface-container-lowest)', padding: 'var(--spacing-xxl) 0', overflow: 'hidden' }}>
      <div className="container">
        
        <motion.div 
          className="portfolio-header"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ 
            marginBottom: 'var(--spacing-xxl)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'baseline', 
            borderBottom: '1px solid var(--outline-variant)', 
            paddingBottom: 'var(--spacing-lg)',
            flexWrap: 'wrap',
            gap: 'var(--spacing-md)'
          }}
        >
          <div>
            <span className="label-sm" style={{ color: 'var(--secondary)', marginBottom: 'var(--spacing-sm)', display: 'block' }}>Portfolio</span>
            <h2 className="display-lg-mobile md-display-lg" style={{ color: 'var(--on-surface)' }}>Selected Works</h2>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xxl)' }}>
          {/* Project 1 */}
          <motion.div 
            className="project-row"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ cursor: 'pointer' }}
            whileHover="hover"
            onClick={() => window.open('https://www.itomaster.com', '_blank')}
          >
            <div className="grid-12" style={{ alignItems: 'center' }}>
              <div className="col-span-8" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--surface-container-low)' }}>
                <motion.img 
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHsUJjp7-au2ll8cJG7mtZVYyn8E_HrfGypPcTITjKdflaxvv4oiijWoDxrxrxPFIH0ObFdcw23UIJcxV-p7B4Or8mH0gIvnZzypHOFPpdcxCJtzqF7xPy6WtDvC7-XynMDCeTyIvvy_oTcfO389mQyo1EmDsjxsrr1AXX55VSKoNpESs1vTUoo1F1aqwQFjcxvm45hpQ3BDPAoGRy-HTEY-HLRhVADOn0rsL-ohtnfbSDaGiwiWDKrTKDbaQaSacbWKEhGyFW1wg"
                  alt="ITOMASTER"
                  style={{ width: '100%', height: '600px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-lg)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)', alignItems: 'center', color: 'var(--secondary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>corporate_fare</span>
                  <span className="label-sm">Enterprise SaaS</span>
                </div>
                <h3 className="headline-lg">ITOMASTER</h3>
                <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
                  A high-performance e-commerce engine built for global scale. We architected a system capable of handling 50k+ concurrent transactions with sub-second latency.
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginTop: 'var(--spacing-md)' }}>
                  {['React.Js', 'Spring Boot', 'Postgres database'].map(tech => (
                    <span key={tech} className="label-sm" style={{ border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-full)', padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--on-surface-variant)' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="project-row"
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ cursor: 'pointer', borderTop: '1px solid var(--outline-variant)', paddingTop: 'var(--spacing-xxl)' }}
            whileHover="hover"
            onClick={() => window.open('https://tiny-paaws.netlify.app', '_blank')}
          >
            <div className="md-flex-row" style={{ alignItems: 'center', gap: 'var(--spacing-gutter)' }}>
              {/* Order is swapped on desktop, but should be stacked normally on mobile.
                  We'll use flex-direction column on mobile and row on lg. Wait, actually I added md-flex-row. Let's just use CSS. */}
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', order: 2, '@media (minWidth: 1024px)': { order: 1 } }} className="portfolio-content-2">
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)', alignItems: 'center', color: 'var(--secondary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>groups</span>
                  <span className="label-sm">Community Platform</span>
                </div>
                <h3 className="headline-lg">Tiny Paws</h3>
                <p className="body-lg" style={{ color: 'var(--on-surface-variant)' }}>
                  An elegant social hub for pet owners. Focused on real-time interactions and geospatial service discovery with a refined, user-centric interface.
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap', marginTop: 'var(--spacing-md)' }}>
                  {['Node.js', 'React.Js'].map(tech => (
                    <span key={tech} className="label-sm" style={{ border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-full)', padding: 'var(--spacing-sm) var(--spacing-md)', color: 'var(--on-surface-variant)' }}>{tech}</span>
                  ))}
                </div>
              </div>
              <div style={{ flex: 2, borderRadius: 'var(--radius-md)', overflow: 'hidden', backgroundColor: 'var(--surface-container-low)', order: 1, '@media (minWidth: 1024px)': { order: 2 } }} className="portfolio-img-2">
                <motion.img 
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaZ75RwkFc72rOY9xm7r2U8-Iid2qU1s9oh5fIIuvRCDxO6sgep3b8vFBKAImJezUv6av5gFlZSHy41Gf_-5GbIxFy44vP919Z0TRkK95i9-RmC_rYlmzcVqA_7yhpGJddAVcvwaxPTAsBoDLKs6o5oXIkHNxwMSSCZCuJtyL_0qz_E4FgR4OndTsTIecC1sFjpP-KxZlmUf9I34kzS3PC1CisFc8gaeuFVJy40CF8R4Sp6eRvox4Y5Ncv3Ni-DdRwbFU1wwX7mWk"
                  alt="Tiny Paws"
                  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .md-display-lg {
            font-size: 64px !important;
          }
        }
        @media (min-width: 1024px) {
          .portfolio-content-2 {
            order: 1 !important;
          }
          .portfolio-img-2 {
            order: 2 !important;
          }
        }
        .col-span-4 { margin-top: var(--spacing-lg); }
        @media (min-width: 1024px) {
          .col-span-4 { margin-top: 0; }
        }
      `}</style>
    </section>
  );
}
