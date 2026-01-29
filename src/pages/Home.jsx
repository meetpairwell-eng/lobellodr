import { useRef, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import FullScreenImage from '../components/FullScreenImage';
import StaticSection from '../components/StaticSection';
import FadeIn from '../components/FadeIn';
import FloorPlans from '../components/FloorPlans';
import Map from '../components/Map';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { images, propertyInfo, agentInfo, layout } from '../config/propertyConfig';

const LifestyleScrollHint = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Observer to detect when this sticky layer is visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Start timer when entering view
                    const timer = setTimeout(() => {
                        setIsVisible(true);
                    }, 1000); // 1 second delay
                    return () => clearTimeout(timer);
                } else {
                    // Hide immediately when leaving
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 } // Trigger as soon as 10% is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fs-scroll-indicator ${isVisible ? 'visible' : ''}`}
        >
            <span className="scroll-text">SCROLL</span>
            <div className="scroll-arrow"></div>
        </div>
    );
};

const Home = () => {
    // Default layout settings if not provided
    const showGallery = layout?.showGallery ?? true;
    const showFloorPlans = layout?.showFloorPlans ?? true;
    const showDetails = layout?.showDetails ?? true;

    return (
        <main>
            <SEO />
            <Hero />
            <FullScreenImage
                image={images.lifestyle}
                sticky={true}
                stickyContent={<LifestyleScrollHint />}
            >

                <div className="fs-text-banner">
                    <div className="container">
                        <div className="fs-content-layout">
                            {/* Left Column: Title & Description */}
                            <FadeIn direction="up" distance="30px">
                                <div className="fs-left-col">
                                    <div className="fs-price">{propertyInfo.price}</div>
                                    {propertyInfo.description && (
                                        <p className="fs-description">{propertyInfo.description}</p>
                                    )}
                                </div>
                            </FadeIn>

                            {/* Right Column: Property Specs & Agent Info */}
                            <FadeIn direction="up" distance="30px" delay={200}>
                                <div className="fs-right-col">
                                    {/* Property Information & Features */}
                                    <div className="fs-features-list">
                                        <div className="feature-line">
                                            {propertyInfo.specs.beds} Beds | {propertyInfo.specs.baths} Baths | {propertyInfo.specs.powder} Powder
                                        </div>
                                        <div className="feature-line">
                                            {propertyInfo.specs.sqft} SQ FT | {propertyInfo.specs.lotSize} Lot
                                        </div>
                                        <div className="feature-line">
                                            {propertyInfo.features.filter(f => f !== 'Hardwood Floors').join(' | ')}
                                        </div>
                                        <div className="feature-line">
                                            Outdoor Terrace | Pool | Hardwood Floors | {propertyInfo.specs.garage} Garage
                                        </div>
                                    </div>

                                    {/* Agent Info */}
                                    <div className="fs-agent">
                                        <h4 className="fs-agent-title uppercase">Listed By</h4>
                                        <p className="fs-agent-name">{agentInfo.name}</p>
                                        <p className="fs-agent-contact">{agentInfo.phone}</p>
                                        <p className="fs-agent-email">{agentInfo.email}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                <style>{`
                    /* Anchor banner to bottom handled by component now */

                    .fs-text-banner {
                        width: 100%;
                        background: var(--color-bg); 
                        opacity: 0.85; /* Slight transparency for the banner */
                        backdrop-filter: blur(10px);
                        padding: 1.5rem 0; 
                        color: var(--color-text);
                        border-top: 1px solid var(--color-border);
                        box-shadow: 0 -5px 20px rgba(0,0,0,0.05);
                        position: relative;
                        z-index: 25;
                    }
                    
                    /* Scroll Indicator Styles */
                    .fs-scroll-indicator {
                        position: absolute;
                        bottom: 40%; /* Moved UP significantly to avoid being covered by the banner */
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 20;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        animation: bounce 2s infinite;
                        color: white;
                        pointer-events: none;
                        opacity: 0; /* Hidden by default */
                        transition: opacity 1s ease; /* Slower fade in */
                        mix-blend-mode: difference; /* Optional: helps visibility on light/dark images */
                    }

                    .fs-scroll-indicator.visible {
                        opacity: 1; 
                    }
                    
                    .scroll-text {
                        font-size: 0.8rem;
                        letter-spacing: 0.2rem;
                        font-weight: 500; /* Bolder */
                        text-transform: uppercase;
                        text-shadow: 0 2px 4px rgba(0,0,0,0.8); /* Stronger shadow */
                        margin-bottom: 5px;
                    }

                    .scroll-arrow {
                        width: 20px;
                        height: 20px;
                        border-bottom: 2px solid white;
                        border-right: 2px solid white;
                        transform: rotate(45deg);
                        filter: drop-shadow(0 2px 2px rgba(0,0,0,0.8));
                    }
                    
                    @keyframes bounce {
                        0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
                        40% { transform: translateX(-50%) translateY(-10px); }
                        60% { transform: translateX(-50%) translateY(-5px); }
                    }

                    .fs-content-layout {
                        display: grid;
                        grid-template-columns: 1.5fr 1fr;
                        align-items: flex-start; 
                        gap: 2rem; /* Closer together */
                        width: 100%;
                        max-width: 1150px; /* Widened to move margins out */
                        margin: 0 auto;
                        color: var(--color-text);
                        padding: 0 1rem;
                    }

                    /* Left Column Styles */
                    .fs-left-col {
                        text-align: left;
                    }
                    .fs-main-title {
                        font-size: clamp(0.9rem, 1.4vw, 1.3rem); /* Smaller to force single line */
                        font-family: var(--font-heading);
                        margin: 0 0 0.5rem 0;
                        letter-spacing: 0.05rem; /* Reduced tracking */
                        text-transform: uppercase;
                        line-height: 1.1;
                        color: var(--color-text);
                        white-space: nowrap; /* Force single line */
                    }
                    .fs-stats-list {
                        font-size: clamp(0.75rem, 1.2vw, 0.95rem);
                        letter-spacing: 0.1rem;
                        line-height: 1.4; /* Tighter spacing */
                        font-weight: 300;
                        color: var(--color-text-light);
                    }
                    .stat-line { display: block; }
                    .fs-price {
                        font-size: clamp(1rem, 1.5vw, 1.2rem);
                        letter-spacing: 0.1rem;
                        margin: 0; /* Removed top margin for alignment */
                        font-weight: 500;
                        color: var(--color-text);
                    }
                    .fs-description {
                        font-family: var(--font-body);
                        font-size: 0.9rem;
                        line-height: 1.6;
                        margin-top: 1.5rem;
                        max-width: 600px;
                        color: var(--color-text);
                        opacity: 0.9;
                    }

                    /* Right Column Styles */
                    .fs-right-col {
                        text-align: right;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        gap: 0.5rem; /* Reduced gap */
                    }
                    
                    /* Property Information & Features Styles */
                    .fs-features-list {
                        text-align: right;
                        margin-top: 3rem; /* Push down to align with description text */
                        margin-bottom: 0.5rem;
                    }
                    .feature-line {
                        font-family: var(--font-body);
                        font-size: 0.9rem;
                        color: var(--color-text);
                        line-height: 1.6;
                        text-transform: none;
                        letter-spacing: normal;
                        opacity: 0.9;
                    }
                    
                    .fs-agent { 
                        text-align: right; 
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                    .fs-agent-title {
                        font-size: 0.75rem; /* Smaller label */
                        letter-spacing: 0.2em;
                        margin-bottom: 0.2rem; /* Reduced to move closer to name */
                        color: var(--color-text); /* Darkened text */
                    }
                    .fs-agent-name {
                        font-size: clamp(1.4rem, 2vw, 1.8rem); /* Smaller name */
                        font-family: var(--font-heading);
                        margin-bottom: 0.2rem; 
                        line-height: 1.2;
                        color: var(--color-text);
                    }
                    .fs-agent-contact {
                        font-family: var(--font-body);
                        font-size: 0.9rem;
                        font-weight: 300;
                        color: var(--color-text);
                        line-height: 1.6; /* Matched feature-line spacing */
                        margin: 0;
                    }
                    .fs-agent-email {
                        font-family: var(--font-body);
                        font-size: 0.9rem;
                        color: var(--color-text);
                        line-height: 1.6; /* Matched feature-line spacing */
                        opacity: 0.9;
                        border-bottom: 1px solid var(--color-border);
                        display: inline-block;
                        padding-bottom: 2px;
                    }

                    @media (max-width: 900px) {
                       .fs-content-layout {
                            grid-template-columns: 1fr;
                            gap: 3rem;
                            text-align: center;
                       }
                       .fs-left-col, .fs-right-col, .fs-agent, .fs-features-list { 
                           text-align: center; 
                           align-items: center;
                       }
                       .fs-main-title { margin-bottom: 2rem; }
                    }
                `}</style>
            </FullScreenImage>
            {showDetails && <Details />}
            {showGallery && <Gallery limit={20} randomize={true} />}
            {showFloorPlans && <FloorPlans />}
            <Map />
            <Footer />
        </main>
    );
};

export default Home;
