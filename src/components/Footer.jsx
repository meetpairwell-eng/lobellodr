import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-cta-container">
                        <span className="footer-cta-small">For more info contact</span>
                        <h2 className="footer-cta-large">Cole Swearingen</h2>
                    </div>

                    <div className="footer-contact-info">
                        <a href="tel:9729719586" className="footer-link">972.971.9586</a>
                        <a href="mailto:cole.swearingen@compass.com" className="footer-link">cole.swearingen@compass.com</a>
                        <div className="footer-broker">COMPASS</div>
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
                    background-color: #ffffff;
                    color: #111;
                    padding: 3rem 0 2rem 0; /* More compact */
                    border-top: 1px solid #eaeaea;
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
                    color: #666;
                }

                .footer-cta-large {
                    font-family: var(--font-heading);
                    font-size: clamp(1.2rem, 2vw, 1.6rem);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #000;
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
                    color: #333;
                    text-decoration: none;
                    font-size: 0.95rem; /* Smaller links */
                    transition: color 0.3s ease;
                    font-weight: 300;
                    letter-spacing: 0.05em;
                }

                .footer-link:hover {
                    color: #000;
                }

                .footer-broker {
                    margin-top: 1rem;
                    font-size: 0.8rem; /* Smaller broker text */
                    letter-spacing: 0.3em;
                    font-weight: 600;
                    color: #000;
                }

                .footer-divider {
                    width: 100%;
                    height: 1px;
                    background: rgba(0, 0, 0, 0.08);
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
                    color: #888;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.65rem;
                    transition: color 0.3s;
                    margin-top: 1rem;
                }
                
                .powered-by:hover {
                    color: #000;
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
