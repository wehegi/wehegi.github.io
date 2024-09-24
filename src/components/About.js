import React from 'react';
import './About.css'; // Add a new CSS file for About component styles

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a highly motivated and fast-learning individual with a passion for expanding my skillset. My education and experience give me the foundation needed to work well with others and thrive in a highly techincal environment. My interests are currently in full-stack development or data analysis, but I am always open to new opportunities.
          </p>
        </div>
        <div className="about-image">
          <img src="/image.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
