import React from 'react';

const StaticSection = ({ image, title, subtitle }) => {
  return (
    <section className="static-section">
      <div className="static-overlay"></div>
      <div className="static-content container">
        {subtitle && <span className="static-subtitle uppercase">{subtitle}</span>}
        {title && <h2 className="static-title">{title}</h2>}
      </div>

      <style>{`
        .static-section {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          background-image: url('${image}');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          color: white;
          z-index: 0;
        }
        
        .static-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.3);
          z-index: 1;
        }
        
        .static-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        .static-subtitle {
          font-size: 0.9rem;
          letter-spacing: 0.2rem;
          display: block;
          margin-bottom: var(--spacing-sm);
          color: var(--color-accent);
        }
        
        .static-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-heading);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default StaticSection;
