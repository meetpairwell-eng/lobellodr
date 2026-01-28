import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import { propertyInfo, theme, layout, activeId, galleryConfig_LEGACY as galleryConfig } from './config/propertyConfig';

function App() {
  const [isOpen, setIsOpen] = useState(layout?.showWelcomeScreen === false); // If welcome screen is off, set to open immediately
  const [isInitialized, setIsInitialized] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Dynamic Style Loader
  useEffect(() => {
    if (activeId) {
      // Use Vite's dynamic import to load CSS if it exists
      // We wrap it in a try-catch to silently fail if no custom CSS exists
      const loadCustomStyles = async () => {
        try {
          await import(`./styles/properties/${activeId}.css`);
        } catch (e) {
          // No custom styles for this property, which is fine
        }
      };
      loadCustomStyles();
    }
  }, [activeId]);

  // Apply Theme Overrides
  useEffect(() => {
    if (theme && theme.colors) {
      const root = document.documentElement;

      // Map colors
      if (theme.colors.bg) root.style.setProperty('--color-bg', theme.colors.bg);
      if (theme.colors.text) root.style.setProperty('--color-text', theme.colors.text);
      if (theme.colors.textLight) root.style.setProperty('--color-text-light', theme.colors.textLight);
      if (theme.colors.accent) root.style.setProperty('--color-accent', theme.colors.accent);
      if (theme.colors.border) root.style.setProperty('--color-border', theme.colors.border);
      if (theme.colors.overlay) root.style.setProperty('--color-overlay', theme.colors.overlay);

      // Advanced Theme UI
      if (theme.ui) {
        if (theme.ui.borderRadius) root.style.setProperty('--radius-md', theme.ui.borderRadius);
        if (theme.ui.buttonPadding) root.style.setProperty('--btn-padding', theme.ui.buttonPadding);
        if (theme.ui.letterSpacing) root.style.setProperty('--ls-widest', theme.ui.letterSpacing);
        if (theme.ui.heroTextAlign) root.style.setProperty('--hero-text-align', theme.ui.heroTextAlign);
        if (theme.ui.heroTextTop) root.style.setProperty('--hero-text-top', theme.ui.heroTextTop);
      }

      // Map fonts
      if (theme.fonts) {
        if (theme.fonts.heading) root.style.setProperty('--font-heading', theme.fonts.heading);
        if (theme.fonts.body) root.style.setProperty('--font-body', theme.fonts.body);
      }
    }
  }, [theme]);

  // Small delay to ensure smooth initial render
  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Manage body scroll based on state (Only on Home)
  useEffect(() => {
    if (isHome) {
      if (isOpen) {
        document.body.style.overflow = 'auto'; // Re-enable scroll when open
      } else {
        document.body.style.overflow = 'hidden'; // Lock scroll initially
      }
    } else {
      document.body.style.overflow = 'auto'; // Always allow scroll on other pages
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isHome]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={`app-wrapper property-${activeId} ${isOpen ? 'is-open' : 'is-closed'}`}>

      {/* Welcome Screen Overlay - ONLY ON HOME AND IF ENABLED */}
      {isHome && layout?.showWelcomeScreen !== false && (
        <div className={`welcome-screen ${isOpen ? 'fade-out' : ''}`}>
          <div className="welcome-bg"></div>
          <div className="welcome-content">
            <h2 className="welcome-address">{propertyInfo.address}</h2>
            <button className="welcome-btn" onClick={handleOpen}>
              CLICK TO OPEN
            </button>
          </div>
        </div>
      )}

      {/* Routes */}
      <div className={`main-content ${isHome && !isOpen ? 'hidden' : 'visible'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<FullGallery />} />
        </Routes>
      </div>

      <style>{`
        .app-wrapper {
          position: relative;
          min-height: 100vh;
        }

        /* Welcome Screen Styling */
        .welcome-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 1.5s;
          pointer-events: all;
          background-color: #000;
        }

        .welcome-screen.fade-out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .welcome-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('${galleryConfig.heroImage}');
          background-size: cover;
          background-position: center;
          filter: blur(15px);
          transform: scale(1.1);
          transition: filter 1.5s ease;
        }

        .welcome-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          padding: 2rem;
        }

        .welcome-address {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 5rem);
          margin-bottom: 2rem;
          text-shadow: 0 4px 15px rgba(0,0,0,0.5);
          letter-spacing: 0.05em;
        }

        .welcome-btn {
          font-family: var(--font-body);
          color: white;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 1rem 2.5rem;
          font-size: 0.9rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          transition: all 0.5s ease;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(5px);
        }

        .welcome-btn:hover {
          background: white;
          color: black;
          letter-spacing: 0.4em;
          border-color: white;
        }

        /* Content Visibility */
        .main-content {
            transition: opacity 1s ease;
        }
        .main-content.hidden {
            opacity: 0; 
            height: 100vh; 
            overflow: hidden;
        }
        .main-content.visible {
            opacity: 1;
        }

      `}</style>
    </div>
  );
}

export default App;
