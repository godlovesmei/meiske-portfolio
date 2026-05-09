import React from 'react';
import './biomission.css';

const BioMission = () => {
  return (
    <section className="bio-section">
      <div className="mission-container clip-diagonal">
        <div className="mission-header">
          <h2 className="neon-text-pink">MISSION DOSSIER</h2>
          <div className="status-badge">ACTIVE</div>
        </div>
        
        <div className="mission-body">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-label">CLASS</div>
              <div className="stat-value neon-text-cyan">INFORMATICS</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">BASE</div>
              <div className="stat-value neon-text-yellow">BATAM POLYTECHNIC</div>
            </div>
            <div className="stat-box">
              <div className="stat-label">SPECIALTY</div>
              <div className="stat-value">AI / SWE</div>
            </div>
          </div>
          
          <div className="bio-text">
            <p>
              I spend most of my time experimenting with ideas, building projects, and continuously improving my technical skills.
            </p>
            <p>
              Outside of academics, I enjoy exploring science, technology trends, and pushing myself to think beyond what’s taught in class. The goal? Building systems that can scale and solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioMission;
