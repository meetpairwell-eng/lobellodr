import React from 'react';
import { images, propertyInfo, activeId } from '../config/propertyConfig';
import FadeIn from './FadeIn';

const Hero = () => {
    const isBrickellia = activeId === 'brickellia5168';

    const scrollToGallery = () => {
        const gallery = document.querySelector('.gallery-section');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (isBrickellia) {
        return (
            <section className="hero-framed">
                {/* Top Half Media */}
                <div className="hero-media-wrapper">
                    {images.video ? (
                        <video className="hero-media-bg" autoPlay loop muted playsInline>
                            <source src={images.video} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={images.cover} alt={propertyInfo.address} className="hero-media-bg" />
                    )}
                    <div className="hero-overlay-subtle"></div>
                </div>

                {/* Frame Border - Corner Brackets over Top Half */}
                <div className="hero-frame-border">
                    <div className="corner-tl"></div>
                    <div className="corner-tr"></div>
                    <div className="corner-bl"></div>
                    <div className="corner-br"></div>
                </div>

                {/* Bottom Half Content Overlay */}
                <div className="framed-content">
                    <div className="top-left-address">
                        <FadeIn direction="down" distance="30px" duration={1.5}>
                            <div className="tech-tag">RESIDENCE // 5168</div>
                            <h1 className="framed-name">{propertyInfo.address}</h1>
                        </FadeIn>
                    </div>

                    {/* Modern Tech HUD Dashboard */}
                    <div className="bottom-right-hud">
                        <FadeIn direction="up" distance="20px" delay={800} duration={1}>
                            <div className="framed-hud-tech">
                                <div className="tech-hud-main">
                                    <div className="tech-header-row">
                                        <div className="tech-price-large">{propertyInfo.price}</div>
                                        <button className="ghost-photos-btn" onClick={scrollToGallery}>
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>
                                            <span>VIEW PHOTOS</span>
                                        </button>
                                    </div>
                                    <div className="tech-specs-row">
                                        <div className="tech-spec-item">
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8M4 10V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5M12 4v6M2 18h20" /></svg>
                                            <span>{propertyInfo.specs.beds} BEDS</span>
                                        </div>
                                        <div className="tech-spec-dot"></div>
                                        <div className="tech-spec-item">
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM7 8h10M7 12h10M7 16h10" /></svg>
                                            <span>{propertyInfo.specs.baths} BATHS</span>
                                        </div>
                                        <div className="tech-spec-dot"></div>
                                        <div className="tech-spec-item">
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
                                            <span>{propertyInfo.specs.sqft.toLocaleString()} SQ FT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                <style>{`
                    .hero-framed {
                        position: relative;
                        width: 100%;
                        height: 100vh;
                        background: #000;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                    }

                    .hero-media-wrapper {
                        position: relative;
                        width: 100%;
                        height: 55vh;
                        z-index: 1;
                    }

                    .hero-media-bg {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        opacity: 1;
                    }

                    .hero-overlay-subtle {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 100%);
                    }

                    /* Frame Border Brackets (over media) */
                    .hero-frame-border {
                        position: absolute;
                        top: 1.5rem;
                        left: 1.5rem;
                        right: 1.5rem;
                        height: calc(55vh - 3rem);
                        z-index: 5;
                        pointer-events: none;
                    }

                    .corner-tl, .corner-tr, .corner-bl, .corner-br {
                        position: absolute;
                        width: 25px;
                        height: 25px;
                        border: 1px solid rgba(255,255,255,0.4);
                        z-index: 6;
                    }
                    .corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
                    .corner-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
                    .corner-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
                    .corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }

                    .framed-content {
                        position: relative;
                        z-index: 10;
                        width: 100%;
                        height: 45vh;
                        padding: 3rem 2rem;
                        background: #0a0a0a;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        gap: 2.5rem;
                    }

                    /* Architectural Design Lines */
                    .framed-content::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 2rem;
                        width: 1px;
                        height: 100%;
                        background: linear-gradient(to bottom, rgba(255,255,255,0.1), transparent);
                    }

                    .top-left-address {
                        text-align: left;
                        padding-left: 1.5rem;
                    }

                    .tech-tag {
                        font-family: var(--font-body);
                        font-size: 0.6rem;
                        letter-spacing: 0.5em;
                        color: rgba(255,255,255,0.4);
                        margin-bottom: 1rem;
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                    }

                    .tech-tag::after {
                        content: "";
                        width: 40px;
                        height: 1px;
                        background: rgba(255,255,255,0.2);
                    }

                    .framed-name {
                        font-family: 'Marcellus', serif;
                        font-size: 1.8rem;
                        font-weight: 300;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        line-height: 1.1;
                        color: #ffffff;
                        margin: 0;
                    }

                    .bottom-right-hud {
                        width: 100%;
                    }

                    .framed-hud-tech {
                        padding: 0 1.5rem;
                        width: 100%;
                    }

                    .tech-hud-main {
                        display: flex;
                        flex-direction: column;
                        gap: 1.5rem;
                    }

                    .tech-header-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        gap: 2rem;
                    }

                    .tech-price-large {
                        font-family: 'Marcellus', serif;
                        font-size: 1.8rem;
                        color: #fff;
                        letter-spacing: 0.15em;
                        line-height: 1;
                        text-transform: uppercase;
                    }

                    .ghost-photos-btn {
                        background: transparent;
                        border: 1px solid rgba(255,255,255,0.2);
                        color: rgba(255,255,255,0.8);
                        padding: 0.6rem 1.2rem;
                        font-size: 0.65rem;
                        letter-spacing: 0.2em;
                        display: flex;
                        align-items: center;
                        gap: 0.8rem;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .ghost-photos-btn:hover {
                        background: #fff;
                        color: #000;
                        border-color: #fff;
                    }

                    .tech-specs-row {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                        color: rgba(255,255,255,0.6);
                        font-family: var(--font-body);
                        font-size: 0.65rem;
                        letter-spacing: 0.2rem;
                        text-transform: uppercase;
                    }

                    .tech-spec-item {
                        display: flex;
                        align-items: center;
                        gap: 0.6rem;
                    }

                    .tech-spec-item svg {
                        opacity: 0.5;
                        width: 14px;
                        height: 14px;
                    }

                    .tech-spec-dot {
                        width: 4px;
                        height: 4px;
                        background: rgba(255,255,255,0.2);
                        border-radius: 50%;
                    }

                    /* Desktop Reset */
                    @media (min-width: 901px) {
                        .hero-framed {
                            flex-direction: row;
                            justify-content: center;
                            align-items: center;
                            padding: 2rem;
                        }

                        .hero-media-wrapper {
                            position: absolute;
                            top: 0; left: 0;
                            width: 100%; height: 100%;
                            z-index: 1;
                        }

                        .hero-media-bg {
                            opacity: 0.9;
                        }

                        .hero-frame-border {
                            top: 2rem; left: 2rem;
                            right: 2rem; bottom: 2rem;
                            height: auto;
                            border: 1px solid rgba(255,255,255,0.2);
                        }

                        .framed-content {
                            height: 100%;
                            padding: 5rem;
                            background: transparent;
                            justify-content: space-between;
                            align-items: flex-start;
                            gap: 0;
                        }

                        .framed-content::before {
                            display: none;
                        }

                        .top-left-address { padding-left: 0; }
                        .tech-tag { font-size: 0.7rem; color: rgba(255,255,255,0.6); }
                        .framed-name { font-size: 4.2rem; }

                        .bottom-right-hud {
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            align-items: flex-end;
                        }

                        .framed-hud-tech {
                            background: transparent;
                            backdrop-filter: none;
                            border: none;
                            padding: 0;
                            width: 100%;
                            min-width: 0;
                        }

                        .tech-hud-main {
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: flex-end;
                            width: 100%;
                            gap: 4rem;
                        }

                        .tech-header-row {
                            margin-bottom: 0;
                            justify-content: flex-start;
                            gap: 3rem;
                        }

                        .tech-price-large { font-size: 4.2rem; }
                        .tech-specs-row { font-size: 0.85rem; gap: 2.5rem; color: rgba(255,255,255,0.8); }
                        .tech-spec-item svg { width: 18px; height: 18px; }
                    }
                `}</style>
            </section>
        );
    }

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
                    letter-spacing: 0.3em;
                    margin: 0;
                    line-height: 1;
                    color: #ffffff;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    margin-right: -0.3em;
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
