"use client";
import React from 'react';
import {
  SiTypescript, SiPython, SiPhp, SiJavascript,
  SiNextdotjs, SiReact, SiFastapi, SiLaravel,
  SiMysql, SiGit
} from 'react-icons/si';
import { FaBrain, FaDiagramProject } from 'react-icons/fa6';
import { useReveal } from '../hooks/useReveal';
import './techstack.css';

const techData = [
  {
    category: 'LANGUAGES',
    items: [
      { name: 'TypeScript', icon: <SiTypescript size={20} />, color: 'var(--neon-cyan)' },
      { name: 'Python', icon: <SiPython size={20} />, color: 'var(--neon-yellow)' },
      { name: 'PHP', icon: <SiPhp size={20} />, color: '#777BB4' },
      { name: 'JavaScript', icon: <SiJavascript size={20} />, color: '#F7DF1E' }
    ]
  },
  {
    category: 'FRAMEWORKS',
    items: [
      { name: 'Next.js', icon: <SiNextdotjs size={20} />, color: '#ffffff' },
      { name: 'React', icon: <SiReact size={20} />, color: 'var(--neon-cyan)' },
      { name: 'FastAPI', icon: <SiFastapi size={20} />, color: '#009688' },
      { name: 'Laravel', icon: <SiLaravel size={20} />, color: 'var(--neon-pink)' }
    ]
  },
  {
    category: 'AI & DATA',
    items: [
      { name: 'YOLO11', icon: <FaBrain size={20} />, color: 'var(--neon-yellow)' },
      { name: 'RAG Pipeline', icon: <FaDiagramProject size={20} />, color: '#00d4ff' },
      { name: 'MySQL', icon: <SiMysql size={24} />, color: '#4479A1' },
      { name: 'Git', icon: <SiGit size={20} />, color: '#F05032' }
    ]
  }
];

const TechStack = () => {
  const { ref, visible } = useReveal(0.1);

  return (
    <section className="tech-section" ref={ref}>
      <div className={`tech-header reveal-up ${visible ? 'visible' : ''}`}>
        <h2 className="neon-text-pink glitch-hover" data-text="SYSTEM ARSENAL">SYSTEM ARSENAL</h2>
        <div className="header-line pink-line"></div>
      </div>

      <div className="tech-container">
        {techData.map((group, gIdx) => (
          <div key={gIdx} className={`tech-group reveal-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${gIdx * 0.15}s` }}>
            <h3 className="tech-category-title">[{group.category}]</h3>
            <div className="tech-grid">
              {group.items.map((tech, i) => (
                <div
                  key={i}
                  className="tech-badge"
                  style={{ '--i': i, '--tech-color': tech.color } as React.CSSProperties}
                >
                  <div className="tech-icon-wrapper">
                    <div className="tech-icon-ring"></div>
                    <div className="tech-icon-inner">
                      <span className="tech-abbr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {tech.icon}
                      </span>
                    </div>
                  </div>
                  <div className="tech-info">
                    <span className="tech-name">{tech.name}</span>
                    <div className="tech-level-bar">
                      <div className="tech-level-fill"></div>
                    </div>
                  </div>
                  <div className="tech-corner top-right"></div>
                  <div className="tech-corner bottom-left"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;