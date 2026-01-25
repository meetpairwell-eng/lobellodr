import React, { useEffect } from 'react';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const FullGallery = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="full-gallery-page">
            <div className="full-gallery-header">
                <div className="container">
                    <h1 className="fg-title">Full Photo Gallery</h1>
                    <a href="/" className="fg-back-link">← Back to Home</a>
                </div>
            </div>

            <Gallery />

            <Footer />

            <style>{`
                .full-gallery-page {
                    background-color: white;
                    min-height: 100vh;
                    padding-top: 2rem;
                }
                
                .full-gallery-header {
                    padding: 2rem 0;
                    text-align: center;
                }
                
                .fg-title {
                    font-family: var(--font-heading);
                    font-size: clamp(2rem, 3vw, 3rem);
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                    letter-spacing: 0.1em;
                }
                
                .fg-back-link {
                    color: #555;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 0.2em;
                    transition: color 0.3s;
                }
                
                .fg-back-link:hover {
                    color: #000;
                    text-decoration: underline;
                }
            `}</style>
        </main>
    );
};

export default FullGallery;
