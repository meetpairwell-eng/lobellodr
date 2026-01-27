import React from 'react';
import { agentInfo } from '../config/propertyConfig';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-cta-container">
                        <span className="footer-cta-small">For more info contact</span>
                        <h2 className="footer-cta-large">{agentInfo.name}</h2>
                    </div>

                    <div className="footer-contact-info">
                        <a href={`tel:${agentInfo.phone.replace(/\D/g, '')}`} className="footer-link">{agentInfo.phone}</a>
                        <a href={`mailto:${agentInfo.email}`} className="footer-link">{agentInfo.email}</a>
                        <div className="footer-broker">{agentInfo.brokerage}</div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <p className="copyright">&copy; {new Date().getFullYear()} Lobello Drive. All Rights Reserved.</p>
                        <a href="https://pairwell.io" target="_blank" rel="noopener noreferrer" className="powered-by">
                            Powered by Pairwell
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer {
                    background-color: var(--color-bg);
                    color: var(--color-text);
                    padding: 3rem 0 2rem 0; /* More compact */
                    border-top: 1px solid var(--color-border);
                }

                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .footer-cta-container {
                    margin-bottom: 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .footer-cta-small {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--color-text-light);
                }

                .footer-cta-large {
                    font-family: var(--font-heading);
                    font-size: clamp(1.2rem, 2vw, 1.6rem);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--color-text);
                    margin: 0;
                    line-height: 1.2;
                    font-weight: 400;
                }

                .footer-contact-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.3rem; /* Tighter gap */
                    margin-bottom: 3rem;
                }

                .footer-link {
                    color: var(--color-text-light);
                    text-decoration: none;
                    font-size: 0.95rem; /* Smaller links */
                    transition: color 0.3s ease;
                    font-weight: 300;
                    letter-spacing: 0.05em;
                }

                .footer-link:hover {
                    color: var(--color-accent);
                }

                .footer-broker {
                    margin-top: 1rem;
                    font-size: 0.8rem; /* Smaller broker text */
                    letter-spacing: 0.3em;
                    font-weight: 600;
                    color: var(--color-text);
                }

                .footer-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-border);
                    margin-bottom: 1.5rem;
                }

                .footer-bottom {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    font-size: 0.75rem;
                    color: #666;
                }

                .copyright {
                    margin: 0;
                    letter-spacing: 0.05em;
                }

                .powered-by {
                    color: #000;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.25em;
                    font-size: 0.85rem;
                    transition: opacity 0.3s;
                    margin-top: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    font-weight: 500;
                }
                
                .pairwell-footer-logo {
                    width: 32px;
                    height: 32px;
                    color: #000; /* For SVG currentColor */
                }

                .powered-by:hover {
                    opacity: 0.7;
                }

                @media (min-width: 768px) {
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .powered-by {
                        margin-top: 0;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
