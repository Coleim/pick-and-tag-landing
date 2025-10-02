import React from 'react';
import { motion } from 'framer-motion';
import './LegalPages.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <motion.div
          className="legal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Politique de Confidentialité</h1>
          <p className="last-updated">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

          <section>
            <h2>1. Collecte des informations</h2>
            <p>
              Pick and Tag collecte les informations suivantes lorsque vous utilisez notre application :
            </p>
            <ul>
              <li><strong>Informations d'inscription :</strong> Adresse email, nom d'utilisateur</li>
              <li><strong>Données d'utilisation :</strong> Statistiques de collecte, localisation (avec votre consentement)</li>
              <li><strong>Données techniques :</strong> Type d'appareil, version de l'application</li>
            </ul>
          </section>

          <section>
            <h2>2. Utilisation des données</h2>
            <p>Nous utilisons vos données pour :</p>
            <ul>
              <li>Fournir et améliorer nos services</li>
              <li>Calculer votre impact environnemental</li>
              <li>Maintenir le classement et les défis</li>
              <li>Vous envoyer des notifications importantes</li>
              <li>Analyser l'utilisation de l'application</li>
            </ul>
          </section>

          <section>
            <h2>3. Partage des données</h2>
            <p>
              Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
            </p>
            <ul>
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Avec des prestataires de services tiers (sous contrat de confidentialité)</li>
            </ul>
          </section>

          <section>
            <h2>4. Sécurité</h2>
            <p>
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction.
            </p>
          </section>

          <section>
            <h2>5. Vos droits</h2>
            <p>Conformément au RGPD, vous avez le droit de :</p>
            <ul>
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier des données inexactes</li>
              <li>Supprimer vos données</li>
              <li>Limiter le traitement de vos données</li>
              <li>Portabilité de vos données</li>
              <li>Vous opposer au traitement</li>
            </ul>
          </section>

          <section>
            <h2>6. Cookies et technologies similaires</h2>
            <p>
              Notre application peut utiliser des cookies et technologies similaires pour améliorer votre expérience. Vous pouvez gérer ces préférences dans les paramètres de votre appareil.
            </p>
          </section>

          <section>
            <h2>7. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, contactez-nous à :
            </p>
            <p>
              <strong>Email :</strong> privacy@pickandtag.app<br />
              <strong>Adresse :</strong> [Votre adresse]
            </p>
          </section>

          <section>
            <h2>8. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité. Les modifications importantes vous seront notifiées par email ou via l'application.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
