import React from 'react';
import { agentInfo, propertyInfo } from '../config/propertyConfig';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Compass Branding */}
                    <div className="footer-brand">
                        <a href="https://www.compass.com" target="_blank" rel="noopener noreferrer" className="brand-link">
                            {agentInfo.brokerageLogo ? (
                                <img src={agentInfo.brokerageLogo} alt="Compass" className="broker-logo-img" />
                            ) : (
                                <h1 className="brokerage-name">COMPASS</h1>
                            )}
                        </a>
                    </div>

                    <div className="footer-main-content">
                        {/* Agent Section */}
                        <div className="footer-agent-info">
                            <h3>{agentInfo.name}</h3>
                            <p className="agent-title">Real Estate Agent</p>
                        </div>

                        {/* Contact Info Grid */}
                        <div className="footer-info-grid">
                            <div className="footer-info-col">
                                <h4>CONTACT</h4>
                                <a href={`tel:${agentInfo.phone.replace(/\D/g, '')}`} className="footer-info-link">
                                    {agentInfo.phone}
                                </a>
                                <a href={`mailto:${agentInfo.email}`} className="footer-info-link">
                                    {agentInfo.email}
                                </a>
                            </div>

                            <div className="footer-info-col">
                                <h4>OFFICE</h4>
                                {agentInfo.officePhone && (
                                    <a href={`tel:${agentInfo.officePhone.replace(/\D/g, '')}`} className="footer-info-link">
                                        {agentInfo.officePhone}
                                    </a>
                                )}
                                <p className="footer-info-text">
                                    {agentInfo.address}
                                </p>
                            </div>

                            <div className="footer-info-col">
                                <h4>FOLLOW US</h4>
                                <div className="footer-social-icons">
                                    {agentInfo.socialMedia?.facebook && (
                                        <a href={agentInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                        </a>
                                    )}
                                    {agentInfo.socialMedia?.instagram && (
                                        <a href={agentInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-legal-links">
                        <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" target="_blank" rel="noopener noreferrer">Texas Real Estate Commission Consumer Protection Notice</a>
                        <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/IABS%201-0.pdf" target="_blank" rel="noopener noreferrer">Texas Real Estate Commission Information About Brokerage Services</a>
                    </div>

                    <div className="footer-disclaimer">
                        <p>
                            {agentInfo.name} is a real estate agent affiliated with Compass. Compass is a licensed real estate broker and abides by all applicable equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.
                        </p>
                    </div>
                </div>

                <div className="footer-pairwell">
                    <span className="pairwell-text">Powered by Pairwell</span>
                    <span className="footer-separator">|</span>
                    <span className="copyright-text">Copyright © {currentYear} {propertyInfo.address}</span>
                </div>
            </div>

            <style>{`
                .footer {
                    background: #fff;
                    color: #333;
                    padding: 60px 0 30px;
                    border-top: 1px solid var(--color-border);
                    position: relative;
                    z-index: 10;
                }

                .footer-brand {
                    text-align: center;
                    margin-bottom: 40px;
                    padding-bottom: 30px;
                    border-bottom: 1px solid #e5e5e5;
                }

                .brokerage-name {
                    font-family: var(--font-heading);
                    font-size: 2rem;
                    letter-spacing: 0.5em;
                    font-weight: 300;
                    color: #000;
                    text-transform: uppercase;
                    margin: 0;
                }

                .broker-logo-img {
                    height: 35px;
                    width: auto;
                    display: inline-block;
                }

                .footer-main-content {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 50px;
                    margin-bottom: 40px;
                }

                .footer-agent-info {
                    border-right: 1px solid #e5e5e5;
                    padding-right: 30px;
                    padding-left: 50px; /* Reduced shift to give more room */
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    text-align: left;
                    white-space: nowrap; /* Force one line */
                }


                .footer-agent-info h3 {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 400;
                    color: #000;
                    margin-bottom: 5px;
                    letter-spacing: 0.05em;
                }

                .agent-title {
                    font-size: 0.85rem;
                    color: #666;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    margin: 0;
                }

                .footer-info-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 35px;
                    align-items: start;
                }

                .footer-info-col h4 {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    color: #000;
                    margin-bottom: 15px;
                    margin-top: 0;
                    text-transform: uppercase;
                }

                .footer-info-link {
                    display: block;
                    color: #666;
                    font-size: 0.95rem;
                    text-decoration: none;
                    margin-bottom: 8px;
                    transition: color 0.3s ease;
                    font-weight: 300;
                }

                .footer-info-link:hover {
                    color: var(--color-accent);
                }

                .footer-info-text {
                    color: #666;
                    font-size: 0.95rem;
                    line-height: 1.5;
                    margin: 0;
                    font-weight: 300;
                }

                .footer-social-icons {
                    display: flex;
                    gap: 12px;
                }

                .social-icon {
                    width: 32px;
                    height: 32px;
                    border: 1px solid #e0e0e0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                    transition: all 0.3s ease;
                }

                .social-icon:hover {
                    background: #f5f5f5;
                    color: #000;
                    border-color: #999;
                }

                .footer-legal-links {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e5e5;
                }

                .footer-legal-links a {
                    color: #999;
                    text-decoration: underline;
                    font-size: 0.8rem;
                    transition: color 0.3s ease;
                }

                .footer-legal-links a:hover {
                    color: #666;
                }

                .footer-disclaimer {
                    max-width: 1000px;
                    margin: 0 auto 30px;
                    text-align: center;
                }

                .footer-disclaimer p {
                    font-size: 0.7rem;
                    line-height: 1.8;
                    color: #999;
                    margin: 0;
                }

                .footer-pairwell {
                    text-align: center;
                    padding-top: 25px;
                    border-top: 1px solid #e5e5e5;
                    font-size: 0.75rem;
                    color: #999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 15px;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                .pairwell-text {
                    color: #333;
                    font-weight: 600;
                }

                .footer-separator {
                    color: #ddd;
                }

                @media (max-width: 900px) {
                    .footer-main-content {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .footer-agent-info {
                        border-right: none;
                        border-bottom: 1px solid #e5e5e5;
                        padding-right: 0;
                        padding-bottom: 30px;
                    }

                    .footer-info-grid {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }

                    .footer-info-col {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .footer-social-icons {
                        justify-content: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
