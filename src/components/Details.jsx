import React from 'react';
import { galleryConfig } from '../galleryData';

const Details = () => {
  return (
    <section className="details-section">
      <div className="details-split-layout">
        <div className="details-text-side">
          <div className="details-text-container">
            <span className="detail-tag uppercase text-accent">About the Property</span>
            <h2 className="detail-heading">A Masterpiece of Modern Design</h2>
            <p>
              Experience the pinnacle of luxury living in this architectural masterpiece.
              Featuring panoramic views, state-of-the-art amenities, and meticulous attention to detail throughout.
            </p>
            <p>
              The open-concept living area boasts soaring ceilings and floor-to-ceiling windows that flood the space with natural light.
              The gourmet kitchen is a chef's dream, equipped with top-of-the-line appliances and a massive center island.
            </p>
          </div>
        </div>
        <div className="details-image-side">
          <img src={galleryConfig.detailsImage} alt="Interior Detail" />
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: '-50px' }}>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">5</span>
            <span className="stat-label">Bedrooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">6.5</span>
            <span className="stat-label">Bathrooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">8,500</span>
            <span className="stat-label">Sq Ft</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">2024</span>
            <span className="stat-label">Year Built</span>
          </div>
        </div>
      </div>

      <style>{`
        .details-section {
          background-color: white;
          position: relative;
          z-index: 10;
          padding: 0; /* Full bleed, no padding on section */
          box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
          margin-top: -1px;
        }

        .details-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 80vh; /* Make it substantial */
        }
        
        .details-text-side {
          display: flex;
          align-items: center;
          justify-content: flex-end; /* Push content towards center */
          padding: var(--spacing-xl);
          background: white;
        }

        .details-text-container {
          max-width: 600px;
          width: 100%;
          padding-right: var(--spacing-lg); /* Space between text and image center */
        }

        .details-image-side {
          position: relative;
          height: 100%;
          min-height: 500px;
        }
        
        .details-image-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        
        .detail-tag {
          display: block;
          font-weight: 500;
          margin-bottom: var(--spacing-xs);
        }
        
        .detail-heading {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-md);
        }
        
        .details-text-side p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-sm);
          font-size: 1.1rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-md);
          background: #fff;
          padding: var(--spacing-lg);
          border: 1px solid var(--color-border);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05); /* Float effect */
        }
        
        .stat-item {
          text-align: center;
          padding: var(--spacing-sm);
        }
        
        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 3rem;
          color: var(--color-text);
          line-height: 1;
        }
        
        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        @media (max-width: 900px) {
          .details-split-layout {
            grid-template-columns: 1fr;
          }
          .details-image-side {
            min-height: 400px;
            order: -1; /* Image first on mobile? */
          }
          .details-text-side {
            justify-content: center;
            padding: var(--spacing-lg);
          }
           .details-text-container {
            padding-right: 0;
            text-align: center;
           }
          
          .stats-grid {
             grid-template-columns: 1fr 1fr;
             padding: var(--spacing-md);
          }
        }
      `}</style>
    </section>
  );
};

export default Details;
