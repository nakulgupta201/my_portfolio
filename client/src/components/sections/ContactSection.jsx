import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

const ContactSection = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: '',
  });

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ submitting: false, success: null, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g., alex@company.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus({ submitting: true, success: null, message: '' });

    try {
      const baseUrl = import.meta.env.VITE_API_URL || '/api';
      const endpoint = baseUrl.endsWith('/contact') ? baseUrl : `${baseUrl}/contact`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: data.message || 'Thank you! Your message was received successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          message:
            data.message ||
            'Submission failed. Please check that the Express backend and MongoDB are running.',
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        message:
          'Could not connect to backend server. Make sure the Express server is running on port 5000.',
      });
    }
  };

  const dismissAlert = () => {
    setStatus({ submitting: false, success: null, message: '' });
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="container">
        <header className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Contact &amp; Inquiries</h2>
          <p className="section-subtitle">
            Have an internship opportunity, collaboration, or question? Send a message directly
            through this form.
          </p>
        </header>

        <div className="contact-layout">
          <div className="contact-info-panel">
            <div className="contact-card-box">
              <h3>Let's Connect</h3>
              <p>
                I am actively seeking software engineering internships, technical collaborations,
                and open-source contributions.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <div className="contact-detail-icon">📧</div>
                  <div>
                    <div className="contact-detail-label">Email</div>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-detail-value"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      title={`Send email via Gmail`}
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon">📍</div>
                  <div>
                    <div className="contact-detail-label">Location</div>
                    <div className="contact-detail-value">{personal.location}</div>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-detail-icon">🏛️</div>
                  <div>
                    <div className="contact-detail-label">University</div>
                    <div className="contact-detail-value">{personal.university}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {status.success === true && (
              <div className="alert-box alert-success" role="alert" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>✅</span>
                  <div>{status.message}</div>
                </div>
                <button
                  type="button"
                  onClick={dismissAlert}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'inherit', padding: '0 0.4rem', lineHeight: 1 }}
                  aria-label="Dismiss notification"
                  title="Dismiss notification"
                >
                  ✕
                </button>
              </div>
            )}

            {status.success === false && (
              <div className="alert-box alert-error" role="alert" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>⚠️</span>
                  <div>{status.message}</div>
                </div>
                <button
                  type="button"
                  onClick={dismissAlert}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', color: 'inherit', padding: '0 0.4rem', lineHeight: 1 }}
                  aria-label="Dismiss error"
                  title="Dismiss error"
                >
                  ✕
                </button>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  <span>Your Name</span>
                  <span className="form-label-required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g., Alex Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.submitting}
                />
                {errors.name && <span className="error-hint">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  <span>Email Address</span>
                  <span className="form-label-required">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="e.g., alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.submitting}
                />
                {errors.email && <span className="error-hint">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  <span>Subject</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g., Internship Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status.submitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  <span>Message</span>
                  <span className="form-label-required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  placeholder="Hi Nakul, I reviewed your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status.submitting}
                />
                {errors.message && <span className="error-hint">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.submitting}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {status.submitting ? (
                  <>
                    <span className="spinner" />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <span>✉️ Send Message to Connect</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
