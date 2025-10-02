import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Utilisation de Formspree (service gratuit)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Une question ? Une suggestion ? N'hésitez pas à nous écrire !
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>contact@pickandtag.app</p>
            </div>

            <div className="info-card">
              <div className="info-icon">💬</div>
              <h3>Support</h3>
              <p>Réponse sous 24h</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🚀</div>
              <h3>Bêta</h3>
              <p>Rejoignez l'aventure dès maintenant</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✅</div>
                <h3>Message envoyé !</h3>
                <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                <button 
                  className="btn btn-secondary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="beta">Rejoindre la bêta</option>
                    <option value="bug">Signaler un bug</option>
                    <option value="feature">Suggestion de fonctionnalité</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input textarea"
                    rows="5"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {error && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
