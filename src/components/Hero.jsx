import React from 'react';
import { images, propertyInfo, activeId } from '../config/propertyConfig';
import FadeIn from './FadeIn';

const Hero = () => {
    const isBrickellia = activeId === 'brickellia5168';

    if (isBrickellia) {
        return (
            <section className="hero-framed">
                {/* Main Media Background */}
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

                {/* Frame Border */}
                <div className="hero-frame-border"></div>

                {/* Content Overlay */}
                <div className="framed-content">
                    <div className="top-left-address">
                        <FadeIn direction="down" distance="30px" duration={1.5}>
                            <h1 className="framed-name">{propertyInfo.address}</h1>
                        </FadeIn>
                    </div>

                    {/* Modern Minimal HUD */}
                    <div className="bottom-right-hud">
                        <FadeIn direction="up" distance="20px" delay={800} duration={1}>
                            <div className="framed-hud-modern">
                                <div className="hud-part">
                                    <span className="hud-val">{propertyInfo.price}</span>
                                </div>
                                <div className="hud-divider-v"></div>
                                <div className="hud-part">
                                    <span className="hud-val">{propertyInfo.specs.beds} BEDS</span>
                                </div>
                                <div className="hud-divider-v"></div>
                                <div className="hud-part">
                                    <span className="hud-val">{propertyInfo.specs.baths} BATHS</span>
                                </div>
                                <div className="hud-divider-v"></div>
                                <div className="hud-part">
                                    <span className="hud-val">{propertyInfo.specs.sqft.toLocaleString()} SQ FT</span>
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
                        justify-content: center;
                        align-items: center;
                    }

                    .hero-media-wrapper {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }

                    .hero-media-bg {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        opacity: 0.9;
                    }

                    .hero-overlay-subtle {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 40%;
                        background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%);
                    }

                    /* Frame Border Effect */
                    .hero-frame-border {
                        position: absolute;
                        top: 2rem;
                        left: 2rem;
                        right: 2rem;
                        bottom: 2rem;
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        z-index: 5;
                        pointer-events: none;
                    }

                    .framed-content {
                        position: relative;
                        z-index: 10;
                        width: 100%;
                        height: 100%;
                        padding: 5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .top-left-address {
                        text-align: left;
                    }

                    .framed-name {
                        font-family: 'Marcellus', serif;
                        font-size: clamp(2.2rem, 5.5vw, 4.8rem);
                        font-weight: 300;
                        text-transform: uppercase;
                        letter-spacing: 0.25em;
                        line-height: 1.1;
                        color: #ffffff;
                        margin: 0;
                        text-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    }

                    .framed-subtitle {
                        font-family: var(--font-body);
                        font-size: 0.8rem;
                        letter-spacing: 0.4em;
                        text-transform: uppercase;
                        color: rgba(255,255,255,0.7);
                        margin-top: 1rem;
                        margin-left: 0.3rem;
                    }

                    .bottom-right-hud {
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                    }

                    /* Modern Linear HUD Style */
                    .framed-hud-modern {
                        display: flex;
                        align-items: center;
                        gap: 1.5rem;
                        padding: 0.5rem 0;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    }

                    .hud-part {
                        display: flex;
                        align-items: center;
                    }

                    .hud-val {
                        color: #fff;
                        font-family: var(--font-body);
                        font-size: clamp(1.2rem, 2.2vw, 1.8rem);
                        letter-spacing: 0.2em;
                        font-weight: 500;
                        text-transform: uppercase;
                        text-shadow: 0 2px 10px rgba(0,0,0,0.2);
                    }

                    .hud-divider-v {
                        width: 1px;
                        height: 12px;
                        background: rgba(255, 255, 255, 0.3);
                    }

                    .backdrop-blur {
                        backdrop-filter: blur(15px);
                        -webkit-backdrop-filter: blur(15px);
                    }

                    /* Mobile Adjustments */
                    @media (max-width: 900px) {
                        .hero-frame-border {
                            top: 1rem;
                            left: 1rem;
                            right: 1rem;
                            bottom: 1rem;
                        }
                        .framed-content {
                            padding: 3rem 2rem;
                        }
                        .framed-name {
                            font-size: 2.2rem;
                            letter-spacing: 0.15em;
                        }
                        .framed-hud-modern {
                            gap: 1rem;
                        }
                        .hud-val {
                            font-size: 0.6rem;
                        }
                        .hud-divider-v {
                            height: 10px;
                        }
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
