"use client";
import { useEffect } from 'react';
import HUD from '../components/HUD';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';

const BioMission = dynamic(() => import('../components/BioMission'), { ssr: true });
const Projects = dynamic(() => import('../components/Projects'), { ssr: true });
const TechStack = dynamic(() => import('../components/TechStack'), { ssr: true });
const Contact = dynamic(() => import('../components/Contact'), { ssr: true });

export default function Home() {
  // Desktop cursor glow
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main>
      <HUD />

      {/* Subtle background axis lines */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.08
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          width: '1px',
          height: '100%',
          background: 'var(--neon-cyan)'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: '20%',
          width: '1px',
          height: '100%',
          background: 'var(--neon-pink)'
        }} />
      </div>

      <section id="home"><Hero /></section>
      <section id="bio"><BioMission /></section>
      <section id="projects"><Projects /></section>
      <section id="tech"><TechStack /></section>
      <section id="contact"><Contact /></section>

      <footer style={{
        paddingTop: '60px',
        paddingBottom: '120px',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        marginTop: '60px',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-body)',
          letterSpacing: '4px',
          fontSize: '0.875rem',
          textTransform: 'uppercase'
        }}>
          SYSTEM_READY // [MEISKE.DEV] // 2026
        </p>
      </footer>
    </main>
  );
}