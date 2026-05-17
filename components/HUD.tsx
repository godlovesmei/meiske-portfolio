"use client";
import React from 'react';
import { useActiveSection } from '../hooks/useReveal';
import './hud.css';

const sections = ['home', 'bio', 'projects', 'tech', 'contact'];
const sectionLabels: Record<string, string> = {
  home: 'SECTOR_00',
  bio: 'SECTOR_01',
  projects: 'SECTOR_02',
  tech: 'SECTOR_03',
  contact: 'SECTOR_04',
};

const HUD = () => {
  const active = useActiveSection(sections);

  return (
    <div className="hud-container">
      {/* Desktop Minimap */}
      <div className="hud-minimap">
        <div className="minimap-circle">
          <div className="minimap-blip"></div>
          <div className="minimap-radar"></div>
        </div>
        <div className="minimap-border"></div>
        <div className="location-text">BATAM, ID</div>
      </div>

      {/* Desktop Status */}
      <div className="hud-status">
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">AVAILABLE</span>
        </div>
        <div className="status-label neon-text-cyan">STATUS</div>
      </div>

      {/* Desktop Mission - FIXED positioning */}
      <div className="hud-mission hud-panel clip-cyber">
        <div className="mission-title neon-text-yellow">CURRENT OBJECTIVE</div>
        <div className="mission-desc">Build systems that scale. Solve real-world problems.</div>
      </div>

      {/* Mobile Top Bar */}
      <div className="hud-mobile-top">
        <div className="mobile-bar">
          <span className="mobile-section">{sectionLabels[active] || 'SECTOR_00'}</span>
          <span className="mobile-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default HUD;