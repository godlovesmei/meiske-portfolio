"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useScramble } from '../hooks/useScramble';
import Image from 'next/image';
import './hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const avatarRef = useRef<HTMLDivElement>(null);
  const title = useScramble('MEISKE', loaded, 1500);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!avatarRef.current) return;
    const rect = avatarRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => setMousePos({ x: 0, y: 0 });

  return (
    <section className="hero-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="hero-content">
        <h2 className={`hero-subtitle neon-text-cyan ${loaded ? 'animate-in' : ''}`}>
          INFORMATICS STUDENT // AI & SWE
        </h2>
        <h1 className={`hero-title ${loaded ? 'animate-in' : ''}`} data-text={title}>
          {title}
        </h1>
        <p className={`hero-tagline ${loaded ? 'animate-in' : ''}`}>
          Fascinated by how large-scale products are designed and how small technical decisions create massive impact.
        </p>
        <div className={`hero-actions ${loaded ? 'animate-in' : ''}`}>
          <a
            href="/Meiske_CV.pdf"
            className="btn-demo magnetic-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon">⬇</span> DOWNLOAD RESUME
          </a>
        </div>
      </div>

      <div
        className={`hero-avatar ${loaded ? 'animate-in' : ''}`}
        ref={avatarRef}
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
        }}
      >
        <div className="avatar-frame">
          <Image
            src="/profile.jpeg"
            alt="Meiske Real"
            className="avatar-img real-img"
            fill
            sizes="(max-width: 768px) 250px, 400px"
          />
          <Image
            src="/avatar.png"
            alt="Meiske Cyberpunk"
            className="avatar-img cyber-img"
            fill
            sizes="(max-width: 768px) 250px, 400px"
          />
          <div className="scan-lines" />
          <div className="corner-bracket tl" />
          <div className="corner-bracket tr" />
          <div className="corner-bracket bl" />
          <div className="corner-bracket br" />
          <div className="scan-sweep" />
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero;