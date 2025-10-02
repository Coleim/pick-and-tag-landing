import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EmailForm.css';

const EmailForm = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [platform, setPlatform] = useState('android');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Veuillez saisir votre adresse email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Veuillez saisir une adresse email valide');
      return;
    }

    if (platform !== 'android') {
      setError('La bêta est actuellement disponible uniquement sur Android');
      return;
    }

    setIsLoading(true);

    try {
      // Utilisation de Formspree pour la collecte d'emails
      const response = await fetch('https://formspree.io/f/YOUR_BETA_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          platform,
          type: 'beta_signup',
          message: `Inscription à la bêta ${platform}`
        })
      });

      if (response.ok) {
        onEmailSubmit(true);
        setEmail('');
        setPlatform('android');
      } else {
        throw new Error('Erreur lors de l\'inscription');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form 
      className="email-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="form-group">
        <input
          type="email"
          className={`input ${error ? 'error' : ''}`}
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </div>

      <div className="platform-selector">
        <label className="platform-label">
          <input
            type="radio"
            name="platform"
            value="android"
            checked={platform === 'android'}
            onChange={(e) => setPlatform(e.target.value)}
            disabled={isLoading}
          />
          <span className="platform-option android">
            <span className="platform-icon">🤖</span>
            Android
          </span>
        </label>
        
        <label className="platform-label">
          <input
            type="radio"
            name="platform"
            value="ios"
            checked={platform === 'ios'}
            onChange={(e) => setPlatform(e.target.value)}
            disabled={isLoading}
          />
          <span className="platform-option ios">
            <span className="platform-icon">🍎</span>
            iOS
          </span>
        </label>
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
            Inscription en cours...
          </>
        ) : (
          'Rejoindre la bêta'
        )}
      </motion.button>

      <p className="form-note">
        📱 <strong>Android uniquement</strong> pour le moment. 
        Un email de confirmation vous sera envoyé.
      </p>
    </motion.form>
  );
};

export default EmailForm;
