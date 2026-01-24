import { galleryConfig } from '../galleryData';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <span className="hero-subtitle uppercase">Exclusive Listing</span>
        <h1 className="hero-title">1234 Lobello Drive</h1>
        <p className="hero-location">Dallas, TX 75225</p>
      </div>

      <style>{`
        .hero {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          background-image: url('${galleryConfig.heroImage}');
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Ensures strong static feel */
          display: flex;
          align-items: center;
          color: white;
          z-index: 0;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-bottom: var(--spacing-xl);
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        
        /* Optional: Fade content as it scrolls? 
           For now, keep it simple. */

        .hero-subtitle {
          font-size: 0.9rem;
          letter-spacing: 0.2rem;
          display: block;
          margin-bottom: var(--spacing-sm);
          color: var(--color-accent);
        }
        
        .hero-title {
          font-size: clamp(3rem, 6vw, 6rem);
          margin-bottom: var(--spacing-xs);
          font-family: var(--font-heading);
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero-location {
          font-size: 1.5rem;
          opacity: 0.9;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Hero;
