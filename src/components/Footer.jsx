import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareFacebook, faSquareInstagram, faSquareXTwitter}from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div id='copyright'>
        <p>2024 My Website. All rights reserved.</p>
        <ul>
          <li>Contactez-nous</li>
          <li>Mentions légales</li>
          <li>Conditions générales d'utilisation</li>
        </ul>

      {/* Ajoutez reseaux sociaux avec fausse adresse de reseaux */}
      {/* Vous pouvez utiliser le code suivant pour les reseaux sociaux */}

      <div id='Reseaux'>
        <a href="#"><FontAwesomeIcon className='icon-sociaux' icon={faSquareFacebook} /><span className='social-text'>Adresse Facebook</span></a>
        <a href="#"><FontAwesomeIcon className='icon-sociaux'icon={faSquareXTwitter} /><span className='social-text'>Adresse Twitter</span></a>
        <a href="#"><FontAwesomeIcon className='icon-sociaux'icon={faSquareInstagram} /><span className='social-text'>Adresse Instagram</span></a>
      </div>
    </div>
  )
}

export default Footer