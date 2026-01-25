import React, { useEffect, useState, useMemo } from 'react';
import { galleryConfig } from '../galleryData';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // The "Cover" layer (First Image)
  const coverImage = galleryConfig.coverImage;

  // Track scroll for the fade effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate Progress (0 to 1)
  // We want the transition to take about 2 full screen heights (200vh) of scrolling
  const scrollRange = window.innerHeight * 2;
  const rawProgress = Math.min(1, Math.max(0, scrollY / scrollRange));

  // Ease the progress for smoother feel (optional, but nice)
  const progress = rawProgress;

  // Opacity: Initial image fades out as we scroll
  const fadeOpacity = 1 - progress;

  // Text Animation - Fade Out Only
  // Starts visible, fades out as we scroll down
  const textOpacity = 1 - (progress * 1.5); // Stays visible longer (fades out at ~66%)
  const scaleVal = 1.3 - (0.3 * progress);

  return (
    <div className="hero-track">
      <div className="hero-sticky">

        {/* Layer 1: The "Reveal" Image (Main Hero) */}
        <div className="hero-bg-layer" style={{ backgroundImage: `url('${galleryConfig.heroImage}')`, zIndex: 1 }}></div>

        {/* Layer 2: The "Initial" Image (Random Cover) - Fades Out */}
        <div
          className="hero-bg-layer"
          style={{
            backgroundImage: `url('${coverImage}')`,
            zIndex: 2,
            opacity: fadeOpacity
          }}
        ></div>

        <div className="hero-overlay"></div>

        {/* Floating Content Layer - Fixed Position, Fades Out */}
        <div
          className="hero-content-animator"
          style={{
            left: '50%',
            top: '35%', // Fixed high position
            transform: `translate(-50%, -50%) scale(${scaleVal})`,
            textAlign: 'center',
            width: 'max-content',
            opacity: textOpacity,
            pointerEvents: textOpacity <= 0 ? 'none' : 'auto'
          }}
        >
          <h1 className="hero-title">5610 Lobello Drive</h1>
        </div>

        {/* Scroll Hint Tab */}
        <div className="hero-scroll-tab">
          <span className="scroll-text">SCROLL</span>
          <div className="scroll-arrow"></div>
        </div>

      </div>

      <style>{`
        .hero-track {
          /* Much taller to allow for longer scroll time */
          height: 350vh; 
          position: relative;
          z-index: 10;
        }

        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          color: white;
        }

        .hero-bg-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: opacity 0.1s linear;
          will-change: opacity;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 3;
        }

        .hero-content-animator {
          position: absolute;
          z-index: 5;
          width: max-content;
          max-width: 90%;
          will-change: transform, opacity;
          transition: opacity 0.1s;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 5rem);
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-heading);
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          line-height: 1;
        }

        /* Scroll Tab Styling */
        .hero-scroll-tab {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: 20;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 2rem;
            animation: bounce 2s infinite;
        }
        
        .scroll-text {
            font-size: 0.8rem;
            letter-spacing: 0.2rem;
            margin-bottom: 0.5rem;
            font-weight: 300;
            text-transform: uppercase;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        
        .scroll-arrow {
            width: 20px;
            height: 20px;
            border-bottom: 2px solid white;
            border-right: 2px solid white;
            transform: rotate(45deg);
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
