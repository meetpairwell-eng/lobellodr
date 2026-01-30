import React, { useState } from 'react';
import { agentInfo, images } from '../config/propertyConfig';

const ContactCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: 'I am interested in scheduling a private tour of 5610 Lobello Drive.'
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Using n8n webhook - Replace with your actual webhook URL
            const WEBHOOK_URL = 'https://n8n.meetpairwell.com/webhook/lobello-lead';

            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    property: '5610 Lobello Drive',
                    source: 'Website Tour Request',
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setIsModalOpen(false);
                    setStatus('idle');
                    setFormData({ ...formData, message: 'I am interested in scheduling a private tour of 5610 Lobello Drive.' });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <section className="contact-cta-section">
            <div className="container">
                <div className="cta-banner">
                    {/* Left Side: Agent Info */}
                    <div className="cta-left">
                        <div className="agent-image-wrapper">
                            <img src={images.headshot || agentInfo.brokerageLogo} alt={agentInfo.name} className="agent-headshot" />
                        </div>
                        <div className="agent-details">
                            <span className="agent-label">Presented By</span>
                            <h2 className="agent-name">{agentInfo.name}</h2>
                            <span className="agent-brokerage">{agentInfo.brokerage} Real Estate</span>
                        </div>
                    </div>

                    {/* Right Side: CTA Button & Contact Info */}
                    <div className="cta-right">
                        <button className="inquire-btn" onClick={() => setIsModalOpen(true)}>
                            Inquire About This Home
                        </button>
                        <div className="cta-contact-info">
                            <a href={`tel:${agentInfo.phone.replace(/\D/g, '')}`} className="cta-phone">{agentInfo.phone}</a>
                            <a href={`mailto:${agentInfo.email}`} className="cta-email">{agentInfo.email}</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="tour-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="tour-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>

                        {status === 'success' ? (
                            <div className="modal-success">
                                <h3>Request Sent</h3>
                                <p>Thank you for your interest. We will be in touch shortly to confirm your appointment.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="modal-title">Schedule a Viewing</h3>
                                <p className="modal-desc">Please provide your details below.</p>

                                <form onSubmit={handleSubmit} className="tour-form">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea
                                            name="message"
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? 'Sending...' : 'Send Request'}
                                    </button>

                                    {status === 'error' && <p className="error-msg">Something went wrong. Please try again or call us directly.</p>}
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                .contact-cta-section {
                    background-color: #f2f2f2; /* Light gray background */
                    padding: 4rem 0;
                    border-top: 1px solid #e5e5e5;
                }

                .cta-banner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                /* LEFT SIDE */
                .cta-left {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }

                .agent-image-wrapper {
                    width: 250px;
                    height: 250px;
                    overflow: hidden;
                    background: #ccc;
                    flex-shrink: 0;
                }

                .agent-headshot {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transform: scale(1.25);
                    object-position: center 30%;
                }

                .agent-details {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.2rem;
                }

                .agent-label {
                    font-family: var(--font-body);
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #888;
                    margin-bottom: 0.2rem;
                }

                .agent-name {
                    font-family: var(--font-heading);
                    font-size: 2rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #111;
                    margin: 0;
                    line-height: 1.1;
                    font-weight: 400;
                }

                .agent-brokerage {
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #666;
                    margin-top: 0.3rem;
                }

                /* RIGHT SIDE */
                .cta-right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 1rem;
                }

                .inquire-btn {
                    background: #000;
                    color: #fff;
                    border: none;
                    padding: 1.2rem 3rem;
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    min-width: 280px;
                }

                .inquire-btn:hover {
                    background: #333;
                    /* transform: translateY(-2px); Optional subtle lift */
                }

                .cta-contact-info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    gap: 0.3rem;
                }

                .cta-phone, .cta-email {
                    color: #333;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .cta-email {
                    color: #666;
                }

                .cta-phone:hover, .cta-email:hover {
                    color: #000;
                }

                /* MODAL STYLES (Keep existing) */
                .tour-modal-overlay {
                    position: fixed;
                    top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.4);
                    backdrop-filter: blur(5px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    opacity: 0;
                    animation: fadeIn 0.3s forwards;
                }

                @keyframes fadeIn { to { opacity: 1; } }

                .tour-modal {
                    background: #fff;
                    width: 100%;
                    max-width: 500px;
                    padding: 3rem;
                    position: relative;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
                    transform: translateY(20px);
                    animation: slideUp 0.4s forwards;
                }

                @keyframes slideUp { to { transform: translateY(0); } }

                .modal-close {
                    position: absolute;
                    top: 1rem; right: 1rem;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    line-height: 1;
                    cursor: pointer;
                    color: #999;
                    transition: color 0.3s;
                }
                .modal-close:hover { color: #000; }

                .modal-title {
                    font-family: var(--font-heading);
                    font-size: 1.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin: 0 0 0.5rem 0;
                    text-align: center;
                }

                .modal-desc {
                    text-align: center;
                    color: var(--color-text-light);
                    margin-bottom: 2rem;
                    font-size: 0.9rem;
                }

                .tour-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.2rem;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .form-group label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: #666;
                }

                .form-group input, .form-group textarea {
                    padding: 0.8rem;
                    border: 1px solid #ddd;
                    font-family: var(--font-body);
                    font-size: 1rem;
                    transition: border-color 0.3s;
                }
                .form-group input:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: #111;
                }

                .submit-btn {
                    margin-top: 1rem;
                    background: #111;
                    color: #fff;
                    border: none;
                    padding: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    cursor: pointer;
                    transition: opacity 0.3s;
                }
                .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
                .submit-btn:hover:not(:disabled) { opacity: 0.9; }

                .modal-success { text-align: center; padding: 2rem 0; }
                .error-msg { color: #d32f2f; font-size: 0.9rem; text-align: center; }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .contact-cta-section { padding: 4rem 0; }
                    .cta-banner {
                        flex-direction: column;
                        align-items: center;
                        gap: 2.5rem;
                        text-align: center;
                        padding: 0 1rem;
                    }

                    .cta-left {
                        flex-direction: column;
                        gap: 1.5rem;
                        text-align: center;
                    }
                    
                    .agent-details {
                        align-items: center;
                    }
                    
                    .cta-right {
                        align-items: center;
                        width: 100%;
                    }
                    
                    .inquire-btn {
                        width: 100%;
                    }
                    
                    .cta-contact-info {
                        align-items: center;
                        margin-top: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactCTA;
