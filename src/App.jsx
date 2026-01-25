import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import { galleryConfig } from './galleryData';

function App() {
  const [isOpen, setIsOpen] = useState(true); // Open by default for scroll effect
  const [isInitialized, setIsInitialized] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
    <div className={`app-wrapper ${isOpen ? 'is-open' : 'is-closed'}`}>

      {/* Welcome Screen Overlay - ONLY ON HOME */}
      {isHome && (
        <div className={`welcome-screen ${isOpen ? 'fade-out' : ''}`}>
          <div className="welcome-bg"></div>
          <div className="welcome-content">
            <h2 className="welcome-address">1234 Lobello Drive</h2>
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
