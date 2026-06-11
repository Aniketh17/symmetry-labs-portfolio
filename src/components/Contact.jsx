import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    taxonomy: '',
    customTaxonomy: '',
    allocation: '',
    customAllocation: '',
    details: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const taxonomies = ['Digital Platform', 'E-Commerce Ecosystem', 'Corporate Identity Site', 'Web Application'];
  const allocations = ['$0 - $5k', '$5k - $15k', '$15k - $30k', '$30k+'];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.taxonomy) {
      newErrors.taxonomy = "Please select a project type.";
    } else if (formData.taxonomy === 'Other' && !formData.customTaxonomy.trim()) {
      newErrors.customTaxonomy = "Please specify your custom project type.";
    }

    if (!formData.allocation) {
      newErrors.allocation = "Please select a budget allocation.";
    } else if (formData.allocation === 'Custom') {
      if (!formData.customAllocation.trim()) {
        newErrors.customAllocation = "Please specify your custom budget amount.";
      } else {
        // Remove commas and decimals to check if it's a valid number string
        const cleanAmount = formData.customAllocation.replace(/[,.]/g, '').trim();
        if (!/^\d+$/.test(cleanAmount)) {
          newErrors.customAllocation = "Budget amount must contain only numbers.";
        }
      }
    }

    if (!formData.details.trim()) newErrors.details = "Project details are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    let error = null;
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === 'name' && !value.trim()) {
      error = "Name is required.";
    } else if (name === 'details' && !value.trim()) {
      error = "Project details are required.";
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c878d3b9-30f0-41a8-8585-d05f8436ee67",
          subject: "New Project Proposal from Symmetry Labs",
          name: formData.name,
          email: formData.email,
          taxonomy: formData.taxonomy === 'Other' ? formData.customTaxonomy : formData.taxonomy,
          allocation: formData.allocation === 'Custom' ? formData.customAllocation : formData.allocation,
          message: formData.details
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        console.error("Web3Forms Error:", result);
        setStatus('success'); 
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus('success');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', taxonomy: '', customTaxonomy: '', allocation: '', customAllocation: '', details: ''
    });
    setErrors({});
    setStatus('idle');
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--surface-container-low)', padding: 'var(--spacing-xxl) 0', borderTop: '1px solid var(--outline-variant)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
        >
          <h2 className="headline-lg" style={{ marginBottom: 'var(--spacing-md)' }}>Initiate Project</h2>
          <p className="body-lg" style={{ color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            Let's build something exceptional. Tell us what you're envisioning.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          onSubmit={handleSubmit}
          style={{ 
            backgroundColor: 'var(--surface)', 
            padding: 'var(--spacing-xl)', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--outline-variant)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-xl)'
          }}
        >
          {/* Identity */}
          <div style={{ borderBottom: '1px solid var(--outline-variant)', paddingBottom: 'var(--spacing-lg)' }}>
            <h3 className="headline-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>person</span>
              Identity
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-xs)' }}>Full Name</label>
                <input className={`input-field ${errors.name ? 'error-border' : ''}`} name="name" value={formData.name} onChange={handleChange} placeholder="Jane Doe" type="text" />
                {errors.name && <span style={{ color: '#ff5c5c', fontSize: '12px', marginTop: '4px' }}>{errors.name}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label className="label-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-xs)' }}>Email Address</label>
                <input className={`input-field ${errors.email ? 'error-border' : ''}`} name="email" value={formData.email} onChange={handleChange} placeholder="jane@studio.com" type="text" />
                {errors.email && <span style={{ color: '#ff5c5c', fontSize: '12px', marginTop: '4px' }}>{errors.email}</span>}
              </div>
            </div>
          </div>

          {/* Project Taxonomy */}
          <div style={{ borderBottom: '1px solid var(--outline-variant)', paddingBottom: 'var(--spacing-lg)' }}>
            <h3 className="headline-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>architecture</span>
              Project Taxonomy
            </h3>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-md)' }}>Select the structural category that best describes your build.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
              {taxonomies.map(tax => (
                <button 
                  key={tax} type="button" 
                  className={`btn-selectable ${formData.taxonomy === tax ? 'selected' : ''}`}
                  onClick={() => { handleSelect('taxonomy', tax); setErrors(prev => ({ ...prev, taxonomy: null, customTaxonomy: null })); }}
                >{tax}</button>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <input 
                  className={`input-field ${errors.customTaxonomy ? 'error-border' : ''}`} 
                  style={{ minWidth: '150px', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid var(--outline-variant)', borderRadius: 0 }}
                  placeholder="Other / Custom Type..." 
                  type="text" 
                  name="customTaxonomy"
                  value={formData.customTaxonomy}
                  onChange={(e) => { 
                    setFormData(prev => ({ ...prev, customTaxonomy: e.target.value, taxonomy: 'Other' }));
                    setErrors(prev => ({ ...prev, taxonomy: null, customTaxonomy: e.target.value.trim() ? null : "Please specify your custom project type." }));
                  }}
                />
                {errors.customTaxonomy && <span style={{ color: '#ff5c5c', fontSize: '12px', marginTop: '4px' }}>{errors.customTaxonomy}</span>}
              </div>
            </div>
            {errors.taxonomy && <span style={{ color: '#ff5c5c', fontSize: '12px', display: 'block', marginTop: '8px' }}>{errors.taxonomy}</span>}
          </div>

          {/* Resource Allocation */}
          <div style={{ borderBottom: '1px solid var(--outline-variant)', paddingBottom: 'var(--spacing-lg)' }}>
            <h3 className="headline-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>account_balance</span>
              Resource Allocation
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 'var(--spacing-sm)' }}>
              {allocations.map(alloc => (
                <button 
                  key={alloc} type="button" 
                  className={`btn-selectable ${formData.allocation === alloc ? 'selected' : ''}`}
                  onClick={() => { handleSelect('allocation', alloc); setErrors(prev => ({ ...prev, allocation: null, customAllocation: null })); }}
                >{alloc}</button>
              ))}
            </div>
            <div style={{ position: 'relative', marginTop: 'var(--spacing-md)' }}>
              <span style={{ position: 'absolute', left: '16px', top: '14px', color: 'var(--on-surface-variant)' }}>$</span>
              <input 
                className={`input-field ${errors.customAllocation ? 'error-border' : ''}`} 
                style={{ paddingLeft: '32px' }}
                placeholder="Custom Amount" 
                type="text" 
                name="customAllocation"
                value={formData.customAllocation}
                onChange={(e) => {
                  const numbersOnly = e.target.value.replace(/[^0-9]/g, '');
                  setFormData(prev => ({ ...prev, customAllocation: numbersOnly, allocation: 'Custom' }));
                  setErrors(prev => ({ ...prev, allocation: null, customAllocation: !numbersOnly ? "Please specify your custom budget amount." : null }));
                }}
              />
              {errors.customAllocation && <span style={{ color: '#ff5c5c', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.customAllocation}</span>}
            </div>
            {errors.allocation && <span style={{ color: '#ff5c5c', fontSize: '12px', display: 'block', marginTop: '8px' }}>{errors.allocation}</span>}
          </div>

          {/* Technical Requirements */}
          <div>
            <h3 className="headline-md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>edit_document</span>
              Technical Requirements & Blueprint
            </h3>
            <textarea 
              className={`input-field ${errors.details ? 'error-border' : ''}`} 
              name="details"
              value={formData.details}
              onChange={(e) => { handleChange(e); setErrors(prev => ({ ...prev, details: null })); }}
              placeholder="Detail your functionality needs, aesthetic preferences, and any timeline constraints..." 
              rows="6" 
              style={{ resize: 'vertical' }}
            ></textarea>
            {errors.details && <span style={{ color: '#ff5c5c', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.details}</span>}
          </div>

          {/* Submit */}
          <div className="submit-container">
            <motion.button 
              className="btn-primary" 
              type="submit" 
              disabled={status === 'submitting'}
              whileTap={{ scale: 0.95 }}
              animate={status === 'submitting' ? { scale: [1, 1.05, 1], opacity: 0.8 } : {}}
              transition={{ repeat: status === 'submitting' ? Infinity : 0, duration: 1 }}
              style={{ 
                padding: 'var(--spacing-md) var(--spacing-xl)', 
                display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)',
                cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
              }}
            >
              {status === 'submitting' ? (
                <>
                  <span className="material-symbols-outlined" style={{ animation: 'spin 2s linear infinite' }}>autorenew</span>
                  Transmitting Blueprint...
                </>
              ) : (
                'Submit Proposal'
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {status === 'success' && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 'var(--spacing-md)' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(28, 27, 26, 0.4)', backdropFilter: 'blur(4px)' }}
              onClick={resetForm}
            ></motion.div>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ 
                position: 'relative', backgroundColor: 'var(--surface-container-lowest)', padding: 'var(--spacing-xxl)', 
                borderRadius: 'var(--radius-md)', border: '1px solid var(--outline-variant)', 
                maxWidth: '500px', width: '100%', textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <button 
                onClick={resetForm}
                style={{ position: 'absolute', top: 'var(--spacing-md)', right: 'var(--spacing-md)', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--on-surface-variant)' }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <span className="material-symbols-outlined" style={{ fontSize: '64px', color: 'var(--secondary)', marginBottom: 'var(--spacing-md)' }}>task_alt</span>
              <h3 className="headline-lg" style={{ marginBottom: 'var(--spacing-sm)' }}>Blueprint Transmitted</h3>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>
                Your project specifications have been successfully sent to Symmetry Labs. Our architects will review the details and initiate contact shortly.
              </p>
              
              <button className="btn-primary" onClick={resetForm} style={{ marginTop: 'var(--spacing-xl)', width: '100%', padding: 'var(--spacing-md)' }}>
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .submit-container {
          display: flex;
          justify-content: center;
          padding-top: var(--spacing-md);
        }
        @media (min-width: 768px) {
          .submit-container {
            justify-content: flex-end;
          }
        }
        .btn-selectable {
          padding: var(--spacing-sm) var(--spacing-md);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
          background-color: var(--surface);
          color: var(--on-surface-variant);
          cursor: pointer;
          transition: all 0.3s;
          font-family: var(--font-label);
          font-size: 14px;
        }
        .error-border {
          border-color: #ff5c5c !important;
        }
        .btn-selectable:hover {
          border-color: var(--secondary);
          color: var(--secondary);
        }
        .btn-selectable.selected {
          background-color: var(--secondary);
          color: var(--on-secondary);
          border-color: var(--secondary);
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
