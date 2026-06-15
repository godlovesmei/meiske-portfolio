"use client";
import React, { useState, useEffect } from 'react';
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((scrollTop / docHeight) * 100, 100));
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hud-container">
      {/* Scroll Progress Bar */}
      <div className="hud-scroll-progress" style={{ width: `${progress}%` }} />

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