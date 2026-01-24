import React from 'react';

import { galleryConfig } from '../galleryData';

// Determine which images to show based on config
let images = [];

if (galleryConfig.useBulk) {
  const { baseUrl, filePrefix, extension, count } = galleryConfig.bulkSettings;
  // Handle trailing slash just in case user forgets/adds it
  const cleanBase = baseUrl.replace(/\/$/, '');

  images = Array.from({ length: count }, (_, i) =>
    `${cleanBase}/${filePrefix}${i + 1}${extension}`
  );
} else {
  images = galleryConfig.manualImages;
}

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title text-center">Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Property view ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-section {
          background-color: white;
          position: relative;
          z-index: 10;
          padding: var(--spacing-xl) 0;
        }

        .text-center {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }
        .section-title {
          font-size: 2.5rem;
          color: var(--color-text);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: var(--spacing-sm);
        }
        
        .gallery-item {
          overflow: hidden;
          height: 300px;
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-medium);
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .gallery-grid {
             grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
