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
                <div className="cta-grid">
                    <div className="cta-image-col">
                        {/* Fallback to gray box if headshot fails or isn't set, but try to use image from config */}
                        <div className="agent-image-wrapper">
                            <img src={images.headshot || agentInfo.brokerageLogo} alt={agentInfo.name} className="agent-headshot" />
                        </div>
                    </div>

                    <div className="cta-content-col">
                        <h2 className="cta-title">Contact {agentInfo.name}</h2>

                        <p className="cta-text">
                            Call to arrange a private viewing of the residence.
                        </p>

                        <div className="cta-contact-details">
                            <a href={`tel:${agentInfo.phone.replace(/\D/g, '')}`} className="cta-link">{agentInfo.phone}</a>
                            <span className="separator">•</span>
                            <a href={`mailto:${agentInfo.email}`} className="cta-link">{agentInfo.email}</a>
                        </div>

                        <button className="cta-btn" onClick={() => setIsModalOpen(true)}>
                            Request a Tour
                        </button>
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
                    background-color: #f9f9f9; /* Slight off-white to distinguish section */
                    padding: 6rem 0;
                    border-top: 1px solid var(--color-border);
                }

                .cta-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 4rem;
                    align-items: center;
                    max-width: 900px;
                    margin: 0 auto;
                }
                
                .cta-image-col {
                    display: flex;
                    justify-content: flex-end;
                }
                
                .agent-image-wrapper {
                    width: 250px;
                    height: 300px;
                    overflow: hidden;
                    background: #e0e0e0;
                    position: relative;
                }
                
                .agent-headshot {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    /* Noir filter for consistency with site style if desired, remove if color preferred */
                    filter: grayscale(100%) contrast(1.1); 
                }

                .cta-content-col {
                    text-align: left;
                }

                .cta-title {
                    font-family: var(--font-heading);
                    font-size: 2.5rem;
                    margin: 0 0 0.5rem 0;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                
                .cta-subtitle {
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--color-accent);
                    margin: 0 0 2rem 0;
                }

                .cta-text {
                    font-family: var(--font-body);
                    font-size: 1rem;
                    color: var(--color-text-light);
                    line-height: 1.6;
                    margin-bottom: 2rem;
                    max-width: 450px;
                }
                
                .cta-contact-details {
                    margin-bottom: 2rem;
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                }
                
                .cta-link {
                    color: var(--color-text);
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .cta-link:hover { color: var(--color-accent); }
                
                .separator { margin: 0 1rem; color: #ccc; }

                .cta-btn {
                    background: #111;
                    color: #fff;
                    border: 1px solid #111;
                    padding: 1rem 2.5rem;
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .cta-btn:hover {
                    background: transparent;
                    color: #111;
                }
                
                /* MODAL STYLES */
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

                @media (max-width: 768px) {
                    .contact-cta-section { padding: 4rem 0; }
                    .cta-grid {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                        text-align: center;
                    }
                    .cta-image-col { justify-content: center; }
                    .cta-content-col { text-align: center; }
                    .cta-title { font-size: 2rem; }
                    .cta-text { margin-left: auto; margin-right: auto; }
                    .tour-modal { padding: 2rem; width: 90%; }
                }
            `}</style>
        </section>
    );
};

export default ContactCTA;
