import React from 'react';
import { images, propertyInfo } from '../config/propertyConfig';
import FadeIn from './FadeIn';

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

            {/* Clean, Modern Overlay (Subtle) */}
            <div className="hero-overlay"></div>

            <div className="hero-container">
                <div className="hero-main-stack">
                    <FadeIn direction="up" distance="40px" duration={1.2}>
                        <h1 className="hero-name">{propertyInfo.address}</h1>
                    </FadeIn>
                </div>

                {/* Floating Modern HUD */}
                <div className="hero-hud-wrapper">
                    <FadeIn direction="up" distance="20px" delay={600} duration={1}>
                        <div className="hero-hud">
                            <div className="hud-item hud-price">{propertyInfo.price}</div>
                            <div className="hud-divider"></div>
                            <div className="hud-item">{propertyInfo.specs.beds} BEDS</div>
                            <div className="hud-divider"></div>
                            <div className="hud-item">{propertyInfo.specs.baths} BATHS</div>
                            <div className="hud-divider"></div>
                            <div className="hud-item">{propertyInfo.specs.sqft.toLocaleString()} SQ FT</div>
                        </div>
                    </FadeIn>
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
                    background: #fff;
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
                    opacity: 0.95;
                }

                /* Mobile Image Background */
                .hero-mobile-bg {
                    display: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                }

                /* Fallback gradient */
                .hero-video-fallback {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #f8f8f8;
                    background-image: url('${images.cover}');
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                }

                /* Refined Modern Overlay - Very Subtle */
                .hero-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.05) 0%,
                        rgba(0,0,0,0.02) 50%,
                        rgba(0,0,0,0.1) 100%
                    );
                    z-index: 1;
                }

                /* Container & Content Layout */
                .hero-container {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .hero-main-stack {
                    text-align: center;
                    width: 100%;
                    padding: 0 2rem;
                    margin-bottom: 4vh;
                }

                /* Typography - DRAMATIC MARCELLUS */
                .hero-name {
                    font-family: 'Marcellus', serif;
                    font-size: clamp(2.5rem, 8vw, 6.5rem);
                    font-weight: 300;
                    text-transform: uppercase;
                    letter-spacing: 0.3em; /* Dramatic wide spacing */
                    margin: 0;
                    line-height: 1;
                    color: #ffffff;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    margin-right: -0.3em; /* Compensate for last letter spacing */
                }

                /* Floating HUD Bar */
                .hero-hud-wrapper {
                    position: absolute;
                    bottom: 8vh;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    padding: 0 2rem;
                }

                .hero-hud {
                    display: flex;
                    align-items: center;
                    padding: 0.75rem 2.5rem;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(15px) saturate(180%);
                    -webkit-backdrop-filter: blur(15px) saturate(180%);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 100px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }

                .hud-item {
                    font-family: var(--font-body);
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 0.2em;
                    color: #ffffff;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                .hud-price {
                    font-weight: 600;
                    font-family: 'Marcellus', serif;
                    font-size: 0.9rem;
                }

                .hud-divider {
                    width: 1px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.4);
                    margin: 0 1.5rem;
                }

                /* Mobile Adjustments */
                @media (max-width: 900px) {
                    .hero-video {
                        display: none;
                    }
                    .hero-mobile-bg {
                        display: block;
                        z-index: 0;
                    }
                    .hero-name {
                        font-size: 2.8rem;
                        letter-spacing: 0.2em;
                        margin-right: -0.2em;
                    }
                    .hero-hud {
                        padding: 0.6rem 1.5rem;
                        flex-wrap: wrap;
                        justify-content: center;
                        border-radius: 20px;
                        gap: 0.8rem;
                        background: rgba(255, 255, 255, 0.2);
                    }
                    .hud-divider {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;
