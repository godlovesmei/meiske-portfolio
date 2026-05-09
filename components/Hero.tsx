import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-subtitle neon-text-cyan">INFORMATICS STUDENT // AI & SWE</h2>
        <h1 className="hero-title glitch-hover" data-text="MEISKE">MEISKE</h1>
        <p className="hero-tagline">
          Fascinated by how large-scale products are designed and how small technical decisions create massive impact.
        </p>
      </div>
      <div className="hero-avatar">
        <div className="avatar-frame clip-cyber">
          <img src="/avatar.png" alt="Meiske" className="avatar-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
