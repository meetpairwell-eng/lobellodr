import React from 'react';
import { agentInfo, propertyInfo } from '../config/propertyConfig';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Realtor Logo SVG
    const RealtorLogo = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 0h-24v24h24v-24zm-12.7 18.2h-3.3v-12h3.3v12zm6.7 0h-3.3v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3.3v-12h3.3v2c0 1.1.9 2 2 2s2-.9 2-2v-2h3.3v12z" />
        </svg>
    );

    // Equal Housing Opportunity Logo SVG
    const EHOLogo = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 11h3v10h14V11h3L12 3zm-2 15h4v-2h-4v2zm0-4h4v-2h-4v2z" />
        </svg>
    );

    return (
        <footer className="footer">
            <div className="container">
                {/* Agent Header Section */}
                <div className="footer-agent-header">
                    <div className="agent-branding-col">
                        <h2 className="agent-name-main">{agentInfo.name}</h2>
                        <p className="agent-title-main">REAL ESTATE AGENT</p>
                    </div>

                    <div className="footer-divider-v"></div>

                    <div className="footer-contact-col">
                        <h4 className="footer-col-label">CONTACT</h4>
                        <a href={`tel:${agentInfo.phone.replace(/\D/g, '')}`} className="footer-contact-link">
                            tel: {agentInfo.phone}
                        </a>
                        <a href={`mailto:${agentInfo.email}`} className="footer-contact-link">
                            {agentInfo.email}
                        </a>
                    </div>

                    <div className="footer-office-col">
                        <h4 className="footer-col-label">OFFICE</h4>
                        {agentInfo.officePhone && (
                            <a href={`tel:${agentInfo.officePhone.replace(/\D/g, '')}`} className="footer-contact-link">
                                tel: {agentInfo.officePhone}
                            </a>
                        )}
                        <p className="footer-address-text">
                            {agentInfo.address}
                        </p>
                    </div>

                    <div className="footer-social-col">
                        <h4 className="footer-col-label">FOLLOW US</h4>
                        <div className="footer-social-links">
                            {agentInfo.socialMedia?.facebook && (
                                <a href={agentInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-circle">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                </a>
                            )}
                            {agentInfo.socialMedia?.instagram && (
                                <a href={agentInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-circle">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <hr className="footer-hr" />

                {/* Secondary Nav bar */}
                <div className="footer-nav-bar">
                    <a href="#properties">PROPERTIES</a>
                    <span className="nav-divider">|</span>
                    <a href="#home-search">HOME SEARCH</a>
                    <span className="nav-divider">|</span>
                    <a href="#home-valuation">HOME VALUATION</a>
                    <span className="nav-divider">|</span>
                    <a href="#testimonials">TESTIMONIALS</a>
                    <span className="nav-divider">|</span>
                    <a href="#contact-us">CONTACT US</a>
                </div>

                {/* Legal Links (Trec) */}
                <div className="footer-trec-links">
                    <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" target="_blank" rel="noopener noreferrer">Texas Real Estate Commission Consumer Protection Notice</a>
                    <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-0.pdf" target="_blank" rel="noopener noreferrer">Texas Real Estate Commission Information About Brokerage Services</a>
                    <a href="#">TREC Disclaimer</a>
                </div>

                {/* Main Disclaimer */}
                <div className="footer-main-disclaimer">
                    <p>
                        {agentInfo.name} is a real estate agent affiliated with Compass. Compass is a licensed real estate broker and abides by all applicable equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
                    </p>
                </div>

                {/* Logos Section */}
                <div className="footer-logos">
                    <RealtorLogo />
                    <EHOLogo />
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom-bar">
                    <span>Powered by Pairwell</span>
                    <span className="bottom-divider">|</span>
                    <span>Copyright © {currentYear}</span>
                    <span className="bottom-divider">|</span>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>

            {/* Let's Connect Button */}
            <button className="lets-connect-btn">
                LET'S CONNECT <span className="btn-arrow">↓</span>
            </button>

            <style>{`
                .footer {
                    background: #fff;
                    color: #333;
                    padding: 100px 0 60px;
                    border-top: 1px solid #eee;
                    position: relative;
                    overflow: hidden;
                }

                .container {
                    max-width: 1300px;
                    margin: 0 auto;
                    padding: 0 60px;
                }

                .footer-agent-header {
                    display: grid;
                    grid-template-columns: 2fr 1px 1fr 1.25fr 0.8fr;
                    gap: 60px;
                    align-items: start;
                    margin-bottom: 20px;
                }

                .agent-name-main {
                    font-family: var(--font-heading);
                    font-size: 2.2rem;
                    color: #000;
                    margin: 10px 0 8px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    font-weight: 400;
                    line-height: 1.1;
                    white-space: nowrap;
                }

                .agent-title-main {
                    font-size: 0.8rem;
                    color: #666;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    margin: 0;
                    font-weight: 500;
                }

                .footer-divider-v {
                    width: 1px;
                    height: 90px;
                    background: #e0e0e0;
                    align-self: center;
                }

                .footer-col-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 25px;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }

                .footer-contact-link {
                    display: block;
                    color: #666;
                    font-size: 1rem;
                    text-decoration: none;
                    margin-bottom: 10px;
                    font-weight: 300;
                    transition: color 0.3s;
                }

                .footer-contact-link:hover {
                    color: #000;
                }

                .footer-address-text {
                    color: #666;
                    font-size: 1rem;
                    line-height: 1.6;
                    margin: 0;
                    font-weight: 300;
                    max-width: 280px;
                }

                .footer-social-links {
                    display: flex;
                    gap: 15px;
                }

                .footer-social-circle {
                    width: 36px;
                    height: 36px;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                    transition: all 0.3s;
                }

                .footer-social-circle:hover {
                    color: #000;
                    border-color: #000;
                }

                .footer-hr {
                    border: none;
                    border-top: 1px solid #eee;
                    margin: 80px 0 60px;
                }

                .footer-nav-bar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;
                    margin-bottom: 50px;
                }

                .footer-nav-bar a {
                    font-size: 0.85rem;
                    color: #000;
                    text-decoration: none;
                    letter-spacing: 0.15em;
                    font-weight: 600;
                    transition: opacity 0.3s;
                }

                .footer-nav-bar a:hover {
                    opacity: 0.6;
                }

                .nav-divider {
                    color: #e0e0e0;
                    font-weight: 300;
                }

                .footer-trec-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 50px;
                }

                .footer-trec-links a {
                    color: #999;
                    font-size: 0.8rem;
                    text-decoration: underline;
                    transition: color 0.3s;
                    font-weight: 400;
                }

                .footer-trec-links a:hover {
                    color: #555;
                }

                .footer-main-disclaimer {
                    max-width: 1100px;
                    margin: 0 auto 50px;
                    text-align: center;
                }

                .footer-main-disclaimer p {
                    font-size: 0.75rem;
                    line-height: 2;
                    color: #999;
                    margin: 0;
                    font-weight: 400;
                }

                .footer-logos {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-bottom: 80px;
                    color: #bbb;
                }

                .footer-bottom-bar {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    font-size: 0.8rem;
                    color: #999;
                    border-top: 1px solid #eee;
                    padding-top: 50px;
                    text-transform: none;
                    letter-spacing: 0.02em;
                }

                .footer-bottom-bar a {
                    color: #999;
                    text-decoration: none;
                }

                .bottom-divider {
                    color: #eee;
                }

                .lets-connect-btn {
                    position: absolute;
                    bottom: 60px;
                    left: 60px;
                    background: #fff;
                    border: 1px solid #000;
                    padding: 12px 24px;
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    letter-spacing: 0.1em;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transition: all 0.3s;
                    z-index: 100;
                }

                .lets-connect-btn:hover {
                    background: #000;
                    color: #fff;
                }

                .btn-arrow {
                    font-size: 1.1rem;
                    display: inline-block;
                    line-height: 1;
                }

                @media (max-width: 1100px) {
                    .container {
                        padding: 0 40px;
                    }
                    .footer-agent-header {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 40px;
                    }
                    .footer-divider-v {
                        display: none;
                    }
                    .agent-branding-col, .footer-contact-col, .footer-office-col, .footer-social-col {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .footer-nav-bar {
                        flex-wrap: wrap;
                        gap: 15px 20px;
                        padding: 0 20px;
                    }
                    .nav-divider {
                        display: none;
                    }
                    .lets-connect-btn {
                        position: relative;
                        bottom: 0;
                        left: 0;
                        margin: 0 auto 40px;
                        width: fit-content;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
