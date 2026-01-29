import React, { useRef, useState, useEffect } from 'react';
import { images, detailSections } from '../config/propertyConfig';

const Details = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalHeight = rect.height; // Should be ~400vh

      // Calculate how far we've scrolled into the section
      const offset = -rect.top;

      // Calculate global progress (0 to 1) for the bar
      // We start at 0 when offset is 0
      // We end at 1 when offset is totalHeight - viewportHeight
      const maxScroll = totalHeight - viewportHeight;
      const currentProgress = Math.max(0, Math.min(1, offset / maxScroll));
      setProgress(currentProgress);

      if (offset < 0) {
        setActiveSection(0);
      } else {
        let index = Math.floor(offset / viewportHeight);
        if (index < 0) index = 0;
        if (index >= detailSections.length) index = detailSections.length - 1;
        setActiveSection(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="details-track" ref={containerRef}>
      <div className="details-sticky">

        {/* PROGRESS BAR INDICATOR */}
        <div className="scroll-progress-bar">
          <div className="scroll-progress-fill" style={{ height: `${progress * 100}%` }}></div>
        </div>

        <div className="container" style={{ position: 'absolute', top: '2rem', width: '100%', zIndex: 20 }}>
          {/* Heading removed as requested */}
        </div>

        {/* 
            RENDER ALL SECTIONS STACKED 
            We control opacity based on activeSection
        */}
        {detailSections.map((section, index) => {
          const isActive = index === activeSection;
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`details-slide ${isActive ? 'is-active' : ''}`}
            >
              {/* Add layout-reverse class for alternating sections */}
              <div className={`details-split-layout ${isReverse ? 'layout-reverse' : ''}`}>

                {/* Text Side */}
                <div className="details-text-side">
                  <div className={`details-text-container ${isActive ? 'fade-in-up' : ''}`}>
                    <span className="detail-tag uppercase text-accent">0{index + 1}</span>
                    <h3 className="detail-heading">{section.title}</h3>
                    <ul className="feature-list">
                      {section.features.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`details-image-side ${isActive ? 'image-reveal' : ''}`}>
                  <img src={images[section.imageKey]} alt={section.title} />
                </div>
              </div>
            </div>
          );
        })}

        {/* Stats banner removed as requested */}
      </div>

      <style>{`
        .details-track {
          height: ${(detailSections.length + 1) * 100}vh; /* Add extra breathing room so the last section sticks longer */
          position: relative;
          z-index: 10;
        }

        .details-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          background: var(--color-bg);
        }

        .section-title {
           font-size: 2.5rem;
           color: var(--color-text);
           background: rgba(255,255,255,0.8);
           padding: 0.5rem;
           border-radius: 4px;
        }

        .details-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.6s ease-in-out; /* Faster fade for snappier feel */
          pointer-events: none;
        }
        
        .details-slide.is-active {
          opacity: 1;
          pointer-events: auto;
          z-index: 5;
        }

        /* Slide Layout */
        .details-split-layout {
          display: grid;
          grid-template-columns: 40fr 60fr;
          height: 100%;
          width: 100%;
        }

        .details-split-layout.layout-reverse {
          grid-template-columns: 60fr 40fr;
        }

        /* Standard Order: Text (0) | Image (1) */
        .details-text-side { order: 0; }
        .details-image-side { order: 1; }

        /* Reverse Order: Image (0) | Text (1) */
        .layout-reverse .details-image-side { order: 0; }
        .layout-reverse .details-text-side { order: 1; }

        .details-text-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-xl) var(--spacing-lg);
          background: var(--color-bg);
        }

        .details-text-container {
          max-width: 500px;
          opacity: 0;
          transform: translateY(30px);
          filter: blur(10px); /* Start blurred */
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s;
        }
        
        .details-text-container.fade-in-up {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
        }

        /* Staggered List Items */
        .feature-list li {
          opacity: 0;
          transform: translateX(-15px);
          transition: all 0.5s ease-out;
        }
        .details-text-container.fade-in-up .feature-list li {
          opacity: 1;
          transform: translateX(0);
        }
        /* Hardcoded stagger delays for up to 10 items */
        .details-text-container.fade-in-up .feature-list li:nth-child(1) { transition-delay: 0.3s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(2) { transition-delay: 0.4s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(3) { transition-delay: 0.5s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(4) { transition-delay: 0.6s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(5) { transition-delay: 0.7s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(6) { transition-delay: 0.8s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(7) { transition-delay: 0.9s; }
        .details-text-container.fade-in-up .feature-list li:nth-child(8) { transition-delay: 1.0s; }

        .details-image-side {
          height: 100%;
          overflow: hidden;
          opacity: 0;
          width: 95%; /* Start slightly smaller */
          margin: 0 auto;
          transform: scale(0.95); /* Start slightly zoomed out/small */
          filter: blur(5px);
          transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .details-image-side.image-reveal {
          opacity: 1;
          width: 100%;
          transform: scale(1);
          filter: blur(0);
        }
        
        .details-image-side img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Stats at bottom of last slide */
        .fixed-stats-container {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 1000px;
            z-index: 30;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            animation: floatUp 0.5s ease forwards;
        }
        
        .stats-grid {
             display: grid;
             grid-template-columns: repeat(3, 1fr);
             padding: 1rem;
        }
        .stat-item { text-align: center; }
        .stat-value { font-family: var(--font-heading); font-size: 2rem; display: block; }
        .stat-label { font-size: 0.8rem; text-transform: uppercase; color: var(--color-accent); }

        @keyframes floatUp {
            from { opacity: 0; transform: translate(-50%, 20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }

        /* Typography & List */
        .detail-tag { display: block; font-weight: 500; font-size: 1rem; color: var(--color-accent); margin-bottom: 0.5rem; }
        .detail-heading { font-size: 2.5rem; margin-bottom: 2rem; }
        .feature-list { list-style: none; padding: 0; }
        .feature-list li { margin-bottom: 0.5rem; padding-left: 1.2rem; position: relative; color: var(--color-text-light); }
        .feature-list li::before { content: "—"; position: absolute; left: 0; color: var(--color-accent); }

        /* Scroll Progress Bar */
        .scroll-progress-bar {
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            width: 2px;
            height: 200px;
            background: rgba(0,0,0,0.1);
            z-index: 50;
        }

        .scroll-progress-fill {
            width: 100%;
            background: var(--color-accent);
            transition: height 0.1s linear;
        }

        @media (max-width: 900px) {
           .details-track {
             height: auto !important;
           }
           .details-sticky {
             position: relative !important;
             height: auto !important;
             overflow: visible !important;
           }
           .details-slide {
             position: relative !important;
             opacity: 1 !important;
             pointer-events: auto !important;
             height: auto !important;
             padding: 0 !important; /* Remove padding between slides */
             border-bottom: none !important; /* Remove border */
             display: block !important;
             margin-bottom: 2rem !important; /* Small gap between sections */
           }
           .details-split-layout, .details-split-layout.layout-reverse { 
             grid-template-columns: 1fr !important;
             display: flex !important;
             flex-direction: column !important;
             width: 100% !important;
           }
           .details-image-side { 
             order: -1 !important; /* Force Image to Top */
             height: 50vh !important;
             width: 100% !important;
             transform: none !important;
             filter: none !important;
             opacity: 1 !important;
             margin: 0 !important;
           }
           .details-text-side { 
             order: 2 !important; /* Force Text to Bottom */
             height: auto !important; 
             padding: 2rem 1.5rem 0 1.5rem !important; /* Text padding */
             align-items: flex-start !important; 
             justify-content: flex-start !important;
             overflow-y: visible !important; 
             width: 100% !important;
             background: var(--color-bg) !important;
           }
           .details-text-container {
             opacity: 1 !important;
             transform: none !important;
             filter: none !important;
             margin: 0 !important;
             padding: 0 !important;
             width: 100% !important;
           }
           .section-title { font-size: 1.5rem; }
           .fixed-stats-container { display: none !important; }
           .scroll-progress-bar { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Details;
