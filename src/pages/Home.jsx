import Hero from '../components/Hero';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import FullScreenImage from '../components/FullScreenImage';
import StaticSection from '../components/StaticSection';
import FadeIn from '../components/FadeIn';
import FloorPlans from '../components/FloorPlans';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { galleryConfig } from '../galleryData';

const Home = () => {
    return (
        <main>
            <SEO />
            <Hero />
            <FullScreenImage image={galleryConfig.lifestyleImage} sticky={true}>
                <div className="fs-text-banner">
                    <div className="container">
                        <div className="fs-content-layout">
                            {/* Left Column: Title & Description */}
                            <FadeIn direction="up" distance="30px">
                                <div className="fs-left-col">
                                    <h2 className="fs-main-title">Elegant Georgian Inspired Estate Home</h2>
                                    <div className="fs-stats-list uppercase">
                                        <span className="stat-line">7,890 SQ FT | Half-Acre Lot</span>
                                        <span className="stat-line">5 Beds | 6 Baths | 2 Powder</span>
                                        <span className="stat-line">Study | Game Room | Office | Den</span>
                                        <span className="stat-line">Outdoor Terrace | Pool | 4-Car Garage</span>
                                    </div>
                                    <div className="fs-price">$6,650,000</div>
                                </div>
                            </FadeIn>

                            {/* Right Column: Agent Info */}
                            <FadeIn direction="up" distance="30px" delay={200}>
                                <div className="fs-agent">
                                    <h4 className="fs-agent-title uppercase">Listed By</h4>
                                    <p className="fs-agent-name">Cole Swearingen</p>
                                    <p className="fs-agent-contact">972.971.9586</p>
                                    <p className="fs-agent-email">cole.swearingen@compass.com</p>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>

                <style>{`
                    /* Anchor banner to bottom handled by component now */

                    .fs-text-banner {
                        width: 100%;
                        background: rgba(253, 248, 240, 0.7); /* Creamier, 70% opacity */
                        backdrop-filter: blur(10px);
                        padding: 1.5rem 0; 
                        color: #111;
                        border-top: 1px solid rgba(0,0,0,0.05);
                        box-shadow: 0 -5px 20px rgba(0,0,0,0.05);
                    }

                    .fs-content-layout {
                        display: grid;
                        grid-template-columns: 1.5fr 1fr;
                        align-items: center; 
                        gap: 2rem; /* Closer together */
                        width: 100%;
                        max-width: 900px; /* Not so at the edge */
                        margin: 0 auto;
                        color: #111;
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
                        color: #000;
                        white-space: nowrap; /* Force single line */
                    }
                    .fs-stats-list {
                        font-size: clamp(0.75rem, 1.2vw, 0.95rem);
                        letter-spacing: 0.1rem;
                        line-height: 1.4; /* Tighter spacing */
                        font-weight: 300;
                        color: #333;
                    }
                    .stat-line { display: block; }
                    .fs-price {
                        font-size: clamp(1rem, 1.5vw, 1.2rem);
                        letter-spacing: 0.1rem;
                        margin-top: 1rem;
                        font-weight: 500;
                        color: #000;
                    }

                    /* Right Column Styles */
                    .fs-agent { 
                        text-align: right; 
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                    }
                    .fs-agent-title {
                        font-size: 0.75rem; /* Smaller label */
                        letter-spacing: 0.2em;
                        margin-bottom: 1rem;
                        color: #666;
                    }
                    .fs-agent-name {
                        font-size: clamp(1.4rem, 2vw, 1.8rem); /* Smaller name */
                        font-family: var(--font-heading);
                        margin-bottom: 0.5rem; /* Increased spacing */
                        line-height: 1.1;
                        color: #000;
                    }
                    .fs-agent-contact {
                        font-size: 1rem; /* Smaller contact */
                        margin-bottom: 0.5rem; /* Increased spacing */
                        font-weight: 300;
                        color: #333;
                        line-height: 1.4; /* Match left column line-height */
                    }
                    .fs-agent-email {
                        font-size: 0.8rem; /* Smaller email */
                        color: #555;
                        border-bottom: 1px solid rgba(0,0,0,0.15);
                        display: inline-block;
                        padding-bottom: 2px;
                        line-height: 1.4; /* Match left column line-height */
                    }

                    @media (max-width: 900px) {
                       .fs-content-layout {
                            grid-template-columns: 1fr;
                            gap: 3rem;
                            text-align: center;
                       }
                       .fs-left-col, .fs-agent { 
                           text-align: center; 
                           align-items: center;
                       }
                       .fs-main-title { margin-bottom: 2rem; }
                    }
                `}</style>
            </FullScreenImage>
            <Details />
            <Gallery limit={20} randomize={true} />
            <FloorPlans />
            <Footer />
        </main>
    );
};

export default Home;
