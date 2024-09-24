import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon
import './Footer.css'; // Add custom styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/william-hegi-6b2659124/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <span className ="email">
        <a href="mailto:willehegi@gmail.com">willehegi@gmail.com</a>
      </span>
    </footer>
  );
}

export default Footer;
