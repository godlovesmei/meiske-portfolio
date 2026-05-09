import React from 'react';
import './hud.css';

const HUD = () => {
  return (
    <div className="hud-container">
      {/* Mini-map */}
      <div className="hud-minimap">
        <div className="minimap-circle">
          <div className="minimap-blip"></div>
          <div className="minimap-radar"></div>
        </div>
        <div className="minimap-border"></div>
        <div className="location-text">BATAM, ID</div>
      </div>

      {/* Wanted Level */}
      <div className="hud-wanted">
        <div className="wanted-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="star filled">★</span>
          ))}
        </div>
        <div className="wanted-label neon-text-pink">WANTED</div>
      </div>

      {/* Mission Objective */}
      <div className="hud-mission hud-panel clip-cyber">
        <div className="mission-title neon-text-yellow">CURRENT OBJECTIVE</div>
        <div className="mission-desc">Build systems that scale. Solve real-world problems.</div>
      </div>
    </div>
  );
};

export default HUD;
