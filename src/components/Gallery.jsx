import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { galleryConfig_LEGACY as galleryConfig } from '../config/propertyConfig';

// Determine which images to show based on config (Static Source)
let sourceImages = [];

if (galleryConfig.useBulk) {
  const { baseUrl, filePrefix, extension, count, excludeIndices = [] } = galleryConfig.bulkSettings;
  const cleanBase = baseUrl.replace(/\/$/, '');

  sourceImages = Array.from({ length: count }, (_, i) => {
    const index = i + 1;
    if (excludeIndices.includes(index)) return null;
    return `${cleanBase}/${filePrefix}${index}${extension}`;
  }).filter(Boolean);
} else {
  sourceImages = galleryConfig.manualImages;
}

const Gallery = ({ limit = null, randomize = false }) => {
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  // Prepare images for display
  const displayImages = useMemo(() => {
    let result = [...sourceImages];

    if (randomize) {
      // Fisher-Yates Shuffle
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
    }

    if (limit && limit > 0) {
      result = result.slice(0, limit);
    }

    return result;
  }, [limit, randomize]);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section className="gallery-section">
      <div className="container">

        <div className="gallery-grid">
          {displayImages.map((img, index) => {
            let className = 'gallery-item';

            // Layout logic: Apply masonry classes (Tetris style).
            // optimize for straight bottom line: Ensure the last 4 items are always standard (1x1)
            // so they can fill any gaps left by the dense grid flow.
            const isFiller = index >= displayImages.length - 4;
            const isMobileHidden = index >= 6;

            if (!isFiller) {
              if (index % 12 === 0) className += ' big';
              else if (index % 5 === 0) className += ' tall';
              else if (index % 3 === 0) className += ' wide';
            }

            if (isMobileHidden) className += ' mobile-hidden';

            return (
              <div
                key={index}
                className={className}
                onClick={() => openLightbox(index)}
              >
                <img src={img} alt={`Property view`} loading="lazy" />
                <div className="hover-overlay"><span className="plus-icon">+</span></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {limit && (
          <div className="view-all-container">
            <Link to="/gallery" className="view-all-btn">
              View All Photos
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox}>&times;</button>
          <button className="lb-nav lb-prev" onClick={prevImage}>&#10094;</button>

          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={displayImages[lightboxIndex]}
              alt={`Full screen view`}
            />
          </div>

          <button className="lb-nav lb-next" onClick={nextImage}>&#10095;</button>

          <div className="lb-counter">
            {lightboxIndex + 1} / {displayImages.length}
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          background-color: white;
          position: relative;
          z-index: 10;
          padding: var(--spacing-md) 0 2rem 0; /* Reduced bottom padding */
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
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px; /* Standard base height */
          gap: var(--spacing-xs);
          grid-auto-flow: dense;  /* Fill in gaps */
        }
        
        .gallery-item {
          overflow: hidden;
          position: relative;
          background: #f0f0f0;
          height: 100%; /* Fill the grid cell height entirely */
          cursor: pointer;
        }

        /* Varied Sizes - Spans now perfectly align with the grid gaps */
        .gallery-item.wide {
            grid-column: span 2;
        }
        .gallery-item.tall {
            grid-row: span 2;
        }
        .gallery-item.big {
            grid-column: span 2;
            grid-row: span 2;
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .hover-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.3);
            display: flex;
            align-items: center; justify-content: center;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .plus-icon {
            color: white; font-size: 2rem; font-weight: 300;
        }
        
        .gallery-item:hover .hover-overlay {
            opacity: 1;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* LIGHTBOX STYLES */
        .lightbox-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            animation: fadeIn 0.3s forwards;
        }
        
        @keyframes fadeIn { to { opacity: 1; } }
        
        .lb-content {
            max-width: 90%;
            max-height: 90%;
            position: relative;
        }
        
        .lb-content img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            box-shadow: 0 0 50px rgba(0,0,0,0.5);
        }
        
        .lb-close {
            position: absolute;
            top: 20px; right: 30px;
            background: none; border: none;
            color: white; font-size: 3rem;
            cursor: pointer; z-index: 10000;
            line-height: 1;
        }
        
        .lb-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0,0,0,0.5);
            border: none;
            color: white;
            font-size: 2rem;
            padding: 1rem 0.5rem;
            cursor: pointer;
            z-index: 10000;
            transition: background 0.3s;
        }
        .lb-nav:hover { background: rgba(255,255,255,0.2); }
        .lb-prev { left: 20px; }
        .lb-next { right: 20px; }
        
        .lb-counter {
            position: absolute;
            bottom: 20px; left: 50%;
            transform: translateX(-50%);
            color: rgba(255,255,255,0.6);
            font-size: 0.9rem;
            letter-spacing: 0.1rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
             grid-template-columns: repeat(2, 1fr);
             grid-auto-rows: 200px;
          }
          /* Reset spans on mobile */
          .gallery-item.wide, 
          .gallery-item.tall, 
          .gallery-item.big { 
            grid-column: auto; 
            grid-row: auto;
            height: 300px; 
          }
          
          .lb-nav { padding: 0.5rem; font-size: 1.5rem; }
          .lb-prev { left: 10px; }
          .lb-next { right: 10px; }
          
          .mobile-hidden {
              display: none !important;
          }
        }

        /* View All Button */
        .view-all-container {
            display: flex;
            justify-content: center;
            margin-top: 4rem; /* Increased margin */
            position: relative;
            z-index: 20;
            background: white; /* Ensure it covers anything behind it if overlap occurs */
            padding: 1rem 0;
            clear: both;
        }
        
        .view-all-btn {
            display: inline-block;
            text-decoration: none;
            color: #111;
            border: 1px solid #111;
            padding: 1rem 3rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .view-all-btn:hover {
            background: #111;
            color: white;
            letter-spacing: 0.25em;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
