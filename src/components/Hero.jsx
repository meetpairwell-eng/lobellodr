import React from 'react';
import { images, propertyInfo } from '../config/propertyConfig';

const Hero = () => {
  return (
    <section className="hero">
      {/* Video Background */}
      {images.video ? (
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={images.video} type="video/mp4" />
        </video>
      ) : (
        <div className="hero-video-fallback"></div>
      )}

      {/* Mobile Image Background */}
      <img
        src={images.cover}
        alt={propertyInfo.address}
        className="hero-mobile-bg"
      />

      {/* Optional Overlay if needed later, currently transparent in CSS */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-main-stack">
          <h1 className="hero-name">{propertyInfo.address}</h1>
          <p className="hero-subtitle">{propertyInfo.tagline}</p>
          <div className="hero-actions">
            <a href="#gallery" className="btn-hero">VIEW PROPERTY</a>
          </div>
        </div>
      </div>

      <style>{`
                /* Hero Section Styles */
                .hero {
                    position: relative;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    padding-top: 0;
                }

                /* Video Background */
                .hero-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                /* Mobile Image Background */
                .hero-mobile-bg {
                    display: none;
                    /* Hidden by default on desktop */
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                /* Fallback gradient if video fails */
                .hero-video-fallback {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
                    background-image: url('${images.cover}');
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                }

                /* Dark Overlay for Text Readability - REMOVED but kept for structure */
                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: transparent;
                    /* Removed black filter */
                    z-index: 1 !important;
                    /* Ensure it stays behind text */
                }

                /* Container & Content Layout */
                .hero-container {
                    position: relative;
                    z-index: 10 !important;
                    /* MOVE ABOVE OVERLAY */
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh; /* Adjusted from -80px since no navbar is present */
                }

                .hero-main-stack {
                    text-align: center !important;
                    max-width: 1200px !important;
                    width: 100% !important;
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: center !important;
                    z-index: 11 !important;
                    /* Double check layering */
                }

                /* Typography - REFINED WHITE */
                .hero-name {
                    font-family: var(--font-heading);
                    font-size: clamp(2rem, 6.4vw, 4.4rem);
                    /* Reduced by 20% */
                    font-weight: 300;
                    /* THIN LUXURY WEIGHT */
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    margin-bottom: 0.5rem;
                    line-height: 1.1;
                    color: #ffffff !important;
                    /* ABSOLUTE WHITE */
                    text-shadow: none !important;
                    z-index: 12 !important;
                }

                .hero-subtitle {
                    font-family: var(--font-body);
                    font-size: clamp(0.75rem, 1.2vw, 0.9rem);
                    letter-spacing: 0.45em;
                    font-weight: 400;
                    /* REGULAR WEIGHT */
                    margin-bottom: 3rem;
                    color: #ffffff !important;
                    /* ABSOLUTE WHITE */
                    text-transform: uppercase;
                    opacity: 1;
                    text-shadow: none !important;
                    z-index: 12 !important;
                }

                .hero-actions {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                /* Minimalist Button */
                .btn-hero {
                    display: inline-block;
                    padding: 0.88rem 2.4rem;
                    /* 20% smaller than 1.1rem 3rem */
                    font-family: var(--font-body);
                    font-size: 0.65rem;
                    /* 20% smaller than 0.8rem */
                    font-weight: 500;
                    /* MEDIUM WEIGHT */
                    letter-spacing: 0.25em;
                    /* Spaced out for luxury feel */
                    text-transform: uppercase;
                    color: #ffffff !important;
                    border: 1px solid #ffffff;
                    background: transparent;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    z-index: 12 !important;
                }

                .btn-hero:hover {
                    background: #ffffff;
                    color: #1a1a1a !important;
                }

                /* Mobile Adjustments */
                @media (max-width: 768px) {
                    /* Hide video, show image */
                    .hero-video {
                        display: none;
                    }

                    /* Hide the blue fallback on mobile so the image is seen */
                    .hero-video-fallback {
                        display: none !important;
                    }

                    .hero-mobile-bg {
                        display: block;
                        z-index: 1;
                        /* Ensure it sits above any potential background */
                    }

                    .hero-name {
                        font-size: 2.2rem;
                        letter-spacing: 0.1em;
                    }

                    .hero-subtitle {
                        font-size: 0.7rem;
                        letter-spacing: 0.3em;
                        margin-bottom: 2rem;
                    }

                    .btn-hero {
                        padding: 0.9rem 2rem;
                        font-size: 0.75rem;
                    }
                }
            `}</style>
    </section>
  );
};

export default Hero;
